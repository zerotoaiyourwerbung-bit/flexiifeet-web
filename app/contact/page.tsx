import type { Metadata } from "next";
import { GetInTouch } from "@/components/sections";
import { site } from "@/lib/site";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Contact Us – Dance Classes in Indore & Online",
  description: "Contact The FlexiiFeet for school programs, annual days, dance classes in Indore or online, and wedding & show choreography.",
};

export default function Contact() {
  return (
    <>
      <GetInTouch showCta={false} />

      <section className="ff-section ff-reach alt">
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
