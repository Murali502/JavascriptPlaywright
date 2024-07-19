import {test} from "../pageobjects/base.js"

test("First fixtures test", async({loginPage,})=> {
    await loginPage.lunchUrl();
    await loginPage.login("standard_user","secret_sauce");
});


