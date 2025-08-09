import { PlaywrightTestConfig } from '@playwright/test';
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com',
    headless: false,
  },
});


const config: PlaywrightTestConfig = {
  testDir: 'tests',
  timeout: 60_000,
  expect: { timeout: 5000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [
    ['allure-playwright', { outputFolder: 'allure-results' }]
  ],
  use: {
    viewport: { width: 1280, height: 800 },
    actionTimeout: 15_000,
    trace: 'on-first-retry'
  }
};
