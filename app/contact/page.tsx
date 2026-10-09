import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import { site } from "@/lib/site";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Contact Us – Dance Classes in Indore & Online",
  description: "Contact The FlexiiFeet for school programs, annual days, dance classes in Indore or online, and wedding & show choreography.",
};

export default function Contact() {
  return (
    <>
      {/* Hero: copy left, enquiry form right; the form card hangs over the full-width photo below */}
      <section className="ff-chero">
        <div className="container ff-chero-grid">
          <div className="ff-chero-copy">
            <h1>Connect with us</h1>
            <p>For DanceED, online classes, offline classes, and weddings &amp; shows.</p>
            <div className="ff-cta-buttons">
              <a className="ff-btn ff-btn--grad" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener">
                Chat on WhatsApp
              </a>
              <a className="ff-btn ff-btn--outline" href={site.phoneHref}>
                Call us
              </a>
            </div>
          </div>
          <div id="enquire" className="ff-chero-form">
            <LeadForm title="Send us an enquiry" subtitle="Tell us what you're planning." />
          </div>
          <img className="ff-chero-img" src="/live/hero-khokho.jpg" alt="The FlexiiFeet team at the Kho Kho World Cup India 2025" />
        </div>
      </section>

      <section className="ff-section ff-reach">
        <div className="container">
          <div className="ff-reach-head">
            <h2>Let&rsquo;s talk</h2>
            <p>
              Whether you&rsquo;re planning a school program, joining our classes, or want your celebration
              choreographed, drop us a line. Let&rsquo;s create something unforgettable together.
            </p>
          </div>
          <ul className="ff-contact-cards">
            <li>
              <Icon name="mail" />
              <small>Email us</small>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <Icon name="phone" />
              <small>Call / WhatsApp</small>
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li>
              <Icon name="pin" />
              <small>Visit us</small>
              <span>{site.address}</span>
            </li>
            <li>
              <Icon name="instagram" />
              <small>Follow us</small>
              <span className="ff-contact-links">
                <a href={site.instagram} target="_blank" rel="noopener">
                  Instagram
                </a>
                <a href={site.founderInstagram} target="_blank" rel="noopener">
                  Ayush on Instagram
                </a>
                <a href={site.youtube} target="_blank" rel="noopener">
                  YouTube
                </a>
              </span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
