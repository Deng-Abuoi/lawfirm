const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

if (process.env.NODE_ENV === 'production' && !configuredSiteUrl) {
  throw new Error('Set NEXT_PUBLIC_SITE_URL to the public HTTPS site origin before building for production.');
}

export const siteUrl = new URL(configuredSiteUrl ?? 'http://localhost:3000').origin;

const parsedSiteUrl = new URL(siteUrl);
if (process.env.NODE_ENV === 'production' && (parsedSiteUrl.protocol !== 'https:' || parsedSiteUrl.hostname.endsWith('.example') || parsedSiteUrl.hostname.endsWith('.invalid'))) {
  throw new Error('NEXT_PUBLIC_SITE_URL must be the real public HTTPS origin in production; replace the example placeholder.');
}

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}
