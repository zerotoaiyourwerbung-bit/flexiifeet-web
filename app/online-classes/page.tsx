import type { Metadata } from "next";
import { Cta, Intro, NumberedFeatures, PageBanner, SecTitle, Team } from "@/components/sections";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Online Dance Classes",
  description:
    "Live online dance classes with The FlexiiFeet—Bollywood, contemporary, hip-hop and classical-fusion for kids, teens and adults, from anywhere in the world.",
};

const features = [
  { title: "Live, Interactive Sessions", icon: "icon-chat", text: "Real-time classes with feedback from our choreographers—not pre-recorded videos." },
  { title: "Learn From Anywhere", icon: "icon-network", text: "Join from home in India or abroad; all you need is a phone or laptop and a little space." },
  { title: "Kids, Teens & Adults", icon: "icon-student", text: "Separate batches by age and level so everyone learns at the right pace." },
  { title: "Wedding Prep Online", icon: "icon-heart", text: "Sangeet and couple routines taught remotely for families spread across cities." },
];

const styles = ["Bollywood", "Contemporary", "Hip-Hop", "Jazz", "Semi-Classical & Kathak Fusion", "Fitness Dance"];

// TODO: add real batch timings, fees and platform (Zoom/Meet) once confirmed.
export default function OnlineClasses() {
  return (
    <>
      <PageBanner bg="/live/g2.jpg" title="Online Classes" sub="Live dance classes with The FlexiiFeet—wherever you are" />

      <Intro
        title="The FlexiiFeet studio, on your screen."
        cta={{ label: "Ask About Batches", href: whatsappLink("Hi! I'd like details about online dance class batches.") }}
      >
        <p>
          Learn from the team that has trained 8,000+ students across India and the USA. Our online classes bring the same
          structure, energy and personal attention as our studio sessions.
        </p>
        <p>Message us for current batch timings, fees and a trial class.</p>
      </Intro>

      <NumberedFeatures items={features} />

      <section className="ff-section">
        <div className="container">
          <SecTitle kicker="Dance Styles" title="What you can learn online" center />
          <ul className="ff-chip-row">
            {styles.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </section>

      <Team />
      <Cta
        title="Book a Trial Class"
        text="Tell us the learner's age and preferred style—we'll suggest the right batch."
        message="Hi! I'd like a trial online class. Age: , Style: "
      />
    </>
  );
}
