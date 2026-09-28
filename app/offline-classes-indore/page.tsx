import type { Metadata } from "next";
import { AgeLevels, CredStrip, Cta, EnquireFaq, IconGrid, LeadHero, SplitList, Steps, Team } from "@/components/sections";
import type { LeadField } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Dance Classes in Indore",
  description:
    "Offline dance classes in Indore by The FlexiiFeet—Bollywood, contemporary, hip-hop and classical-fusion batches for kids, teens and adults.",
};

const program = "Offline Classes – Indore";

const fields: LeadField[] = [
  { name: "age_group", label: "Learner's age group", type: "select", options: ["Kids (under 13)", "Teens (13–17)", "Adults (18+)", "Couple / Family (wedding prep)"], required: true },
  { name: "timing", label: "Preferred timing", type: "select", options: ["Morning", "Afternoon", "Evening", "Weekends"] },
  { name: "area", label: "Your area in Indore" },
];

const features = [
  { title: "Studio Classes in Indore", icon: "icon-music", text: "In-person training with our lead choreographers and master faculty." },
  { title: "Structured Levels", icon: "icon-student", text: "The same age-wise curriculum we teach in schools, so progress is visible." },
  { title: "Stage Opportunities", icon: "icon-star", text: "Showcases and performances so students experience the stage, not just the studio." },
  { title: "Personal Attention", icon: "icon-support", text: "Batches grouped by age and level, with corrections from faculty who know each student." },
  { title: "Fitness Through Dance", icon: "icon-thunder", text: "Build stamina, flexibility and coordination while having fun." },
  { title: "Wedding & Event Rehearsals", icon: "icon-heart", text: "Sangeet, couple and family routines rehearsed at our studio or at your home." },
];

const benefits = [
  "Confidence that shows on stage and off it",
  "Discipline, focus and better coordination",
  "A healthy, active routine kids look forward to",
  "Friends and a community that loves to dance",
  "Real performance experience at showcases",
];

const steps = [
  { title: "Share your details", text: "Tell us the learner's age and the timing that suits you." },
  { title: "We call you", text: "Get batch options, fees and the studio location." },
  { title: "Visit & try", text: "Come to the studio and meet the faculty." },
  { title: "Join a batch", text: "Train level by level and get ready for the stage." },
];

const faqs = [
  { q: "Where is the studio?", a: "We're based in Indore. Share your details and we'll send the studio location and the batch closest to your timing." },
  { q: "What age can my child start?", a: "Our curriculum starts at the Foundational level for the youngest learners and goes up to adults. We'll suggest the right batch for your child's age." },
  { q: "Which dance styles do you teach?", a: "Bollywood, contemporary, hip-hop, jazz, semi-classical and Kathak fusion, and fitness dance, depending on the batch." },
  { q: "Do students get to perform?", a: "Yes. Showcases and performances are part of the journey, so students experience the stage, not just the studio." },
  { q: "What are the timings and fees?", a: "They depend on the batch and level. Leave your number and we'll share current timings and fees on a quick call." },
];

export default function OfflineIndore() {
  return (
    <>
      <LeadHero
        kicker="Dance classes in Indore"
        title={
          <>
            Let loose &amp; let&apos;s groove, <span>in Indore</span>.
          </>
        }
        sub="Studio dance classes for kids, teens and adults, led by international choreographer Ayush Lokre and team."
        points={["Batches for every age and level", "In-person training with expert faculty", "Showcases and stage experience"]}
        program={program}
        fields={fields}
        formTitle="Book your first class"
        submitLabel="Get batch details"
      />
      <CredStrip />

      <IconGrid kicker="Why FlexiiFeet Indore" title="Train with the team behind India's biggest stages" items={features} img="/live/g1.jpg" imgAlt="Ayush Lokre with fellow artists" />
      <AgeLevels />
      <SplitList
        kicker="What students gain"
        title="More than steps"
        text="Our classes build confidence, discipline, creativity and self-expression through dance."
        items={benefits}
        img="/live/g4.jpg"
        imgAlt="Ayush Lokre with a fellow choreographer"
        reverse
      />
      <Steps title="Joining is simple" items={steps} alt />
      <Team />
      <Cta
        title="Your first class is one call away"
        text="Tell us the learner's age and preferred timing, and we'll suggest the right batch."
        button="Get batch details"
      />
      <EnquireFaq faqItems={faqs} program={program} fields={fields} submitLabel="Get batch details" />
    </>
  );
}
