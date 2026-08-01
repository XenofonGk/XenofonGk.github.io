import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import NotFound from './pages/NotFound.jsx'
import { I18nProvider } from './i18n/index.jsx'
import { ThemeProvider } from './theme.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <I18nProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<App />}>
              <Route path="/" element={<Home />} />
              {/* The detail view renders as a modal over the index, so both the
                  list route and the slug route mount the same page component. */}
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:slug" element={<ProjectsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </I18nProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
