# Analytics — TODO

## Goal
Add Google Analytics 4 to track page views, traffic sources, and user behavior.
Client will log into Google Analytics to monitor site performance.

---

## What to get from the client before starting
- [ ] Google Analytics account created at analytics.google.com
- [ ] Create a new GA4 property for Lorena's Bakery
- [ ] Copy the Measurement ID (looks like `G-XXXXXXXXXX`)

## Env var to add to Vercel
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

---

## Files to create
- `components/GoogleAnalytics.tsx` — script component that loads GA4

## Files to modify
- `app/layout.tsx` — mount GoogleAnalytics component

---

## Implementation notes
- Use Next.js `<Script>` component with `strategy="afterInteractive"` so it doesn't block page load
- Gate on `NEXT_PUBLIC_GA_MEASUREMENT_ID` so it only runs in production
- No cookie banner needed if using GA4 in basic mode (no advertising features enabled)
- If client ever runs Google Ads, a cookie consent banner will be required at that point
