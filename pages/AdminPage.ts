import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class AdminPage extends BasePage {
  constructor(page: Page) { super(page); }

  // open Add User modal
  async clickAddUser() {
    await this.page.getByRole('button', { name: 'Add' }).click();
    await expect(this.page.locator('h6:has-text("Add User")')).toBeVisible();
  }

  async selectUserRole(roleLabel: string) {
    await this.page.getByText('-- Select --').first().click();
    await this.page.getByRole('option', { name: 'ESS' }).click();

    // options render inside .oxd-select-dropdown -- click by text
    await this.page.getByText(roleLabel, { exact: true }).click();
  }

  async fillEmployeeName(name: string) {
    await this.page.getByRole('textbox', { name: 'Type for hints...' }).fill(name);
    await this.page.getByText(name).click();
  }

  async selectStatus(status: string) {
    await this.page.getByText('-- Select --').click();
    await this.page.getByRole('option', { name: 'Enabled' }).click();
  }

  async fillUsername(username: string) {
//     await this.page.locator('input[name="username"]').fill(username);
    await this.page.locator('div').filter({ hasText: /^Username$/ }).nth(1).click();
    await this.page.getByRole('textbox').nth(2).fill(username);
  }

  async setPassword(pw: string) {
    await this.page.getByRole('textbox').nth(3).click();
    await this.page.getByRole('textbox').nth(3).fill(pw);
    await this.page.getByRole('textbox').nth(3).press('Tab');
    await this.page.getByRole('textbox').nth(4).fill(pw);
  }

  async save() {
    await this.page.getByRole('button', { name: 'Save' }).click();
  }

  async validateSuccessMessage() {
    await this.page.getByText('SuccessSuccessfully Saved×').click();
  }

  async expectPasswordStrengthError() {
    await expect(this.page.locator('span:has-text("Should have at least")')).toBeVisible();
  }

  async searchUserByUsername(username: string) {
    await this.page.locator('input[placeholder="Type for hints..."]').fill('');
    // Search by username input
    await this.page.locator('input[placeholder="Type for hints..."]').fill('');
    await this.page.locator('input[placeholder="Type for hints..."]').fill('');
    // fallback: use the username search box
    const nameOrUser = this.page.locator('input.oxd-input').nth(1);
    await nameOrUser.fill(username);
    await this.page.getByRole('button', { name: 'Search' }).click();
  }

  async editFirstUser(username: string) {
    // Locate the first row in the table
    const firstRow = this.page.locator('div.oxd-table-body div.oxd-table-card').first();

    // Click the edit button (pencil icon) in the first row
    await firstRow.locator('i.oxd-icon.bi-pencil-fill').click();
    await this.page.locator('div').filter({ hasText: /^Username$/ }).nth(1).click();
    await this.page.getByRole('textbox').nth(2).fill(username);
  }
}