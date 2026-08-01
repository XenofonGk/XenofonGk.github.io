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


/* Every leaf string, keyed by dotted path — used for the content check below. */
function strings(value, prefix = '', out = new Map()) {
  if (Array.isArray(value)) {
    value.forEach((v, i) => strings(v, `${prefix}[${i}]`, out))
  } else if (value && typeof value === 'object') {
    Object.keys(value).forEach((k) => strings(value[k], prefix ? `${prefix}.${k}` : k, out))
  } else if (typeof value === 'string') {
    out.set(prefix, value)
  }
  return out
}

/* Paths expected to read identically in every language: proper nouns, product
   and technology names, and output mirrored from a C program. Anything *else*
   matching English byte-for-byte is almost certainly an untranslated string.

   This exists because structure checks alone are not enough — a translation
   task once reported success having silently left Greek untouched, and key
   parity passed because the shape was still correct. */
const SHARED_VERBATIM = [
  /^demo\.(safe|unsafe)$/,
  /^home\.dims\[\d+\]\.num$/,
  /^about\.specValues\.(based|current|education|status|focus)$/,
  /^projects\.items\.[\w-]+\.title$/,
  /^projects\.also\.[\w-]+\.title$/,
  /^about\.skillGroups\./,
  /^taskDemo\.(method|endpoint|status)$/,
]

/* Only prose is checked for drift. Short interface labels are frequently
   identical between languages for real reasons — "Contact" and "Source" are
   French words, "Stack" is used as-is by developers in several — and flagging
   them buries the signal. A whole translated sentence matching English
   byte-for-byte never happens by chance. */
const PROSE_MIN_LENGTH = 25

const files = (await readdir(localesDir)).filter((f) => f.endsWith('.js')).sort()
const { default: en } = await import(join(localesDir, 'en.js'))
const reference = shape(en)
const refSet = new Set(reference)
const enStrings = strings(en)

let failed = false

for (const file of files) {
  const code = file.replace(/\.js$/, '')
  if (code === 'en') continue

  const { default: dict } = await import(join(localesDir, file))
  const keys = shape(dict)
  const set = new Set(keys)

  const missing = reference.filter((k) => !set.has(k))
  const extra = keys.filter((k) => !refSet.has(k))

  // Content check: a string identical to English is an untranslated string,
  // unless it is on the verbatim list.
  const localeStrings = strings(dict)
  const untranslated = []
  for (const [path, value] of localeStrings) {
    if (SHARED_VERBATIM.some((re) => re.test(path))) continue
    const source = enStrings.get(path)
    if (source !== undefined && source === value && source.trim().length >= PROSE_MIN_LENGTH) {
      untranslated.push(path)
    }
  }

  if (missing.length || extra.length || untranslated.length) {
    failed = true
    console.error(
      `\n${code}: ${missing.length} missing, ${extra.length} unexpected, ` +
        `${untranslated.length} untranslated`,
    )
    missing.slice(0, 12).forEach((k) => console.error(`  missing       ${k}`))
    extra.slice(0, 12).forEach((k) => console.error(`  extra         ${k}`))
    untranslated.slice(0, 12).forEach((k) =>
      console.error(`  untranslated  ${k}\n                  "${enStrings.get(k).slice(0, 60)}…"`),
    )
  } else {
    console.log(`${code}: ok (${keys.length} entries, all translated)`)
  }
}

if (failed) {
  console.error('\nLocale files are out of sync with en.js.')
  process.exit(1)
}
console.log(`\nAll ${files.length} locales match en.js (${reference.length} entries).`)
