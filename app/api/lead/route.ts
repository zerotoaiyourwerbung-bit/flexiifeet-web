// Receives enquiries from <LeadForm> and forwards them to the team.
// Delivery is configured with env vars (set at least one in production, or leads are rejected, not lost silently):
//   LEAD_WEBHOOK_URL  – POSTs the lead as JSON (Google Apps Script -> Sheet, Zapier, Make, Pabbly, a CRM...)
//   RESEND_API_KEY + LEAD_EMAIL_TO (+ optional LEAD_EMAIL_FROM) – emails the lead via resend.com

type Lead = Record<string, string>;

const MAX_FIELD = 2000;

function clean(body: unknown): Lead | null {
  if (!body || typeof body !== "object") return null;
  const lead: Lead = {};
  for (const [k, v] of Object.entries(body as Record<string, unknown>)) {
    if (typeof v === "string" && v.trim() && /^[a-z_]{1,40}$/.test(k)) lead[k] = v.trim().slice(0, MAX_FIELD);
  }
  return lead;
}

async function toWebhook(url: string, lead: Lead) {
  const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(lead) });
  if (!res.ok) throw new Error(`webhook ${res.status}`);
}

const escape = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

async function toEmail(key: string, to: string, lead: Lead) {
  const rows = Object.entries(lead)
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#777">${escape(k)}</td><td style="padding:4px 0">${escape(v)}</td></tr>`)
    .join("");
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.LEAD_EMAIL_FROM || "FlexiiFeet Leads <onboarding@resend.dev>",
      to: to.split(",").map((s) => s.trim()),
      reply_to: lead.email,
      subject: `New lead: ${lead.program || "General"} – ${lead.name}`,
      html: `<table>${rows}</table>`,
    }),
  });
  if (!res.ok) throw new Error(`resend ${res.status}`);
}

export async function POST(request: Request) {
  const lead = clean(await request.json().catch(() => null));
  if (!lead) return Response.json({ ok: false, error: "Invalid request" }, { status: 400 });

  // Honeypot: real visitors never see or fill this field.
  if (lead.company_website) return Response.json({ ok: true });

  if (!lead.name || !lead.phone || lead.phone.replace(/\D/g, "").length < 7) {
    return Response.json({ ok: false, error: "Please add your name and a valid phone number." }, { status: 400 });
  }

  lead.received_at = new Date().toISOString();

  const webhook = process.env.LEAD_WEBHOOK_URL;
  const resendKey = process.env.RESEND_API_KEY;
  const emailTo = process.env.LEAD_EMAIL_TO;
  const jobs: Promise<void>[] = [];
  if (webhook) jobs.push(toWebhook(webhook, lead));
  if (resendKey && emailTo) jobs.push(toEmail(resendKey, emailTo, lead));

  if (!jobs.length) {
    if (process.env.NODE_ENV !== "production") {
      console.log("[lead] no delivery configured; received:", lead);
      return Response.json({ ok: true });
    }
    console.error("[lead] LEAD_WEBHOOK_URL or RESEND_API_KEY + LEAD_EMAIL_TO must be set");
    return Response.json({ ok: false, error: "Enquiries are temporarily unavailable." }, { status: 503 });
  }

  const results = await Promise.allSettled(jobs);
  results.forEach((r) => r.status === "rejected" && console.error("[lead] delivery failed:", r.reason));
  // One working channel is enough; only fail if every channel failed.
  if (results.every((r) => r.status === "rejected")) {
    return Response.json({ ok: false, error: "Could not send right now." }, { status: 502 });
  }
  return Response.json({ ok: true });
}
