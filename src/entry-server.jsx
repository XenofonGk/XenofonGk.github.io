import { renderToString } from 'react-dom/server'
// react-router v7 consolidated its packages: StaticRouter comes from
// `react-router` itself, and the `react-router-dom/server` subpath from v6 no
// longer exists.
import { StaticRouter } from 'react-router'
import { Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import NotFound from './pages/NotFound.jsx'
import { I18nProvider } from './i18n/index.jsx'
import { ThemeProvider } from './theme.jsx'

/*
 * Server entry used only at build time by scripts/prerender.mjs.
 *
 * The route table is duplicated from main.jsx rather than shared because the
 * client wraps everything in BrowserRouter and StrictMode, neither of which
 * belongs here. Keep the two lists in step — a route missing from this file is
 * simply not prerendered and silently falls back to the SPA shell.
 *
 * Output is always English. That is deliberate: English is the declared
 * authoritative version, and the client swaps locale on load.
 */
export function render(url) {
  return renderToString(
    <ThemeProvider>
      <I18nProvider>
        <StaticRouter location={url}>
          <Routes>
            <Route element={<App />}>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:slug" element={<ProjectsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </StaticRouter>
      </I18nProvider>
    </ThemeProvider>,
  )
}
