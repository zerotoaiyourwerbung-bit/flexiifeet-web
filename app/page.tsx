import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";
import { heroImage } from "@/lib/site";
import { Faq, Journey, Moments, Paths, SchoolLogos, SecTitle, StatsTicker, Testimonials } from "@/components/sections";

// Section order follows the FlexFlow reference: hero → ticker → paths → schools → proof → why → journey → founder → stages → enquiry + FAQ.
const stages = ["IIFA", "Filmfare", "IPL", "Dubai Expo 2020", "World Chess Olympiad 2022", "Ambani Wedding"];

export default function Home() {
  return (
    <>
      <section className="ff-hero">
        <div className="container ff-hero-grid">
          <div>
            <div className="kicker">India · Dance education · Choreography · USA</div>
            <h1>
              Dance begins in the classroom.
              <br /> <span>Confidence takes the stage.</span>
            </h1>
            <p>
              Led by choreographer Ayush S K Lokre, The FlexiiFeet brings structured dance education and personal
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
          <img className="ff-hero-img" src={heroImage} alt="Ayush S K Lokre at the Kho Kho World Cup India 2025" />
        </div>
      </section>

      <StatsTicker />
      <div id="paths">
        <Paths />
      </div>
      <SchoolLogos />
      <Testimonials />

      {/* index.html "statements-area": why movement matters */}
      <section className="statements-area ff-grad-bg">
        <div className="container">
          <div className="single-statements-item text-center">
            <div className="title">
              <span className="dotted-left">
                <span className="dot"></span>
              </span>
              <span>Why movement matters</span>
              <span className="dotted-right">
                <span className="dot"></span>
              </span>
            </div>
            <div className="big-title">
              <span>We shape the courage to be seen.</span>
            </div>
            <div className="text">
              <p>
                Technique gives movement its foundation. Expression gives it meaning. Performance turns it into
                confidence that travels beyond the stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Journey />

      {/* index.html "about-style1-area": founder */}
      <section className="about-style1-area secpd1">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-10">
              <div className="about-style1-left-content clearfix">
                <div className="shape">
                  <div className="shape1 zoom-fade"></div>
                  <div className="shape2"></div>
                  <div className="shape3"></div>
                  <div className="shape4"></div>
                </div>
                <img src="/live/ayush-stage.jpg" alt="Ayush S K Lokre" className="ff-about-img" />
              </div>
            </div>
            <div className="col-xl-5 col-lg-12">
              <div className="about-style1-content">
                <SecTitle kicker="Founder" title={<>Meet Ayush.<br /> A life in movement, shared forward.</>} />
                <div className="inner-content">
                  <div className="text">
                    <p>
                      After more than a decade teaching at SDIPA and performing on major stages across India and the
                      world, Ayush S K Lokre created The FlexiiFeet to give every learner the structure, joy, and
                      confidence of real dance training.
                    </p>
                    <p>
                      Trained under Shiamak Davar, he has shared the stage with Shah Rukh Khan, Salman Khan, Amitabh
                      Bachchan, Deepika Padukone, Kiara Advani and Ranveer Singh.
                    </p>
                  </div>
                  <ul className="ff-chip-row ff-chip-row--left">
                    {stages.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  <div className="button">
                    <Link className="thm-btn1" href="/about">
                      <span></span>Read our story
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Moments title="Across celebrated stages" />

      {/* contact.html "contact-form-area": enquiry + FAQ */}
      <section className="contact-form-area ff-enquiry">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12">
              <SecTitle kicker="Start a conversation" title="Tell us where you'd like dance to take you." />
              <EnquiryForm />
              <p className="ff-small">No payment required. We'll respond personally.</p>
            </div>
            <div className="col-xl-6 col-lg-12">
              <Faq />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
