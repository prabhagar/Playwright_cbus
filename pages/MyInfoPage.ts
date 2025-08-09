import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class MyInfoPage extends BasePage {
  constructor(page: Page) { super(page); }

  async goToContactDetails() {
    await this.page.getByRole('link', { name: 'Contact Details' }).click();
  }

  async fillContactDetails(details: { address: string; city: string; state: string; zipcode: string }) {
    await this.page.locator('div').filter({ hasText: /^Street 1$/ }).nth(1).click();
    await this.page.locator('.oxd-input.oxd-input--focus').fill('600 Latrobe st');
    await this.page.locator('div').filter({ hasText: /^State\/Province$/ }).nth(1).click();
    await this.page.locator('.oxd-input.oxd-input--focus').fill('Docklands');
  }

  async attachDocument(relativePath: string) {
    // attach file to file input (if exists)
      await this.page.getByRole('button', { name: ' Add' }).click();
      await this.page.getByText('Browse').click();
      await this.page.getByText('No file selected').click();
      await this.page.getByRole('button', { name: 'Choose File' }).setInputFiles('sample-local-pdf.pdf');
      await this.page.getByRole('button', { name: 'Save' }).nth(1).click();
      await this.page.getByText('SuccessSuccessfully Saved×').click();
  }

  async addComment(comment: string) {
    await this.page.locator('textarea').fill(comment);
    await this.page.getByRole('button', { name: 'Save' }).click();
  }
}


//
// await page.getByRole('link', { name: 'Contact Details' }).click();
//   await page.locator('div:nth-child(2) > .oxd-input').first().click();
//   await page.locator('.oxd-input.oxd-input--focus').fill('600 Latrobe st');
//   await page.locator('div:nth-child(4) > .oxd-input-group > div:nth-child(2) > .oxd-input').click();
//   await page.locator('.oxd-input.oxd-input--focus').fill('Dockalnds');
//   await page.locator('div:nth-child(4) > .oxd-input-group > div:nth-child(2) > .oxd-input').click();
//   await page.locator('div').filter({ hasText: /^Street 1$/ }).nth(1).click();
//   await page.locator('.oxd-input.oxd-input--focus').click();
//   await page.locator('.oxd-input.oxd-input--focus').click();
//   await page.locator('div').filter({ hasText: /^Street 1$/ }).nth(2).click();
//   await page.locator('div').filter({ hasText: /^Street 1$/ }).nth(1).click();
//   await page.locator('.oxd-input.oxd-input--focus').press('ControlOrMeta+a');
//   await page.locator('.oxd-input.oxd-input--focus').fill('600 Latrobe st');
//   await page.locator('div').filter({ hasText: /^State\/Province$/ }).nth(1).click();
//   await page.locator('.oxd-input.oxd-input--focus').press('ControlOrMeta+a');
//   await page.locator('.oxd-input.oxd-input--focus').fill('Docklands');
//   await page.getByRole('button', { name: ' Add' }).click();
//   await page.getByText('Browse').click();
//   await page.getByText('No file selected').click();
//   await page.getByRole('button', { name: 'Choose File' }).setInputFiles('sample-local-pdf.pdf');
//   await page.getByRole('button', { name: 'Save' }).nth(1).click();
//   await page.getByText('SuccessSuccessfully Saved×').click();
//   await page.getByRole('row', { name: ' sample-local-pdf.pdf 49.67' }).click();