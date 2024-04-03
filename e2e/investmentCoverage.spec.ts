/* import { test, expect } from "@playwright/test";

test("click invite button", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await page.goto("http://localhost:3000"); // Insira a URL do seu aplicativo Next.js

  // Encontre a seção com o ID "how-to-start"
  const section = await page.$("#investment-coverage");

  // Encontre o botão dentro da seção
  const button = await section!.$(
    'button:has-text("SOLICITE SUA CARTA CONVITE")'
  );

  // Clique no botão
  await button!.click();

  const buttonText = await button!.innerText();
  expect(buttonText).toContain("SOLICITE SUA CARTA CONVITE");

  await button!.click();

  await page.waitForURL("http://localhost:3000/request-invitation-letter");

  expect(page.url()).toBe("http://localhost:3000/request-invitation-letter");
}); */

import { test, expect } from "@playwright/test";

test("click invite button", async ({ page }) => {
  await page.goto("http://localhost:3000"); // Insira a URL do seu aplicativo Next.js

  // Encontre a seção com o ID "how-to-start"
  const section = await page.$("#investment-coverage");

  // Encontre o botão dentro da seção
  const button = await section!.$(
    'button:has-text("SOLICITE SUA CARTA CONVITE")'
  );

  // Clique no botão
  await button!.click();

  await page.waitForURL("http://localhost:3000/request-invitation-letter");

  expect(page.url()).toBe("http://localhost:3000/request-invitation-letter");

  // Aguarde um tempo para observar o resultado
  await page.waitForTimeout(3000);
});
