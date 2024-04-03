import { test, expect } from "@playwright/test";

test("deve estar com todos os links funcionais", async ({ page }) => {
  await page.goto("http://localhost:3000");
  const header = page.locator("#container-header");

  // Testar se o Logotipo esta correto.
  await page.click(".logo");
  await page.waitForURL("https://www.google.com/");
  await expect(page).toHaveURL(new RegExp("^https://www.google.com/"));

  // Testar o link Quem somos e pra onde ele leva.
  await page.goto("http://localhost:3000");
  await page.click("a >> text=Quem Somos");
  await page.waitForURL("https://www.google.com/");
  await expect(page).toHaveURL(new RegExp("^https://www.google.com/"));

  // Tetsar o link Investimentos e pra onde ele leva.
  await page.goto("http://localhost:3000");
  await page.click("a >> text=Investimentos");
  await page.waitForURL("https://www.google.com/");
  await expect(page).toHaveURL(new RegExp("^https://www.google.com/"));

  // Testar o link Soluções e pra onde ele leva.
  await page.goto("http://localhost:3000");
  await page.click("a >> text=Soluções");
  await page.waitForURL("https://www.google.com/");
  await expect(page).toHaveURL(new RegExp("^https://www.google.com/"));

  // Testar o link Simuladores e pra onde ele leva.
  await page.goto("http://localhost:3000");
  await page.click("a >> text=Simuladores");
  await page.waitForURL("https://www.google.com/");
  await expect(page).toHaveURL(new RegExp("^https://www.google.com/"));

  // Testar o link ACESSAR A PLATAFORMA e pra onde ele leva.
  await page.goto("http://localhost:3000");
  await page.click("#plataform-access");
  await page.waitForURL("https://www.google.com/");
  await expect(page).toHaveURL(new RegExp("^https://www.google.com/"));
});
test("Os links devem ter o textos corretos", async ({ page }) => {
  await page.goto("http://localhost:3000");
  let link = page.locator("a >> text=Quem Somos");
  await expect(link).toHaveText("Quem Somos");

  await page.goto("http://localhost:3000");
  link = page.locator("a >> text=Investimentos");
  await expect(link).toHaveText("Investimentos");

  await page.goto("http://localhost:3000");
  link = page.locator("a >> text=Soluções");
  await expect(link).toHaveText("Soluções");

  await page.goto("http://localhost:3000");
  link = page.locator("a >> text=Simuladores");
  await expect(link).toHaveText("Simuladores");

  await page.goto("http://localhost:3000");
  link = page.locator("#plataform-access");
  await expect(link).toHaveText("ACESSAR A PLATAFORMA");
});
