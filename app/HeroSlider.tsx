"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "./icons";

type Slide = {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  lead: string;
};

export function HeroSlider({ slides, donateUrl }: { slides: Slide[]; donateUrl: string }) {
  const [idx, setIdx] = useState(0);
  const current = slides[idx];

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="ch-hero" aria-label="Featured YOSA programmes">
      <div className="ch-hero-bg">
        <div
          className="ch-hero-track"
          style={{ transform: `translateX(-${idx * 100}%)` }}
        >
          {slides.map((s, i) => (
            <div key={s.src} className="ch-hero-slide">
              <Image
                src={s.src}
                alt={s.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                style={{ objectFit: "cover", objectPosition: "center 30%" }}
              />
            </div>
          ))}
        </div>
        <div className="ch-hero-scrim" />
      </div>

      <div className="ch-wrap ch-hero-inner">
        <div className="ch-hero-copy">
          <span className="ch-eyebrow ch-eyebrow-light">{current.eyebrow}</span>
          <h1>{current.title}</h1>
          <p>{current.lead}</p>
          <div className="ch-hero-actions">
            <a className="ch-btn ch-btn-primary" href={donateUrl}>
              Donate Now <Icon name="arrow" size={16} />
            </a>
            <a className="ch-btn ch-btn-outline-light" href="#contact">
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
