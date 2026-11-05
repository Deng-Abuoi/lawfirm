import { CalScheduler } from './CalScheduler';

export const metadata = {
  title: 'Book an Appointment',
  description: 'Book a consultation with PDG & Co. Advocates through the firm’s online scheduling service.',
  alternates: { canonical: '/appointment' },
};

export default function Appointment() {
  return <main id="main-content"><section className="page-hero appointment-hero container"><p className="eyebrow"><span/> Appointments</p><h1>Let’s find a time to talk.</h1><p className="hero-intro">Choose a date below to see available consultation times. Cal.com will email your booking confirmation.</p></section><section className="appointment-band band-light"><div className="container"><CalScheduler/><div className="appointment-contact"><span>Need help booking?</span><a href="tel:+211927676766">Call +211 927 676 766</a><a href="mailto:info@lawfirm.ss">Email the office</a></div></div></section></main>;
}
