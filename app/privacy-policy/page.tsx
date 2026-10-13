import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | The FlexiiFeet Dance Academy",
  description:
    "Learn how The FlexiiFeet collects, uses, protects, and manages personal information for our in-person studio classes, DanceED school programs, online sessions, and events.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="ff-legal-header">
        <div className="container">
          <span className="ff-legal-tag">Legal &amp; Privacy</span>
          <h1>Privacy Policy</h1>
          <p>Last updated: October 14, 2026 · Effective Date: January 1, 2024</p>
        </div>
      </section>

      <section className="ff-legal-section">
        <div className="container">
          <article className="ff-legal-content">
            <p>
              Welcome to <strong>{site.name}</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). We are committed to protecting the privacy, confidentiality, and security of all personal information entrusted to us by our students, parents, schools, and website visitors.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, disclose, and safeguard your details when you visit our website (
              <a href={site.url} target="_blank" rel="noopener noreferrer">
                {site.url.replace(/^https?:\/\//, "")}
              </a>
              ), register for in-person studio classes in Indore, participate in live online batches, enroll in our in-school DanceED programs, or engage our wedding and corporate choreography services.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us when filling out inquiry forms, registering for trials, enrolling in batches, or communicating via WhatsApp, phone, or email:
            </p>
            <ul>
              <li>
                <strong>Student &amp; Parent Identity Details:</strong> Student name, date of birth, age, gender, parent/guardian name (for minors), relation to student, and emergency contact details.
              </li>
              <li>
                <strong>Contact Information:</strong> Phone/WhatsApp number, email address, residential address, and preferred location/branch in Indore.
              </li>
              <li>
                <strong>Program &amp; Skill Profile:</strong> Dance experience level, preferred style (Bollywood, Hip-Hop, Contemporary, Semi-Classical, Freestyle), batch timing preferences, and school name (for school-level workshops or DanceED).
              </li>
              <li>
                <strong>Physical Fitness &amp; Health Disclosures:</strong> Any voluntary disclosures regarding relevant medical conditions, allergies, asthma, past sprains, or physical considerations to ensure safe training under our instructors.
              </li>
              <li>
                <strong>Payment &amp; Billing Records:</strong> Transaction reference IDs, invoice details, payment mode (UPI, bank transfer, card), and payment dates. <em>Please note: We do NOT collect or store your credit/debit card numbers, CVVs, or UPI PINs. All online payments are securely processed through authorized third-party payment gateways.</em>
              </li>
              <li>
                <strong>Technical &amp; Browsing Information:</strong> IP address, device type, browser version, operating system, and anonymous page interaction statistics collected via standard server logs and cookies to enhance site speed and usability.
              </li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We process your personal information strictly for legitimate academy operations, including:</p>
            <ul>
              <li>Processing student admissions, allocating batch seats, and maintaining studio attendance rosters.</li>
              <li>Scheduling live virtual classes, sharing private Zoom/Google Meet links, and sending batch reminders.</li>
              <li>Communicating emergency studio updates, holiday notices, masterclass schedules, and recital dates.</li>
              <li>Issuing fee payment receipts, renewal notices, and administrative confirmations.</li>
              <li>Ensuring child safety, duty of care, and reaching parents promptly during medical emergencies.</li>
              <li>Assisting school administrations with structured DanceED curriculum delivery and stage production rosters.</li>
              <li>Improving our website performance, user experience, and training programs.</li>
            </ul>

            <div className="ff-legal-card">
              <h4>We Never Sell Your Data</h4>
              <p>
                The FlexiiFeet has a strict policy against selling, renting, trading, or leasing your personal information to third-party marketing brokers or advertisers. Your data is used exclusively to serve your dance education and customer support needs.
              </p>
            </div>

            <h2>3. Media, Photography &amp; Video Recordings</h2>
            <p>
              Dance is an expressive performing arts discipline. As part of our learning journey, we regularly document student growth, group routines, masterclasses, annual day showcases, and studio recitals through photography and video recordings.
            </p>
            <ul>
              <li>
                <strong>Studio &amp; Recital Footage:</strong> Highlight clips, group photos, and recital videos may be published on our verified social media channels (such as Instagram{" "}
                <a href={site.instagram} target="_blank" rel="noopener noreferrer">
                  @theflexiifeetdance
                </a>
                ), YouTube, and official website to celebrate student milestones and inspire upcoming performers.
              </li>
              <li>
                <strong>Parental Notice &amp; Opt-Out:</strong> If you or your minor child prefer not to be photographed or featured in public promotional materials, please inform our front desk or submit an email to{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a> at the time of enrollment. We respect your choice and will instruct our media team accordingly.
              </li>
            </ul>

            <h2>4. Children&rsquo;s Privacy (Under 18 Years)</h2>
            <p>
              A substantial portion of our students are kids and teenagers. We take children&rsquo;s digital safety and personal privacy with the highest level of responsibility:
            </p>
            <ul>
              <li>All registrations, fee transactions, and communication agreements for students under 18 years of age must be submitted and managed by a parent or legal guardian.</li>
              <li>We do not solicit personal contact info directly from children on our digital platforms.</li>
              <li>Parental consent is verified during studio or online admission.</li>
            </ul>

            <h2>5. Data Security &amp; Retention</h2>
            <p>
              We implement industry-standard physical, organizational, and electronic safeguards to prevent unauthorized access, alteration, disclosure, or loss of your personal details.
            </p>
            <ul>
              <li>Our website transmits all communication over an encrypted HTTPS / TLS protocol.</li>
              <li>Studio admission forms, attendance logs, and student databases are stored on secured systems with access restricted exclusively to authorized academy staff and management.</li>
              <li>We retain your records for as long as you maintain an active enrollment with us or as required to comply with statutory accounting and tax regulations.</li>
            </ul>

            <h2>6. Third-Party Service Providers</h2>
            <p>
              We may engage reputable third-party service providers to facilitate studio operations. These third parties are bound by strict confidentiality and are only granted access to the information strictly required to perform their specific functions:
            </p>
            <ul>
              <li><strong>Payment Gateways &amp; Banks:</strong> To process secure UPI, card, and net-banking transactions.</li>
              <li><strong>Virtual Classroom Software:</strong> Zoom, Google Meet, or equivalent secure platforms for conducting live online classes.</li>
              <li><strong>Communication Platforms:</strong> Official WhatsApp Business API and email delivery tools for routine class schedules and receipts.</li>
              <li><strong>Web Infrastructure &amp; Hosting:</strong> Secure cloud servers hosting our Next.js web application.</li>
            </ul>

            <h2>7. Your Privacy Rights</h2>
            <p>You have full ownership of your personal data. At any time, you have the right to:</p>
            <ul>
              <li>Request a copy of the personal information we hold in your student file.</li>
              <li>Request corrections or updates to inaccurate or outdated contact numbers, addresses, or medical notes.</li>
              <li>Request deletion or de-identification of your non-statutory records upon discontinuation of classes.</li>
              <li>Opt out of non-essential promotional SMS, WhatsApp updates, or newsletters by replying &ldquo;STOP&rdquo; or emailing us.</li>
            </ul>

            <h2>8. Updates to This Policy</h2>
            <p>
              We may revise this Privacy Policy periodically to reflect changes in our dance programs, operational procedures, or applicable Indian laws. When revisions are made, the &ldquo;Last updated&rdquo; date at the top will be updated. Continued participation in our programs or use of our website signifies your acceptance of any revised terms.
            </p>

            <h2>9. Contact Us &amp; Grievance Redressal</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please reach out to our administration team:
            </p>

            <div className="ff-legal-card">
              <h4>The FlexiiFeet Dance Academy</h4>
              <p>
                <strong>Director / Founder:</strong> Master Ayush Lokre
                <br />
                <strong>Studio Address:</strong> {site.address}
                <br />
                <strong>Email:</strong> <a href={`mailto:${site.email}`}>{site.email}</a>
                <br />
                <strong>Phone / WhatsApp:</strong>{" "}
                <a href={site.phoneHref}>{site.phone}</a>
                <br />
                <strong>Operating Hours:</strong> Monday – Saturday, 10:00 AM – 8:00 PM IST
              </p>
            </div>

            <p style={{ marginTop: 32 }}>
              Looking for our studio terms or refund guidelines? Read our{" "}
              <Link href="/terms-and-conditions">Terms &amp; Conditions</Link> and{" "}
              <Link href="/refund-policy">Refund &amp; Cancellation Policy</Link>.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
