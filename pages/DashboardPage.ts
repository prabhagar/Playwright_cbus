import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
  readonly heading = 'h6:has-text("Dashboard")';
  constructor(page: Page) { super(page); }

  async expectLoaded() {
    await expect(this.page.locator(this.heading)).toBeVisible({ timeout: 10_000 });
  }

  async goToAdmin() {
    await this.page.getByRole('link', { name: 'Admin' }).click();
  }

  async goToRecruitment() {
    await this.page.getByRole('link', { name: 'Recruitment' }).click();
  }

  async goToMyInfo() {
    await this.page.getByRole('link', { name: 'My Info' }).click();
  }
}