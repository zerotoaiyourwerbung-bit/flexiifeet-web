import Link from "next/link";
import { heroImage } from "@/lib/site";
import { Faq, GetInTouch, Journey, Moments, Paths, SchoolLogos, SecTitle, StatsTicker, Testimonials } from "@/components/sections";

// Section order follows the FlexFlow reference: hero → ticker → paths → schools → proof → why → journey → founder → stages → enquiry + FAQ.
const stages = ["IIFA", "Filmfare", "IPL", "Dubai Expo 2020", "World Chess Olympiad 2022", "Ambani Wedding"];

export default function Home() {
  return (
    <>
      {/* Full-bleed photo hero; the split hero below follows it */}
      <section className="ff-hero-full" style={{ backgroundImage: "url(/live/ayush-stage.webp)" }}>
        <div className="container">
          <div className="ff-hero-full-copy">
            <div className="kicker">The FlexiiFeet · Ayush Lokre</div>
            <h1>
              Your stage
              <br /> <span>starts here</span>
            </h1>
            <p>
              Dance education, classes and choreography for schools, families and celebrations, from the team that has
              trained 10,000+ students across India and the USA.
            </p>
            <div className="ff-cta-buttons" style={{ justifyContent: "flex-start" }}>
              <Link className="ff-btn ff-btn--grad" href="/offerings">
                Explore offerings
              </Link>
              <a className="ff-btn ff-btn--outline" href="#enquire">
                Enquire now
              </a>
            </div>
          </div>
          <ul className="ff-hero-full-stats">
            <li>
              <strong>10+</strong>years of expertise
            </li>
            <li>
              <strong>10,000+</strong>students trained
            </li>
          </ul>
        </div>
      </section>

      {/* <section className="ff-hero ff-hero--second">
        <div className="container ff-hero-grid">
          <div>
            <div className="kicker">India · Dance education · Choreography · USA</div>
            <h2>
              Dance begins in the classroom.
              <br /> <span>Confidence takes the stage.</span>
            </h2>
            <p>
              Led by choreographer Ayush Lokre, The FlexiiFeet brings structured dance education and personal
              choreography to learners, schools, and celebrations across India and the USA.
            </p>
            <div className="ff-cta-buttons" style={{ justifyContent: "flex-start" }}>
              <a className="ff-btn ff-btn--grad" href="#paths">
                Find your path
              </a>
              <Link className="ff-btn ff-btn--outline" href="/contact">
                Talk to us
              </Link>
            </div>
          </div>
          <img className="ff-hero-img" src={heroImage} alt="Ayush Lokre at the Kho Kho World Cup India 2025" />
        </div>
      </section> */}

      <StatsTicker />
      <div id="paths">
        <Paths />
      </div>
      {/* <SchoolLogos /> */}
      {/* <Testimonials /> */}

      {/* Replaces the template "statements-area": the grow-through-dance idea + transformation illustration */}
      <section className="ff-grow">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-12">
              <SecTitle
                kicker="Our belief"
                title={
                  <>
                    We don&rsquo;t teach dance. 
                    <span className="ff-grad-text ff-block">We help you grow through dance.</span>
                  </>
                }
              />
              <div className="text">
                <p>
                  Technique is the foundation, but the real change happens inside: the shy child who finds a voice, the
                  teenager who owns the stage, the adult who finally feels at home in their body.
                </p>
              </div>
              <ul className="ff-chip-row ff-chip-row--left ff-grow-chips">
                {["Confidence", "Discipline", "Creativity", "Joy"].map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <Link className="ff-btn ff-btn--grad" href="/offerings">
                See how we do it
              </Link>
            </div>
            <div className="col-xl-7 col-lg-12">
              <img
                className="ff-grow-img"
                src="/live/grow-through-dance.webp"
                alt="A child growing from shy and hesitant to joyful and confident, ending in a dancer's leap"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <Journey /> */}

      {/* index.html "about-style1-area": about The FlexiiFeet */}
      <section className="about-style1-area secpd1">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12">
              <div className="about-style1-left-content clearfix">
                <div className="shape">
                  <div className="shape1 zoom-fade"></div>
                  <div className="shape2"></div>
                  <div className="shape3"></div>
                  <div className="shape4"></div>
                </div>
                <img src="/live/ayush-stage.webp" alt="Ayush Lokre, founder of The FlexiiFeet" className="ff-about-img" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="about-style1-content">
                <SecTitle kicker="About The FlexiiFeet" title={<>Dance education that builds confidence, <br />not just steps.</>} />
                <div className="inner-content">
                  <div className="text">
                    <p>
                      The FlexiiFeet is a dance education and choreography company founded by Ayush Lokre. For
                      over 10 years we have brought structured, joyful dance training to schools, families and
                      celebrations across India and the USA.
                    </p>
                    <p>
                      From NEP-aligned school curriculum and annual days to online and Indore studio classes, wedding
                      choreography and stage shows, our team has trained 10,000+ students, on stages like IIFA, IPL and Dubai Expo.
                    </p>
                  </div>
                  <ul className="ff-chip-row ff-chip-row--left">
                    {stages.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  <div className="button">
                    <Link className="ff-btn ff-btn--grad" href="/about">
                      Read our story
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Moments title="Across celebrated stages" /> */}

      {/* contact.html "contact-form-area": enquiry + FAQ */}
      <GetInTouch
        kicker="Start a conversation"
        title="Tell us where you'd like dance to take you."
        intro="Whether it's a school programme, classes or a celebration, tell us what you have in mind and our team will get back to you. Prefer to talk? Reach us directly:"
        formTitle="Tell us what you're planning"
        submitLabel="Get a free consultation"
      />
    </>
  );
}
