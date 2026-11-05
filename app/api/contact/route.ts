import { NextResponse } from 'next/server';

const requests = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;

function clientKey(request: Request) {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    ?? request.headers.get('x-real-ip')
    ?? 'unknown';
}

export async function POST(request: Request) {
  const now = Date.now();
  const key = clientKey(request);
  const current = requests.get(key);
  if (current && current.resetAt > now && current.count >= MAX_REQUESTS) {
    return NextResponse.json({ error: 'Too many enquiries. Please try again later.' }, { status: 429, headers: { 'Retry-After': String(Math.ceil((current.resetAt - now) / 1000)) } });
  }
  if (!current || current.resetAt <= now) requests.set(key, { count: 1, resetAt: now + WINDOW_MS });
  else current.count += 1;

  const rawBody = await request.text();
  if (rawBody.length > 12_000) return NextResponse.json({ error: 'Your enquiry is too long.' }, { status: 413 });
  let body: any = null;
  try {
    body = JSON.parse(rawBody || 'null');
  } catch {
    return NextResponse.json({ error: 'Please provide a valid enquiry.' }, { status: 400 });
  }
  const name = typeof body?.name === 'string' ? body.name.trim() : '';
  const email = typeof body?.email === 'string' ? body.email.trim() : '';
  const message = typeof body?.message === 'string' ? body.message.trim() : '';
  const website = typeof body?.website === 'string' ? body.website.trim() : '';

  if (website) return NextResponse.json({ ok: true });
  if (!name || name.length > 100 || !email || email.length > 254 || !message || message.length > 3000 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please provide a name, valid email, and message.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_EMAIL ?? 'info@lawfirm.ss';
  const sender = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !sender) return NextResponse.json({ error: 'Unable to accept your enquiry right now.' }, { status: 503 });

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: sender,
      to: [recipient],
      reply_to: email,
      subject: `Website enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    }),
  });

  if (!response.ok) return NextResponse.json({ error: 'Unable to accept your enquiry right now.' }, { status: 502 });
  return NextResponse.json({ ok: true });
}
