import { test, expect } from "@playwright/test";


// test("testing card hover", async ({ page }) => {
//   await page.goto("/");
    
//   //await page.locator(".StyledCard").hover();
//   const cardElement =  page.locator('#2_sc');

//     // Get the default background color
//     const defaultBgColor = await cardElement.evaluate((el) =>
//       getComputedStyle(el).backgroundColor
//     );

//     // Simulate hover
//     await cardElement.hover();

//     // Get the hover background color
//     const hoverBgColor = await cardElement.evaluate((el) =>
//       getComputedStyle(el).backgroundColor
//     );

//     // Assert that the background color changed on hover
//     expect(defaultBgColor).not.toEqual(hoverBgColor);

 
// });

