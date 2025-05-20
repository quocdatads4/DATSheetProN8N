function doGet(e = {}) {
  const params = e.parameter || {};
  const action = params.action || 'default';
  
  let result;
  try {
    switch(action) {
      case 'createHeadersWebsite':
        createHeadersWebsite();
        result = {
          status: 'success', 
          message: 'Đã tạo headers cho sheet Website',
          action: action
        };
        break;
      case 'createFacebook':
        if (params.spreadsheetIds) {
          // Xử lý nhiều sheets
          const sheetIds = params.spreadsheetIds.split(',');
          const processed = [];
          
          for (const id of sheetIds) {
            try {
              const spreadsheet = SpreadsheetApp.openById(id.trim());
              facebookCreate(spreadsheet);
              processed.push({id, status: 'success'});
            } catch (error) {
              processed.push({id, status: 'error', message: error.message});
            }
          }
          
          result = {
            status: 'success',
            message: 'Đã xử lý xong các sheets',
            action: action,
            details: processed
          };
        } else if (params.spreadsheetId) {
          // Xử lý 1 sheet
          const spreadsheet = SpreadsheetApp.openById(params.spreadsheetId);
          facebookCreate(spreadsheet);
          result = {
            status: 'success',
            message: `Đã tạo Facebook sheet cho spreadsheet ${params.spreadsheetId}`,
            action: action
          };
        } else {
          throw new Error('Thiếu tham số spreadsheetId hoặc spreadsheetIds');
        }
        break;
      default:
        result = {
          status: 'success',
          message: 'Kết nối thành công với Google Apps Script',
          action: action
        };
    }
  } catch (error) {
    result = {
      status: 'error',
      message: error.message,
      action: action
    };
  }

  return ContentService.createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}

function logMessage() {
  console.log('This is a test log!');
}

  /* Tao menu tuỳ chỉnh trong Google Sheets */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('DATSheetN8N')
    .addItem('Định dạng danh mục sản phẩm', 'createCategoriesProduct')
    .addToUi();
}
