import{test,expect} from '@playwright/test';
test('launch browser',async({page})=> {
    //launch browser automatiquement by playwright
    await page.goto('https://automationexercise.com')
    await page.locator('.fc-cta-consent').click()
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
    await (page.getByRole('link', { name: ' View Product' })).nth(3).click();
    await expect(page.locator('.product-details')).toBeVisible()
    await page.locator('input[name="quantity"]').fill('4')
    await page.locator('.btn.btn-default.cart').click()
    await (page.getByRole('link', { name: ' View Cart' })).click();
    const cartProduct = page.locator('#cart_info_table tbody tr').first();

await expect(cartProduct).toBeVisible();
await expect(cartProduct.locator('.cart_quantity')).toHaveText('4');



})