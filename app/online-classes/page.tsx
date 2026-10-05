import type { Metadata } from "next";
import { CredStrip, Cta, EnquireFaq, IconGrid, LeadHero, SecTitle, SplitList, Steps, Team } from "@/components/sections";
import type { LeadField } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Online Dance Classes",
  description:
    "Live online dance classes with The FlexiiFeet—Bollywood, contemporary, hip-hop and classical-fusion for kids, teens and adults, from anywhere in the world.",
};

const program = "Online Classes";
const styles = ["Bollywood", "Contemporary", "Hip-Hop", "Jazz", "Semi-Classical & Kathak Fusion", "Fitness Dance"];

const fields: LeadField[] = [
  { name: "age_group", label: "Learner's age group", type: "select", options: ["Kids (under 13)", "Teens (13–17)", "Adults (18+)", "Couple / Family (wedding prep)"], required: true },
  { name: "style", label: "Preferred style", type: "select", options: [...styles, "Not sure yet"] },
  { name: "city", label: "City & country" },
];

const features = [
  { title: "Live, Interactive Sessions", icon: "icon-chat", text: "Real-time classes with feedback from our choreographers, not pre-recorded videos." },
  { title: "Learn From Anywhere", icon: "icon-network", text: "Join from home in India or abroad. All you need is a phone or laptop and a little space." },
  { title: "Batches by Age & Level", icon: "icon-student", text: "Separate batches for kids, teens and adults so everyone learns at the right pace." },
  { title: "Structured Progress", icon: "icon-chart", text: "The same level-wise curriculum we teach in schools, so progress is visible." },
  { title: "Wedding Prep Online", icon: "icon-heart", text: "Sangeet and couple routines taught remotely for families spread across cities." },
  { title: "Expert Choreographers", icon: "icon-star", text: "Learn from a team that has performed at IIFA, IPL, Dubai Expo and more." },
];

const whoFor = [
  "Kids who want a fun, active hobby with real structure",
  "Teens building skills for school shows and competitions",
  "Adults who want to dance, get fit and de-stress",
  "Families and couples preparing for a sangeet or wedding",
  "Indian families abroad who want Bollywood and Indian styles",
];

const steps = [
  { title: "Tell us about the learner", text: "Share age, experience and the style you'd like to learn." },
  { title: "Get a batch suggestion", text: "We call you with the right batch, timings and fees." },
  { title: "Try a class", text: "Join a class live and meet your choreographer." },
  { title: "Keep grooving", text: "Learn level by level, with regular feedback on your progress." },
];

const faqs = [
  { q: "What do I need to join?", a: "A phone or laptop with a stable internet connection and a little open space to move. That's it." },
  { q: "Are the classes live or recorded?", a: "Live. Our choreographers teach in real time and give feedback during the class." },
  { q: "Is there a trial class?", a: "Share your details and we'll tell you about trial options for the batch that suits you." },
  { q: "I'm a complete beginner. Is that okay?", a: "Of course. Batches are grouped by age and level, so beginners learn with beginners." },
  { q: "What are the timings and fees?", a: "They depend on the batch and style. Leave your number and we'll share current timings and fees on a quick call." },
];

export default function OnlineClasses() {
  return (
    <>
      <LeadHero
        kicker="Online classes · Kids, teens & adults"
        title={
          <>
            Live dance classes from <span>anywhere</span> in the world.
          </>
        }
        sub="Learn Bollywood, contemporary, hip-hop and more from the team that has trained 10,000+ students across India and the USA."
        points={["Live, interactive classes", "Batches by age and level", "Learn from home, in India or abroad"]}
        program={program}
        fields={fields}
        formTitle="Find the right batch"
        submitLabel="Get batch details"
      />
      <CredStrip />

      <IconGrid kicker="Why learn with us" title="The FlexiiFeet studio, on your screen" items={features} img="/live/hero.webp" imgAlt="Ayush Lokre backstage at the IIFA Awards" />

      <section className="ff-section alt">
        <div className="container">
          <SecTitle kicker="Dance styles" title="What you can learn online" center />
          <ul className="ff-chip-row">
            {styles.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </section>

      <SplitList
        kicker="Who it's for"
        title="Made for every kind of dancer"
        items={whoFor}
        img="/live/g2.webp"
        imgAlt="Ayush Lokre with a student"
      />
      <Steps title="Start dancing in four steps" items={steps} alt />
      <Team />
      <Cta
        title="Your first class is one call away"
        text="Tell us the learner's age and preferred style, and we'll suggest the right batch."
        button="Get batch details"
      />
      <EnquireFaq faqItems={faqs} program={program} fields={fields} submitLabel="Get batch details" />
    </>
  );
}
