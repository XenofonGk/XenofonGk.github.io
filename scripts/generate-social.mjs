import { chromium } from '@playwright/test'
import { readFile, mkdir } from 'node:fs/promises'
const content = JSON.parse(await readFile('content/portfolio.json', 'utf8'))
const font = (await readFile('app/fonts/archivo.woff2')).toString('base64')
const template = await readFile('scripts/social-template.html', 'utf8')
const escape = (s) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[
        c
      ],
  )
const routes = [
  ['home', 'Selected work', 'Useful software. Thoughtfully built.'],
  ['projects', 'Engineering', 'Work you can look inside.'],
  ['websites', 'For businesses', 'Your business. Clearly online.'],
  ['about', 'About Xenofon', 'Built on practical experience.'],
  ...content.projects.map((p) => [p.slug, 'Case study', p.title]),
]
await mkdir('public/social', { recursive: true })
const browser = await chromium.launch()
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1,
})
for (const [slug, label, title] of routes) {
  await page.setContent(
    template
      .replace('__FONT__', font)
      .replace('__LABEL__', escape(label))
      .replace('__TITLE__', escape(title)),
  )
  await page.evaluate(() => document.fonts.ready)
  await page.screenshot({ path: `public/social/${slug}.png` })
}
await browser.close()
console.log(
  `Generated ${routes.length} social cards from the committed HTML template.`,
)
