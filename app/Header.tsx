"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Icon, Socials } from "./icons";

const nav = [["About", "#about"], ["What we do", "#programmes"], ["Impact", "#impact"], ["Support", "#get-involved"]];
const util = [["Corporate partnerships", "#get-in-touch"], ["Impact", "#impact"], ["Contact", "#get-in-touch"]];

export default function Header({ social, donateUrl }: { social: { label: string; href: string }[]; donateUrl: string }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const wide = () => window.innerWidth > 860 && setOpen(false);
    window.addEventListener("keydown", esc); window.addEventListener("resize", wide);
    return () => { window.removeEventListener("keydown", esc); window.removeEventListener("resize", wide); };
  }, []);
  const close = () => setOpen(false);
  const ext = donateUrl.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <header className="site">
      <div className="util"><div className="wrap">
        <ul>{util.map(([l, h]) => <li key={l}><a href={h}>{l}</a></li>)}</ul>
        <Socials items={social} className="soc small" />
      </div></div>
      <div className="bar"><div className="wrap barin">
        <a className="logo" href="#top" onClick={close} aria-label="YOSA, Youth Opportunities South Africa – top of page">
          <Image src="/brand/yosa-wordmark.svg" alt="YOSA" width={549} height={280} priority />
        </a>
        <nav className="desk" aria-label="Main">{nav.map(([l, h]) => <a key={l} href={h}>{l}</a>)}</nav>
        <span className="tag">Youth Opportunities South Africa</span>
        <div className="rside">
          <a className="btn sm" href={donateUrl} {...ext}><Icon name="heart" size={18} />Donate</a>
          <button className="burger" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
            <span /><span /><span />
          </button>
        </div>
      </div>
      <nav id="mobile-menu" className={open ? "mob open" : "mob"} aria-label="Mobile">
        {nav.map(([l, h]) => <a key={l} href={h} onClick={close}>{l}</a>)}
        <hr />
        {util.map(([l, h]) => <a key={l} href={h} onClick={close} className="sub">{l}</a>)}
        <Socials items={social} className="soc" />
      </nav></div>
    </header>
  );
}
