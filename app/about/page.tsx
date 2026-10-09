import type { Metadata } from "next";
import {
  GetInTouch,
  Cta,
  Faq,
  SecTitle,
  Stats,
  TeamSpotlight,
  WhatWeDo,
} from "@/components/sections";
import Icon, { type IconName } from "@/components/Icon";

export const metadata: Metadata = {
  title: "About Ayush Lokre & Our Team",
  description:
    "Meet Ayush Lokre, international choreographer trained under Shiamak Davar, and The FlexiiFeet team—10+ years, 10,000+ students.",
};

const stages: { name: string; detail: string; icon: IconName }[] = [
  { name: "IIFA Awards", detail: "2019 & 2024", icon: "trophy" },
  { name: "Filmfare Awards", detail: "Awards night", icon: "star" },
  { name: "IPL", detail: "2021 & 2022", icon: "bolt" },
  { name: "Dubai Expo", detail: "2020", icon: "globe" },
  {
    name: "World Chess Olympiad",
    detail: "2022 · for the Prime Minister of India",
    icon: "flag",
  },
  {
    name: "Ambani Wedding",
    detail: "Anant & Radhika's celebrations",
    icon: "gem",
  },
  { name: "BRICS Summit", detail: "2016", icon: "users" },
  { name: "Hockey India League", detail: "2023", icon: "shield" },
];
const moreStages = [
  "Zee Cine Awards",
  "Mirchi Music Awards",
  "Lux Golden Awards",
];

export default function About() {
  return (
    <>
      {/* Hero: intro left, photo card with social links in the middle, proof on the right */}
      <section className="ff-ahero">
        <div className="container ff-ahero-grid">
          <div className="ff-ahero-intro">
            <span className="ff-ahero-hello">Hello, we are</span>
            <h1>
              The <span>FlexiiFeet</span>
            </h1>
            <p>Bringing stories to life through dance in schools, on stage, and at celebrations.</p>
            <a className="ff-btn ff-btn--grad" href="#enquire">
              Enquire now <Icon name="arrow-right" />
            </a>
          </div>

          <div className="ff-ahero-card">
            <img src="/live/about-banner.webp" alt="Ayush Lokre with a group of smiling young dancers in a dance studio" />
          </div>

          <div className="ff-ahero-proof">
            <p className="ff-ahero-note">International choreography and Dance Education</p>
            <p className="ff-ahero-role">
              Dance <span>Education</span>
            </p>
            <ul className="ff-ahero-faces">
              {["ayush", "ekta", "harshit", "prachi"].map((n) => (
                <li key={n}>
                  <img src={`/live/team-${n}.webp`} alt="" />
                </li>
              ))}
              <li className="ff-ahero-badge">10+</li>
            </ul>
            <p className="ff-ahero-count">
              <strong>10,000+</strong> students trained
            </p>
            <p className="ff-ahero-sub">Across India and the USA</p>
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
                  <Icon name="heart" />
                  <p>
                    To empower individuals, families, and institutions by
                    unlocking the joy, discipline, and energy of dance through
                    education, celebration, and entertainment.
                  </p>
                </div>
                <div>
                  <Icon name="users" />
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
          <div className="ff-cofounders">
            <article className="ff-cofounder">
              <img src="/live/founder-ayush.webp" alt="Ayush Lokre" loading="lazy" />
              <div>
                <h3>
                  Ayush Lokre <i>&mdash;</i>
                  <span>Co-Founder</span>
                </h3>
                <p>
                  With over a decade of experience in dance, choreography, and dance education, Ayush Lokre is the
                  Co-Founder of The FlexiiFeet, a platform built on the belief that dance should be experienced with
                  joy, expression, and purpose.
                </p>
                <p>
                  Having trained 10,000+ students, Ayush has built a diverse career spanning education, performance,
                  choreography, and international dance training. His performance journey includes prestigious
                  platforms such as the IIFA Awards, Filmfare Awards, Zee Cine Awards, and the World Chess Olympiad
                  2022 and many more.
                </p>
                <p>
                  He has also had the honour of representing India at the Asian Culture Carnival and the Dubai Expo
                  2020, bringing Indian dance and culture to international platforms.
                </p>
                <p>
                  As an international choreographer and dance educator, Ayush has conducted dance training and
                  workshops in both India and the USA, working with dancers from different backgrounds and age groups.
                </p>
                <p>
                  Today, through The FlexiiFeet, Ayush continues to combine his experience as a performer,
                  choreographer, and educator to create an environment where dancers don&rsquo;t just learn
                  choreography &mdash; they build confidence, express themselves, and truly experience the joy of
                  dance.
                </p>
              </div>
            </article>
            <article className="ff-cofounder">
              <img src="/live/founder-animesh.webp" alt="Animesh Lunavat, co-founder of The FlexiiFeet" loading="lazy" />
              <div>
                <h3>
                  Animesh Lunavat <i>&mdash;</i>
                  <span>Co-Founder</span>
                </h3>
                <p className="ff-cofounder-lead">Four decades of experience, now giving back through dance.</p>
                <p>
                  With over four decades of professional experience, Animesh has led industries, projects and
                  businesses across India and overseas, most recently heading the Indian arm of a Japanese
                  multinational on a pan-India basis.
                </p>
                <p>
                  His association with The FlexiiFeet comes from a desire to give back to the society that has given
                  him so much. He believes dance can create meaningful change &mdash; building confidence, wellbeing,
                  self-expression and joy across generations.
                </p>
                <p>
                  He has mentored entrepreneurs on ethical business, sustainable growth and creating value for
                  society, while also contributing to social initiatives, including work towards the critical
                  challenge of clean and potable water.
                </p>
                <p>
                  At The FlexiiFeet, he brings his experience and perspective to support a vision where dance is not
                  just an art, but a way to enrich lives and bring people together.
                </p>
              </div>
            </article>
          </div>
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
                <Icon name={s.icon} />
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
      {/* Proof in numbers: bento of stat tiles with a tall photo tile */}
      <section className="ff-section ff-facts">
        <div className="container">
          <ul className="ff-facts-grid">
            <li className="ff-fact ff-fact--accent">
              <strong>2</strong>
              <p>
                <b>Countries</b> &mdash; classes and workshops across India and the USA.
              </p>
            </li>
            <li className="ff-fact">
              <strong>10,000+</strong>
              <p>
                <b>Students trained</b> across India and internationally.
              </p>
            </li>
            <li className="ff-fact ff-fact--photo">
              <img src="/live/mic.webp" alt="Ayush Lokre addressing students on stage with a microphone" loading="lazy" />
              <strong>World stages</strong>
              <p>IIFA, IPL, Dubai Expo, Ambani weddings &amp; more.</p>
            </li>
            <li className="ff-fact ff-fact--wide">
              <strong>10+</strong>
              <p>
                <b>Years of experience</b> in school programs, wedding choreography and high-profile events.
              </p>
            </li>
          </ul>
        </div>
      </section>
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
        formTitle="Send us an enquiry"
        submitLabel="Send enquiry"
      />
    </>
  );
}
