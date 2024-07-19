const {expect} =  require('@playwright/test')

exports.linksPage = class linksPage{

    constructor(page)
    {
        this.page = page;
    }

async linksopen()
    {
   await this.page.goto('https://demoqa.com/links');
   const page1Promise = this.page.waitForEvent('popup');
   await this.page.getByRole('link', { name: 'Home', exact: true }).click();
   const page1 = await page1Promise;
   await page1.locator('path').first().click();
   await page1.waitForTimeout(5000);
   await expect(page1.getByRole('list')).toContainText('Links');
    }
}