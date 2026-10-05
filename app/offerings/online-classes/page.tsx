import type { Metadata } from "next";
import BatchTimings from "@/components/BatchTimings";
import {
  ExplorePrograms,
  Faq,
  IconGrid,
  InfoAsk,
  OverlapFeature,
  SecTitle,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Online Dance Mania – Live Online Bollywood Dance Classes",
  description:
    "Online Dance Mania by Ayush Lokre: live online Bollywood dance classes for kids, teens and adults in the USA. Batch timings in EST, CST and PST, plans and pricing, and class terms.",
  alternates: { canonical: "/offerings/online-classes" },
};

const works = [
  { title: "Live and Interactive Dance Classes", icon: "icon-chat", text: "Live classes taught by professional instructors trained by Ayush Lokre, with master classes by Ayush Lokre himself." },
  { title: "A Structured Syllabus", icon: "icon-content", text: "Technique, discipline, confidence and joyful learning, not just choreography." },
  { title: "Batches by Age", icon: "icon-student", text: "Separate batches for ages 4–7, ages 8–15 and adults, so everyone learns at the right pace." },
  { title: "Built for the USA", icon: "icon-network", text: "Batch timings in Eastern, Central and Pacific time, twice a week, 8 classes a month." },
];

const credits = [
  { title: "Bollywood's biggest names", icon: "icon-star", text: "Has worked with Shah Rukh Khan, Salman Khan, Amitabh Bachchan, Deepika Padukone, Ranveer Singh and Kiara Advani." },
  { title: "Award shows", icon: "icon-diamond", text: "Choreographed and performed at IIFA (2019, 2024), Filmfare, Zee Cine Awards and Lux Golden Awards." },
  { title: "Sport & global stages", icon: "icon-rocket", text: "IPL 2021 & 2022, Hockey India League 2023, World Chess Olympiad 2022, BRICS Summit 2016 and Dubai Expo 2020." },
];

type Row = { age: string; option: string; days: string; time: string };
const zones: { name: string; label: string; rows: Row[] }[] = [
  {
    name: "EST",
    label: "Eastern Time",
    rows: [
      { age: "4–7", option: "Option 1", days: "Mon & Wed", time: "6:00 PM" },
      { age: "4–7", option: "Option 2", days: "Tue & Thu", time: "6:00 PM" },
      { age: "4–7", option: "Option 3", days: "Sat & Sun", time: "1:00 PM" },
      { age: "8–15", option: "Option 1", days: "Mon & Wed", time: "7:00 PM" },
      { age: "8–15", option: "Option 2", days: "Tue & Thu", time: "7:00 PM" },
      { age: "8–15", option: "Option 3", days: "Mon & Wed", time: "12:00 PM" },
      { age: "Adults", option: "Option 1", days: "Mon & Wed", time: "8:30 PM" },
      { age: "Adults", option: "Option 2", days: "Tue & Thu", time: "8:30 PM" },
      { age: "Adults", option: "Option 3", days: "Sat & Sun", time: "11:00 AM" },
    ],
  },
  {
    name: "CST",
    label: "Central Time",
    rows: [
      { age: "4–7", option: "Option 1", days: "Mon & Wed", time: "5:00 PM" },
      { age: "4–7", option: "Option 2", days: "Tue & Thu", time: "5:00 PM" },
      { age: "4–7", option: "Option 3", days: "Sat & Sun", time: "12:00 PM" },
      { age: "8–15", option: "Option 1", days: "Mon & Wed", time: "6:00 PM" },
      { age: "8–15", option: "Option 2", days: "Tue & Thu", time: "6:00 PM" },
      { age: "8–15", option: "Option 3", days: "Sat & Sun", time: "11:00 AM" },
      { age: "Adults", option: "Option 1", days: "Mon & Wed", time: "7:30 PM" },
      { age: "Adults", option: "Option 2", days: "Tue & Thu", time: "7:30 PM" },
      { age: "Adults", option: "Option 3", days: "Sat & Sun", time: "10:00 AM" },
    ],
  },
  {
    name: "PST",
    label: "Pacific Time",
    rows: [
      { age: "4–7", option: "Option 1", days: "Mon & Wed", time: "6:30 PM" },
      { age: "4–7", option: "Option 2", days: "Tue & Thu", time: "6:30 PM" },
      { age: "4–7", option: "Option 3", days: "Sat & Sun", time: "10:00 AM" },
      { age: "8–15", option: "Option 1", days: "Mon & Wed", time: "4:00 PM" },
      { age: "8–15", option: "Option 2", days: "Tue & Thu", time: "7:30 PM" },
      { age: "8–15", option: "Option 3", days: "Sat & Sun", time: "9:00 AM" },
      { age: "Adults", option: "Option 1", days: "Tue & Thu", time: "5:30 PM" },
      { age: "Adults", option: "Option 2", days: "Sat & Sun", time: "8:00 AM" },
    ],
  },
];

const plans = [
  {
    name: "Monthly Plan",
    perks: [
      ["8 sessions", true],
      ["Make-up sessions", false],
      ["Class recording", false],
      ["Pre-recorded tutorial video", false],
      ["Dance project", false],
      ["Certification", false],
    ],
  },
  {
    name: "3-Month Plan",
    perks: [
      ["24 sessions", true],
      ["Make-up: up to 2 classes", true],
      ["Class recording", true],
      ["Tutorial video: 1 song", true],
      ["Dance project: 2 projects", true],
      ["Certification", true],
    ],
  },
  {
    name: "6-Month Plan",
    best: true,
    perks: [
      ["48 sessions", true],
      ["Make-up: up to 4 classes", true],
      ["Class recording", true],
      ["Tutorial video: 2 songs", true],
      ["Dance project: 3 projects", true],
      ["Certification", true],
    ],
  },
] as { name: string; best?: boolean; perks: [string, boolean][] }[];

const terms = [
  { q: "1. No carry forward of classes", a: "All enrolled classes must be attended within the selected package period. Missed classes cannot be carried forward to the next month, session, or season." },
  { q: "2. Make-up classes", a: "Make-up classes are offered only if the class was cancelled by The FlexiiFeet due to an emergency on our side, OR the student missed a class and an alternate slot is available within the same week. They are only available within your chosen package duration, cannot be carried forward to the next season, must be joined at the timing shared by the instructor, and are subject to availability and not guaranteed." },
  { q: "3. No refund policy", a: "Once enrolled, fees are non-refundable and non-transferable under any circumstances." },
  { q: "4. Trial class policy", a: "If you enroll after attending a trial class, the trial will be counted as your first regular class." },
  { q: "5. Punctuality & discipline", a: "Students are expected to join classes on time and follow class instructions to maintain a positive and productive learning environment for everyone." },
  { q: "6. Class structure", a: "Our online classes follow a structured syllabus focused on building technique, discipline, confidence, and joyful learning, not just choreography." },
];

export default function OnlineClassesInfo() {
  return (
    <>
      <section className="ff-dhero">
        <div className="container ff-dhero-grid">
          <div>
            <span className="ff-pill-tag">Live online · Bollywood · For the USA</span>
            <h1>
              Online Dance Mania with <span className="ff-underline">Ayush Lokre</span>
            </h1>
            <p>
              Live online Bollywood dance classes for kids, teens and adults, taught by professional instructors trained
              by Ayush Lokre, with master classes by Ayush himself.
            </p>
            <div className="ff-cta-buttons" style={{ justifyContent: "flex-start" }}>
              <a className="ff-btn ff-btn--grad" href="#enquire">
                Book a trial class
              </a>
              <a className="ff-btn ff-btn--outline" href="#timings">
                See batch timings
              </a>
            </div>
            <div className="ff-proof-row">
              <span>
                <strong>Twice a week · 8 classes a month</strong>
                Batches for ages 4–7, 8–15 and adults
              </span>
            </div>
          </div>
          <div className="ff-dhero-portrait">
            <img src="/live/ayush-online-portrait.webp" alt="Ayush Lokre, celebrity dance choreographer" />
          </div>
        </div>
      </section>

      <IconGrid kicker="How it works" title="Live classes, built like a studio" items={works} twoCol />

      <OverlapFeature
        kicker="Your choreographer"
        title="Ayush Lokre, celebrity dance choreographer"
        img="/live/ayush-online-dance.webp"
        imgAlt="Ayush Lokre in a dance pose"
        cutout
        reverse
      >
        <p>
          Ayush is an internationally trained choreographer and performer who has worked with some of Bollywood&rsquo;s
          biggest names. Trained under celebrity choreographer Shiamak Davar, he has choreographed and performed at major
          award shows, sporting stages and high-profile events around the world.
        </p>
        <p>
          Now he brings that same star-level energy and expertise to live online Bollywood dance classes for the USA.
        </p>
      </OverlapFeature>

      <IconGrid kicker="On his résumé" title="Stages Ayush has worked on" items={credits} alt />

      <section className="ff-section">
        <div className="container">
          <SecTitle kicker="Gallery" title="Moments from the classroom and the stage" center />
          <div className="ff-bento">
            {[
              ["school-kids.webp", "Ayush with young dancers in costume"],
              ["moment-1.webp", "Ayush Lokre with Shiamak Davar"],
              ["moment-2.webp", "Ayush Lokre with a Bollywood guest"],
              ["moment-3.webp", "Ayush Lokre with an IIFA award"],
              ["ayush-stage.webp", "Ayush Lokre on stage"],
            ].map(([f, alt]) => (
              <img key={f} src={`/live/${f}`} alt={alt} loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      <section id="timings" className="ff-section">
        <div className="container">
          <SecTitle kicker="Batch timing" title="Twice a week class (8 classes per month)" center />
          <BatchTimings zones={zones} />
        </div>
      </section>

      <section className="ff-section alt">
        <div className="container">
          <SecTitle kicker="Pricing" title="Choose your plan" center />
          <div className="ff-plans">
            {plans.map((pl) => (
              <div key={pl.name} className={`ff-plan${pl.best ? " is-best" : ""}`}>
                {pl.best && <span className="ff-plan-badge">Best value</span>}
                <h3>{pl.name}</h3>
                <ul>
                  {pl.perks.map(([t, on]) => (
                    <li key={t} className={on ? "on" : "off"}>
                      {t}
                    </li>
                  ))}
                </ul>
                <a className={`ff-btn ${pl.best ? "ff-btn--light" : "ff-btn--grad"}`} href="#enquire">
                  Choose this plan
                </a>
              </div>
            ))}
          </div>
          <p className="ff-note text-center">
            The 6-month plan offers the deepest commitment to learning with maximum savings, complete class recordings,
            tutorial videos, and multiple dance projects to showcase progress.
          </p>
        </div>
      </section>

      <section className="ff-section">
        <div className="container ff-faq-wrap">
          <Faq items={terms} title="Terms and conditions" />
          <p className="ff-note text-center">
            Thank you for your understanding and continued support. We look forward to a joyful, disciplined, and
            enriching dance journey with you.
          </p>
        </div>
      </section>

      <ExplorePrograms current="/offerings/online-classes" />
      <InfoAsk program="Online Classes" topic="online classes" />
    </>
  );
}
