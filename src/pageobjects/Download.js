exports.Download = class Download{

    constructor(page)
    {
        this.page;
    }

     async downloadfile()
     {
        await page.goto('https://demoqa.com/upload-download');
        await page.getByLabel('Select a file').click();
        await page.getByLabel('Select a file').setInputFiles('Interview_Questions.pages');
     }

}
