// All editable wording, figures and links. Content below is taken from YOSA's public website (youthopportunitiessouthafrica.org) and brand guideline.
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

export const pyd = [
  { key: "learning", label: "Learning support", icon: "book", items: ["Tutoring and curriculum coaching", "Digital training", "Spelling and writing support", "Subject choice and career guidance", "Merit and excellence recognition", "Counselling and group work"] },
  { key: "life", label: "Life skills development", icon: "users", items: ["Sports and recreation", "Leadership development", "Public speaking and creative arts", "Behavioural support", "Computer skills training", "Psychosocial and reproductive health education", "Group engagement activities"] },
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
export const reportItems = ["Monthly programme reports", "Annual summaries", "Partner-aligned data presentations", "Newsletters and programme updates"];
