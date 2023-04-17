import { test, expect } from '@playwright/test';
import path from 'path';
import Excel from 'exceljs';

test('Nagarro Test', async ({ page }) => {
  //Excel reading 
const filePath = path.resolve('D:/BackBancher/QAWorldCup2023/Data.xlsx');
type Player = {
  ProjectID: number;
  ProjectName: string;
  NooftestcasestobeAutomated:number;
  ProjectDuration: number;
  PlatformsSupported: number;
  NoofExecutionCylesperweek: number;
  PDsrequriedforFramework: number;
  PDsforFramework: number; // (YYY-MM-DD)
  PDsFrameworkCustomizationtime: number;
  PercentageoftestcaseswithHighcomplexity: number;
PercentageoftestcaseswithMediumComplexity: number;
Hourlycostofautomationengineer: number;
ROIimprovement:number;
Paybackperiod:number;
};
const getCellValue = (row:  Excel.Row, cellIndex: number) => {
  const cell = row.getCell(cellIndex);

  console.log(cell.value);

  return cell.value ? cell.value.toString() : '';
};
const workbook = new Excel.Workbook();
const content = await workbook.xlsx.readFile(filePath);

const worksheet = content.worksheets[1];
const rowStartIndex = 2;
const numberOfRows = worksheet.rowCount - 1;

const rows = worksheet.getRows(rowStartIndex, numberOfRows) ?? [];

const players = rows.map((row): Player => {
  return {
    ProjectID: Number(getCellValue(row,1)),
    ProjectName: getCellValue(row,2),
    NooftestcasestobeAutomated: Number(getCellValue(row,3)),
    ProjectDuration:  Number(getCellValue(row,4)),
    PlatformsSupported: Number(getCellValue(row,5)),
    NoofExecutionCylesperweek:  Number(getCellValue(row,6)),
    PDsrequriedforFramework:  Number(getCellValue(row,7)),
    PDsforFramework:  Number(getCellValue(row,8)),
    PDsFrameworkCustomizationtime: Number( getCellValue(row,9)),
    PercentageoftestcaseswithHighcomplexity: Number( getCellValue(row,10)),
  PercentageoftestcaseswithMediumComplexity:  Number(getCellValue(row,11)),
  Hourlycostofautomationengineer: Number(getCellValue(row,12)),
  ROIimprovement: Number(getCellValue(row,13)),
  Paybackperiod: Number(getCellValue(row,14)),
  }
});
players
//Script
  await page.goto('https://www.nagarro.com/');
  await page.pause();
  await page.getByRole('link', { name: 'services', exact: true }).hover();
  await page.getByRole('link', { name: 'accelerated quality & test-engineering', exact: true }).click();
  await page.getByRole('link', { name: 'Software Testing and QA Transformation | Quality Engineering | Nagarro Test Automation ROI Calculator Want to know the cost and effort saved in automating software testing? Use our ROI calculator to get all these details, based on 20+ years of automation experience. Find out your ROI' }).click();
  await page.getByRole('link', { name: 'Let’s find out!' }).click();
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
