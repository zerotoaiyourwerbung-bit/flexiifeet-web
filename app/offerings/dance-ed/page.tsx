import type { Metadata } from "next";
import {
  AgeLevels,
  Explainer,
  ExplorePrograms,
  IconGrid,
  InfoAsk,
  OverlapFeature,
  SchoolLogos,
  SecTitle,
  SplitList,
  Testimonials,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "About DanceED – Dance Education for Schools",
  description:
    "DanceED is The FlexiiFeet's structured, NEP 2020 aligned dance education program for schools, Nursery to Grade 12: syllabus, pillars, grade-wise curriculum and ways to bring dance into your school.",
  alternates: { canonical: "/offerings/dance-ed" },
};

// Photos framing the intro statement (top row, left side, right side, bottom row).
const mosaic = ["g1.jpg", "g2.jpg", "g3.jpg", "g4.jpg", "g5.jpg", "mic.jpg", "team-ayush.jpg", "team-ekta.jpg", "team-harshit.png", "team-prachi.png", "hero-khokho.jpg", "ayush-stage.jpg", "about-banner.png", "g1.jpg", "g2.jpg", "g5.jpg"];

const different = [
  { title: "Structured Curriculum", icon: "icon-content", text: "Not random choreography. A real syllabus, Nursery to Grade 12." },
  { title: "NEP 2020 Aligned", icon: "icon-calendar", text: "Designed to meet national education goals for performing arts." },
  { title: "Trained Faculty", icon: "icon-student", text: "Instructors personally trained by Ayush Lokre." },
  { title: "School-First Approach", icon: "icon-career", text: "We work within your timetable, your campus, your culture." },
  { title: "Holistic Outcomes", icon: "icon-brain", text: "We track growth in confidence, coordination, and expression—not just steps." },
];

const pillars = [
  { title: "Physical Development", icon: "icon-heart", iconImg: "/live/pillars/physical.png", text: "Motor skills, coordination, strength, fitness." },
  { title: "Emotional Maturity", icon: "icon-star", iconImg: "/live/pillars/emotional.png", text: "Self-expression, stress relief, confidence." },
  { title: "Social Awareness", icon: "icon-network", iconImg: "/live/pillars/social.png", text: "Teamwork, empathy, communication." },
  { title: "Cognitive Growth", icon: "icon-brain", iconImg: "/live/pillars/cognitive.png", text: "Memory, focus, sequencing, problem-solving." },
];

const research = [
  { title: "Sharper Minds", icon: "icon-brain", text: "Dance improves memory, focus, and pattern recognition. Studies show children in dance programs perform better in literacy and numeracy." },
  { title: "Stronger Bodies", icon: "icon-heart", text: "Better posture. Improved coordination. Greater flexibility. Dance keeps children naturally active—without it feeling like “exercise.”" },
  { title: "Healthier Emotions", icon: "icon-star", text: "Dance is an outlet. It helps children manage stress, express feelings, and build emotional resilience. Confidence grows with every class." },
  { title: "Better Together", icon: "icon-network", text: "Working in groups, syncing with others, supporting teammates—dance builds social awareness, empathy, and collaboration like few other activities can." },
];

const pathway = [
  { title: "Warm-Ups", text: "Strength, rhythm, body readiness." },
  { title: "Floor Work", text: "Flexibility, posture, balance." },
  { title: "Centre Practice", text: "Coordination, alignment, control." },
  { title: "Dance Terminology", text: "Age-appropriate vocabulary." },
  { title: "Movement Patterns", text: "Spatial awareness, transitions." },
  { title: "Choreography", text: "Applying technique into sequences." },
  { title: "Creative Activities", text: "Expression, teamwork, joy." },
];

const included = [
  "Weekly structured dance classes",
  "Age-appropriate syllabus (Nursery–12)",
  "Choreography for Annual Day and Sports Day",
  "All sessions conducted on school premises",
  "Observation-based progress tracking (no exam pressure)",
  "Trained instructors with child safety protocols in place",
];

const levels = [
  { title: "Step Zero", range: "Play Group – UKG", text: "Motor skills, posture, rhythm, creative play" },
  { title: "Foundation", range: "Grades 1 – 5", text: "Foundations, grooves, coordination, basic styles" },
  { title: "Technique", range: "Grades 6 – 10", text: "Technique, musicality, multiple styles, performance" },
  { title: "Spotlight", range: "Grades 11 – 12", text: "Advanced training, stagecraft, creative expression" },
];

const moreWays = [
  {
    title: "Dance-A-Thon",
    tag: "After-School Program",
    text: "A high-energy program focused on fitness, fun, and commercial dance styles. Conducted after school hours, 2x per week.",
    points: ["Cardio-based dance fitness", "Popular styles and grooves", "Confidence and rhythm building", "No exams. Just energy and joy."],
    close: "Perfect for students who want to move more—without academic pressure.",
  },
  {
    title: "Summer & Winter Funk",
    tag: "Seasonal Intensives",
    text: "Short-term dance programs during school breaks. High-energy, performance-oriented, and showcase-ready.",
    points: ["1–2 week intensive formats", "Themed performances", "Great for annual day prep or inter-school events"],
    close: "Turn vacation time into performance time.",
  },
  {
    title: "Move for Good",
    tag: "Free Happiness Workshop",
    text: "A single-session well-being initiative that brings joy, rhythm, and emotional refresh into the school day.",
    points: ["Can be held during assembly or in the auditorium", "Stress-relief through movement", "Promotes arts awareness and school spirit", "Offered free to schools"],
    close: "A great first step to experience The FlexiiFeet in action.",
  },
];

const quotes = [
  {
    text: "Students always looked forward to dance sessions—Ayush made them fun while helping them excel. A committed and inspiring instructor.",
    name: "Dipti Ingley",
    role: "Principal, KLES' International School, Belagavi",
    img: "/flow/dipti-ingley.jpg" as string | undefined,
    initials: "DI",
  },
  {
    text: "Ayush Sir is passionate about kids' happiness, their expressions, and the dance moves. Highly recommended.",
    name: "Sugandha Bhatia",
    role: "Director, Wonderland School, Indore",
    img: undefined as string | undefined,
    initials: "SB",
  },
];

const faqs = [
  { q: "What is DanceED?", a: "DanceED is The FlexiiFeet's in-school program: a structured, syllabus-based dance curriculum that runs through the academic year, with weekly classes designed for each age group from Nursery to Grade 12." },
  { q: "How is it different from an extracurricular dance class?", a: "It follows a clear learning pathway and grade-wise syllabus, so dance becomes part of a child's education rather than a one-off activity. Progress is tracked by observation, with no exam pressure." },
  { q: "How does it relate to NEP 2020 and CBSE?", a: "NEP 2020 recognizes performing arts, including dance, as essential to holistic education, and CBSE mandates art education (music, dance, visual arts, theatre) for Classes 1–10, with a minimum of 2 periods per week." },
  { q: "Can we try it before committing?", a: "Yes. Start with a free Move for Good workshop, a single-session well-being initiative that can be held during assembly or in the auditorium." },
  { q: "Can DanceED include the annual day?", a: "Yes. Choreography for Annual Day and Sports Day is part of the program, and is also available separately." },
];

export default function DanceEdInfo() {
  return (
    <>
      <section className="ff-dhero">
        <div className="container ff-dhero-grid">
          <div>
            {/* <span className="ff-pill-tag">Nursery to Grade 12 · NEP 2020 aligned</span> */}
            <h1>
              Educating and Empowering Young Minds through <span className="ff-underline">Dance & Performing Arts</span>
            </h1>
            <p>
              DanceED is structured dance education for schools: a real syllabus, taught by trained instructors, right
              within the school day.
            </p>
            <div className="ff-cta-buttons" style={{ justifyContent: "flex-start" }}>
              <a className="ff-btn ff-btn--grad" href="#enquire">
                Book a free workshop
              </a>
              <a className="ff-btn ff-btn--outline" href="#pathway">
                See how it works
              </a>
            </div>
            <div className="ff-proof-row">
              <span className="ff-proof-faces">
                {["team-ayush.jpg", "team-ekta.jpg", "team-harshit.png", "team-prachi.png"].map((f) => (
                  <img key={f} src={`/live/${f}`} alt="" />
                ))}
              </span>
              <span>
                <strong>10,000+ students</strong>
                trained across India &amp; the U.S.
              </span>
            </div>
          </div>
          <div className="ff-dhero-collage">
            {["g1.jpg", "about-banner.png", "g4.jpg", "g2.jpg"].map((f) => (
              <img key={f} src={`/live/${f}`} alt="Students dancing with The FlexiiFeet" />
            ))}
          </div>
        </div>
      </section>

      <section className="ff-section">
        <div className="container">
          <div className="ff-mosaic">
            {mosaic.map((f, i) => (
              <img key={i} src={`/live/${f}`} alt="" loading="lazy" />
            ))}
            <div className="ff-mosaic-center">
              <h2>
                We don&rsquo;t teach kids to dance. <span className="ff-grad-text">We help them grow through dance.</span>
              </h2>
              <p>
                At The FlexiiFeet, dance is not an activity. It&rsquo;s a structured learning experience that builds
                confident, expressive, and well-rounded individuals. We believe every child deserves to move freely,
                express boldly, and develop holistically right within the school they already attend.
              </p>
              <p>
                Our programs go beyond steps and routines. We focus on what stays with a child long after the music
                stops: confidence, discipline, creativity, and joy.
              </p>
            </div>
          </div>
          <div className="ff-diff">
            <h3>What makes us different?</h3>
            <dl>
              {different.map((d) => (
                <div key={d.title}>
                  <dt>{d.title}</dt>
                  <dd>{d.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <OverlapFeature kicker="Policy" title="Dance belongs in schools. And now, policy agrees." img="/live/g3.jpg" imgAlt="Choreographers from The FlexiiFeet" reverse>
        <p>
          National Education Policy (NEP) 2020 recognizes performing arts, including dance, as essential to holistic
          education. CBSE mandates art education (music, dance, visual arts, theatre) as compulsory for Classes 1–10,
          with a minimum of 2 periods per week.
        </p>
        <p>This isn&rsquo;t an &ldquo;extra.&rdquo; It&rsquo;s part of how we&rsquo;re meant to educate children.</p>
      </OverlapFeature>

      <IconGrid kicker="The 4 pillars" title="The 4 Pillars of Dance-Based Development" items={pillars} twoCol />

      <Explainer kicker="Why it works" title="Dance engages the whole child" img="/live/g4.jpg" imgAlt="Students dancing together" alt>
        <p>
          Dance engages the whole child, body, mind, and emotion, in a single activity. It&rsquo;s experiential learning
          at its best: structured, joyful, and deeply impactful.
        </p>
        <p>
          When a child learns to move with intention, they learn to think with clarity and feel with awareness.
        </p>
      </Explainer>

      <IconGrid kicker="What research tells us" title="This is not only about stage performances. It's about what happens inside your students." items={research} twoCol />
      <p className="ff-note text-center">
        Dance is one of the few activities that develops a child physically, emotionally, socially, and cognitively, all
        at once.
      </p>
      <div className="container">
        <figure className="ff-grad-quote">
          <img src="/live/ayush-graduation.png" alt="Ayush Lokre at his graduation ceremony with Shiamak Davar" loading="lazy" />
          <blockquote>
            &ldquo;The aim of dance education is not only to teach dance. It&rsquo;s to create humans who can move
            through life with confidence and creativity.&rdquo;
            <cite>Ayush Lokre at his Graduation Ceremony, SDIPA 2016–17</cite>
          </blockquote>
        </figure>
      </div>

      <section id="pathway" className="ff-section alt">
        <div className="container">
          <div className="ff-pathway">
            <div className="ff-pathway-intro">
              <SecTitle kicker="Structured. Syllabus-based. School-integrated." title="Every session follows a clear learning pathway" />
              <p>Seven steps, in the same order every class, that build from body readiness to creative expression.</p>
            </div>
            <ol className="ff-pathway-list">
              {pathway.map((st, i) => (
                <li key={st.title}>
                  <span className="ff-pathway-num">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{st.title}</h3>
                    <p>{st.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <SplitList
        kicker="What's included"
        title="Our in-school DanceEd Program"
        text="It runs through the academic year, with weekly classes designed for each age group from Nursery to Grade 12."
        items={included}
        img="/live/g5.jpg"
        imgAlt="Students performing at a school event"
      />

      <AgeLevels levels={levels} kicker="Grade-wise curriculum snapshot" title="From Play Group to Grade 12" />

      <section className="ff-section alt">
        <div className="container">
          <img className="ff-wide-photo" src="/live/school-kids.png" alt="Students and their instructor in costumes at a FlexiiFeet dance session" loading="lazy" />
          <SecTitle kicker="More ways to bring dance into your school" title="Programs beyond the weekly class" center />
          <div className="ff-icon-grid">
            {moreWays.map((w) => (
              <div key={w.title} className="ff-hot-card">
                <h3>{w.title}</h3>
                <span className="ff-more-tag">{w.tag}</span>
                <p>{w.text}</p>
                <ul className="ff-ticks">
                  {w.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <p>{w.close}</p>
              </div>
            ))}
          </div>
          {/* <div className="ff-moments-row">
            {["moment-1.png", "moment-2.png", "moment-3.png"].map((f) => (
              <img key={f} src={`/live/${f}`} alt="The FlexiiFeet team with industry guests" loading="lazy" />
            ))}
          </div> */}
        </div>
      </section>

      <SchoolLogos />
      <Testimonials items={quotes} />

      <ExplorePrograms current="/offerings/dance-ed" />
      <InfoAsk faqItems={faqs} program="DanceED (Schools)" topic="DanceED" />
    </>
  );
}
