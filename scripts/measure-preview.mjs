import { chromium } from '@playwright/test'
import { writeFile } from 'node:fs/promises'
const browser = await chromium.launch()
const result = {
  settings: {
    browser: browser.version(),
    viewport: '1440×1000',
    deviceScaleFactor: 1,
    network: 'unthrottled localhost',
    cpu: 'unthrottled',
    runs: 3,
  },
  results: {},
}
for (const [name, url] of [
  ['baseline', 'http://127.0.0.1:4174'],
  ['candidate', 'http://127.0.0.1:4173'],
]) {
  const runs = []
  for (let i = 0; i < 3; i++) {
    const context = await browser.newContext({
      viewport: { width: 1440, height: 1000 },
      deviceScaleFactor: 1,
    })
    const page = await context.newPage()
    await page.addInitScript(() => {
      window.__lab = { lcp: 0, cls: 0 }
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries())
          window.__lab.lcp = entry.startTime
      }).observe({ type: 'largest-contentful-paint', buffered: true })
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries())
          if (!entry.hadRecentInput) window.__lab.cls += entry.value
      }).observe({ type: 'layout-shift', buffered: true })
    })
    await page.goto(url, { waitUntil: 'networkidle' })
    await page.evaluate(() => document.fonts.ready)
    runs.push(
      await page.evaluate(() => ({
        ...window.__lab,
        resources: performance.getEntriesByType('resource').length,
        resourceBytes: performance
          .getEntriesByType('resource')
          .reduce((sum, r) => sum + r.encodedBodySize, 0),
      })),
    )
    await context.close()
  }
  result.results[name] = runs
}
await browser.close()
await writeFile(
  '/tmp/portfolio-review/performance.json',
  JSON.stringify(result, null, 2) + '\n',
)
console.log(JSON.stringify(result))
