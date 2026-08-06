import {test, expect} from '@playwright/test';

test('should load the home page', async ({page}) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await expect(page).toHaveTitle(/CURA Healthcare/);
    await expect(page.locator('h1')).toHaveText('CURA Healthcare Service');
});
