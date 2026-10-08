import{test,expect} from '@playwright/test';
test('launch browser',async({page})=> {
    //launch browser automatiquement by playwright
    await page.goto('https://automationexercise.com')
    await page.locator('.fc-cta-consent').click()
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
    await page.getByRole('link', { name: 'Test Cases', exact: true }).click();
    await expect(page.getByRole('heading',{name:'Test Cases',exact:true})).toBeVisible();



})