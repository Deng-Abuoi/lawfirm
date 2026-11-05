import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How PDG & Co. Advocates handles information submitted through this website.',
  alternates: { canonical: '/privacy' },
};

export default function Privacy() {
  return <main id="main-content"><section className="page-hero container legal-page">
    <p className="eyebrow"><span/> Legal information</p>
    <h1>Privacy<br/><em>policy.</em></h1>
    <p className="hero-intro">This policy describes the information handled when you visit this website, contact the firm or use the appointment service.</p>
    <div className="legal-copy">
      <h2>Information you provide</h2>
      <p>The contact form asks for your name, email address and a short message. The website does not provide an attachment field. Please do not send confidential documents, sensitive personal information or urgent deadlines through the form.</p>
      <p>If you book through the appointment service, Cal.com collects the information you enter there and sends booking confirmations. That booking is subject to Cal.com’s own privacy information as well as this policy.</p>
      <h2>How information is used</h2>
      <p>PDG &amp; Co. Advocates operates this website and uses an enquiry to read and respond to your message, decide how to direct your request and arrange a consultation if appropriate. Submitting an enquiry or booking an appointment does not mean the firm has agreed to act for you.</p>
      <h2>Service providers and website security</h2>
      <p>When enabled, the contact endpoint uses Resend to deliver enquiries to the firm. Cal.com provides appointment scheduling. These providers process information under their own terms and privacy practices. The website also applies a temporary rate limit to contact requests using the client address provided in request headers. The hosting provider may keep technical logs as part of operating and securing the site.</p>
      <h2>Cookies and similar technology</h2>
      <p>The site does not currently configure advertising or analytics tools. The hosting platform and external appointment service may use cookies or similar technology needed to provide and secure their services. You can manage cookies through your browser, though blocking them may affect external services.</p>
      <h2>Where information is processed</h2>
      <p>Resend, Cal.com and the website host operate their own systems and may process information in countries outside South Sudan. Their current privacy terms explain their handling and locations. Please use the contact form only for a brief initial enquiry.</p>
      <h2>Retention and choices</h2>
      <p>The firm retains enquiry and appointment information for as long as it is needed to respond, manage the request and meet applicable record-keeping obligations. You can ask about information you have submitted by contacting <a className="text-link" href="mailto:info@lawfirm.ss">info@lawfirm.ss</a>.</p>
      <p>You may also use that address to ask for access to, correction of or deletion of information you submitted, or to raise a privacy concern. The firm will respond subject to applicable law, professional duties and record-keeping requirements.</p>
      <h2>Changes and questions</h2>
      <p>This policy may be updated as the website or services change. For privacy questions, contact the firm using the email above.</p>
    </div>
  </section></main>;
}
