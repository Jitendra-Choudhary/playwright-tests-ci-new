const {test, expect} = require('@playwright/test')
const {homepageObj} = require('../POM/SkillspeObjectClass');

test("Test homepage functionality", async ({page})=>{
  // await page.goto('https://www.skillspe.com/');
  // await page.waitForTimeout(5000);

  const home = new homepageObj(page);
  await home.gotoHome();

  await page.locator(home.DownloadAppLink).click();
  await page.waitForTimeout(2000);
})