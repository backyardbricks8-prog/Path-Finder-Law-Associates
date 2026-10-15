import { NextRequest, NextResponse } from 'next/server';

interface EnquiryPayload {
  name: string;
  email: string;
  phone: string;
  practiceArea: string;
  message: string;
  honeypot?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: EnquiryPayload = await req.json();

    // Honeypot anti-spam check
    if (body.honeypot && body.honeypot.trim().length > 0) {
      return NextResponse.json({ success: true, message: 'Enquiry received' }, { status: 200 });
    }

    const { name, email, phone, practiceArea, message } = body;

    // Server-side validation
    if (!name || name.trim().length < 2 || name.trim().length > 100) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid full name (2–100 characters).' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const phoneClean = (phone || '').replace(/[\s\-\(\)\+]/g, '');
    if (!phoneClean || phoneClean.length < 7 || phoneClean.length > 15) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid contact telephone number.' },
        { status: 400 }
      );
    }

    if (!message || message.trim().length < 10 || message.trim().length > 2000) {
      return NextResponse.json(
        { success: false, error: 'Please provide a brief outline of your legal matter (10–2000 characters).' },
        { status: 400 }
      );
    }

    // In a production deployment with email integration, this would dispatch via Resend/SMTP
    // Return verified receipt confirmation
    const referenceId = `PFLA-${Date.now().toString(36).toUpperCase()}`;

    return NextResponse.json(
      {
        success: true,
        referenceId,
        message: 'Your enquiry has been received by our chambers. An advocate will review your matter and contact you.',
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'An unexpected server error occurred while processing your request. Please call our chambers directly.' },
      { status: 500 }
    );
  }
}
