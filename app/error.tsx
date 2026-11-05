'use client';

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <main id="main-content"><section className="page-hero container"><p className="eyebrow"><span /> Something went wrong</p><h1>We could not load<br /><em>that page.</em></h1><p className="hero-intro">Please try again, or contact the firm directly if the problem continues.</p><button className="button button-dark" onClick={() => reset()}>Try again <span>↗</span></button></section></main>;
}
