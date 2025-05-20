function postsCreate(spreadsheet = SpreadsheetApp.getActiveSpreadsheet()) {
  let sheet = spreadsheet.getSheetByName('Posts');
  
  /* Nếu sheet chưa tồn tại thì tạo mới */
  if (!sheet) {
    sheet = spreadsheet.insertSheet('Posts');
  }

  const headers_row4 = [
    'id',
    'date',
    'slug',
    'status',
    'type',
    'link',
    'title',
    'content',
    'excerpt',
    'author',
    'featured_media',
    'categories',
    'tags',
    'robots_meta',
    'title_serper',
    'snippet_serper',
    'position_serper',
    'index_serper',
    'day_check_serper',
    'google_index'
  ];
  
  const headerRange4 = sheet.getRange(4, 1, 1, headers_row4.length);
  headerRange4.setValues([headers_row4]);
  
  /* Định dạng header */
  headerRange4
    .setFontFamily('Roboto')
    .setFontSize(12)
    .setFontWeight('bold');

  // Thêm headers cho dòng 6
  const headers_row6 = [
    'Id',
    'Ngày',
    'slug',
    'Trạng thái',
    'Loại',
    'Đường dẫn',
    'Tiêu đề',
    'Nội dung',
    'excerpt',
    'Tác giả',
    'Ảnh đại diện',
    'categories',
    'tags',
    'robots_meta',
    'Tiêu đề tìm kiếm',
    'Mô tả tìm kiếm',
    'Vị trí tìm kiếm',
    'Trạng thái index',
    'Ngày kiểm tra',
    'Google Index'
  ];
  
  const headerRange6 = sheet.getRange(6, 1, 1, headers_row6.length);
  headerRange6.setValues([headers_row6]);
  
  // Định dạng bảng cho dòng 6
  headerRange6
    .setFontFamily('Roboto')
    .setFontSize(12)
    .setFontWeight('bold')
    .setHorizontalAlignment('center')
    .setVerticalAlignment('middle');
  
  // Đặt chiều cao dòng
  sheet.setRowHeight(6, 30);
  
  createLogo(spreadsheet);
}
