# YOSA one-page website (Next.js)

## Run
```
npm install
cp .env.example .env.local   # then fill in values
npm run dev                  # http://localhost:3000
npm run build && npm start
```

## Editing
- **Text, figures, links, stories:** `app/content.ts` (one file). Hero, About, Vision and Partnership copy: `app/page.tsx`.
- **Colours and type:** CSS variables at top of `app/globals.css` (purple #332945, orange #F15822, pink #EFBDBF, bone approx #E0D4C4). Font: Roboto.
- **Logo:** exact vector logo extracted from the January 2023 brand guideline (`public/brand/yosa-logo*.svg`, mark in `yosa-mark.svg`, also the favicon). Swap in YOSA's original logo files when supplied.
- **Photographs:** the six photos in `public/brand/` come from the brand guideline (hero, three programme cards, vision). They are brand imagery, not confirmed photos of YOSA participants: do not caption them as such, and confirm YOSA holds the licence to use them online. Replace with consented YOSA photos as they arrive.
- **Partner PDF:** drop `YOSA-Partner-Brief.pdf` into `public/`; the footer download link appears automatically.
- **Content source:** figures, programme lists, pillars, quotes and contact details come from youthopportunitiessouthafrica.org (Oct 2026). Edit them in `app/content.ts`.
- **Enquiry form (Resend):** set `RESEND_API_KEY`, `RESEND_TO` and `RESEND_FROM` (verify a YOSA domain in Resend first; the default sender only works for testing). Emails arrive with the visitor as reply-to. Without the keys the form shows an error and the email fallback.
- **Donate button:** set `NEXT_PUBLIC_DONATE_URL` to the approved donation route; until then it scrolls to the contact form.
- **Draft banner** shows in development only.

## Needed from YOSA before launch
Single programme naming framework; confirmed reach and impact definitions (8 vs 10 schools); founding date (2015/2016); founder name spelling; logo files; correct bone colour (guide repeats pink's RGB); approved email, enquiry recipient and donation routes per country; named approver; approved impact report link.

## Pre-launch checks
Phone and desktop; keyboard navigation (skip link, focus rings built in); contrast (orange is used for large/bold text and buttons with purple text; link orange on light backgrounds is darkened); alt text on photos; every link destination; form delivery to YOSA inbox; search metadata in `layout.tsx`; PDF download; any analytics must follow YOSA's privacy approach (none included).

## Not included yet
Two-page partner PDF, style guide, social templates, wireframe/mock-up sign-off, hosting/domain recommendation.

## Conflicting figures to confirm
The live YOSA site reports teen pregnancies 33 (2018) to 1 (2025) and substance abuse 43 (2018) to 3 (2025). The earlier brief said 100 to 3 and 101 to 13 (five focus schools, 2022 to 2025). The site now uses the published website figures; YOSA must confirm which are correct and their definitions.
