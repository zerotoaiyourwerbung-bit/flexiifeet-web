import type { Metadata } from "next";
import {
  GetInTouch,
  Cta,
  Faq,
  Featured,
  SecTitle,
  Stats,
  TeamSpotlight,
  WhatWeDo,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Ayush Lokre, international choreographer trained under Shiamak Davar, and The FlexiiFeet team—10+ years, 10,000+ students.",
};

const stages = [
  { name: "IIFA Awards", detail: "2019 & 2024", icon: "fa-trophy" },
  { name: "Filmfare Awards", detail: "Awards night", icon: "fa-star" },
  { name: "IPL", detail: "2021 & 2022", icon: "fa-bolt" },
  { name: "Dubai Expo", detail: "2020", icon: "fa-globe" },
  {
    name: "World Chess Olympiad",
    detail: "2022 · for the Prime Minister of India",
    icon: "fa-flag",
  },
  {
    name: "Ambani Wedding",
    detail: "Anant & Radhika's celebrations",
    icon: "fa-diamond",
  },
  { name: "BRICS Summit", detail: "2016", icon: "fa-users" },
  { name: "Hockey India League", detail: "2023", icon: "fa-shield" },
];
const moreStages = [
  "Zee Cine Awards",
  "Mirchi Music Awards",
  "Lux Golden Awards",
];

const why = [
  {
    title: "10+ Years Experience",
    icon: "icon-star",
    text: "In school programs, wedding choreography, and high-profile events.",
  },
  {
    title: "10,000+ Students",
    icon: "icon-student",
    text: "Trained across India and internationally.",
  },
  {
    title: "Prestigious Stages",
    icon: "icon-diamond",
    text: "IIFA, IPL, Dubai Expo, Ambani weddings & more.",
  },
];

export default function About() {
  return (
    <>
      <section className="ff-dhero">
        <div className="container ff-dhero-grid">
          <div>
            <span className="ff-pill-tag">About us</span>
            <h1>About The FlexiiFeet</h1>
            <p>Bringing stories to life through dance in schools, on stage, and at celebrations</p>
            <div className="ff-cta-buttons" style={{ justifyContent: "flex-start" }}>
              <a className="ff-btn ff-btn--grad" href="#enquire">
                Enquire now
              </a>
              <a className="ff-btn ff-btn--outline" href="/contact">
                Contact us
              </a>
            </div>
          </div>
          <div className="ff-dhero-photo ff-dhero-photo--portrait">
            <img src="/live/about-banner.webp" alt="Ayush Lokre with a group of smiling young dancers in a dance studio" />
          </div>
        </div>
      </section>

      <section className="ff-story">
        <div className="container">
          <div className="ff-story-grid">
            <div className="ff-story-head">
              <SecTitle kicker="About The FlexiiFeet" title="We believe every body has a story to tell and dance gives it a language." />
              <img className="ff-story-photo" src="/live/ayush-stage.webp" alt="Ayush Lokre performing on stage" />
            </div>
            <div className="ff-story-body">
              <p>
                The FlexiiFeet was created with a simple idea: to make dance more accessible, meaningful, and
                inspiring, while bringing professional training and creativity into every space we enter.
              </p>
              <p>
                Founded by an internationally experienced choreographer, performer, and dance educator, The FlexiiFeet
                brings together expertise, imagination, and a genuine love for movement. Whether it&rsquo;s a child
                taking their first dance steps, a student pursuing serious training, a school looking to make dance part
                of its learning experience, or a couple wanting their celebration to be unforgettable we create
                experiences that make people move, connect, and express.
              </p>
              <p>
                Our approach goes beyond teaching steps. We focus on confidence, creativity, discipline, expression, and
                the joy of movement, creating an environment where every dancer can discover what they are capable of.
              </p>
              <p>
                From classrooms and studios to screens, stages, schools, weddings, and celebrations, The FlexiiFeet is
                where dance finds its place in everyday life.
              </p>
              <p className="ff-story-close">
                We&rsquo;re here to teach it, live it, celebrate it and help more people find their own rhythm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* about.html "about-style3-area" */}
      {/* <section className="about-style3-area about-page pd130-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div
                className="about-style3-image-box clearfix"
                style={{ background: "#f4f4f4" }}
              >
                <div className="text">
                  <span>International Choreographer</span>
                </div>
                <div className="image-box-one">
                  <img
                    src="/live/ayush-stage.webp"
                    alt="Ayush Lokre performing"
                    className="ff-cover"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-1 col-lg-1 col-md-2">
              <div className="about-style3-title">
                <span>Meet Our Founder</span>
              </div>
            </div>
            <div className="col-xl-5 col-lg-11 col-md-10">
              <div className="about-style3-content-box style2">
                <div className="inner-content">
                  <div className="title">
                    <h2>Choreographer. Performer. Educator.</h2>
                  </div>
                  <div className="text">
                    <p>
                      Ayush Lokre is a celebrated international dancer and
                      choreographer, known for blending passion, precision, and
                      performance into every step. Trained under the legendary
                      Shiamak Davar and having completed a diploma in dance in
                      2016–17, Ayush has spent over a decade teaching at SDIPA
                      and assisting him in grand stage shows and high-profile
                      events across the globe.
                    </p>
                    <p>
                      With infectious energy and a deep-rooted love for
                      teaching, Ayush has trained over 10,000 students in India
                      and the United States—from tiny tots to teens and
                      adults—for annual school shows, competitions, workshops,
                      and stage productions.
                    </p>
                    <p>
                      He has shared the stage with Shah Rukh Khan, Salman Khan,
                      Amitabh Bachchan, Deepika Padukone, Kiara Advani, Ranveer
                      Singh and many more.
                    </p>
                  </div>
                  <div className="authorized-person">
                    <h3>Ayush Lokre</h3>
                    <span>Founder & Artistic Director, The FlexiiFeet</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}


      {/* Who we are: photo collage + story + vision/mission cards */}
      <section className="ff-section ff-who">
        <div className="container">
          <div className="ff-who-grid">
            <div className="ff-who-media">
              <img
                className="ff-who-main"
                src="/live/g1.webp"
                alt="Ayush Lokre with fellow artists"
                loading="lazy"
              />
              <img
                className="ff-who-sub"
                src="/live/mic.webp"
                alt="The FlexiiFeet at an event"
                loading="lazy"
              />
              <div className="ff-who-badge">
                <strong>10+</strong>
                <span>years in professional dance</span>
              </div>
            </div>
            <div>
              <SecTitle kicker="Our Story" title="This is only the beginning." />
              <p className="ff-who-lead">
                What began with a passion for dance has grown into a vision to create something much bigger.
              </p>
              <p>
                Built on over a decade in professional dance, performance and education, The FlexiiFeet was founded by
                an internationally experienced choreographer trained under Shiamak Davar and formerly an Instructor and
                Professional Dancer at SDIPA. His career took him to the IIFA Awards (2019 &amp; 2024), Filmfare, Zee
                Cine Awards, Dubai Expo 2020, BRICS Summit 2016 and World Chess Olympiad 2022.
              </p>
              <p>
                With 10,000+ students trained across India and the USA, we are now growing through online classes,
                regular training, school programs, weddings and entertainment from the stage to the classroom, and
                from the studio to screens around the world.
              </p>
              <div className="ff-vm">
                <div>
                  <i className="fa fa-heart mb-2" role="img" aria-label="Vision"></i>
                  <p>
                    To empower individuals, families, and institutions by
                    unlocking the joy, discipline, and energy of dance through
                    education, celebration, and entertainment.
                  </p>
                </div>
                <div>
                  <i className="fa fa-users mb-2" role="img" aria-label="Mission"></i>
                  <p>
                    To make high-quality dance accessible to every stage of
                    life whether in a classroom, at a wedding, or under the
                    spotlight.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ff-section ff-founders">
        <div className="container">
          <SecTitle kicker="Founders" title="The people behind The FlexiiFeet." center />
          <div className="ff-founders-grid">
            <article className="ff-founder-card">
              <img src="/live/founder-ayush.webp" alt="Ayush Lokre" loading="lazy" />
              <div>
                <h3>Ayush Lokre</h3>
                <span>Co-Founder</span>
                <p>International choreographer, performer and dance educator. 10,000+ students trained across India and the USA.</p>
              </div>
            </article>
            {/* TODO: Animesh Lunavat's bio is a placeholder, replace with real details */}
            <article className="ff-founder-card">
              <img src="/live/founder-animesh.webp" alt="Animesh Lunavat, co-founder of The FlexiiFeet" loading="lazy" />
              <div>
                <h3>Animesh Lunavat</h3>
                <span>Co-Founder</span>
                <p>Animesh Lunavat&rsquo;s bio will be added here.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="ff-section alt ff-profile" id="ayush">
        <div className="container">
          <div className="ff-profile-grid">
            <img className="ff-profile-photo" src="/live/founder-ayush.webp" alt="Ayush Lokre" loading="lazy" />
            <div>
              <SecTitle kicker="Co-Founder" title="Ayush Lokre" />
              <p className="ff-profile-role">Co-Founder | International Choreographer | Dance Educator</p>
              <blockquote className="ff-quote">&ldquo;Dance is not just something to learn &mdash; it&rsquo;s something to experience.&rdquo;</blockquote>
              <p>
                With over a decade of experience in dance, choreography, and dance education, Ayush Lokre is the
                Co-Founder of The FlexiiFeet, a platform built on the belief that dance should be experienced with joy,
                expression, and purpose.
              </p>
              <p>
                Having trained 10,000+ students, Ayush has built a diverse career spanning education, performance,
                choreography, and international dance training. His performance journey includes prestigious platforms
                such as the IIFA Awards, Filmfare Awards, Zee Cine Awards, and the World Chess Olympiad 2022 and many
                more.
              </p>
              <p>
                He has also had the honour of representing India at the Asian Culture Carnival and the Dubai Expo 2020,
                bringing Indian dance and culture to international platforms.
              </p>
              <p>
                As an international choreographer and dance educator, Ayush has conducted dance training and workshops
                in both India and the USA, working with dancers from different backgrounds and age groups.
              </p>
              <p>
                Today, through The FlexiiFeet, Ayush continues to combine his experience as a performer, choreographer,
                and educator to create an environment where dancers don&rsquo;t just learn choreography &mdash; they
                build confidence, express themselves, and truly experience the joy of dance.
              </p>
            </div>
          </div>
          <ul className="ff-profile-stats">
            {[
              ["10+", "Years of Experience"],
              ["10,000+", "Students Trained"],
              ["International", "Choreographer"],
              ["Performer", "at Major Award Shows"],
              ["Represented", "India Internationally"],
            ].map(([a, b]) => (
              <li key={a}>
                <strong>{a}</strong>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* As seen on: dark "marquee lights" band */}
      <section className="ff-stages">
        <div className="container">
          <div className="ff-stages-head">
            <SecTitle
              kicker="As Seen On"
              title={
                <>
                  Some of the world&apos;s <span>grandest stages</span>
                </>
              }
            />
            <p>
              From award nights to stadiums and state events, our choreographers
              have performed and assisted on stages watched by millions.
            </p>
          </div>
          <ul className="ff-stage-grid">
            {stages.map((s) => (
              <li key={s.name} className="ff-stage">
                <i className={`fa ${s.icon}`} aria-hidden="true"></i>
                <strong>{s.name}</strong>
                <span>{s.detail}</span>
              </li>
            ))}
          </ul>
          <p className="ff-stages-more">
            Also: {moreStages.join(" · ")} <em>…and many more</em>
          </p>
        </div>
        <div className="ff-stages-marquee" aria-hidden="true">
          <span>
            IIFA · FILMFARE · IPL · DUBAI EXPO · ZEE CINE AWARDS · BRICS ·{" "}
          </span>
          <span>
            IIFA · FILMFARE · IPL · DUBAI EXPO · ZEE CINE AWARDS · BRICS ·{" "}
          </span>
        </div>
      </section>

      

      {/* <WhatWeDo title={<>Three stages, one passion.</>} /> */}
      <Featured items={why} img="/live/mic.webp" />
      {/* <Stats /> */}
      {/* <TeamSpotlight /> */}
      {/* <Cta
        title="A Trusted Partner in Bringing Dance to Life"
        text="Whether you're looking to educate, entertain, or celebrate, our team delivers with passion and professionalism."
      /> */}
      <GetInTouch
        kicker="Start a conversation"
        title="Tell us what you're planning."
        intro="Schools, classes, weddings or shows, tell us what you have in mind and our team will get back to you. Prefer to talk? Reach us directly:"
        formTitle="Tell us what you're planning"
        submitLabel="Get a free consultation"
      />
    </>
  );
}
