import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader, SiteFooter } from './ui';
import { siteUrl } from '../lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'PDG & Co. Advocates', template: '%s | PDG & Co. Advocates' },
  description: 'Steady legal counsel for business, energy and people in South Sudan.',
  keywords: ['South Sudan lawyers', 'Juba advocates', 'oil and gas law', 'commercial law', 'dispute resolution'],
  openGraph: {
    type: 'website',
    title: 'PDG & Co. Advocates',
    description: 'Steady legal counsel for business, energy and people in South Sudan.',
    images: [{ url: '/pdgimage.jpg', width: 1200, height: 900, alt: 'PDG & Co. Advocates' }],
  },
  twitter: { card: 'summary_large_image', images: ['/pdgimage.jpg'] },
  icons: { icon: '/pdglogo.png' },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'PDG & Co. Advocates',
  url: siteUrl,
  description: 'Legal counsel for business, energy and people in South Sudan.',
  areaServed: { '@type': 'Country', name: 'South Sudan' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader />{children}<SiteFooter /></body></html>;
}
