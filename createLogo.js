function createLogo(spreadsheet = SpreadsheetApp.getActiveSpreadsheet()) {
  const sheet = spreadsheet.getActiveSheet();
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
  
  /* Tạo range cho logo (A1:F2) */
  const logoRange = sheet.getRange('A1:F2');
  logoRange.clearFormat(); // Xóa định dạng merge cũ
  logoRange.merge().setHorizontalAlignment('left').setBackground('black');
  const logoText = 'DATMarketing™ | Giải pháp Marketing Automation n8n';
  logoRange.setValue(logoText);
 range.setBackground('black');
  /* Định dạng màu chữ cho logo */
  const richText = SpreadsheetApp.newRichTextValue()
    .setText(logoText)
    .setTextStyle(0, 3, SpreadsheetApp.newTextStyle()
      .setForegroundColor('red')
      .setFontFamily('Roboto')
      .setFontSize(26)
      .setBold(true)
      .build()) /* DAT màu đỏ */
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
      .build()) /* ™ màu đỏ */
    .setTextStyle(13, logoText.length, SpreadsheetApp.newTextStyle()
      .setForegroundColor('white')
      .setFontFamily('Roboto')
      .setFontSize(26)
      .setBold(true)
      .build()) /* Phần text thêm vào màu trắng */
    .build();
  
  logoRange.setRichTextValue(richText);
}
