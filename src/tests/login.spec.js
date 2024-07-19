import {test, expect} from '@playwright/test';
import { LoginPage } from '../pageobjects/LoginPage';


test.beforeEach(async({page}) => {
     await page.goto('https://www.saucedemo.com')
 })

test('This is my first test',async ({page}) =>
{
      const loginpage = new LoginPage(page);
      await loginpage.login("standard_user","secret_sauce");
})
