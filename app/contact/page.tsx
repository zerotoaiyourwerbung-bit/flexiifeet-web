import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact The FlexiiFeet for school programs, annual days, dance classes in Indore or online, and wedding & show choreography.",
};

export default function Contact() {
  return (
    <>
      <section className="ff-talk">
        <div className="container">
          <div className="ff-talk-grid">
            <div>
              <h1>Connect with us</h1>
              <p>For our Regular Classes | Online Classes | Wedding &amp; Shows | Brand Campaign</p>
            </div>
            <dl className="ff-talk-details">
              <div>
                <dt>Email address</dt>
                <dd>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </dd>
              </div>
              <div>
                <dt>Phone / WhatsApp</dt>
                <dd>
                  <a href={site.phoneHref}>{site.phone}</a>
                </dd>
              </div>
              <div className="ff-talk-social">
                <dt>Based in</dt>
                <dd>{site.address}</dd>
              </div>
              <div className="ff-talk-social">
                <dt>Let&rsquo;s connect</dt>
                <dd>
                  <a href={site.instagram} target="_blank" rel="noopener">
                    Instagram
                  </a>
                  <a href={site.founderInstagram} target="_blank" rel="noopener">
                    Ayush on Instagram
                  </a>
                  <a href={site.youtube} target="_blank" rel="noopener">
                    YouTube
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <img className="ff-talk-img" src="/live/hero-khokho.jpg" alt="The FlexiiFeet team at the Kho Kho World Cup India 2025" />
      </section>


      {/* contact.html "contact-form-area" */}
      <section id="enquire" className="contact-form-area ff-contact-form">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-12">
              <h2 className="ff-contact-title">Let&rsquo;s talk</h2>
              <p className="ff-contact-note">
                Whether you&rsquo;re planning a school programme, joining our classes, or want your celebration choreographed, drop us a line. Let&rsquo;s create something unforgettable together.
              </p>
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
