import type { Metadata } from "next";
import { AgeLevels, CredStrip, Cta, EnquireFaq, IconGrid, LeadHero, SchoolLogos, SplitList, Steps, Testimonials } from "@/components/sections";
import type { LeadField } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "DanceED – School-Integrated Dance Curriculum",
  description:
    "DanceED: a structured, NEP 2020-aligned dance curriculum for schools, Nursery to Class 12. Weekly classes, annual function choreography, teacher training and competition prep.",
};

const program = "DanceED (Schools)";

const fields: LeadField[] = [
  { name: "school", label: "School name", required: true },
  { name: "city", label: "City", required: true },
  { name: "role", label: "Your role", type: "select", options: ["Principal / Director", "Coordinator", "Teacher", "Trustee / Management", "Parent", "Other"] },
  { name: "students", label: "Approx. number of students", type: "number" },
];

const outcomes = [
  { title: "Confidence", icon: "icon-star", text: "Children who perform in class learn to stand tall, speak up and own the stage." },
  { title: "Discipline & Focus", icon: "icon-brain", text: "Counts, formations and practice routines build attention and self-control." },
  { title: "Teamwork", icon: "icon-network", text: "Group choreography teaches students to listen, adapt and move as one." },
  { title: "Fitness & Coordination", icon: "icon-thunder", text: "An active, joyful period that develops motor skills, stamina and balance." },
  { title: "Creativity", icon: "icon-music", text: "Students interpret music and stories, and learn to express ideas through movement." },
  { title: "Holistic, NEP-Aligned Learning", icon: "icon-content", text: "Performing arts as a meaningful part of education, as NEP 2020 recommends." },
];

const included = [
  "Weekly dance classes within school hours, taught by trained FlexiiFeet instructors",
  "Age-wise syllabus from Nursery to Class 12 (Foundational, Exploratory, Intermediate, Advanced)",
  "Annual function and competition choreography",
  "Teacher training workshops in basic dance pedagogy",
  "Regular progress updates for management and parents",
];

const steps = [
  { title: "Free consultation", text: "We understand your school's goals, timetable, class strength and spaces." },
  { title: "Custom DanceED plan", text: "You get a curriculum and schedule designed around your school." },
  { title: "Classes begin", text: "Our instructors run weekly classes, workshops and event choreography." },
  { title: "Showcase & review", text: "Students perform, and we share progress with you through the year." },
];

const faqs = [
  { q: "Which classes can DanceED cover?", a: "Nursery to Class 12. The syllabus is split into four age-wise levels so every lesson matches the students' age, ability and energy." },
  { q: "Does it fit into our existing timetable?", a: "Yes. Classes run within school hours as part of your arts or co-curricular periods. We plan the schedule with your coordinator." },
  { q: "Who teaches the classes?", a: "Trained FlexiiFeet instructors, following a curriculum designed by our choreographers and educators under Ayush Lokre." },
  { q: "Can you also choreograph our annual day?", a: "Yes. Annual function and competition choreography is part of the DanceED program, and is also available on its own." },
  { q: "How is the program priced?", a: "It depends on the number of students, classes per week and add-ons like annual day choreography. We share a clear proposal after the free consultation." },
];

export default function DanceEd() {
  return (
    <>
      <LeadHero
        kicker="DanceED · For schools"
        title={
          <>
            A structured dance curriculum your students will <span>love</span>.
          </>
        }
        sub="NEP 2020-aligned performing arts for Nursery to Class 12, taught in school hours by trained instructors."
        points={["Age-wise syllabus for every class", "Fits your existing timetable", "Annual day choreography included"]}
        program={program}
        fields={fields}
        formTitle="Book a free school consultation"
        submitLabel="Request a consultation"
      />
      <CredStrip />

      <IconGrid kicker="Why schools choose DanceED" title="More than a dance period" items={outcomes} img="/live/mic.jpg" imgAlt="Ayush Lokre teaching a dance class at a school" />
      <AgeLevels />
      <SplitList
        kicker="What's included"
        title="Everything your school needs, in one program"
        items={included}
        img="/live/g3.jpg"
        imgAlt="Students and choreographers from The FlexiiFeet"
      />
      <Steps title="Up and running in four steps" items={steps} alt />
      <SchoolLogos />
      <Testimonials />
      <Cta
        title="Bring DanceED to your school"
        text="Book a free consultation and we'll design a DanceED plan around your school's goals and timetable."
        button="Book a free consultation"
      />
      <EnquireFaq faqItems={faqs} program={program} fields={fields} submitLabel="Request a consultation" />
    </>
  );
}
