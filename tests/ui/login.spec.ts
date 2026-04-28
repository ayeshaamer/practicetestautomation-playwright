import { expect } from "@playwright/test";
import { test } from "../../fixture";

test("postive login flow", async ({ loginSuccessPage, loginPage }) => {
  await loginPage.login("student", "Password123");

  await expect(loginSuccessPage.getPageHeading()).toHaveText(
    "Logged In Successfully",
  );
});

test("negative login flow - incorrect username", async ({ loginPage }) => {
  await loginPage.login("incorrectUser", "Password123");

  await expect(loginPage.getErrorText()).toHaveText(
    "Your username is invalid!",
  );
});

test("negative login flow - incorrect password", async ({ loginPage }) => {
  await loginPage.login("student", "incorrectPassword");

  await expect(loginPage.getErrorText()).toHaveText(
    "Your password is invalid!",
  );
});
