import { test, expect } from "@playwright/test";

test("testando carrossel para verificar se está mudando de acordo do 1 pro 2", async ({
  page,
}) => {
  await page.goto("http://localhost:3000");
  const buttonCarousel = page.locator(
    ".mantine-Carousel-indicator:nth-child(2)"
  );
  await buttonCarousel.click();
  const text = page
    .locator("#slide-2")
    .getByText(
      "2Usei todas as ferramentas do CreditConnect. Essa plataforma realmente fornece a "
    );
  await expect(text).toHaveText(
    "2Usei todas as ferramentas do CreditConnect. Essa plataforma realmente fornece a interface mais amigável e possui os recursos de que preciso”."
  );
});
test("testando carrossel para verificar se está mudando de acordo do 1 pro 3", async ({
  page,
}) => {
  await page.goto("http://localhost:3000");
  const buttonCarousel = page.locator(
    ".mantine-Carousel-indicator:nth-child(3)"
  );
  await buttonCarousel.click();
  const text = page
    .locator("#slide-3")
    .getByText(
      "3Usei todas as ferramentas do CreditConnect. Essa plataforma realmente fornece a "
    );
  await expect(text).toHaveText(
    "3Usei todas as ferramentas do CreditConnect. Essa plataforma realmente fornece a interface mais amigável e possui os recursos de que preciso”."
  );
});
test("testando carrossel para verificar se está mudando de acordo do 1 pro 4", async ({
  page,
}) => {
  await page.goto("http://localhost:3000");
  const buttonCarousel = page.locator(
    ".mantine-Carousel-indicator:nth-child(4)"
  );
  await buttonCarousel.click();
  const text = page
    .locator("#slide-4")
    .getByText(
      "4Usei todas as ferramentas do CreditConnect. Essa plataforma realmente fornece a "
    );
  await expect(text).toHaveText(
    "4Usei todas as ferramentas do CreditConnect. Essa plataforma realmente fornece a interface mais amigável e possui os recursos de que preciso”."
  );
});
