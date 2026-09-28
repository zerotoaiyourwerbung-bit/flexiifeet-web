# The FlexiiFeet website

## Lead form setup (required in production)

Every enquiry form posts to `/api/lead` (`app/api/lead/route.ts`), which forwards the lead to the team.
Set at least one of these environment variables in your hosting (e.g. Vercel → Project → Settings → Environment Variables):

| Variable | What it does |
| --- | --- |
| `LEAD_WEBHOOK_URL` | Each lead is POSTed here as JSON. Use a Google Apps Script web app (to append to a Google Sheet), Zapier, Make, Pabbly or your CRM. |
| `RESEND_API_KEY` + `LEAD_EMAIL_TO` | Each lead is emailed via [Resend](https://resend.com). `LEAD_EMAIL_TO` can be a comma-separated list. Optional `LEAD_EMAIL_FROM` (a verified sender, e.g. `FlexiiFeet <leads@theflexiifeet.com>`). |

Without either, the form shows an error in production (so no lead is silently lost); in `next dev` leads are only logged to the console.

Each lead includes the page it came from and any `utm_*`, `gclid` and `fbclid` URL parameters, so ad campaigns can be tracked.
If Google Ads/GA4 (`gtag`) or the Meta Pixel (`fbq`) is installed, a successful submit also fires `generate_lead` / `Lead` conversion events.

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
