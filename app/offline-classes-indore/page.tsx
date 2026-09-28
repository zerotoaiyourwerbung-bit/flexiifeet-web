import type { Metadata } from "next";
import { AgeLevels, Cta, Intro, NumberedFeatures, PageBanner, SecTitle, Team } from "@/components/sections";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dance Classes in Indore",
  description:
    "Offline dance classes in Indore by The FlexiiFeet—Bollywood, contemporary, hip-hop and classical-fusion batches for kids, teens and adults.",
};

const features = [
  { title: "Studio Classes in Indore", icon: "icon-music", text: "In-person training with our lead choreographers and master faculty." },
  { title: "Structured Levels", icon: "icon-student", text: "The same age-wise curriculum we teach in schools—progress you can see." },
  { title: "Stage Opportunities", icon: "icon-star", text: "Showcases and performances so students experience the stage, not just the studio." },
  { title: "Wedding & Event Rehearsals", icon: "icon-heart", text: "Sangeet, couple and family routines rehearsed at our studio or at your home." },
];

// TODO: add studio address, map embed, batch timings and fees once confirmed.
export default function OfflineIndore() {
  return (
    <>
      <PageBanner bg="/live/g4.jpg" title="Offline Classes – Indore" sub="Dance classes at our Indore studio for kids, teens and adults" />

      <Intro
        title="Let loose & let's groove—in Indore."
        cta={{ label: "Book a Trial Class", href: whatsappLink("Hi! I'd like to book a trial dance class in Indore.") }}
      >
        <p>
          Train in person with The FlexiiFeet team led by Ayush Lokre—international choreographer trained under Shiamak
          Davar. Classes build confidence, discipline, creativity and self-expression through dance.
        </p>
        <p>
          Call <a href={site.phoneHref}>{site.phone}</a> or message us on WhatsApp for batch timings and studio location.
        </p>
      </Intro>

      <NumberedFeatures items={features} />
      <AgeLevels />

      <section className="ff-section alt">
        <div className="container text-center">
          <SecTitle kicker="Visit Us" title="Our Indore Studio" center />
          <p>Studio address and batch timings coming soon. Reach us any time:</p>
          <p>
            <a href={site.phoneHref}>{site.phone}</a> · <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
      </section>

      <Team />
      <Cta
        title="Your First Class Is a Message Away"
        text="Tell us the learner's age and preferred timing—we'll suggest the right batch."
        message="Hi! I'd like to join offline dance classes in Indore. Age: , Preferred timing: "
      />
    </>
  );
}
