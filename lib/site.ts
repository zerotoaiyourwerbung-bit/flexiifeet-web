// Single source for site-wide content. Copy is taken from the live site (theflexiifeet.com);
// items marked TODO are new sections the live site doesn't have yet and need real details.

import { title } from "process";

export const site = {
  name: "The FlexiiFeet",
  tagline: "Your Stage Starts Here",
  url: "https://theflexiifeet.com",
  phone: "+91 96304 21593",
  phoneHref: "tel:+919630421593",
  whatsapp: "919630421593",
  email: "connect@theflexiifeet.com",
  instagram: "https://www.instagram.com/theflexiifeetdance",
  founderInstagram: "https://www.instagram.com/aayushsklokre",
  youtube: "https://www.youtube.com/@theflexiifeet", // guessed from the Instagram handle, verify
  city: "Indore",
  address: "Patrakar Square 5, near SBI, Joy Builder Colony, Saket Nagar, Indore, Madhya Pradesh 452018",
};

// Information pages under /offerings (the root-level program URLs are the ad landing pages).
export const infoPages = [
  {
    who: "For schools",
    title: "DanceED",
    href: "/offerings/dance-ed",
    img: "/live/g3.webp",
    text: "A structured, NEP 2020-aligned dance curriculum from Nursery to Class 12.",
  },
  // {
  //   who: "For school events",
  //   title: "Annual Days",
  //   href: "/offerings/annual-days",
  //   img: "/live/g5.webp",
  //   text: "Theme-based annual day shows, choreographed for every class.",
  // },
  {
    who: "Learn from anywhere",
    title: "Online Classes",
    href: "/offerings/online-classes",
    img: "/live/g2.webp",
    text: "Live, interactive dance classes for kids, teens and adults.",
  },
  {
    who: "In Indore",
    title: "Offline Classes",
    href: "/offerings/regular-classes",
    img: "/live/g4.webp",
    text: "Studio classes in Indore with our lead choreographers.",
  },
  {
    who: "For celebrations",
    title: "Weddings & Shows",
    href: "/offerings/weddings-shows",
    img: "/live/w-sangeet.webp",
    text: "Sangeet, couple dances, entries and stage shows.",
  },
];

// Background for the home hero and every page banner.
export const heroImage = "/live/hero-khokho.jpg";

export type NavItem = { label: string; href: string; children?: NavItem[] };

export const offerings: NavItem[] = [
  { label: "DanceED", href: "/offerings/dance-ed" },
  // { label: "Annual Days", href: "/offerings/annual-days" },
  { label: "Online Classes", href: "/offerings/online-classes" },
  {
    label: "Offline Classes",
    href: "/offerings/regular-classes",
  },
  { label: "Weddings & Shows", href: "/offerings/weddings-shows" },
];

// Ad landing (sales) pages, listed under "Enroll" in the nav.
export const salesPages: NavItem[] = [
  { label: "DanceED for Schools", href: "/dance-ed" },
  { label: "Annual Day Choreography", href: "/annual-days" },
  { label: "Online Dance Classes", href: "/online-classes" },
  { label: "Dance Classes in Indore", href: "/regular-classes" },
  { label: "Wedding Choreography", href: "/weddings-shows" },
];

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Offerings", href: "/offerings", children: offerings },
  { label: "Gallery", href: "/gallery" },
  // { label: "Weddings & Shows", href: "/offerings/weddings-shows" },
  // { label: "Enroll", href: "/dance-ed", children: salesPages },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: 98, suffix: "%", label: "Successful Lessons" },
  { value: 100, suffix: "%", label: "Expert Tutors" },
  { value: 10, suffix: "+", label: "Years of Expertise" },
  { value: 8000, suffix: "+", label: "Students Trained" },
];

export const services = [
  {
    title: "DanceED – School Curriculum",
    icon: "icon-student",
    href: "/offerings/dance-ed",
    text: "Structured, NEP-aligned dance education in classrooms—boosting confidence, creativity, physical fitness and social skills from Nursery to Class 12.",
  },
  {
    title: "Weddings & Shows",
    icon: "icon-heart",
    href: "/offerings/weddings-shows",
    text: "From bride & groom entries and musical pheras to full Sangeet nights and corporate stage shows—tailored to your traditions, style and energy.",
  },
  {
    title: "Annual Days",
    icon: "icon-music",
    href: "/offerings/annual-days",
    text: "Complete annual function choreography with high-energy concepts, props and professional staging that leaves parents and teachers inspired.",
  },
];

export const ageLevels = [
  {
    title: "Foundational Level",
    range: "Nursery – Grade 2",
    text: "Focus on motor skills and basic rhythms",
  },
  {
    title: "Exploratory Level",
    range: "Grades 3 – 5",
    text: "Introduction to diverse dance forms",
  },
  {
    title: "Intermediate Level",
    range: "Grades 6 – 8",
    text: "Coordination, expression, and creativity",
  },
  {
    title: "Advanced Level",
    range: "Grades 9 – 12",
    text: "Performance, choreography, and personal style",
  },
];

export const team = [
  {
    name: "Ayush",
    surname: "Lokre",
    role: "Founder & Artistic Director",
    img: "/live/team-ayush.webp",
  },
  {
    name: "Ekta",
    surname: "Wankhede",
    role: "Managing Head & Lead Choreographer",
    img: "/live/team-ekta.webp",
  },
  {
    name: "Prachi",
    surname: "Joshi",
    role: "Master Classical Faculty",
    img: "/live/team-prachi.webp",
  },
  {
    name: "Harshit",
    surname: "Chouhan",
    role: "Master Faculty / Lead Choreographer",
    img: "/live/team-harshit.webp",
  },
];

export const testimonials = [
  {
    text: "We had the pleasure of having Ayush Lokre as a dance instructor during the 2023-24 session. His positive energy, commitment, and inspiring teaching style made dance sessions fun and impactful for students. We wish him continued success in all his future endeavors.",
    name: "Dipti Ingley",
    role: "Principal, KLE International, Belgaum",
    img: "/flow/dipti-ingley.jpg",
    initials: "DI",
  },
  {
    text: "Ayush and his team, The FlexiiFeet, are among the finest instructors we have had for our dance sessions. Their unique teaching style fills the class with happiness and creates a supportive environment where every child feels encouraged to grow.",
    name: "Principal",
    role: "Crestwood International School",
    img: undefined as string | undefined,
    initials: "CI",
  },
];

// Real photos only (live site). Used by the home "moments" carousel.
export const gallery = [
  "/live/g1.webp",
  "/live/g2.webp",
  "/live/g3.webp",
  "/live/g4.webp",
  "/live/g5.webp",
  "/live/hero.webp",
  "/live/ayush-stage.webp",
  "/live/mic.webp",
];

// Logos from the FlexFlow reference; schools without a usable logo render as text.
export const schoolLogos: { name: string; logo?: string; dark?: boolean }[] = [
  { name: "KLE International, Belgaum", logo: "/flow/school-kle.png" },
  {
    name: "HVB Global Academy, Mumbai",
    logo: "/flow/school-hvb.png",
    dark: true,
  },
  {
    name: "Dhirubhai Ambani International School, Mumbai",
    logo: "/flow/school-dais.png",
  },
  { name: "SVIS, Gorai", logo: "/flow/school-svis.gif" },
  { name: "Universal School, Dahisar" },
  { name: "Lakshya International, Kakinada" },
  { name: "Crestwood International School" },
];

export const paths = [
  {
    // who: "For families",
    title: "Online Classes",
    href: "/offerings/online-classes",
    img: "/live/g2.webp",
  },
  {
    title: "Offline Classes",
    href: "/offerings/regular-classes",
    img: "/live/g5.webp",
  },
  {
    // who: "For educators",
    title: "DanceED",
    href: "/offerings/dance-ed",
    img: "/live/g3.webp",
  },
  
  {
    // who: "For celebrations",
    title: "Weddings & Shows",
    href: "/offerings/weddings-shows",
    img: "/live/g4.webp",
  },
];

export const journey = [
  {
    title: "Learn with structure",
    icon: "icon-content",
    text: "Real instructors and a curriculum shaped by trained choreographers.",
  },
  {
    title: "Rehearse with purpose",
    icon: "icon-music",
    text: "Every session builds technique, expression, and confidence.",
  },
  {
    title: "Perform with joy",
    icon: "icon-star",
    text: "The journey leads toward a showcase, recital, or moment worth remembering.",
  },
];

export const faqs = [
  {
    q: "Which FlexiiFeet program is right for me?",
    a: "Schools pick DanceED for a weekly, NEP-aligned curriculum and Annual Days for event choreography. Kids, teens and adults join our online classes or Indore studio batches. Couples, families and companies come to us for weddings, sangeet and stage shows.",
  },
  {
    q: "Where does FlexiiFeet work?",
    a: "We are based in Indore, run online classes for learners anywhere, and have partnered with schools and clients across India and the USA—including destination weddings in Goa, Udaipur and Dubai.",
  },
  {
    q: "What happens after I send the form?",
    a: "Your details go straight to our team. We get back to you by phone or WhatsApp to understand what you need and suggest the right program. No payment is required to enquire.",
  },
];

export const whatsappLink = (text = "Hi FlexiiFeet! I'd like to know more.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
