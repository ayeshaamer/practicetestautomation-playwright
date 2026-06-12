import { expect } from "@playwright/test";
import { test } from "../../fixture";

test("Row 2 Visibility", async ({ exceptionPage }) => {
  await exceptionPage.clickAddButton();
  await exceptionPage.waitForLoading();

  await expect(exceptionPage.checkRowInputVisibilty(2)).toBeTruthy();

  await expect(exceptionPage.getConfimationMessage()).toHaveText(
    "Row 2 was added",
  );
});
