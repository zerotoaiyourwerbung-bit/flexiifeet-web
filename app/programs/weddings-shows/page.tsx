import type { Metadata } from "next";
import { ExplorePrograms, IconGrid, InfoAsk, Overview, PageBanner, SecTitle, Steps } from "@/components/sections";

export const metadata: Metadata = {
  title: "About Wedding & Show Choreography",
  description:
    "About The FlexiiFeet's wedding, sangeet and stage show choreography: what we offer, dance styles, how rehearsals work, and where we've performed.",
  alternates: { canonical: "/programs/weddings-shows" },
};

const facts = [
  { label: "For", value: "Couples, families & companies" },
  { label: "Occasions", value: "Sangeet, mehndi, wedding entries, corporate shows" },
  { label: "Rehearsals", value: "At home, at our studio or online" },
  { label: "Skill level", value: "First-timers welcome" },
  { label: "Travel", value: "Destination weddings (Goa, Udaipur, Dubai)" },
];

const offers = [
  { title: "Couple Dance Choreography", img: "/live/w-couple.jpg", text: "Make your first dance as a married couple iconic, with personalised sequences, romantic storytelling and moves tailored to your comfort level." },
  { title: "Family & Group Performances", img: "/live/w-family.jpg", text: "From grandparents to best friends, we create joyful, inclusive choreography for all age groups." },
  { title: "Sangeet & Mehndi Performances", img: "/live/w-sangeet.jpg", text: "High-energy, professionally guided dances for every wedding function." },
  { title: "Rehearsals at Home, Studio or Online", img: "/live/w-rehearsal.png", text: "Flexible rehearsal options that fit your schedule and comfort." },
  { title: "Theme-Based Concepts & Entries", img: "/live/w-theme.png", text: "Bride & groom entries, musical pheras, cinematic entrances and themed acts with costumes and stage presence." },
  { title: "Corporate Events & Stage Shows", img: "/live/g4.jpg", text: "Choreography and performances that captivate an audience, with props and high-energy concepts." },
];

const why = [
  { title: "Trained by Industry Pros", icon: "icon-star", text: "Choreographers who've worked with Bollywood stars and on global stages." },
  { title: "Performance-Ready Coaching", icon: "icon-speaker", text: "We coach you to own the stage, smile through the nerves and shine under the lights." },
  { title: "All Skill Levels", icon: "icon-heart", text: "First time dancing? No problem. Rehearsals are fun and pressure-free." },
  { title: "Inclusive for Families", icon: "icon-network", text: "Formats for kids, elders and large groups, so everyone gets their spotlight." },
];

const seenAt = [
  { title: "Anant & Radhika Ambani's Wedding", text: "A grand celebration with cinematic-level performances." },
  { title: "Destination Weddings in Goa, Udaipur & Dubai", text: "Bringing the magic to every corner of the world." },
  { title: "High-Profile Bollywood & Corporate Sangeets", text: "Dance styles ranging from hip-hop to Kathak fusion." },
];

const styles = [
  "Bollywood Fusion",
  "Retro Disco & Jazz",
  "Trendy Instagram-Ready Moves",
  "Contemporary & Slow Couple Dances",
  "Classical Touches (Kathak, Bharatanatyam)",
  "Thematic Acts with Props & Visual Effects",
];

const process = [
  { title: "Consultation", text: "We learn about your functions, songs, who is performing and the mood you want." },
  { title: "Concept & songs", text: "We design acts, entries and medleys around your story and traditions." },
  { title: "Rehearsals", text: "At home, at our studio or online, on a schedule that suits your family." },
  { title: "Performance", text: "Everyone steps on stage prepared and confident." },
];

const faqs = [
  { q: "We've never danced before. Is that a problem?", a: "Not at all. Choreography is tailored to your comfort level, and rehearsals are relaxed and fun. Many of the families we work with are first-timers." },
  { q: "Can relatives in other cities take part?", a: "Yes. Rehearsals can happen online, so family members in other cities or countries can learn their part too." },
  { q: "Do you work on destination weddings?", a: "Yes. We have choreographed destination weddings in Goa, Udaipur and Dubai." },
  { q: "What kinds of performances do you choreograph?", a: "Couple dances, family and group acts, sangeet and mehndi performances, bride and groom entries, themed acts and corporate stage shows." },
  { q: "Which dance styles do you use?", a: "Bollywood fusion, retro disco and jazz, contemporary and slow couple dances, classical touches such as Kathak and Bharatanatyam, and more, chosen to suit your songs and comfort." },
];

export default function WeddingsShowsInfo() {
  return (
    <>
      <PageBanner title="Weddings & Shows" sub="About our wedding, sangeet and stage show choreography" />

      <Overview title="We don't just teach steps. We create moments." facts={facts}>
        <p>
          Whether it&apos;s a classic sangeet, a couple performance, a high-energy family medley or a corporate show,
          our choreographers bring your story to life through dance.
        </p>
        <p>
          From Bollywood beats to an elegant couple waltz, every routine is customised to suit your vibe, comfort and
          theme. Our team has assisted Shiamak Davar at some of India&apos;s most elite weddings.
        </p>
      </Overview>

      <section className="ff-section alt">
        <div className="container">
          <SecTitle kicker="What we offer" title="Weddings, sangeet & shows" center />
          <div className="row">
            {offers.map((o) => (
              <div key={o.title} className="col-lg-4 col-md-6">
                <div className="ff-img-card">
                  <img src={o.img} alt={o.title} loading="lazy" />
                  <div className="body">
                    <h3>{o.title}</h3>
                    <p>{o.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <IconGrid kicker="Our approach" title="How we work with families" items={why} img="/live/g1.jpg" imgAlt="Ayush Lokre with fellow artists" />

      <section className="ff-section alt">
        <div className="container">
          <SecTitle kicker="Dance styles" title="Styles we choreograph" center />
          <ul className="ff-chip-row">
            {styles.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ff-section">
        <div className="container">
          <SecTitle kicker="As seen at" title="Assisting Shiamak at India's most elite weddings" center />
          <div className="row">
            {seenAt.map((s) => (
              <div key={s.title} className="col-lg-4">
                <div className="ff-img-card">
                  <div className="body">
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Steps kicker="The process" title="From first conversation to final bow" items={process} alt />
      <ExplorePrograms current="/programs/weddings-shows" />
      <InfoAsk faqItems={faqs} program="Weddings & Shows" topic="wedding choreography" />
    </>
  );
}
