import Link from "next/link";
import { nav, programs, site } from "@/lib/site";

// Template markup: index.html "footer-area".
export default function Footer() {
  return (
    <footer className="footer-area">
      <div className="parallax-scene parallax-scene-1">
        <span className="parallax-layer shape"></span>
        <span className="parallax-layer shape2"></span>
        <span className="parallax-layer shape3"></span>
        <span className="shape4"></span>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div className="single-footer-widget marbtm50">
              <div className="footer-logo">
                <Link href="/">
                  <img src="/live/logo.png" alt="The FlexiiFeet" className="ff-footer-logo" />
                </Link>
              </div>
              <div className="footer-company-info-text">
                <h3>{site.city}, India</h3>
                <ul>
                  <li>
                    <a href={site.phoneHref}>{site.phone}</a>
                  </li>
                  <li>
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div className="single-footer-widget martop30 marbtm50">
              <div className="title">
                <h3>Quick Links</h3>
              </div>
              <ul className="information-links">
                {nav
                  .filter((n) => !n.children)
                  .map((n) => (
                    <li key={n.href}>
                      <Link href={n.href}>{n.label}</Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div className="single-footer-widget martop30 pdbtm50">
              <div className="title">
                <h3>Programs</h3>
              </div>
              <ul className="service-links">
                {programs.map((p) => (
                  <li key={p.href}>
                    <Link href={p.href}>{p.label}</Link>
                  </li>
                ))}
                <li>
                  <Link href="/programs/weddings-shows">Weddings & Shows</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div className="single-footer-widget martop30">
              <div className="title">
                <h3>Follow Us</h3>
              </div>
              <div className="subscribe-box">
                <div className="text">
                  <p>
                    Follow us on Instagram for
                    <br /> performances, classes & updates.
                  </p>
                </div>
                <div className="footer-social-links">
                  <ul className="sociallinks-style-two">
                    <li>
                      <a href={site.instagram} target="_blank" rel="noopener" aria-label="Instagram">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener" aria-label="WhatsApp">
                        <i className="fa fa-whatsapp" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href={`mailto:${site.email}`} aria-label="Email">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="footer-bottom-content">
                <div className="copyright-text">
                  <p>
                    Copyright © {new Date().getFullYear()} <Link href="/">{site.name}</Link>. All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
