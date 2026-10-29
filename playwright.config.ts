import { defineConfig } from '@playwright/test'
export default defineConfig({
  testDir: './tests',
  timeout: 45000,
  fullyParallel: false,
  workers: 2,
  use: {
    baseURL: 'http://127.0.0.1:4173',
    viewport: { width: 1440, height: 1000 },
    trace: 'retain-on-failure',
  },
  reporter: [['list']],
  webServer: {
    command: 'node scripts/serve.mjs',
    url: 'http://127.0.0.1:4173',
    reuseExistingServer: !process.env.CI,
  },
})
