import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async goto(path: string) {
    await this.page.goto(path);
    // If path starts with "/", Playwright will prepend baseURL automatically.
  }

  // small wrapper to wait for visible and click
  async click(locator: string) {
    await this.page.locator(locator).waitFor({ state: 'visible' });
    await this.page.locator(locator).click();
  }

  async fill(locator: string, text: string) {
    await this.page.locator(locator).fill(text);
  }
}