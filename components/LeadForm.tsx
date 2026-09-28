"use client";

import { useState } from "react";
import { programs, site } from "@/lib/site";

export type LeadField = {
  name: string;
  label: string;
  type?: "text" | "number" | "select";
  options?: string[];
  required?: boolean;
};

type Props = {
  /** Fixed program for landing pages; omit to show an "Interested in" select. */
  program?: string;
  fields?: LeadField[];
  title?: string;
  subtitle?: string;
  submitLabel?: string;
};

const interests = [...programs.map((p) => p.label), "Weddings & Shows", "Other"];
const trackingKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"];

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

// Lead capture form: posts to /api/lead, which forwards the lead to the team (see app/api/lead/route.ts).
export default function LeadForm({ program, fields = [], title, subtitle, submitLabel = "Get a free consultation" }: Props) {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const data: Record<string, string> = Object.fromEntries(
      [...new FormData(e.currentTarget)].map(([k, v]) => [k, String(v)])
    );
    if (program) data.program = program;
    const params = new URLSearchParams(window.location.search);
    trackingKeys.forEach((k) => params.get(k) && (data[k] = params.get(k)!));
    data.page = window.location.pathname;

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) throw new Error(json.error || "Something went wrong.");
      setState("done");
      // Conversion events for ad platforms, if their tags are installed.
      window.gtag?.("event", "generate_lead", { program: data.program });
      window.fbq?.("track", "Lead", { content_name: data.program });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="ff-form ff-form--done" role="status">
        <div className="ff-form-check" aria-hidden="true">
          <i className="fa fa-check"></i>
        </div>
        <h3>Thank you! We&apos;ve got your details.</h3>
        <p>Our team will get in touch with you shortly. Need us sooner? Call <a href={site.phoneHref}>{site.phone}</a>.</p>
      </div>
    );
  }

  return (
    <form className="ff-form" onSubmit={onSubmit}>
      {title && <h3 className="ff-form-title">{title}</h3>}
      {subtitle && <p className="ff-form-sub">{subtitle}</p>}
      <div className="ff-form-grid">
        <label>
          <span>Your name *</span>
          <input type="text" name="name" required autoComplete="name" />
        </label>
        <label>
          <span>Phone (WhatsApp) *</span>
          <input type="tel" name="phone" required autoComplete="tel" inputMode="tel" pattern="[0-9+\-\s()]{7,}" />
        </label>
        <label className={(3 + (program ? 0 : 1) + fields.length) % 2 ? "ff-span" : undefined}>
          <span>Email</span>
          <input type="email" name="email" autoComplete="email" />
        </label>
        {!program && (
          <label>
            <span>Interested in *</span>
            <select name="program" required defaultValue="">
              <option value="" disabled>
                Choose one
              </option>
              {interests.map((i) => (
                <option key={i}>{i}</option>
              ))}
            </select>
          </label>
        )}
        {fields.map((f) => (
          <label key={f.name}>
            <span>
              {f.label}
              {f.required && " *"}
            </span>
            {f.type === "select" ? (
              <select name={f.name} required={f.required} defaultValue="">
                <option value="" disabled>
                  Choose one
                </option>
                {f.options?.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            ) : (
              <input type={f.type ?? "text"} name={f.name} required={f.required} min={f.type === "number" ? 1 : undefined} />
            )}
          </label>
        ))}
        <label className="ff-span">
          <span>Anything we should know?</span>
          <textarea name="message" rows={3}></textarea>
        </label>
        {/* Honeypot for bots */}
        <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="ff-hp" aria-hidden="true" />
      </div>
      {state === "error" && (
        <p className="ff-form-error" role="alert">
          {error} Please try again, or call us at <a href={site.phoneHref}>{site.phone}</a>.
        </p>
      )}
      <button type="submit" className="ff-btn ff-btn--grad ff-form-submit" disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : submitLabel}
        {state !== "sending" && <i className="fa fa-arrow-right" aria-hidden="true"></i>}
      </button>
      <p className="ff-form-note">
        <i className="fa fa-lock" aria-hidden="true"></i> No payment needed. Our team will call you back.
      </p>
    </form>
  );
}
