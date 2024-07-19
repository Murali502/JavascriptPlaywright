import {test, expect} from '@playwright/test';
import { OrgLoginPage } from '../pageobjects/OrgLoginPage'

test("My first orange login", async({page}) => {

    //await page.goto('/')
    const OrgLoginPageobj = new OrgLoginPage(page);
    await OrgLoginPageobj.login('Admin','admin123');

})