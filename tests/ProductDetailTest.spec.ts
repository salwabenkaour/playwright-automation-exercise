import{test,expect} from '@playwright/test';
test('launch browser',async({page})=> {
    //launch browser automatiquement by playwright
    await page.goto('https://automationexercise.com')
    await page.locator('.fc-cta-consent').click()
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
    await (page.getByRole('link', { name: ' Products' })).click();
    await expect(page.getByRole('heading',{name:'All Products'})).toBeVisible();
    await expect(page.locator('.features_items')).toBeVisible();
    await page.locator('.choose').first()
                                 .getByRole('link',{ name:'View Product'})
                                 .click();
    await expect(page.locator('.product-details')).toBeVisible()
    await expect(page.getByText('Category:')).toBeVisible();
await expect(page.getByText('Rs.')).toBeVisible();
await expect(page.getByText('Availability:')).toBeVisible();
await expect(page.getByText('Condition:')).toBeVisible();
await expect(page.getByText('Brand:')).toBeVisible();




})