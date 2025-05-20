function createLogo(spreadsheet = SpreadsheetApp.getActiveSpreadsheet()) {
  const sheet = spreadsheet.getSheetByName('Facebook') || spreadsheet.insertSheet('Facebook');
  let lastColumn = sheet.getLastColumn();
  if (lastColumn === 0) {
    // Nếu sheet trống, đặt mặc định 10 cột
    lastColumn = 10;
    const emptyRow = new Array(lastColumn).fill('');
    sheet.getRange(1, 1, 1, lastColumn).setValues([emptyRow]);
  }
  const range = sheet.getRange(1, 1, 3, lastColumn);
  
  /* Đặt background màu đen */
  range.setBackground('black');
  
  /* Tạo range cho logo (A1:B2) */
  const logoRange = sheet.getRange('A1:B2');
  logoRange.merge().setHorizontalAlignment('center');
  logoRange.setValue('DATMarketing™');
  
  /* Định dạng màu chữ cho logo */
  const richText = SpreadsheetApp.newRichTextValue()
    .setText('DATMarketing™')
    .setTextStyle(0, 3, SpreadsheetApp.newTextStyle()
      .setForegroundColor('red')
      .setFontFamily('Roboto')
      .setFontSize(26)
      .setBold(true)
      .build()) /* DAT màu trắng */
    .setTextStyle(3, 12, SpreadsheetApp.newTextStyle()
      .setForegroundColor('yellow')
      .setFontFamily('Roboto')
      .setFontSize(26)
      .setBold(true)
      .build()) /* Marketing màu vàng */
    .setTextStyle(12, 13, SpreadsheetApp.newTextStyle()
      .setForegroundColor('red')
      .setFontFamily('Roboto')
      .setFontSize(26)
      .setBold(true)
      .build()) /* ™ màu trắng */
    .build();
  
  logoRange.setRichTextValue(richText);
}
