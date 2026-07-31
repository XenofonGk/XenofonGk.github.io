import { useEffect, useRef, useState } from 'react'
import { useI18n, LOCALES } from '../i18n/index.jsx'

export default function LanguageSwitcher() {
  const { lang, setLang, meta, t } = useI18n()
  const [open, setOpen] = useState(false)
  const wrap = useRef(null)

  // Close on outside click and on Escape.
  useEffect(() => {
    if (!open) return undefined
    const onDown = (e) => {
      if (wrap.current && !wrap.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className="lang" ref={wrap}>
      <button
        type="button"
        className="icon-btn lang-trigger"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={t('nav.language')}
      >
        {meta.native}
      </button>

      {open && (
        <ul className="lang-menu" role="listbox" aria-label={t('nav.language')}>
          {LOCALES.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                role="option"
                aria-selected={l.code === lang}
                className={l.code === lang ? 'is-current' : undefined}
                onClick={() => {
                  setLang(l.code)
                  setOpen(false)
                }}
              >
                <span className="native" lang={l.code}>{l.native}</span>
                <span className="latin">{l.label}</span>
                {!l.verified && <span className="unverified" aria-hidden="true">≈</span>}
              </button>
            </li>
          ))}
          <li className="lang-note">{t('translationNoteShort')}</li>
        </ul>
      )}
    </div>
  )
}
