// All editable wording, figures, links, photographs and quotes for the YOSA site.
// Copy reflects the YOSA managers' review of 20 November 2026 (Life Skills items,
// diagram order, testimonial plan, reports and newsletters). Figures come from YOSA's
// published website (youthopportunitiessouthafrica.org, Oct 2026).

export const site = {
  email: process.env.NEXT_PUBLIC_ENQUIRY_EMAIL ?? "info@youthopportunitiessouthafrica.org",
  phone: "063 071 2093",
  address: "Sekwati Primary School, 752 Metlatoe Street, Molapo, Soweto, 1818",
  reg: "2016/022961/08",
  donateUrl: process.env.NEXT_PUBLIC_DONATE_URL || "#get-in-touch", // set the approved donation route; until then Donate scrolls to the contact form
  pdf: "/YOSA-Partner-Brief.pdf",
  home: "https://youthopportunitiessouthafrica.org",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/youth-opportunities-south-africa-yosa" },
    { label: "Instagram", href: "https://www.instagram.com/youthopportunitiessouthafrica" },
    { label: "Facebook", href: "https://www.facebook.com/108075953885349" },
    { label: "YouTube", href: "https://www.youtube.com/@YouthOpportunitiesSouthA-gd4sf" },
  ],
  links: {
    reports: "https://youthopportunitiessouthafrica.org/reports",
    newsletters: "https://youthopportunitiessouthafrica.org/newsletters-%26-reports-1",
    gallery: "https://youthopportunitiessouthafrica.org/photo-gallery",
    board: "https://youthopportunitiessouthafrica.org/yosa-board-of-governors",
    privacy: "https://youthopportunitiessouthafrica.org/data-privacy",
  },
};

// Photographs supplied by the YOSA team (Drive archive, November 2026).
// The seven named files below are the section images; gallery items live in
// public/photos/library/ at 1200 px, optimised from the originals in Drive.
export const photos = {
  hero: "/photos/hero.jpg",
  careers: "/photos/careers-visit.jpg",
  impact: "/photos/impact.jpg",
  team: "/photos/team.jpg",
  learning: "/photos/programme-learning.jpg",
  lifeSkills: "/photos/programme-life-skills.jpg",
  community: "/photos/programme-community.jpg",
};

export const photoAlt = {
  hero: "YOSA learners and facilitators in red tracksuits gathered on the netball court at a partner school in Soweto",
  careers: "YOSA learners and staff in red shirts outside a glass office building",
  impact: "Young learners in uniform with a smiling YOSA teacher on a paved school walkway",
  team: "Members of the YOSA team standing together on a paved courtyard",
};

// Every photograph in the YOSA archive, ordered for a balanced gallery.
const g = (file: string, alt: string) => ({ src: `/photos/library/${file}.jpg`, alt });

export const gallery = {
  meta: "Archive · 2025–2026",
  title: "The programme in pictures",
  lead: "Every photograph YOSA shared with us — learners, facilitators, families and partners across the programme's schools in Soweto.",
  items: [
    { src: photos.hero, alt: photoAlt.hero },
    g("img-1405", "Teenagers and YOSA staff laughing together outdoors after a programme session"),
    g("img-1611", "Learners in school uniform gathered with a YOSA facilitator in a school courtyard"),
    { src: photos.community, alt: "A YOSA staff member with five children holding food parcels outside a school" },
    { src: photos.careers, alt: photoAlt.careers },
    g("img-1384", "Learners in red YOSA tracksuits and matric gowns with staff in a school yard"),
    g("img-1388", "A large group of learners and YOSA staff photographed in a school courtyard"),
    g("img-1390", "Learners and facilitators standing together on a paved school courtyard"),
    g("img-1392", "A wide group portrait of learners and YOSA staff at a partner school"),
    g("img-1405", "YOSA staff and learners in red and navy uniforms smiling for the camera"),
    g("img-1557", "Learners and staff seated together beside a YOSA banner outside a school building"),
    g("img-1561", "A seated group portrait with the YOSA banner at a partner school"),
    g("img-1563", "Staff and learners arranged in two rows beside a YOSA banner"),
    g("img-1573", "Six YOSA staff and partners standing on a paved walkway"),
    g("img-1586", "YOSA staff and partners photographed on a school courtyard"),
    g("img-1590", "Two YOSA staff members walking and talking across a paved courtyard"),
    { src: photos.team, alt: photoAlt.team },
    g("img-1595", "YOSA staff and partners in conversation outdoors"),
    g("img-1609", "A wide view of learners gathered with YOSA staff on a school field"),
    g("img-1613", "Learners in uniform and YOSA facilitators in a school courtyard"),
    g("img-1692", "Two learners in blazers with two YOSA staff members"),
    g("img-1693", "Learners in blazers and YOSA staff photographed together"),
    g("img-1694", "Three learners in school uniform with a YOSA staff member"),
    g("img-1699", "A line of learners in school uniform with YOSA staff behind them"),
    g("img-1701", "Learners in blazers standing with YOSA staff on a school field"),
    g("img-1703", "Learners and YOSA staff posed on a school field in winter light"),
    { src: photos.impact, alt: photoAlt.impact },
    g("img-20260601-113743-original", "Learners and a YOSA teacher on a paved school walkway"),
    g("img-20260701-wa0025", "Learners in red tracksuits and matric gowns with YOSA staff in a school yard"),
    g("img-20260701-wa0027", "A group portrait of YOSA learners and staff on a school yard"),
    g("img-20260701-wa0029", "Learners and facilitators smiling together after a ceremony"),
    g("img-20260701-wa0031", "YOSA learners in red uniforms standing with staff outdoors"),
    g("img-20260701-wa0033", "A wide group portrait of learners and staff on a paved school yard"),
    g("img-20260701-wa0035", "Learners in red tracksuits gathered with YOSA staff"),
    g("img-20260701-wa0037", "A group of YOSA learners and facilitators photographed together"),
    g("img-20260701-wa0039", "Learners and staff on the school yard at the end of a programme day"),
  ],
};

export const reach = {
  note: "YOSA states that it actively and directly supports over 7 000 people (children and their community) through:",
  items: [
    { n: 7000, suffix: "+", l: "people directly supported" },
    { n: 10, l: "Soweto junior and high schools" },
    { n: 150, l: "children in after-school and holiday care" },
    { n: 13, l: "child-headed households supported" },
    { n: 3, l: "digital labs in YOSA-supported schools" },
  ],
};

// Recorded outcomes across YOSA-supported high schools (YOSA impact page).
export const impact: { icon: string; label: string; note: string; from?: number; to?: number; fromYear?: number; toYear?: number; num?: number; suffix?: string; text?: string }[] = [
  { icon: "heart", label: "teenage pregnancies recorded", from: 33, to: 1, fromYear: 2018, toYear: 2025, note: "A sustained reduction across YOSA-supported high schools." },
  { icon: "shield", label: "learners found using or under the influence of substances at school", from: 43, to: 3, fromYear: 2018, toYear: 2025, note: "Distinct learners, tracked annually across YOSA-supported high schools." },
  { icon: "chat", label: "learners seeking counselling", text: "Declining", note: "The total across YOSA-supported schools has decreased substantially. This measures learners seeking support, not wellbeing on its own." },
  { icon: "cap", label: "university acceptances recorded", num: 160, suffix: "+", note: "Matric pass rates are improving across YOSA-supported schools, alongside learners completing qualifications and finding work." },
];
export const impactSource = "Source: YOSA impact page. Recorded outcomes in participating schools; they do not by themselves show that YOSA alone caused the change.";
export const measure = ["Baseline established with partner schools", "Outcomes monitored against agreed indicators", "Data reviewed and reported in cycles", "Evidence stored and available for funder review"];

// "What we do" — three programme areas. Items are components, not links.
export const pyd = [
  { key: "learning", label: "Learning support", icon: "book", items: ["Tutoring and curriculum coaching", "Digital training", "Spelling and writing support", "Subject choice and career guidance", "Merit and excellence recognition", "Counselling and group work"] },
  {
    key: "life",
    label: "Life skills development",
    icon: "users",
    items: [
      "Sports and recreation",
      "Leadership development",
      "Public speaking and creative arts",
      "Behavioural support",
      "Computer skills training",
      "Psychosocial support",
      "Individual and group counselling",
      "Sexual and reproductive health education",
      "Group engagement activities",
    ],
  },
  { key: "community", label: "Community enrichment", icon: "school", items: ["Parent training", "Educator training", "Youth work-readiness initiatives", "Support to distressed families", "Nutritional support programmes", "Community-based group work"] },
];
export const factors = ["Competence", "Confidence", "Character", "Connection", "Caring", "Contribution"];

export const pillars: { key: string; label: string; icon: string; title: string; intro: string; fns: [string, string][]; why: string }[] = [
  { key: "learning", label: "Learning Support", icon: "book", title: "Strengthening academic foundations within the school", intro: "Delivered directly within partner schools, reinforcing academic capability while building long-term learner resilience.",
    fns: [["Curriculum reinforcement", "Targeted support aligned to the school curriculum in core subjects."], ["Academic progression support", "Guidance that helps learners sustain performance across grades and transition points."], ["Learner engagement", "Structured engagement to build discipline, focus and study habits."], ["Educator collaboration", "Working alongside teachers to identify learners who need structured intervention."]],
    why: "Academic underperformance is rarely an isolated issue. Reinforcing core learning inside the school strengthens both learner competence and the school itself." },
  { key: "psychosocial", label: "Psychosocial Support", icon: "chat", title: "Addressing barriers to academic and personal development", intro: "In-school social work services embedded within partner schools, because trauma, behavioural challenges and substance exposure undermine learning.",
    fns: [["In-school social work", "Professional psychosocial support within the school environment."], ["Counselling and emotional support", "Structured engagement addressing trauma and personal vulnerability."], ["Substance abuse intervention", "Preventative and responsive strategies to reduce substance exposure and incidents."], ["Teen pregnancy prevention", "Holistic support that contributes to fewer teenage pregnancies."], ["Anti-bullying and behavioural programmes", "Behavioural reinforcement for safer learning environments."], ["Parent engagement", "Engaging families to strengthen stability beyond the classroom."]],
    why: "Psychosocial support is preventative, embedded and sustained, not only a crisis response." },
  { key: "digital", label: "Digital Innovation", icon: "monitor", title: "Digital labs and skills development", intro: "Supervised, school-based digital learning environments providing technology access, curriculum-aligned support and foundational digital skills.",
    fns: [["Digital literacy support", "Supervised access to computers and online resources, building skills in research, communication and productivity tools."], ["Technology-enhanced learning", "Curriculum-aligned platforms for homework support and guided research."]],
    why: "In high-risk communities, limited access to technology widens inequality. Digital labs close that gap and build the skills needed for further education and employment." },
];

export const partnerWays = [
  ["Fund a programme or school", "Support learning, psychosocial services, digital labs or capacity to reach the next school."],
  ["Share skills and time", "Provide youth speakers, mentors, career guidance, digital training or professional support."],
  ["Help with transport", "Offer vehicles, qualified drivers, transport services, fuel or maintenance to support programme access."],
  ["Provide technology and resources", "Contribute computers, connectivity, equipment or practical supplies based on confirmed needs."],
  ["Create pathways into work", "Explore internships, work experience and employment opportunities for suitable participants and alumni."],
  ["Build awareness", "Introduce YOSA to relevant networks, share approved stories or explore employee and event fundraising."],
];

export const quotes = {
  principal: { text: "Since implementing YOSA, we have seen a tangible shift in learner behaviour and academic engagement. The structured approach and measurable outcomes set it apart.", by: "School Principal, Partner School" },
  founder: { text: "None is born with anger or hate. These are results of social training. Positivity is trained too. We must be deliberate about Positive Youth Development.", by: "Dr. Astonishment Mapurisa, Founder & Director of YOSA" },
};

// Testimonials. Two contributors are still to be supplied by Astonishment:
// set `pending` to false and add `quote`, `by`, `role` (and optionally `photo`).
// Contributor portraits: square JPEG, 800 × 800 or larger, face centred.
export type Testimonial = {
  pending?: boolean;
  quote?: string;
  by?: string;
  role?: string;
  photo?: string | null;
};

export const testimonials: Testimonial[] = [
  { quote: quotes.principal.text, by: "School Principal", role: "YOSA partner school, Soweto", photo: null },
  { quote: quotes.founder.text, by: "Dr. Astonishment Mapurisa", role: "Founder & Director, YOSA", photo: null },
  { pending: true, role: "Contributor testimonial" },
  { pending: true, role: "Contributor testimonial" },
];

// Resources: one place for everything YOSA publishes, grouped by what a visitor is looking for.
export const resources = {
  intro: "Reports show what we delivered and what changed. Newsletters tell the story month by month. The gallery shows the work itself.",
  note: "YOSA's full archive of reports and newsletters is being consolidated into one library organised by year and publication type. Until it is live, each link below opens the current collection on the YOSA website.",
  inside: ["Annual reports and audited summaries", "Programme and funder reporting", "Monthly newsletters", "Photographs from programmes and events"],
  groups: [
    {
      key: "reports",
      icon: "download",
      title: "Reports and publications",
      desc: "Annual reports, programme reviews and funder reporting, with the data behind our outcomes.",
      meta: "Annual and programme reports · PDF",
      cta: "Open reports",
      href: site.links.reports,
    },
    {
      key: "newsletters",
      icon: "mail",
      title: "Monthly newsletters",
      desc: "Short updates from the programme: what learners did, what changed, and what comes next.",
      meta: "Monthly programme updates",
      cta: "Open newsletters",
      href: site.links.newsletters,
    },
    {
      key: "gallery",
      icon: "users",
      title: "Photo gallery",
      desc: "Photographs from YOSA programmes, partner schools and community events.",
      meta: "Programme photography",
      cta: "Open photo gallery",
      href: site.links.gallery,
    },
  ],
};
