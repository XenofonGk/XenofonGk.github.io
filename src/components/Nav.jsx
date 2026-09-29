import { NavLink, Link } from 'react-router'
import { useI18n } from '../i18n/index.jsx'
import ThemeToggle from './ThemeToggle.jsx'
import LanguageSwitcher from './LanguageSwitcher.jsx'
import { usePalette } from './CommandPalette.jsx'

export default function Nav() {
  const { t } = useI18n()
  const { open } = usePalette()

  const links = [
    { to: '/projects', label: t('nav.sites') },
    { to: '/work', label: t('nav.clients') },
    { to: '/engine-room', label: t('nav.engineRoom') },
    { to: '/about', label: t('nav.about') },
    { to: '/cv', label: t('nav.cv') },
  ]

  return (
    <nav className="nav" aria-label={t('nav.primary')}>
      <div className="wrap">
        <Link className="mark" to="/">XG</Link>
        <div className="nav-right">
          <ul>
            {links.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} className={({ isActive }) => (isActive ? 'active' : undefined)}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="nav-tools">
            <button type="button" className="kbd-btn" onClick={open} aria-label={t('nav.paletteLabel')}>
              <kbd>⌘K</kbd>
              <span className="kbd-label">{t('nav.palette')}</span>
            </button>
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
