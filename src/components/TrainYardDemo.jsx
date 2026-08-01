import { useEffect, useRef, useState, useCallback } from 'react'
import { useI18n } from '../i18n/index.jsx'

/* Type ids match the TYPE_* constants in train_yard.h. */
const TYPE_KEYS = ['engine', 'food', 'wood', 'oil']
const MAX_TOTAL_WEIGHT = 20000

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

    // The glue is emitted by wasm/build.sh into public/, so it is a static asset
    // served as-is rather than part of the module graph.
    //
    // The URL goes through a variable and the import is wrapped in a Function so
    // the bundler cannot see a specifier to resolve at all. `/* @vite-ignore */`
    // alone was enough for Vite 5's Rollup, but Vite 8 builds with Rolldown,
    // which still analyses the template literal and fails the build on an
    // unresolved import.
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

  const handleAdd = (e) => {
    e.preventDefault()
    const rc = api.current.addCar(train.current, type, Number(weight))
    setMessage(
      fill(t(rc === 0 ? 'demo.added' : 'demo.rejected'), {
        type: typeLabel(type),
        weight,
      }),
    )
    sync()
  }

  const handleRemove = (index) => {
    const rc = api.current.removeCar(train.current, index)
    setMessage(fill(t(rc === 0 ? 'demo.removed' : 'demo.removeRejected'), { i: index }))
    sync()
  }

  const handleReset = () => {
    api.current.destroy(train.current)
    train.current = api.current.create()
    setMessage(t('demo.resetDone'))
    sync()
  }

  if (failed) return <p className="demo-note">{t('demo.failed')}</p>
  if (!ready || !state) return <p className="demo-note">{t('demo.loading')}</p>

  const freight = state.cars
    .filter((c) => c.type !== 0)
    .reduce((sum, c) => sum + c.weight, 0)

  return (
    <div className="demo">
      <form className="demo-controls" onSubmit={handleAdd}>
        <div className="demo-field">
          <label htmlFor="car-type">{t('demo.carType')}</label>
          <select
            id="car-type"
            value={type}
            onChange={(e) => setType(Number(e.target.value))}
          >
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
          {t('demo.rules').map((r) => <li key={r}>{r}</li>)}
        </ul>
      </div>
    </div>
  )
}
