import type { Metadata } from 'next';
import Link from 'next/link';
import { ContactForm } from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact the Firm',
  description: 'Contact PDG & Co. Advocates in Juba to discuss a legal matter or find the right next step.',
  alternates: { canonical: '/contact' },
};

export default function Contact() {
  return <main id="main-content">
    <section className="page-hero container contact-hero"><p className="eyebrow"><span/> Contact the firm</p><h1>Start with a<br/><em>conversation.</em></h1><p className="hero-intro">You do not need to book an appointment to get in touch. Send a short enquiry, email us directly or call the office—we will help you understand the right next step.</p></section>
    <section className="band-sand contact-page"><div className="container contact-grid">
      <div className="contact-copy">
        <p className="section-kicker">Reach the office</p>
        <h2>Choose the way<br/><em>that suits you.</em></h2>
        <p className="contact-intro">A first message can be brief. Tell us what kind of help you are looking for and how we can reach you. Please do not send confidential documents until we have confirmed that the firm can act.</p>
        <div className="contact-details contact-channels">
          <a href="mailto:info@lawfirm.ss"><span>Prefer email?</span>info@lawfirm.ss <b>↗</b></a>
          <a href="tel:+211927676766"><span>Call the office</span>+211 927 676 766 <b>↗</b></a>
          <span><span>Office</span>Juba Town, South Sudan</span>
        </div>
        <div className="contact-booking-note">
          <p>Already know you would like to meet?</p>
          <Link className="text-link" href="/appointment">Book an appointment <span>↗</span></Link>
        </div>
      </div>
      <div className="contact-form-wrap">
        <div className="contact-form-heading"><p className="section-kicker">Send an enquiry</p><p>Share only what you are comfortable putting in an initial message.</p></div>
        <ContactForm/>
        <p className="form-note">We aim to respond during normal business hours. Sending an enquiry does not create a lawyer-client relationship.</p>
      </div>
    </div></section>
    <section className="contact-guidance band-light"><div className="container contact-guidance-grid"><div><p className="section-kicker">A useful first message</p><h2>Keep it<br/><em>simple.</em></h2></div><div className="contact-guidance-list"><p><b>01</b> The kind of matter you need help with</p><p><b>02</b> The location or people involved</p><p><b>03</b> What you would like to happen next</p></div></div></section>
  </main>;
}
