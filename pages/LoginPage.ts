import { Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitBtn: Locator;
  readonly errorArea: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByRole("textbox", { name: "username" });
    this.passwordInput = page.getByRole("textbox", { name: "password" });
    this.submitBtn = page.getByRole("button", { name: "Submit" });
    this.errorArea = page.locator("#error");
  }

  async navigateToLoginPage() {
    await this.page.goto(
      "https://practicetestautomation.com/practice-test-login/",
    );
  }

  async enterUsername(username: string) {
    await this.usernameInput.fill(username);
  }

  async enterPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickSubmitButton() {
    await this.submitBtn.click();
  }

  async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickSubmitButton();
  }

  getErrorText() {
    return this.errorArea;
  }
}
