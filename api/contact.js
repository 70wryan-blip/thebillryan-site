// Vercel function: emails a form submission to Bill through Resend.
// Environment variables (set in Vercel, never in code):
//   RESEND_API_KEY  the Resend key for thebillryan
//   CONTACT_TO      where submissions go
//   CONTACT_FROM    a sender on a verified Resend domain, e.g. "thebillryan.com <site@family.thebillryan.com>"
const LIMIT = 4000;
const clean = (v) => String(v ?? "").slice(0, LIMIT).trim();

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });
  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  if (clean(body.website)) return res.status(200).json({ ok: true }); // honeypot: quietly drop bots
  const email = clean(body.email);
  if (!clean(body.name) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Name and a valid email are required." });
  }
  const kind = clean(body.kind) || "Website message";
  const lines = Object.entries(body)
    .filter(([k]) => !["kind", "website"].includes(k))
    .map(([k, v]) => `${k}: ${clean(v)}`)
    .join("\n");

  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM,
      to: [process.env.CONTACT_TO],
      reply_to: email,
      subject: `${kind}: ${clean(body.name)}`,
      text: `${kind}\n\n${lines}\n\nSent from thebillryan.com`,
    }),
  });
  if (!r.ok) return res.status(502).json({ error: "Email service error" });
  return res.status(200).json({ ok: true });
}
