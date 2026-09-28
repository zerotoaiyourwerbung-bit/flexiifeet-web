import Link from "next/link";
import type { ReactNode } from "react";
import Counter from "./Counter";
import Marquee from "./Marquee";
import { heroImage, services, stats, team, testimonials, ageLevels, whatsappLink, gallery, paths, schoolLogos, journey, faqs } from "@/lib/site";

// Reusable sections, each a straight port of a Jixic template block (class names kept so style.css applies).

export function SecTitle({ kicker, title, center }: { kicker: string; title: ReactNode; center?: boolean }) {
  return (
    <div className={`sec-title-style1${center ? " pdb-52 text-center" : ""}`}>
      <div className="title">
        {center && (
          <span className="dotted-left">
            <span className="dot"></span>
          </span>
        )}
        <span>{kicker}</span>
        <span className="dotted-right">
          <span className="dot"></span>
        </span>
      </div>
      <div className="big-title">{title}</div>
    </div>
  );
}

// services.html "breadcrumb-style3-area"
export function PageBanner({ title, sub, bg = heroImage }: { title: ReactNode; sub?: string; bg?: string }) {
  return (
    <section
      className="breadcrumb-style3-area ff-banner"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${bg})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="inner-content text-center clearfix">
              <h1 className="big-title">{title}</h1>
              {sub && <span>{sub}</span>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type Card = { title: string; icon: string; text: string; href?: string };

// index.html "whatwe-do-area"
export function WhatWeDo({ kicker = "What We Do Best", title, items = services }: { kicker?: string; title: ReactNode; items?: Card[] }) {
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
    <section className="fact-counter-area" style={{ backgroundImage: "url(/images/pattern/fact-counter-bg.png)" }}>
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
export function AgeLevels() {
  return (
    <section className="pricing-table-style2-area ff-levels">
      <div className="container">
        <SecTitle kicker="Programs" title="Tailored Dance Curriculum For Every Age Group" center />
        <div className="row">
          {ageLevels.map((l) => (
            <div key={l.title} className="single-price-box-style2 col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="top">
                  <h4>{l.title}</h4>
                  <p>{l.range}</p>
                </div>
                <ul className="price-list">
                  <li>{l.text}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center ff-note">Build confidence, creativity, and coordination – one step at a time.</p>
      </div>
    </section>
  );
}

// index.html "team-area"
export function Team() {
  return (
    <section className="team-area">
      <div className="container">
        <SecTitle kicker="Our Team" title="Meet the Movement Makers" center />
        <div className="row">
          {team.map((m) => (
            <div key={m.img} className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="single-team-member">
                <div className="img-holder">
                  <img src={m.img} alt={`${m.name} ${m.surname}`} loading="lazy" className="ff-team-img" />
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
        <p className="text-center ff-note">Together, we make every step count.</p>
      </div>
    </section>
  );
}

// index.html "testimonial-area" — owl carousel replaced with a static grid.
export function Testimonials() {
  return (
    <section className="testimonial-area" style={{ backgroundImage: "url(/images/pattern/testimonial-bg.png)" }}>
      <div className="container">
        <SecTitle kicker="Testimonials" title="Words from our partner schools" />
        <div className="row">
          {testimonials.map((t) => (
            <div key={t.role} className="col-xl-6 col-lg-6">
              <div className="single-testimonial-item">
                <div className="client-info">
                  <div className="img-box">
                    {t.img ? <img src={t.img} alt={t.name} loading="lazy" /> : <div className="ff-avatar">{t.initials}</div>}
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

// index.html "statements-area" used as a closing call to action.
export function Cta({ kicker = "Let's Talk", title, text, message }: { kicker?: string; title: string; text: string; message?: string }) {
  return (
    <section className="statements-area ff-grad-bg">
      <div className="container">
        <div className="single-statements-item text-center">
          <div className="title">
            <span className="dotted-left">
              <span className="dot"></span>
            </span>
            <span>{kicker}</span>
            <span className="dotted-right">
              <span className="dot"></span>
            </span>
          </div>
          <div className="big-title">
            <span>{title}</span>
          </div>
          <div className="text">
            <p>{text}</p>
          </div>
          <div className="ff-cta-buttons">
            <a className="ff-btn ff-btn--light" href={whatsappLink(message)} target="_blank" rel="noopener">
              <i className="fa fa-whatsapp" aria-hidden="true"></i> WhatsApp Us
            </a>
            <Link className="ff-btn ff-btn--outline" href="/contact">
              Enquiry Form
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// services.html "whatwe-do-area main-service" top box: heading left, copy right.
export function Intro({ title, children, cta }: { title: ReactNode; children: ReactNode; cta?: { label: string; href: string } }) {
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
                  <a className="thm-btn6" href={cta.href} target={cta.href.startsWith("http") ? "_blank" : undefined} rel="noopener">
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
          <div key={s.title} className={`single-features-box-style2 width23percent${i % 2 ? " bg2" : ""}`}>
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
  const items = ["10+ years of expertise", "30+ partner schools", "8,000+ students trained", "India to the USA"];
  return (
    <div className="ff-ticker ff-grad-bg">
      <Marquee speed={30}>
        {items.map((t) => (
          <span key={t} className="ff-ticker-item">
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
        <SecTitle kicker="Choose your path" title={<>One love of movement.<br /> Four ways in.</>} center />
        <div className="row">
          {paths.map((p) => (
            <div key={p.href} className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <Link href={p.href} className="single-project-style1 ff-path">
                <div className="img-holder">
                  <img src={p.img} alt="" loading="lazy" />
                  <div className="ff-path-caption">
                    <span>{p.who}</span>
                    <h3>{p.title}</h3>
                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
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
        <SecTitle kicker="Trusted in classrooms" title="Schools we've moved with" center />
        <p className="text-center ff-lead">Part of a growing network of 30+ partner schools.</p>
      </div>
      <Marquee speed={35}>
        {schoolLogos.map((s) => (
          <div key={s.name} className={`ff-logo-tile${s.dark ? " is-dark" : ""}`} title={s.name}>
            {s.logo ? <img src={s.logo} alt={s.name} loading="lazy" /> : <span>{s.name}</span>}
          </div>
        ))}
      </Marquee>
    </section>
  );
}

// Auto-scrolling photo carousel (pauses on hover).
export function Moments({ title = "From our stages & classrooms" }: { title?: string }) {
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
        <SecTitle kicker="The journey" title="From first step to spotlight" center />
        <div className="row">
          {journey.map((s, i) => (
            <div key={s.title} className="col-lg-4">
              <div className="ff-step">
                <div className="ff-step-num">{String(i + 1).padStart(2, "0")}</div>
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

// Native <details> accordion — no JS.
export function Faq() {
  return (
    <div className="ff-faq">
      <SecTitle kicker="Frequently asked" title="A few helpful answers." />
      {faqs.map((f) => (
        <details key={f.q}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
