const D: Record<string, string> = {
  linkedin: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3zM9.5 9.75h3.8v1.6h.05c.55-1 1.9-2 3.9-2 4.1 0 4.75 2.6 4.75 6V21h-4v-4.9c0-1.2 0-2.7-1.7-2.7s-1.9 1.3-1.9 2.6V21h-4z",
  facebook: "M14 8h3V4.5h-3A4.5 4.5 0 0 0 9.5 9v2H7v3.5h2.5V21H13v-6.5h3l.5-3.5H13V9.2c0-.7.5-1.2 1-1.2z",
  instagram: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM17.5 6.5h.01",
  download: "M12 3v12m0 0-4-4m4 4 4-4M4 20h16",
  heart: "M12 21s-7-4.6-9.3-9A5.3 5.3 0 0 1 12 6.2 5.3 5.3 0 0 1 21.3 12C19 16.4 12 21 12 21z",
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM8.5 12l2.5 2.5 4.5-4.5",
  cap: "M2 9l10-5 10 5-10 5zM6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5",
  youtube: "M2.5 8a4 4 0 0 1 4-4h11a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-11a4 4 0 0 1-4-4zM10 9l5 3-5 3z",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z",
  pin: "M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  mail: "M3 6h18v12H3zM3 7l9 6 9-6",
  up: "M12 19V5m0 0-6 6m6-6 6 6",
  school: "M3 10l9-6 9 6v10H3zM9 20v-6h6v6",
  monitor: "M3 5h18v11H3zM8 20h8M12 16v4",
  chat: "M4 5h16v11H9l-5 4z",
  check: "M5 12.5l4.5 4.5L19 7.5",
  users: "M16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM2 20c0-3 2.7-5 6-5s6 2 6 5M14.5 15.2c.5-.1 1-.2 1.5-.2 3.3 0 6 2 6 5",
  quote: "M5 17c0-5 2-8 5-9M14 17c0-5 2-8 5-9",
  book: "M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 19a2 2 0 0 1 2-2h13",
};
const FILLED = ["linkedin", "facebook"];

export function Icon({ name, size = 22 }: { name: string; size?: number }) {
  const f = FILLED.includes(name);
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" focusable="false" fill={f ? "currentColor" : "none"} stroke={f ? "none" : "currentColor"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d={D[name]} />
    </svg>
  );
}

export function Socials({ items, className = "soc" }: { items: { label: string; href: string }[]; className?: string }) {
  return (
    <ul className={className}>
      {items.map((s) => (
        <li key={s.label}>
          <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`YOSA on ${s.label}`}><Icon name={s.label.toLowerCase()} /></a>
        </li>
      ))}
    </ul>
  );
}
