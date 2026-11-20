import fs from "fs";
import path from "path";
import Image from "next/image";
import {
  site,
  photos,
  photoAlt,
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
import { Reveal, Counter, Tabs, PageFx } from "./fx";

const Head = ({ title, lead }: { title: string; lead?: string }) => (
  <Reveal className="head"><h2>{title}</h2>{lead && <p>{lead}</p>}</Reveal>
);
const ext = site.donateUrl.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};
const Donate = () => <a className="btn" href={site.donateUrl} {...ext}><Icon name="heart" size={20} />Donate</a>;
const Partner = ({ cls = "btn ghost" }: { cls?: string }) => <a className={cls} href="#get-in-touch">Partner with YOSA</a>;

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
  const Pdf = ({ cls }: { cls: string }) => hasPdf ? <a className={cls} href={site.pdf} download><Icon name="download" size={20} />Download partner brief (PDF)</a> : null;
  const pydTabs = pyd.map((p) => ({
    key: p.key,
    label: p.label,
    icon: p.icon,
    body: (
      <>
        <ul className="labels big">{p.items.map((i) => <li key={i}>{i}</li>)}</ul>
        <p className="legend"><Icon name="check" size={16} /> Programme components are listed as tags. Use the tabs above to move between pillars.</p>
      </>
    ),
  }));
  const pillarTabs = pillars.map((p) => ({ key: p.key, label: p.label, icon: p.icon, body: (
    <>
      <h3>{p.title}</h3><p>{p.intro}</p>
      <div className="cols">{p.fns.map(([t, d]) => <div className="fn" key={t}><b>{t}</b><span>{d}</span></div>)}</div>
      <div className="why"><p><strong>Why this matters.</strong> {p.why}</p></div>
    </>) }));
  const tiles = [
    { src: photos.learning, alt: photoAlt.learning, cap: "Learning support inside partner schools" },
    { src: photos.lifeSkills, alt: photoAlt.lifeSkills, cap: "Life skills, sport and creative arts" },
    { src: photos.community, alt: photoAlt.community, cap: "Practical support for families and children" },
  ];

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <PageFx />
      {process.env.NODE_ENV !== "production" && <p className="draft">Draft: wording, figures and two testimonials await YOSA approval.</p>}
      <Header social={site.social} donateUrl={site.donateUrl} />

      <main id="main">
        <section id="top" className="hero dark">
          <Image className="heroBg" src={photos.hero} alt={photoAlt.hero} fill priority sizes="100vw" />
          <div className="wrap heroText">
            <p className="eyebrow">Developing Young Change Agents. Creating Ripples of Impact.</p>
            <h1>Empowering the future of SA:<span> Unlocking the potential of South African Youth</span></h1>
            <div className="actions"><Donate /><Partner /></div>
          </div>
        </section>

        <section className="reachBand" aria-label="YOSA reach">
          <div className="wrap">
            {reach.items.map((r) => <div key={r.l}><span className="n"><Counter to={r.n} suffix={r.suffix} /></span><span className="l">{r.l}</span></div>)}
          </div>
        </section>

        <section id="intro" className="intro">
          <div className="wrap">
            <Head title="Unlocking the potential of South African Youth" lead="The future of South Africa is rooted in the potential of its youth. To unlock the potential of the next generation and build a brighter future for the country, it’s imperative that we invest in empowering them." />
            <div className="tiles">{tiles.map((t, i) => (
              <Reveal key={t.src} delay={i * 120}>
                <figure>
                  <Image src={t.src} alt={t.alt} width={1200} height={900} sizes="(max-width: 760px) 100vw, 22rem" />
                  <figcaption>{t.cap}</figcaption>
                </figure>
              </Reveal>
            ))}</div>
          </div>
        </section>

        <section id="about" className="aboutS alt">
          <div className="wrap">
            <Head title="Creating ripples of impact that transform communities" lead="YOSA delivers sustained, measurable improvements in learner wellbeing and academic performance across participating Soweto schools." />
            <div className="split aboutSplit">
              <Reveal>
                <p>In communities facing high levels of teenage pregnancy, substance abuse and school dropout, YOSA provides structured, evidence-based intervention directly within the school environment, where change can be measured, supported and sustained. Through integrated academic support, in-school psychosocial services and digital innovation, we strengthen learners, families, educators and entire school ecosystems.</p>
                <div className="actions"><span className="badge"><Icon name="check" size={20} />Recognised by the Department of Education</span></div>
              </Reveal>
              <Reveal delay={150}>
                <figure className="aboutFig">
                  <Image src={photos.careers} alt={photoAlt.careers} width={1400} height={1400} sizes="(max-width: 760px) 100vw, 26rem" />
                  <figcaption>YOSA learners on an exposure visit beyond the classroom.</figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="programmes">
          <div className="wrap">
            <Head title="What we do" lead="The YOSA Positive Youth Development programme brings learning support, life skills and community enrichment together. Choose a pillar to see what it includes." />
            <Reveal><Tabs id="pyd" tabs={pydTabs} /></Reveal>
          </div>
        </section>

        <section id="approach" className="alt">
          <div className="wrap split">
            <Reveal>
              <h2>How we create community transformation</h2>
              <p>YOSA’s programmes are rooted in the internationally recognised Positive Youth Development framework, strengthening six core protective factors. By building these capacities within schools, we reduce high-risk behaviours while improving academic resilience, emotional stability and long-term life outcomes.</p>
              <ul className="labels">{factors.map((f) => <li key={f}>{f}</li>)}</ul>
            </Reveal>
            <Reveal delay={150}>
              <svg className="model" viewBox="0 0 360 360" role="img" aria-label="Young people at the centre, surrounded by families, then schools, then the wider community">
                <circle cx="180" cy="180" r="170" fill="#fde7de" /><circle cx="180" cy="180" r="128" fill="#f9b9a0" />
                <circle cx="180" cy="180" r="86" fill="#F15822" /><circle cx="180" cy="180" r="46" fill="#1b1b1f" />
                <g textAnchor="middle" fontSize="15" fontWeight="700">
                  <text x="180" y="34" fill="#1b1b1f">Community</text>
                  <text x="180" y="76" fill="#1b1b1f">Schools</text>
                  <text x="180" y="118" fill="#1b1b1f">Families</text>
                  <text x="180" y="178" fill="#fff" fontSize="13">Young</text><text x="180" y="195" fill="#fff" fontSize="13">people</text>
                </g>
              </svg>
            </Reveal>
          </div>
        </section>

        <section id="model">
          <div className="wrap">
            <Head title="Our model in action" lead="Three embedded pillars, delivered by trained facilitators with consistent programming and rigorous measurement." />
            <Reveal><Tabs id="pillars" tabs={pillarTabs} /></Reveal>
          </div>
        </section>

        <section id="impact" className="alt">
          <div className="wrap">
            <Head title="Measured impact. Proven change." lead="Change tracked across participating partner schools." />
            <div className="impactGrid">
              <div className="stats">
                {impact.map((s, i) => (
                  <Reveal key={s.label} className="stat-card" delay={i * 90}>
                    <span className="ico"><Icon name={s.icon} size={26} /></span>
                    <p className="stat">{s.text ?? (s.from !== undefined ? <><Counter to={s.from} /> → <Counter to={s.to!} /></> : <Counter to={s.num!} suffix={s.suffix} />)}</p>
                    <h3>{s.label}</h3>
                    {s.from !== undefined && s.to !== undefined && (
                      <div className="viz" aria-hidden="true">
                        <div><span>{s.fromYear}</span><i style={{ ["--w" as string]: "100%" }} /><b>{s.from}</b></div>
                        <div><span>{s.toYear}</span><i className="lo" style={{ ["--w" as string]: `${Math.max((s.to / s.from) * 100, 4)}%` }} /><b>{s.to}</b></div>
                      </div>
                    )}
                    <p className="note">{s.note}</p>
                  </Reveal>
                ))}
              </div>
              <Reveal>
                <figure className="impactFig">
                  <Image className="impactPhoto" src={photos.impact} alt={photoAlt.impact} width={1000} height={1250} sizes="(max-width: 900px) 100vw, 24rem" />
                </figure>
              </Reveal>
            </div>
            <Reveal><h3 className="centerP">How we measure impact</h3>
              <ol className="steps">{measure.map((m) => <li key={m}>{m}</li>)}</ol></Reveal>
            <p className="note centerP">{impactSource}</p>
            <div className="actions center"><Donate /><a className="btn outline" href="#resources">Reports and publications</a></div>
          </div>
        </section>

        <section id="testimonials" className="quoteBand dark">
          <div className="wrap">
            <Head title="In their words" lead="The people closest to the programme — school leaders, families and young people — describe what changes." />
            <div className="tGrid">
              {testimonials.map((t, i) => t.pending ? (
                <Reveal key={`pending-${i}`} delay={i * 100}>
                  <article className="tCard tPending">
                    <span className="ico"><Icon name="chat" size={22} /></span>
                    <p className="tAwait">Space reserved for a contributor testimonial</p>
                    <div className="tBy">
                      <span className="tAvatar empty" aria-hidden="true"><Icon name="users" size={22} /></span>
                      <div><b>{t.role}</b><span>Quote and portrait to be supplied by the YOSA team.</span></div>
                    </div>
                  </article>
                </Reveal>
              ) : (
                <Reveal key={t.by} delay={i * 100}>
                  <article className="tCard">
                    <span className="ico"><Icon name="quote" size={22} /></span>
                    <blockquote className="q"><p>“{t.quote}”</p></blockquote>
                    <div className="tBy">
                      {t.photo
                        ? <Image className="tAvatar" src={t.photo} alt={`Portrait of ${t.by}`} width={80} height={80} />
                        : <span className="tAvatar mono" aria-hidden="true">{initials(t.by!)}</span>}
                      <div><b>{t.by}</b><span>{t.role}</span></div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="resources">
          <div className="wrap">
            <Head title="Reports, newsletters and gallery" lead={resources.intro} />
            <div className="resLayout">
              <Reveal>
                <div className="resSide">
                  <h3>One place for everything we publish</h3>
                  <ul className="labels">{resources.inside.map((r) => <li key={r}>{r}</li>)}</ul>
                  <p className="note">{resources.note}</p>
                </div>
              </Reveal>
              <div className="resGrid">
                {resources.groups.map((g, i) => (
                  <Reveal key={g.key} delay={i * 90}>
                    <article className="resCard">
                      <span className="ico"><Icon name={g.icon} size={22} /></span>
                      <h3>{g.title}</h3>
                      <p>{g.desc}</p>
                      <span className="resMeta">{g.meta}</span>
                      <a className="resLink" href={g.href} target="_blank" rel="noopener noreferrer">{g.cta}<Icon name="arrow" size={18} /></a>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="get-involved" className="alt">
          <div className="wrap">
            <Head title="Help us reach the next school" lead="Real schools. Real change. Your organisation can help create more opportunities for young people. Open an option to see how." />
            <Reveal>
              <figure className="teamFig">
                <Image src={photos.team} alt={photoAlt.team} width={1200} height={800} sizes="(max-width: 900px) 100vw, 60rem" />
                <figcaption>YOSA’s team and partners with learners at a partner school in Soweto.</figcaption>
              </figure>
            </Reveal>
            <Reveal><div className="acc">{partnerWays.map(([t, d], i) => <details key={t} name="ways" open={i === 0}><summary>{t}</summary><p>{d}</p></details>)}</div></Reveal>
            <div className="actions center"><Donate /><Pdf cls="btn outline" /></div>
          </div>
        </section>

        <section id="get-in-touch" className="dark">
          <div className="wrap">
            <Head title="Start a partnership conversation" lead="Whether your organisation can contribute funding, skills, technology, transport or pathways into work, we would welcome a conversation about what we could achieve together." />
            <div className="contactGrid">
              <Reveal><EnquiryForm email={site.email} /></Reveal>
              <Reveal delay={150}>
                <ul className="info">
                  <li><span className="ico"><Icon name="pin" size={20} /></span><span>{site.address}</span></li>
                  <li><span className="ico"><Icon name="phone" size={20} /></span><a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a></li>
                  <li><span className="ico"><Icon name="mail" size={20} /></span><a href={`mailto:${site.email}`}>{site.email}</a></li>
                </ul>
                <Socials items={site.social} className="soc" />
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="dark foot">
        <div className="wrap footin">
          <div>
            <Image className="footLogo" src="/brand/yosa-logo-white.svg" alt="YOSA – Youth Opportunities South Africa" width={549} height={327} />
            <p className="fine">Registration number {site.reg}<br />© 2026 Youth Opportunities South Africa. All rights reserved.</p>
          </div>
          <div className="footR">
            <Socials items={site.social} className="soc" />
            <a className="footLink" href={site.links.board} target="_blank" rel="noopener noreferrer">YOSA Board of Governors</a>
            <a className="footLink" href={site.links.privacy} target="_blank" rel="noopener noreferrer">Data privacy</a>
            <Pdf cls="footLink" />
          </div>
        </div>
      </footer>
    </>
  );
}
