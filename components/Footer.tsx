import Link from "next/link";
import { nav, offerings, site } from "@/lib/site";
import Icon from "./Icon";

// Light footer: an orange call-to-action band straddling its top edge, then brand + link columns, then the copyright bar.
export default function Footer() {
  return (
    <footer className="ff-foot">
      <div className="container">
        <div className="ff-foot-main">
          <div className="ff-foot-brand">
            <Link href="/">
              <img src="/live/logo-flexiifeet.jpg" alt="The FlexiiFeet" />
            </Link>
            {/* <p>Dance education, classes and choreography for every stage of life.</p> */}
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
        <div className="container ff-foot-bottom-wrap">
          <p>
            Copyright © {new Date().getFullYear()} <Link href="/">{site.name}</Link>. All Rights Reserved.
          </p>
          <ul className="ff-foot-legal">
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
            </li>
            <li>
              <Link href="/refund-policy">Refund Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
