import{test,expect} from '@playwright/test';
test('Login User with correct email and password',async({page})=>{
    await page.goto('http://automationexercise.com')
    await page.locator('.fc-cta-consent').click()
    await expect(page.getByRole('link',{name:'Home'})).toBeVisible()
    await page.getByRole('link',{name:' Signup / Login'}).click()
    await page.locator('input[data-qa="login-email"]').fill('test1791226012092@outlook.com')
    await page.getByPlaceholder('Password').fill('123456')
    await page.getByRole('button',{name:'Login'}).click()
    await expect(page.getByText('Your email or password is incorrect!')).toBeVisible()







})