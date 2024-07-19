import {test, expect} from '@playwright/test';
import { OrgLoginPage } from '../pageobjects/OrgLoginPage'

test("My first orange login", async({page}) => {
    test.setTimeout(120000);
    //await page.goto('/')
    const OrgLoginPageobj = new OrgLoginPage(page);
    await OrgLoginPageobj.login('Admin','admin123');

})