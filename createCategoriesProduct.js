function createCategoriesProduct() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName('CategoriesProduct');
  
  /* Nếu sheet chưa tồn tại thì tạo mới */
  if (!sheet) {
    sheet = spreadsheet.insertSheet('CategoriesProduct');
  }

  addLogo();

  const headers_row4 = [
    'id',
    'count',
    'name',
    'description',
    'slug',
    'link',
    'robots_meta'
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
    'Id',
    'Số lượng sản phẩm', 
    'Tên danh mục',
    'Mô tả',
    'Định dạng liên kết',
    'Đường dẫn',
    'Kiểm tra index'
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
  
  // Thêm border cho bảng
  headerRange6.setBorder(true, true, true, true, true, true);
  
  // Căn giữa nội dung các ô
  headerRange6.setHorizontalAlignment('center');
  headerRange6.setVerticalAlignment('middle');
  
  // Đặt chiều cao dòng
  sheet.setRowHeight(6, 30);
  
  // Đặt chiều rộng cột tự động fit nội dung
  for (let i = 1; i <= headers_row6.length; i++) {
    sheet.autoResizeColumn(i);
  }
}
