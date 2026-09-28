import type { Metadata } from "next";
import { AgeLevels, Cta, Intro, NumberedFeatures, PageBanner, SchoolLogos, SecTitle, Testimonials, WhatWeDo } from "@/components/sections";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "DanceED – School-Integrated Dance Curriculum",
  description:
    "DanceED: a structured, NEP 2020-aligned dance curriculum for schools, Nursery to Class 12. Weekly classes, annual function choreography, teacher training and competition prep.",
};

const whySchools = [
  { title: "Curriculum-Aligned", icon: "icon-content", text: "Designed by subject experts and educators, blending physical activity with emotional and cognitive development." },
  { title: "Age-Specific Modules (3–18)", icon: "icon-student", text: "Every lesson is developmentally appropriate—matching age, ability, and energy." },
  { title: "Skill Development", icon: "icon-brain", text: "Discipline, creativity, teamwork, and self-esteem—essential life skills for the 21st-century learner." },
  { title: "Fits Your Timetable", icon: "icon-calendar", text: "Trained instructors conduct weekly classes within school hours as part of your arts education plan." },
];

const highlights = [
  { title: "Weekly Dance Classes", icon: "icon-music", text: "Age-specific syllabus aligned with NEP 2020, taught by trained professionals." },
  { title: "Annual Function & Competition Choreography", icon: "icon-star", text: "Engaging performances for school events, competitions, and showcases." },
  { title: "Teacher Training Workshops", icon: "icon-career", text: "Upskilling your staff in basic dance pedagogy and classroom integration methods." },
];

const steps = [
  { title: "Assessment & Planning", text: "We understand your school's goals and create a personalised dance curriculum." },
  { title: "Program Implementation", text: "Our expert team conducts weekly classes, workshops, and event choreography." },
  { title: "Ongoing Support & Reporting", text: "Regular updates, performance tracking, and continuous staff training." },
];

export default function DanceEd() {
  return (
    <>
      <PageBanner bg="/live/g3.jpg" title="DanceED" sub="School-integrated dance curriculum · Nursery to Class 12 · NEP 2020 aligned" />

      <Intro
        title="Transforming Classrooms Through the Power of Performing Arts"
        cta={{ label: "Bring DanceED to Your School", href: whatsappLink("Hi! I'd like to bring DanceED to our school.") }}
      >
        <p>
          Dance is not just an extracurricular—it's a core part of a child's holistic development. DanceED is a
          structured, syllabus-based curriculum designed to nurture confidence, creativity, coordination, and character in
          students from Nursery to Class 12.
        </p>
        <p>
          Aligned with the National Education Policy (NEP) 2020, it introduces dance as a meaningful part of
          education—where students not only move, but express, grow, and thrive.
        </p>
      </Intro>

      <NumberedFeatures items={whySchools} />
      <AgeLevels />
      <WhatWeDo kicker="Program Highlights" title="Performing arts education designed for schools" items={highlights} />

      <section className="ff-section alt">
        <div className="container">
          <SecTitle kicker="How It Works" title="A seamless integration process" center />
          <div className="row">
            {steps.map((s, i) => (
              <div key={s.title} className="col-lg-4">
                <div className="ff-img-card">
                  <div className="body">
                    <div className="ff-grad-text" style={{ fontSize: 48, fontWeight: 800 }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SchoolLogos />

      <Testimonials />
      <Cta
        title="Join 8,000+ Transformed Students"
        text="Book a free consultation and we'll design a DanceED plan around your school's goals and timetable."
        message="Hi! I'd like a DanceED consultation for our school."
      />
    </>
  );
}
