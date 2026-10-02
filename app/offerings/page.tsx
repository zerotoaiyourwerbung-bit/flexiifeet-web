import type { Metadata } from "next";
import Link from "next/link";
import { Faq, GetInTouch, PageBanner, SecTitle } from "@/components/sections";
import { infoPages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Offerings",
  description:
    "All The FlexiiFeet offerings: DanceED for schools, annual day choreography, online dance classes, studio classes in Indore, and wedding & show choreography.",
};

export default function offerings() {
  return (
    <>
      <PageBanner kicker="Explore" title="Our Offerings" sub="Dance education, classes and choreography for every stage of life" />

      <section className="ff-section">
        <div className="container">
          <SecTitle kicker="Explore" title="One love of movement, many ways in" center />
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

      <section className="ff-section alt">
        <div className="container ff-faq-wrap">
          <Faq />
        </div>
      </section>
      <GetInTouch
        kicker="Not sure where to start?"
        title="Not sure which program fits?"
        intro="Tell us a little about what you're looking for and we'll help you choose. Prefer to talk? Reach us directly:"
        formTitle="Not sure which program fits?"
        formSubtitle="Tell us a little about what you're looking for and we'll help you choose."
        submitLabel="Help me choose"
      />
    </>
  );
}
