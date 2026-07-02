/**
 * TECH NOVA - E-commerce Backend using Google Sheets
 * This script turns your Google Sheet into a REST API.
 */

const SCRIPT_NAME = "TechNovaAPI";

// 1. Initial Setup Function (Run this ONCE from the Apps Script Editor)
function setupSheets() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const requiredSheets = [
    { name: "Users", headers: ["id", "name", "email", "phone", "role", "createdAt"] },
    { name: "Products", headers: ["id", "title", "description", "price", "category", "image", "stock", "createdAt"] },
    { name: "Categories", headers: ["id", "name", "image", "createdAt"] },
    { name: "Orders", headers: ["orderId", "userId", "customerName", "phone", "address", "totalAmount", "paymentMethod", "status", "items", "createdAt"] },
    { name: "Banners", headers: ["id", "title", "image", "link", "isActive"] },
    { name: "LegalPages", headers: ["id", "pageName", "content", "updatedAt"] }
  ];

  requiredSheets.forEach(sheetData => {
    let sheet = ss.getSheetByName(sheetData.name);
    if (!sheet) {
      sheet = ss.insertSheet(sheetData.name);
      sheet.appendRow(sheetData.headers);
      // Make headers bold
      sheet.getRange(1, 1, 1, sheetData.headers.length).setFontWeight("bold");
    }
  });
  
  return "Setup complete! All necessary sheets and headers are created.";
}

// 2. Handle GET Requests (Read Data)
function doGet(e) {
  try {
    const action = e.parameter.action;
    
    if (!action) {
      return responseJSON({ success: false, message: "Action parameter is missing!" });
    }

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    
    // Switch cases for different GET actions
    switch (action) {
      case 'getProducts':
        return responseJSON({ success: true, data: readData(ss, "Products") });
        
      case 'getCategories':
        return responseJSON({ success: true, data: readData(ss, "Categories") });
        
      case 'getBanners':
        return responseJSON({ success: true, data: readData(ss, "Banners") });
        
      case 'getLegalPages':
        return responseJSON({ success: true, data: readData(ss, "LegalPages") });
        
      case 'getOrders': // Should be protected in a real scenario
        return responseJSON({ success: true, data: readData(ss, "Orders") });
        
      default:
        return responseJSON({ success: false, message: "Invalid action type" });
    }
  } catch (error) {
    return responseJSON({ success: false, message: error.toString() });
  }
}

// 3. Handle POST Requests (Write/Update Data)
function doPost(e) {
  try {
    const requestData = JSON.parse(e.postData.contents);
    const action = requestData.action;
    const data = requestData.data;

    if (!action || !data) {
      return responseJSON({ success: false, message: "Action or Data is missing!" });
    }

    const ss = SpreadsheetApp.getActiveSpreadsheet();

    switch (action) {
      case 'createOrder':
        const orderResult = writeData(ss, "Orders", data);
        return responseJSON({ success: true, message: "Order placed successfully!", orderId: orderResult.id });
        
      case 'addUser':
        writeData(ss, "Users", data);
        return responseJSON({ success: true, message: "User registered successfully!" });
        
      case 'addProduct':
        writeData(ss, "Products", data);
        return responseJSON({ success: true, message: "Product added successfully!" });
        
      default:
        return responseJSON({ success: false, message: "Invalid action type" });
    }
  } catch (error) {
    return responseJSON({ success: false, message: error.toString() });
  }
}

// --- Helper Functions ---

// Function to send JSON response
function responseJSON(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

// Function to Read Data from a specific sheet and convert to Array of Objects
function readData(ss, sheetName) {
  const sheet = ss.getSheetByName(sheetName);
  if (!sheet) return [];

  const dataRange = sheet.getDataRange();
  const values = dataRange.getValues();
  
  if (values.length <= 1) return []; // Empty sheet or only headers

  const headers = values[0];
  const data = [];

  for (let i = 1; i < values.length; i++) {
    const row = values[i];
    const obj = {};
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = row[j];
    }
    data.push(obj);
  }
  
  return data;
}

// Function to Write Data to a specific sheet mapping with headers
function writeData(ss, sheetName, dataObj) {
  const sheet = ss.getSheetByName(sheetName);
  if (!sheet) throw new Error(`Sheet ${sheetName} not found!`);

  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const rowData = [];

  // If no ID is provided, generate a random one
  if (!dataObj.id && headers.includes('id')) {
    dataObj.id = Utilities.getUuid();
  }
  
  // If orderId is needed
  if (!dataObj.orderId && headers.includes('orderId')) {
    dataObj.orderId = "TN-" + Math.floor(100000 + Math.random() * 900000);
  }

  // Set creation date automatically
  if (headers.includes('createdAt')) {
    dataObj.createdAt = new Date().toISOString();
  }

  // Map object data to correct columns based on headers
  for (let i = 0; i < headers.length; i++) {
    const header = headers[i];
    // Stringify objects/arrays like 'items' in Orders
    if (typeof dataObj[header] === 'object') {
      rowData.push(JSON.stringify(dataObj[header]));
    } else {
      rowData.push(dataObj[header] || "");
    }
  }

  sheet.appendRow(rowData);
  return dataObj;
}
