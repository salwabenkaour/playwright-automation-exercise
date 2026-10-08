import{test,expect} from '@playwright/test';
test('launch browser',async({page})=> {
    //launch browser automatiquement by playwright
    const email = `test${Date.now()}@outlook.com`;
    await page.goto('https://automationexercise.com')
    await page.locator('.fc-cta-consent').click()
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
    await page.getByRole('link',{name:'Signup / Login'}).click()
    await expect(page.getByText('New User Signup!')).toBeVisible()
    await page.getByPlaceholder('Name').fill('test1ttt')
    await page
    .locator('form')
    .filter({ hasText: 'Signup' })
    .getByPlaceholder('Email Address')
    .fill('test1791234385880@outlook.com');
    await page.locator('[data-qa="signup-button"]').click();
    await expect(page.getByText('Email Address already exist!')).toBeVisible()
    



})