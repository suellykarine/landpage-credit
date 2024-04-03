import { test, expect } from "@playwright/test";

test("test invite button", async ({ page }) => {
  await page.goto("http://localhost:3000");

  const section = await page.$("#how-to-start");
  const button = await section!.$(
    'button:has-text("SOLICITE SUA CARTA CONVITE")'
  );

  await button!.click();
  await page.waitForURL("https://www.srmasset.com/");

  expect(page.url()).toBe("https://www.srmasset.com/");
});

test("test social media links", async ({ page }) => {
  await page.goto("http://localhost:3000");

  const instagramLink = await page.$("#instagram");
  const instagramHref = await instagramLink!.getAttribute("href");
  expect(instagramHref).toBe("https://www.instagram.com/");

  const twitterLink = await page.$("#twitter");
  const twitterHref = await twitterLink!.getAttribute("href");
  expect(twitterHref).toBe("https://twitter.com/");

  const facebookLink = await page.$("#facebook");
  const facebookHref = await facebookLink!.getAttribute("href");
  expect(facebookHref).toBe("https://www.facebook.com/");

  const youtubeLink = await page.$("#youtube");
  const youtubeHref = await youtubeLink!.getAttribute("href");
  expect(youtubeHref).toBe("https://www.youtube.com/");
});

test("test social media link - Instagram", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.click("#instagram");
  await page.waitForURL("https://www.instagram.com/");
  await expect(page).toHaveURL(new RegExp("^https://www.instagram.com/"));
});

test("test social media link - Facebook", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.click("#facebook");
  await page.waitForURL("https://www.facebook.com/");
  await expect(page).toHaveURL(new RegExp("^https://www.facebook.com/"));
});

test("test social media link - Twitter", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.click("#twitter");
  await page.waitForURL("https://twitter.com/");
  await expect(page).toHaveURL(new RegExp("^https://twitter.com/"));
});

test("test social media link - YouTube", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.click("#youtube");
  await page.waitForURL("https://www.youtube.com/");
  await expect(page).toHaveURL(new RegExp("^https://www.youtube.com/"));
});

test("test about and services links", async ({ page }) => {
  await page.goto("http://localhost:3000");

  const aboutLink = await page.$("#about");
  const aboutHref = await aboutLink!.getAttribute("href");
  expect(aboutHref).toBe("https://www.srmasset.com/a-srm-4/");

  const privacyLink = await page.$("#privacy");
  const privacyHref = await privacyLink!.getAttribute("href");
  expect(privacyHref).toBe("https://www.srmasset.com/a-srm-4/");

  const blogLink = await page.$("#blog");
  const blogHref = await blogLink!.getAttribute("href");
  expect(blogHref).toBe("https://www.srmasset.com/a-srm-4/");

  const institutionalLink = await page.$("#institucional-services");
  const institutionalHref = await institutionalLink!.getAttribute("href");
  expect(institutionalHref).toBe("https://www.srmasset.com/nossos-fundos/");
});

test("test about link", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.click("#about");
  await page.waitForURL("https://www.srmasset.com/a-srm-4/");
  await expect(page).toHaveURL(
    new RegExp("^https://www.srmasset.com/a-srm-4/")
  );
});

test("test privacy link", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.click("#privacy");
  await page.waitForURL("https://www.srmasset.com/a-srm-4/");
  await expect(page).toHaveURL(
    new RegExp("^https://www.srmasset.com/a-srm-4/")
  );
});

test("test blog link", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.click("#blog");
  await page.waitForURL("https://www.srmasset.com/a-srm-4/");
  await expect(page).toHaveURL(
    new RegExp("^https://www.srmasset.com/a-srm-4/")
  );
});

test("test institutional services link", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.click("#institucional-services");
  await page.waitForURL("https://www.srmasset.com/nossos-fundos/");
  await expect(page).toHaveURL(
    new RegExp("^https://www.srmasset.com/nossos-fundos/")
  );
});
