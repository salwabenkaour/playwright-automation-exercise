import{test,expect} from '@playwright/test';
test('launch browser',async({page})=> {
    //launch browser automatiquement by playwright
    await page.goto('https://automationexercise.com')
    await page.locator('.fc-cta-consent').click()
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
    await (page.getByRole('link', { name: ' Products' })).click();
    await expect(page.getByRole('heading',{name:'All Products'})).toBeVisible();
    const searchProduct='men'
    await page.locator('input[name="search"]').fill(searchProduct)
    await page.locator('#submit_search').click()
    await expect(page.getByText('Searched Products')).toBeVisible();
    //. Verify all the products related to search are visible
    const products = page.locator('.single-products');
    const matchingProducts = products.filter({
    hasText: new RegExp(`\\b${searchProduct}\\b`, 'i')
    });

    for (const product of await matchingProducts.all()) {
    await expect(product).toBeVisible();
    }







})