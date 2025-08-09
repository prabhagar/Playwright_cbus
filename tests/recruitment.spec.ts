import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { RecruitmentPage } from '../pages/RecruitmentPage';
import { USERS, RECRUITMENT } from '../fixtures/testData';

test('Search by job title in Recruitment', async ({ page }) => {
  const login = new LoginPage(page);
  const dash = new DashboardPage(page);
  const rec = new RecruitmentPage(page);
  await login.goto('/web/index.php/auth/login');
  await login.login(USERS.admin.username, USERS.admin.password);
  await dash.expectLoaded();
  await dash.goToRecruitment();
  await rec.searchByJobTitle(RECRUITMENT.jobTitle1);
});