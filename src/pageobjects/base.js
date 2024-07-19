//const {test,expect} =  require('@playwright/test')
import {test as base } from '@playwright/test'
import {LoginPage} from '../pageobjects/LoginPage'
import {Tesxboxpage} from '../pageobjects/Tesxboxpage'


exports.test = base.test.extend({

    loginPage: async({ page }, use ) =>{
     await use(new LoginPage(page));
    },

    tesxboxpage: async({ page }, use) => 
    {
     await use(new Tesxboxpage(page));
    },
});
exports.expect = base.expect;



// const mytest = test.extend({
//  webApp: async({page}, use ) => {

//     await page.goto('https://www.saucedemo.com');
//     await page.getByRole('textbox', {name: 'Username'}).fill('standard_user');
//     await page.getByRole('textbox', {name: 'Password'}).fill('secret_sauce');
//     await page.getByRole('button', {name: 'Login'}).click();
//     await use(page);
//  }
// })

// myTest("Loads dashboard", async({webApp}) => {

//     await expect(webApp.getByTitle()).toContainText('Swag Labs');
// })