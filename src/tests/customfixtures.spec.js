import { test, expect } from '@playwright/test';


const myfixture = test.extend({
    webAppDemo: async({page}, use ) => {
        
        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await use(page)
        //await expect(page.locator('[data-test="primary-header"]')).toContainText('Swag Labs');
    }
})

myfixture('test', async ({ webAppDemo }) => {
    await webAppDemo.waitForTimeout(2000);
    //await webAppDemo.getByText('Swag Labs');
    await expect(webAppDemo.locator('[class="app_logo"]')).toContainText('Swag Labs');
     await webAppDemo.screenshot({ path: "web-app.jpg"})
  });


//   await page.goto('https://www.saucedemo.com/');
//   await page.locator('[data-test="username"]').click();
//   await page.locator('[data-test="username"]').fill('standard_user');
//   await page.locator('[data-test="password"]').click();
//   await page.locator('[data-test="password"]').fill('secret_sauce');
//   await page.locator('[data-test="login-button"]').click();
//   await expect(page.locator('[data-test="primary-header"]')).toContainText('Swag Labs');




