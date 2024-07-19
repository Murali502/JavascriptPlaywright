exports.WebTablePage = class WebTablePage
{
   constructor(page)
   {
      this.page = page;
   }
   async webtableActions()
   {
  await this.page.goto('https://demoqa.com/webtables');
  //await this.page
  await this.page.getByRole('button', { name: 'Add' }).click();
  await this.page.getByPlaceholder('First Name').click();
  await this.page.getByPlaceholder('First Name').fill('JOhn');
  await this.page.getByPlaceholder('Last Name').click();
  await this.page.getByPlaceholder('Last Name').fill('David');
  await this.page.getByPlaceholder('name@example.com').click();
  await this.page.getByPlaceholder('name@example.com').fill('jons@gmail.com');
  await this.page.locator('#age-wrapper').click();

  await this.page.getByPlaceholder('Age').fill('30');
  await this.page.getByPlaceholder('Salary').fill('30000');
  await this.page.getByPlaceholder('Department').fill('CA');
  await this.page.getByRole('button', { name: 'Submit' }).click();
  await this.page.getByRole('button', { name: 'Add' }).press('ArrowDown');
  await this.page.getByRole('button', { name: 'Add' }).press('ArrowDown');
  await this.page.getByRole('button', { name: 'Add' }).press('ArrowDown');
  await this.page.getByRole('button', { name: 'Add' }).press('ArrowDown');
  await this.page.getByRole('button', { name: 'Add' }).press('ArrowDown');
  await this.page.getByRole('button', { name: 'Add' }).press('ArrowDown');
  await this.page.locator('#edit-record-3 path').click();
  await this.page.getByPlaceholder('Department').click();
  await this.page.getByPlaceholder('Department').fill('Legala');
  await this.page.getByRole('button', { name: 'Submit' }).click();
  
  // writing a logic for table
  const rows= await this.page.locator('.rt-table .rt-tbody .rt-tr-group').count();
  const allrows= await this.page.locator('.rt-table .rt-tbody .rt-tr-group').all();

 allrows.forEach(async(element) => {
   console.log(await element.locator('.rt-td').count())   
 });
  //console.log(rows);
   }
}