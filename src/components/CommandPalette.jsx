import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import { useI18n, LOCALES } from '../i18n/index.jsx'
import { useTheme } from '../theme.jsx'
import { projects } from '../data/projects.js'
import { profile } from '../data/profile.js'

/*
 * ⌘K / Ctrl+K: jump to any project or page, or run an action (copy the email,
 * switch theme, switch language) without touching the mouse.
 *
 * The pattern is a dialog holding a combobox: focus stays in the input while
 * the arrow keys move aria-activedescendant through the listbox, so screen
 * readers announce the highlighted option and typing keeps filtering.
 */

const PaletteContext = createContext({ open: () => {} })
export const usePalette = () => useContext(PaletteContext)

export function PaletteProvider({ children }) {
  const [isOpen, setOpen] = useState(false)
  const open = useCallback(() => setOpen(true), [])

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((v) => !v)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <PaletteContext.Provider value={useMemo(() => ({ open }), [open])}>
      {children}
      {isOpen && <Palette onClose={() => setOpen(false)} />}
    </PaletteContext.Provider>
  )
}

function Palette({ onClose }) {
  const { t, setLang, lang } = useI18n()
  const { toggle } = useTheme()
  const navigate = useNavigate()
  const input = useRef(null)
  const returnFocus = useRef(null)
  const [q, setQ] = useState('')
  const [active, setActive] = useState(0)
  const [note, setNote] = useState('')

  useEffect(() => {
    returnFocus.current = document.activeElement
    input.current?.focus()
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
      if (returnFocus.current instanceof HTMLElement) returnFocus.current.focus()
    }
  }, [])

  const go = (to) => () => {
    navigate(to)
    onClose()
  }

  const all = useMemo(() => [
    ...projects.map((p) => ({ id: `p-${p.id}`, group: t('palette.sites'), label: t(`projects.items.${p.id}.title`), run: go(`/projects/${p.slug}`) })),
    { id: 'pg-home', group: t('palette.pages'), label: 'xgbuilds.dev', run: go('/') },
    { id: 'pg-work', group: t('palette.pages'), label: t('nav.clients'), run: go('/work') },
    { id: 'pg-engine', group: t('palette.pages'), label: t('nav.engineRoom'), run: go('/engine-room') },
    { id: 'pg-about', group: t('palette.pages'), label: t('nav.about'), run: go('/about') },
    { id: 'pg-cv', group: t('palette.pages'), label: t('nav.cv'), run: go('/cv') },
    { id: 'pg-contact', group: t('palette.pages'), label: t('nav.contact'), run: go('/contact') },
    {
      id: 'a-email', group: t('palette.actions'), label: t('palette.copyEmail'),
      run: () => {
        navigator.clipboard?.writeText(profile.email).then(() => setNote(t('palette.copied')), () => {})
      },
    },
    { id: 'a-theme', group: t('palette.actions'), label: t('palette.theme'), run: () => { toggle(); onClose() } },
    ...LOCALES.filter((l) => l.code !== lang).map((l) => ({
      id: `l-${l.code}`, group: t('palette.actions'), label: `${t('palette.language')}: ${l.native}`,
      run: () => { setLang(l.code); onClose() },
    })),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  ], [t, lang])

  const needle = q.trim().toLowerCase()
  const items = needle ? all.filter((i) => i.label.toLowerCase().includes(needle)) : all
  const current = Math.min(active, Math.max(0, items.length - 1))

  const onKeyDown = (e) => {
    if (e.key === 'Escape') { e.preventDefault(); onClose() }
    else if (e.key === 'ArrowDown') { e.preventDefault(); setActive((current + 1) % Math.max(1, items.length)) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive((current - 1 + items.length) % Math.max(1, items.length)) }
    else if (e.key === 'Enter' && items[current]) { e.preventDefault(); items[current].run() }
    else if (e.key === 'Tab') e.preventDefault()
  }

  useEffect(() => {
    document.getElementById(`cmd-${items[current]?.id}`)?.scrollIntoView({ block: 'nearest' })
  }, [current, items])

  let lastGroup = null
  return (
    <div className="palette-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="palette" role="dialog" aria-modal="true" aria-label={t('nav.paletteLabel')}>
        <div className="palette-bar">
          <span className="palette-key" aria-hidden="true">⌘K</span>
          <input
            ref={input}
            className="palette-input"
            value={q}
            onChange={(e) => { setQ(e.target.value); setActive(0); setNote('') }}
            onKeyDown={onKeyDown}
            placeholder={t('palette.placeholder')}
            role="combobox"
            aria-expanded="true"
            aria-controls="cmd-list"
            aria-activedescendant={items[current] ? `cmd-${items[current].id}` : undefined}
            aria-autocomplete="list"
          />
          <button type="button" className="palette-close" onClick={onClose}>{t('palette.close')}</button>
        </div>
        <ul id="cmd-list" className="palette-list" role="listbox" aria-label={t('palette.placeholder')}>
          {items.length === 0 && <li className="palette-empty" role="presentation">{t('palette.empty')}</li>}
          {items.map((item, i) => {
            const header = item.group !== lastGroup ? item.group : null
            lastGroup = item.group
            return [
              header && <li key={`g-${header}`} className="palette-group" role="presentation">{header}</li>,
              <li
                key={item.id}
                id={`cmd-${item.id}`}
                role="option"
                aria-selected={i === current}
                className={i === current ? 'is-active' : undefined}
                onMouseEnter={() => setActive(i)}
                onMouseDown={(e) => { e.preventDefault(); item.run() }}
              >
                {item.label}
              </li>,
            ]
          })}
        </ul>
        <p className="palette-foot mono" aria-live="polite">{note || t('palette.hint')}</p>
      </div>
    </div>
  )
}
