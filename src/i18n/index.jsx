import { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react'
import en from './locales/en.js'

/*
 * Small hand-rolled i18n layer.
 *
 * English is bundled directly because it is the default and the fallback for
 * any key a translation has not covered. Every other locale is a separate
 * chunk, fetched only when someone actually selects it — six full sets of
 * translated prose in the initial payload would be wasteful when most visitors
 * read one of them.
 */

export const LOCALES = [
  { code: 'en', label: 'English', native: 'English', verified: true },
  { code: 'zh', label: 'Chinese', native: '中文', verified: false },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी', verified: false },
  { code: 'es', label: 'Spanish', native: 'Español', verified: false },
  { code: 'fr', label: 'French', native: 'Français', verified: false },
  { code: 'el', label: 'Greek', native: 'Ελληνικά', verified: true },
]

/* English is excluded because it is statically imported above as the fallback;
   including it here would make Rollup keep it in the main chunk anyway and warn
   about the double import. */
const loaders = import.meta.glob('./locales/!(en).js')

const STORAGE_KEY = 'xg-locale'

const I18nContext = createContext(null)

/* Walks a dotted path, falling back to English when a translation is missing. */
function resolve(dict, path) {
  return path.split('.').reduce((acc, key) => (acc == null ? undefined : acc[key]), dict)
}

function detectInitial() {
  if (typeof window === 'undefined') return 'en'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored && LOCALES.some((l) => l.code === stored)) return stored
  const preferred = (navigator.languages || [navigator.language || 'en'])
    .map((l) => l.split('-')[0].toLowerCase())
    .find((l) => LOCALES.some((loc) => loc.code === l))
  return preferred || 'en'
}

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(detectInitial)
  const [dict, setDict] = useState(en)

  useEffect(() => {
    let cancelled = false

    if (lang === 'en') {
      setDict(en)
    } else {
      const load = loaders[`./locales/${lang}.js`]
      if (load) {
        load().then((mod) => {
          if (!cancelled) setDict(mod.default)
        })
      }
    }

    document.documentElement.lang = lang
    window.localStorage.setItem(STORAGE_KEY, lang)

    return () => {
      cancelled = true
    }
  }, [lang])

  /* t('a.b.c') — returns the English string if the active locale lacks the key,
     and the key itself if English lacks it too, so a gap is visible rather than
     rendering as an empty element. */
  const t = useCallback(
    (path) => {
      const hit = resolve(dict, path)
      if (hit !== undefined) return hit
      const fallback = resolve(en, path)
      return fallback !== undefined ? fallback : path
    },
    [dict],
  )

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t,
      meta: LOCALES.find((l) => l.code === lang) || LOCALES[0],
    }),
    [lang, t],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used inside I18nProvider')
  return ctx
}
