"use client";
import { useState } from "react";

export default function EnquiryForm({ email }: { email: string }) {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    setState("sending");
    const data = Object.fromEntries(new FormData(ev.currentTarget));
    try {
      const r = await fetch("/api/enquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error);
      setState("ok");
    } catch (err) {
      setMsg(err instanceof Error && err.message ? err.message : "Something went wrong.");
      setState("error");
    }
  }

  if (state === "ok")
    return <p role="status" className="ok">Thank you. We have your enquiry and will be in touch.</p>;

  return (
    <form onSubmit={onSubmit}>
      <label>Name<input name="name" required autoComplete="name" /></label>
      <label>Organisation<input name="organisation" required autoComplete="organization" /></label>
      <label>Email<input name="email" type="email" required autoComplete="email" /></label>
      <label>Area of interest
        <select name="interest" defaultValue="">
          <option value="" disabled>Choose one</option>
          <option>Funding</option><option>Skills and time</option><option>Transport</option>
          <option>Technology and resources</option><option>Pathways into work</option><option>Awareness</option><option>Something else</option>
        </select>
      </label>
      <label>Message (optional)<textarea name="message" rows={4} /></label>
      <input className="hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button className="btn" type="submit" disabled={state === "sending"}>{state === "sending" ? "Sending…" : "Start a partnership conversation"}</button>
      <p role="alert" className="err">{state === "error" ? `${msg} You can also email ${email}.` : ""}</p>
      <p className="note">We use these details only to reply to your enquiry.</p>
    </form>
  );
}
