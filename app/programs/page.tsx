import type { Metadata } from "next";
import Link from "next/link";
import { Faq, PageBanner, SecTitle } from "@/components/sections";
import LeadForm from "@/components/LeadForm";
import { infoPages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "All The FlexiiFeet programs: DanceED for schools, annual day choreography, online dance classes, studio classes in Indore, and wedding & show choreography.",
};

export default function Programs() {
  return (
    <>
      <PageBanner title="Our Programs" sub="Dance education, classes and choreography for every stage of life" />

      <section className="ff-section">
        <div className="container">
          <SecTitle kicker="Programs" title="One love of movement, many ways in" center />
          <div className="ff-program-list">
            {infoPages.map((p, i) => (
              <Link key={p.href} href={p.href} className="ff-program-row">
                <span className="ff-program-num">{String(i + 1).padStart(2, "0")}</span>
                <img src={p.img} alt="" loading="lazy" />
                <div>
                  <span className="ff-program-who">{p.who}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="enquire" className="contact-form-area ff-enquiry">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12">
              <Faq />
            </div>
            <div className="col-xl-6 col-lg-12">
              <LeadForm title="Not sure which program fits?" subtitle="Tell us a little about what you're looking for and we'll help you choose." submitLabel="Help me choose" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
