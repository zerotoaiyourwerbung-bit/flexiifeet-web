import type { Metadata } from "next";
import { Explainer, ExplorePrograms, IconGrid, InfoAsk, Moments, Overview, PageBanner, SchoolLogos, Steps, Testimonials } from "@/components/sections";

export const metadata: Metadata = {
  title: "About Annual Day Choreography",
  description:
    "How The FlexiiFeet choreographs school annual days: theme concepts, age-wise acts for every class, rehearsals in school hours, stage blocking and show-day support.",
  alternates: { canonical: "/programs/annual-days" },
};

const facts = [
  { label: "For", value: "Schools: annual days, functions & competitions" },
  { label: "Who performs", value: "Every class, Nursery to senior school" },
  { label: "What we handle", value: "Concept, choreography, rehearsals & staging" },
  { label: "Rehearsals", value: "In school hours, planned around your calendar" },
  { label: "On the day", value: "Our team backstage" },
];

const parts = [
  { title: "Theme & Concept", icon: "icon-content", text: "A complete show concept built around the annual day theme, story and message." },
  { title: "Every Class on Stage", icon: "icon-student", text: "Age-appropriate acts for every group, from Nursery tiny tots to senior school." },
  { title: "Props & Costume Guidance", icon: "icon-star", text: "Props, costume ideas and visual concepts that make each act stand out." },
  { title: "Rehearsal Schedule", icon: "icon-calendar", text: "Structured rehearsals planned around the school calendar, ending in a full-dress run." },
  { title: "Stage Blocking", icon: "icon-optimization", text: "Entries, exits, formations and transitions planned so the show flows smoothly." },
  { title: "Show-Day Support", icon: "icon-support", text: "Our team backstage on the day, so teachers can enjoy the show with parents." },
];

const process = [
  { title: "Theme discussion", text: "We meet management and teachers to understand the theme, story and message of the event." },
  { title: "Act & song plan", text: "Each class gets an act, songs and choreography suited to its age and group size." },
  { title: "Rehearsals", text: "Our choreographers run rehearsals in school hours, followed by stage blocking and a full-dress run." },
  { title: "Show day", text: "We support the show backstage so every act goes on at the right moment." },
];

const faqs = [
  { q: "What does annual day choreography include?", a: "Concept, act-wise song selection, choreography for every class, rehearsals, stage blocking, a full-dress rehearsal and backstage support on the day." },
  { q: "Can very young children take part?", a: "Yes. Acts for Nursery and primary classes are designed around what young children can learn and enjoy, so they shine on stage without pressure." },
  { q: "Do rehearsals disturb regular classes?", a: "Rehearsals are planned with the school around its calendar, so they fit alongside regular teaching." },
  { q: "Can you work with our own theme?", a: "Yes. The show is built around your theme, story and message." },
  { q: "Do you also choreograph inter-school competitions?", a: "Yes. We choreograph for annual days, inter-school competitions and other stage productions." },
];

export default function AnnualDaysInfo() {
  return (
    <>
      <PageBanner title="Annual Days" sub="How we choreograph school annual days, from theme to curtain call" />

      <Overview title="An annual day, choreographed end to end" facts={facts}>
        <p>
          From annual days to inter-school competitions, The FlexiiFeet choreographs school stage shows. Our team has
          mentored dancers of all levels for annual school shows, competitions and stage productions across India and
          the USA.
        </p>
        <p>
          We handle the creative work (concept, songs and choreography) along with rehearsals and staging, so teachers
          can focus on the day itself.
        </p>
      </Overview>

      <IconGrid kicker="What's involved" title="The parts of a great school show" items={parts} alt />

      <Explainer kicker="Why it matters" title="More than a performance" img="/live/g5.jpg" imgAlt="Performers on stage" reverse>
        <p>
          For many students, the annual day is their first time on a real stage. Weeks of rehearsal teach them to
          work as a team, remember their part and hold their nerve in front of an audience.
        </p>
        <p>
          For parents and teachers, it&apos;s a chance to see what the children have grown into. A well-planned show
          makes sure every class gets that moment.
        </p>
      </Explainer>

      <Steps kicker="The process" title="From theme to curtain call" items={process} alt />
      <Moments title="From our stages" />
      <SchoolLogos />
      <Testimonials />
      <ExplorePrograms current="/programs/annual-days" />
      <InfoAsk faqItems={faqs} program="Annual Days" topic="annual days" />
    </>
  );
}
