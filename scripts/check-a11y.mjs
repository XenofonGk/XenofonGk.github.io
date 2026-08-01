/*
 * Runs axe-core against the built site and fails on any violation.
 *
 * The bar here is zero violations, not a score. Scores let regressions hide:
 * "97%" reads fine in a summary while a keyboard trap sits behind it.
 *
 * Serves dist/ from an in-process static server rather than shelling out to
 * `vite preview`. That removes a subprocess whose failures are easy to swallow,
 * and lets path resolution mirror GitHub Pages exactly — /about resolves to
 * about.html or about/index.html, which is what production actually does.
 *
 * Every route is audited in BOTH colour schemes. Three real contrast bugs once
 * shipped past manual testing because that testing only ever happened in dark
 * mode, and two of them were clean in the other scheme.
 */

import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
import { join, extname, normalize } from 'node:path'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const DIST = new URL('../dist/', import.meta.url).pathname

const ROUTES = [
  '/',
  '/projects',
  '/about',
  '/contact',
  // Both demo routes: interactive controls and data tables are where this
  // breaks, so a project gaining a demo must be added here.
  '/projects/train-yard-manager',
  '/projects/taskmanager-api',
]
const SCHEMES = ['light', 'dark']

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.wasm': 'application/wasm',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
}

// Mirrors GitHub Pages: exact file, then <path>.html, then <path>/index.html.
async function resolve(pathname) {
  const clean = normalize(decodeURIComponent(pathname)).replace(/^(\.\.[/\\])+/, '')
  const candidates = extname(clean)
    ? [clean]
    : [`${clean}.html`, join(clean, 'index.html')]

  for (const candidate of candidates) {
    try {
      const body = await readFile(join(DIST, candidate))
      return { body, type: TYPES[extname(candidate)] || 'application/octet-stream' }
    } catch {
      /* try the next shape */
    }
  }
  return null
}

const server = createServer(async (req, res) => {
  const hit = await resolve(new URL(req.url, 'http://localhost').pathname)
  if (!hit) {
    res.writeHead(404, { 'content-type': 'text/plain' })
    res.end('not found')
    return
  }
  res.writeHead(200, { 'content-type': hit.type })
  res.end(hit.body)
})

await new Promise((ok) => server.listen(0, '127.0.0.1', ok))
const BASE = `http://127.0.0.1:${server.address().port}`

const puppeteer = (await import('puppeteer')).default
const axePath = require.resolve('axe-core/axe.min.js')

const browser = await puppeteer.launch({
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
})

let total = 0

try {
  for (const scheme of SCHEMES) {
    for (const route of ROUTES) {
      const page = await browser.newPage()
      await page.setViewport({ width: 1280, height: 900 })
      await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: scheme }])
      await page.goto(BASE + route, { waitUntil: 'networkidle0' })

      // The train-yard route opens a modal holding the WebAssembly demo; wait
      // for it so the audit covers real controls, not a loading placeholder.
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
            const detail = node.any?.[0]?.message
            if (detail) console.error(`        ${detail}`)
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
  server.close()
}

if (total > 0) {
  console.error(`\n${total} accessibility violation(s). The bar is zero.`)
  process.exit(1)
}

console.log('\nNo accessibility violations.')
