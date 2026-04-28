import { test as base, expect } from "@playwright/test";
import { LoginPage } from "./pages/LoginPage";
import { LoginSuccessPage } from "./pages/LoginSuccessPage";

export const test = base.extend<{
  loginPage: LoginPage;
  loginSuccessPage: LoginSuccessPage;
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
});
