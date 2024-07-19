exports.Alerts = class Alerts{

    constructor(page)
    {
        this.page = page;
    }
    
    async altershandle()
    {
        await page.goto('https://demoqa.com/alerts');
        await page.goto('https://demoqa.com/');
        await page.locator('path').first().click();
        await page.locator('body').press('ArrowDown');
        await page.locator('body').press('ArrowDown');
        await page.locator('body').press('ArrowDown');
        await page.locator('body').press('ArrowDown');
        await page.locator('body').press('ArrowDown');
        await page.locator('body').press('ArrowDown');
        await page.locator('body').press('ArrowDown');
        await page.locator('body').press('ArrowDown');
        await page.locator('body').press('ArrowDown');
        await page.locator('body').press('ArrowDown');
        await page.locator('body').press('ArrowDown');
        await page.locator('body').press('ArrowDown');
        await page.locator('body').press('ArrowDown');
        await page.locator('body').press('ArrowDown');
        await page.getByText('Alerts, Frame & Windows').click();
        await page.getByText('Alerts', { exact: true }).click();
        await page.locator('#alertButton').click();
        await page.locator('#timerAlertButton').click();
        await page.locator('#confirmButton').click();
        await page.locator('#promtButton').click();
    }
}