import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });


test('Nagarro Test', async ({ page }) => {
  await page.goto('https://www.nagarro.com/');
  await page.pause();
  await page.getByRole('link', { name: 'services', exact: true }).hover();
  await page.getByRole('link', { name: 'accelerated quality & test-engineering', exact: true }).click();
  await page.getByRole('link', { name: 'Software Testing and QA Transformation | Quality Engineering | Nagarro Test Automation ROI Calculator Want to know the cost and effort saved in automating software testing? Use our ROI calculator to get all these details, based on 20+ years of automation experience. Find out your ROI' }).click();
  await page.getByRole('link', { name: 'Let’s find out!' }).click();
  await page.getByRole('link', { name: 'Next' }).click();
  await page.locator('#automationCandidates').click();
  await page.locator('#automationCandidates').click();
  await page.locator('#projectDuration').click();
  await page.locator('#projectDuration').click();
  await page.locator('#projectDuration').click();
  await page.locator('#projectDuration').click();
  await page.locator('#projectDuration').click();
  await page.locator('#projectDuration').click();
  await page.locator('#platformSupported').click();
  await page.locator('#platformSupported').click();
  await page.getByRole('link', { name: 'Next' }).click();
  await page.locator('#setUpTime').click();
  await page.locator('#trainingTime').click();
  await page.locator('#designTime').click();
  await page.getByRole('link', { name: 'Next' }).click();
  await page.locator('#highComplexity').click();
  await page.locator('#mediumComplexity').click();
  await page.getByRole('link', { name: 'Next' }).click();
  await page.getByRole('link', { name: 'Calculate your ROI' }).click();
  let text = await page.getByText('99.54%')
  console.log(text);
  
});
