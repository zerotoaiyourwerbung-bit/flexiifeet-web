import Link from "next/link";
import { nav, offerings, site } from "@/lib/site";
import Icon from "./Icon";

// Light footer: an orange call-to-action band straddling its top edge, then brand + link columns, then the copyright bar.
export default function Footer() {
  return (
    <footer className="ff-foot">
      <div className="container">
        <div className="ff-foot-cta">
          <img src="/live/ayush-online-dance.webp" alt="" loading="lazy" />
          <div>
            <h2>Your stage starts here.</h2>
            <p>Tell us what you have in mind and our team will get back to you.</p>
            <div className="ff-foot-cta-actions">
              <Link className="ff-btn ff-foot-btn" href="/contact#enquire">
                Enquire now
              </Link>
              <a className="ff-btn ff-btn--outline" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="ff-foot-main">
          <div className="ff-foot-brand">
            <Link href="/">
              <img src="/live/logo-flexiifeet.jpg" alt="The FlexiiFeet" />
            </Link>
            <p>Dance education, classes and choreography for every stage of life.</p>
            <ul className="ff-foot-social">
              <li>
                <a href={site.instagram} target="_blank" rel="noopener" aria-label="Instagram">
                  <Icon name="instagram" />
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener" aria-label="WhatsApp">
                  <Icon name="whatsapp" />
                </a>
              </li>
              <li>
                <a href={site.youtube} target="_blank" rel="noopener" aria-label="YouTube">
                  <Icon name="youtube" />
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} aria-label="Email">
                  <Icon name="mail" />
                </a>
              </li>
            </ul>
          </div>
          <nav aria-label="Quick links">
            <h3>Quick Links</h3>
            <ul>
              {nav
                .filter((n) => !n.children)
                .map((n) => (
                  <li key={n.href}>
                    <Link href={n.href}>{n.label}</Link>
                  </li>
                ))}
            </ul>
          </nav>
          <nav aria-label="Offerings">
            <h3>Offerings</h3>
            <ul>
              {offerings.map((p) => (
                <li key={p.href}>
                  <Link href={p.href}>{p.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h3>Contact Us</h3>
            <ul className="ff-foot-contact">
              <li>
                <Icon name="phone" />
                <a href={site.phoneHref}>{site.phone}</a>
              </li>
              <li>
                <Icon name="mail" />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <Icon name="pin" />
                <span>{site.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="ff-foot-bottom">
        <div className="container">
          <p>
            Copyright © {new Date().getFullYear()} <Link href="/">{site.name}</Link>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
