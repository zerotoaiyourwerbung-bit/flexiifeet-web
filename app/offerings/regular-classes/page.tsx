import type { Metadata } from "next";
import { AgeLevels, Explainer, ExplorePrograms, IconGrid, InfoAsk, Overview, PageBanner, SecTitle, Team } from "@/components/sections";

export const metadata: Metadata = {
  title: "About Our Dance Classes in Indore",
  description:
    "About The FlexiiFeet's studio dance classes in Indore: styles, age-wise levels, faculty, performances and what students gain.",
  alternates: { canonical: "/offerings/regular-classes" },
};

const styles = ["Bollywood", "Contemporary", "Hip-Hop", "Jazz", "Semi-Classical & Kathak Fusion", "Fitness Dance"];

const facts = [
  { label: "Where", value: "Indore, at our studio" },
  { label: "For", value: "Kids, teens & adults" },
  { label: "Levels", value: "Foundational to Advanced" },
  { label: "Led by", value: "Ayush Lokre & The FlexiiFeet faculty" },
  { label: "Also", value: "Showcases & wedding rehearsals" },
];

const features = [
  { title: "Studio Classes in Indore", icon: "icon-music", text: "In-person training with our lead choreographers and master faculty." },
  { title: "Structured Levels", icon: "icon-student", text: "The same age-wise curriculum we teach in schools, so progress is visible." },
  { title: "Stage Opportunities", icon: "icon-star", text: "Showcases and performances so students experience the stage, not just the studio." },
  { title: "Personal Attention", icon: "icon-support", text: "Batches grouped by age and level, with corrections from faculty who know each student." },
  { title: "Fitness Through Dance", icon: "icon-thunder", text: "Stamina, flexibility and coordination, built while having fun." },
  { title: "Wedding & Event Rehearsals", icon: "icon-heart", text: "Sangeet, couple and family routines rehearsed at our studio or at home." },
];

const faqs = [
  { q: "Where are the classes held?", a: "At The FlexiiFeet studio in Indore. Get in touch and we'll share the location and the batches available." },
  { q: "Who teaches?", a: "Classes are led by Ayush Lokre and The FlexiiFeet faculty, including our lead choreographers and master classical faculty." },
  { q: "What age groups do you teach?", a: "Kids, teens and adults, following our age-wise levels from Foundational to Advanced." },
  { q: "Which styles are taught?", a: "Bollywood, contemporary, hip-hop, jazz, semi-classical and Kathak fusion, and fitness dance, depending on the batch." },
  { q: "Do students perform?", a: "Yes. Showcases and performances are part of the journey, so students experience the stage and not just the studio." },
];

export default function OfflineIndoreInfo() {
  return (
    <>
      <PageBanner kicker="In Indore" bg="/live/g4.webp" title="Offline Classes – Indore" sub="About our studio dance classes for kids, teens and adults" />

      <Overview title="Let loose & let's groove, in Indore" facts={facts}>
        <p>
          At our Indore studio, students train in person with the team led by Ayush Lokre, an international choreographer trained under Shiamak Davar, who spent more than a decade teaching at
          SDIPA.
        </p>
        <p>
          Classes build confidence, discipline, creativity and self-expression through dance, following the same
          age-wise structure we use in schools.
        </p>
      </Overview>

      <IconGrid kicker="The studio" title="What classes in Indore offer" items={features} alt img="/live/g1.webp" imgAlt="Ayush Lokre with fellow artists" />

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

      <AgeLevels />

      <Explainer kicker="What students gain" title="More than steps" img="/live/g4.webp" imgAlt="Ayush Lokre with a fellow choreographer" reverse alt>
        <p>
          Regular classes give children and adults a healthy, active routine they look forward to. Along the way they
          build discipline, focus and coordination.
        </p>
        <p>
          Just as important are the friendships and the sense of community that come from learning together, and the
          real performance experience students get at our showcases.
        </p>
      </Explainer>

      <Team />
      <ExplorePrograms current="/offerings/regular-classes" />
      <InfoAsk faqItems={faqs} program="Offline Classes – Indore" topic="classes in Indore" />
    </>
  );
}
