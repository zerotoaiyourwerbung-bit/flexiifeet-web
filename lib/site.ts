// Single source for site-wide content. Copy is taken from the live site (theflexiifeet.com);
// items marked TODO are new sections the live site doesn't have yet and need real details.

export const site = {
  name: "The FlexiiFeet",
  tagline: "Let Loose & Let's Groove",
  url: "https://theflexiifeet.com",
  phone: "+91 76980 03092",
  phoneHref: "tel:+917698003092",
  whatsapp: "917698003092",
  email: "collaborations@placemint.in",
  instagram: "https://www.instagram.com/theflexiifeet",
  founderInstagram: "https://www.instagram.com/aayushsklokre",
  city: "Indore",
};

// Information pages under /programs (the root-level program URLs are the ad landing pages).
export const infoPages = [
  { who: "For schools", title: "DanceED", href: "/programs/dance-ed", img: "/live/g3.jpg", text: "A structured, NEP 2020-aligned dance curriculum from Nursery to Class 12." },
  { who: "For school events", title: "Annual Days", href: "/programs/annual-days", img: "/live/g5.jpg", text: "Theme-based annual day shows, choreographed for every class." },
  { who: "Learn from anywhere", title: "Online Classes", href: "/programs/online-classes", img: "/live/g2.jpg", text: "Live, interactive dance classes for kids, teens and adults." },
  { who: "In Indore", title: "Offline Classes", href: "/programs/offline-classes-indore", img: "/live/g4.jpg", text: "Studio classes in Indore with our lead choreographers." },
  { who: "For celebrations", title: "Weddings & Shows", href: "/programs/weddings-shows", img: "/live/w-sangeet.jpg", text: "Sangeet, couple dances, entries and stage shows." },
];

// Background for the home hero and every page banner.
export const heroImage = "/live/hero-khokho.jpg";

export type NavItem = { label: string; href: string; children?: NavItem[] };

export const programs: NavItem[] = [
  { label: "DanceED (Schools)", href: "/programs/dance-ed" },
  { label: "Annual Days", href: "/programs/annual-days" },
  { label: "Online Classes", href: "/programs/online-classes" },
  { label: "Offline Classes – Indore", href: "/programs/offline-classes-indore" },
];

// Ad landing (sales) pages, listed under "Enroll" in the nav.
export const salesPages: NavItem[] = [
  { label: "DanceED for Schools", href: "/dance-ed" },
  { label: "Annual Day Choreography", href: "/annual-days" },
  { label: "Online Dance Classes", href: "/online-classes" },
  { label: "Dance Classes in Indore", href: "/offline-classes-indore" },
  { label: "Wedding Choreography", href: "/weddings-shows" },
];

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/programs", children: programs },
  { label: "Weddings & Shows", href: "/programs/weddings-shows" },
  { label: "Enroll", href: "/dance-ed", children: salesPages },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: 98, suffix: "%", label: "Successful Lessons" },
  { value: 100, suffix: "%", label: "Expert Tutors" },
  { value: 10, suffix: "+", label: "Years of Expertise" },
  { value: 30, suffix: "+", label: "Partner Schools Across India & USA" },
  { value: 8000, suffix: "+", label: "Students Trained" },
];

export const services = [
  {
    title: "DanceED – School Curriculum",
    icon: "icon-student",
    href: "/programs/dance-ed",
    text: "Structured, NEP-aligned dance education in classrooms—boosting confidence, creativity, physical fitness and social skills from Nursery to Class 12.",
  },
  {
    title: "Weddings & Shows",
    icon: "icon-heart",
    href: "/programs/weddings-shows",
    text: "From bride & groom entries and musical pheras to full Sangeet nights and corporate stage shows—tailored to your traditions, style and energy.",
  },
  {
    title: "Annual Days",
    icon: "icon-music",
    href: "/programs/annual-days",
    text: "Complete annual function choreography with high-energy concepts, props and professional staging that leaves parents and teachers inspired.",
  },
];

export const ageLevels = [
  { title: "Foundational Level", range: "Nursery – Grade 2", text: "Focus on motor skills and basic rhythms" },
  { title: "Exploratory Level", range: "Grades 3 – 5", text: "Introduction to diverse dance forms" },
  { title: "Intermediate Level", range: "Grades 6 – 8", text: "Coordination, expression, and creativity" },
  { title: "Advanced Level", range: "Grades 9 – 12", text: "Performance, choreography, and personal style" },
];

export const team = [
  { name: "Aayush S K", surname: "Lokre", role: "Founder & Artistic Director", img: "/live/team-ayush.jpg" },
  { name: "Ekta", surname: "Wankhede", role: "Managing Head & Lead Choreographer", img: "/live/team-ekta.jpg" },
  { name: "Prachi", surname: "Joshi", role: "Master Classical Faculty", img: "/live/team-prachi.png" },
  { name: "Harshit", surname: "Chouhan", role: "Master Faculty / Lead Choreographer", img: "/live/team-harshit.png" },
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
  "/live/g1.jpg",
  "/live/g2.jpg",
  "/live/g3.jpg",
  "/live/g4.jpg",
  "/live/g5.jpg",
  "/live/hero.png",
  "/live/ayush-stage.jpg",
  "/live/mic.jpg",
];

// Logos from the FlexFlow reference; schools without a usable logo render as text.
export const schoolLogos: { name: string; logo?: string; dark?: boolean }[] = [
  { name: "KLE International, Belgaum", logo: "/flow/school-kle.png" },
  { name: "HVB Global Academy, Mumbai", logo: "/flow/school-hvb.png", dark: true },
  { name: "Dhirubhai Ambani International School, Mumbai", logo: "/flow/school-dais.png" },
  { name: "SVIS, Gorai", logo: "/flow/school-svis.gif" },
  { name: "Universal School, Dahisar" },
  { name: "Lakshya International, Kakinada" },
  { name: "Crestwood International School" },
];

export const paths = [
  { who: "For educators", title: "DanceED for Schools", href: "/programs/dance-ed", img: "/live/g3.jpg" },
  { who: "For school events", title: "Annual Days", href: "/programs/annual-days", img: "/live/g5.jpg" },
  { who: "For families", title: "Online & Indore Classes", href: "/programs/online-classes", img: "/live/g2.jpg" },
  { who: "For celebrations", title: "Weddings & Shows", href: "/programs/weddings-shows", img: "/live/g4.jpg" },
];

export const journey = [
  { title: "Learn with structure", icon: "icon-content", text: "Real instructors and a curriculum shaped by trained choreographers." },
  { title: "Rehearse with purpose", icon: "icon-music", text: "Every session builds technique, expression, and confidence." },
  { title: "Perform with joy", icon: "icon-star", text: "The journey leads toward a showcase, recital, or moment worth remembering." },
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
    a: "Your enquiry opens in WhatsApp with your details filled in. Send it and our team replies personally to understand what you need and suggest the right program. No payment is required to enquire.",
  },
];

export const whatsappLink = (text = "Hi FlexiiFeet! I'd like to know more.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
