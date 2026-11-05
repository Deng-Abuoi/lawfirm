'use client';
import Cal from '@calcom/embed-react';

const bookingLink = process.env.NEXT_PUBLIC_CALCOM_LINK;
const directBookingUrl = bookingLink ? `https://cal.com/${bookingLink.replace(/^\/+|\/+$/g, '')}` : undefined;

export function CalScheduler() {
  if (!bookingLink) return <div className="cal-placeholder"><span className="section-kicker">Online scheduling</span><h3>Choose a time that works for you.</h3><p>The firm’s Cal.com booking link will appear here once it’s set up.</p><a className="text-link" href="mailto:info@lawfirm.ss">Email the office to arrange a time <span>↗</span></a><a className="text-link" href="tel:+211927676766">Call +211 927 676 766 <span>↗</span></a></div>;

  return <div className="cal-scheduler"><div className="cal-embed-heading"><div><span className="section-kicker">Consultation booking</span><h2>Select a date to see available times.</h2></div><a className="cal-direct-link" href={directBookingUrl} target="_blank" rel="noopener noreferrer">Open Cal.com directly ↗</a></div><div className="cal-frame"><Cal calLink={bookingLink} style={{ width: '100%', height: '720px' }} config={{ layout: 'month_view', theme: 'light' }} /></div><p className="cal-privacy-note">Please keep booking notes general. Do not include confidential case details or documents.</p></div>;
}
