import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly username = 'input[name="username"]';
  readonly password = 'input[name="password"]';
  readonly loginBtn = 'button[type="submit"]';
  readonly errorToast = '.oxd-alert-content-text';

  constructor(page: Page) { super(page); }

  async login(username: string, password: string) {
    await this.page.fill(this.username, username);
    await this.page.fill(this.password, password);
    await this.page.click(this.loginBtn);
  }

  async expectLoginError() {
    await expect(this.page.locator(this.errorToast)).toBeVisible();
  }
}