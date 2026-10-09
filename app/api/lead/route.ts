import nodemailer from "nodemailer";

// Receives enquiries from <LeadForm> and forwards them to the team.
// Delivery is configured with env vars (set at least one in production, or leads are rejected, not lost silently):
//   LEAD_WEBHOOK_URL  – POSTs the lead as JSON (Google Apps Script -> Sheet, Zapier, Make, Pabbly, a CRM...)
//   LEAD_EMAIL_TO     – where enquiry emails go (comma-separated for several people), sent by one of:
//     SMTP_HOST + SMTP_PORT + SMTP_USER + SMTP_PASS (+ optional SMTP_FROM) – your own mailbox, used when set
//     RESEND_API_KEY (+ optional LEAD_EMAIL_FROM) – resend.com, used only when SMTP is not configured

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

// "/offerings/dance-ed" -> "Offerings › Dance Ed". The path comes from the browser, so it is trimmed to safe characters.
function pageName(path = "") {
  const parts = path.replace(/[^a-z0-9/-]/gi, "").split("/").filter(Boolean).slice(0, 4);
  if (!parts.length) return "Home";
  return parts.map((p) => p.replace(/-/g, " ").replace(/\b[a-z]/g, (c) => c.toUpperCase())).join(" › ");
}

function emailContent(lead: Lead) {
  const rows = Object.entries(lead)
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#777">${escape(k)}</td><td style="padding:4px 0">${escape(v)}</td></tr>`)
    .join("");
  const name = lead.name.replace(/[\r\n]+/g, " ").slice(0, 80);
  return {
    subject: `New enquiry from the ${pageName(lead.page)} page – ${name}`,
    html: `<table>${rows}</table>`,
    text: Object.entries(lead)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n"),
  };
}

const recipients = (to: string) => to.split(",").map((s) => s.trim());

async function toSmtp(to: string, lead: Lead) {
  const port = Number(process.env.SMTP_PORT) || 587;
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465, // 465 = TLS from the start; 587/25 upgrade with STARTTLS
    // How we introduce ourselves to the mail server. The default is the machine's hostname, which Gmail rejects
    // ("421 Try again later") when it isn't a valid domain-style name, as on a Windows PC.
    name: "theflexiifeet.com",
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
  await transport.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: recipients(to),
    replyTo: lead.email,
    ...emailContent(lead),
  });
}

async function toResend(key: string, to: string, lead: Lead) {
  const { subject, html } = emailContent(lead);
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.LEAD_EMAIL_FROM || "FlexiiFeet Leads <onboarding@resend.dev>",
      to: recipients(to),
      reply_to: lead.email,
      subject,
      html,
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
  const smtp = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS;
  const jobs: Promise<void>[] = [];
  if (webhook) jobs.push(toWebhook(webhook, lead));
  // One email per enquiry: SMTP when it is configured, Resend otherwise.
  if (emailTo && smtp) jobs.push(toSmtp(emailTo, lead));
  else if (emailTo && resendKey) jobs.push(toResend(resendKey, emailTo, lead));

  if (!jobs.length) {
    if (process.env.NODE_ENV !== "production") {
      console.log("[lead] no delivery configured; received:", lead);
      return Response.json({ ok: true });
    }
    console.error("[lead] set LEAD_WEBHOOK_URL, or LEAD_EMAIL_TO with SMTP_* or RESEND_API_KEY");
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
