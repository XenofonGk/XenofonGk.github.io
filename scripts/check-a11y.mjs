/*
 * Runs axe-core against the built site and fails on any violation.
 *
 * The bar here is zero violations, not a score. Scores let regressions hide:
 * "97%" reads fine in a summary while a keyboard trap sits behind it.
 *
 * Checks every route, and opens a project modal — dialogs are where this
 * breaks in practice, because focus management and heading order are easy to
 * get wrong and invisible until someone tries to use a keyboard.
 */

import { spawn } from 'node:child_process'
import { setTimeout as sleep } from 'node:timers/promises'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const PORT = 4178
const BASE = `http://127.0.0.1:${PORT}`

const ROUTES = ['/', '/projects', '/about', '/contact', '/projects/train-yard-manager']

const server = spawn(
  'npx',
  ['vite', 'preview', '--port', String(PORT), '--strictPort'],
  { stdio: 'ignore' },
)

const shutdown = () => {
  try {
    server.kill('SIGTERM')
  } catch {
    /* already gone */
  }
}
process.on('exit', shutdown)
process.on('SIGINT', () => {
  shutdown()
  process.exit(130)
})

async function waitForServer(attempts = 40) {
  for (let i = 0; i < attempts; i += 1) {
    try {
      const res = await fetch(BASE + '/')
      if (res.ok) return
    } catch {
      /* not up yet */
    }
    await sleep(500)
  }
  throw new Error(`preview server did not start on ${BASE}`)
}

const puppeteer = (await import('puppeteer')).default
const axePath = require.resolve('axe-core/axe.min.js')

await waitForServer()

const browser = await puppeteer.launch({
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
})

let total = 0

// Both schemes, always. A contrast failure once shipped in light mode while
// dark mode was clean, because the dark token block had not redeclared the
// small-text colour — auditing a single scheme would not have caught it.
const SCHEMES = ['light', 'dark']

try {
  for (const scheme of SCHEMES) {
  for (const route of ROUTES) {
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 900 })
    await page.emulateMediaFeatures([
      { name: 'prefers-color-scheme', value: scheme },
    ])
    await page.goto(BASE + route, { waitUntil: 'networkidle0' })

    // The train-yard route renders a modal containing the WebAssembly demo;
    // give it a moment to instantiate so the audit covers real controls rather
    // than the loading placeholder.
    if (route.includes('train-yard')) {
      await page.waitForSelector('.demo-controls', { timeout: 15000 }).catch(() => {})
    }

    await page.addScriptTag({ path: axePath })
    const result = await page.evaluate(async () => window.axe.run(document))

    if (result.violations.length > 0) {
      total += result.violations.length
      console.error(`\n✗ ${scheme} ${route}`)
      for (const v of result.violations) {
        console.error(`  [${v.impact}] ${v.id} — ${v.help}`)
        for (const node of v.nodes.slice(0, 4)) {
          console.error(`      ${node.target.join(' ')}`)
        }
      }
    } else {
      console.log(`✓ ${scheme.padEnd(5)} ${route} — ${result.passes.length} checks passed`)
    }

    await page.close()
  }
  }
} finally {
  await browser.close()
  shutdown()
}

if (total > 0) {
  console.error(`\n${total} accessibility violation(s). The bar is zero.`)
  process.exit(1)
}

console.log('\nNo accessibility violations.')
