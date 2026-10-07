"use client";
import { useEffect, useRef, useState, type ReactNode, type KeyboardEvent } from "react";
import { Icon } from "./icons";

const reduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current!;
    if (reduced()) return el.classList.add("in");
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`rv ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export function Counter({ to, prefix = "", suffix = "", dur = 1400 }: { to: number; prefix?: string; suffix?: string; dur?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [v, setV] = useState(0);
  useEffect(() => {
    if (reduced()) return setV(to);
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; io.disconnect();
      const t0 = performance.now();
      const tick = (t: number) => { const k = Math.min((t - t0) / dur, 1); setV(Math.round(to * (1 - Math.pow(1 - k, 3)))); if (k < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    });
    io.observe(ref.current!); return () => io.disconnect();
  }, [to, dur]);
  return <span ref={ref} aria-label={`${prefix}${to.toLocaleString("en-ZA")}${suffix}`}>{prefix}{v.toLocaleString("en-ZA")}{suffix}</span>;
}

export function Tabs({ id, tabs }: { id: string; tabs: { key: string; label: string; icon?: string; body: ReactNode }[] }) {
  const [a, setA] = useState(0);
  const go = (n: number) => { const i = (n + tabs.length) % tabs.length; setA(i); document.getElementById(`${id}-t${i}`)?.focus(); };
  const onKey = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") { e.preventDefault(); go(a + 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); go(a - 1); }
    if (e.key === "Home") { e.preventDefault(); go(0); }
    if (e.key === "End") { e.preventDefault(); go(tabs.length - 1); }
  };
  return (
    <div className="tabs">
      <div role="tablist" aria-label={id} onKeyDown={onKey}>
        {tabs.map((t, i) => (
          <button key={t.key} id={`${id}-t${i}`} role="tab" aria-selected={a === i} aria-controls={`${id}-p${i}`} tabIndex={a === i ? 0 : -1} onClick={() => setA(i)}>
            {t.icon && <Icon name={t.icon} size={20} />}{t.label}
          </button>
        ))}
      </div>
      <div key={a} id={`${id}-p${a}`} role="tabpanel" aria-labelledby={`${id}-t${a}`} className="panel">{tabs[a].body}</div>
    </div>
  );
}

export function PageFx() {
  const [p, setP] = useState(0);
  const [top, setTop] = useState(false);
  useEffect(() => {
    const on = () => { const h = document.documentElement; setP(h.scrollTop / ((h.scrollHeight - h.clientHeight) || 1)); setTop(h.scrollTop > 600); };
    on(); window.addEventListener("scroll", on, { passive: true });
    const links = [...document.querySelectorAll<HTMLAnchorElement>('nav a[href^="#"]')];
    const ids = [...new Set(links.map((l) => l.getAttribute("href")!.slice(1)))];
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id)); }), { rootMargin: "-40% 0px -55% 0px" });
    ids.forEach((i) => { const el = document.getElementById(i); if (el) io.observe(el); });
    return () => { window.removeEventListener("scroll", on); io.disconnect(); };
  }, []);
  return (<>
    <div className="progress" style={{ transform: `scaleX(${p})` }} aria-hidden="true" />
    <button className={top ? "totop show" : "totop"} aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: reduced() ? "auto" : "smooth" })}><Icon name="up" /></button>
  </>);
}
