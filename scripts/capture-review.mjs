import { chromium } from '@playwright/test'
import { mkdir } from 'node:fs/promises'
const output = process.env.REVIEW_DIR || '/tmp/portfolio-review'
await mkdir(output, { recursive: true })
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } })
for (const theme of ['light', 'dark']) {
  await page.addInitScript((t) => localStorage.setItem('xg-theme', t), theme)
  for (const [name, url] of [
    ['baseline', 'http://127.0.0.1:4174'],
    ['candidate', 'http://127.0.0.1:4173'],
  ]) {
    await page.goto(url)
    await page.evaluate(() => document.fonts.ready)
    for (const image of await page.locator('img').all())
      await image.scrollIntoViewIfNeeded()
    await page.evaluate(() => scrollTo(0, 0))
    await page.screenshot({
      path: `${output}/${name}-${theme}.png`,
      fullPage: true,
    })
  }
  await page.goto('http://127.0.0.1:4173/websites')
  await page.evaluate(() => document.fonts.ready)
  for (const image of await page.locator('img').all())
    await image.scrollIntoViewIfNeeded()
  await page.evaluate(() => scrollTo(0, 0))
  await page.screenshot({
    path: `${output}/websites-${theme}.png`,
    fullPage: true,
  })
  for (const slug of ['ai-eng', 'kykloc', 'az-clean']) {
    await page.goto(`http://127.0.0.1:4173/projects/${slug}`)
    await page.evaluate(() => document.fonts.ready)
    for (const image of await page.locator('img').all()) {
      await image.scrollIntoViewIfNeeded()
      await image.evaluate((el) =>
        el.complete
          ? Promise.resolve()
          : new Promise((resolve) =>
              el.addEventListener('load', resolve, { once: true }),
            ),
      )
    }
    await page.evaluate(() => scrollTo(0, 0))
    await page.screenshot({
      path: `${output}/case-${slug}-${theme}.png`,
      fullPage: true,
    })
  }
  await page.setViewportSize({ width: 375, height: 850 })
  await page.goto('http://127.0.0.1:4173')
  await page.screenshot({
    path: `${output}/mobile-${theme}.png`,
    fullPage: true,
  })
  await page.setViewportSize({ width: 1440, height: 1000 })
}
await browser.close()
console.log(`Review screenshots: ${output}`)
