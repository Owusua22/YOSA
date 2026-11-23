'use client';
import { useState, useRef } from 'react';
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
  Calendar,
  User,
  Tag,
  Check,
  Globe,
  Share2,
  ExternalLink,
} from 'lucide-react';
import { site, reach, pillars, testimonials, resources, gallery } from './content';

function Button({
  children,
  href = '#donate',
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

const CAUSES = [
  ['/photos/library/img-20260701-wa0027.jpg', 'Learning Support', pillars[0].title, pillars[0].intro, 92],
  ['/photos/library/img-1405.jpg', 'Life Skills', pillars[1].title, pillars[1].intro, 88],
  ['/photos/library/img-1692.jpg', 'Community', pillars[2].title, pillars[2].intro, 85],
  ['/photos/library/img-1611.jpg', 'Digital Labs', '3 digital labs across Soweto schools', 'Equipping learners with digital literacy, coding basics, and career readiness.', 78],
] as const;

export default function Home() {
  const [mobile, setMobile] = useState(false);
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(0);
  const [amount, setAmount] = useState('300');
  const [custom, setCustom] = useState('');
  const [notice, setNotice] = useState('');
  const [modal, setModal] = useState<{ title: string; text?: string; image?: string } | null>(null);
  const [test, setTest] = useState(0);
  const donations = useRef<HTMLDivElement | null>(null);
  const blogs = useRef<HTMLDivElement | null>(null);

  const nav = [
    ['Home', '#home'],
    ['About', '#about'],
    ['Programmes', '#causes'],
    ['Gallery', '/gallery'],
    ['Events', '#events'],
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
            <Button href="#volunteer" className="hidden sm:inline-flex">
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
        {/* 1. Hero Section */}
        <section id="home" className="relative overflow-hidden bg-ink text-white">
          <div className="relative mx-auto grid min-h-[760px] w-[91%] items-center lg:grid-cols-2">
            <div className="fade relative z-10 pb-14 pt-40 lg:py-48">
              <div className="eyebrow text-[11px] tracking-[3px]">Youth Opportunities South Africa · Since 2016</div>
              <h1 className="max-w-xl text-[clamp(42px,5vw,72px)] font-bold leading-[1.04] tracking-[-2px]">
                For The Young People &amp; Cause You Care About
              </h1>
              <p className="mb-8 mt-6 max-w-lg text-sm text-white/70">
                We walk alongside learners in under-resourced South African schools with academic support, life skills, and community care.
              </p>
              <div className="flex flex-wrap items-center gap-7">
                <Button href="#donate">Make Donation</Button>
                <Donors />
              </div>
            </div>
            <div className="relative hidden h-full lg:block">
              <div className="absolute -right-[11vw] top-0 h-full w-[61vw] border-l-[7px] border-orange hero-mask overflow-hidden">
                <img src="/photos/hero.jpg" alt="YOSA learners and facilitators" className="hero-mask h-full w-full" />
                <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-ink/20" />
              </div>
            </div>
          </div>
        </section>

        {/* 2. About Us */}
        <section id="about" className="section">
          <div className="wrap grid items-center gap-14 md:grid-cols-2">
            <div className="relative">
              <img
                src="/photos/team.jpg"
                alt="YOSA team and learners"
                className="relative z-10 w-full rounded-3xl object-cover shadow-lg aspect-[4/3]"
              />
            </div>
            <div>
              <Title label="About YOSA">Empowering Young People Across South Africa</Title>
              <p className="mb-6 mt-5 text-sm text-gray-600">
                Youth Opportunities South Africa (YOSA) is a non-profit organisation working in partnership with under-resourced schools, families, and communities to help young people stay in school, build life skills, and step into meaningful futures.
              </p>
              <div className="mb-7 flex flex-wrap items-center gap-5">
                <div>
                  <h3 className="mb-3 flex items-center gap-3 text-xl font-bold">
                    <span className="grid size-11 place-items-center rounded-2xl bg-orange text-white">
                      <Heart />
                    </span>
                    School &amp; Community Partnership
                  </h3>
                  <p className="flex items-center gap-2 text-xs">
                    <Check size={15} className="text-orange" /> Reaching 7,000+ learners across 10 Soweto schools
                  </p>
                </div>
                <img src="/photos/library/img-1593.jpg" className="h-16 w-48 rounded-full object-cover" alt="YOSA facilitators" />
              </div>
              <div className="flex flex-wrap items-center gap-7">
                <Button href="#volunteer">Explore More</Button>
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-full border">
                    <Phone size={18} />
                  </span>
                  <div className="text-xs">
                    <p className="text-gray-500">Call Any Time</p>
                    <a href={`tel:${site.phone.replace(/\s+/g, '')}`} className="font-extrabold">
                      {site.phone}
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
              {CAUSES.map(([image, tag, title, desc, progress]) => (
                <article
                  key={image}
                  className="group min-w-[285px] flex-1 rounded-[20px] border-[3px] border-transparent bg-white p-5 pb-0 hover:border-orange md:min-w-[calc((100%-40px)/3)]"
                >
                  <div className="relative mb-9">
                    <img src={image} alt={title} className="aspect-[3/2] w-full rounded-xl object-cover" />
                    <span className="absolute left-3 top-3 rounded-full bg-orange px-3 py-1 text-[10px] font-bold text-white">
                      {tag}
                    </span>
                  </div>
                  <div className="relative h-1 rounded-full bg-orange/15">
                    <div style={{ width: progress + '%' }} className="relative h-full rounded-full bg-orange">
                      <span className="absolute -right-3 -top-5 text-[10px] font-bold text-orange">{progress}%</span>
                      <span className="absolute -right-1 -top-1 size-3 rounded-full border-[3px] border-orange bg-white" />
                    </div>
                  </div>
                  <div className="my-3 flex justify-between border-b border-black/10 pb-3 text-[10px]">
                    <span>Active: 10 Schools</span>
                    <span>Soweto, SA</span>
                  </div>
                  <h3 className="text-xl font-bold leading-tight">{title}</h3>
                  <p className="mb-5 mt-3 text-xs text-gray-500">{desc}</p>
                  <div className="text-center">
                    <a
                      href="#donate"
                      className="inline-flex items-center gap-4 rounded-t-xl bg-ink px-5 py-3 text-xs font-bold text-white group-hover:bg-orange"
                    >
                      Support programme <ArrowUpRight size={16} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Donate Now Banner */}
        <section id="donate" className="section">
          <div className="wrap overflow-hidden rounded-3xl bg-orange p-6 md:p-10">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <form
                className="rounded-2xl bg-ink p-7 text-white md:p-9"
                onSubmit={(e) => {
                  e.preventDefault();
                  const value = amount === 'custom' ? Number(custom) : Number(amount);
                  if (!value || value <= 0) {
                    setNotice('Please enter a donation amount greater than zero.');
                    return;
                  }
                  setModal({
                    title: 'Thank you for your generosity!',
                    text: `You selected a R${value} contribution toward YOSA learners. Please contact ${site.email} to complete your partnership.`,
                  });
                }}
              >
                <h3 className="mb-6 text-2xl font-bold">Custom Donate Now</h3>
                <div className="mb-6 flex flex-wrap gap-2">
                  {['150', '300', '500', '1000', '2500'].map((v) => (
                    <button
                      type="button"
                      aria-pressed={amount === v}
                      key={v}
                      onClick={() => setAmount(v)}
                      className={`rounded-full px-5 py-2 text-xs font-bold ${
                        amount === v ? 'bg-orange text-white' : 'bg-white text-ink'
                      }`}
                    >
                      R{v}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  min="1"
                  step="1"
                  value={custom}
                  onChange={(e) => {
                    setAmount('custom');
                    setCustom(e.target.value);
                  }}
                  placeholder="Custom Amount (R)"
                  aria-label="Custom donation amount in Rand"
                  className="mb-5 w-full rounded-full border border-white/30 px-5 py-3 text-sm outline-orange"
                />
                <button type="submit" className="inline-flex items-center gap-3 rounded-full bg-orange p-1.5 pr-5 text-xs font-extrabold">
                  <span className="grid size-8 place-items-center rounded-full bg-white text-orange">
                    <ChevronsRight size={16} />
                  </span>
                  Donate Now
                </button>
              </form>
              <div className="text-white">
                <div className="eyebrow text-white">Donate Now</div>
                <h2 className="heading text-white">Support Learners by Raising Valuable Donations</h2>
                <div className="mb-4 mt-12 h-1 rounded-full bg-white/30">
                  <div className="relative h-full w-[78%] bg-white">
                    <span className="absolute -right-3 -top-7 text-xs">78%</span>
                    <span className="absolute -right-1 -top-1 size-3 rounded-full border-[3px] border-white bg-orange" />
                  </div>
                </div>
                <div className="flex justify-between text-xs">
                  <span>160+ University Acceptances</span>
                  <span>10 Partner Schools</span>
                </div>
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

        {/* 6. Events / Impact Highlights */}
        <section id="events" className="section bg-ink pt-0 pattern">
          <div className="wrap">
            <div className="mb-10 flex flex-wrap items-center justify-between gap-6">
              <div className="max-w-lg">
                <Title label="Field Highlights" white>
                  YOSA Programmes in Action
                </Title>
              </div>
              <Button href="/gallery">View Full Gallery</Button>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {[
                ['/photos/library/img-1557.jpg', 'After-school tutoring & digital labs'],
                ['/photos/library/img-1573.jpg', 'Life skills & psychosocial support'],
                ['/photos/library/img-1693.jpg', 'Family & community outreach'],
                ['/photos/careers-visit.jpg', 'Career guidance & university pathways'],
              ].map(([image, title]) => (
                <article key={image} className="flex flex-col gap-5 rounded-2xl bg-white p-4 sm:flex-row">
                  <div className="relative sm:w-[42%] sm:shrink-0">
                    <img src={image} alt={title} className="h-60 w-full rounded-xl object-cover sm:h-full" />
                    <span className="absolute left-3 top-3 flex size-14 flex-col items-center justify-center rounded-lg bg-white text-sm font-extrabold text-orange">
                      10<small>Schools</small>
                    </span>
                  </div>
                  <div className="py-3">
                    <h3 className="text-xl font-bold leading-tight">{title}</h3>
                    <p className="mb-3 mt-3 text-xs text-gray-500">
                      Delivered weekly alongside educators, social workers, and community mentors across Soweto.
                    </p>
                    <div className="mb-4 border-t border-black/10 pt-3">
                      <strong className="text-xs text-orange">Location</strong>
                      <p className="mt-1 text-xs text-gray-500">{site.address}</p>
                    </div>
                    <Button onClick={() => setModal({ title, text: `Learn more about ${title} by reaching out to ${site.email}.` })}>
                      Programme Details
                    </Button>
                  </div>
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
                  Bring your time, skills, and resources. Together, we can build stronger schools and lasting pathways for young people.
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
                          'Connect learners with tertiary institutions, bursaries, and career mentors — contributing to 160+ university acceptances.',
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
            <div className="grid gap-6 md:grid-cols-3">
              {[0, 1, 2].map((n) => {
                const t = testimonials[(n + test) % testimonials.length];
                return (
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
                );
              })}
            </div>
            <div className="mt-9 flex justify-center gap-2">
              {[0, 1, 2].map((i) => (
                <button
                  type="button"
                  aria-label={`Testimonial group ${i + 1}`}
                  aria-pressed={test === i}
                  key={i}
                  onClick={() => setTest(i)}
                  className={`h-2.5 rounded-full ${test === i ? 'w-7 bg-orange' : 'w-2.5 bg-white'}`}
                />
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
                        href={r.href}
                        target="_blank"
                        rel="noopener noreferrer"
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
      </main>

      {/* Footer */}
      <footer id="contact" className="relative bg-ink text-white">
        <div className="wrap relative -top-0 grid gap-6 rounded-b-2xl bg-orange px-8 py-7 md:grid-cols-[1.4fr_1fr_1fr]">
          {[
            [MapPin, 'Address', site.address, null],
            [Mail, 'Send Email', site.email, `mailto:${site.email}`],
            [Phone, 'Call Us', site.phone, `tel:${site.phone.replace(/\s+/g, '')}`],
          ].map(([IconComp, label, value, href]: any) => (
            <div className="flex items-center gap-3" key={label}>
              <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/30">
                <span className="grid size-8 place-items-center rounded-full bg-white text-orange">
                  <IconComp size={16} />
                </span>
              </span>
              <div>
                <span className="text-[10px] text-white/80">{label}</span>
                <p className="text-xs font-bold">{href ? <a href={href}>{value}</a> : value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="wrap grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[1.1fr_.7fr_1.1fr_1.1fr]">
          <div>
            <img src="/brand/yosa-logo-white.svg" alt="YOSA" className="mb-6 w-40" />
            <p className="mb-6 text-xs text-white/60">
              Youth Opportunities South Africa — empowering learners in under-resourced schools through education, life skills, and community care.
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
              ['Photo Gallery', '/gallery'],
              ['Partner With Us', '#volunteer'],
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
            <p className="mt-2 text-xs text-white/70">{site.address}</p>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-bold">Contact Us</h3>
            <div className="mb-6 h-0.5 w-16 bg-orange" />
            <a href={`mailto:${site.email}`} className="mb-3 flex items-center gap-2 text-xs">
              <Mail size={14} />
              {site.email}
            </a>
            <a href={`tel:${site.phone.replace(/\s+/g, '')}`} className="mb-5 flex items-center gap-2 text-xs">
              <Phone size={14} />
              {site.phone}
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
