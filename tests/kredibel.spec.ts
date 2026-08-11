import { expect, test } from '@playwright/test';
import { KredibelHomePage } from '../pages/KredibelHomePage';

test('user can open Kredibel homepage', async ({ page }) => {
  const homePage = new KredibelHomePage(page);

  await homePage.goto();

  await expect(page).toHaveURL(/kredibel\.com/);
  await homePage.expectLoaded();
});

test('user can fill account search form', async ({ page }) => {
  const homePage = new KredibelHomePage(page);

  await homePage.gotoAccountSearch();
  await homePage.fillAccountNumber('159753258000');

  await expect(page).toHaveURL(/\/search/);
  await expect(homePage.accountInput).toHaveValue('159753258000');
  await expect(homePage.searchButton).toBeEnabled();
});

test('user can fill phone check form', async ({ page }) => {
  const homePage = new KredibelHomePage(page);

  await homePage.gotoPhoneSearch();
  await homePage.fillPhoneNumber('088852147963');

  await expect(page).toHaveURL(/\/search\/phone/);
  await expect(homePage.phoneInput).toBeVisible();
  await expect(homePage.phoneInput).toHaveValue('088852147963');
});

test('user can open report fraud page without submitting data', async ({ page }) => {
  const homePage = new KredibelHomePage(page);

  await homePage.gotoReportFraud();

  await expect(page).toHaveURL(/\/report/);
  await expect(page.getByRole('heading', { name: 'Lapor Penipuan Online' })).toBeVisible();
  await expect(page.getByText('Nomor Rekening').first()).toBeVisible();
});
