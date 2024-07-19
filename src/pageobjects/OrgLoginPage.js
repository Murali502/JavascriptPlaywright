
exports.OrgLoginPage = class OrgLoginPage{

    constructor(page)
    {
        this.page = page;
    }

    async login(username, Password)
    {
        //const BASE_URL = process.env.URL;
        //await this.page.goto('/');
        await this.page.goto(process.env.URL);
        //await this.page.page.waitForTimeout(2000);
        await this.page.getByPlaceholder('Username').fill(username);
        await this.page.getByPlaceholder('Password').fill(Password);
        await this.page.getByRole('button', { name: 'Login' }).click();
        await this.page.getByRole('link', { name: 'Admin' }).click();
        await this.page.getByRole('textbox').nth(1).click();
        await this.page.getByRole('textbox').nth(1).fill('admin');
        await this.page.locator('form i').first().click();
        await this.page.getByRole('option', { name: 'Admin' }).click();
        await this.page.locator('form i').nth(1).click();
        await this.page.getByRole('option', { name: 'Enabled' }).click();
        await this.page.getByRole('button', { name: 'Search' }).click();
        // await this.page.locator('form i').nth(1).click();
        // await this.page.getByRole('button', { name: 'Save' }).click();
    }
}