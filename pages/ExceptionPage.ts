import { Locator, Page } from "@playwright/test";

export class ExceptionPage {
  readonly page: Page;
  readonly practiceLink: Locator;
  readonly practiceHeading: Locator;
  readonly exceptionLink: Locator;
  readonly exceptionHeading: Locator;
  readonly addBtn: Locator;
  readonly loadingText: Locator;
  readonly confirmationMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.practiceLink = this.page.getByRole("link", {
      name: "Practice",
      exact: true,
    });
    this.practiceHeading = this.page.getByRole("heading", { name: "Practice" });
    this.exceptionLink = this.page.getByRole("link", {
      name: "Test Exceptions",
      exact: true,
    });
    this.exceptionHeading = this.page.getByRole("heading", {
      name: "Test Exceptions",
    });
    this.addBtn = this.page.getByRole("button", { name: "Add" });
    this.loadingText = this.page.locator("#loading");
    this.confirmationMessage = this.page.locator("#confirmation");
  }

  async navigateToExceptionPage() {
    this.practiceLink.click();
    await this.practiceHeading.waitFor({ state: "visible" });
    await this.exceptionLink.click();
    await this.exceptionHeading.waitFor({ state: "visible" });
  }

  async clickAddButton() {
    await this.addBtn.click();
  }

  async waitForLoading() {
    await this.loadingText.waitFor({ state: "hidden" });
  }

  async checkRowInputVisibilty(row: number) {
    await this.page.getByLabel(`Row ${row}`).isVisible();
  }

  getConfimationMessage() {
    return this.confirmationMessage;
  }
}
