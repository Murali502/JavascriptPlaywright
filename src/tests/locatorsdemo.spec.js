const{test} = require('@playwright/test')

test.skip("Locators test" , async({page}) =>
{
    test.setTimeout(120000);
    //page.locator('')
    await page.goto('https://demoqa.com/text-box')
    //await page.getByLabel('Full Name').click();
    //await page.getByPlaceholder('Full Name').click();
    await page.getByText('Text Box').first().click();
});

test("Child elements", async({page}) => {

    test.setTimeout(120000);
    await page.goto('https://demoqa.com/checkbox');
    await page.locator('ol li ol li :text-is("Desktop")').click();
});