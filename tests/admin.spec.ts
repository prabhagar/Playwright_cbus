import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { AdminPage } from '../pages/AdminPage';
import { USERS, NEW_USER } from '../fixtures/testData';

test.describe('Admin user management', () => {
  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto('/web/index.php/auth/login');
    await login.login(USERS.admin.username, USERS.admin.password);
  });

  test('Add user with weak password shows strength error', async ({ page }) => {
    const dash = new DashboardPage(page);
    const admin = new AdminPage(page);
    await dash.expectLoaded();
    await dash.goToAdmin();
    await admin.clickAddUser();
    await admin.selectUserRole('ESS');
    await admin.fillEmployeeName(NEW_USER.employee);
    await admin.selectStatus('Enabled');
    await admin.fillUsername(NEW_USER.username);
    await admin.setPassword(NEW_USER.weakPassword);
    await admin.save();
    await admin.expectPasswordStrengthError();
  });

  test('Add user - full happy path', async ({ page }) => {
    const dash = new DashboardPage(page);
    const admin = new AdminPage(page);
    await dash.expectLoaded();
    await dash.goToAdmin();
    await admin.clickAddUser();
    await admin.selectUserRole('ESS');
    await admin.fillEmployeeName(NEW_USER.employee);
    await admin.selectStatus('Enabled');
    await admin.fillUsername(NEW_USER.username + '_2');
    await admin.setPassword(NEW_USER.strongPassword);
    await admin.save();
    await admin.validateSuccessMessage();
  });

  test('Edit existing user', async ({ page }) => {
    const dash = new DashboardPage(page);
    const admin = new AdminPage(page);
    await dash.expectLoaded();
    await dash.goToAdmin();
    // assume list exists - edit first record
    await admin.editFirstUser(NEW_USER.username);
    await admin.save();
  });
});