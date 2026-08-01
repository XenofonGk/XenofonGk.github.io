import { useCallback, useEffect, useRef, useState } from 'react'
import { useI18n } from '../i18n/index.jsx'

/*
 * A playable fight running the compiled C++ engine.
 *
 * Nothing about the game is reimplemented here. Damage, the ±20% roll, defence
 * subtraction and turn order all happen inside Arena::fight, and the log shown
 * is the engine's own output captured from the ostream it writes to — not a
 * retelling assembled in JavaScript.
 *
 * The decisions offered are the ones that actually change an outcome: which
 * opponent to face, and whether to spend a level-up (which raises damage,
 * raises defence, and can flip who strikes first) or add raw power.
 */

const SEED = 0 // 0 lets each fight vary; a fixed value replays identically

export default function ArenaCoreDemo() {
  const { t } = useI18n()
  const api = useRef(null)
  const [ready, setReady] = useState(false)
  const [failed, setFailed] = useState(false)
  const [roster, setRoster] = useState([])
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(2)
  const [winner, setWinner] = useState(-1)
  const [log, setLog] = useState([])

  const read = useCallback(() => {
    const a = api.current
    const size = a.rosterSize()
    setRoster(
      Array.from({ length: size }, (_, i) => ({
        index: i,
        name: a.name(i),
        kind: a.kind(i),
        health: a.health(i),
        maxHealth: a.maxHealth(i),
        level: a.level(i),
        damage: a.damage(i),
        defence: a.defence(i),
        alive: a.isAlive(i) === 1,
      })),
    )
  }, [])

  const reset = useCallback(
    (l = left, r = right) => {
      api.current.reset(SEED)
      api.current.setFighters(l, r)
      setWinner(-1)
      setLog([])
      read()
    },
    [left, right, read],
  )

  useEffect(() => {
    let cancelled = false
    const url = `${import.meta.env.BASE_URL}wasm/arena.js`
    const importAtRuntime = new Function('u', 'return import(u)')

    importAtRuntime(url)
      .then((mod) => mod.default())
      .then((M) => {
        if (cancelled) return
        const w = (n, ret, args) => M.cwrap(n, ret, args)
        api.current = {
          reset: w('ac_reset', null, ['number']),
          destroy: w('ac_destroy', null, []),
          rosterSize: w('ac_roster_size', 'number', []),
          setFighters: w('ac_set_fighters', null, ['number', 'number']),
          fightRound: w('ac_fight_round', 'number', []),
          lastLog: w('ac_last_log', 'string', []),
          health: w('ac_health', 'number', ['number']),
          maxHealth: w('ac_max_health', 'number', ['number']),
          level: w('ac_level', 'number', ['number']),
          damage: w('ac_damage', 'number', ['number']),
          defence: w('ac_defence', 'number', ['number']),
          isAlive: w('ac_is_alive', 'number', ['number']),
          name: w('ac_name', 'string', ['number']),
          kind: w('ac_kind', 'number', ['number']),
          levelUp: w('ac_level_up', null, ['number']),
          addPower: w('ac_add_power', null, ['number', 'number']),
        }
        setReady(true)
      })
      .catch(() => {
        if (!cancelled) setFailed(true)
      })

    return () => {
      cancelled = true
      if (api.current) api.current.destroy()
    }
  }, [])

  useEffect(() => {
    if (ready) reset(0, 2)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready])

  if (failed) return <p className="demo-note">{t('arenaDemo.failed')}</p>
  if (!ready || roster.length === 0) return <p className="demo-note">{t('arenaDemo.loading')}</p>

  const fighters = [roster[left], roster[right]].filter(Boolean)
  const over = winner >= 0

  const round = () => {
    const w = api.current.fightRound()
    const text = api.current.lastLog()
    setLog((prev) => [...prev, ...text.split('\n').filter(Boolean)])
    if (w >= 0) setWinner(w)
    read()
  }

  const chooseOpponent = (index) => {
    setRight(index)
    reset(left, index)
  }

  const act = (fn, index) => {
    fn(index)
    read()
  }

  return (
    <div className="demo">
      <p className="demo-hint">{t('arenaDemo.hint')}</p>

      <div className="arena">
        {fighters.map((side) => (
          <div
            key={side.index}
            className={`fighter ${side.alive ? '' : 'is-down'} ${
              over && winner === side.index ? 'is-winner' : ''
            }`}
          >
            <div className="fighter-head">
              <h3>{side.name}</h3>
              <span className="mono role">
                {side.kind === 0 ? t('arenaDemo.warrior') : t('arenaDemo.mage')}
              </span>
            </div>

            <progress className="hp" max={side.maxHealth} value={Math.max(0, side.health)} />
            <p className="mono hp-text">
              {t('arenaDemo.health')} {side.health}/{side.maxHealth} · {t('arenaDemo.level')}{' '}
              {side.level} · {t('arenaDemo.damage')} {side.damage} · {t('arenaDemo.defence')}{' '}
              {side.defence}
            </p>

            <div className="fighter-actions">
              <button
                type="button"
                disabled={over}
                onClick={() => act(api.current.levelUp, side.index)}
              >
                {t('arenaDemo.levelUp')}
              </button>
              <button
                type="button"
                disabled={over}
                onClick={() => act((i) => api.current.addPower(i, 3), side.index)}
              >
                {t('arenaDemo.addPower')}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="demo-controls">
        <button className="btn solid" type="button" onClick={round} disabled={over}>
          {over ? t('arenaDemo.finished') : t('arenaDemo.takeTurn')}
        </button>
        <button className="btn" type="button" onClick={() => reset()}>
          {t('arenaDemo.reset')}
        </button>

        <div className="demo-field">
          <label htmlFor="arena-opponent">{t('arenaDemo.opponent')}</label>
          <select
            id="arena-opponent"
            value={right}
            onChange={(e) => chooseOpponent(Number(e.target.value))}
          >
            {roster
              .filter((r) => r.index !== left)
              .map((r) => (
                <option key={r.index} value={r.index}>
                  {r.name}
                </option>
              ))}
          </select>
        </div>
      </div>

      <p className="demo-status" role="status" aria-live="polite">
        {over
          ? `${roster[winner]?.name ?? '—'} ${t('arenaDemo.wins')}`
          : t('arenaDemo.ready')}
      </p>

      {log.length > 0 && (
        <ol className="demo-train arena-log">
          {log.slice(-8).map((line, i) => (
            <li key={`${i}-${line}`}>
              <span className="ct">{line}</span>
            </li>
          ))}
        </ol>
      )}

      <div className="demo-rules">
        <h3>{t('arenaDemo.notesTitle')}</h3>
        <ul>
          {t('arenaDemo.notes').map((n) => <li key={n}>{n}</li>)}
        </ul>
      </div>
    </div>
  )
}
