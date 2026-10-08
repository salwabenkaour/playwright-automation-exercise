import{test,expect} from '@playwright/test';
test('launch browser',async({page})=> {
    //launch browser automatiquement by playwright
    await page.goto('https://automationexercise.com')
    await page.locator('.fc-cta-consent').click()
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
    await (page.getByRole('link', { name: ' Products' })).click();
    await page.locator('.single-products').first()
                                         .hover()
    await page.locator('.single-products').first()
                                         .getByText('Add to cart').first().click()
    await page.getByRole('button',{name:'Continue Shopping'}).click()
    await page.locator('.single-products').nth(1)
                                         .hover()
    await page.locator('.single-products').nth(1)
                                         .getByText('Add to cart').nth(1).click()
    await (page.getByRole('link', { name: ' View Cart' })).click();
    await expect(page.locator('#cart_info_table tbody tr')).toHaveCount(2)
    const cartProducts=page.locator('#cart_info_table tbody tr')
    for (const product of await cartProducts.all()) {
    await expect(product.locator('.cart_price')).toBeVisible();
    await expect(product.locator('.cart_quantity')).toBeVisible();
    await expect(product.locator('.cart_total')).toBeVisible();
}












})