import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Header } from "./Header";
import { HeroSlider } from "./HeroSlider";
import { GiftWidget } from "./GiftWidget";
import EnquiryForm from "./EnquiryForm";
import { Counter, Reveal } from "./fx";
import { Icon, Socials } from "./icons";
import {
  factors,
  gallery,
  impact,
  impactSource,
  measure,
  partnerWays,
  photoAlt,
  photos,
  pillars,
  pyd,
  quotes,
  reach,
  resources,
  site,
  testimonials,
} from "./content";

const HERO_SLIDES = [
  {
    src: photos.hero,
    alt: photoAlt.hero,
    eyebrow: "Youth Opportunities South Africa · Since 2016",
    title: "Empowering Young People, Strengthening Communities",
    lead: "We walk alongside learners in under-resourced South African schools with academic support, life skills, and community care.",
  },
  {
    src: "/photos/programme-learning.jpg",
    alt: "YOSA learners engaged in classroom learning support",
    eyebrow: "Learning Support · After-School & Digital Labs",
    title: "Building Confidence in Every Classroom",
    lead: "From literacy and numeracy to digital labs and career pathways, we help learners stay in school and thrive.",
  },
  {
    src: "/photos/programme-community.jpg",
    alt: "YOSA community outreach with learners and families",
    eyebrow: "Community Outreach · Families & Schools",
    title: "Lasting Change Starts Around the Child",
    lead: "We partner with families, schools, and local leaders to create safe, supportive environments for young people.",
  },
];

const FEATURE_STRIP = [
  { icon: "book" as const, title: "Learning Support", sub: "Tutoring, literacy & digital labs" },
  { icon: "heart" as const, title: "Life Skills & Care", sub: "Psychosocial & health education" },
  { icon: "users" as const, title: "Community Outreach", sub: "Families & child-headed homes" },
  { icon: "cap" as const, title: "Career Pathways", sub: "160+ university acceptances" },
];

export default function Home() {
  const hasPdf = fs.existsSync(path.join(process.cwd(), "public", "YOSA-Partner-Brief.pdf"));

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />

      <main id="main">
        {/* 1. Charitics-style Hero Slider */}
        <HeroSlider slides={HERO_SLIDES} donateUrl={site.donateUrl} />

        {/* 2. 4-Column Feature Strip */}
        <section className="ch-strip" aria-label="Core focus areas">
          <div className="ch-wrap ch-strip-grid">
            {FEATURE_STRIP.map((f) => (
              <div key={f.title} className="ch-strip-card">
                <div className="ch-strip-icon">
                  <Icon name={f.icon} size={24} />
                </div>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. About Us Split Section (Exact Charitics Heart-Collage Design) */}
        <section id="about" className="ch-sec ch-about-v2">
          <div className="ch-wrap ch-about-grid">
            <Reveal className="ch-about-media">
              <div className="ch-heart-collage">
                <svg viewBox="0 0 520 480" className="ch-heart-svg" role="img" aria-label={photoAlt.team}>
                  <defs>
                    <clipPath id="yosa-heart-clip">
                      <path d="M260,452 C260,452 24,310 24,158 C24,78 86,20 162,20 C208,20 244,44 260,78 C276,44 312,20 358,20 C434,20 496,78 496,158 C496,310 260,452 260,452 Z" />
                    </clipPath>
                  </defs>

                  {/* Soft peach splash behind bottom-left */}
                  <ellipse cx="110" cy="360" rx="95" ry="62" transform="rotate(-24 110 360)" fill="#f8b49b" opacity="0.55" />

                  {/* Main heart-clipped YOSA photo */}
                  <image
                    href={photos.team}
                    x="0"
                    y="0"
                    width="520"
                    height="480"
                    preserveAspectRatio="xMidYMid slice"
                    clipPath="url(#yosa-heart-clip)"
                  />
                </svg>

                {/* Circular inset photo placed outside the heart (top-left) */}
                <div className="ch-heart-inset">
                  <Image
                    src="/photos/library/img-1384.jpg"
                    alt="YOSA learners"
                    width={136}
                    height={136}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>

                {/* 10+ Years Of Impact badge placed outside the heart (bottom-right) */}
                <div className="ch-heart-badge">
                  <strong>10+</strong>
                  <span>Years Of Impact</span>
                </div>
              </div>
            </Reveal>

            <Reveal className="ch-about-copy" delay={80}>
              <span className="ch-eyebrow">♥ About US</span>
              <h2>Helping Each Other Can Make World Better</h2>
              <p>
                Youth Opportunities South Africa (YOSA) is a registered non-profit organisation working directly inside under-resourced schools and communities. We combine academic support, psychosocial care, and family partnership so young people can stay in school and thrive.
              </p>

              <div className="ch-about-team-row">
                <div>
                  <div className="ch-team-title">
                    <span className="ch-team-icon">
                      <Icon name="users" size={20} />
                    </span>
                    <strong>Start Helping Team</strong>
                  </div>
                  <div className="ch-team-check">
                    <Icon name="check" size={15} /> Supporting 7,000+ learners across 10 schools
                  </div>
                </div>
                <div className="ch-team-pill-img">
                  <Image
                    src="/photos/library/img-1593.jpg"
                    alt="YOSA facilitators and learners"
                    width={220}
                    height={64}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </div>

              <div className="ch-about-actions">
                <a className="ch-btn ch-btn-primary" href="#programmes">
                  Explore More <Icon name="arrow" size={16} />
                </a>
                <a className="ch-call-pill" href={`tel:${site.phone.replace(/\s+/g, "")}`}>
                  <span className="ch-call-icon">
                    <Icon name="mail" size={18} />
                  </span>
                  <span>
                    <small>Call Any Time</small>
                    <strong>{site.phone}</strong>
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 5. What We Do — Highly Visual Charitics Causes Cards */}
        <section id="programmes" className="ch-sec ch-bg-soft">
          <div className="ch-wrap">
            <div className="ch-causes-head">
              <div>
                <span className="ch-eyebrow">♥ What We Do</span>
                <h2>Inspiring and Helping for Better Futures</h2>
              </div>
              <div className="ch-avatar-stack ch-avatar-dark">
                <div className="ch-avatars">
                  <Image src="/photos/library/img-1384.jpg" alt="" width={40} height={40} />
                  <Image src="/photos/library/img-1388.jpg" alt="" width={40} height={40} />
                  <Image src="/photos/library/img-1390.jpg" alt="" width={40} height={40} />
                </div>
                <div>
                  <strong>7,000+</strong>
                  <span>Learners Reached</span>
                </div>
              </div>
            </div>

            <div className="ch-prog-grid">
              {pillars.map((p, idx) => {
                const progImg =
                  p.key === "learning"
                    ? "/photos/programme-learning.jpg"
                    : p.key === "life"
                    ? "/photos/programme-life-skills.jpg"
                    : "/photos/programme-community.jpg";
                return (
                  <Reveal key={p.key} className="ch-prog-card" delay={idx * 70}>
                    <div className="ch-prog-img">
                      <Image
                        src={progImg}
                        alt={p.title}
                        width={800}
                        height={540}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                      <span className="ch-prog-badge">{p.label}</span>
                    </div>
                    <div className="ch-prog-body">
                      <div className="ch-prog-meter">
                        <div className="ch-meter-bar">
                          <span style={{ width: idx === 0 ? "92%" : idx === 1 ? "88%" : "85%" }} />
                        </div>
                        <div className="ch-meter-meta">
                          <span>Active in 10 Schools</span>
                          <strong>Pillar 0{idx + 1}</strong>
                        </div>
                      </div>
                      <h3>{p.title}</h3>
                      <p>{p.intro}</p>
                      <ul className="ch-prog-items" aria-label={`${p.title} components`}>
                        {p.fns.map(([fnTitle, fnDesc]) => (
                          <li key={fnTitle}>
                            <strong>{fnTitle}:</strong> {fnDesc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5b. Custom Donate Now Split Banner + 2x2 Stat Grid (Charitics index.html) */}
        <section className="ch-donate-split">
          <div className="ch-wrap ch-donate-split-grid">
            <Reveal className="ch-donate-box">
              <span className="ch-eyebrow ch-eyebrow-light">♥ Custom Donate Now</span>
              <h3>Support a Learner Today</h3>
              <GiftWidget donateUrl={site.donateUrl} />
            </Reveal>

            <Reveal className="ch-donate-stats" delay={80}>
              <span className="ch-eyebrow ch-eyebrow-light">Donate Now</span>
              <h2>Support Learners by Raising Valuable Donations</h2>
              <div className="ch-stat-2x2">
                {reach.items.slice(0, 4).map((r) => (
                  <div key={r.l} className="ch-stat-tile">
                    <strong>
                      <Counter to={r.n} suffix={r.suffix} />
                    </strong>
                    <span>{r.l}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 6. Community Transformation Approach + Bullseye + Delivery */}
        <section id="approach" className="ch-sec ch-bg-soft">
          <div className="ch-wrap ch-approach-grid">
            <Reveal className="ch-approach-copy">
              <span className="ch-eyebrow">How We Work</span>
              <h2>Community Transformation Around the Young Person</h2>
              <p>
                Lasting change happens when the systems around a learner work together. Our model places young people at the centre, surrounded by families, schools, and the wider community.
              </p>

              <div className="ch-pyd-list">
                {pyd.map((item, idx) => (
                  <div key={item.key} className="ch-pyd-row ch-pyd-visual">
                    <div className="ch-pyd-icon">
                      <Icon name={idx === 0 ? "book" : "heart"} size={22} />
                    </div>
                    <div>
                      <strong>{item.label}</strong>
                      <div className="ch-pyd-tags">
                        {item.items.map((sub) => (
                          <span key={sub} className="ch-pyd-tag">
                            {sub}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="ch-bullseye-wrap" delay={90}>
              <svg
                viewBox="0 0 420 420"
                className="ch-bullseye"
                role="img"
                aria-label="Community transformation model: Young people at the centre, surrounded by Families, Schools, and Community"
              >
                <circle cx="210" cy="210" r="196" fill="#ffffff" stroke="#e4e0d6" strokeWidth="1.5" />
                <circle cx="210" cy="210" r="148" fill="#fdf6f2" stroke="#f0c8b8" strokeWidth="1.5" />
                <circle cx="210" cy="210" r="100" fill="#fbe8df" stroke="#e8a48a" strokeWidth="1.5" />
                <circle cx="210" cy="210" r="54" fill="#eb5310" />
                <text x="210" y="34" textAnchor="middle" className="ch-ring-lbl">
                  COMMUNITY
                </text>
                <text x="210" y="82" textAnchor="middle" className="ch-ring-lbl">
                  SCHOOLS
                </text>
                <text x="210" y="130" textAnchor="middle" className="ch-ring-lbl">
                  FAMILIES
                </text>
                <text x="210" y="206" textAnchor="middle" className="ch-ring-core">
                  YOUNG
                </text>
                <text x="210" y="224" textAnchor="middle" className="ch-ring-core">
                  PEOPLE
                </text>
              </svg>
            </Reveal>
          </div>

          <div className="ch-wrap ch-factors-wrap">
            <div className="ch-factors-grid">
              {factors.map((f) => (
                <div key={f} className="ch-factor-card">
                  <h3>{f}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6b. Dual Action Cards (Moved below How We Work) */}
        <section className="ch-sec ch-dual-sec">
          <div className="ch-wrap ch-dual-grid">
            <Reveal className="ch-dual-card ch-dual-light">
              <span className="ch-eyebrow">Get Involved</span>
              <h2>Partner With YOSA</h2>
              <p>
                Every contribution strengthens our after-school learning labs, psychosocial care, and family support across partner schools.
              </p>
              <ul className="ch-check-list">
                <li>
                  <Icon name="check" size={16} /> Fund a learner&apos;s annual learning &amp; life-skills kit
                </li>
                <li>
                  <Icon name="check" size={16} /> Sponsor digital lab equipment or transport
                </li>
                <li>
                  <Icon name="check" size={16} /> Mentor learners into tertiary &amp; career pathways
                </li>
              </ul>
              <a className="ch-btn ch-btn-dark" href="#contact">
                Become a Partner <Icon name="arrow" size={16} />
              </a>
            </Reveal>

            <Reveal className="ch-dual-card ch-dual-accent" delay={90}>
              <span className="ch-eyebrow ch-eyebrow-light">Direct Support</span>
              <h2>Send a Gift For Learners</h2>
              <p>
                Choose an amount to support tutoring, counselling, and daily care for learners in under-resourced communities.
              </p>
              <GiftWidget donateUrl={site.donateUrl} />
            </Reveal>
          </div>
        </section>

        {/* 7. Impact & Measurement */}
        <section id="impact" className="ch-sec">
          <div className="ch-wrap ch-impact-grid">
            <Reveal className="ch-impact-copy">
              <span className="ch-eyebrow">Measurable Impact</span>
              <h2>Real Outcomes Across Partner Schools</h2>
              <p className="ch-impact-source">{impactSource}</p>

              <div className="ch-impact-stats">
                {impact.map((row) => (
                  <div key={row.label} className="ch-impact-card">
                    <div className="ch-impact-num">
                      {"from" in row && row.from !== undefined && row.to !== undefined ? (
                        <>
                          <Counter to={Number(row.from)} /> <em>→</em> <Counter to={Number(row.to)} />
                        </>
                      ) : "n" in row && row.n !== undefined ? (
                        <Counter to={Number(row.n)} suffix={row.suffix} />
                      ) : (
                        <span>{row.text}</span>
                      )}
                    </div>
                    <div className="ch-impact-label">{row.label}</div>
                    {row.note && <div className="ch-impact-note">{row.note}</div>}
                  </div>
                ))}
              </div>

              <div className="ch-measure-grid">
                {measure.map((m, i) => (
                  <div key={m} className="ch-measure-step">
                    <span className="ch-step-num">0{i + 1}</span>
                    <h4>{m}</h4>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="ch-impact-media" delay={90}>
              <Image
                src={photos.impact}
                alt={photoAlt.impact}
                width={800}
                height={1000}
                style={{ width: "100%", height: "auto", borderRadius: "20px", objectFit: "cover" }}
              />
            </Reveal>
          </div>
        </section>

        {/* 8. Full-Width CTA Banner */}
        <section className="ch-cta-banner">
          <div className="ch-wrap ch-cta-inner">
            <div>
              <span className="ch-eyebrow ch-eyebrow-light">Start Supporting Young People</span>
              <h2>Learners Need Your Partnership Today</h2>
            </div>
            <a className="ch-btn ch-btn-primary" href="#contact">
              Get In Touch <Icon name="arrow" size={16} />
            </a>
          </div>
        </section>

        {/* 9. Testimonials (What People Say About Us) */}
        <section className="ch-sec ch-bg-soft">
          <div className="ch-wrap ch-test-layout">
            <div className="ch-test-summary">
              <span className="ch-eyebrow">In Their Words</span>
              <h2>What People Say About Us</h2>
              <p>Voices from school leadership, our founder, and community partners.</p>
              <div className="ch-rating-box">
                <strong>10+</strong>
                <span>Partner Schools</span>
              </div>
              <blockquote className="ch-pull-quote">
                &ldquo;{testimonials[0].quote}&rdquo;
                <footer>— {testimonials[0].by}</footer>
              </blockquote>
            </div>

            <div className="ch-test-cards">
              {testimonials.map((t, i) => (
                <Reveal key={i} className={`ch-test-card ${t.pending ? "is-pending" : ""}`} delay={i * 60}>
                  <div className="ch-test-top">
                    <span className="ch-stars" aria-label="5 out of 5 stars">★★★★★</span>
                    <span className="ch-quote-mark" aria-hidden="true">&ldquo;</span>
                  </div>
                  <p className="ch-test-quote">&ldquo;{t.quote}&rdquo;</p>
                  <div className="ch-test-author">
                    <div className="ch-avatar ch-avatar-ring">
                      {!t.pending && t.by ? <span>{t.by.slice(0, 2).toUpperCase()}</span> : null}
                    </div>
                    <div>
                      <strong>{t.by}</strong>
                      <span>{t.role}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Contact Us Split Section */}
        <section id="contact" className="ch-sec ch-contact-sec">
          <div className="ch-wrap ch-contact-grid">
            <Reveal className="ch-contact-media">
              <Image
                src={photos.careers}
                alt={photoAlt.careers}
                width={900}
                height={760}
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "20px" }}
              />
            </Reveal>

            <Reveal className="ch-contact-form-wrap" delay={80}>
              <span className="ch-eyebrow">Contact Us</span>
              <h2>Send Us a Message or Partner Enquiry</h2>
              <p>
                Whether you represent a school, a funding partner, or want to volunteer, our team in South Africa will respond directly.
              </p>
              <EnquiryForm email={site.email} />
            </Reveal>
          </div>
        </section>

        {/* 11. Resources & 35-Photo Gallery */}
        <section id="photographs" className="ch-sec ch-bg-soft">
          <div className="ch-wrap">
            <div className="ch-sec-head">
              <span className="ch-eyebrow">Resources &amp; Archive</span>
              <h2>Reports, Newsletters &amp; Field Photographs ({gallery.items.length})</h2>
              <p>{gallery.lead}</p>
            </div>

            <div className="ch-res-grid">
              {resources.groups.map((r) => (
                <a key={r.title} href={r.href} target="_blank" rel="noopener noreferrer" className="ch-res-card">
                  <span className="ch-res-tag">{r.meta}</span>
                  <h3>{r.title}</h3>
                  <p>{r.desc}</p>
                  <span className="ch-res-link">
                    {r.cta} <Icon name="arrow" size={14} />
                  </span>
                </a>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: "8px" }}>
              <a className="ch-btn ch-btn-primary" href="/gallery">
                View All {gallery.items.length} Field Photographs <Icon name="arrow" size={16} />
              </a>
            </div>

            <div className="ch-partner-ways">
              {partnerWays.map(([wTitle, wBody]) => (
                <div key={wTitle} className="ch-way-pill">
                  <strong>{wTitle}</strong>
                  <span>{wBody}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="ch-footer">
        <div className="ch-wrap ch-footer-grid">
          <div className="ch-footer-brand">
            <img src="/brand/yosa-logo-white.svg" alt="YOSA" height={42} />
            <p>
              Youth Opportunities South Africa — empowering learners in under-resourced schools through education, life skills, and community care.
            </p>
            <Socials items={site.social} />
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul className="ch-foot-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#programmes">Programmes</a></li>
              <li><a href="#approach">Our Approach</a></li>
              <li><a href="#impact">Impact</a></li>
              <li><a href="#photographs">Photographs</a></li>
              {hasPdf && (
                <li>
                  <a href="/YOSA-Partner-Brief.pdf" download>
                    Partner Brief (PDF)
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul className="ch-foot-links">
              <li>{site.phone}</li>
              <li>{site.email}</li>
              <li>{site.address}</li>
              <li>Reg: {site.reg}</li>
            </ul>
          </div>
        </div>

        <div className="ch-wrap ch-footer-bottom">
          <span>© {new Date().getFullYear()} Youth Opportunities South Africa (YOSA). All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
