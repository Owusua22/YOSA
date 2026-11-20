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
- **Colours and type:** CSS variables at top of `app/globals.css` (purple #1b1b1f, orange #F15822, pink #f4f4f5, bone #f4f4f5). Font: Roboto.
- **Logo:** exact vector logo extracted from the January 2023 brand guideline (`public/brand/yosa-logo*.svg`, mark in `yosa-mark.svg`, also the favicon). Swap in YOSA's original logo files when supplied.
- **Photographs:** `public/photos/` holds seven optimised photographs supplied by the YOSA team (Drive archive, November 2026). `photos` and `photoAlt` in `app/content.ts` map each slot to a file. To swap a picture, overwrite the file with the same name — no code change needed. Keep the master at 2400 px wide or more, 16:9 for the header, and update the matching alt text. Source originals stay in the team's Drive folder; the local `google_drive/` copy is git-ignored.
- **Partner PDF:** drop `YOSA-Partner-Brief.pdf` into `public/`; the footer download link appears automatically.
- **Content source:** figures, programme lists, pillars, quotes and contact details come from youthopportunitiessouthafrica.org (Oct 2026) and the YOSA management review of 20 November 2026.
- **Enquiry form (Resend):** set `RESEND_API_KEY`, `RESEND_TO` and `RESEND_FROM` (verify a YOSA domain in Resend first; the default sender only works for testing). Emails arrive with the visitor as reply-to. Without the keys the form shows an error and the email fallback.
- **Donate button:** set `NEXT_PUBLIC_DONATE_URL` to the approved donation route; until then it scrolls to the contact form.
- **Draft banner** shows in development only.

## Structure of the page
Header → reach band → intro (three photographs) → about → **What we do** (programme components shown as tags) → **How we create community transformation** (bullseye: young people, families, schools, community) → model in action → impact → **In their words** (testimonials) → **Reports, newsletters and gallery** → support → contact → footer.

## Design conventions (please keep)
- **Interactive = pill, non-interactive = tag.** Buttons and tabs are rounded pills that lift on hover. Programme components and factors use `.labels`: flat, square-cornered, with an orange left spine and no hover state. Do not restyle one as the other; the distinction is what tells visitors what they can click.
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
