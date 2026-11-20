"use client";
import { useState } from "react";
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

  const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIdx((i) => (i + 1) % slides.length);

  return (
    <section className="ch-hero" aria-label="Featured YOSA programmes">
      <div className="ch-hero-bg">
        <Image
          src={current.src}
          alt={current.alt}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
        />
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

        <div className="ch-hero-thumbs" aria-label="Slide controls">
          <button type="button" className="ch-thumb-arrow" onClick={prev} aria-label="Previous slide">
            ←
          </button>
          <div className="ch-thumb-list">
            {slides.map((s, i) => (
              <button
                key={s.src}
                type="button"
                className={`ch-thumb ${i === idx ? "active" : ""}`}
                onClick={() => setIdx(i)}
                aria-label={`Show slide ${i + 1}`}
              >
                <Image src={s.src} alt="" width={84} height={56} style={{ objectFit: "cover" }} />
              </button>
            ))}
          </div>
          <button type="button" className="ch-thumb-arrow" onClick={next} aria-label="Next slide">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
