import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About the Firm',
  description: 'Meet PDG & Co. Advocates, founded by Paul Dhel Gum to provide practical, ethical legal support in South Sudan.',
  alternates: { canonical: '/about' },
};

export default function About() {
  return (
    <main id="main-content">
      <section className="container founder">
        <div className="founder-copy">
          <p className="section-kicker">Founder &amp; Managing Director</p>
          <h1>Paul Dhel Gum</h1>
          <p className="founder-credentials">Advocate of the High Court of South Sudan · LL.B., University of Nairobi · LL.M., University of Juba</p>
          <p>Paul leads PDG &amp; Co. Advocates. His practice focuses on oil and gas, commercial agreements, regulation and disputes. The firm aims to provide careful analysis, clear communication and personal attention at each stage.</p>
          <p>For enquiries about the firm or a legal matter, please <a className="text-link" href="/contact">contact the firm</a>.</p>
        </div>
        <div className="founder-image-wrap">
          <Image src="/founderimage.jpg" alt="Paul Dhel Gum, founder and managing director of PDG &amp; Co. Advocates" fill sizes="(max-width: 760px) 100vw, 50vw" className="founder-image" />
        </div>
      </section>
      <section className="page-hero container">
        <p className="eyebrow"><span /> About the firm · Juba, South Sudan</p>
        <h2>Principled counsel.<br /><em>Personal commitment.</em></h2>
        <p className="hero-intro">Founded by Paul Dhel Gum, PDG &amp; Co. Advocates serves people, businesses and institutions with practical, ethical legal support.</p>
      </section>
      <section className="statement band-light">
        <div className="container statement-grid">
          <p className="section-kicker">Our purpose</p>
          <div>
            <h2>Make the law work for the people and organisations <em>we serve.</em></h2>
            <p>We bring careful legal analysis, a local understanding of South Sudan and personal attention to every matter.</p>
          </div>
        </div>
      </section>
      <section className="band-ink about-pillars">
        <div className="container">
          <div className="section-heading section-heading-light">
            <div>
              <p className="section-kicker">What clients can expect</p>
              <h2>Thoughtful work.<br /><em>Plain speaking.</em></h2>
            </div>
            <p>Every matter is different. Our role is to make the choices, risks and next steps easier to understand.</p>
          </div>
          <div className="pillar-grid">
            <article><span>01</span><h3>Local understanding</h3><p>Advice grounded in the South Sudanese context and the realities of doing business here.</p></article>
            <article><span>02</span><h3>Direct communication</h3><p>Clear explanations, agreed expectations and updates that help you make decisions.</p></article>
            <article><span>03</span><h3>Personal attention</h3><p>A focused working relationship with clear responsibility for moving your matter forward.</p></article>
          </div>
        </div>
      </section>
    </main>
  );
}
