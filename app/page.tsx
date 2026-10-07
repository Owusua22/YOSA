import fs from "fs";
import path from "path";
import Image from "next/image";
import { site, reach, impact, impactSource, measure, pyd, factors, pillars, partnerWays, quotes, reportItems } from "./content";
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

export default function Home() {
  const hasPdf = fs.existsSync(path.join(process.cwd(), "public", site.pdf));
  const tiles = [["tile-1", "Group of smiling children crowded together, some making peace signs"], ["tile-2", "Volunteers in yellow and orange YOSA shirts walking through a neighbourhood"], ["tile-3", "Volunteers unloading supplies from the back of a car"]];
  const Pdf = ({ cls }: { cls: string }) => hasPdf ? <a className={cls} href={site.pdf} download><Icon name="download" size={20} />Download partner brief (PDF)</a> : null;
  const pydTabs = pyd.map((p) => ({ key: p.key, label: p.label, icon: p.icon, body: <ul className="chips big">{p.items.map((i) => <li key={i}>{i}</li>)}</ul> }));
  const pillarTabs = pillars.map((p) => ({ key: p.key, label: p.label, icon: p.icon, body: (
    <>
      <h3>{p.title}</h3><p>{p.intro}</p>
      <div className="cols">{p.fns.map(([t, d]) => <div className="fn" key={t}><b>{t}</b><span>{d}</span></div>)}</div>
      <div className="why"><p><strong>Why this matters.</strong> {p.why}</p></div>
    </>) }));

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <PageFx />
      {process.env.NODE_ENV !== "production" && <p className="draft">Draft: wording and figures await YOSA approval.</p>}
      <Header social={site.social} donateUrl={site.donateUrl} />

      <main id="main">
        <section id="top" className="hero dark">
          <Image className="heroBg" src="/brand/hero.jpg" alt="" fill priority sizes="100vw" />
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
            <div className="tiles">{tiles.map(([f, a], i) => <Reveal key={f} delay={i * 120}><Image src={`/brand/${f}.jpg`} alt={a} width={635} height={359} sizes="(max-width: 760px) 100vw, 22rem" /></Reveal>)}</div>
          </div>
        </section>

        <section id="about" className="aboutS alt">
          <div className="wrap">
            <Head title="Creating ripples of impact that transform communities" lead="YOSA delivers sustained, measurable improvements in learner wellbeing and academic performance across participating Soweto schools." />
            <Reveal><p className="centerP">In communities facing high levels of teenage pregnancy, substance abuse and school dropout, YOSA provides structured, evidence-based intervention directly within the school environment, where change can be measured, supported and sustained. Through integrated academic support, in-school psychosocial services and digital innovation, we strengthen learners, families, educators and entire school ecosystems.</p></Reveal>
            <Reveal className="actions center"><span className="badge"><Icon name="check" size={20} />Recognised by the Department of Education</span></Reveal>
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
              <ul className="chips">{factors.map((f) => <li key={f}>{f}</li>)}</ul>
            </Reveal>
            <Reveal delay={150}>
              <svg className="model" viewBox="0 0 360 360" role="img" aria-label="Young people at the centre, surrounded by schools, then families, then the wider community">
                <circle cx="180" cy="180" r="170" fill="#fde7de" /><circle cx="180" cy="180" r="128" fill="#f9b9a0" />
                <circle cx="180" cy="180" r="86" fill="#F15822" /><circle cx="180" cy="180" r="46" fill="#1b1b1f" />
                <g textAnchor="middle" fontSize="15" fontWeight="700">
                  <text x="180" y="34" fill="#1b1b1f">Community</text><text x="180" y="76" fill="#1b1b1f">Families</text>
                  <text x="180" y="118" fill="#1b1b1f">Schools</text>
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
              <Reveal><Image className="impactPhoto" src="/brand/impact.jpg" alt="Smiling learner at a school desk with a stack of books" width={507} height={326} sizes="(max-width: 900px) 100vw, 24rem" /></Reveal>
            </div>
            <Reveal><h3 className="centerP">How we measure impact</h3>
              <ol className="steps">{measure.map((m) => <li key={m}>{m}</li>)}</ol></Reveal>
            <p className="note centerP">{impactSource}</p>
            <div className="actions center"><Donate /><a className="btn outline" href={site.links.reports} target="_blank" rel="noopener noreferrer">Read our reports</a></div>
          </div>
        </section>

        <section className="quoteBand dark">
          <div className="wrap quotes">
            {[quotes.principal, quotes.founder].map((q, i) => (
              <Reveal key={q.by} delay={i * 150}><blockquote className="q"><span className="ico"><Icon name="quote" size={24} /></span><p>“{q.text}”</p><cite>{q.by}</cite></blockquote></Reveal>
            ))}
          </div>
        </section>

        <section id="reports">
          <div className="wrap">
            <Head title="Reports and newsletters" lead="For funders and partners who want deeper visibility. YOSA provides structured documentation reflecting continuity of delivery, measurable outcomes and structured oversight." />
            <Reveal><ul className="reports">{reportItems.map((r) => <li key={r}><span className="ico"><Icon name="check" size={18} /></span>{r}</li>)}</ul></Reveal>
            <div className="actions center"><a className="btn outline" href={site.links.reports} target="_blank" rel="noopener noreferrer">Reports</a><a className="btn outline" href={site.links.newsletters} target="_blank" rel="noopener noreferrer">Monthly newsletter</a><a className="btn outline" href={site.links.gallery} target="_blank" rel="noopener noreferrer">Photo gallery</a></div>
          </div>
        </section>

        <section id="get-involved" className="alt">
          <div className="wrap">
            <Head title="Help us reach the next school" lead="Real schools. Real change. Your organisation can help create more opportunities for young people. Open an option to see how." />
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
