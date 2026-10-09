import Link from "next/link";
import { useId, type ReactNode } from "react";
import Counter from "./Counter";
import Marquee from "./Marquee";
import LeadForm, { type LeadField } from "./LeadForm";
import {
  heroImage,
  whatsappLink,
  infoPages,
  site,
  services,
  stats,
  team,
  testimonials,
  ageLevels,
  gallery,
  paths,
  schoolLogos,
  journey,
  faqs,
} from "@/lib/site";
import Icon from "./Icon";

// Reusable sections, each a straight port of a Jixic template block (class names kept so style.css applies).

// Section heading. The small dotted label above it was removed site-wide; `kicker` is still accepted so callers keep
// their label text, but it is not rendered.
export function SecTitle({
  title,
  center,
}: {
  kicker?: string;
  title: ReactNode;
  center?: boolean;
  kickerVisibility?: boolean;
}) {
  return (
    <div className={`sec-title-style1${center ? " pdb-52 text-center" : ""}`}>
      <div className="big-title">{title}</div>
    </div>
  );
}

// services.html "breadcrumb-style3-area"
export function PageBanner({
  title,
  sub,
  bg = heroImage,
  kicker,
  cta = "Enquire now",
  children,
}: {
  title: ReactNode;
  sub?: string;
  bg?: string;
  kicker?: string;
  /** Label of the main button, which jumps to the enquiry form at the end of the page. */
  cta?: string;
  /** Extra hero content: a second button first, then anything else (proof row). */
  children?: ReactNode;
}) {
  return (
    <section className="ff-shero">
      <img className="ff-shero-img" src={bg} alt="" />
      <div className="container">
        <div className="ff-shero-card">
          <div>
            {kicker && <span className="ff-pill-tag">{kicker}</span>}
            <h1>{title}</h1>
          </div>
          <div className="ff-shero-copy">
            {sub && <p>{sub}</p>}
            <div className="ff-shero-actions">
              <a className="ff-btn ff-btn--grad" href="#enquire">
                {cta}
              </a>
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type Card = { title: string; icon: string; text: string; href?: string; iconImg?: string };

// index.html "whatwe-do-area"
export function WhatWeDo({
  kicker = "What We Do Best",
  title,
  items = services,
}: {
  kicker?: string;
  title: ReactNode;
  items?: Card[];
}) {
  return (
    <section className="whatwe-do-area">
      <div className="container">
        <SecTitle kicker={kicker} title={title} center />
        <div className="row">
          {items.map((s) => (
            <div key={s.title} className="col-xl-4 col-lg-4">
              <div className="single-whatwe-do-box">
                <div className="top">
                  <h3>{s.title}</h3>
                </div>
                <div className="icon">
                  <span className={s.icon}></span>
                </div>
                <div className="text">
                  <p>{s.text}</p>
                </div>
                {s.href && (
                  <div className="button">
                    <Link className="thm-btn2" href={s.href}>
                      <span></span>Learn More
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// index.html "fact-counter-area"
export function Stats() {
  return (
    <section
      className="fact-counter-area"
      style={{ backgroundImage: "url(/images/pattern/fact-counter-bg.png)" }}
    >
      <div className="container">
        <ul className="ff-stats">
          {stats.map((s) => (
            <li key={s.label}>
              <strong>
                <Counter to={s.value} />
                {s.suffix}
              </strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// about.html "featured-area" (2 boxes | image | 2 boxes)
export function Featured({ items, img }: { items: Card[]; img: string }) {
  const box = (s: Card) => (
    <li key={s.title} className="single-featured-box text-center">
      <div className="icon-holder">
        <span className={s.icon}></span>
      </div>
      <div className="text-holder">
        <h3>{s.title}</h3>
        <p>{s.text}</p>
      </div>
    </li>
  );
  const half = Math.ceil(items.length / 2);
  return (
    <section className="featured-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-4">
            <ul className="featured-box">{items.slice(0, half).map(box)}</ul>
          </div>
          <div className="col-xl-4">
            <div className="featured-image-box">
              <img src={img} alt="" loading="lazy" className="ff-cover" />
            </div>
          </div>
          <div className="col-xl-4">
            <ul className="featured-box">{items.slice(half).map(box)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Age-wise curriculum levels, styled as pricing-table-style2 cards.
export function AgeLevels({
  levels = ageLevels,
  kicker = "Curriculum",
  title = "A dance curriculum tailored to every age group",
}: {
  levels?: { title: string; range: string; text: string }[];
  kicker?: string;
  title?: string;
} = {}) {
  return (
    <section className="pricing-table-style2-area ff-levels">
      <div className="container">
        <SecTitle kicker={kicker} title={title} center />
        <ol className="ff-track">
          {levels.map((l, i) => (
            <li key={l.title} className="ff-track-step">
              <span className="ff-track-num">{i + 1}</span>
              <div className="ff-track-card">
                <span className="ff-track-range">{l.range}</span>
                <h3>{l.title}</h3>
                <p>{l.text}</p>
                <span className="ff-track-bars" aria-hidden="true">
                  {levels.map((_, j) => (
                    <i key={j} className={j <= i ? "on" : ""}></i>
                  ))}
                </span>
              </div>
            </li>
          ))}
        </ol>
        <p className="text-center ff-note">
          Build confidence, creativity, and coordination – one step at a time.
        </p>
      </div>
    </section>
  );
}

// index.html "team-area"
export function Team() {
  return (
    <section className="team-area">
      <div className="container">
        <SecTitle kicker="Our Team" title="Meet the movement makers" center />
        <div className="row">
          {team.map((m) => (
            <div key={m.img} className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="single-team-member">
                <div className="img-holder">
                  <img
                    src={m.img}
                    alt={`${m.name} ${m.surname}`}
                    loading="lazy"
                    className="ff-team-img"
                  />
                  <div className="round-box"></div>
                  <div className="round-box-top"></div>
                </div>
                <div className="name text-center">
                  <h3>
                    {m.name} <span>{m.surname}</span>
                  </h3>
                  <p>{m.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center ff-note">
          Together, we make every step count.
        </p>
      </div>
    </section>
  );
}

// index.html "testimonial-area" — owl carousel replaced with a static grid.
export function Testimonials({
  items = testimonials,
}: {
  items?: { text: string; name: string; role: string; img?: string; initials: string }[];
} = {}) {
  return (
    <section
      className="testimonial-area"
      style={{ backgroundImage: "url(/images/pattern/testimonial-bg.png)" }}
    >
      <div className="container">
        <SecTitle
          kicker="Testimonials"
          title="Words from the schools we work with"
        />
        <div className="row">
          {items.map((t) => (
            <div key={t.role} className="col-xl-6 col-lg-6">
              <div className="single-testimonial-item">
                <div className="client-info">
                  <div className="img-box">
                    {t.img ? (
                      <img src={t.img} alt={t.name} loading="lazy" />
                    ) : (
                      <div className="ff-avatar">{t.initials}</div>
                    )}
                    <span className="icon-quote1"></span>
                  </div>
                </div>
                <div className="text">
                  <p>{t.text}</p>
                </div>
                <div className="clinet-name">
                  <h3>{t.name}</h3>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// index.html "statements-area" used as a closing call to action; the button jumps to the page's enquiry form.
export function Cta({
  kicker = "Let's Talk",
  title,
  text,
  button = "Send enquiry",
  whatsapp,
}: {
  kicker?: string;
  title: string;
  text: string;
  button?: string;
  /** Show "Chat on WhatsApp" instead of the call button (for pages aimed at visitors outside India). */
  whatsapp?: boolean;
}) {
  return (
    <section className="statements-area ff-grad-bg">
      <div className="container">
        <div className="single-statements-item text-center">
          <div className="big-title">
            <span>{title}</span>
          </div>
          <div className="text">
            <p>{text}</p>
          </div>
          <div className="ff-cta-buttons">
            <a className="ff-btn ff-btn--light" href="#enquire">
              {button} <Icon name="arrow-right" />
            </a>
            {whatsapp ? (
              <a className="ff-btn ff-btn--outline" href={whatsappLink()} target="_blank" rel="noopener">
                <Icon name="whatsapp" /> Chat on WhatsApp
              </a>
            ) : (
              <a className="ff-btn ff-btn--outline" href={site.phoneHref}>
                <Icon name="phone" /> Call {site.phone}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// services.html "whatwe-do-area main-service" top box: heading left, copy right.
export function Intro({
  title,
  children,
  cta,
}: {
  title: ReactNode;
  children: ReactNode;
  cta?: { label: string; href: string };
}) {
  return (
    <section className="whatwe-do-area main-service ff-intro">
      <div className="container">
        <div className="top-box">
          <div className="row">
            <div className="col-xl-6">
              <div className="title">
                <h2>{title}</h2>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="text">
                {children}
                {cta && (
                  <a className="thm-btn6" href={cta.href}>
                    {cta.label}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// services.html "features-style2-area" numbered feature boxes (static; hover overlay kept by CSS).
export function NumberedFeatures({ items }: { items: Card[] }) {
  return (
    <section className="features-style2-area">
      <div className="outer-container clearfix">
        {items.map((s, i) => (
          <div
            key={s.title}
            className={`single-features-box-style2 width23percent${i % 2 ? " bg2" : ""}`}
          >
            <div className="count-box">{String(i + 1).padStart(2, "0")}</div>
            <div className="outer-box">
              <div className="shape-top zoom-fade"></div>
              <div className="shape-bottom float_up_down_two"></div>
              <div className="inner text-center">
                <div className="static-content">
                  <div className="icon-holder">
                    <span className={s.icon}></span>
                  </div>
                  <div className="text-holder">
                    <h3>{s.title}</h3>
                  </div>
                </div>
              </div>
              <div className="overlay-content">
                <div className="inner-box">
                  <div className="content-box">
                    <div className="icon-holder">
                      <span className={s.icon}></span>
                    </div>
                    <div className="text-holder">
                      <p>{s.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Scrolling stats ribbon under the hero (FlexFlow reference flow).
export function StatsTicker() {
  const items = [
    "10+ years of expertise",
    "10,000+ students trained",
    "India to the USA",
  ];
  return (
    <div className="ff-ticker ff-grad-bg">
      {/* Three items are narrower than a desktop screen, which left a blank stretch before the loop restarted; four runs outspan any screen */}
      <Marquee speed={120}>
        {[...items, ...items, ...items, ...items].map((t, i) => (
          <span key={i} className="ff-ticker-item">
            {t} <span aria-hidden="true">✦</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}

// "Choose your path" — latest-project-style1 image cards with the template overlay.
export function Paths() {
  return (
    <section className="latest-project-style1-area ff-paths">
      <div className="container">
        <SecTitle

          kickerVisibility={false}
          title={
            <>
              One Passion, 
              <br /> four ways to move.
            </>
          }
          center
        />
        <div className="row">
          {paths.map((p) => (
            <div key={p.href} className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <Link href={p.href} className="single-project-style1 ff-path">
                <div className="img-holder">
                  <img src={p.img} alt="" loading="lazy" />
                  <div className="ff-path-caption">
                    {/* <span>{p.who}</span> */}
                    <h3>{p.title}</h3>
                    <Icon name="arrow-right" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SchoolLogos() {
  return (
    <section className="ff-section ff-logos">
      <div className="container">
        <SecTitle
          kicker="Trusted in classrooms"
          title="Schools we've moved with"
          center
        />
      </div>
      <Marquee speed={35}>
        {schoolLogos.map((s) => (
          <div
            key={s.name}
            className={`ff-logo-tile${s.dark ? " is-dark" : ""}`}
            title={s.name}
          >
            {s.logo ? (
              <img src={s.logo} alt={s.name} loading="lazy" />
            ) : (
              <span>{s.name}</span>
            )}
          </div>
        ))}
      </Marquee>
    </section>
  );
}

// Auto-scrolling photo carousel (pauses on hover).
export function Moments({
  title = "From our stages & classrooms",
}: {
  title?: string;
}) {
  return (
    <section className="ff-section ff-moments">
      <div className="container">
        <SecTitle kicker="Moments" title={title} />
      </div>
      <Marquee speed={60}>
        {gallery.map((src) => (
          <div key={src} className="ff-moment">
            <img src={src} alt="The FlexiiFeet on stage" loading="lazy" />
          </div>
        ))}
      </Marquee>
    </section>
  );
}

export function Journey() {
  return (
    <section className="ff-section alt">
      <div className="container">
        <SecTitle
          kicker="The journey"
          title="From first step to spotlight"
          center
        />
        <div className="row">
          {journey.map((s, i) => (
            <div key={s.title} className="col-lg-4">
              <div className="ff-step">
                <div className="ff-step-num">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span className={`ff-step-icon ${s.icon}`}></span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Native <details> accordion — no JS. A shared `name` makes the browser keep only one item open at a time.
export function Faq({
  items = faqs,
  title = "A few helpful answers.",
}: {
  items?: { q: string; a: string }[];
  title?: string;
}) {
  const group = useId();
  return (
    <div className="ff-faq">
      <SecTitle kicker="Frequently asked" title={title} />
      {items.map((f) => (
        <details key={f.q} name={group}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

// Landing-page hero for ad traffic: promise + proof on the left, the lead form on the right (anchor #enquire).
export function LeadHero({
  kicker,
  title,
  sub,
  points,
  program,
  fields,
  formTitle,
  submitLabel,
  bg = heroImage,
}: {
  kicker: string;
  title: ReactNode;
  sub: string;
  points: string[];
  program: string;
  fields: LeadField[];
  formTitle: string;
  submitLabel?: string;
  bg?: string;
}) {
  return (
    <section className="ff-lead-hero" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container">
        <div className="ff-lead-grid">
          <div className="ff-lead-copy">
            <div className="ff-eyebrow">{kicker}</div>
            <h1>{title}</h1>
            <p className="ff-lead-sub">{sub}</p>
            <ul className="ff-lead-points">
              {points.map((p) => (
                <li key={p}>
                  <Icon name="check" />
                  {p}
                </li>
              ))}
            </ul>
            <ul className="ff-proof">
              <li>
                <strong>10+</strong>years of expertise
              </li>
              <li>
                <strong>10,000+</strong>students trained
              </li>
            </ul>
          </div>
          <div id="enquire" className="ff-lead-form">
            <LeadForm
              program={program}
              fields={fields}
              title={formTitle}
              submitLabel={submitLabel}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// "Trained by the people behind…" credibility strip used on landing pages.
export function CredStrip() {
  const items = [
    "IIFA",
    "Filmfare",
    "IPL",
    "Dubai Expo 2020",
    "World Chess Olympiad",
    "Ambani Wedding",
    "Zee Cine Awards",
  ];
  return (
    <div className="ff-cred">
      <div className="container">
        <span className="ff-cred-label">Choreographers who have worked on</span>
        <ul>
          {items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Icon cards grid: "what you get" / "who it's for" blocks. With `img`, a tall photo sits beside two columns of cards.
export function IconGrid({
  kicker,
  title,
  items,
  alt,
  img,
  imgAlt = "",
  twoCol,
}: {
  kicker: string;
  title: ReactNode;
  items: Card[];
  alt?: boolean;
  twoCol?: boolean;
  img?: string;
  imgAlt?: string;
}) {
  const cards = (
    <div className={`ff-icon-grid${twoCol ? " ff-icon-grid--2" : ""}`}>
      {items.map((c) => (
        <div key={c.title} className="ff-icon-card">
          {c.iconImg ? (
            <span className="ff-icon-card-icon ff-icon-card-icon--img" aria-hidden="true">
              <img src={c.iconImg} alt="" />
            </span>
          ) : (
            <span className={`ff-icon-card-icon ${c.icon}`} aria-hidden="true"></span>
          )}
          <h3>{c.title}</h3>
          <p>{c.text}</p>
        </div>
      ))}
    </div>
  );
  return (
    <section className={`ff-section${alt ? " alt" : ""}`}>
      <div className="container">
        <SecTitle kicker={kicker} title={title} center />
        {img ? (
          <div className="ff-icon-split">
            <figure className="ff-icon-photo">
              <img src={img} alt={imgAlt} loading="lazy" />
              <figcaption>
                <strong>10,000+</strong> students trained across India &amp; the
                USA
              </figcaption>
            </figure>
            {cards}
          </div>
        ) : (
          cards
        )}
      </div>
    </section>
  );
}

// Numbered process steps.
export function Steps({
  kicker = "How it works",
  title,
  items,
  alt,
}: {
  kicker?: string;
  title: ReactNode;
  items: { title: string; text: string }[];
  alt?: boolean;
}) {
  return (
    <section className={`ff-section${alt ? " alt" : ""}`}>
      <div className="container">
        <SecTitle kicker={kicker} title={title} center />
        <ol className="ff-steps">
          {items.map((s, i) => (
            <li key={s.title}>
              <span className="ff-steps-num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// Split block: image on one side, heading + tick list on the other.
export function SplitList({
  kicker,
  title,
  text,
  items,
  img,
  imgAlt,
  reverse,
}: {
  kicker: string;
  title: ReactNode;
  text?: string;
  items: string[];
  img: string;
  imgAlt: string;
  reverse?: boolean;
}) {
  return (
    <section className="ff-section">
      <div className="container">
        <div className={`ff-split${reverse ? " ff-split--rev" : ""}`}>
          <div className="ff-split-img">
            <img src={img} alt={imgAlt} loading="lazy" />
          </div>
          <div>
            <SecTitle kicker={kicker} title={title} />
            {text && <p className="ff-split-text">{text}</p>}
            <ul className="ff-ticks">
              {items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <a className="ff-btn ff-btn--grad" href="#enquire">
              Enquire now{" "}
              <Icon name="arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ + a second enquiry form at the end of a page (for visitors who read everything first).
export function EnquireFaq({
  faqItems,
  program,
  fields,
  submitLabel,
}: {
  faqItems: { q: string; a: string }[];
  program?: string;
  fields?: LeadField[];
  submitLabel?: string;
}) {
  return (
    <>
      <section className="ff-section alt">
        <div className="container ff-faq-wrap">
          <Faq items={faqItems} title="Your questions, answered." />
        </div>
      </section>
      <GetInTouch
        id="enquire-bottom"
        title="We'd love to hear from you."
        intro="Leave your number and we'll answer every question personally. Prefer to talk? Reach us directly:"
        program={program}
        fields={fields}
        formTitle="Still deciding? Talk to us."
        formSubtitle="Leave your number and we'll answer every question personally."
        submitLabel={submitLabel}
      />
    </>
  );
}

// ---------- Information-page blocks (the /offerings/* pages: explain, don't sell) ----------

// Long-form overview with an "at a glance" fact card.
export function Overview({
  kicker = "Overview",
  title,
  children,
  facts,
}: {
  kicker?: string;
  title: ReactNode;
  children: ReactNode;
  facts: { label: string; value: string }[];
}) {
  return (
    <section className="ff-section">
      <div className="container">
        <div className="ff-overview">
          <div className="ff-prose">
            <SecTitle kicker={kicker} title={title} />
            {children}
          </div>
          <aside className="ff-glance" aria-label="At a glance">
            <h3>At a glance</h3>
            <dl>
              {facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}

// Heading + paragraphs beside a photo, for explanatory sections.
// Big photo with a white text card overlapping one edge (alternate sides with `reverse`).
export function OverlapFeature({
  kicker,
  title,
  img,
  imgAlt,
  reverse,
  cutout,
  children,
}: {
  kicker: string;
  title: ReactNode;
  img: string;
  imgAlt: string;
  reverse?: boolean;
  cutout?: boolean;
  children: ReactNode;
}) {
  return (
    <section className="ff-section">
      <div className="container">
        <div className={`ff-overlap${reverse ? " ff-overlap--rev" : ""}`}>
          <img src={img} alt={imgAlt} loading="lazy" className={cutout ? "is-cutout" : undefined} />
          <div className="ff-overlap-card">
            <SecTitle kicker={kicker} title={title} />
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Explainer({
  kicker,
  title,
  children,
  img,
  imgAlt,
  reverse,
  alt,
}: {
  kicker: string;
  title: ReactNode;
  children: ReactNode;
  img: string;
  imgAlt: string;
  reverse?: boolean;
  alt?: boolean;
}) {
  return (
    <section className={`ff-section${alt ? " alt" : ""}`}>
      <div className="container">
        <div className={`ff-split${reverse ? " ff-split--rev" : ""}`}>
          <div className="ff-split-img">
            <img src={img} alt={imgAlt} loading="lazy" />
          </div>
          <div className="ff-prose">
            <SecTitle kicker={kicker} title={title} />
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

// Closing enquiry block used on every page with a form: contact details left, lead form right (anchor #enquire).
export function GetInTouch({
  id = "enquire",
  topic,
  kicker = "Get in touch",
  title,
  intro = "Tell us a little about your school or plans and our team will get back to you. Prefer to talk? Reach us directly:",
  program,
  fields,
  formTitle = "Have a question?",
  formSubtitle,
  submitLabel = "Send my question",
}: {
  id?: string;
  topic?: string;
  kicker?: string;
  title?: ReactNode;
  intro?: string;
  program?: string;
  fields?: LeadField[];
  formTitle?: string;
  formSubtitle?: string;
  submitLabel?: string;
}) {
  return (
    <section id={id} className="contact-form-area ff-enquiry">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-12">
            <div className="ff-ask-info">
              <SecTitle kicker={kicker} title={title ?? (topic ? `Questions about ${topic}?` : "Tell us what you’re planning.")} />
              <p>{intro}</p>
              <ul>
                <li>
                  <Icon name="phone" />
                  <span>
                    <small>Call / WhatsApp</small>
                    <a href={site.phoneHref}>{site.phone}</a>
                  </span>
                </li>
                <li>
                  <Icon name="mail" />
                  <span>
                    <small>Email</small>
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </span>
                </li>
                {/* <li>
                  <Icon name="pin" />
                  <span>
                    <small>Visit us</small>
                    {site.address}
                  </span>
                </li> */}
                <li>
                  <Icon name="instagram" />
                  <span>
                    <small>Follow us</small>
                    <a href={site.instagram} target="_blank" rel="noopener">
                      @theflexiifeetdance
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-7 col-lg-12">
            <LeadForm
              program={program}
              fields={fields}
              title={formTitle}
              subtitle={formSubtitle ?? (topic ? `Ask us anything about ${topic} and our team will get back to you.` : "Leave your details and tell us what you have in mind.")}
              submitLabel={submitLabel}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Info-page closing block (FAQ intentionally not shown).
// `action` names the form after the page's main button (e.g. "Book a trial class"), so the button and the form it jumps to match.
export function InfoAsk({ program, topic, action = "Send enquiry" }: { faqItems?: { q: string; a: string }[]; program?: string; topic: string; action?: string }) {
  return <GetInTouch topic={topic} program={program} formTitle={action === "Send enquiry" ? "Send us an enquiry" : action} submitLabel={action} />;
}

// Links to the other program information pages.
export function ExplorePrograms({ current }: { current: string }) {
  const items = infoPages.filter((p) => p.href !== current);
  return (
    <section className="ff-section alt">
      <div className="container">
        <SecTitle kicker="Explore" title="Other ways to dance with us" center />
        <div className="ff-explore">
          {items.map((p) => (
            <Link key={p.href} href={p.href} className="ff-explore-card">
              <img src={p.img} alt="" loading="lazy" />
              <div>
                <span>{p.who}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <em>
                  Learn more{" "}
                  <Icon name="arrow-right" />
                </em>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// About page team: founder spotlight + faculty portrait cards (a different look from the template team-area).
export function TeamSpotlight() {
  const [founder, ...faculty] = team;
  return (
    <section className="ff-section ff-team2">
      <div className="container">
        <SecTitle
          kicker="Our Team"
          title="The people behind the movement"
          center
        />
        <div className="ff-founder">
          <div className="ff-founder-photo">
            <img
              src={founder.img}
              alt={`${founder.name} ${founder.surname}`}
              loading="lazy"
            />
          </div>
          <div className="ff-founder-body">
            <span className="ff-founder-role">{founder.role}</span>
            <h3>
              {founder.name} {founder.surname}
            </h3>
            <p>
              Trained under Shiamak Davar, Ayush spent more than a decade
              teaching at SDIPA and assisting on grand stage shows before
              founding The FlexiiFeet. He has trained over 10,000 students in
              India and the USA.
            </p>
            <ul className="ff-founder-tags">
              <li>International choreographer</li>
              <li>Performer</li>
              <li>Educator</li>
            </ul>
            <a
              className="ff-founder-link"
              href={site.founderInstagram}
              target="_blank"
              rel="noopener"
            >
              <Icon name="instagram" /> Follow
              Ayush on Instagram
            </a>
          </div>
        </div>
        <div className="ff-faculty">
          {faculty.map((m) => (
            <figure key={m.img} className="ff-faculty-card">
              <img src={m.img} alt={`${m.name} ${m.surname}`} loading="lazy" />
              <figcaption>
                <h3>
                  {m.name} {m.surname}
                </h3>
                <span>{m.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
