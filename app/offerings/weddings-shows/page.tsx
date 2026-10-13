import type { Metadata } from "next";
import { Explainer, ExplorePrograms, IconGrid, InfoAsk, Overview, PageBanner, SecTitle, Steps } from "@/components/sections";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "About Wedding & Show Choreography",
  description:
    "About The FlexiiFeet's wedding, sangeet and stage show choreography: what we offer, dance styles, how rehearsals work, and where we've performed.",
  alternates: { canonical: "/offerings/weddings-shows" },
};

const facts = [
  { label: "For", value: "Couples, families & companies" },
  { label: "Occasions", value: "Sangeet, mehndi, wedding entries, corporate shows" },
  { label: "Rehearsals", value: "At home, at our studio or online" },
  { label: "Skill level", value: "First-timers welcome" },
  { label: "Travel", value: "Destination weddings" },
];

const offers = [
  { title: "Couple Dance Choreography", img: "/live/w-couple.webp", text: "Make your first dance as a married couple iconic, with personalised sequences, romantic storytelling and moves tailored to your comfort level." },
  { title: "Family & Group Performances", img: "/live/w-family.webp", text: "From grandparents to best friends, we create joyful, inclusive choreography for all age groups." },
  { title: "Sangeet & Mehndi Performances", img: "/live/w-sangeet.webp", text: "High-energy, professionally guided dances for every wedding function." },
  { title: "Bride & Grom special Performances", img: "/live/w-rehearsal.webp", text: "Flexible rehearsal options that fit your schedule and comfort." },
  // { title: "Rehearsals at Home, Studio or Online", img: "/live/w-rehearsal.webp", text: "Flexible rehearsal options that fit your schedule and comfort." },
  { title: "Theme-Based Concepts & Entries", img: "/live/w-theme.webp", text: "Bride & groom entries, musical pheras, cinematic entrances and themed acts with costumes and stage presence." },
  // { title: "Corporate Events & Stage Shows", img: "/live/g4.webp", text: "Choreography and performances that captivate an audience, with props and high-energy concepts." },
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
  {
    title: "Discovery & Vision",
    text: "We understand your functions, family dynamics, song preferences, and performance vision—ensuring the choreography reflects your unique personality and celebration style.",
  },
  {
    title: "Concept & Music Curation",
    text: "We craft custom audio edits, seamless medley transitions, and thematic entry concepts tailored to every age group and skill level—from first-timers to seasoned dancers.",
  },
  {
    title: "Personalised Rehearsals",
    text: "Flexible in-person sessions at our studio or your home, combined with interactive online classes for out-of-town relatives—paced so learning feels joyful and stress-free.",
  },
  {
    title: "Stage Polish & Showtime",
    text: "From stage blocking, cues, and prop coordination to facial expressions and stage presence, we ensure everyone steps into the spotlight feeling confident and radiant.",
  },
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
      <PageBanner kicker="FOR YOUR SPECIAL MOMENTS" bg="/live/w-sangeet.webp" title="Weddings & Shows" sub="Every Celebration Deserves Its Spotlight.
From unforgettable sangeet performances to grand wedding entries and spectacular stage shows, we bring your vision to life through dance." />

      <Overview title="We Don’t Just Teach Steps." highlight=" We Create Moments." facts={facts}>
        <p>
          Every celebration has a story worth telling. At The FlexiiFeet, we bring those stories to life through dance, creating performances that make your special occasions unforgettable.
        </p>
        <p>
          From sangeet nights and couple dances to family performances and grand stage shows, our choreography is tailored to your music, style, comfort, and vision. Whether you’re a confident dancer or stepping onto the dance floor for the first time, we make every step enjoyable and every moment meaningful.
        </p>
        <p>
          With creative choreography and personalised guidance, we help you turn your celebration into a memory you’ll cherish long after the music ends.
        </p>
      </Overview>

      <section className="ff-section alt">
        <div className="container">
          <SecTitle kicker="What we offer" title="Weddings, Sangeet & Entertainment" center />
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

      {/* <IconGrid kicker="Our approach" title="How we work with families" items={why} img="/live/g1.webp" imgAlt="Ayush Lokre with fellow artists" /> */}
      {/* 
      <section className="ff-section alt">
        <div className="container">
          <SecTitle kicker="Dance styles" title="Styles we choreograph" center />
          <ul className="ff-chip-row">
            {styles.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </section> */}

      <Explainer
        kicker="Stage & Corporate"
        title={
          <>
            Corporate Events &amp; <span className="ff-highlight">Stage Shows</span>
          </>
        }
        img="/live/corporate-stage-show.jpg"
        imgAlt="High-energy corporate annual gala dance performance on stage"
      >
        <p>
          Choreography and performances that captivate an audience. From high-energy annual corporate galas and award nights to brand launches and flashmobs, we bring grand stage concepts to life.
        </p>
        <p>
          Led by international choreographer Ayush Lokre, our team crafts customized musical mixes, synchronized employee performances, and prop-driven showcase acts tailored to your company&apos;s celebration.
        </p>
        <ul className="ff-ticks">
          <li>Annual days, award ceremonies &amp; corporate galas</li>
          <li>Brand launches, theatrical entries &amp; flashmobs</li>
          <li>Executive &amp; team routines (first-timers welcome)</li>
          <li>End-to-end theme curation, props &amp; stage presence</li>
        </ul>
        <div style={{ marginTop: "28px" }}>
          <a className="ff-btn ff-btn--grad" href="#enquire">
            Enquire for corporate shows <Icon name="arrow-right" />
          </a>
        </div>
      </Explainer>

      <section className="ff-section alt">
        <div className="container">
          <SecTitle kicker="As seen at" title={<>India's most <span className="ff-highlight"> elite weddings</span> while associated with SDIPA</>} center />
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

      <Steps kicker="The process" title={<>From First Conversation to <span className="ff-highlight">Final Bow</span></>} items={process} alt />
      <ExplorePrograms current="/offerings/weddings-shows" />
      <InfoAsk faqItems={faqs} program="Weddings & Shows" topic="wedding choreography" />
    </>
  );
}
