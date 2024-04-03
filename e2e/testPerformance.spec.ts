import { test, expect } from "@playwright/test";

test("should navigate to the srmasset", async ({ page }) => {
  await page.goto("/");
  await page.locator("#buttonPerformance").click();

  await expect(page).toHaveURL("https://www.srmasset.com/");
});
