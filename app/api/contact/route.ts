import { NextRequest } from 'next/server';
import { POST as handleEnquiry } from '@/app/api/enquiry/route';

export async function POST(req: NextRequest) {
  return handleEnquiry(req);
}
