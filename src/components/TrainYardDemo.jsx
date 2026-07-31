import { useEffect, useRef, useState, useCallback } from 'react'

const CAR_TYPES = [
  { value: 0, label: 'Engine' },
  { value: 1, label: 'Food' },
  { value: 2, label: 'Wood' },
  { value: 3, label: 'Oil' },
]

const RULES = [
  'Engines must all sit at the front of the train.',
  'Total weight cannot exceed 20,000.',
  'Freight weight cannot exceed pull capacity (5,000 per engine).',
  'Wood and oil cars cannot be adjacent.',
  'The first freight car cannot be oil.',
]

const MAX_TOTAL_WEIGHT = 20000

export default function TrainYardDemo() {
  const api = useRef(null)
  const train = useRef(null)
  const [ready, setReady] = useState(false)
  const [failed, setFailed] = useState(false)
  const [type, setType] = useState(0)
  const [weight, setWeight] = useState(5000)
  const [state, setState] = useState(null)
  const [message, setMessage] = useState('')

  // Reads every value back out of the C struct — nothing is tracked in React.
  const sync = useCallback(() => {
    const a = api.current
    const t = train.current
    const cars = []
    for (let i = 0; i < a.carCount(t); i += 1) {
      cars.push({ type: a.carType(t, i), weight: a.carWeight(t, i) })
    }
    setState({
      cars,
      carCount: a.carCount(t),
      numEngines: a.numEngines(t),
      totalWeight: a.totalWeight(t),
      capacity: a.pullCapacity(t),
      safe: a.isSafe(t) === 1,
    })
  }, [])

  useEffect(() => {
    let cancelled = false
    let destroy = null

    // The glue is emitted by wasm/build.sh into public/, so it is a static asset
    // rather than part of the module graph — Vite must not try to resolve it.
    import(/* @vite-ignore */ `${import.meta.env.BASE_URL}wasm/train_yard.js`)
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

  const handleAdd = (e) => {
    e.preventDefault()
    const label = CAR_TYPES.find((c) => c.value === type).label
    const rc = api.current.addCar(train.current, type, Number(weight))
    setMessage(
      rc === 0
        ? `${label} car weighing ${weight} added.`
        : `${label} car weighing ${weight} rejected — it would break one of the rules below.`,
    )
    sync()
  }

  const handleRemove = (index) => {
    const rc = api.current.removeCar(train.current, index)
    setMessage(
      rc === 0
        ? `Car ${index} removed.`
        : `Car ${index} cannot be removed — the remaining train would be invalid.`,
    )
    sync()
  }

  const handleReset = () => {
    api.current.destroy(train.current)
    train.current = api.current.create()
    setMessage('Train reset.')
    sync()
  }

  if (failed) {
    return (
      <p className="demo-note">
        The interactive demo could not load in this browser. The source and test suite are
        linked above.
      </p>
    )
  }

  if (!ready || !state) {
    return <p className="demo-note">Loading the compiled validator…</p>
  }

  const freight = state.cars
    .filter((c) => c.type !== 0)
    .reduce((sum, c) => sum + c.weight, 0)

  return (
    <div className="demo">
      <form className="demo-controls" onSubmit={handleAdd}>
        <div className="demo-field">
          <label htmlFor="car-type">Car type</label>
          <select
            id="car-type"
            value={type}
            onChange={(e) => setType(Number(e.target.value))}
          >
            {CAR_TYPES.map((c) => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </select>
        </div>
        <div className="demo-field">
          <label htmlFor="car-weight">Weight</label>
          <input
            id="car-weight"
            type="number"
            min="1"
            max="20000"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <button className="btn solid" type="submit">Add car</button>
        <button className="btn" type="button" onClick={handleReset}>Reset</button>
      </form>

      <p className="demo-status" role="status" aria-live="polite">{message}</p>

      <div className="demo-readout">
        <div className="demo-stat">
          <span className="k">Cars</span>
          <span className="v">{state.carCount}</span>
        </div>
        <div className="demo-stat">
          <span className="k">Engines</span>
          <span className="v">{state.numEngines}</span>
        </div>
        <div className="demo-stat">
          <span className="k">Total weight</span>
          <span className="v">{state.totalWeight.toLocaleString()} / {MAX_TOTAL_WEIGHT.toLocaleString()}</span>
        </div>
        <div className="demo-stat">
          <span className="k">Freight / capacity</span>
          <span className="v">{freight.toLocaleString()} / {state.capacity.toLocaleString()}</span>
        </div>
        <div className={`demo-stat verdict ${state.safe ? 'is-safe' : 'is-unsafe'}`}>
          <span className="k">Status</span>
          <span className="v">{state.safe ? 'SAFE' : 'UNSAFE'}</span>
        </div>
      </div>

      {state.cars.length > 0 && (
        <ol className="demo-train">
          {state.cars.map((car, i) => (
            <li key={i} className={car.type === 0 ? 'is-engine' : ''}>
              <span className="idx">{i}</span>
              <span className="ct">{CAR_TYPES[car.type].label}</span>
              <span className="cwt">{car.weight.toLocaleString()}</span>
              <button
                type="button"
                onClick={() => handleRemove(i)}
                aria-label={`Remove car ${i}, ${CAR_TYPES[car.type].label}, weight ${car.weight}`}
              >
                Remove
              </button>
            </li>
          ))}
        </ol>
      )}

      <div className="demo-rules">
        <h3>Rules enforced by the C validator</h3>
        <ul>
          {RULES.map((r) => <li key={r}>{r}</li>)}
        </ul>
      </div>
    </div>
  )
}
