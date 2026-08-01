import { useCallback, useEffect, useRef, useState } from 'react'
import { useI18n } from '../i18n/index.jsx'

/*
 * Turn-based fight running the compiled C++ classes.
 *
 * Nothing about the combat is reimplemented here. Damage comes from
 * calculateDamage() on the actual Warrior and Mage objects, dispatched through
 * the Character base, and health changes through the class's own operator+=.
 * This component only draws the result and asks for the next turn.
 *
 * The starting stats are the ones in the repository's data/roster.txt, so the
 * numbers on screen match what the native binary produces for the same fight.
 */

/* From data/roster.txt in the ArenaCore repository. */
const WARRIOR = { name: 'Aragorn', health: 120, level: 5, powers: [10, 20, 15] }
const MAGE = { name: 'Gandalf', health: 80, level: 8, powers: [40, 35, 50] }

export default function ArenaCoreDemo() {
  const { t } = useI18n()
  const api = useRef(null)
  const [ready, setReady] = useState(false)
  const [failed, setFailed] = useState(false)
  const [state, setState] = useState(null)
  const [log, setLog] = useState([])

  const read = useCallback(() => {
    const a = api.current
    setState({
      turn: a.turn(),
      sides: [0, 1].map((i) => ({
        name: a.name(i),
        health: a.health(i),
        level: a.level(i),
        damage: a.damage(i),
        alive: a.isAlive(i) === 1,
      })),
    })
  }, [])

  // Copies a JS array into the WASM heap and returns a pointer the C ABI can
  // take. The caller frees it — nothing on the C++ side keeps the pointer,
  // since both constructors copy the values into their own storage.
  const withIntArray = useCallback((M, values, fn) => {
    const bytes = values.length * 4
    const ptr = M._malloc(bytes)
    values.forEach((v, i) => M.setValue(ptr + i * 4, v, 'i32'))
    try {
      return fn(ptr)
    } finally {
      M._free(ptr)
    }
  }, [])

  const start = useCallback(() => {
    const { M, wrapped } = api.current
    withIntArray(M, WARRIOR.powers, (wPtr) =>
      withIntArray(M, MAGE.powers, (mPtr) =>
        wrapped.start(
          WARRIOR.name, WARRIOR.health, WARRIOR.level, wPtr, WARRIOR.powers.length,
          MAGE.name, MAGE.health, MAGE.level, mPtr, MAGE.powers.length,
        ),
      ),
    )
    setLog([])
    read()
  }, [read, withIntArray])

  useEffect(() => {
    let cancelled = false

    // Same indirection as the train yard demo: the glue is a static asset in
    // public/, and Rolldown would otherwise try to resolve the specifier.
    const url = `${import.meta.env.BASE_URL}wasm/arena.js`
    const importAtRuntime = new Function('u', 'return import(u)')

    importAtRuntime(url)
      .then((mod) => mod.default())
      .then((M) => {
        if (cancelled) return
        const w = (n, ret, args) => M.cwrap(n, ret, args)
        const wrapped = {
          start: w('ac_start', null, ['string','number','number','number','number','string','number','number','number','number']),
          destroy: w('ac_destroy', null, []),
          step: w('ac_step', 'number', []),
        }
        api.current = {
          M,
          wrapped,
          turn: w('ac_turn', 'number', []),
          lastDamage: w('ac_last_damage', 'number', []),
          health: w('ac_health', 'number', ['number']),
          level: w('ac_level', 'number', ['number']),
          isAlive: w('ac_is_alive', 'number', ['number']),
          damage: w('ac_damage', 'number', ['number']),
          name: w('ac_name', 'string', ['number']),
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
      if (api.current?.wrapped) api.current.wrapped.destroy()
    }
  }, [])

  useEffect(() => {
    if (ready) start()
  }, [ready, start])

  if (failed) return <p className="demo-note">{t('arenaDemo.failed')}</p>
  if (!ready || !state) return <p className="demo-note">{t('arenaDemo.loading')}</p>

  const over = state.sides.some((s) => !s.alive)

  const takeTurn = () => {
    const attackerIndex = state.turn
    const attacker = state.sides[attackerIndex]
    const defender = state.sides[1 - attackerIndex]
    const dealt = api.current.wrapped.step()
    if (dealt < 0) return
    setLog((prev) => [
      ...prev,
      { attacker: attacker.name, defender: defender.name, damage: dealt },
    ])
    read()
  }

  const boost = (i) => {
    api.current.addPower(i, 10)
    read()
  }

  const levelUp = (i) => {
    api.current.levelUp(i)
    read()
  }

  return (
    <div className="demo">
      <div className="arena">
        {state.sides.map((side, i) => (
          <div key={side.name} className={`fighter ${side.alive ? '' : 'is-down'} ${state.turn === i && !over ? 'is-active' : ''}`}>
            <div className="fighter-head">
              <h3>{side.name}</h3>
              <span className="mono role">{i === 0 ? t('arenaDemo.warrior') : t('arenaDemo.mage')}</span>
            </div>

            {/* A native progress element rather than a styled div, so the value
                is announced without extra ARIA. */}
            <progress
              className="hp"
              max={i === 0 ? WARRIOR.health : MAGE.health}
              value={Math.max(0, side.health)}
            />
            <p className="mono hp-text">
              {t('arenaDemo.health')} {side.health} · {t('arenaDemo.level')} {side.level} ·{' '}
              {t('arenaDemo.damage')} {side.damage}
            </p>

            <div className="fighter-actions">
              <button type="button" onClick={() => boost(i)} disabled={over}>
                {t('arenaDemo.addPower')}
              </button>
              <button type="button" onClick={() => levelUp(i)} disabled={over}>
                {t('arenaDemo.levelUp')}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="demo-controls">
        <button className="btn solid" type="button" onClick={takeTurn} disabled={over}>
          {over ? t('arenaDemo.finished') : t('arenaDemo.takeTurn')}
        </button>
        <button className="btn" type="button" onClick={start}>
          {t('arenaDemo.reset')}
        </button>
      </div>

      <p className="demo-status" role="status" aria-live="polite">
        {over
          ? `${state.sides.find((s) => s.alive)?.name ?? '—'} ${t('arenaDemo.wins')}`
          : `${state.sides[state.turn].name} ${t('arenaDemo.toAct')}`}
      </p>

      {log.length > 0 && (
        <ol className="demo-train arena-log">
          {log.map((entry, i) => (
            <li key={i}>
              <span className="idx">{i + 1}</span>
              <span className="ct">
                {entry.attacker} → {entry.defender}
              </span>
              <span className="cwt">−{entry.damage}</span>
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
