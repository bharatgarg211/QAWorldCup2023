import * as path from 'path';
import Excel from 'exceljs';

const filePath = path.resolve(__dirname, 'Data.xlsx');

// type Team = 'M' | 'W';
// type Country = 'Canada' | 'USA';
// type Position = 'Goalie' | 'Defence' | 'Forward';

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

const getCellFormulaValue = (row:  Excel.Row, cellIndex: number) => {
  const value = row.getCell(cellIndex).value as Excel.CellFormulaValue;

  return value.result ? value.result.toString() : '';
};

const main = async () => {
  const workbook = new Excel.Workbook();
  const content = await workbook.xlsx.readFile(filePath);

  const worksheet = content.worksheets[1];
  const rowStartIndex = 4;
  const numberOfRows = worksheet.rowCount - 3;

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
  console.log(players);
};

main().then();