import strings from './demo-strings.json'

/*
 * The WebAssembly demos were written against the previous site's i18n layer.
 * The new site is English only, so this keeps the same `t(key)` shape and reads
 * the English strings directly.
 */
const lookup = (key) => key.split('.').reduce((o, k) => (o == null ? o : o[k]), strings)

export function useI18n() {
  return { t: (key) => lookup(key) ?? key }
}
