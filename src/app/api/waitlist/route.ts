import { NextRequest, NextResponse } from 'next/server';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const recentEmailsMap = new Map<string, number>();

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5; // Max 5 requests
const EMAIL_DEDUP_WINDOW_MS = 5 * 60 * 1000; // 5 minutes deduplication

function cleanupExpiredEntries() {
  const now = Date.now();
  for (const [ip, data] of rateLimitMap.entries()) {
    if (now > data.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
  for (const [email, timestamp] of recentEmailsMap.entries()) {
    if (now - timestamp > EMAIL_DEDUP_WINDOW_MS) {
      recentEmailsMap.delete(email);
    }
  }
}

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }
  const realIp = request.headers.get('x-real-ip');
  if (realIp) {
    return realIp.trim();
  }
  const cfIp = request.headers.get('cf-connecting-ip');
  if (cfIp) {
    return cfIp.trim();
  }
  return '127.0.0.1';
}

export async function POST(request: NextRequest) {
  cleanupExpiredEntries();

  const clientIp = getClientIp(request);
  const now = Date.now();

  const rateLimitData = rateLimitMap.get(clientIp);
  if (rateLimitData) {
    if (now < rateLimitData.resetTime) {
      if (rateLimitData.count >= MAX_REQUESTS_PER_WINDOW) {
        return NextResponse.json(
          {
            success: false,
            error: 'Trop de tentatives. Veuillez patienter quelques minutes avant de réessayer.',
          },
          { status: 429 },
        );
      }
      rateLimitData.count += 1;
    } else {
      rateLimitMap.set(clientIp, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    }
  } else {
    rateLimitMap.set(clientIp, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
  }

  try {
    const body = await request.json();
    const { email, source, honeypot } = body;

    // Honeypot check (Bots fill this, humans don't)
    if (honeypot && typeof honeypot === 'string' && honeypot.trim() !== '') {
      // Silently succeed without calling Google Sheets
      return NextResponse.json({ success: true });
    }

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Une adresse email est requise.' },
        { status: 400 },
      );
    }

    const trimmedEmail = email.trim().toLowerCase();

    if (!EMAIL_REGEX.test(trimmedEmail) || trimmedEmail.length > 255) {
      return NextResponse.json(
        { success: false, error: 'Format d’adresse email invalide.' },
        { status: 400 },
      );
    }

    const lastSubmission = recentEmailsMap.get(trimmedEmail);
    if (lastSubmission && now - lastSubmission < EMAIL_DEDUP_WINDOW_MS) {
      // Email was already submitted recently, return success without duplicate sheet row
      return NextResponse.json({ success: true });
    }

    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error('GOOGLE_SHEET_WEBHOOK_URL is not defined in environment variables.');
      return NextResponse.json(
        { success: false, error: 'Service temporairement indisponible.' },
        { status: 500 },
      );
    }

    // Call Google Apps Script with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({
          email: trimmedEmail,
          source: typeof source === 'string' ? source.slice(0, 50) : 'website',
        }),
        redirect: 'follow',
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`Google Script returned status ${response.status}`);
      }

      const result = await response.json().catch(() => ({ status: 'success' }));

      if (result.status === 'error') {
        throw new Error(result.message || 'Error from Google Script');
      }

      recentEmailsMap.set(trimmedEmail, now);

      return NextResponse.json({ success: true });
    } catch (fetchError: unknown) {
      clearTimeout(timeoutId);
      console.error('Error forwarding to Google Sheet:', fetchError);
      return NextResponse.json(
        {
          success: false,
          error: 'Impossible d’enregistrer votre inscription. Veuillez réessayer.',
        },
        { status: 502 },
      );
    }
  } catch (error: unknown) {
    console.error('Error processing waitlist request:', error);
    return NextResponse.json({ success: false, error: 'Requête invalide.' }, { status: 400 });
  }
}
