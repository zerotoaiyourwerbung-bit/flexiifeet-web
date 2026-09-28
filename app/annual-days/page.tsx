import type { Metadata } from "next";
import { Cta, Intro, NumberedFeatures, PageBanner, SecTitle, Testimonials } from "@/components/sections";
import { gallery, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Annual Day Choreography",
  description:
    "Annual day and school function choreography by The FlexiiFeet—theme concepts, age-wise acts, props, rehearsals and stage-ready shows for every class.",
};

const features = [
  { title: "Theme & Concept", icon: "icon-content", text: "A complete show concept built around your annual day theme, story and message." },
  { title: "Every Class on Stage", icon: "icon-student", text: "Age-appropriate acts for every group—from Nursery tiny tots to senior school." },
  { title: "Props & Costume Guidance", icon: "icon-star", text: "Shiny props, costume ideas and visual concepts that make each act pop." },
  { title: "Rehearsal Schedule", icon: "icon-calendar", text: "Structured rehearsals planned around your school calendar, ending in a full-dress run." },
];

const process = [
  "Theme discussion with your management and teachers",
  "Act-wise song selection and choreography plan",
  "School-hours rehearsals led by our choreographers",
  "Stage blocking, entries & exits, and a full dress rehearsal",
  "Show-day support backstage",
];

export default function AnnualDays() {
  return (
    <>
      <PageBanner title="Annual Days" sub="Stage shows that leave students, parents and teachers inspired" />

      <Intro
        title="Your annual day, choreographed end to end."
        cta={{ label: "Plan Your Annual Day", href: whatsappLink("Hi! I'd like to plan our school's annual day with FlexiiFeet.") }}
      >
        <p>
          From Annual Days to Inter-School Competitions, we choreograph memorable stage shows. Our team has mentored
          dancers of all levels for annual school shows, competitions and stage productions across India and the USA.
        </p>
        <p>We handle concept, choreography, rehearsals and staging—so your teachers can focus on the day itself.</p>
      </Intro>

      <NumberedFeatures items={features} />

      <section className="ff-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <SecTitle kicker="How It Works" title="From theme to curtain call" />
              <ul className="ff-ticks">
                {process.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="ff-img-card">
                <img src={gallery[2]} alt="Students performing at an annual day" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <Cta
        title="Make This Year's Annual Day the Best Yet"
        text="Tell us your date, theme and number of classes—we'll send a plan."
        message="Hi! We'd like annual day choreography. Date: , Theme: , Classes: "
      />
    </>
  );
}
