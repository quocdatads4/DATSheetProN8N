function websiteCreate() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName('Website');
  
  /* Kiểm tra nếu sheet Website tồn tại */
  if (!sheet) {
    console.log('Sheet "Website" không tồn tại');
    return;
  }


  const headers = [
    'stt',
    'status',
    'day_run',
    'domain',
    'wp_username',
    'wp_password',
    'wp_user_email',
    'wp_user_display_name',
    'drive_name',
    'drive_id',
    'drive_wp_status_posts',
    'serper_apikey'
  ];
  
  const headersTiengViet = [
    'Stt',
    'Trang thái',
    'Ngày',
    'Tên miền',
    'Tài khoản',
    'Mật khẩu',
    'Email',
    'Tên hiển thị',
    'Tên file',
    'ID drive',
    'Trạng thái bài viết',
    'Api Key Serper'
  ];

  // Đặt header tiếng Anh ở dòng 4
  const headerRange = sheet.getRange(4, 1, 1, headers.length);
  headerRange.setValues([headers]);
  
  // Đặt header tiếng Việt ở dòng 6
  const headerRangeTiengViet = sheet.getRange(6, 1, 1, headersTiengViet.length);
  headerRangeTiengViet.setValues([headersTiengViet]);
  
  /* Định dạng header */
  headerRange
    .setBackground('white')
    .setFontFamily('Roboto')
    .setFontSize(12)
    .setFontWeight('bold');
    
  headerRangeTiengViet
    .setFontFamily('Roboto')
    .setFontSize(12)
    .setFontWeight('bold');

  // Đặt kích thước cột
  sheet.setColumnWidth(1, 100); // Cột A
  sheet.setColumnWidth(2, 170); // Cột B
  sheet.setColumnWidth(3, 120); // Cột C
  sheet.autoResizeColumns(4, 2); // Cột D-E autofit
  sheet.setColumnWidth(6, 160); // Cột F
  sheet.autoResizeColumns(8, 2); // Cột H-I autofit
  sheet.setColumnWidth(10, 160); // Cột J
  sheet.setColumnWidth(11, 120); // Cột K
}
