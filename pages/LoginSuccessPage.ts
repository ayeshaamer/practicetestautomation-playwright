import { Page, Locator } from "@playwright/test";

export class LoginSuccessPage {
  readonly page: Page;
  readonly pageHeading: Locator;
  readonly logoutBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageHeading = page.locator(".post-title");
    this.logoutBtn = page.getByRole("link", { name: /log out/i });
  }

  getPageHeading() {
    return this.pageHeading;
  }

  async clickLogoutBtn() {
    await this.logoutBtn.click();
  }
}
