import type { Metadata } from "next";
import { CredStrip, Cta, EnquireFaq, IconGrid, LeadHero, Moments, SchoolLogos, SplitList, Steps, Testimonials } from "@/components/sections";
import type { LeadField } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Annual Day Choreography",
  description:
    "Annual day and school function choreography by The FlexiiFeet—theme concepts, age-wise acts, props, rehearsals and stage-ready shows for every class.",
};

const program = "Annual Days";

const fields: LeadField[] = [
  { name: "school", label: "School name", required: true },
  { name: "city", label: "City", required: true },
  { name: "event_date", label: "Event month / date" },
  { name: "students", label: "Approx. students performing", type: "number" },
];

const features = [
  { title: "Theme & Concept", icon: "icon-content", text: "A complete show concept built around your annual day theme, story and message." },
  { title: "Every Class on Stage", icon: "icon-student", text: "Age-appropriate acts for every group, from Nursery tiny tots to senior school." },
  { title: "Props & Costume Guidance", icon: "icon-star", text: "Props, costume ideas and visual concepts that make each act pop on stage." },
  { title: "Rehearsal Schedule", icon: "icon-calendar", text: "Structured rehearsals planned around your school calendar, ending in a full-dress run." },
  { title: "Stage Blocking", icon: "icon-optimization", text: "Entries, exits, formations and transitions planned so the show flows without gaps." },
  { title: "Show-Day Support", icon: "icon-support", text: "Our team backstage on the day so teachers can enjoy the show with parents." },
];

const handled = [
  "Theme discussion with your management and teachers",
  "Act-wise song selection and choreography plan",
  "School-hours rehearsals led by our choreographers",
  "Stage blocking, entries & exits, and a full dress rehearsal",
  "Backstage support on show day",
];

const steps = [
  { title: "Share your date & theme", text: "Tell us your event date, theme and how many classes will perform." },
  { title: "Get a show plan", text: "We propose acts, songs and a rehearsal schedule for every class." },
  { title: "Rehearse", text: "Our choreographers run rehearsals in school hours, then a full-dress run." },
  { title: "Curtain up", text: "We're backstage on the day so every act hits its mark." },
];

const faqs = [
  { q: "How early should we book?", a: "The earlier the better, since rehearsal slots fill up before annual day season. Share your event date and we'll confirm availability and a schedule." },
  { q: "Can every class perform?", a: "Yes. We create age-appropriate acts for every group, from Nursery to senior school, so no class is left out." },
  { q: "Do you work with our theme?", a: "Absolutely. We build the show concept, songs and acts around your theme, story and message." },
  { q: "Do you help with props and costumes?", a: "We give props and costume guidance and visual concepts for each act, so your team knows exactly what to arrange." },
  { q: "How is it priced?", a: "It depends on the number of acts, students and rehearsal days. We share a clear quote once we know your date, theme and classes." },
];

export default function AnnualDays() {
  return (
    <>
      <LeadHero
        kicker="Annual Days · For schools"
        title={
          <>
            An annual day parents will <span>talk about</span> for years.
          </>
        }
        sub="Concept, choreography, rehearsals and staging for every class, handled end to end by our choreographers."
        points={["Theme-based show concept", "Acts for every class, Nursery to senior", "Rehearsals in school hours"]}
        program={program}
        fields={fields}
        formTitle="Plan your annual day"
        submitLabel="Get a show plan"
      />
      <CredStrip />

      <IconGrid kicker="What we handle" title="Your annual day, choreographed end to end" items={features} img="/live/ayush-stage.jpg" imgAlt="Ayush Lokre at the Kho Kho World Cup India" />
      <SplitList
        kicker="So your teachers don't have to"
        title="From theme to curtain call"
        text="We take care of the creative work and the rehearsals, so your staff can focus on the day itself."
        items={handled}
        img="/live/g5.jpg"
        imgAlt="Performers rehearsing on stage"
        reverse
      />
      <Steps title="How we plan your show" items={steps} alt />
      <Moments title="From our stages" />
      <SchoolLogos />
      <Testimonials />
      <Cta
        title="Make this year's annual day the best yet"
        text="Tell us your date, theme and number of classes, and we'll send a show plan."
        button="Get a show plan"
      />
      <EnquireFaq faqItems={faqs} program={program} fields={fields} submitLabel="Get a show plan" />
    </>
  );
}
