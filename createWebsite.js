function createWebsite() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName('Website');
  
  /* Kiểm tra nếu sheet Website tồn tại */
  if (!sheet) {
    console.log('Sheet "Website" không tồn tại');
    return;
  }

  addLogo();

  const headers = [
    'stt',
    'status_post', 
    'day_run',
    'domain',
    'email_manager',
    'id',
    'name',
    'webViewLink',
    'username',
    'password',
    'user_email',
    'user_display_name',
    'apikey_serper'
  ];
  
  const headerRange = sheet.getRange(4, 1, 1, headers.length);
  headerRange.setValues([headers]);
  
  /* Định dạng font */
  const textStyle = SpreadsheetApp.newTextStyle()
    .setFontFamily('Roboto')
    .setFontSize(12)
    .setBold(true)
    .build();
    
  headerRange.setTextStyle(textStyle);
}
