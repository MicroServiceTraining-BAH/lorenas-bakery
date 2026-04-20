# Email Capture Popup — TODO

## Goal
Custom-designed email capture popup that feeds into a Mailchimp audience list.
Client will use Mailchimp to send promotional campaigns to collected emails.

---

## What to get from the client before starting
- [ ] Mailchimp account created at mailchimp.com
- [ ] API Key — Account → Extras → API Keys → Create a Key
- [ ] Audience ID — Audience → Audience Settings → Audience ID
- [ ] Server prefix — visible in Mailchimp URL when logged in (e.g. `us21`)

## Env vars to add to Vercel
```
MAILCHIMP_API_KEY=
MAILCHIMP_AUDIENCE_ID=
MAILCHIMP_API_SERVER=
```

---

## Files to create
- `components/EmailCapturePopup.tsx` — custom modal styled to match the site
- `app/api/subscribe/route.ts` — API route that calls Mailchimp to add the email

## Files to modify
- `app/layout.tsx` or `app/(public)/page.tsx` — mount the popup with a trigger

---

## Implementation notes
- Trigger: show popup after 5 seconds on homepage, once per session (localStorage flag)
- Design: use site design system — rose-blush, teal-sage, serif headings, rounded-3xl cards
- Copy: something like "Get updates on new items and weekend specials"
- States: idle → loading → success → error
- On success: thank the user and close after 2 seconds
- No Mailchimp branding visible to the user
- Bilingual: add EN/ES strings to `lib/translations.ts`
