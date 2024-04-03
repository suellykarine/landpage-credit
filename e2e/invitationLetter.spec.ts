import { test, expect } from "@playwright/test";

test("Logo goto '/' ", async ({ page }) => {
  await page.goto("http://localhost:3000/invitation-letter");
  const logo = page.locator("#logo-link");
  await logo.click();
  await expect(page).toHaveURL(new RegExp("^http://localhost:3000/"));
});

test("text paragraph", async ({ page }) => {
  await page.goto("http://localhost:3000/invitation-letter");
  const paragraph = page.locator("#Paragraph-under-logo");
  await expect(paragraph).toHaveText(
    "No formulário abaixo, insira seus dados e solicite sua Carta Convite."
  );
});

test("testing all labels", async ({ page }) => {
  await page.goto("http://localhost:3000/invitation-letter");
  let label = page.locator("#label-name");
  await expect(label).toHaveText("Nome Completo*");
  label = page.locator("#label-company");
  await expect(label).toHaveText("Empresa*");
  label = page.locator("#label-email");
  await expect(label).toHaveText("E-mail Corporativo*");
  label = page.locator("#label-phone");
  await expect(label).toHaveText("Telefone*");
});

test("testing submit failed with empty inputs", async ({ page }) => {
  await page.goto("http://localhost:3000/invitation-letter");
  await page.fill("#input-name", "");
  await page.fill("#input-company", "");
  await page.fill("#input-email", "");
  await page.fill("#input-phone", "");
  const button = page.locator("#submit-button");
  await button.click();

  let error = page.locator("#error-input-name");
  await expect(error).toHaveText("Campo Obrigatório");

  error = page.locator("#error-input-company");
  await expect(error).toHaveText("Campo Obrigatório");

  error = page.locator("#error-input-email");
  await expect(error).toHaveText("Campo Obrigatório");

  error = page.locator("#error-input-phone");
  await expect(error).toHaveText("Campo Obrigatório");
});

test("testing submit failed with wrong input email", async ({ page }) => {
  await page.goto("http://localhost:3000/invitation-letter");
  await page.fill("#input-name", "Henrique");
  await page.fill("#input-company", "Developer");
  await page.fill("#input-email", "henrique");
  await page.fill("#input-phone", "1158255555");
  const button = page.locator("#submit-button");
  await button.click();

  let error = page.locator("#error-input-email");
  await expect(error).toHaveText("E-mail inválido");

  error = page.locator("#error-input-phone");
  await expect(error).toHaveText("Campo Obrigatório");
});

// test("testing submit success", async ({ page }) => {
//   await page.goto("http://localhost:3000/invitation-letter");
//   await page.fill("#input-name", "henrique");
//   await page.fill("#input-company", "developer");
//   await page.fill("#input-email", "henrique@gmail.com");
//   await page.fill("#input-phone", "1158253133");
//   const button = page.locator("#submit-button");
//   await button.click();
//   const response = page.locator("#paragraph-response-invitation");
//   await expect(response).toHaveText("^=Sua solicitação foi enviada");
// });
