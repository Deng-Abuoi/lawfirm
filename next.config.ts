import type { NextConfig } from 'next';
const isDevelopment = process.env.NODE_ENV !== 'production';
const scriptSources = [
  "'self'",
  "'unsafe-inline'",
  ...(isDevelopment ? ["'unsafe-eval'"] : []),
  'https://cal.com',
  'https://*.cal.com',
].join(' ');

const nextConfig: NextConfig = {
  devIndicators: false,
  poweredByHeader: false,
  async headers() {
    return [{
      source: '/(.*)',
      headers: [
        { key: 'Content-Security-Policy', value: `default-src 'self'; base-uri 'self'; frame-ancestors 'none'; form-action 'self' mailto:; img-src 'self' data: blob: https://cal.com https://*.cal.com; script-src ${scriptSources}; style-src 'self' 'unsafe-inline' https://cal.com https://*.cal.com; connect-src 'self' https://cal.com https://*.cal.com https://api.resend.com${isDevelopment ? ' ws://localhost:*' : ''}; frame-src https://cal.com https://*.cal.com; font-src 'self' data: https://cal.com https://*.cal.com; object-src 'none'` },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
      ],
    }];
  },
};
export default nextConfig;
