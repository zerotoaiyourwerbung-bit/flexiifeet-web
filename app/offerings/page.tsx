import type { Metadata } from "next";
import Link from "next/link";
import { Faq, GetInTouch, SecTitle } from "@/components/sections";
import { infoPages } from "@/lib/site";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Dance Classes, DanceED & Wedding Choreography",
  description:
    "Everything The FlexiiFeet offers: DanceED for schools, online dance classes, studio classes in Indore, and wedding & show choreography.",
};

export default function offerings() {
  return (
    <>
      {/* Hero: offering thumbnails + headline on the left, tall photo panel with floating labels on the right */}
      <section className="ff-ohero">
        <div className="container ff-ohero-grid">
          <div className="ff-ohero-copy">
            <h1>Our Offerings</h1>
            <p>Dance education, classes and choreography for every stage of life.</p>
            <ul className="ff-chip-row ff-chip-row--left">
              {["Confidence", "Discipline", "Creativity", "Joy"].map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <ul className="ff-ohero-thumbs">
              {infoPages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href}>
                    <img src={p.img} alt="" />
                    {/* <span>{p.title}</span> */}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="ff-ohero-panel">
            <img src="/live/g1.webp" alt="Ayush Lokre with a fellow artist at a live show" />
          </div>
        </div>
      </section>

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
                <Icon name="arrow-right" />
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
        formTitle="Tell us what you're looking for"
        formSubtitle="A few details are enough for us to suggest the right program."
        submitLabel="Help me choose"
      />
    </>
  );
}
