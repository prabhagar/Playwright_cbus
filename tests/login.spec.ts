import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { USERS } from '../fixtures/testData';

test.describe('Login flows', () => {
  test('Login success loads dashboard', async ({ page }) => {
    const login = new LoginPage(page);
    const dash = new DashboardPage(page);
    await login.goto('/web/index.php/auth/login');
    await login.login(USERS.admin.username, USERS.admin.password);
    await dash.expectLoaded();
  });

  test('Incorrect login shows error', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto('/web/index.php/auth/login');
    await login.login(USERS.incorrect.username, USERS.incorrect.password);
    await login.expectLoginError();
  });
});