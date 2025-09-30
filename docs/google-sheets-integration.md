# Google Sheets Integration for ROI Calculator

This guide explains how to store email submissions from the ROI Calculator to Google Sheets using Google Apps Script.

## Setup Instructions

### 1. Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new sheet called "ROI Calculator Submissions"
3. Add the following headers in row 1:
   - Column A: `Timestamp`
   - Column B: `Email`
   - Column C: `Team Size`
   - Column D: `Engineer Cost`
   - Column E: `Total Hours`
   - Column F: `Phase Allocations` (JSON string)
   - Column G: `Total Annual Savings`
   - Column H: `ROI Percentage`

### 2. Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any default code
3. Paste the following script:

```javascript
/**
 * Google Apps Script for ROI Calculator Form Submissions
 *
 * This script receives POST requests from the ROI Calculator
 * and stores submissions in the connected Google Sheet.
 */

function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parse incoming data
    const data = JSON.parse(e.postData.contents);

    // Prepare row data
    const timestamp = new Date();
    const email = data.email || '';
    const teamSize = data.teamSize || 0;
    const engineerCost = data.engineerCost || 0;
    const totalHours = data.totalHours || 0;

    // Store phase allocations as JSON string for flexibility
    const phaseAllocations = JSON.stringify({
      requirements: data.requirements || 0,
      architecture: data.architecture || 0,
      coding: data.coding || 0,
      testing: data.testing || 0,
      reviews: data.reviews || 0,
      documentation: data.documentation || 0,
      devops: data.devops || 0
    });

    // Calculate results (matching frontend logic)
    const totalAnnualSavings = data.totalAnnualSavings || 0;
    const roiPercentage = data.roiPercentage || 0;

    // Append row to sheet
    sheet.appendRow([
      timestamp,
      email,
      teamSize,
      engineerCost,
      totalHours,
      phaseAllocations,
      totalAnnualSavings,
      roiPercentage
    ]);

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Submission recorded successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Log error and return error response
    Logger.log('Error: ' + error.toString());

    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: 'Error recording submission: ' + error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Test function to verify script works
 * Run this from the Apps Script editor to test
 */
function testDoPost() {
  const testData = {
    email: 'test@example.com',
    teamSize: 35,
    engineerCost: 80000,
    totalHours: 40,
    requirements: 3,
    architecture: 4,
    coding: 15,
    testing: 8,
    reviews: 5,
    documentation: 3,
    devops: 2,
    totalAnnualSavings: 500000,
    roiPercentage: 376
  };

  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };

  const response = doPost(mockEvent);
  Logger.log(response.getContent());
}
```

### 3. Deploy the Script

1. Click **Deploy** → **New deployment**
2. Click the gear icon next to "Select type" and choose **Web app**
3. Configure:
   - **Description**: "ROI Calculator Form Handler"
   - **Execute as**: Me (your email)
   - **Who has access**: **Anyone** (this allows anonymous submissions)
4. Click **Deploy**
5. **Copy the Web App URL** - you'll need this for the frontend configuration

### 4. Configure Frontend

In the file `/assets/js/roi-calculator-minimal.js`, find the constant `GOOGLE_SHEETS_URL` at the top of the file and replace it with your deployed Web App URL:

```javascript
// Replace with your Google Apps Script Web App URL
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
```

## Testing

1. **Test the script directly**:
   - In Apps Script editor, select `testDoPost` function
   - Click **Run**
   - Check the Execution log (View → Execution log)
   - Verify a test row appears in your Google Sheet

2. **Test from the calculator**:
   - Visit your ROI calculator page
   - Fill in the form with a test email
   - Click "Calculate My ROI"
   - Check your Google Sheet for the submission

## Data Privacy Notes

- The script only accepts POST requests (no GET requests that could expose data in URLs)
- Email addresses are stored securely in your private Google Sheet
- Only you (the sheet owner) can access the stored data
- The script URL is publicly accessible but can only write data, not read it
- Consider adding email validation in the script for additional security

## Optional Enhancements

### Email Notifications

Add this function to receive email notifications for new submissions:

```javascript
function sendEmailNotification(email, teamSize, savings) {
  const recipient = 'your-email@example.com'; // Your notification email
  const subject = 'New ROI Calculator Submission';
  const body = `
New ROI Calculator submission:

Email: ${email}
Team Size: ${teamSize}
Estimated Annual Savings: €${savings.toLocaleString()}

View all submissions: ${SpreadsheetApp.getActiveSpreadsheet().getUrl()}
  `;

  MailApp.sendEmail(recipient, subject, body);
}
```

Then call it from `doPost()` after appending the row:

```javascript
// Send notification (optional)
sendEmailNotification(email, teamSize, totalAnnualSavings);
```

### Data Validation

Add validation to the `doPost()` function:

```javascript
// Validate email format
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  return ContentService
    .createTextOutput(JSON.stringify({
      success: false,
      message: 'Invalid email address'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Validate team size range
if (teamSize < 1 || teamSize > 500) {
  return ContentService
    .createTextOutput(JSON.stringify({
      success: false,
      message: 'Team size must be between 1 and 500'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## Troubleshooting

### Error: "Authorization required"
- Make sure you've deployed the script with "Who has access: Anyone"
- Redeploy if you changed any settings

### No data appearing in sheet
- Check the Apps Script execution logs (View → Execution log)
- Verify the Web App URL is correctly configured in the frontend
- Test the `testDoPost()` function directly

### CORS errors in browser console
- Google Apps Script automatically handles CORS for deployed web apps
- If you see CORS errors, verify you're using the `/exec` URL (not `/dev`)

## Security Considerations

- **Rate Limiting**: Consider adding Apps Script rate limiting to prevent abuse
- **Data Retention**: Set up automatic data cleanup for old submissions if needed
- **PII Handling**: Ensure compliance with GDPR/data privacy regulations
- **Backup**: Export sheet data regularly for backup purposes