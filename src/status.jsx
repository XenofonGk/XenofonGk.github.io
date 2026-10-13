import { createContext, useContext, useEffect, useState } from 'react'

/*
 * One live reading from the home server, shared by every component that shows
 * it (the permit card, the inspection stamps, the engine room).
 *
 * The server writes a small public file every few minutes. It only carries
 * counts, up/down flags and timestamps, never hostnames, addresses or versions.
 * When it cannot be fetched (the laptop asleep, a restart) the phase is 'down'
 * and every consumer says so plainly rather than showing invented numbers.
 */

export const STATUS_URL = 'https://status.xgbuilds.dev/status.json'

const StatusContext = createContext({ phase: 'loading', data: null })

export function StatusProvider({ children }) {
  const [state, setState] = useState({ phase: 'loading', data: null })

  useEffect(() => {
    const ctrl = new AbortController()
    const timer = window.setTimeout(() => ctrl.abort(), 6000)
    fetch(STATUS_URL, { signal: ctrl.signal, cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((data) => setState({ phase: 'ok', data }))
      .catch(() => setState({ phase: 'down', data: null }))
      .finally(() => window.clearTimeout(timer))
    return () => {
      window.clearTimeout(timer)
      ctrl.abort()
    }
  }, [])

  return <StatusContext.Provider value={state}>{children}</StatusContext.Provider>
}

export const useStatus = () => useContext(StatusContext)

/* Whether a named service answered its last health check: true, false, or
   null when there is no reading. */
export function serviceUp(data, name) {
  if (!data) return null
  if (name === 'host') return true
  const hit = data.services?.items?.find((s) => s.name === name)
  return hit ? Boolean(hit.up) : null
}

export function ago(iso, lang) {
  const then = Date.parse(iso)
  if (Number.isNaN(then)) return '—'
  const s = Math.round((then - Date.now()) / 1000)
  const rtf = new Intl.RelativeTimeFormat(lang, { numeric: 'auto', style: 'short' })
  const abs = Math.abs(s)
  if (abs < 60) return rtf.format(s, 'second')
  if (abs < 3600) return rtf.format(Math.round(s / 60), 'minute')
  if (abs < 86400) return rtf.format(Math.round(s / 3600), 'hour')
  return rtf.format(Math.round(s / 86400), 'day')
}
