import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import content from '../content/portfolio.json'
const cases = content.projects.filter((p) => p.caseStudy !== null)
const routes = [
  '/',
  '/projects',
  '/websites',
  '/about',
  ...cases.map((p) => '/projects/' + p.slug),
]
for (const theme of ['light', 'dark']) {
  test.describe(theme, () => {
    test.beforeEach(async ({ page }) => {
      await page.addInitScript(
        (t) => localStorage.setItem('xg-theme', t),
        theme,
      )
    })
    for (const route of routes) {
      test(`${route}: metadata, accessibility and responsive layout`, async ({
        page,
      }) => {
        const errors: string[] = []
        page.on('pageerror', (error) => errors.push(error.message))
        const response = await page.goto(route)
        expect(response?.status()).toBe(200)
        await page.evaluate(() => document.fonts.ready)
        await expect(page.locator('h1')).toHaveCount(1)
        await expect(page.locator('html')).toHaveAttribute('data-theme', theme)
        expect(
          await page.locator('link[rel="canonical"]').getAttribute('href'),
        ).toBe(`https://xgbuilds.dev${route === '/' ? '' : route}`)
        expect(await page.title()).not.toBe('')
        expect(
          await page
            .locator('meta[name="description"]')
            .getAttribute('content'),
        ).toBeTruthy()
        expect(
          await page
            .locator('meta[property="og:title"]')
            .getAttribute('content'),
        ).toBeTruthy()
        const results = await new AxeBuilder({ page }).analyze()
        expect(
          results.violations,
          JSON.stringify(
            results.violations.map((v) => ({
              id: v.id,
              nodes: v.nodes.map((n) => n.target),
            })),
          ),
        ).toEqual([])
        for (const width of [375, 768, 1440]) {
          await page.setViewportSize({ width, height: 1000 })
          expect(
            await page.evaluate(
              () => document.documentElement.scrollWidth <= innerWidth,
            ),
            `Overflow at ${width}`,
          ).toBe(true)
          for (const image of await page.locator('img').all()) {
            await image.scrollIntoViewIfNeeded()
            await expect(image).toHaveJSProperty('complete', true)
          }
          expect(
            await page
              .locator('img')
              .evaluateAll((images) =>
                images.every(
                  (i) =>
                    (i as HTMLImageElement).complete &&
                    (i as HTMLImageElement).naturalWidth > 0,
                ),
              ),
          ).toBe(true)
        }
        expect(errors).toEqual([])
      })
    }
    test('Keyboard navigation, theme, mutation and real demo', async ({
      page,
    }) => {
      const wasm: string[] = []
      page.on('request', (r) => {
        if (r.url().includes('/wasm/')) wasm.push(r.url())
      })
      await page.goto('/')
      await page.keyboard.press('Tab')
      await expect(
        page.getByRole('link', { name: 'Skip to content' }),
      ).toBeFocused()
      await page.keyboard.press('Enter')
      await expect(page.locator('#main')).toBeFocused()
      const toggle = page.getByRole('button', { name: /Switch to .* mode/ })
      await toggle.focus()
      await page.keyboard.press('Enter')
      await expect(page.locator('html')).toHaveAttribute(
        'data-theme',
        theme === 'light' ? 'dark' : 'light',
      )
      await page.keyboard.press('Enter')
      await page.getByRole('button', { name: 'Input: 0', exact: true }).click()
      await expect(
        page.locator('.code-comparison [role="status"]'),
      ).toContainText('At the boundary')
      expect(wasm).toEqual([])
      const launch = page.getByRole('button', { name: 'Launch ArenaCore' })
      await launch.focus()
      await page.keyboard.press('Enter')
      await expect(
        page.getByRole('button', { name: 'Take turn' }),
      ).toBeVisible()
      expect(wasm.some((url) => url.endsWith('.wasm'))).toBe(true)
      const before = await page.locator('.hp-text').allTextContents()
      await page.getByRole('button', { name: 'Take turn' }).click()
      expect(await page.locator('.hp-text').allTextContents()).not.toEqual(
        before,
      )
      await page.getByRole('button', { name: 'Reset', exact: true }).click()
      expect(await page.locator('.hp-text').allTextContents()).toEqual(before)
      await page
        .getByLabel('Opponent', { exact: true })
        .selectOption({ index: 0 })
      const opponent = await page.locator('.fighter-head h3').allTextContents()
      expect(new Set(opponent).size).toBe(2)
      const beforeUpgrade = await page.locator('.hp-text').first().textContent()
      await page
        .getByRole('button', { name: 'Level up', exact: true })
        .first()
        .click()
      expect(await page.locator('.hp-text').first().textContent()).not.toBe(
        beforeUpgrade,
      )
      expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([])
      await page.setViewportSize({ width: 375, height: 850 })
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true)
      await page.getByRole('button', { name: 'Close the demo' }).click()
      await expect(launch).toBeFocused()
    })
  })
}
test('Reduced motion, route metadata uniqueness, CV and meaningful 404', async ({
  page,
  request,
}) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  const titles = new Set<string>()
  for (const route of routes) {
    await page.goto(route)
    titles.add(await page.title())
    await expect(page.locator('h1')).toBeVisible()
  }
  expect(titles.size).toBe(routes.length)
  await page.goto('/')
  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
  ).toBe('auto')
  expect((await request.get('/cv/Xenofon_Gkioka_CV.pdf')).status()).toBe(200)
  expect((await page.goto('/projects/does-not-exist'))?.status()).toBe(404)
  await expect(
    page.getByRole('heading', { name: "This page isn't here." }),
  ).toBeVisible()
})

test('Exported navigation and preview assets resolve without SPA fallbacks', async ({
  page,
  request,
}) => {
  const localLinks = new Set<string>()
  for (const route of routes) {
    await page.goto(route)
    for (const href of await page
      .locator('a[href]')
      .evaluateAll((links) =>
        links.map((link) => link.getAttribute('href')!),
      )) {
      if (href.startsWith('#'))
        expect(
          await page.locator(`[id="${href.slice(1)}"]`).count(),
          `${route}${href}`,
        ).toBe(1)
      else if (href.startsWith('/')) localLinks.add(href)
    }
    const image = await page
      .locator('meta[property="og:image"]')
      .getAttribute('content')
    expect(image).toBeTruthy()
    expect((await request.get(new URL(image!).pathname)).status()).toBe(200)
    expect(
      await page
        .locator('meta[property="og:image:width"]')
        .getAttribute('content'),
    ).toBe('1200')
    expect(
      await page
        .locator('meta[property="og:image:height"]')
        .getAttribute('content'),
    ).toBe('630')
  }
  for (const href of localLinks)
    expect((await request.get(href.split('#')[0])).status(), href).toBe(200)
})

for (const theme of ['light', 'dark']) {
  test(`Train validator preserves numeric state on unsafe removal: ${theme}`, async ({
    page,
  }) => {
    await page.addInitScript((t) => localStorage.setItem('xg-theme', t), theme)
    await page.goto('/projects')
    await page.getByRole('button', { name: 'Launch train validator' }).click()
    await page.getByRole('button', { name: 'Remove a loaded engine' }).click()
    const readout = page.locator('.demo-readout .demo-stat .v')
    expect(
      (await readout.allTextContents())
        .slice(0, 4)
        .map((s) => s.replaceAll(',', '').trim()),
    ).toEqual(['3', '2', '8000 / 20000', '6000 / 10000'])
    const before = await readout.allTextContents()
    await page
      .getByRole('button', { name: 'Remove car 0, Engine, weight 1000' })
      .click()
    expect(await readout.allTextContents()).toEqual(before)
    await expect(page.locator('.demo-status')).toContainText(
      'the freight would weigh more than the engines can pull',
    )
    expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([])
    await page.setViewportSize({ width: 375, height: 850 })
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true)
  })
}

test('Client case-study links describe the website they belong to', async ({
  page,
}) => {
  await page.goto('/websites')
  for (const item of await page.locator('.website-item').all()) {
    for (const link of await item.locator('a[href^="/projects/"]').all()) {
      const slug = (await link.getAttribute('href'))!.split('/').at(-1)
      const project = content.projects.find((p) => p.slug === slug)
      expect(project).toBeTruthy()
      expect(await item.locator('h3').innerText()).toContain(project!.title)
    }
  }
})
