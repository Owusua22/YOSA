'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, X, ZoomIn } from 'lucide-react';
import { gallery, site } from '../content';

export default function GalleryPage() {
  const [active, setActive] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <header className="bg-ink text-white">
        <div className="wrap flex h-24 items-center justify-between gap-6">
          <Link href="/" className="rounded-b-[42%] bg-white px-6 pb-5 pt-5">
            <img src="/brand/yosa-wordmark.svg" alt="YOSA home" className="w-36" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-xs font-extrabold text-white transition hover:bg-orange/90"
          >
            <ArrowLeft size={15} /> Back to Home
          </Link>
        </div>
      </header>

      <main>
        <section className="bg-ink py-16 text-white">
          <div className="wrap">
            <div className="eyebrow">Field Archive</div>
            <h1 className="heading text-white">YOSA Impact Gallery</h1>
          </div>
        </section>

        <section className="section bg-[#f4f4f4]">
          <div className="wrap">
            <div className="ch-gallery">
              {gallery.items.map((item) => (
                <figure
                  key={item.src}
                  className="ch-gallery-item group relative cursor-pointer overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  onClick={() => setActive(item)}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-auto block transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-black/40 via-transparent to-transparent p-4 opacity-0 transition group-hover:opacity-100">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-orange text-white">
                      <ZoomIn size={16} />
                    </span>
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ink py-10 text-center text-xs text-white/60">
        <div className="wrap">
          © {new Date().getFullYear()} Youth Opportunities South Africa (YOSA) · {site.address}
        </div>
      </footer>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div className="relative max-h-[90vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              aria-label="Close lightbox"
              onClick={() => setActive(null)}
              className="absolute -right-3 -top-3 grid size-10 place-items-center rounded-full bg-orange text-white shadow-lg"
            >
              <X size={20} />
            </button>
            <img src={active.src} alt={active.alt} className="max-h-[82vh] w-auto rounded-2xl object-contain" />
          </div>
        </div>
      )}
    </>
  );
}
