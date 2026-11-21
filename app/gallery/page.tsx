import Image from "next/image";
import Link from "next/link";
import { Header } from "../Header";
import { Icon, Socials } from "../icons";
import { gallery, site } from "../content";

export const metadata = {
  title: "Field Photographs — YOSA",
  description: "Photographs of YOSA staff, learners, and community programmes across partner schools in South Africa.",
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="ch-donate-split" style={{ padding: "56px 0" }}>
          <div className="ch-wrap">
            <span className="ch-eyebrow ch-eyebrow-light">♥ Field Archive</span>
            <h1 style={{ margin: "0 0 12px", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              YOSA Photographs ({gallery.items.length})
            </h1>
            <p style={{ margin: "0 0 22px", maxWidth: "620px", color: "rgba(255,255,255,0.82)" }}>
              {gallery.lead}
            </p>
            <Link className="ch-btn ch-btn-outline-light" href="/">
              ← Back to Home
            </Link>
          </div>
        </section>

        <section className="ch-sec ch-bg-soft">
          <div className="ch-wrap">
            <div className="ch-gallery">
              {gallery.items.map((item) => (
                <figure key={item.src} className="ch-gallery-item">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={800}
                    height={600}
                    sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 33vw"
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>
      </main>

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
              <li><Link href="/#about">About Us</Link></li>
              <li><Link href="/#programmes">Programmes</Link></li>
              <li><Link href="/#approach">Our Approach</Link></li>
              <li><Link href="/#impact">Impact</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
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
