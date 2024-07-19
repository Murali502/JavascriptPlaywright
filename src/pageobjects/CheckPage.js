exports.CheckPage = class CheckPage{


    constructor(page)
    {
        this.page;
    }
   async clickonCheckbox()
    {
        await page.goto('https://demoqa.com/');
        await page.locator('path').first().click();
        await page.getByText('Check Box').click();
        await page.getByLabel('Toggle').click();
        await page.locator('label').filter({ hasText: 'General' }).getByRole('img').first().click();
        await page.locator('li').filter({ hasText: /^Downloads$/ }).getByLabel('Toggle').click();
        await page.locator('label').filter({ hasText: 'Downloads' }).getByRole('img').first().click();
    }
}