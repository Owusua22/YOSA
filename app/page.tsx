import fs from "fs";
import path from "path";
import Image from "next/image";
import {
  site,
  photos,
  photoAlt,
  gallery,
  reach,
  impact,
  impactSource,
  measure,
  pyd,
  factors,
  pillars,
  partnerWays,
  testimonials,
  resources,
} from "./content";
import EnquiryForm from "./EnquiryForm";
import Header from "./Header";
import { Icon, Socials } from "./icons";
import { Reveal, Counter } from "./fx";

const SectionHead = ({ index, title, lead }: { index: string; title: string; lead?: string }) => (
  <Reveal className="secHead">
    <div>
      <p className="meta">{index}</p>
      <h2>{title}</h2>
    </div>
    {lead && <p className="lead">{lead}</p>}
  </Reveal>
);

const ext = site.donateUrl.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};
const initials = (name: string) =>
  name
    .replace(/^(Dr|Mr|Mrs|Ms|Prof)\.?\s+/i, "")
    .split(/[\s,]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");

export default function Home() {
  const hasPdf = fs.existsSync(path.join(process.cwd(), "public", site.pdf));
  const Pdf = ({ cls }: { cls: string }) => hasPdf ? <a className={cls} href={site.pdf} download>Download the partner brief (PDF)</a> : null;

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      {process.env.NODE_ENV !== "production" && <p className="draft">Draft — wording, figures and two testimonials await YOSA approval.</p>}
      <Header social={site.social} donateUrl={site.donateUrl} />

      <main id="main">
        {/* ————— Hero ————— */}
        <section id="top" className="hero">
          <figure className="heroFig">
            <Image src={photos.hero} alt={photoAlt.hero} fill priority sizes="100vw" />
          </figure>
          <div className="wrap heroBody">
            <div className="heroGrid">
              <Reveal>
                <p className="meta">Youth Opportunities South Africa · Soweto</p>
                <h1>
                  Empowering the future of South Africa
                  <span>Unlocking the potential of South African youth</span>
                </h1>
              </Reveal>
              <Reveal delay={120} className="heroAside">
                <p>We work inside Soweto schools, where change can be measured, supported and sustained — through learning support, psychosocial services and digital innovation.</p>
                <div className="actions">
                  <a className="btn" href="#get-in-touch">Partner with YOSA</a>
                  <a className="link" href={site.donateUrl} {...ext}>Donate<Icon name="arrow" size={16} /></a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ————— Reach ————— */}
        <section className="reach" aria-label="YOSA reach in numbers">
          <div className="wrap">
            <div className="metrics">
              {reach.items.map((r) => (
                <div className="metric" key={r.l}>
                  <b><Counter to={r.n} suffix={r.suffix} /></b>
                  <span>{r.l}</span>
                </div>
              ))}
            </div>
            <p className="fine">{reach.note}</p>
          </div>
        </section>

        {/* ————— About ————— */}
        <section id="about" className="rule">
          <div className="wrap split">
            <Reveal>
              <p className="meta">01 — About</p>
              <h2>Creating ripples of impact that transform communities</h2>
              <p>YOSA delivers sustained, measurable improvements in learner wellbeing and academic performance across participating Soweto schools.</p>
              <p>In communities facing high levels of teenage pregnancy, substance abuse and school dropout, we provide structured, evidence-based intervention directly within the school environment, where change can be measured, supported and sustained. Through integrated academic support, in-school psychosocial services and digital innovation, we strengthen learners, families, educators and entire school ecosystems.</p>
              <p className="marked"><Icon name="check" size={16} /> Recognised by the Department of Education</p>
            </Reveal>
            <Reveal delay={120}>
              <figure className="fig">
                <Image src={photos.careers} alt={photoAlt.careers} width={1400} height={1400} sizes="(max-width: 860px) 100vw, 30rem" />
                <figcaption>YOSA learners on an exposure visit beyond the classroom.</figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* ————— What we do ————— */}
        <section id="programmes" className="rule">
          <div className="wrap">
            <SectionHead
              index="02 — Programmes"
              title="What we do"
              lead="One Positive Youth Development programme, delivered in three areas. Component lists are descriptive, not links; each area opens in conversation with the school."
            />
            <div className="areas">
              {pyd.map((p, i) => (
                <Reveal key={p.key} delay={i * 90} className="area">
                  <p className="meta">{String(i + 1).padStart(2, "0")}</p>
                  <h3>{p.label}</h3>
                  <ul>{p.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ————— Approach ————— */}
        <section id="approach" className="rule">
          <div className="wrap split splitTop">
            <Reveal>
              <p className="meta">03 — Approach</p>
              <h2>How we create community transformation</h2>
              <p>Our programmes are rooted in the internationally recognised Positive Youth Development framework, strengthening six core protective factors. By building these capacities within schools, we reduce high-risk behaviours while improving academic resilience, emotional stability and long-term life outcomes.</p>
              <ul className="factors">
                {factors.map((f) => <li key={f}>{f}</li>)}
              </ul>
            </Reveal>
            <Reveal delay={120} className="modelWrap">
              <svg className="model" viewBox="0 0 420 420" role="img" aria-label="Young people at the centre, surrounded by families, then schools, then the wider community">
                <g fill="none" stroke="var(--line)" strokeWidth="1">
                  <circle cx="210" cy="210" r="196" />
                  <circle cx="210" cy="210" r="148" />
                  <circle cx="210" cy="210" r="100" />
                </g>
                <circle cx="210" cy="210" r="52" fill="var(--ink)" />
                <g fill="var(--ink)" fontSize="11" fontWeight="500" letterSpacing="1.6" textAnchor="middle">
                  <text x="210" y="34">COMMUNITY</text>
                  <text x="210" y="82">SCHOOLS</text>
                  <text x="210" y="130">FAMILIES</text>
                </g>
                <g fill="#fbfaf7" fontSize="12" fontWeight="500" textAnchor="middle">
                  <text x="210" y="206">YOUNG</text>
                  <text x="210" y="222">PEOPLE</text>
                </g>
              </svg>
            </Reveal>
          </div>
        </section>

        {/* ————— Model ————— */}
        <section id="model" className="rule">
          <div className="wrap">
            <SectionHead
              index="04 — Delivery"
              title="Our model in action"
              lead="Three embedded pillars, delivered by trained facilitators with consistent programming and rigorous measurement."
            />
            <div className="rows">
              {pillars.map((p, i) => (
                <Reveal key={p.key} delay={i * 60} className="row">
                  <div className="rowLead">
                    <p className="meta">{String(i + 1).padStart(2, "0")} — {p.label}</p>
                    <h3>{p.title}</h3>
                    <p>{p.intro}</p>
                  </div>
                  <div className="rowBody">
                    <div className="fns">
                      {p.fns.map(([t, d]) => (
                        <div className="fn" key={t}>
                          <b>{t}</b>
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                    <p className="why"><strong>Why this matters.</strong> {p.why}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ————— Impact ————— */}
        <section id="impact" className="rule">
          <div className="wrap">
            <SectionHead
              index="05 — Impact"
              title="Measured impact. Proven change."
              lead="Change tracked across participating partner schools."
            />
            <div className="impactGrid">
              <div className="stats">
                {impact.map((s) => (
                  <Reveal key={s.label} className="stat">
                    <p className="num">
                      {s.text ?? (s.from !== undefined
                        ? <><Counter to={s.from} /><em>→</em><Counter to={s.to!} /></>
                        : <><Counter to={s.num!} /><em>{s.suffix}</em></>)}
                    </p>
                    <div>
                      <h3>{s.label}</h3>
                      {s.from !== undefined && s.to !== undefined && <p className="years">{s.fromYear} — {s.toYear}</p>}
                      <p>{s.note}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={120}>
                <figure className="fig figTall">
                  <Image src={photos.impact} alt={photoAlt.impact} width={1000} height={1250} sizes="(max-width: 900px) 100vw, 22rem" />
                </figure>
              </Reveal>
            </div>
            <div className="measure">
              <p className="meta">How we measure</p>
              <ol className="steps">{measure.map((m) => <li key={m}>{m}</li>)}</ol>
            </div>
            <p className="note">{impactSource}</p>
            <div className="actions"><a className="link" href="#resources">Reports and publications<Icon name="arrow" size={16} /></a></div>
          </div>
        </section>

        {/* ————— Testimonials ————— */}
        <section id="testimonials" className="rule">
          <div className="wrap">
            <SectionHead index="06 — In their words" title="The people closest to the work" />
            <div className="quotes">
              {testimonials.map((t, i) => (
                <Reveal key={t.by ?? `pending-${i}`} delay={i * 80} className="quote">
                  {t.pending ? (
                    <>
                      <p className="quoteText muted">Reserved for a contributor testimonial.</p>
                      <div className="byline">
                        <span className="avatar" aria-hidden="true" />
                        <div><b>{t.role}</b><span>Quote and portrait to be supplied by the YOSA team.</span></div>
                      </div>
                    </>
                  ) : (
                    <>
                      <blockquote className="quoteText">“{t.quote}”</blockquote>
                      <div className="byline">
                        {t.photo
                          ? <Image className="avatar" src={t.photo} alt={`Portrait of ${t.by}`} width={80} height={80} />
                          : <span className="avatar" aria-hidden="true">{initials(t.by!)}</span>}
                        <div><b>{t.by}</b><span>{t.role}</span></div>
                      </div>
                    </>
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ————— Photographs ————— */}
        <section id="photographs" className="rule">
          <div className="wrap">
            <SectionHead
              index={`07 — Photographs (${gallery.items.length})`}
              title={gallery.title}
              lead={gallery.lead}
            />
            <div className="gallery">
              {gallery.items.map((img, i) => (
                <figure key={img.src + i}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={1200}
                    height={900}
                    sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 33vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </figure>
              ))}
            </div>
            <p className="fine">Photographs supplied by YOSA. The archive includes near-identical frames from the same events; duplicates are retained so no image is lost.</p>
          </div>
        </section>

        {/* ————— Resources ————— */}
        <section id="resources" className="rule">
          <div className="wrap">
            <SectionHead index="08 — Resources" title="Reports, newsletters and gallery" lead={resources.intro} />
            <div className="split splitTop">
              <div>
                <ul className="plain">
                  {resources.inside.map((r) => <li key={r}>{r}</li>)}
                </ul>
                <p className="note">{resources.note}</p>
              </div>
              <div className="rows tight">
                {resources.groups.map((g) => (
                  <a className="rowLink" key={g.key} href={g.href} target="_blank" rel="noopener noreferrer">
                    <span>
                      <b>{g.title}</b>
                      <em>{g.meta}</em>
                    </span>
                    <Icon name="arrow" size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ————— Support ————— */}
        <section id="get-involved" className="rule">
          <div className="wrap">
            <SectionHead
              index="09 — Support"
              title="Help us reach the next school"
              lead="Real schools. Real change. Your organisation can help create more opportunities for young people."
            />
            <figure className="fig figWide">
              <Image src={photos.team} alt={photoAlt.team} width={1200} height={800} sizes="100vw" />
              <figcaption>YOSA’s team and partners with learners at a partner school in Soweto.</figcaption>
            </figure>
            <ol className="ways">
              {partnerWays.map(([t, d], i) => (
                <Reveal key={t} delay={i * 60} className="way">
                  <span className="meta">{String(i + 1).padStart(2, "0")}</span>
                  <div><h3>{t}</h3><p>{d}</p></div>
                </Reveal>
              ))}
            </ol>
            <div className="actions">
              <a className="btn" href="#get-in-touch">Start a conversation</a>
              <Pdf cls="link" />
            </div>
          </div>
        </section>

        {/* ————— Contact ————— */}
        <section id="get-in-touch" className="ink">
          <div className="wrap">
            <div className="secHead">
              <div>
                <p className="meta">10 — Contact</p>
                <h2>Start a partnership conversation</h2>
              </div>
              <p className="lead">Whether your organisation can contribute funding, skills, technology, transport or pathways into work, we would welcome a conversation about what we could achieve together.</p>
            </div>
            <div className="contactGrid">
              <EnquiryForm email={site.email} />
              <div className="contactInfo">
                <p className="meta">Visit</p>
                <p>{site.address}</p>
                <p className="meta">Contact</p>
                <p><a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a><br /><a href={`mailto:${site.email}`}>{site.email}</a></p>
                <Socials items={site.social} className="soc" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="foot ink">
        <div className="wrap footIn">
          <Image className="footLogo" src="/brand/yosa-logo-white.svg" alt="YOSA — Youth Opportunities South Africa" width={549} height={327} />
          <div className="footLinks">
            <a href={site.links.board} target="_blank" rel="noopener noreferrer">Board of Governors</a>
            <a href={site.links.privacy} target="_blank" rel="noopener noreferrer">Data privacy</a>
            <a href="#resources">Resources</a>
          </div>
          <p className="fine">Registration number {site.reg}<br />© 2026 Youth Opportunities South Africa</p>
        </div>
      </footer>
    </>
  );
}
