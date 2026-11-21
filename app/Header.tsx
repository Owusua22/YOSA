"use client";
import { useState } from "react";
import { site } from "./content";

const NAV = [
  { href: "/#about", label: "About" },
  { href: "/#programmes", label: "Programmes" },
  { href: "/#approach", label: "Approach" },
  { href: "/#impact", label: "Impact" },
  { href: "/gallery", label: "Photographs" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="ch-header">
      <div className="ch-wrap ch-header-inner">
        <a href="#" className="ch-logo" aria-label="YOSA Home">
          <img src="/brand/yosa-wordmark.svg" alt="YOSA — Youth Opportunities South Africa" height={34} />
        </a>

        <nav className="ch-nav" aria-label="Primary">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>

        <div className="ch-header-actions">
          <a className="ch-btn ch-btn-primary ch-btn-sm" href={site.donateUrl}>
            Donate Now
          </a>
          <button
            type="button"
            className="ch-burger"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="ch-mobile-menu">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
          <a className="ch-btn ch-btn-primary" href={site.donateUrl} onClick={() => setOpen(false)}>
            Donate Now
          </a>
        </div>
      )}
    </header>
  );
}
