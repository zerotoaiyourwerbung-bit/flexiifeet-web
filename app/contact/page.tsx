import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import { PageBanner } from "@/components/sections";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact The FlexiiFeet for school programs, annual days, dance classes in Indore or online, and wedding & show choreography.",
};

export default function Contact() {
  return (
    <>
      <PageBanner title="Connect With Us" sub="Schools, classes, weddings or shows—let's talk" />

      {/* contact.html "contact-address-area" */}
      <section className="contact-address-area">
        <div className="container">
          <div className="title text-center">
            <h2>Let's create something unforgettable—together.</h2>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4">
              <div className="single-contact-address-box text-center">
                <div className="icon-holder">
                  <span className="flaticon-global"></span>
                </div>
                <h3>Based In</h3>
                <p>
                  {site.city}, India
                  <br /> Serving schools across India & USA
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
              <div className="single-contact-address-box active text-center">
                <div className="icon-holder">
                  <span className="flaticon-support"></span>
                </div>
                <h3>Call / WhatsApp</h3>
                <p>
                  <a href={site.phoneHref}>{site.phone}</a>
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
              <div className="single-contact-address-box text-center">
                <div className="icon-holder">
                  <span className="icon-mail"></span>
                </div>
                <h3>Mail Us</h3>
                <p>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* contact.html "contact-form-area" */}
      <section id="enquire" className="contact-form-area ff-contact-form">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-12">
              <div className="contact-social-links">
                <div className="image-box" style={{ backgroundImage: "url(/live/g2.jpg)" }}>
                  <div className="big-title">
                    <div className="inner">
                      <div className="title">Say hi</div>
                    </div>
                  </div>
                </div>
                <ul className="social-links">
                  <li>
                    <a href={site.instagram} target="_blank" rel="noopener">Instagram</a>
                  </li>
                  <li>
                    <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener">WhatsApp</a>
                  </li>
                  <li>
                    <a href={`mailto:${site.email}`}>Email</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-7 col-lg-12">
              <LeadForm title="Send us an enquiry" subtitle="Tell us what you're planning and our team will call you back." />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
