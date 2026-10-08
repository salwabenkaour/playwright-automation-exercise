import{test,expect} from '@playwright/test';
test('launch browser',async({page})=> {
    //launch browser automatiquement by playwright
    await page.goto('https://automationexercise.com')
    await page.locator('.fc-cta-consent').click()
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
    await (page.getByRole('link', { name: ' Cart' })).click();
    await page.locator('footer').scrollIntoViewIfNeeded();
    await expect(page.getByText('Subscription')).toBeVisible()
    await page.locator('#susbscribe_email').fill('test@gmail.com')
    await page.locator('#subscribe').click()
    await expect(page.getByText('You have been successfully subscribed!')).toBeVisible()






})