/*
 * Fails if the locale files drift apart.
 *
 * A missing key falls back to English at runtime rather than rendering empty,
 * which is the right behaviour but also means drift is invisible in the browser
 * — a half-translated page just quietly shows English in the gaps. This makes
 * it loud instead.
 */

import { readdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const localesDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'i18n', 'locales')

/* Full shape: dotted key paths, plus array lengths so a short bullet list is
   caught as well as a missing key. */
function shape(value, prefix = '', out = []) {
  if (Array.isArray(value)) {
    out.push(`${prefix}[]=${value.length}`)
    value.forEach((v, i) => shape(v, `${prefix}[${i}]`, out))
  } else if (value && typeof value === 'object') {
    Object.keys(value)
      .sort()
      .forEach((k) => shape(value[k], prefix ? `${prefix}.${k}` : k, out))
  } else {
    out.push(prefix)
  }
  return out
}

const files = (await readdir(localesDir)).filter((f) => f.endsWith('.js')).sort()
const { default: en } = await import(join(localesDir, 'en.js'))
const reference = shape(en)
const refSet = new Set(reference)

let failed = false

for (const file of files) {
  const code = file.replace(/\.js$/, '')
  if (code === 'en') continue

  const { default: dict } = await import(join(localesDir, file))
  const keys = shape(dict)
  const set = new Set(keys)

  const missing = reference.filter((k) => !set.has(k))
  const extra = keys.filter((k) => !refSet.has(k))

  if (missing.length || extra.length) {
    failed = true
    console.error(`\n${code}: ${missing.length} missing, ${extra.length} unexpected`)
    missing.slice(0, 15).forEach((k) => console.error(`  missing  ${k}`))
    extra.slice(0, 15).forEach((k) => console.error(`  extra    ${k}`))
    if (missing.length > 15 || extra.length > 15) console.error('  …')
  } else {
    console.log(`${code}: ok (${keys.length} entries)`)
  }
}

if (failed) {
  console.error('\nLocale files are out of sync with en.js.')
  process.exit(1)
}
console.log(`\nAll ${files.length} locales match en.js (${reference.length} entries).`)
