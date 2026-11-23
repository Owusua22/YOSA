'use client';
import { useState, useRef, useEffect } from 'react';
import {
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  ChevronsRight,
  ChevronDown,
  Search,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Heart,
  Users,
  Gift,
  HandHeart,
  Star,
  Quote,
  User,
  Tag,
  Check,
  Globe,
  Share2,
  ExternalLink,
  MessageCircle,
} from 'lucide-react';
import { site, pillars, testimonials, resources, gallery } from './content';

function Button({
  children,
  href = '#contact',
  onClick,
  light = false,
  className = '',
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  light?: boolean;
  className?: string;
}) {
  const cls = `inline-flex items-center gap-3 rounded-full p-1.5 pr-5 text-xs font-extrabold border transition hover:-translate-y-0.5 ${
    light
      ? 'bg-white text-orange border-white hover:bg-cream'
      : 'bg-orange text-white border-orange hover:bg-orange/90'
  } ${className}`;
  const content = (
    <>
      <span
        className={`grid size-8 place-items-center rounded-full ${
          light ? 'bg-orange text-white' : 'bg-white text-orange'
        }`}
      >
        <ChevronsRight size={16} />
      </span>
      {children}
    </>
  );
  return onClick ? (
    <button type="button" onClick={onClick} className={cls}>
      {content}
    </button>
  ) : (
    <a href={href} className={cls}>
      {content}
    </a>
  );
}

function Title({ label, children, white = false }: { label: string; children: React.ReactNode; white?: boolean }) {
  return (
    <>
      <div className="eyebrow">{label}</div>
      <h2 className={`heading ${white ? 'text-white' : ''}`}>{children}</h2>
    </>
  );
}

function Donors() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-3">
        {['/photos/library/img-1384.jpg', '/photos/library/img-1388.jpg', '/photos/library/img-1390.jpg'].map((src) => (
          <img key={src} src={src} alt="YOSA learner" className="size-10 rounded-full border-2 border-white object-cover" />
        ))}
        <span className="grid size-10 place-items-center rounded-full border-2 border-white bg-ink text-[10px] font-extrabold text-orange">
          7K+
        </span>
      </div>
      <span className="text-xs font-semibold">Learners reached</span>
    </div>
  );
}

function SliderArrows({ target }: { target: React.RefObject<HTMLDivElement | null> }) {
  return (
    <div className="flex gap-2">
      {[-1, 1].map((d) => (
        <button
          key={d}
          type="button"
          aria-label={d === 1 ? 'Next slide' : 'Previous slide'}
          onClick={() => target.current?.scrollBy({ left: d * (target.current.clientWidth * 0.7), behavior: 'smooth' })}
          className="grid size-11 place-items-center rounded-full border border-black/15 bg-white text-ink hover:bg-orange hover:text-white"
        >
          {d === 1 ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
        </button>
      ))}
    </div>
  );
}

const HERO_IMAGES = [
  '/photos/hero.jpg',
  '/photos/library/img-1611.jpg',
  '/photos/library/img-1405.jpg',
  '/photos/library/img-1692.jpg',
];

const CAUSES = [
  ['/photos/library/img-20260701-wa0027.jpg', 'Learning Support', pillars[0].title, pillars[0].intro, 92],
  ['/photos/library/img-1405.jpg', 'Life Skills', pillars[1].title, pillars[1].intro, 88],
  ['/photos/library/img-1692.jpg', 'Community', pillars[2].title, pillars[2].intro, 85],
  ['/photos/library/img-1611.jpg', 'Digital Labs', '3 digital labs across Soweto schools', 'Equipping learners with digital literacy, coding basics, and career readiness.', 78],
] as const;

const BOARD = [
  { name: 'Dr Astonishment Mapurisa', role: 'YOSA Founder', initials: 'AM' },
  { name: 'Prof Thobeka S Nkomo', role: 'Associate Professor of Social Work at University of the Witwatersrand', initials: 'TN' },
  { name: 'Garth Smith', role: 'Executive Leader | Business Transformation | Technology | Financial Services', initials: 'GS' },
  { name: 'Susy James', role: 'Former Qantas Airways staff member who is a long-time friend of YOSA', initials: 'SJ' },
  { name: 'Brolin Castellino', role: 'Qantas Airline Pilot and Fintech Entrepreneur', initials: 'BC' },
  { name: 'Jennifer van Oerle (Chairperson)', role: 'Chief Operating Officer, Discovery Invest', initials: 'JO' },
  { name: 'Vusi Mashiloane', role: 'Board of Governors Member', initials: 'VM' },
];

export default function Home() {
  const [heroIdx, setHeroIdx] = useState(0);
  const [mobile, setMobile] = useState(false);
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(0);
  const [notice, setNotice] = useState('');
  const [modal, setModal] = useState<{ title: string; text?: string; image?: string } | null>(null);
  const [test, setTest] = useState(0);
  const [contactForm, setContactForm] = useState({ name: '', email: '', mobile: '' });
  const donations = useRef<HTMLDivElement | null>(null);
  const blogs = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setHeroIdx((i) => (i + 1) % HERO_IMAGES.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const nav = [
    ['Home', '#home'],
    ['About', '#about'],
    ['Programmes', '#causes'],
    ['Leadership', '#leadership'],
    ['Gallery', '/gallery'],
    ['Resources', '#blog'],
    ['Contact', '#contact'],
  ];

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-30 text-white">
        <div className="mx-auto flex h-24 w-[91%] items-center justify-between gap-6">
          <a href="#home" className="relative z-10 rounded-b-[42%] bg-white px-6 pb-6 pt-6">
            <img src="/brand/yosa-wordmark.svg" alt="YOSA home" className="w-36" />
          </a>
          <nav className="hidden items-center gap-7 text-xs font-bold lg:flex">
            {nav.map(([n, h]) => (
              <a key={n} href={h} className="flex items-center gap-1.5 hover:text-orange">
                {n}
                {['Home', 'Programmes', 'Resources'].includes(n) && <ChevronDown size={11} />}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-5">
            <button type="button" aria-label="Open search" onClick={() => setSearch(true)}>
              <Search size={19} />
            </button>
            <Button href="#contact" className="hidden sm:inline-flex">
              Partner With Us
            </Button>
            <button type="button" className="lg:hidden" aria-label="Open navigation" onClick={() => setMobile(true)}>
              <Menu />
            </button>
          </div>
        </div>
      </header>

      {mobile && (
        <div className="fixed inset-0 z-50 bg-black/60" onClick={() => setMobile(false)}>
          <aside onClick={(e) => e.stopPropagation()} className="absolute right-0 top-0 flex h-full w-80 flex-col bg-white p-7">
            <div className="mb-8 flex justify-between">
              <img src="/brand/yosa-wordmark.svg" alt="YOSA" className="w-32" />
              <button type="button" aria-label="Close navigation" onClick={() => setMobile(false)}>
                <X />
              </button>
            </div>
            {nav.map(([n, h]) => (
              <a key={n} href={h} onClick={() => setMobile(false)} className="border-b border-black/10 py-4 font-bold">
                {n}
              </a>
            ))}
          </aside>
        </div>
      )}

      {search && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-7 bg-ink/95 p-6 backdrop-blur-lg">
          <button type="button" className="text-white" aria-label="Close search" onClick={() => setSearch(false)}>
            <X size={30} />
          </button>
          <form
            className="flex w-full max-w-xl rounded-full border border-white/40 p-4 text-white"
            onSubmit={(e) => {
              e.preventDefault();
              setNotice(query.trim() ? `Explore our programmes, events, and stories below for “${query}”.` : 'Enter a search term.');
              if (query.trim()) {
                setSearch(false);
                document.getElementById('causes')?.scrollIntoView();
              }
            }}
          >
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search programmes, events, stories…"
              aria-label="Search website"
              className="w-full bg-transparent outline-none"
            />
            <button type="submit" aria-label="Search">
              <Search />
            </button>
          </form>
        </div>
      )}

      <main>
        {/* 1. Hero Section with Auto-Sliding Carousel inside .hero-mask & Hands Background */}
        <section id="home" className="relative overflow-hidden bg-ink text-white">
          <div className="relative mx-auto grid min-h-[760px] w-[91%] items-center lg:grid-cols-2">
            <div className="fade relative z-10 pb-14 pt-40 lg:py-48">
              <div className="eyebrow text-[11px] tracking-[2px]">YOSA: Changing the world; one person at a time</div>
              <h1 className="max-w-xl text-[clamp(34px,4vw,54px)] font-bold leading-[1.1] tracking-[-1.5px]">
                Developing Young Change Agents. Creating Ripples of Impact.
              </h1>
              <p className="mb-8 mt-6 max-w-lg text-sm text-white/70">
                YOSA applies a holistic Positive Youth Development model rooted in the 6C framework, Competence, Confidence, Connection, Character, Care and Contribution, to create lasting ripple effects within school communities.
              </p>
              <div className="flex flex-wrap items-center gap-7">
                <Button href="#contact">Partner With Us</Button>
                <Donors />
              </div>
              <img
                src="https://charitics.temptics.com/assets/img/vector-img.png"
                alt=""
                className="pointer-events-none absolute -bottom-14 left-8 w-[430px] opacity-40"
              />
            </div>

            <div className="relative hidden h-full lg:block">
              <div className="absolute -right-[11vw] top-0 h-full w-[61vw] border-l-[7px] border-orange hero-mask overflow-hidden">
                <div
                  className="flex h-full w-full transition-transform duration-700 ease-out"
                  style={{ transform: `translateX(-${heroIdx * 100}%)` }}
                >
                  {HERO_IMAGES.map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt="YOSA learners and facilitators"
                      className="h-full min-w-full object-cover object-top"
                    />
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-ink/20" />
              </div>
            </div>
          </div>
        </section>

        {/* 2. About Us with Heart-Shaped Photo Collage */}
        <section id="about" className="section">
          <div className="wrap grid items-center gap-14 md:grid-cols-2">
            <div className="relative mx-auto w-full max-w-[520px]">
              <svg viewBox="0 0 520 480" className="w-full h-auto block" role="img" aria-label="YOSA team and learners">
                <defs>
                  <clipPath id="yosa-heart-clip">
                    <path d="M260,452 C260,452 24,310 24,158 C24,78 86,20 162,20 C208,20 244,44 260,78 C276,44 312,20 358,20 C434,20 496,78 496,158 C496,310 260,452 260,452 Z" />
                  </clipPath>
                </defs>
                <ellipse cx="110" cy="360" rx="95" ry="62" transform="rotate(-24 110 360)" fill="#f8b49b" opacity="0.55" />
                <image
                  href="/photos/team.jpg"
                  x="0"
                  y="0"
                  width="520"
                  height="480"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#yosa-heart-clip)"
                />
              </svg>
              <div className="absolute -left-3 -top-3 size-32 overflow-hidden rounded-full border-[6px] border-orange bg-white shadow-xl">
                <img src="/photos/library/img-1384.jpg" alt="YOSA learners" className="h-full w-full object-cover" />
              </div>
              <div className="absolute -right-2 bottom-4 flex items-center gap-2.5 rounded-full bg-orange px-5 py-3 text-white shadow-xl">
                <strong className="text-2xl font-extrabold leading-none">10+</strong>
                <span className="max-w-[82px] text-xs font-semibold leading-tight">Years Of Impact</span>
              </div>
            </div>

            <div>
              <Title label="Our Purpose & Approach">Cultivating School Communities Where Young People Thrive</Title>
              <p className="mb-4 mt-5 text-sm text-gray-600">
                YOSA exists to cultivate school communities where young people are equipped to realise their potential and become agents of positive change. By embedding psychosocial support, leadership development, academic enrichment and family engagement directly into partner schools and the YOSA Centre, we strengthen the environments that shape young people.
              </p>
              <p className="mb-6 text-sm text-gray-600">
                <strong>The Challenge We Address:</strong> YOSA works in communities facing interconnected challenges including teenage pregnancy, substance abuse, limited academic participation, psychosocial vulnerability and the systemic pressures that perpetuate cycles of poverty.
              </p>
              <div className="mb-7 flex flex-wrap items-center gap-5">
                <div>
                  <h3 className="mb-3 flex items-center gap-3 text-xl font-bold">
                    <span className="grid size-11 place-items-center rounded-2xl bg-orange text-white">
                      <Heart />
                    </span>
                    The YOSA Model &amp; 6C Framework
                  </h3>
                  <p className="flex items-center gap-2 text-xs">
                    <Check size={15} className="text-orange" /> Competence, Confidence, Connection, Character, Care &amp; Contribution
                  </p>
                </div>
                <img src="/photos/library/img-1593.jpg" className="h-16 w-48 rounded-full object-cover" alt="YOSA facilitators" />
              </div>
              <div className="flex flex-wrap items-center gap-7">
                <Button href="#contact">Partner With Us</Button>
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-full border">
                    <Phone size={18} />
                  </span>
                  <div className="text-xs">
                    <p className="text-gray-500">Call Any Time</p>
                    <a href="tel:+27630712093" className="font-extrabold">
                      +27 63 071 2093
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Programmes / Causes */}
        <section id="causes" className="section relative overflow-hidden bg-cream">
          <div className="absolute inset-y-0 right-0 w-[43%] rounded-l-full bg-ink pattern" />
          <div className="wrap relative">
            <div className="mb-10 flex flex-wrap items-center justify-between gap-6">
              <div className="max-w-lg">
                <Title label="What We Do">Our Core Programmes</Title>
              </div>
              <div className="hidden text-white lg:block">
                <Donors />
              </div>
              <SliderArrows target={donations} />
            </div>
            <div ref={donations} className="scrollrow flex gap-5 overflow-x-auto pb-3">
              {pillars.map((p, idx) => {
                const imgs = [
                  '/photos/library/img-20260701-wa0027.jpg',
                  '/photos/library/img-1405.jpg',
                  '/photos/library/img-1692.jpg',
                ];
                return (
                  <article
                    key={p.key}
                    className="min-w-[285px] flex-1 rounded-[20px] border border-black/10 bg-white p-5 md:min-w-[calc((100%-40px)/3)]"
                  >
                    <div className="relative mb-5">
                      <img src={imgs[idx]} alt={p.title} className="aspect-[3/2] w-full rounded-xl object-cover" />
                      <span className="absolute left-3 top-3 bg-orange px-3 py-1 text-[10px] font-bold text-white">
                        {p.label}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold leading-tight">{p.title}</h3>
                    <p className="mb-4 mt-2 text-xs text-gray-500">{p.intro}</p>
                    <ul className="space-y-2" aria-label={`${p.title} components`}>
                      {p.fns.map(([fnTitle]) => (
                        <li
                          key={fnTitle}
                          className="border-l-4 border-orange bg-[#f7f7f9] px-3 py-2 text-xs font-semibold text-ink"
                        >
                          {fnTitle}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. Support Learners Banner (Strictly Progress + Image, no Custom Donate Box) */}
        <section id="donate" className="section">
          <div className="wrap overflow-hidden rounded-3xl bg-orange p-6 md:p-10">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="/photos/careers-visit.jpg"
                  alt="YOSA learners supported across partner schools"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="text-white">
                <div className="eyebrow text-white">Partner Impact</div>
                <h2 className="heading text-white">Support Learners by Partnering With Us</h2>
                <div className="mb-4 mt-10 h-1 rounded-full bg-white/30">
                  <div className="relative h-full w-[78%] bg-white">
                    <span className="absolute -right-3 -top-7 text-xs font-bold">78%</span>
                    <span className="absolute -right-1 -top-1 size-3 rounded-full border-[3px] border-white bg-orange" />
                  </div>
                </div>
                <div className="mb-8 flex justify-between text-xs font-semibold">
                  <span>160+ University Acceptances</span>
                  <span>10 Partner Schools</span>
                </div>
                <Button href="#contact" light>
                  Partner With Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 5. 4-Circle Reach Stats */}
        <div className="section bg-ink pattern">
          <div className="wrap grid grid-cols-2 gap-5 md:grid-cols-4">
            {[
              [Users, '7,000+', 'People directly supported'],
              [HandHeart, '10', 'Soweto junior & high schools'],
              [Gift, '150', 'Children in after-school care'],
              [Heart, '13', 'Child-headed households'],
            ].map(([IconComp, n, t]: any) => (
              <div
                key={n}
                className="flex aspect-square flex-col items-center justify-center rounded-full border border-white/20 p-4 text-white hover:border-orange hover:bg-orange/10"
              >
                <IconComp size={42} strokeWidth={1.3} />
                <strong className="my-4 font-heading text-4xl">{n}</strong>
                <span className="text-center text-[11px]">{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 5b. The YOSA Model & 6C Framework */}
        <section id="model" className="section bg-white">
          <div className="wrap">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <div className="flex justify-center">
                <span className="eyebrow">The YOSA Model &amp; 6C Framework</span>
              </div>
              <h2 className="heading">YOSA: How the Model Works in Practice</h2>
              <p className="mt-4 text-sm text-gray-600">
                The model is guided by a structured developmental framework. Each stage reinforces the next. Change is developmental rather than reactive, creating sustained internal and external growth.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ['01', 'Competence', 'Developing practical and academic skills'],
                ['02', 'Confidence', 'Strengthening belief in personal capability'],
                ['03', 'Connection', 'Building healthy relationships with peers, educators, and family'],
                ['04', 'Character', 'Reinforcing responsibility and integrity'],
                ['05', 'Care', 'Cultivating empathy and social awareness'],
                ['06', 'Contribution', 'Encouraging active participation in community wellbeing'],
              ].map(([num, title, desc]) => (
                <div key={title} className="rounded-2xl border border-black/10 bg-[#f7f7f9] p-6">
                  <span className="text-xs font-extrabold text-orange">{num}</span>
                  <h3 className="mt-2 text-lg font-bold text-ink">{title}</h3>
                  <p className="mt-2 text-xs text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5c. Why Our Model Works */}
        <section id="why-model" className="section bg-[#f4f4f4]">
          <div className="wrap">
            <div className="mb-10 max-w-2xl">
              <Title label="Why Our Model Works">Three Pillars, The 6Cs &amp; Focused Delivery</Title>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              <article className="rounded-2xl bg-white p-7 shadow-sm">
                <span className="inline-block bg-orange px-3 py-1 text-[10px] font-bold text-white">01 · Three Pillars</span>
                <h3 className="mt-4 text-xl font-bold text-ink">Three Pillars</h3>
                <p className="mt-3 text-xs text-gray-600">
                  YOSA&apos;s model is built on three integrated pillars: 1. Learning Support, 2. Psychosocial Support and 3. Digital Innovation, which together address both academic performance and the underlying factors that shape learner behaviour and opportunity.
                </p>
                <p className="mt-3 text-xs text-gray-600">
                  The pillars work because they are interdependent: academic progress is reinforced by emotional stability, and both are strengthened by access to digital skills and opportunity.
                </p>
              </article>

              <article className="rounded-2xl bg-white p-7 shadow-sm">
                <span className="inline-block bg-orange px-3 py-1 text-[10px] font-bold text-white">02 · The Ripple Effect</span>
                <h3 className="mt-4 text-xl font-bold text-ink">The 6C&apos;s Model: The Ripple Effect</h3>
                <p className="mt-3 text-xs text-gray-600">
                  The 6Cs model is a structured Positive Youth Development framework guiding young people through six interlinked stages: Competence, Confidence, Connection, Character, Care and Contribution.
                </p>
                <p className="mt-3 text-xs text-gray-600">
                  It works because it follows a logical developmental progression, strengthening internal capacity before expecting external behaviour change and building protective factors such as identity, belonging, agency and purpose.
                </p>
              </article>

              <article className="rounded-2xl bg-white p-7 shadow-sm">
                <span className="inline-block bg-orange px-3 py-1 text-[10px] font-bold text-white">03 · Focused Delivery</span>
                <h3 className="mt-4 text-xl font-bold text-ink">Focused Delivery</h3>
                <p className="mt-3 text-xs text-gray-600">
                  YOSA implements its model through long-term partnerships with a defined number of schools, learners, and families. Sustained change requires depth, consistency and accountability.
                </p>
                <p className="mt-3 text-xs text-gray-600">
                  By concentrating resources within partner schools, YOSA builds strong relationships, maintains continuity, and strengthens institutional capacity within schools themselves.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* 6. Our Leadership & Governance (Board of Governors) */}
        <section id="leadership" className="section bg-[#f4f4f4]">
          <div className="wrap">
            <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:items-end">
              <div>
                <Title label="Our Leadership & Governance">YOSA Board of Governors</Title>
                <p className="mt-4 text-sm text-gray-600">
                  Founded by Dr. Astonishment Mapurisa in 2015, the organisation operates with a clear governance framework aligned to partner and stakeholder expectations.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <strong className="mb-3 block text-sm font-bold text-ink">Accountability is reinforced through:</strong>
                <div className="grid grid-cols-1 gap-2 text-xs text-gray-600 sm:grid-cols-2">
                  <span className="flex items-center gap-2"><Check size={14} className="text-orange" /> Regular reporting</span>
                  <span className="flex items-center gap-2"><Check size={14} className="text-orange" /> Partner-aligned data presentation</span>
                  <span className="flex items-center gap-2"><Check size={14} className="text-orange" /> Programme monitoring systems</span>
                  <span className="flex items-center gap-2"><Check size={14} className="text-orange" /> Transparent outcome communication</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
              {BOARD.map((m) => (
                <article key={m.name} className="rounded-2xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1">
                  <div className="mx-auto mb-4 grid size-20 place-items-center rounded-full bg-orange/15 text-xl font-extrabold text-orange">
                    {m.initials}
                  </div>
                  <h3 className="text-base font-bold leading-snug text-ink">{m.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-500">{m.role}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Volunteer / Partner */}
        <section id="volunteer" className="section">
          <div className="mx-auto w-[94%] rounded-3xl bg-[#f4f4f4] py-16">
            <div className="wrap grid items-center gap-14 md:grid-cols-2">
              <div className="relative before:absolute before:-bottom-4 before:-left-4 before:h-full before:w-full before:rounded-3xl before:border-[3px] before:border-orange">
                <img src="/photos/impact.jpg" alt="YOSA learners" className="relative aspect-square w-full rounded-3xl object-cover" />
              </div>
              <div>
                <Title label="Join us">Why Partner With YOSA</Title>
                <p className="mb-6 mt-5 text-sm text-gray-500">
                  Through long-term partnership and accountable implementation, we aim to shift not only individual trajectories, but the broader conditions that shape opportunity for the next generation.
                </p>
                {[
                  'Fund a Learner’s Annual Kit',
                  'Sponsor Digital Labs & Transport',
                  'Mentor Into Career Pathways',
                ].map((s, i) => (
                  <div key={s} className="mb-3 rounded-xl border border-black/20 bg-white px-5">
                    <button
                      type="button"
                      onClick={() => setOpen(open === i ? -1 : i)}
                      aria-expanded={open === i}
                      className={`flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-bold ${
                        open === i ? 'text-orange' : ''
                      }`}
                    >
                      {s}
                      <ChevronDown className={`shrink-0 transition ${open === i ? 'rotate-180' : ''}`} size={17} />
                    </button>
                    {open === i && (
                      <p className="pb-5 text-xs text-gray-500">
                        {[
                          'Every contribution strengthens our after-school learning labs, psychosocial care, and family support across partner schools.',
                          'Help equip our 3 digital labs and support safe transport for learners attending weekend and holiday programmes.',
                          'Connect learners with tertiary institutions, bursaries, and career mentors, contributing to 160+ university acceptances.',
                        ][i]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. Testimonials */}
        <section className="section mt-5 overflow-hidden bg-[#f4f4f4]">
          <div className="wrap">
            <div className="mx-auto mb-10 max-w-lg text-center">
              <div className="flex justify-center">
                <span className="eyebrow">Testimonials</span>
              </div>
              <h2 className="heading">What They Are Talking About YOSA</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {testimonials
                .filter((t) => !t.pending)
                .map((t, n) => (
                  <article key={n} className="rounded-xl bg-white p-7 shadow-sm">
                    <div className="mb-5 flex gap-1 text-amber-500">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <p className="mb-6 text-sm text-gray-500">&ldquo;{t.quote}&rdquo;</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="grid size-11 place-items-center rounded-full bg-orange/15 text-xs font-bold text-orange">
                          {(t.by || 'YO').slice(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <h3 className="text-sm font-bold">{t.by}</h3>
                          <span className="text-[10px] text-gray-500">{t.role}</span>
                        </div>
                      </div>
                      <Quote size={30} className="text-orange" />
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </section>

        {/* 9. Resources / Latest */}
        <section id="blog" className="section">
          <div className="wrap grid gap-10 md:grid-cols-[1fr_1.8fr]">
            <div>
              <Title label="Resources">Reports, Newsletters &amp; Archive</Title>
              <p className="mb-7 mt-5 text-sm text-gray-500">
                Explore our annual reports, community newsletters, and {gallery.items.length} field photographs.
              </p>
              <SliderArrows target={blogs} />
            </div>
            <div ref={blogs} className="scrollrow flex gap-5 overflow-x-auto pb-5">
              {resources.groups.map((r, idx) => {
                const imgs = ['/photos/library/img-1561.jpg', '/photos/library/img-1586.jpg', '/photos/library/img-1694.jpg'];
                return (
                  <article
                    key={r.title}
                    className="min-w-[270px] flex-1 overflow-hidden rounded-2xl border border-black/5 md:min-w-[calc(50%-10px)]"
                  >
                    <div className="relative">
                      <img src={imgs[idx % imgs.length]} alt={r.title} className="aspect-[1.4] w-full object-cover" />
                      <span className="absolute left-4 top-4 rounded-lg bg-orange p-3 text-center text-white">
                        <strong className="block text-sm">{r.meta}</strong>
                      </span>
                    </div>
                    <div className="px-5 pb-5">
                      <div className="flex justify-between border-b border-black/15 py-4 text-[10px] text-gray-500">
                        <span className="flex items-center gap-2">
                          <User size={13} className="text-orange" />
                          YOSA Team
                        </span>
                        <span className="flex items-center gap-2">
                          <Tag size={13} className="text-orange" />
                          {r.meta}
                        </span>
                      </div>
                      <h3 className="border-b border-black/15 py-4 text-xl font-bold leading-tight">{r.title}</h3>
                      <a
                        href="/newsletters"
                        className="mt-4 flex w-full items-center justify-between text-xs font-bold text-orange"
                      >
                        {r.cta} <ArrowRight size={17} />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 10. Circular 6-Photo Preview Strip linking to /gallery */}
        <div className="wrap mb-20 grid grid-cols-3 gap-5 md:grid-cols-6">
          {[
            '/photos/library/img-1384.jpg',
            '/photos/library/img-1388.jpg',
            '/photos/library/img-1390.jpg',
            '/photos/library/img-1392.jpg',
            '/photos/library/img-1557.jpg',
            '/photos/library/img-1563.jpg',
          ].map((src, i) => (
            <a
              key={src}
              href="/gallery"
              aria-label={`Open full YOSA gallery (${i + 1})`}
              className="group relative overflow-hidden rounded-full"
            >
              <img src={src} alt="YOSA community in action" className="aspect-square w-full object-cover transition group-hover:scale-110" />
              <span className="absolute inset-0 grid place-items-center bg-orange/65 text-white opacity-0 transition group-hover:opacity-100">
                <ExternalLink />
              </span>
            </a>
          ))}
        </div>

        {/* 11. Contact Us Component */}
        <section id="contact" className="section bg-[#f4f4f4]">
          <div className="wrap grid gap-12 lg:grid-cols-2">
            <div>
              <Title label="Contact Us">Get in Touch</Title>
              <p className="mt-4 text-sm text-gray-600">
                <strong>Mondays to Fridays</strong> · 09:00am to 5:00pm
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/27630712093"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-orange px-6 py-3 text-xs font-extrabold text-white transition hover:bg-orange/90"
                >
                  <MessageCircle size={16} /> Message us on WhatsApp
                </a>
              </div>

              <div className="mt-8 space-y-4 rounded-2xl bg-white p-7 shadow-sm">
                <p className="text-sm font-bold text-ink">Youth Opportunities South Africa</p>
                <p className="flex items-start gap-3 text-xs text-gray-600">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-orange" />
                  Sekwati Primary School, 752 Metlatoe Street, Molapo, Soweto, 1818, South Africa
                </p>
                <p className="flex items-center gap-3 text-xs text-gray-600">
                  <Mail size={16} className="shrink-0 text-orange" />
                  <a href="mailto:info@youthopportunitiessa.org" className="hover:text-orange">
                    info@youthopportunitiessa.org
                  </a>
                </p>
                <p className="flex items-center gap-3 text-xs text-gray-600">
                  <Phone size={16} className="shrink-0 text-orange" />
                  <a href="tel:+27630712093" className="hover:text-orange">+27 63 071 2093</a>
                  <span>·</span>
                  <a href="tel:+27761186382" className="hover:text-orange">+27 76 118 6382</a>
                </p>
              </div>
            </div>

            <form
              className="rounded-2xl bg-white p-8 shadow-sm"
              onSubmit={(e) => {
                e.preventDefault();
                setNotice('Thank you! Your enquiry has been received. We will contact you as soon as possible.');
                setContactForm({ name: '', email: '', mobile: '' });
              }}
            >
              <h3 className="mb-2 text-xl font-bold text-ink">Send an Enquiry</h3>
              <p className="mb-6 text-xs text-gray-500">
                If you have any enquiries or questions, leave your details here, and we will contact you as soon as possible.
              </p>
              <div className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-xs font-bold text-ink">Name*</label>
                  <input
                    required
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-black/15 px-4 py-3 text-sm outline-orange"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-bold text-ink">Email*</label>
                  <input
                    required
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    placeholder="you@example.org"
                    className="w-full rounded-xl border border-black/15 px-4 py-3 text-sm outline-orange"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-bold text-ink">Mobile</label>
                  <input
                    type="tel"
                    value={contactForm.mobile}
                    onChange={(e) => setContactForm({ ...contactForm, mobile: e.target.value })}
                    placeholder="+27 ..."
                    className="w-full rounded-xl border border-black/15 px-4 py-3 text-sm outline-orange"
                  />
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="rounded-full bg-orange px-7 py-3 text-xs font-extrabold text-white transition hover:bg-orange/90"
                  >
                    Send
                  </button>
                  <button
                    type="button"
                    onClick={() => setContactForm({ name: '', email: '', mobile: '' })}
                    className="rounded-full border border-black/15 px-6 py-3 text-xs font-bold text-ink hover:bg-black/5"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative bg-ink text-white">
        <div className="wrap grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[1.1fr_.7fr_1.1fr_1.1fr]">
          <div>
            <img src="/brand/yosa-logo-white.svg" alt="YOSA" className="mb-6 w-40" />
            <p className="mb-6 text-xs text-white/60">
              Youth Opportunities South Africa, empowering learners in under-resourced schools through education, life skills, and community care.
            </p>
            <div className="flex gap-2">
              {[Globe, Share2, ExternalLink].map((IconComp, i) => (
                <a
                  href={site.social[i]?.href || '#contact'}
                  aria-label={['Facebook', 'Instagram', 'YouTube'][i]}
                  key={i}
                  className="rounded border border-white/20 p-2 hover:bg-orange"
                >
                  <IconComp size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-bold">Quick Links</h3>
            <div className="mb-6 h-0.5 w-16 bg-orange" />
            {[
              ['About Us', '#about'],
              ['Our Programmes', '#causes'],
              ['Leadership', '#leadership'],
              ['Photo Gallery', '/gallery'],
              ['Contact Us', '#contact'],
            ].map(([t, h]) => (
              <a href={h} key={t} className="mb-3 flex items-center gap-2 text-xs text-white/70 hover:text-orange">
                <ArrowRight size={12} />
                {t}
              </a>
            ))}
          </div>

          <div>
            <h3 className="mb-6 text-xl font-bold">Registration</h3>
            <div className="mb-6 h-0.5 w-16 bg-orange" />
            <p className="text-xs text-white/70">Reg: {site.reg}</p>
            <p className="mt-2 text-xs text-white/70">Sekwati Primary School, 752 Metlatoe Street, Molapo, Soweto, 1818</p>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-bold">Contact Us</h3>
            <div className="mb-6 h-0.5 w-16 bg-orange" />
            <a href="mailto:info@youthopportunitiessa.org" className="mb-3 flex items-center gap-2 text-xs">
              <Mail size={14} />
              info@youthopportunitiessa.org
            </a>
            <a href="tel:+27630712093" className="mb-3 flex items-center gap-2 text-xs">
              <Phone size={14} />
              +27 63 071 2093
            </a>
            <a href="tel:+27761186382" className="mb-5 flex items-center gap-2 text-xs">
              <Phone size={14} />
              +27 76 118 6382
            </a>
          </div>
        </div>

        <div className="bg-orange py-5">
          <div className="wrap flex flex-wrap justify-between gap-3 text-[10px]">
            <span>© {new Date().getFullYear()} Youth Opportunities South Africa (YOSA). All rights reserved.</span>
          </div>
        </div>
      </footer>

      {notice && (
        <div
          role="status"
          className="fixed bottom-6 left-1/2 z-[60] flex w-[90%] max-w-lg -translate-x-1/2 items-center gap-4 rounded-xl bg-ink p-5 text-sm text-white shadow-xl"
        >
          <span className="flex-1">{notice}</span>
          <button type="button" aria-label="Dismiss notification" onClick={() => setNotice('')}>
            <X size={18} />
          </button>
        </div>
      )}

      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
          onClick={() => setModal(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={modal.title}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-xl overflow-auto rounded-2xl bg-white p-7"
          >
            <button
              type="button"
              autoFocus
              aria-label="Close dialog"
              className="absolute right-4 top-4 rounded-full bg-white p-2"
              onClick={() => setModal(null)}
            >
              <X size={20} />
            </button>
            {modal.image && <img src={modal.image} alt={modal.title} className="mb-5 w-full rounded-xl" />}
            <h2 className="mb-4 pr-8 text-2xl font-bold">{modal.title}</h2>
            {modal.text && <p className="text-sm text-gray-600">{modal.text}</p>}
            <button type="button" onClick={() => setModal(null)} className="mt-6 rounded-full bg-orange px-6 py-3 text-sm font-bold text-white">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
