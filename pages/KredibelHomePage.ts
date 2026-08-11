import { expect, Locator, Page } from '@playwright/test';

export class KredibelHomePage {
  readonly page: Page;
  readonly heading: Locator;
  readonly accountInput: Locator;
  readonly phoneInput: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: /Cek Penipu Online|Cek Rekening Penipu Online|Cek Telepon Penipu Online|Lapor Penipuan Online/ });
    this.accountInput = page.getByPlaceholder('Masukkan nomor rekening').first();
    this.phoneInput = page.getByPlaceholder('Masukkan nomor telepon').first();
    this.searchButton = page.getByRole('button', { name: 'Cari' }).first();
  }

  async goto() {
    await this.page.goto('/');
  }

  async gotoAccountSearch() {
    await this.page.goto('/search');
  }

  async gotoPhoneSearch() {
    await this.page.goto('/search/phone');
  }

  async gotoReportFraud() {
    await this.page.goto('/report/');
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
    await expect(this.accountInput).toBeVisible();
  }

  async fillAccountNumber(accountNumber: string) {
    await this.accountInput.fill(accountNumber);
  }

  async fillPhoneNumber(phoneNumber: string) {
    await this.phoneInput.fill(phoneNumber);
  }
}
