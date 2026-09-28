import type { Metadata } from "next";
import { Cta, Featured, PageBanner, SecTitle, Stats, Team, WhatWeDo } from "@/components/sections";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Ayush Lokre, international choreographer trained under Shiamak Davar, and The FlexiiFeet team—10+ years, 8,000+ students, 30+ partner schools.",
};

const stages = [
  "IIFA 2019, 2024 & Filmfare Awards",
  "Zee Cine Awards, Mirchi Music Awards, Lux Golden Awards",
  "IPL 2021 & 2022",
  "Dubai Expo 2020",
  "Hockey India League 2023",
  "Anant & Radhika Ambani's Wedding Celebrations",
  "World Chess Olympiad 2022 (for the Prime Minister of India) & BRICS Summit 2016",
];

const why = [
  { title: "10+ Years Experience", icon: "icon-star", text: "In school programs, wedding choreography, and high-profile events." },
  { title: "8,000+ Students", icon: "icon-student", text: "Trained across India and internationally." },
  { title: "30+ Partner Schools", icon: "icon-mission", text: "Using our integrated, NEP-aligned curriculum." },
  { title: "Prestigious Stages", icon: "icon-diamond", text: "IIFA, IPL, Dubai Expo, Ambani weddings & more." },
];

export default function About() {
  return (
    <>
      <PageBanner title="About Us" sub="Bringing stories to life through dance – in schools, on stage, and at celebrations" />

      {/* about.html "about-style3-area" */}
      <section className="about-style3-area about-page pd130-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="about-style3-image-box clearfix" style={{ background: "#f4f4f4" }}>
                <div className="text">
                  <span>International Choreographer</span>
                </div>
                <div className="image-box-one">
                  <img src="/live/ayush-stage.jpg" alt="Ayush Lokre performing" className="ff-cover" />
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
                      Ayush Lokre is a celebrated international dancer and choreographer, known for blending passion,
                      precision, and performance into every step. Trained under the legendary Shiamak Davar and having
                      completed a diploma in dance in 2016–17, Ayush has spent over a decade teaching at SDIPA and
                      assisting him in grand stage shows and high-profile events across the globe.
                    </p>
                    <p>
                      With infectious energy and a deep-rooted love for teaching, Ayush has trained over 8,000 students in
                      India and the United States—from tiny tots to teens and adults—for annual school shows,
                      competitions, workshops, and stage productions.
                    </p>
                    <p>
                      He has shared the stage with Shah Rukh Khan, Salman Khan, Amitabh Bachchan, Deepika Padukone, Kiara
                      Advani, Ranveer Singh and many more.
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
      </section>

      <section className="ff-section alt">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <SecTitle kicker="As Seen On" title="Some of the world's grandest stages" />
            </div>
            <div className="col-lg-6">
              <ul className="ff-ticks">
                {stages.map((s) => (
                  <li key={s}>{s}</li>
                ))}
                <li>…and many more</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="ff-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <SecTitle kicker="Who We Are" title="Dance is more than movement." />
            </div>
            <div className="col-lg-6">
              <p>
                At The FlexiiFeet, dance is a form of expression, celebration, and education. With a legacy of 10+ years
                in professional dance, we have trained 8,000+ students, delivered prestigious performances across the
                globe, and partnered with leading schools and luxury wedding clients alike.
              </p>
              <p>
                Our versatile team brings together choreographers, educators, and performers who merge creativity with
                structure—delivering unforgettable experiences at every level.
              </p>
              <p>
                <strong>Vision:</strong> To empower individuals, families, and institutions by unlocking the joy,
                discipline, and energy of dance—through education, celebration, and entertainment.
              </p>
              <p>
                <strong>Mission:</strong> To make high-quality dance accessible to every stage of life—whether in a
                classroom, at a wedding, or under the spotlight.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhatWeDo title={<>Three stages, one passion.</>} />
      <Featured items={why} img="/live/mic.jpg" />
      <Stats />
      <Team />
      <Cta
        title="A Trusted Partner in Bringing Dance to Life"
        text="Whether you're looking to educate, entertain, or celebrate, our team delivers with passion and professionalism."
      />
    </>
  );
}
