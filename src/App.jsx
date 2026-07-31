import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav.jsx'
import TitleBlock from './components/TitleBlock.jsx'

export default function App() {
  const { pathname } = useLocation()

  // Client-side navigation does not reset scroll on its own.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="frame">
      <a className="skip-link" href="#main">Skip to main content</a>
      <Nav />
      <main id="main">
        <Outlet />
      </main>
      <TitleBlock />
    </div>
  )
}
