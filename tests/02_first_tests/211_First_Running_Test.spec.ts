// **Creating your first Playwright test:**
// - Test structure
// - Basic assertions
// - Navigation
// - Element interaction

import {test,expect} from '@playwright/test';

test('verify our first TC',async({page})=>{
    await page.goto('https://app.vwo.com');
    await expect(page).toHaveTitle('Login - VWO');
    const img_vwo=page.locator('img').first();
    await expect(img_vwo).toBeVisible();
});