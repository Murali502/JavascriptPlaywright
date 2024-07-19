const {test,expect} =  require('@playwright/test')
import {Textboxpage} from '../pageobjects/Tesxboxpage'
import {RadiobuttonPage} from '../pageobjects/RadiobuttonPage'
import { timeout } from '../../playwright.config';
import { WebTablePage } from '../pageobjects/WebTablePage';
import { linksPage } from '../pageobjects/linksPage';


test("test box verification", async({page}) =>
{
    const obj = new Textboxpage(page);
    await obj.loginIntobaseURl();
    await obj.enterValuesToTextbox()
});

test("Radio buttion verification ", async({page}) => 
{
   test.setTimeout(120000);
   const radioObj = new RadiobuttonPage(page);
   await radioObj.nagivateURL();
   await radioObj.clickOnRadiobutton();
})

test("WebTable button verification ", async({page}) => 
{
   test.setTimeout(120000);
   //const radioObj = new RadiobuttonPage(page);
   //await radioObj.nagivateURL();
   const WebtableObj = new WebTablePage(page);
   //await radioObj.nagivateURL();
   await WebtableObj.webtableActions();
})

test("New window open ", async({page}) => {

   test.setTimeout(120000);
   const newpageobj = new linksPage(page);
   await newpageobj.linksopen();
     
})

test("Upload a file ", async({page}) => 
{
   test.setTimeout(120000);
   await page.goto('https://demoqa.com/upload-download');
   await page.getByLabel('Select a file').click();
   await page.getByLabel('Select a file').setInputFiles('./src/uploadfile/sample.js');
})

test.only("Alters ", async({page }) =>{
   test.setTimeout(120000);
   const alertsobj = new Alerts(page);
   alertsobj.altershandle();
   
})


