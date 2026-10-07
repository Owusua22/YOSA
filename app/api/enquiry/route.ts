import { NextResponse } from "next/server";

const clean = (v: unknown, max = 2000) => String(v ?? "").trim().slice(0, max);
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(req: Request) {
  let d: Record<string, unknown>;
  try { d = await req.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }
  if (d.website) return NextResponse.json({ ok: true }); // honeypot

  const e = { name: clean(d.name, 120), organisation: clean(d.organisation, 160), email: clean(d.email, 200), interest: clean(d.interest, 80) || "Not specified", message: clean(d.message) || "(no message)" };
  if (!e.name || !e.organisation || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email))
    return NextResponse.json({ error: "Please complete name, organisation and a valid email." }, { status: 400 });

  const key = process.env.RESEND_API_KEY, to = process.env.RESEND_TO;
  if (!key || !to) return NextResponse.json({ error: "Form delivery is not configured." }, { status: 503 });

  const text = `Name: ${e.name}\nOrganisation: ${e.organisation}\nEmail: ${e.email}\nInterest: ${e.interest}\n\n${e.message}`;
  const html = `<h2>New partnership enquiry</h2><p><b>Name:</b> ${esc(e.name)}<br><b>Organisation:</b> ${esc(e.organisation)}<br><b>Email:</b> ${esc(e.email)}<br><b>Interest:</b> ${esc(e.interest)}</p><p>${esc(e.message).replace(/\n/g, "<br>")}</p>`;
  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: process.env.RESEND_FROM ?? "YOSA Website <onboarding@resend.dev>", to: to.split(",").map((s) => s.trim()), reply_to: e.email, subject: `Partnership enquiry: ${e.name} (${e.organisation})`, text, html }),
    });
    if (!r.ok) throw new Error(String(r.status));
  } catch {
    return NextResponse.json({ error: "We could not send your enquiry." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
