import{test,expect} from '@playwright/test';
test('launch browser',async({page})=> {
    //launch browser automatiquement by playwright
    await page.goto('https://automationexercise.com')
    await page.locator('.fc-cta-consent').click()
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
    await page.getByRole('link',{name:' Contact us'}).click();
    await expect(page.getByRole('heading',{name:'GET IN TOUCH'})).toBeVisible();
    await page.getByPlaceholder('Name').fill('contacttest')
    await page.locator('input[data-qa="email"]').fill('test@gmail.com')
    await page.getByPlaceholder('Subject').fill('testsubj')
    await page.getByPlaceholder('Your Message Here').fill('testmessage')
    //upload files
    await page.locator('input[type="file"]').setInputFiles('C:/Users/aitsa/Documents/playwrightapp/automationExercices/tests/images/TCP.png')
    //gerer le popup "press ok to proceed"
    page.on('dialog',async dialog=>{
        console.log('Message',dialog.message());
        await dialog.accept();
    });
    await page.locator('input[data-qa="submit-button"]').click()
    await expect(page.locator('.status.alert.alert-success')).toBeVisible()

    






})