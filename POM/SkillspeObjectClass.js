const {expect} = require('@playwright/test')

class homepageObj {
  constructor (page) {
    this.page = page;
    this.DownloadAppLink = "//*[@id='about']/div[2]/div[3]/a";
    this.SkillspeLogo = "//html/body/main/div[1]/div/div[1]/img";
    this.textVerify = "//html/body/main/div[3]/div[1]/div[1]";
  }

  async gotoHome() {
    
    await this.page.goto('https://www.skillspe.com');
    await expect(this.page.locator(this.SkillspeLogo)).toBeVisible();
    const text = await this.page.locator(this.textVerify).textContent();
    await expect(text).toBe('Expore the game, changing features.');
  }
}

module.exports = { homepageObj }