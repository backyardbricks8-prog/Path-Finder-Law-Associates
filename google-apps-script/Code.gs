/**
 * ============================================================================
 * PATH FINDER LAW ASSOCIATES — GOOGLE APPS SCRIPT WEBHOOK API
 * File: Code.gs
 * ============================================================================
 * 
 * Instructions:
 * 1. Open Google Sheets at https://sheets.new to create a new spreadsheet.
 * 2. Name the spreadsheet: "Path Finder Law Associates — Client Enquiries".
 * 3. Go to Extensions > Apps Script.
 * 4. Replace any existing code with this Code.gs script.
 * 5. (Optional) Set CHAMBERS_NOTIFICATION_EMAIL below to receive email alerts.
 * 6. Click "Deploy" > "New deployment".
 * 7. Click the gear icon (Select type) > Choose "Web app".
 * 8. Set Description: "PFLA Enquiry Webhook v1".
 * 9. Set "Execute as": "Me" (your Google account).
 * 10. Set "Who has access": "Anyone" (crucial so Next.js server can POST data).
 * 11. Click "Deploy", authorize permissions when prompted.
 * 12. Copy the resulting "Web app URL" (starts with https://script.google.com/macros/s/...).
 * 13. Add to your .env.local and Vercel Environment Variables:
 *     GOOGLE_SHEETS_WEBHOOK_URL="https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec"
 */

// Configuration
var SHEET_NAME = 'Enquiries';
var CHAMBERS_NOTIFICATION_EMAIL = 'legal@path-finder.in'; // Email to notify upon new enquiry (or leave blank to disable)
var NOTIFICATION_SUBJECT_PREFIX = '[New Enquiry] Path Finder Law Associates';

/**
 * Handles incoming POST requests from Next.js server route (/api/enquiry or /api/contact)
 */
function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return createJsonResponse({
        success: false,
        error: 'Missing post data payload'
      }, 400);
    }

    var data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (parseErr) {
      return createJsonResponse({
        success: false,
        error: 'Invalid JSON payload'
      }, 400);
    }

    // Extract fields
    var referenceId = data.referenceId || ('PFLA-' + Utilities.getUuid().substring(0, 8).toUpperCase());
    var timestamp = data.timestamp ? new Date(data.timestamp) : new Date();
    var formattedDate = Utilities.formatDate(timestamp, 'Asia/Kolkata', 'yyyy-MM-dd HH:mm:ss') + ' IST';
    var name = (data.name || '').toString().trim();
    var phone = (data.phone || '').toString().trim();
    var email = (data.email || '').toString().trim();
    var service = (data.practiceArea || data.service || 'General Consultation').toString().trim();
    var message = (data.message || '').toString().trim();
    var status = 'New Enquiry';

    // Validation
    if (!name || !email || !phone) {
      return createJsonResponse({
        success: false,
        error: 'Name, email, and telephone are required fields.'
      }, 400);
    }

    // Access or create sheet
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      initializeSheetHeaders(sheet);
    } else if (sheet.getLastRow() === 0) {
      initializeSheetHeaders(sheet);
    }

    // Append new lead row
    sheet.appendRow([
      referenceId,
      formattedDate,
      name,
      phone,
      email,
      service,
      message,
      status
    ]);

    // Format new row styling
    var lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 1, 1, 8).setVerticalAlignment('middle').setWrap(true);
    sheet.getRange(lastRow, 1).setFontWeight('bold').setFontColor('#800020'); // Reference ID in burgundy

    // Dispatch optional email notification to chambers
    sendNotificationEmail(referenceId, formattedDate, name, phone, email, service, message);

    return createJsonResponse({
      success: true,
      referenceId: referenceId,
      message: 'Enquiry recorded successfully in Google Sheets',
      timestamp: formattedDate
    }, 200);

  } catch (error) {
    return createJsonResponse({
      success: false,
      error: error.toString()
    }, 500);
  }
}

/**
 * Health check endpoint for GET requests
 */
function doGet(e) {
  return createJsonResponse({
    status: 'online',
    service: 'Path Finder Law Associates Enquiry Webhook API',
    timestamp: new Date().toISOString()
  }, 200);
}

/**
 * Initializes and styles header row in the Google Sheet
 */
function initializeSheetHeaders(sheet) {
  var headers = [
    'Reference ID',
    'Date & Time (IST)',
    'Full Name',
    'Telephone / Mobile',
    'Email Address',
    'Practice Area / Service',
    'Case Summary / Message',
    'Status'
  ];

  sheet.appendRow(headers);

  // Style header row (Swiss Obsidian #111111 with White text)
  var headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange
    .setBackground('#111111')
    .setFontColor('#FFFFFF')
    .setFontWeight('bold')
    .setFontFamily('Arial')
    .setFontSize(10)
    .setHorizontalAlignment('center')
    .setVerticalAlignment('middle');

  sheet.setRowHeight(1, 35);
  sheet.setFrozenRows(1);

  // Set initial column widths for readability
  sheet.setColumnWidth(1, 140); // Ref ID
  sheet.setColumnWidth(2, 170); // Date
  sheet.setColumnWidth(3, 180); // Name
  sheet.setColumnWidth(4, 150); // Phone
  sheet.setColumnWidth(5, 200); // Email
  sheet.setColumnWidth(6, 220); // Practice Area
  sheet.setColumnWidth(7, 350); // Message
  sheet.setColumnWidth(8, 120); // Status
}

/**
 * Sends email alert to chambers counsel if email is configured
 */
function sendNotificationEmail(refId, dateStr, name, phone, email, service, message) {
  if (!CHAMBERS_NOTIFICATION_EMAIL) return;

  try {
    var subject = NOTIFICATION_SUBJECT_PREFIX + ' - ' + name + ' (' + service + ')';
    var plainBody = 
      'A new consultation enquiry has been submitted through the Path Finder Law Associates website:\n\n' +
      'Reference ID: ' + refId + '\n' +
      'Date & Time: ' + dateStr + '\n' +
      'Client Name: ' + name + '\n' +
      'Phone: ' + phone + '\n' +
      'Email: ' + email + '\n' +
      'Practice Area: ' + service + '\n\n' +
      'Case Brief:\n' + message + '\n\n' +
      'Access Google Sheet to view and update enquiry status.';

    var htmlBody = 
      '<div style="font-family: Arial, sans-serif; max-width: 600px; border: 1px solid #e0e0e0; padding: 24px; color: #111111;">' +
        '<div style="border-bottom: 2px solid #800020; padding-bottom: 12px; margin-bottom: 16px;">' +
          '<h2 style="margin: 0; color: #111111; font-size: 18px; text-transform: uppercase; letter-spacing: 1px;">Path Finder Law Associates</h2>' +
          '<span style="color: #800020; font-size: 12px; font-weight: bold;">New Client Consultation Enquiry</span>' +
        '</div>' +
        '<p style="font-size: 14px; margin: 4px 0;"><strong>Reference ID:</strong> <span style="color: #800020; font-family: monospace;">' + refId + '</span></p>' +
        '<p style="font-size: 14px; margin: 4px 0;"><strong>Date:</strong> ' + dateStr + '</p>' +
        '<p style="font-size: 14px; margin: 4px 0;"><strong>Client Name:</strong> ' + name + '</p>' +
        '<p style="font-size: 14px; margin: 4px 0;"><strong>Telephone:</strong> <a href="tel:' + phone + '">' + phone + '</a></p>' +
        '<p style="font-size: 14px; margin: 4px 0;"><strong>Email:</strong> <a href="mailto:' + email + '">' + email + '</a></p>' +
        '<p style="font-size: 14px; margin: 4px 0;"><strong>Practice Area:</strong> ' + service + '</p>' +
        '<div style="margin-top: 16px; padding: 12px; background: #fbf9f5; border-left: 3px solid #800020;">' +
          '<strong>Case Brief / Matter Outline:</strong>' +
          '<p style="font-size: 13px; line-height: 1.6; margin: 8px 0 0 0; white-space: pre-wrap;">' + message + '</p>' +
        '</div>' +
        '<p style="font-size: 11px; color: #777; margin-top: 24px; border-top: 1px solid #eee; padding-top: 12px;">' +
          'This email was automatically generated by the website enquiry integration for Path Finder Law Associates.' +
        '</p>' +
      '</div>';

    MailApp.sendEmail({
      to: CHAMBERS_NOTIFICATION_EMAIL,
      subject: subject,
      body: plainBody,
      htmlBody: htmlBody
    });
  } catch (mailErr) {
    Logger.log('Could not send notification email: ' + mailErr.toString());
  }
}

/**
 * Helper to build JSON ContentService response
 */
function createJsonResponse(obj, statusCode) {
  var output = ContentService.createTextOutput(JSON.stringify(obj));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}
