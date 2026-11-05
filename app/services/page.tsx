import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal Services in South Sudan',
  description: 'Explore PDG & Co. Advocates services in oil and gas, commercial contracts, disputes, property, family matters and legal research.',
  alternates: { canonical: '/services' },
};
const list=[['01 / SPECIALTY','Oil & Gas','Licences, concessions, production sharing agreements, joint ventures, regulatory compliance, disputes, land access and local content.'],['02','Commercial & Contracts','Business agreements, contract review, negotiation support and commercial advice aligned with your operations.'],['03','Dispute Resolution','Practical strategy and representation in litigation, arbitration and mediation.'],['04','Property & Real Estate','Support with transactions, title verification, development and property disputes.'],['05','Individuals & Families','Compassionate advice for family matters, immigration and criminal defence.'],['06','Research & Advisory','Careful legal research and clear written advice to support decisions and submissions.']];
export default function Services(){return <main id="main-content"><section className="page-hero container"><p className="eyebrow"><span/> Legal services</p><h1>Focused advice for<br/><em>what comes next.</em></h1><p className="hero-intro">The firm supports complex business matters and important personal decisions with clear, considered legal guidance.</p></section><section className="band-ink"><div className="container practice-list">{list.map(([n,t,d])=><article key={n}><span>{n}</span><div><h2>{t}</h2><p>{d}</p></div></article>)}</div></section><section className="container cta-strip"><div><p className="section-kicker">Have a matter in mind?</p><h2>Let’s discuss the right next step.</h2></div><Link className="button button-dark" href="/appointment">Book an appointment ↗</Link></section></main>}
