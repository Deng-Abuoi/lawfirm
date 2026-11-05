import Image from 'next/image';
import Link from 'next/link';
import { ContactForm } from './contact/ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'South Sudan Lawyers for Business, Energy and People',
  description: 'PDG & Co. Advocates provides clear legal counsel in Juba and across South Sudan for business, energy, disputes and personal matters.',
  alternates: { canonical: '/' },
};

const practices = [
  ['01', 'Oil & Gas', 'Licensing, agreements and regulatory counsel.'],
  ['02', 'Commercial', 'Contracts and advice for business.'],
  ['03', 'Disputes', 'Litigation, mediation and arbitration.'],
  ['04', 'Property', 'Transactions, title and property matters.'],
];

export default function Home() {
  return <main id="main-content">
    <section className="home-hero container">
      <div className="hero-copy">
        <p className="eyebrow"><span /> Advocates &amp; legal consultants · Juba</p>
        <h1>Protecting your rights.<br /><em>Securing your future.</em></h1>
        <p className="hero-intro">Clear, steady legal counsel for businesses, institutions and individuals in South Sudan.</p>
        <div className="hero-actions"><Link className="button button-gold" href="/appointment">Book a consultation <span>↗</span></Link><Link className="text-link" href="/about">Meet the firm</Link></div>
      </div>
      <div className="hero-visual">
        <div className="hero-gold-disc" />
        <Image className="hero-attorney" src="/pdgt-image.png" alt="Paul Dhel Gum, founder and principal advocate" fill priority sizes="(max-width: 850px) 100vw, 560px" />
        <div className="hero-vertical-note">PAUL DHEL GUM&nbsp; · &nbsp;JUBA, SOUTH SUDAN</div>
        <div className="hero-photo-caption"><strong>Paul Dhel Gum</strong><span>Founder &amp; Managing Director</span></div>
      </div>
      <div className="hero-practices">{practices.map(([number, title, description]) => <Link className="hero-practice-card" href="/services" key={number}><span>{number}</span><h2>{title}</h2><p>{description}</p><b aria-hidden="true">↗</b></Link>)}</div>
    </section>

    <section className="statement band-light"><div className="container statement-grid"><p className="section-kicker">The firm</p><div><h2>Legal work should make the next step <em>clearer.</em></h2><p>We bring rigorous thinking and a human perspective to the decisions that matter. Our advice is direct, our process transparent and our commitment personal.</p></div></div></section>

    <section className="focus container"><div className="section-heading"><div><p className="section-kicker">Our focus</p><h2>Deep knowledge.<br /><em>Useful advice.</em></h2></div><p>Oil and gas is our specialty. Around it sits a focused range of services for companies, institutions and individuals navigating change.</p></div><div className="focus-card"><div className="focus-number">01</div><div className="focus-main"><p className="eyebrow">Specialist practice</p><h3>Oil &amp; Gas</h3><p>From first licence application to last decommissioning obligation, we advise on the legal side of upstream, midstream and service-sector work.</p><Link className="text-link" href="/services">Explore services <span>↗</span></Link></div><ul className="focus-list">{['Licences & concessions','Joint ventures & operating agreements','Regulatory compliance','Disputes & arbitration','Land, community & environment','Local content & procurement'].map(item => <li key={item}>{item}</li>)}</ul></div></section>

    <section className="services band-ink"><div className="container"><div className="section-heading section-heading-light"><div><p className="section-kicker">Beyond the specialty</p><h2>Support for the<br /><em>whole picture.</em></h2></div><p>When a matter crosses practice areas, you want one calm, capable point of view. The firm also provides legal research and written advisory support.</p></div><div className="service-grid">{[['02','Commercial & contracts','Clear agreements and sound negotiations.'],['03','Dispute resolution','Strategic support through litigation, arbitration and mediation.'],['04','Property & real estate','Advice on transactions, title and disputes.'],['05','Individuals & families','Practical, compassionate support for family, immigration and criminal matters.'],['06','Research & advisory','Legal research and clear written advice for decisions and submissions.']].map(([number, title, description]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>

    <section className="approach container"><div className="section-heading"><div><p className="section-kicker">How we work</p><h2>A better process<br /><em>from day one.</em></h2></div><p>We keep every stage understandable, from the first conversation to follow through.</p></div><div className="steps">{[['01','Listen first'],['02','Set the scope'],['03','Advise & act'],['04','Follow through']].map(([number, title]) => <div className="step" key={number}><span>{number}</span><div><h3>{title}</h3><p>Clear communication, agreed expectations and careful attention at each stage.</p></div></div>)}</div></section>

    <section className="contact band-sand" id="contact"><div className="container contact-grid"><div><p className="section-kicker">Start a conversation</p><h2>Tell us what<br /><em>matters.</em></h2><p className="contact-intro">Send a short note and we will get back to you. Please leave out confidential documents until we have agreed to act.</p><div className="contact-details"><a href="mailto:info@lawfirm.ss">info@lawfirm.ss ↗</a><a href="tel:+211927676766">+211 927 676 766 ↗</a><span>Juba Town, South Sudan</span></div></div><div><ContactForm/><p className="form-note">Please do not include confidential documents or sensitive case details. Sending an enquiry does not create a lawyer-client relationship.</p></div></div></section>
  </main>;
}
