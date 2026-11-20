# YOSA website — review response and design recommendations

**Prepared for:** YOSA management (Astonishment Mapurisa, YOSA team)
**Prepared by:** Sarah, website design
**Date:** 20 November 2026
**Covers:** the six refinements in the YOSA review, the supplied photo archive, and what is still needed before launch

---

## 1. What changed in this revision

| Review point | What was done |
| --- | --- |
| 1. Header photograph | Replaced the brand-guideline placeholder with a real YOSA programme photograph from the archive (learners and facilitators on the netball court at a partner school). Guidance for selecting the final hero image is in §2. |
| 2. Life Skills Development | “Psychosocial and reproductive health education” replaced with three items: **Psychosocial support**, **Individual and group counselling**, **Sexual and reproductive health education**. Programme components now use a flat, square-cornered **tag** treatment with an orange spine; clickable items remain **pills** (orange fill or purple outline) with hover lift. |
| 3. Community transformation diagram | “Families” and “Schools” swapped. The bullseye now reads, from the centre outwards: Young people → **Families** → **Schools** → Community. |
| 4. Testimonials | New “In their words” section designed for four voices, with a portrait slot and a monogram fallback. The school principal’s and founder’s quotes are in place; two contributor slots are reserved and clearly marked as awaiting approval. §5 covers the photo guidance you asked for. |
| 5. Reports and newsletters | The three loose links are consolidated into a single **Reports, newsletters and gallery** section with one clear label per destination, plus a “what is inside” list. The duplicate “Read our report” / “Reports” pair is gone. §6 sets out the full archive structure. |
| Photo archive | 34 photographs reviewed; 7 selected and optimised for the site. Unused frames are noted in §7 so nothing is lost. |

Everything is editable without a developer: wording, figures and quotation text in `app/content.ts`; photographs by replacing a file in `public/photos/`.

---

## 2. Header photograph — recommendation

The header is the hardest working image on the site: it carries the headline, sets tone in under two seconds, and has to survive being cropped differently on a phone and a widescreen monitor.

### Composition

- **Subject to the right, space to the left.** The headline sits on the left third. Keep that area calm — sky, a wall, open ground — so the white type stays legible without a heavy scrim.
- **One clear focal point.** Two to eight people, faces visible and unobstructed, occupying the right half of the frame. Group photographs where faces shrink to pinheads lose all warmth at desktop width.
- **Eye level, or slightly below.** A photographer standing with the group reads as respectful and hopeful; shooting down at children reads as charity.
- **Horizon low in the frame**, so torsos and faces sit in the upper two-thirds and the crop can flex vertically.
- **YOSA red in frame.** The red tracksuits and shirts are now a real brand signal and tie the header to the logo.
- **Left-side brightness check:** squint at the image or shrink it to 120 px tall. If the left third is visually busy, the headline will fight it.

### Style

Authentic programme moments — a warm exchange between a facilitator and learners, a child mid-laugh, learners walking into school, a mentor leaning in to help. Candid and unposed beats neat rows. Natural daylight; avoid harsh midday backlight that turns faces into silhouettes, heavy filters, or anything that reads as stock. Avoid handshake-with-cheque photographs and images with printed banners or signage competing for attention.

### Dimensions and file specification

| Use | Master | Export |
| --- | --- | --- |
| Header (all screens) | **3200 × 1800 px**, 16:9 landscape | 2400 × 1350 px, sRGB JPEG, quality 80–85, **under 400 KB** |
| Safe area | Keep faces inside the central 55% of the width | — |
| Phone crop | The layout shifts to a narrow vertical band on screens under 760 px | Faces must survive a 4:5 crop around the centre-right |
| Minimum | 1600 px wide | Below this the header looks soft on large screens |

Shoot or supply **three to five candidate frames** per placement, so the team can choose rather than re-shoot. If several images are being considered, keep them from the same session and light so the site stays coherent.

### A suggestion for the final hero

The current header (learners and facilitators on the netball court, supplied as `IMG-20260731-WA0076.jpg`) is strong on authenticity, place and colour, and its sky gives the headline room. Its one weakness is distance: the faces are smaller than ideal. A future hero that keeps this composition but moves the camera two to three metres closer — facilitator and learners at the centre-right, school building and sky filling the left third — would be the ideal upgrade.

**Consent:** for any photograph of a learner under 18, hold a signed guardian consent for online and social use, plus consent from staff who are identifiable. A simple register (file name → who is in it → consent date → where it may be used) will save time at every future update.

---

## 3. Programme labels versus buttons

Visitors should never have to click something to discover it is not clickable. The site now separates the two by **shape, colour and behaviour**:

- **Programme components** — flat rectangles, square corners, 4 px orange spine on the left, neutral background, no hover effect, default cursor. They read as labels on a folder, not as controls.
- **Interactive elements** — pills: solid orange for the primary action (Donate, Partner with YOSA), purple outline for secondary (Reports and publications), and tab buttons for switching pillars. All lift slightly on hover and show a focus ring for keyboard users.
- The “Recognised by the Department of Education” badge was also moved out of pill styling so it cannot be mistaken for a button.

A one-line legend under the programme list (“Programme components are listed as tags”) makes the convention explicit the first time a visitor meets it.

---

## 4. Community transformation diagram

The bullseye now runs, from the centre outwards:

1. **Young people** (centre)
2. **Families**
3. **Schools**
4. **Community**

The rings, colours and labels are unchanged otherwise; the screen-reader description has been updated to match.

---

## 5. Testimonials — design recommendation

### Layout

Four cards in a two-column grid on a near-black band, so quotes carry weight without shouting. Each card holds a quotation mark, the quote, then the attribution: a **portrait** (or initials monogram), the name, and the role — for example “School Principal, YOSA partner school, Soweto”.

Long quotes shorten the grid’s rhythm, so **35–60 words** per testimonial is the sweet spot. Anything longer should be trimmed to the strongest two sentences.

### Do photographs work alongside the text?

Yes — portraits make a quote feel accountable rather than anonymous, and they are especially valuable on a site where visitors are deciding whether to trust YOSA with funding. They work best as **small, contained portraits next to the attribution**, not as background images.

Recommended photograph specification:

- **Square, 800 × 800 px minimum**, head-and-shoulders, face centred and filling roughly 60% of the frame.
- Eyes in the upper third; plain or softly blurred background; no sunglasses or hats that hide the face.
- Consistent lighting and treatment across the four contributors — mismatched snapshots look accidental.
- Displayed as a circle at 53 px, so detail beyond the face is invisible; crop accordingly.
- If the contributor prefers not to be photographed, the monogram fallback (orange circle, initials) keeps the layout intact without weakening it.

### Would an overlay stay clear and readable?

Only with care. Text laid directly over a photograph needs a **65–75% dark scrim** behind it, the contributor’s face kept out of the text zone, and body text at 18 px or larger. That treatment belongs to a full-width “hero testimonial” — one quote, one face, a large image — not to a four-card grid, where the overlay would have to be repeated four times and would quickly feel heavy.

**Recommendation:** portraits beside the attribution on solid cards (as built). If YOSA later wants a single flagship story, we can add one full-width testimonial above the grid with a treated photograph and a measured contrast check.

### What we need from Astonishment

For each of the two new testimonials:

1. Name, role and relationship to YOSA (parent, learner, alumnus, educator, partner).
2. The quote, 35–60 words, in the contributor’s own words, with written permission to publish.
3. A portrait per the specification above (or confirmation that a monogram is preferred).

---

## 6. Reports and newsletters — recommended structure

The problem with the current site is not the number of links but that two of them point at the same place under different names (“Read our report”, “Reports”), while a third (“Monthly newsletter”) sits beside them as an equal. Visitors cannot tell what they will get.

### What is built now

One **Reports, newsletters and gallery** section, with:

- a short explanation of what each type of publication is for;
- a “what is inside” list so the archive is legible before anyone clicks;
- **three doors, one label each:** *Reports and publications*, *Monthly newsletters*, *Photo gallery*;
- a note explaining that the full archive is being consolidated — to be removed once it is live.

Links to the existing YOSA pages are in place, so nothing breaks while the archive is prepared.

### Recommended archive structure

Organise by **publication type first, year second** — that is how funders, journalists and partner schools actually search.

```
YOSA website resources/
├── 01 Annual reports/
│   ├── 2026/
│   ├── 2025/
│   └── 2024/
├── 02 Programme and funder reports/
│   ├── 2026 Term 1/
│   └── 2025/
├── 03 Newsletters/
│   ├── 2026/
│   └── 2025/
├── 04 Photo gallery/
│   ├── 2026/
│   └── 2025/
└── 05 Brand and partner pack/
    ├── YOSA logo files
    └── YOSA partner brief (PDF)
```

### Label and file-naming conventions

- **Labels carry three facts:** type, period and format — “Annual Report 2025 (PDF, 3.4 MB)”, “Newsletter — November 2026”, “Programme Report — Term 1 2026 (PDF)”.
- **File names** are lowercase, hyphenated and dated: `YOSA-Annual-Report-2025.pdf`, `YOSA-Newsletter-2026-11.pdf`, `YOSA-Programme-Report-2026-Term1.pdf`.
- **Newest first**, and show the year even when it feels obvious.
- **Never** label a link “Read our report” or “Reports” on its own; always name the document.
- If there are more than about eight documents in a group, add a year filter rather than a long scroll.

### Hosting

Two viable routes:

1. **On the website (recommended).** Upload the PDFs to `/public/reports/` so links never break, files load quickly and are indexed by search engines. Each document gets its own labelled link, and the page becomes the single permanent address for YOSA’s publications.
2. **Google Drive (interim).** Keep the folder structure above, share the top folder as **view-only, anyone with the link**, and paste direct links to files rather than folders — visitors should never meet a Google sign-in screen. Drive links can be swapped for hosted files later without changing the page layout.

Whichever route is chosen, the site should mention the two or three headline documents by name and keep the rest in the archive, so the page reads as a library rather than a list.

### What we need to finish this section

- The confirmed contents of the archive, per file, with permission to publish each one.
- Publication dates and, where relevant, the reporting period each document covers.
- Confirmation of whether PDFs may be hosted on the site or should stay in Drive.
- Note when a document is superseded (for example a corrected annual report), and whether the earlier version should stay online.

---

## 7. The photo archive

34 photographs were reviewed. Seven are now on the site:

| Site placement | Source file | What it shows |
| --- | --- | --- |
| Header | `IMG-20260731-WA0076.jpg` | Learners and facilitators in YOSA red on the netball court, partner school |
| “What we do” — learning | `IMG_1611.jpeg` | Learners in school uniform with a facilitator in the school courtyard |
| “What we do” — life skills | `IMG_1405.jpeg` | Teenagers and staff laughing together outdoors |
| “What we do” — community | `IMG_20260715_123940_Original.jpg` | Staff member and children holding food parcels |
| About / exposure visit | `20e22e06-9c7a-4605-8766-c46042fbf9c7.JPG` | Learners in YOSA red outside a glass office building |
| Impact | `IMG_20260601_113738_Original.jpg` | Young learners with a smiling YOSA teacher |
| Support section | `IMG_1593.jpeg` | Seven members of the YOSA team |

**Strong frames held in reserve** (good enough to swap in at any time): `IMG_1384`, `IMG_1388`, `IMG_1390`, `IMG_1392` (graduation and group portraits), `IMG_20260601_113743`, `IMG_1703`, and the wider courtyard frames `IMG_1586`, `IMG_1590`.

**Not used:** the two Canva “photo collage” PNG wallpapers, and duplicate near-identical frames from each burst.

Several frames were shot in portrait mode with a heavy vignette. Where used, they have been cropped to the centre so the dark corners do not print against the page, and no image has been retouched beyond crop, resize and compression.

A practical suggestion for future photography: for every event, capture one **wide establishing frame**, one **medium group frame with faces visible**, and two or three **candid details** (hands, books, a laugh). That mix gives the site variety, and it means a future hero never has to be chosen from a set of posed rows.

---

## 8. Still open before launch

1. Two contributor testimonials: quote, name, role, portrait, written permission.
2. Confirmed archive contents and hosting route for reports and newsletters.
3. Final figures and definitions: reach (10 schools), teen pregnancy and substance-use figures and their reporting years.
4. Approved donation route and enquiry inbox; email sending is ready once the Resend keys are set.
5. Final sign-off on wording, plus a named approver for future edits.

None of these block review of the design: the page is complete and the placeholders are clearly marked as awaiting approval.
