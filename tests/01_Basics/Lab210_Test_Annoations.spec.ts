import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/')
  await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright')
})

//Skip the Test

test.skip('skipped tetst', async ({ page }) => {
  console.log('This test is skipped');
});

// Only run this test
test.only('focused test', async ({ page }) => {
  console.log('This test only runs');
});

// Mark as failing
test.fail('test fail expect',async({page})=>{
  console.log('This test Skips');

});

// // Slow test
// test.slow('slowtest', async ({ page }) => {
//     // Has extended timeout
// });

test('conditional', async ({ page, browserName }) => {
    test.skip(browserName === 'firefox', 'Not supported in Firefox');
});