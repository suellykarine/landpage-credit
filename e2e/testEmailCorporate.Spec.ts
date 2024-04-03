import { test, expect } from "@playwright/test";

test("testing valid emails", async ({ page }) => {
    const validEmailList = ["test@example.com", "minha@empresa.com" ];
    await page.goto("http://localhost:3000/invitation-letter");

    for (const email of validEmailList) {
    await page.fill("#input-email", email);
    const button = page.locator("#submit-button");
   await button.click();
    }
});



test("testing invalid emails", async ({ page }) => {
    const invalidEmails = ["test@gmail.com", "test@hotmail.com", "test@yahoo.com", "test@icloud.com", "test@outlook.com" ];
    await page.goto("http://localhost:3000/invitation-letter");
    
    for (const email of invalidEmails) {
    await page.fill("#input-email", email);
    const button = page.locator("#submit-button");
   await button.click();
   let error = page.locator("#error-input-email");
  await expect(error).toHaveText("Digite um e-mail de empresa válido");
    }
    
});