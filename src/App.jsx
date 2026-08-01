import { Outlet, useLocation } from 'react-router'
import { useEffect, useState } from 'react'
import Nav from './components/Nav.jsx'
import TitleBlock from './components/TitleBlock.jsx'
import { useI18n } from './i18n/index.jsx'
import { useReveal } from './hooks/useReveal.js'

export default function App() {
  const { pathname } = useLocation()
  const { t, lang } = useI18n()

  // Keyed on the route so a navigation replays the entry transition. The slug
  // is stripped because opening a project modal should not re-animate the page
  // underneath it.
  const routeKey = pathname.startsWith('/projects') ? '/projects' : pathname
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    setEntered(false)
    // setTimeout rather than requestAnimationFrame: rAF is heavily throttled in
    // a hidden or backgrounded tab, which would leave the page stuck at opacity
    // 0 until the visitor switched to it.
    const id = window.setTimeout(() => setEntered(true), 16)
    return () => window.clearTimeout(id)
  }, [routeKey])

  // Re-scan for reveal targets whenever the route or language changes, since
  // both replace the page content.
  useReveal([routeKey, lang])

  return (
    <div className="frame">
      <a className="skip-link" href="#main">{t('nav.skip')}</a>
      <Nav />
      <main id="main" className={`route ${entered ? 'is-entered' : ''}`} key={routeKey}>
        <Outlet />
      </main>
      <TitleBlock />
    </div>
  )
}
