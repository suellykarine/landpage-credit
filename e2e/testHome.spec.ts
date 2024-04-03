import { test, expect } from "@playwright/test";

test("should navigate to the srmasset", async ({ page }) => {
  //testa o botão de navegação
  await page.goto("/");
  await page.getByRole("button").click();

  await expect(page).toHaveURL("https://www.srmasset.com/");
});

test("must test the texts of the page", async ({ page }) => {
  //testa o primeiro texto da página
  await page.goto("/");
  const P = page.getByRole("paragraph");
  await expect(P).toHaveText("CREDIT CONNECT");

  //testa o segundo texto da página
  await page.goto("/");
  const H1 = page.getByRole("heading");
  await expect(H1).toHaveText(
    "A plataforma de mercado secundário de ativos de créditos do Brasil"
  );

  //testa o terceiro texto da página
  await page.goto("/");
  const span = page.getByText("Faça suas operações pelo Credit Connect");
  await expect(span).toBeVisible();
});
