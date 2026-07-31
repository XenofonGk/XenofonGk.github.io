import { createContext, useContext, useEffect, useState, useMemo, useCallback } from 'react'

/*
 * Theme is tri-state: 'system' follows prefers-color-scheme, 'light' and 'dark'
 * pin it. The pinned states write data-theme onto <html>, which the stylesheet
 * uses to override the media query.
 */

const STORAGE_KEY = 'xg-theme'
const ThemeContext = createContext(null)

function apply(mode) {
  const root = document.documentElement
  if (mode === 'system') {
    root.removeAttribute('data-theme')
  } else {
    root.setAttribute('data-theme', mode)
  }
}

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    if (typeof window === 'undefined') return 'system'
    return window.localStorage.getItem(STORAGE_KEY) || 'system'
  })

  useEffect(() => {
    apply(mode)
    window.localStorage.setItem(STORAGE_KEY, mode)
  }, [mode])

  // Resolve what is actually showing, so the toggle can label the *next* state.
  const resolved =
    mode === 'system'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      : mode

  const toggle = useCallback(() => {
    setMode(resolved === 'dark' ? 'light' : 'dark')
  }, [resolved])

  const value = useMemo(() => ({ mode, resolved, setMode, toggle }), [mode, resolved, toggle])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider')
  return ctx
}
