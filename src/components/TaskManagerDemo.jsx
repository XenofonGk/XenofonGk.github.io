import { useCallback, useEffect, useRef, useState } from 'react'
import { useI18n } from '../i18n/index.jsx'

/*
 * Live CRUD against the deployed ASP.NET Core API.
 *
 * Built around the fact that the database is serverless and scales to zero:
 * after a few idle minutes the first request has to wake it. That is a real
 * property of the free tier, not something to paper over, so the component is
 * designed for it:
 *
 *   - the UI paints immediately and never blocks on the network;
 *   - the first slow request says plainly that the database is waking, rather
 *     than showing a spinner that looks like a hang;
 *   - if the API cannot be reached at all, it falls back to a recorded
 *     transcript and says so, instead of leaving a dead panel behind.
 *
 * A demo that hangs is worse than no demo.
 */

const API = import.meta.env.VITE_TASK_API_URL || ''
const WAKE_HINT_AFTER_MS = 1200
const REQUEST_TIMEOUT_MS = 30000

/* Shown when the API is unreachable — the same sequence the README records, so
   the panel still demonstrates the endpoint contract. */
const TRANSCRIPT = [
  { method: 'POST', path: '/api/todo', status: 201, note: 'Location: /api/Todo/1' },
  { method: 'POST', path: '/api/todo', status: 400, note: 'empty title' },
  { method: 'GET', path: '/api/todo', status: 200, note: '' },
  { method: 'GET', path: '/api/todo/999999', status: 404, note: '' },
  { method: 'PUT', path: '/api/todo/1', status: 204, note: 'CreatedAt unchanged' },
  { method: 'DELETE', path: '/api/todo/1', status: 204, note: '' },
  { method: 'DELETE', path: '/api/todo/1', status: 404, note: '' },
]

async function call(path, options = {}) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)
  try {
    const res = await fetch(API + path, {
      ...options,
      signal: controller.signal,
      headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    })
    const body = res.status === 204 ? null : await res.json().catch(() => null)
    return { status: res.status, body }
  } finally {
    clearTimeout(timer)
  }
}

export default function TaskManagerDemo() {
  const { t } = useI18n()
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState('')
  const [status, setStatus] = useState('')
  const [lastCall, setLastCall] = useState(null)
  // idle | waking | ready | offline (a configured API failed) | unhosted (no
  // public instance exists, which is a deliberate choice rather than a fault)
  //
  // Seeded rather than set in an effect: whether an API is configured is known
  // at module load, and effects do not run during prerendering. Deciding it
  // here means the endpoint contract is in the served HTML, so crawlers and
  // link previews see it and there is no flash of the wrong panel on hydration.
  const [phase, setPhase] = useState(API ? 'idle' : 'unhosted')
  const wakeTimer = useRef(null)

  // Marks the request as "waking" only if it is actually slow, so a warm API
  // never flashes the message.
  const withWakeHint = useCallback(async (fn) => {
    clearTimeout(wakeTimer.current)
    wakeTimer.current = setTimeout(() => {
      setPhase((p) => (p === 'ready' ? p : 'waking'))
    }, WAKE_HINT_AFTER_MS)
    try {
      const result = await fn()
      setPhase('ready')
      return result
    } catch {
      setPhase('offline')
      return null
    } finally {
      clearTimeout(wakeTimer.current)
    }
  }, [])

  const refresh = useCallback(async () => {
    const res = await withWakeHint(() => call('/api/todo'))
    if (res && Array.isArray(res.body)) {
      setTasks(res.body)
      setLastCall({ method: 'GET', path: '/api/todo', status: res.status })
    }
  }, [withWakeHint])

  useEffect(() => {
    if (!API) return undefined
    refresh()
    return () => clearTimeout(wakeTimer.current)
  }, [refresh])

  const add = async (e) => {
    e.preventDefault()
    const value = title.trim()
    if (!value) return
    const res = await withWakeHint(() =>
      call('/api/todo', { method: 'POST', body: JSON.stringify({ title: value, isCompleted: false }) }),
    )
    if (!res) return
    setLastCall({ method: 'POST', path: '/api/todo', status: res.status })
    setStatus(res.status === 201 ? t('taskDemo.created') : t('taskDemo.rejected'))
    setTitle('')
    refresh()
  }

  const toggle = async (task) => {
    const res = await withWakeHint(() =>
      call(`/api/todo/${task.id}`, {
        method: 'PUT',
        body: JSON.stringify({ title: task.title, isCompleted: !task.isCompleted }),
      }),
    )
    if (!res) return
    setLastCall({ method: 'PUT', path: `/api/todo/${task.id}`, status: res.status })
    refresh()
  }

  const remove = async (task) => {
    const res = await withWakeHint(() => call(`/api/todo/${task.id}`, { method: 'DELETE' }))
    if (!res) return
    setLastCall({ method: 'DELETE', path: `/api/todo/${task.id}`, status: res.status })
    setStatus(t('taskDemo.deleted'))
    refresh()
  }

  if (phase === 'offline' || phase === 'unhosted') {
    return (
      <div className="demo">
        <p className="demo-note">
          {phase === 'unhosted' ? t('taskDemo.unhosted') : t('taskDemo.offline')}
        </p>
        <table className="demo-transcript">
          <caption className="sr-only">{t('taskDemo.transcriptCaption')}</caption>
          <thead>
            <tr>
              <th scope="col">{t('taskDemo.method')}</th>
              <th scope="col">{t('taskDemo.endpoint')}</th>
              <th scope="col">{t('taskDemo.status')}</th>
            </tr>
          </thead>
          <tbody>
            {TRANSCRIPT.map((r, i) => (
              <tr key={i}>
                <td>{r.method}</td>
                <td>{r.path}{r.note && <span className="note"> — {r.note}</span>}</td>
                <td>{r.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div className="demo">
      <form className="demo-controls" onSubmit={add}>
        <div className="demo-field">
          <label htmlFor="task-title">{t('taskDemo.title')}</label>
          <input
            id="task-title"
            type="text"
            maxLength={200}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={t('taskDemo.placeholder')}
          />
        </div>
        <button className="btn solid" type="submit">{t('taskDemo.add')}</button>
      </form>

      <p className="demo-status" role="status" aria-live="polite">
        {phase === 'waking' ? t('taskDemo.waking') : status}
      </p>

      {lastCall && (
        <p className="demo-lastcall mono">
          <span className="verb">{lastCall.method}</span> {lastCall.path}
          <span className={`code c${String(lastCall.status)[0]}`}>{lastCall.status}</span>
        </p>
      )}

      {tasks.length > 0 && (
        <ol className="demo-train">
          {tasks.map((task) => (
            <li key={task.id} className={task.isCompleted ? 'is-engine' : ''}>
              <span className="idx">{task.id}</span>
              <span className="ct">{task.title}</span>
              <button type="button" onClick={() => toggle(task)}>
                {task.isCompleted ? t('taskDemo.reopen') : t('taskDemo.complete')}
              </button>
              <button type="button" onClick={() => remove(task)}>
                {t('taskDemo.delete')}
              </button>
            </li>
          ))}
        </ol>
      )}

      <div className="demo-rules">
        <h3>{t('taskDemo.notesTitle')}</h3>
        <ul>
          {t('taskDemo.notes').map((n) => <li key={n}>{n}</li>)}
        </ul>
      </div>
    </div>
  )
}
