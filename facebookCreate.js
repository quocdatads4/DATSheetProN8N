function getFacebookSheet(sheetId) {
  return SpreadsheetApp.openById(sheetId).getSheetByName('Facebook') || 
         SpreadsheetApp.openById(sheetId).insertSheet('Facebook');
}

function processAllFacebookSheets(sheetIds) {
  sheetIds.forEach(id => {
    const spreadsheet = SpreadsheetApp.openById(id);
    facebookCreate(spreadsheet);
  });
  return {status: "success", message: `Đã xử lý ${sheetIds.length} sheets`};
}

function facebookCreate(spreadsheet = SpreadsheetApp.getActiveSpreadsheet()) {
  let sheet = spreadsheet.getSheetByName('Facebook');
  
  /* Nếu sheet chưa tồn tại thì tạo mới */
  if (!sheet) {
    sheet = spreadsheet.insertSheet('Facebook');
  }

  const headers_row4 = [
    'stt',
    'status_post',
    'day_run',
    'id_fanpage',
    'url_fanpage',
    'token_fanpage',
    'fanpage_name',
    'fanpage_about',
    'website',
    'emails',
    'single_line_address',
    'phone',
    'location',
    'hours',
    'fan_count',
    'followers_count',
    'talking_about_count',
    'new_like_count',
    'were_here_count',
    'email_manager',
    'id_drive',
    'name_drive',
    'webViewLink_drive'
  ];
  
  const headerRange4 = sheet.getRange(4, 1, 1, headers_row4.length);
  headerRange4.setValues([headers_row4]);
  
  /* Định dạng font */
  const textStyle = SpreadsheetApp.newTextStyle()
    .setFontFamily('Roboto')
    .setFontSize(12)
    .setBold(true)
    .build();
    
  headerRange4.setTextStyle(textStyle);

  // Thêm headers cho dòng 6 và format thành bảng
  const headers_row6 = [
    'Stt',
    'Trang thái',
    'Ngày',
    'Id',
    'Đường dẫn Fanpage',
    'Token Fanpage',
    'Fanpage name',
    'Giới thiệu',
    'Trang web',
    'Emails',
    'Địa chỉ',
    'Điện thoại',
    'Vị trí',
    'Giờ mở cửa',
    'Số bạn',
    'Lượt theo dõi',
    'talking_about_count',
    'Số lượt thích mới',
    'Số người đã từng đến địa điểm',
    'Email quản lý',
    'Id Driver',
    'Tên file',
    'Đường dẫn Google Drive'
  ];
  
  const headerRange6 = sheet.getRange(6, 1, 1, headers_row6.length);
  headerRange6.setValues([headers_row6]);
  
  // Định dạng bảng cho dòng 6
  const textStyle6 = SpreadsheetApp.newTextStyle()
    .setFontFamily('Roboto')
    .setFontSize(12)
    .setBold(true)
    .setForegroundColor('white')
    .build();
    
  headerRange6.setTextStyle(textStyle6);
  headerRange6.setBackground('#971928'); // Màu nền

  
  // Căn giữa nội dung các ô
  headerRange6.setHorizontalAlignment('center');
  headerRange6.setVerticalAlignment('middle');
  
  // Đặt chiều cao dòng
  sheet.setRowHeight(6, 30);
  
  createLogo(spreadsheet);
}
