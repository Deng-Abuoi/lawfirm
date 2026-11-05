import Link from 'next/link';

export default function NotFound() {
  return <main id="main-content"><section className="page-hero container not-found"><p className="eyebrow"><span/> Page not found</p><h1>That page has<br/><em>moved on.</em></h1><p className="hero-intro">The page you are looking for is not available. Return home or contact the firm to find the right next step.</p><div className="hero-actions"><Link className="button button-dark" href="/">Return home <span>↗</span></Link><Link className="text-link" href="/contact">Contact the firm</Link></div></section></main>;
}
