# Google Sheets & Google Apps Script Integration Guide
## Path Finder Law Associates — Web Contact & Consultation Intake

This guide explains how to connect the website's consultation intake form to Google Sheets using a Google Apps Script Web App.

---

### Step 1: Create the Google Sheet
1. Visit [Google Sheets](https://sheets.new) in your Google browser.
2. Name the spreadsheet: **`Path Finder Law Associates — Client Enquiries`**.
3. (Optional) Rename the first sheet tab at the bottom to **`Enquiries`**.

---

### Step 2: Open Apps Script & Add the Code
1. In your new Google Sheet, click **Extensions** > **Apps Script** in the top menu.
2. Delete any boilerplate code inside `Code.gs`.
3. Open the file `google-apps-script/Code.gs` in this repository, copy its entire contents, and paste it into the Apps Script editor.
4. *(Optional)* On line 23 of `Code.gs`, update `CHAMBERS_NOTIFICATION_EMAIL` to your desired notification email address (e.g., `legal@path-finder.in` or your personal Gmail) to receive real-time email alerts whenever a new inquiry arrives.
5. Click the **Save** (disk) icon or press `Cmd+S` / `Ctrl+S`.

---

### Step 3: Deploy as a Web App (Crucial Settings)
1. In the upper-right corner of the Apps Script editor, click the blue **Deploy** button > **New deployment**.
2. Click the **gear icon** next to "Select type" and select **Web app**.
3. Fill in the deployment configuration:
   - **Description**: `PFLA Enquiry Webhook v1`
   - **Execute as**: `Me (<your-email>@gmail.com)` *(Important: do not select "User accessing the web app")*
   - **Who has access**: `Anyone` *(Crucial: allows your Next.js server to send POST submissions without OAuth popups)*
4. Click **Deploy**.
5. Google will prompt you to **Authorize access**:
   - Click *Review permissions*.
   - Choose your Google account.
   - Click *Advanced* (bottom left of the modal) > Click *Go to Untitled project (unsafe)*.
   - Click *Allow*.
6. Once deployed, Google Apps Script will display your **Web app URL**:
   ```
   https://script.google.com/macros/s/AKfycb...YOUR_UNIQUE_ID.../exec
   ```
7. Copy this URL.

---

### Step 4: Configure Environment Variables

#### For Local Development:
Add the following line to your local `.env.local` file (create one in project root if it does not exist):
```env
GOOGLE_SHEETS_WEBHOOK_URL="https://script.google.com/macros/s/YOUR_ACTUAL_DEPLOYMENT_ID/exec"
```

#### For Vercel Deployment:
1. Log in to [Vercel Dashboard](https://vercel.com) and select your project.
2. Go to **Settings** > **Environment Variables**.
3. Add a new variable:
   - **Key**: `GOOGLE_SHEETS_WEBHOOK_URL`
   - **Value**: `https://script.google.com/macros/s/YOUR_ACTUAL_DEPLOYMENT_ID/exec`
   - **Environments**: Select *Production*, *Preview*, and *Development*.
4. Click **Save**.
5. Trigger a redeploy (or push a commit to GitHub) to apply the variable.

---

### Step 5: How It Works & Google Sheet Structure

When a client submits the form on the website:
1. The user's browser sends the data to your Next.js server route (`/api/enquiry` or `/api/contact`).
2. The server performs input validation and anti-spam verification.
3. The server generates a unique tracking reference (e.g. `PFLA-MV9...`).
4. The server forwards the payload to your Google Apps Script Web App URL.
5. The Google Sheet automatically formats the columns and appends a new row:

| Column | Header | Description |
|---|---|---|
| **A** | Reference ID | Unique tracking code (e.g. `PFLA-MV944P03`) |
| **B** | Date & Time (IST) | Submission timestamp formatted in Indian Standard Time |
| **C** | Full Name | Client's full name |
| **D** | Telephone / Mobile | Client's contact number |
| **E** | Email Address | Client's email address |
| **F** | Practice Area / Service | Selected legal practice area (e.g. `Corporate Litigation — NCLT`) |
| **G** | Case Summary / Message | Brief description of the legal dispute or consultation need |
| **H** | Status | Default: `New Enquiry` (editable in Sheets for follow-up tracking) |

---

### Security & Privacy Protections
- **No Client-Side Secrets**: The Google Apps Script URL is kept on the server side (`process.env.GOOGLE_SHEETS_WEBHOOK_URL`) and never exposed to the browser.
- **Anti-Spam Honeypot**: Hidden fields trap automated bot submissions before they reach your Google Sheet.
- **Input Sanitization**: Length bounds and format checks protect against malformed or oversized inputs.
- **Fault-Tolerant Delivery**: If Google Apps Script is momentarily unreachable, the Next.js API captures the error without crashing, logs the incident, and still provides the user with emergency chamber contact telephone numbers.
