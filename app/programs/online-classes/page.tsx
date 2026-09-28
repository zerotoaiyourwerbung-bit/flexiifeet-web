import type { Metadata } from "next";
import { Explainer, ExplorePrograms, IconGrid, InfoAsk, Overview, PageBanner, SecTitle, Steps, Team } from "@/components/sections";

export const metadata: Metadata = {
  title: "About Our Online Dance Classes",
  description:
    "How The FlexiiFeet's live online dance classes work: styles taught, batches by age and level, what you need at home, and who teaches.",
  alternates: { canonical: "/programs/online-classes" },
};

const styles = ["Bollywood", "Contemporary", "Hip-Hop", "Jazz", "Semi-Classical & Kathak Fusion", "Fitness Dance"];

const facts = [
  { label: "For", value: "Kids, teens & adults" },
  { label: "Format", value: "Live, interactive online classes" },
  { label: "Where", value: "Anywhere: India or abroad" },
  { label: "You need", value: "A phone or laptop and some open space" },
  { label: "Styles", value: "Bollywood, contemporary, hip-hop & more" },
];

const features = [
  { title: "Live, Interactive Sessions", icon: "icon-chat", text: "Real-time classes with feedback from our choreographers, not pre-recorded videos." },
  { title: "Learn From Anywhere", icon: "icon-network", text: "Join from home in India or abroad. All you need is a phone or laptop and a little space." },
  { title: "Batches by Age & Level", icon: "icon-student", text: "Separate batches for kids, teens and adults so everyone learns at the right pace." },
  { title: "Structured Progress", icon: "icon-chart", text: "A level-wise approach, like the curriculum we teach in schools." },
  { title: "Wedding Prep Online", icon: "icon-heart", text: "Sangeet and couple routines taught remotely for families spread across cities." },
  { title: "Expert Choreographers", icon: "icon-star", text: "Learn from a team that has worked on stages like IIFA, IPL and Dubai Expo." },
];

const session = [
  { title: "Warm-up", text: "Stretching and movement to get the body ready and prevent injury." },
  { title: "Technique", text: "Footwork, rhythm and style basics for the level of the batch." },
  { title: "Choreography", text: "Learning a routine in sections, building it up over the class." },
  { title: "Feedback", text: "Corrections and tips from the choreographer, live." },
];

const faqs = [
  { q: "How do online classes work?", a: "Classes are live. The choreographer teaches in real time and gives feedback during the session, just like in a studio." },
  { q: "What do I need at home?", a: "A phone or laptop with a stable internet connection and a little open space to move." },
  { q: "Who can join?", a: "Kids, teens and adults. Batches are grouped by age and level, so beginners learn with beginners." },
  { q: "Which styles can I learn?", a: "Bollywood, contemporary, hip-hop, jazz, semi-classical and Kathak fusion, and fitness dance." },
  { q: "Can families abroad learn for a wedding?", a: "Yes. We teach sangeet and couple routines online for families spread across cities and countries." },
];

export default function OnlineClassesInfo() {
  return (
    <>
      <PageBanner title="Online Classes" sub="How our live online dance classes work" />

      <Overview title="The FlexiiFeet studio, on your screen" facts={facts}>
        <p>
          Our online classes bring the structure, energy and personal attention of our studio sessions to learners
          wherever they are. They are taught by the same team that has trained 8,000+ students across India and the
          USA.
        </p>
        <p>
          Every class is live. You see the choreographer, they see you, and you get corrections as you learn, so
          progress feels the same as it would in a studio.
        </p>
      </Overview>

      <IconGrid kicker="How it's different" title="What online classes with us look like" items={features} alt img="/live/hero.png" imgAlt="Ayush Lokre backstage at the IIFA Awards" />

      <section className="ff-section">
        <div className="container">
          <SecTitle kicker="Dance styles" title="What you can learn online" center />
          <ul className="ff-chip-row">
            {styles.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </section>

      <Steps kicker="Inside a class" title="What a typical session includes" items={session} alt />

      <Explainer kicker="Who it's for" title="Dance for every age and reason" img="/live/g2.jpg" imgAlt="Ayush Lokre with a student">
        <p>
          Kids come for a fun, active hobby with real structure. Teens build skills for school shows and competitions.
          Adults dance to get fit, de-stress or finally learn the style they always wanted to.
        </p>
        <p>
          We also teach families and couples preparing for a sangeet or wedding, including relatives living in other
          cities or countries who want to rehearse together.
        </p>
      </Explainer>

      <Team />
      <ExplorePrograms current="/programs/online-classes" />
      <InfoAsk faqItems={faqs} program="Online Classes" topic="online classes" />
    </>
  );
}
