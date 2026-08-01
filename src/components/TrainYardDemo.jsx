import { useCallback, useEffect, useRef, useState } from 'react'
import { useI18n } from '../i18n/index.jsx'

/*
 * The train yard validator, compiled from C.
 *
 * Built around scenarios rather than a bare form. The rules are a small
 * constraint system and the interesting part is not that a car can be added —
 * it is that removing a car is refused when the train it would leave behind is
 * unsafe. An add-only form never shows that.
 *
 * Every verdict, and the reason for it, comes from the C. Nothing here decides
 * whether a car is allowed.
 */

const TYPE_KEYS = ['engine', 'food', 'wood', 'oil']
const MAX_TOTAL_WEIGHT = 20000

/* Matches enum RejectReason in train_yard.h. */
const REASON_KEYS = [
  'none', 'nullTrain', 'trainFull', 'badType', 'badWeight', 'totalWeight',
  'engineOrder', 'oilFirstFreight', 'woodOilAdjacent', 'pullCapacity',
  'badIndex', 'lastEngine',
]

/* Each scenario builds a state, then names the move to try and what the rules
   should say about it. The cars are added through the C like any other. */
const SCENARIOS = [
  {
    id: 'oilFirst',
    setup: [[0, 5000]],
    try: { kind: 'add', type: 3, weight: 500 },
  },
  {
    id: 'buffer',
    setup: [[0, 5000], [2, 400], [1, 300], [3, 400]],
    try: { kind: 'remove', index: 2 },
  },
  {
    id: 'capacity',
    setup: [[0, 5000], [1, 4000]],
    try: { kind: 'add', type: 1, weight: 2000 },
  },
  {
    id: 'engineOrder',
    setup: [[0, 5000], [1, 500]],
    try: { kind: 'add', type: 0, weight: 5000 },
  },
]

const fill = (template, values) =>
  Object.entries(values).reduce((s, [k, v]) => s.replaceAll(`{${k}}`, v), template)

export default function TrainYardDemo() {
  const api = useRef(null)
  const train = useRef(null)
  const { t } = useI18n()
  const [ready, setReady] = useState(false)
  const [failed, setFailed] = useState(false)
  const [type, setType] = useState(0)
  const [weight, setWeight] = useState(5000)
  const [state, setState] = useState(null)
  const [message, setMessage] = useState('')
  const [reason, setReason] = useState(null)
  const [activeScenario, setActiveScenario] = useState(null)

  // Reads every value back out of the C struct — nothing is tracked in React.
  const sync = useCallback(() => {
    const a = api.current
    const tr = train.current
    const cars = []
    for (let i = 0; i < a.carCount(tr); i += 1) {
      cars.push({ type: a.carType(tr, i), weight: a.carWeight(tr, i) })
    }
    setState({
      cars,
      carCount: a.carCount(tr),
      numEngines: a.numEngines(tr),
      totalWeight: a.totalWeight(tr),
      capacity: a.pullCapacity(tr),
      safe: a.isSafe(tr) === 1,
    })
  }, [])

  useEffect(() => {
    let cancelled = false
    let destroy = null

    const wasmUrl = `${import.meta.env.BASE_URL}wasm/train_yard.js`
    const importAtRuntime = new Function('url', 'return import(url)')

    importAtRuntime(wasmUrl)
      .then((mod) => mod.default())
      .then((M) => {
        if (cancelled) return
        const w = (n, ret, args) => M.cwrap(n, ret, args)
        api.current = {
          create: w('ty_create', 'number', []),
          destroy: w('ty_destroy', null, ['number']),
          addCar: w('ty_add_car', 'number', ['number', 'number', 'number']),
          removeCar: w('ty_remove_car', 'number', ['number', 'number']),
          isSafe: w('ty_is_safe', 'number', ['number']),
          pullCapacity: w('ty_pull_capacity', 'number', ['number']),
          carCount: w('ty_car_count', 'number', ['number']),
          numEngines: w('ty_num_engines', 'number', ['number']),
          totalWeight: w('ty_total_weight', 'number', ['number']),
          carType: w('ty_car_type', 'number', ['number', 'number']),
          carWeight: w('ty_car_weight', 'number', ['number', 'number']),
          lastReason: w('ty_last_reject_reason', 'number', []),
        }
        train.current = api.current.create()
        destroy = () => api.current.destroy(train.current)
        setReady(true)
        sync()
      })
      .catch(() => {
        if (!cancelled) setFailed(true)
      })

    return () => {
      cancelled = true
      if (destroy) destroy()
    }
  }, [sync])

  const typeLabel = (i) => t(`demo.types.${TYPE_KEYS[i]}`)
  // The reason is a fragment substituted into a sentence, so it needs the
  // terminator its language uses — a full stop is wrong in Chinese and Hindi.
  const reasonLabel = (code) =>
    `${t(`demo.reasons.${REASON_KEYS[code] ?? 'none'}`)}${t('demo.sentenceEnd')}`

  const fresh = () => {
    api.current.destroy(train.current)
    train.current = api.current.create()
  }

  const handleAdd = (e) => {
    e.preventDefault()
    setActiveScenario(null)
    const rc = api.current.addCar(train.current, type, Number(weight))
    const code = rc === 0 ? 0 : api.current.lastReason()
    setReason(rc === 0 ? null : code)
    setMessage(
      fill(t(rc === 0 ? 'demo.added' : 'demo.rejectedBecause'), {
        type: typeLabel(type),
        weight,
        reason: reasonLabel(code),
      }),
    )
    sync()
  }

  const handleRemove = (index) => {
    setActiveScenario(null)
    const rc = api.current.removeCar(train.current, index)
    const code = rc === 0 ? 0 : api.current.lastReason()
    setReason(rc === 0 ? null : code)
    setMessage(
      fill(t(rc === 0 ? 'demo.removed' : 'demo.removeRejectedBecause'), {
        i: index,
        reason: reasonLabel(code),
      }),
    )
    sync()
  }

  const handleReset = () => {
    fresh()
    setActiveScenario(null)
    setReason(null)
    setMessage(t('demo.resetDone'))
    sync()
  }

  /* Builds the scenario's starting train, then performs the move it is meant to
     demonstrate — through the C, so the verdict is the real one. */
  const runScenario = (scenario) => {
    fresh()
    scenario.setup.forEach(([carType, carWeight]) =>
      api.current.addCar(train.current, carType, carWeight),
    )

    let rc
    if (scenario.try.kind === 'add') {
      rc = api.current.addCar(train.current, scenario.try.type, scenario.try.weight)
    } else {
      rc = api.current.removeCar(train.current, scenario.try.index)
    }

    const code = rc === 0 ? 0 : api.current.lastReason()
    setActiveScenario(scenario.id)
    setReason(rc === 0 ? null : code)
    setMessage(
      rc === 0
        ? t(`demo.scenarios.${scenario.id}.accepted`)
        : fill(t(`demo.scenarios.${scenario.id}.rejected`), { reason: reasonLabel(code) }),
    )
    sync()
  }

  if (failed) return <p className="demo-note">{t('demo.failed')}</p>
  if (!ready || !state) return <p className="demo-note">{t('demo.loading')}</p>

  const freight = state.cars
    .filter((c) => c.type !== 0)
    .reduce((sum, c) => sum + c.weight, 0)

  return (
    <div className="demo">
      <p className="demo-hint">{t('demo.intro')}</p>

      <div className="scenarios">
        <h3 className="mono scenarios-title">{t('demo.tryThis')}</h3>
        <div className="scenario-row">
          {SCENARIOS.map((s) => (
            <button
              key={s.id}
              type="button"
              className={activeScenario === s.id ? 'is-active' : undefined}
              onClick={() => runScenario(s)}
            >
              {t(`demo.scenarios.${s.id}.label`)}
            </button>
          ))}
        </div>
      </div>

      <form className="demo-controls" onSubmit={handleAdd}>
        <div className="demo-field">
          <label htmlFor="car-type">{t('demo.carType')}</label>
          <select id="car-type" value={type} onChange={(e) => setType(Number(e.target.value))}>
            {TYPE_KEYS.map((k, i) => (
              <option key={k} value={i}>{t(`demo.types.${k}`)}</option>
            ))}
          </select>
        </div>
        <div className="demo-field">
          <label htmlFor="car-weight">{t('demo.weight')}</label>
          <input
            id="car-weight"
            type="number"
            min="1"
            max="20000"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <button className="btn solid" type="submit">{t('demo.addCar')}</button>
        <button className="btn" type="button" onClick={handleReset}>{t('demo.reset')}</button>
      </form>

      <p className="demo-status" role="status" aria-live="polite">{message}</p>

      <div className="demo-readout">
        <div className="demo-stat">
          <span className="k">{t('demo.cars')}</span>
          <span className="v">{state.carCount}</span>
        </div>
        <div className="demo-stat">
          <span className="k">{t('demo.engines')}</span>
          <span className="v">{state.numEngines}</span>
        </div>
        <div className="demo-stat">
          <span className="k">{t('demo.totalWeight')}</span>
          <span className="v">
            {state.totalWeight.toLocaleString()} / {MAX_TOTAL_WEIGHT.toLocaleString()}
          </span>
        </div>
        <div className="demo-stat">
          <span className="k">{t('demo.freightCapacity')}</span>
          <span className="v">
            {freight.toLocaleString()} / {state.capacity.toLocaleString()}
          </span>
        </div>
        <div className={`demo-stat verdict ${state.safe ? 'is-safe' : 'is-unsafe'}`}>
          <span className="k">{t('demo.status')}</span>
          <span className="v">{state.safe ? t('demo.safe') : t('demo.unsafe')}</span>
        </div>
      </div>

      {state.cars.length > 0 && (
        <ol className="demo-train">
          {state.cars.map((car, i) => (
            <li key={i} className={car.type === 0 ? 'is-engine' : ''}>
              <span className="idx">{i}</span>
              <span className="ct">{typeLabel(car.type)}</span>
              <span className="cwt">{car.weight.toLocaleString()}</span>
              <button
                type="button"
                onClick={() => handleRemove(i)}
                aria-label={fill(t('demo.removeCar'), {
                  i,
                  type: typeLabel(car.type),
                  weight: car.weight,
                })}
              >
                {t('demo.remove')}
              </button>
            </li>
          ))}
        </ol>
      )}

      <div className="demo-rules">
        <h3>{t('demo.rulesTitle')}</h3>
        <ul>
          {t('demo.rules').map((r, i) => (
            // The rule the C just cited is marked, so a rejection points at the
            // line that caused it instead of leaving it to be guessed.
            <li key={r} className={reason !== null && RULE_FOR_REASON[reason] === i ? 'is-cited' : undefined}>
              {r}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

/* Maps a reject reason onto the rule it corresponds to in the displayed list. */
const RULE_FOR_REASON = {
  6: 0,  // engine order
  5: 1,  // total weight
  9: 2,  // pull capacity
  8: 3,  // wood/oil adjacency
  7: 4,  // oil as first freight
}
