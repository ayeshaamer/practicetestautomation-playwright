import { expect, test } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { LoginSuccessPage } from "../../pages/LoginSuccessPage";

test("postive login flow", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const loginSuccessPage = new LoginSuccessPage(page);

  await loginPage.navigateToLoginPage();
  await loginPage.login("student", "Password123");

  await expect(loginSuccessPage.getPageHeading()).toHaveText(
    "Logged In Successfully",
  );
});

test("negative login flow - incorrect username", async ({ page }) => {});

test("negative login flow - incorrect password", async ({ page }) => {});
