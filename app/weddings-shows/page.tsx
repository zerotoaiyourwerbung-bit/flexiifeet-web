import type { Metadata } from "next";
import { Cta, Intro, NumberedFeatures, PageBanner, SecTitle } from "@/components/sections";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Weddings & Shows",
  description:
    "Wedding & Sangeet choreography, couple dances, family performances and corporate stage shows by the team that assisted Shiamak Davar at India's most elite weddings.",
};

const offers = [
  { title: "Couple Dance Choreography", img: "/live/w-couple.jpg", text: "Make your first dance as a married couple iconic—with personalised sequences, romantic storytelling, and effortless moves tailored to your comfort level." },
  { title: "Family & Group Performances", img: "/live/w-family.jpg", text: "From your grandparents to your best friends, we create joyful, inclusive choreographies for all age groups." },
  { title: "Sangeet & Mehndi Performances", img: "/live/w-sangeet.jpg", text: "Set the tone for your big day with high-energy, professionally guided dances for every wedding function." },
  { title: "Rehearsals at Home, Studio or Online", img: "/live/w-rehearsal.png", text: "Flexible rehearsal options that fit your schedule and comfort—at home, online, or in our studio." },
  { title: "Theme-Based Concepts & Entries", img: "/live/w-theme.png", text: "Bride & groom entries, musical pheras, cinematic entrances and themed acts with costumes and stage presence." },
  { title: "Corporate Events & Stage Shows", img: "/live/g4.jpg", text: "Choreography and performances that captivate the audience—professional teaching, shiny props, and high-energy dance concepts." },
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

export default function WeddingsShows() {
  return (
    <>
      <PageBanner bg="/live/w-sangeet.jpg" title="Weddings & Shows" sub="Turn your wedding moments and events into magical performances" />

      <Intro
        title="We don't just teach steps—we create unforgettable moments."
        cta={{ label: "Book a Free Consultation", href: whatsappLink("Hi! I'd like a free consultation for wedding/show choreography.") }}
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
          <SecTitle kicker="What We Offer" title="Weddings, Sangeet & Shows" center />
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

      <Cta
        title="Let's Make Your Wedding a Dance Spectacle"
        text="Intimate celebration or royal wedding week—book a free consultation and let us choreograph your happily-ever-after."
        message="Hi! I'd like to book a free wedding choreography consultation."
      />
    </>
  );
}
