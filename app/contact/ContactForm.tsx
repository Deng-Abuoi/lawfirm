'use client';

import { FormEvent, useState } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState('');
  const [statusKind, setStatusKind] = useState<'success' | 'error' | ''>('');
  const [emailFallback, setEmailFallback] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();
    const website = String(data.get('website') ?? '').trim();
    if (website) return;
    setStatus('Sending…');
    setStatusKind('');
    setEmailFallback('');

    const makeEmailFallback = () => {
      const subject = encodeURIComponent(`Website enquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      setEmailFallback(`mailto:info@lawfirm.ss?subject=${subject}&body=${body}`);
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        if (response.status === 400) {
          setStatus(result.error ?? 'Please check the form and try again.');
          setStatusKind('error');
          return;
        }
        setStatus('The website could not send your enquiry. You can open your email app and send it directly instead.');
        setStatusKind('error');
        makeEmailFallback();
        return;
      }
      form.reset();
      setStatus('Thank you. We will get back to you shortly.');
      setStatusKind('success');
    } catch {
      setStatus('The website could not send your enquiry. You can open your email app and send it directly instead.');
      setStatusKind('error');
      makeEmailFallback();
    }
  }

  return <form className="contact-form" onSubmit={handleSubmit}>
    <label>Name<input name="name" type="text" autoComplete="name" placeholder="Your name" maxLength={100} required /></label>
    <label>Email<input name="email" type="email" autoComplete="email" placeholder="you@example.com" maxLength={254} required /></label>
    <label>How can we help?<textarea name="message" rows={4} placeholder="A short overview of your matter" maxLength={3000} required /></label>
    <input className="form-trap" name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
    <button className="button button-dark" type="submit" disabled={status === 'Sending…'}>{status === 'Sending…' ? status : 'Send enquiry'} <span>↗</span></button>
    {status && status !== 'Sending…' && <div className={`form-status ${statusKind === 'error' ? 'form-status-error' : ''}`} role={statusKind === 'error' ? 'alert' : 'status'} aria-live="polite"><p>{status}</p>{emailFallback && <a className="text-link" href={emailFallback}>Open a pre-filled email to the firm</a>}</div>}
  </form>;
}
