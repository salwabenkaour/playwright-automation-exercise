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
    .fill(email);
    console.log(email)
    await page.locator('[data-qa="signup-button"]').click();
    await expect(page.getByText('ENTER ACCOUNT INFORMATION')).toBeVisible()
    await page.locator('input[type="radio"][value="Mr"]').check()
    await page.locator('input[type="password"]').fill('123456')
    await page.locator('#days').selectOption("3")
    await page.locator('#months').selectOption("June")
    await page.locator('#years').selectOption("1991")
    await page.getByLabel('Sign up for our newsletter!').check()
    await page.getByLabel('Receive special offers from our partners!').check()
    await page.getByLabel('First name *').fill('test1')
    await page.getByLabel('Last name *').fill('test1')
    await page.locator('#company').fill('test1')
    await page.getByLabel('Address * (Street address, P.O. Box, Company name, etc.)').fill('test1')
    await page.getByLabel('Address 2').fill('test1')
    await page.locator('#country').selectOption('Canada')
    await page.getByLabel('State *').fill('test1')
    await page.getByLabel('City *').fill('test1')
    await page.locator('#zipcode').fill('test1')
    await page.getByLabel('Mobile Number *').fill('test1')
    await page.getByRole('button',{name:'Create Account'}).click()
    await expect(page.getByRole('heading',{name:'ACCOUNT CREATED!'})).toBeVisible()
    await page.getByRole('link',{name:'Continue'}).click()
    await expect(page.locator('.fa.fa-user')).toBeVisible()
    await page.getByRole('link',{name:'Delete Account'}).click()
    await expect(page.getByRole('heading',{name:'Account Deleted!'})).toBeVisible()
   









})

