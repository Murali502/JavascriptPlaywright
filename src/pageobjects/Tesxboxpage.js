exports.Textboxpage = class Textboxpage{

constructor(page)
{
    this.page =page
}

async loginIntobaseURl()
{
    await this.page.goto('https://demoqa.com/browser-windows');
}

async enterValuesToTextbox()
{
  await this.page.locator('span').filter({ hasText: 'Elements' }).locator('div').first().click();
  await this.page.getByText('Text Box').click();
  await this.page.getByPlaceholder('Full Name').fill('David');
  //await page.getByPlaceholder('name@example.com').click();
  await this.page.getByPlaceholder('name@example.com').fill('david1234@gmail.com');
  await this.page.getByPlaceholder('name@example.com').press('ArrowDown');
  await this.page.getByRole('heading', { name: 'Text Box' }).click();
  await this.page.locator('body').press('ArrowDown');
  await this.page.locator('body').press('ArrowDown');
  await this.page.locator('body').press('ArrowDown');
  await this.page.locator('body').press('ArrowDown');
  await this.page.locator('body').press('ArrowDown');
  await this.page.locator('body').press('ArrowDown');
  await this.page.locator('body').press('ArrowDown');
  await this.page.locator('body').press('ArrowDown');
  await this.page.locator('body').press('ArrowDown');
  await this.page.locator('body').press('ArrowDown');
  await this.page.locator('body').press('ArrowDown');
  await this.page.locator('body').press('ArrowDown');
  await this.page.locator('body').press('ArrowDown');
  await this.page.locator('body').press('ArrowDown');
  await this.page.getByPlaceholder('Current Address').click();
  await this.page.getByPlaceholder('Current Address').fill('Bangalore,\n54123698');
  await this.page.locator('#permanentAddress').click();
  await this.page.locator('#permanentAddress').fill('ATP\nanandrapradesh');
  await this.page.getByRole('button', { name: 'Submit' }).click();

}

}