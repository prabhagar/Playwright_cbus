import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { MyInfoPage } from '../pages/MyInfoPage';
import { USERS } from '../fixtures/testData';
import { getAttachmentPath } from '../utils/FileHelper';

test('My Info - add contact details and attachment', async ({ page }) => {
  const login = new LoginPage(page);
  const dash = new DashboardPage(page);
  const my = new MyInfoPage(page);

  await login.goto('/web/index.php/auth/login');
  await login.login(USERS.admin.username, USERS.admin.password);
  await dash.expectLoaded();
  await dash.goToMyInfo();
  await my.goToContactDetails();
  await my.fillContactDetails({ address: '10 Downing St', city: 'London', state: 'Greater', zipcode: 'SW1A 2AA' });
  const path = getAttachmentPath('sample.pdf');
  await my.attachDocument(path);
  await my.addComment('Automated contact update');
  await expect(page.locator('.oxd-toast-content')).toBeVisible();
});