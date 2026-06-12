import { test as base, expect } from "@playwright/test";
import { LoginPage } from "./pages/LoginPage";
import { LoginSuccessPage } from "./pages/LoginSuccessPage";
import { ExceptionPage } from "./pages/ExceptionPage";

export const test = base.extend<{
  loginPage: LoginPage;
  loginSuccessPage: LoginSuccessPage;
  exceptionPage: ExceptionPage;
}>({
  loginSuccessPage: async ({ page }, use) => {
    const loginSuccessPage = new LoginSuccessPage(page);

    await use(loginSuccessPage);

    await loginSuccessPage.clickLogoutBtn();
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();

    await use(loginPage);
  },

  exceptionPage: async ({ page, loginPage }, use) => {
    await loginPage.login("student", "Password123");
    const exceptionPage = new ExceptionPage(page);
    await exceptionPage.navigateToExceptionPage();

    await use(exceptionPage);
  },
});
