const { timeStamp } = require("console");

exports.RadiobuttonPage = class RadiobuttonPage
{

    constructor(page)
    {
     this.page = page;
    }
    async nagivateURL()
    {
        await this.page.goto('https://demoqa.com/');
        await this.page.locator('path').first().click();
        //await this.page.locator('svg').first().click();
    }
   
   async clickOnRadiobutton()
    {
  
   await this.page.getByText('Radio Button').click();
   await this.page.getByText('Impressive').click();
    }

}