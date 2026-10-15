/**
 * Google Sheets Integration Forwarder via Google Apps Script Web App
 */

export interface EnquiryData {
  referenceId: string;
  timestamp: string;
  name: string;
  email: string;
  phone: string;
  practiceArea: string;
  message: string;
}

export interface ForwardResult {
  forwarded: boolean;
  status: 'delivered' | 'unconfigured' | 'failed';
  error?: string;
}

const DEFAULT_WEBHOOK_URL =
  'https://script.google.com/macros/s/AKfycbxOCBuBoaErCaEZNudRqRwMDtyCE8itww3KI14EXbl7qTLiTNpuiu0012nSKwzABZQc/exec';

function resolveWebhookUrl(): string | null {
  const envVal = process.env.GOOGLE_SHEETS_WEBHOOK_URL?.trim();

  if (envVal && envVal.startsWith('https://script.google.com/')) {
    return envVal;
  }
  if (envVal && envVal.startsWith('AKfy')) {
    return `https://script.google.com/macros/s/${envVal}/exec`;
  }
  if (DEFAULT_WEBHOOK_URL) {
    return DEFAULT_WEBHOOK_URL;
  }
  return null;
}

/**
 * Forwards validated enquiry to the Google Apps Script Web App URL.
 * Follows HTTP 302 redirects automatically (required by Apps Script).
 */
export async function forwardToGoogleSheets(data: EnquiryData): Promise<ForwardResult> {
  const webhookUrl = resolveWebhookUrl();

  if (!webhookUrl) {
    console.info(
      `[Google Sheets Integration] GOOGLE_SHEETS_WEBHOOK_URL is not configured. Enquiry ${data.referenceId} saved locally in runtime.`
    );
    return {
      forwarded: false,
      status: 'unconfigured',
      error: 'GOOGLE_SHEETS_WEBHOOK_URL not configured',
    };
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10-second timeout

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(data),
      redirect: 'follow', // Crucial for Google Apps Script 302 redirect handling
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.warn(`[Google Sheets Integration] Apps Script returned HTTP ${response.status}`);
      return {
        forwarded: false,
        status: 'failed',
        error: `HTTP ${response.status}`,
      };
    }

    const result = await response.json();

    if (result && result.success) {
      console.info(`[Google Sheets Integration] Successfully appended enquiry ${data.referenceId} to Google Sheet`);
      return {
        forwarded: true,
        status: 'delivered',
      };
    }

    return {
      forwarded: false,
      status: 'failed',
      error: result?.error || 'Unknown Apps Script response',
    };
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error(`[Google Sheets Integration] Failed to forward to Apps Script:`, errorMessage);
    return {
      forwarded: false,
      status: 'failed',
      error: errorMessage,
    };
  }
}
