import type { Metadata } from "next";
import { CredStrip, Cta, EnquireFaq, Intro, LeadHero, NumberedFeatures, SecTitle, Steps } from "@/components/sections";
import type { LeadField } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Weddings & Shows",
  description:
    "Wedding & Sangeet choreography, couple dances, family performances and corporate stage shows by the team that assisted Shiamak Davar at India's most elite weddings.",
};

const offers = [
  { title: "Couple Dance Choreography", img: "/live/w-couple.webp", text: "Make your first dance as a married couple iconic—with personalised sequences, romantic storytelling, and effortless moves tailored to your comfort level." },
  { title: "Family & Group Performances", img: "/live/w-family.webp", text: "From your grandparents to your best friends, we create joyful, inclusive choreographies for all age groups." },
  { title: "Sangeet & Mehndi Performances", img: "/live/w-sangeet.webp", text: "Set the tone for your big day with high-energy, professionally guided dances for every wedding function." },
  { title: "Rehearsals at Home, Studio or Online", img: "/live/w-rehearsal.webp", text: "Flexible rehearsal options that fit your schedule and comfort—at home, online, or in our studio." },
  { title: "Theme-Based Concepts & Entries", img: "/live/w-theme.webp", text: "Bride & groom entries, musical pheras, cinematic entrances and themed acts with costumes and stage presence." },
  { title: "Corporate Events & Stage Shows", img: "/live/g4.webp", text: "Choreography and performances that captivate the audience—professional teaching, shiny props, and high-energy dance concepts." },
];

const why = [
  { title: "Trained by Industry Pros", icon: "icon-star", text: "Learn from choreographers who've worked with Bollywood stars and on global stages." },
  { title: "Performance-Ready Coaching", icon: "icon-speaker", text: "We coach you to own the stage, smile through the nerves, and shine under the lights." },
  { title: "All Skill Levels", icon: "icon-heart", text: "First time dancing? No problem. Fun, pressure-free, and enjoyable for everyone." },
  { title: "Inclusive for Families", icon: "icon-network", text: "Special formats for kids, elders, and large group numbers—everyone gets their spotlight." },
];

const seenAt = [
  { title: "Anant & Radhika Ambani's Wedding", text: "A grand celebration with cinematic-level performances." },
  { title: "Destination Weddings in Goa, Udaipur & Dubai", text: "Bringing magic to every corner of the world." },
  { title: "High-Profile Bollywood & Corporate Sangeets", text: "With dance styles ranging from hip-hop to Kathak fusion." },
];

const styles = [
  "Bollywood Fusion",
  "Retro Disco & Jazz",
  "Trendy Instagram-Ready Moves",
  "Contemporary & Slow Couple Dances",
  "Classical Touches (Kathak, Bharatanatyam)",
  "Thematic Acts with Props & Visual Effects",
];

const program = "Weddings & Shows";

const fields: LeadField[] = [
  { name: "event_type", label: "What are you planning?", type: "select", options: ["Sangeet / Mehndi", "Couple dance", "Bride / groom entry", "Family performance", "Corporate event / stage show", "Other"], required: true },
  { name: "event_date", label: "Event date" },
  { name: "city", label: "City / venue" },
];

const steps = [
  { title: "Free consultation", text: "Tell us about your functions, songs, people performing and your vibe." },
  { title: "Concept & song plan", text: "We design the acts, entries and medleys around your story." },
  { title: "Rehearsals", text: "At home, at our studio or online, on a schedule that fits your family." },
  { title: "Showtime", text: "Everyone walks on stage confident, and the crowd never forgets it." },
];

const faqs = [
  { q: "We've never danced before. Can you still help?", a: "Yes. Our choreography is tailored to your comfort level, and rehearsals are fun and pressure-free. First-timers are our speciality." },
  { q: "Can family members in other cities rehearse too?", a: "Yes. We offer rehearsals at home, at our studio or online, so relatives in other cities or countries can learn too." },
  { q: "Do you choreograph destination weddings?", a: "We have choreographed destination weddings in Goa, Udaipur and Dubai. Share your venue and dates and we'll plan around them." },
  { q: "How early should we book?", a: "As early as you can, especially for peak wedding season. Share your date and we'll confirm availability." },
  { q: "How is it priced?", a: "It depends on the number of performances, people and rehearsal sessions. We share a clear quote after the free consultation." },
];

export default function WeddingsShows() {
  return (
    <>
      <LeadHero
        kicker="Weddings, Sangeet & Shows"
        title={
          <>
            Turn your wedding into a <span>showstopper</span>.
          </>
        }
        sub="Sangeet, couple dances, entries and family acts by the team that assisted Shiamak Davar at India's most elite weddings."
        points={["Tailored to your comfort level", "Rehearsals at home, studio or online", "Destination weddings covered"]}
        program={program}
        fields={fields}
        formTitle="Book a free consultation"
        submitLabel="Book a free consultation"
      />
      <CredStrip />

      <Intro
        title="We don't just teach steps—we create unforgettable moments."
        cta={{ label: "Book a Free Consultation", href: "#enquire" }}
      >
        <p>
          Whether you're planning a classic Sangeet, a dreamy couple performance, a high-energy family medley or a
          corporate show, our expert choreographers bring your story to life through dance.
        </p>
        <p>
          From Bollywood beats to an elegant couple waltz, every routine is fully customised to suit your vibe, comfort,
          and theme—making every celebration a showstopper.
        </p>
      </Intro>

      <section className="ff-section alt">
        <div className="container">
          <SecTitle kicker="Offerings" title="Weddings, Sangeet & Shows" center />
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

      <NumberedFeatures items={why} />

      <section className="ff-section">
        <div className="container">
          <SecTitle kicker="As Seen At" title="Assisting Shiamak at India's most elite weddings" center />
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

      <section className="ff-section alt">
        <div className="container">
          <SecTitle kicker="Dance Styles" title="Our wedding & show dance styles" center />
          <ul className="ff-chip-row">
            {styles.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </section>

      <Steps title="From first call to final bow" items={steps} />
      <Cta
        title="Let's Make Your Wedding a Dance Spectacle"
        text="Intimate celebration or royal wedding week—book a free consultation and let us choreograph your happily-ever-after."
        button="Book a free consultation"
      />
      <EnquireFaq faqItems={faqs} program={program} fields={fields} submitLabel="Book a free consultation" />
    </>
  );
}
