# YOSA one-page website (Next.js)

## Run
```
npm install
cp .env.example .env.local   # then fill in values
npm run dev                  # http://localhost:3000
npm run build && npm start
```

## Editing
- **Text, figures, links, stories, testimonials, resources:** `app/content.ts` (one file). Hero, About, Vision and Partnership copy: `app/page.tsx`.
- **Colours and type:** CSS variables at top of `app/globals.css` (warm paper `#fbfaf6`, ink `#12120f`, hairline `#e4e0d6`, accent `#d14a20`). Self-hosted variable fonts: `@fontsource-variable/inter` (body/display) and `@fontsource-variable/newsreader` (italic pull-quotes).
- **Logo:** exact vector logo extracted from the January 2023 brand guideline (`public/brand/yosa-wordmark.svg` in header, `public/brand/yosa-logo-white.svg` in footer, mark in `yosa-mark.svg`). Swap in YOSA's original logo files when supplied.
- **Photographs:** `public/photos/` holds seven named section photographs and `public/photos/library/` holds all 35 usable photographs from the YOSA Drive archive (1200 px max, progressive JPEG, 6.4 MB total). `photos`, `photoAlt`, and `gallery` in `app/content.ts` map each slot and the 35-image gallery. Source originals stay in the team's Drive folder; the local `google_drive/` copy is git-ignored.
- **Partner PDF:** drop `YOSA-Partner-Brief.pdf` into `public/`; the footer download link appears automatically.
- **Content source:** figures, programme lists, pillars, quotes and contact details come from youthopportunitiessouthafrica.org (Oct 2026) and the YOSA management review of 20 November 2026.
- **Enquiry form (Resend):** set `RESEND_API_KEY`, `RESEND_TO` and `RESEND_FROM` (verify a YOSA domain in Resend first; the default sender only works for testing). Emails arrive with the visitor as reply-to. Without the keys the form shows an error and the email fallback.
- **Donate button:** set `NEXT_PUBLIC_DONATE_URL` to the approved donation route; until then it scrolls to the contact form.
- **Draft banner** shows in development only.

## Structure of the page
Header → hero (full-bleed photograph + oversized headline) → reach metrics row → 01 About → 02 Programmes (hairline list items, non-clickable) → 03 Approach (bullseye: young people, families, schools, community) → 04 Delivery → 05 Impact → 06 In their words (testimonials) → 07 Photographs (35-image masonry gallery) → 08 Resources → 09 Support → 10 Contact (dark ink section) → footer.

## Design conventions (please keep)
- **Minimal editorial layout:** Hairline rules (`1px solid var(--line)`), uppercase `.meta` micro-labels, and generous whitespace instead of card-heavy or pill-heavy chrome. Programme components are plain hairline-divided list items so they never look clickable.
- **Testimonials:** 35–60 words each. Add a portrait as a square image of 800 × 800 or more in `public/photos/`, then set `photo` in `app/content.ts`. Without a photo the card shows an initials monogram. A card marked `pending: true` shows a reserved space.
- **Resources:** one section, three doors (reports, newsletters, gallery). Label a document by type and period — “Annual Report 2025 (PDF)”, never “Read our report”. Update `resources.groups` in `app/content.ts`.

## Needed from YOSA before launch
Two contributor testimonials (quote, name, role, portrait, permission); confirmed archive contents and hosting route for reports and newsletters; single programme naming framework; confirmed reach and impact definitions (8 vs 10 schools); founding date (2015/2016); founder name spelling; logo files; correct bone colour (guide repeats pink's RGB); approved email, enquiry recipient and donation routes per country; named approver; approved impact report link.

## Pre-launch checks
Phone and desktop; keyboard navigation (skip link, focus rings built in); contrast (orange is used for large/bold text and buttons with purple text; link orange on light backgrounds is darkened); alt text on photos; every link destination; form delivery to YOSA inbox; search metadata in `layout.tsx`; PDF download; any analytics must follow YOSA's privacy approach (none included).

## Photography consent
The photographs are supplied by YOSA and show staff and children in the programme. Before launch, confirm written guardian consent for every identifiable learner under 18, and consent from identifiable staff, for website and social use. Keep a register (file name → who is in it → consent date → permitted uses) so future updates stay simple.

## Review documents
- `docs/YOSA-website-review-2026-11-20.md` — response to the management review: header photo guidance, testimonial photo and overlay recommendation, reports/newsletter information architecture, and the photo selections.

## Not included yet
Two-page partner PDF, style guide, social templates, wireframe/mock-up sign-off, hosting/domain recommendation.

## Conflicting figures to confirm
The live YOSA site reports teen pregnancies 33 (2018) to 1 (2025) and substance abuse 43 (2018) to 3 (2025). The earlier brief said 100 to 3 and 101 to 13 (five focus schools, 2022 to 2025). The site now uses the published website figures; YOSA must confirm which are correct and their definitions.
