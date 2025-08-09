import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class RecruitmentPage extends BasePage {
  constructor(page: Page) { super(page); }

  async searchByJobTitle(jobTitle: string) {
    await this.page.locator('.oxd-select-text-input').first().click();
    await this.page.getByRole('option', { name: jobTitle }).click();
    await this.page.getByRole('button', { name: 'Search' }).click();
    await this.page.getByText('(27) Records Found').click();
  }
}