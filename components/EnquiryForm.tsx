"use client";

import { programs, whatsappLink } from "@/lib/site";

// Template "contact-form" markup. No backend: the enquiry opens WhatsApp with the details prefilled.
// ponytail: WhatsApp handoff instead of email/CRM; add a route handler + mail service if leads must be stored.
export default function EnquiryForm() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = [
      "Hi FlexiiFeet! New enquiry:",
      `Name: ${f.get("name")}`,
      `Phone: ${f.get("phone")}`,
      f.get("email") && `Email: ${f.get("email")}`,
      `Interested in: ${f.get("interest")}`,
      `Message: ${f.get("message")}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(msg), "_blank", "noopener");
  }

  return (
    <div className="contact-form">
      <div className="inner-box">
        <form className="default-form" onSubmit={onSubmit}>
          <div className="input-box">
            <input type="text" name="name" placeholder="Name" aria-label="Name" required autoComplete="name" />
          </div>
          <div className="input-box">
            <input type="tel" name="phone" placeholder="Phone" aria-label="Phone" required autoComplete="tel" />
          </div>
          <div className="input-box">
            <input type="email" name="email" placeholder="Email (optional)" aria-label="Email" autoComplete="email" />
          </div>
          <div className="input-box">
            <select name="interest" aria-label="Interested in" className="ff-select" defaultValue="">
              <option value="" disabled>
                Interested in…
              </option>
              {programs.map((p) => (
                <option key={p.href}>{p.label}</option>
              ))}
              <option>Weddings & Shows</option>
              <option>Other</option>
            </select>
          </div>
          <div className="input-box">
            <textarea name="message" placeholder="Your Message..." aria-label="Message" required></textarea>
          </div>
          <div className="button-box">
            <button type="submit">
              Send via WhatsApp<span className="flaticon-next"></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
