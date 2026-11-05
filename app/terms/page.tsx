import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website Terms and Disclaimer',
  description: 'Terms for using the PDG & Co. Advocates website and important information about its legal content.',
  alternates: { canonical: '/terms' },
};

export default function Terms() {
  return <main id="main-content"><section className="page-hero container legal-page">
    <p className="eyebrow"><span/> Legal information</p>
    <h1>Website terms<br/><em>&amp; disclaimer.</em></h1>
    <p className="hero-intro">These terms explain the limits of the information on this website and what to expect when you contact the firm.</p>
    <div className="legal-copy">
      <h2>General information, not legal advice</h2>
      <p>Website content is general information only. It is not legal advice, is not a substitute for advice on your circumstances, and may not reflect current law or later changes. Do not rely on this content to make a legal decision without speaking to a qualified lawyer.</p>
      <h2>No lawyer-client relationship</h2>
      <p>Visiting the website, sending a message or booking a consultation does not create a lawyer-client relationship. The firm becomes responsible for a matter only after it completes any required checks and confirms in writing that it has agreed to act.</p>
      <h2>Messages and confidentiality</h2>
      <p>Do not send confidential, sensitive or time-critical information through the website or appointment service. An online enquiry may not be received or answered immediately. If a deadline is approaching, contact the office directly and seek independent advice.</p>
      <h2>External services and links</h2>
      <p>Appointment scheduling is provided by Cal.com, and enquiry delivery may use Resend. External services and links are operated by their respective providers, may have separate terms, and may not always be available. The firm does not control their content or availability.</p>
      <h2>Website content and availability</h2>
      <p>The firm may update or remove website content and may temporarily suspend access for maintenance or security. You may read and share links to this website for personal or business reference. Do not copy, alter or republish its content in a way that misrepresents the firm or suggests endorsement.</p>
      <h2>Contact</h2>
      <p>For questions about these terms or to discuss a matter, <a className="text-link" href="/contact">contact the firm</a>.</p>
    </div>
  </section></main>;
}
