import { test, expect } from "@playwright/test";

test("should navigate to the Solicite sua carta convite button", async ({
  page,
}) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("/");
  // The new page should contain an button with "Solicite sua carta convite"
  await expect(page.locator("button")).toContainText(
    "SOLICITE SUA CARTA CONVITE"
  );
});
