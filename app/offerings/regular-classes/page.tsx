import type { Metadata } from "next";
import { AgeLevels, CityCta, Explainer, ExplorePrograms, IconGrid, InfoAsk, Overview, PageBanner, SecTitle } from "@/components/sections";

export const metadata: Metadata = {
  title: "About Our Dance Classes in Indore",
  description:
    "About The FlexiiFeet's studio dance classes in Indore: styles, age-wise levels, faculty, performances and what students gain.",
  alternates: { canonical: "/offerings/regular-classes" },
};

const styles = ["Bollywood", "Contemporary", "Hip-Hop", "Jazz", "Semi-Classical & Kathak Fusion", "Dance fit"];

const facts = [
  { label: "Where", value: "Indore, at our studio" },
  { label: "For", value: "Kids, teens & adults" },
  { label: "Levels", value: "Beginner to Advanced" },
  { label: "Led by", value: "Master Ayush Lokre & The FlexiiFeet faculty" },
  { label: "Also", value: "Showcases & wedding rehearsals" },
];

const features = [
  {
    title: "Kids Classes",
    icon: "icon-student",
    text: "Fun, foundational movement and rhythm building confidence, motor skills, and joyful expression.",
  },
  {
    title: "Preteens Classes",
    icon: "icon-star",
    text: "Dynamic choreography and versatile dance styles to build stage presence, agility, and technique.",
  },
  {
    title: "Adults Classes",
    icon: "icon-heart",
    text: "Energetic routines, fitness dance, and expressive movement in a welcoming, judgment-free environment.",
  },
  {
    title: "Private Training",
    icon: "icon-diamond",
    text: "One-on-one personal coaching, audition preparation, and tailored routines designed around your pace.",
  },
];

const faqs = [
  { q: "Where are the classes held?", a: "At The FlexiiFeet studio in Indore. Get in touch and we'll share the location and the batches available." },
  { q: "Who teaches?", a: "Classes are led by Ayush Lokre and The FlexiiFeet faculty, including our lead choreographers and master classical faculty." },
  { q: "What age groups do you teach?", a: "Kids, teens and adults, following our age-wise levels from Foundational to Advanced." },
  { q: "Which styles are taught?", a: "Bollywood, contemporary, hip-hop, jazz, semi-classical and Kathak fusion, and Dance fit, depending on the batch." },
  { q: "Do students perform?", a: "Yes. Showcases and performances are part of the journey, so students experience the stage and not just the studio." },
];

export default function RegularClassesIndoreInfo() {
  return (
    <>
      <PageBanner
        kicker="In Indore"
        bg="/live/Energetic Classroom Group Cheer.webp"
        title="Find Your Rhythm. Own Your Stage."
        sub="Experience the joy of dance with The FlexiiFeet. Join our engaging dance classes designed for kids, teens, and adults to build confidence, master new moves, and express themselves through movement."
        cta="EXPLORE OUR CLASSES"
      />

      <Overview
        title={
          <>
            Indore, It’s Time to <span className="ff-highlight">Move!</span>
          </>
        }
        facts={facts}
        ctaText="Book a trial class"
        ctaHref="#enquire"
      >
        <p>Ready to groove? Join The FlexiiFeet for energetic dance classes, personalised guidance and an experience that goes beyond the dance floor.</p>
        <p>
          At The FlexiiFeet, our regular offline dance classes in Indore offer a structured and engaging learning experience for kids, teens and adults. Led by experienced instructors, our classes combine technique, choreography, musicality and performance skills while building confidence, fitness and creativity. Whether you’re a beginner or an experienced dancer, we provide a supportive environment to learn, grow and enjoy the art of dance.
        </p>
      </Overview>

      <IconGrid kicker="The studio" title="Learn • Perform • Be a Star" items={features} fourCol alt />

      <CityCta />

      <section className="ff-section">
        <div className="container">
          <SecTitle kicker="Dance styles" title="Styles taught at the studio" center />
          <ul className="ff-chip-row">
            {styles.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* <AgeLevels /> */}

      {/* <Explainer kicker="What students gain" title="More than steps" img="/live/g4.webp" imgAlt="Ayush Lokre with a fellow choreographer" reverse alt>
        <p>
          Regular classes give children and adults a healthy, active routine they look forward to. Along the way they
          build discipline, focus and coordination.
        </p>
        <p>
          Just as important are the friendships and the sense of community that come from learning together, and the
          real performance experience students get at our showcases.
        </p>
      </Explainer> */}

      <ExplorePrograms current="/offerings/regular-classes" />
      <InfoAsk faqItems={faqs} program="Regular In-Person Classes – Indore" topic="classes in Indore" />
    </>
  );
}
