# PDG & Co. Advocates website

Next.js App Router website for the firm. Appointment availability, calendar sync and booking emails are handled by Cal.com. Contact enquiries use Resend when configured; if the website cannot deliver an enquiry, the form offers a pre-filled email link as a fallback.

## Local setup

1. Install Node.js 20.9 or newer.
2. Copy `.env.example` to `.env.local`.
3. Create a single-attorney consultation event in Cal.com, connect the attorney's calendar, and choose the consultation length, availability, buffer and notice period.
4. Set `NEXT_PUBLIC_CALCOM_LINK` to the event path, such as `attorney-name/consultation` (without the `https://cal.com/` prefix). The appointment page also displays a direct link to the Cal.com booking page.
5. For server-side enquiry delivery, set `RESEND_API_KEY`, `CONTACT_EMAIL` and a verified `CONTACT_FROM_EMAIL`. If delivery is unavailable, visitors can open their own email app with their enquiry pre-filled.
6. Set `NEXT_PUBLIC_SITE_URL` to the exact public HTTPS site origin before building for production. Local development defaults to `http://localhost:3000`.
7. Run `npm install` and `npm run dev`, then open `http://localhost:3000`.

## Before publishing

- Set and verify `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_CALCOM_LINK`, `RESEND_API_KEY`, `CONTACT_EMAIL` and `CONTACT_FROM_EMAIL` in the hosting provider.
- Confirm the public email, phone number, office location, consultation process, service list and any professional credentials shown on the site.
- Have the Privacy Policy and Website Terms reviewed and approved by the firm for its actual data practices and applicable requirements.
- The contact endpoint includes an in-process rate limit. Configure hosting or provider-level rate limiting and bot protection for production traffic; the in-process counter is not shared across serverless instances.
- Check the Cal.com embed and its direct-link fallback in the production deployment.

The production build intentionally fails when `NEXT_PUBLIC_SITE_URL` is missing or not HTTPS, to avoid publishing localhost canonical URLs, sitemap links or social metadata.
# lawfirm
