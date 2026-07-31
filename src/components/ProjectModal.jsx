import { useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import TrainYardDemo from './TrainYardDemo.jsx'

const FOCUSABLE =
  'a[href], button:not([disabled]), select, input, textarea, [tabindex]:not([tabindex="-1"])'

export default function ProjectModal({ project, prev, next, onClose }) {
  const panel = useRef(null)
  const returnFocusTo = useRef(null)

  // Remember what had focus so it can be restored on close.
  useEffect(() => {
    returnFocusTo.current = document.activeElement
    return () => {
      if (returnFocusTo.current instanceof HTMLElement) {
        returnFocusTo.current.focus()
      }
    }
  }, [])

  // Move focus into the dialog when the project changes.
  useEffect(() => {
    const first = panel.current?.querySelector('[data-autofocus]')
    if (first instanceof HTMLElement) first.focus()
  }, [project.slug])

  // Lock background scroll while open.
  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [])

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation()
        onClose()
        return
      }
      if (e.key !== 'Tab') return

      // Trap focus inside the dialog.
      const items = [...panel.current.querySelectorAll(FOCUSABLE)].filter(
        (el) => el.offsetParent !== null,
      )
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    },
    [onClose],
  )

  return (
    <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        ref={panel}
        onKeyDown={onKeyDown}
      >
        <div className="modal-bar">
          <span className="mono">
            <span className="n">{project.year}</span> · {project.role}
          </span>
          <button type="button" className="modal-close" onClick={onClose} data-autofocus>
            Close ✕
          </button>
        </div>

        <div className="modal-body">
          <h2 id="modal-title">{project.title}</h2>
          <p className="lede">{project.summary}</p>

          <div className="spec-table">
            <div className="cell">
              <span className="k">Stack</span>
              <span className="v">{project.stack.join(' · ')}</span>
            </div>
            <div className="cell">
              <span className="k">Role</span>
              <span className="v">{project.role}</span>
            </div>
            <div className="cell">
              <span className="k">Source</span>
              <span className="v">
                <a href={project.repo} target="_blank" rel="noopener noreferrer">
                  View repository ↗
                </a>
              </span>
            </div>
          </div>

          {project.demo === 'train-yard' && (
            <div className="modal-demo">
              <p className="mono callout">
                <span className="n">§ Live</span>
                <span>Compiled from C to WebAssembly</span>
                <span className="line" aria-hidden="true"></span>
              </p>
              <TrainYardDemo />
            </div>
          )}

          <div className="prose modal-prose">
            {project.body.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>
        </div>

        <div className="modal-foot">
          {prev ? (
            <Link className="btn" to={`/projects/${prev.slug}`}>
              ← {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link className="btn solid" to={`/projects/${next.slug}`}>
              {next.title} →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </div>
  )
}
