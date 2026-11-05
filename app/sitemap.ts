import type { MetadataRoute } from 'next';
import { absoluteUrl } from '../lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/services', '/appointment', '/contact', '/privacy', '/terms'];
  return routes.map((route) => ({
    url: absoluteUrl(route),
    changeFrequency: route === '' ? 'monthly' : 'yearly',
    priority: route === '' ? 1 : 0.7,
  }));
}
