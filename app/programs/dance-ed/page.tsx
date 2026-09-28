import type { Metadata } from "next";
import { AgeLevels, Explainer, ExplorePrograms, IconGrid, InfoAsk, Overview, PageBanner, SchoolLogos, Steps, Testimonials, WhatWeDo } from "@/components/sections";

export const metadata: Metadata = {
  title: "About DanceED – Dance Education for Schools",
  description:
    "What DanceED is, how it works in schools, the four age-wise levels from Nursery to Class 12, and how it supports NEP 2020's focus on arts-integrated learning.",
  alternates: { canonical: "/programs/dance-ed" },
};

const facts = [
  { label: "For", value: "Schools, Nursery to Class 12" },
  { label: "Format", value: "Weekly classes within school hours" },
  { label: "Levels", value: "Foundational, Exploratory, Intermediate, Advanced" },
  { label: "Taught by", value: "Trained FlexiiFeet instructors" },
  { label: "Framework", value: "Aligned with NEP 2020" },
  { label: "Partner schools", value: "30+ across India & the USA" },
];

const pillars = [
  { title: "Curriculum-Aligned", icon: "icon-content", text: "Designed by subject experts and educators, blending physical activity with emotional and cognitive development." },
  { title: "Age-Specific Modules (3–18)", icon: "icon-student", text: "Every lesson is developmentally appropriate, matching age, ability and energy." },
  { title: "Skill Development", icon: "icon-brain", text: "Discipline, creativity, teamwork and self-esteem: essential life skills for the 21st-century learner." },
  { title: "Fits the Timetable", icon: "icon-calendar", text: "Trained instructors conduct weekly classes within school hours as part of the arts education plan." },
  { title: "Performance Opportunities", icon: "icon-star", text: "Students take what they learn to the stage at annual days, showcases and competitions." },
  { title: "Teacher Involvement", icon: "icon-career", text: "Workshops help school staff understand dance pedagogy and bring movement into the classroom." },
];

const highlights = [
  { title: "Weekly Dance Classes", icon: "icon-music", text: "Age-specific syllabus aligned with NEP 2020, taught by trained professionals." },
  { title: "Annual Function & Competition Choreography", icon: "icon-star", text: "Engaging performances for school events, competitions and showcases." },
  { title: "Teacher Training Workshops", icon: "icon-career", text: "Upskilling staff in basic dance pedagogy and classroom integration methods." },
];

const year = [
  { title: "Assessment & planning", text: "We understand the school's goals, timetable and spaces, and shape a curriculum around them." },
  { title: "Weekly classes", text: "Instructors follow the level-wise syllabus, building technique step by step." },
  { title: "Showcases & events", text: "Students perform at annual days, competitions and in-class showcases." },
  { title: "Review & reporting", text: "Schools receive regular updates on progress, and staff get continued training." },
];

const faqs = [
  { q: "What is DanceED?", a: "DanceED is The FlexiiFeet's school program: a structured, syllabus-based dance curriculum taught during school hours, from Nursery to Class 12." },
  { q: "How is it different from an extracurricular dance class?", a: "It follows a level-wise syllabus with clear learning goals, so dance becomes part of a child's education rather than a one-off activity." },
  { q: "How does it relate to NEP 2020?", a: "The National Education Policy 2020 encourages arts-integrated, holistic learning. DanceED brings performing arts into the timetable in a structured way that supports that goal." },
  { q: "Which dance styles are taught?", a: "Lessons draw on a range of styles, chosen to suit each age group and level, with a focus on rhythm, coordination, expression and performance." },
  { q: "Can DanceED include the annual day?", a: "Yes. Annual function and competition choreography is part of the program, and is also available separately." },
];

export default function DanceEdInfo() {
  return (
    <>
      <PageBanner title="DanceED" sub="Dance education for schools · Nursery to Class 12 · NEP 2020 aligned" />

      <Overview title="Transforming classrooms through the performing arts" facts={facts}>
        <p>
          Dance is not just an extracurricular. It is a core part of a child&apos;s holistic development. DanceED is a
          structured, syllabus-based curriculum designed to nurture confidence, creativity, coordination and character in
          students from Nursery to Class 12.
        </p>
        <p>
          Aligned with the National Education Policy (NEP) 2020, it introduces dance as a meaningful part of
          education, where students not only move, but express, grow and thrive.
        </p>
        <p>
          The program was built by Ayush Lokre and The FlexiiFeet team from more than a decade of teaching children
          and performing on major stages, and is used today by 30+ partner schools across India and the USA.
        </p>
      </Overview>

      <IconGrid kicker="The approach" title="What makes DanceED work" items={pillars} alt img="/live/mic.jpg" imgAlt="Ayush Lokre teaching a dance class at a school" />
      <AgeLevels />

      <Explainer kicker="Why dance in school" title="Learning that goes beyond the steps" img="/live/g3.jpg" imgAlt="Choreographers from The FlexiiFeet">
        <p>
          A dance class asks children to listen closely, remember sequences, coordinate their bodies and work in step
          with others. Over a year, those small habits add up to better focus, fitness and teamwork.
        </p>
        <p>
          Performing adds something classrooms rarely offer: the experience of preparing for an audience and standing
          in front of it. Many students discover a confidence on stage that carries over into the rest of school life.
        </p>
      </Explainer>

      <WhatWeDo kicker="What the program includes" title="Three parts of DanceED" items={highlights} />
      <Steps kicker="Through the year" title="How DanceED runs in a school" items={year} alt />
      <SchoolLogos />
      <Testimonials />
      <ExplorePrograms current="/programs/dance-ed" />
      <InfoAsk faqItems={faqs} program="DanceED (Schools)" topic="DanceED" />
    </>
  );
}
