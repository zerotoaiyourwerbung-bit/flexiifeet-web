import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions | The FlexiiFeet Dance Academy",
  description:
    "Review the studio rules, enrollment terms, online class etiquette, injury disclaimer, and service policies for The FlexiiFeet dance academy.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <section className="ff-legal-header">
        <div className="container">
          <span className="ff-legal-tag">Terms of Service</span>
          <h1>Terms &amp; Conditions</h1>
          <p>Last updated: October 14, 2026 · Effective Date: January 1, 2024</p>
        </div>
      </section>

      <section className="ff-legal-section">
        <div className="container">
          <article className="ff-legal-content">
            <p>
              Welcome to <strong>{site.name}</strong>. By enrolling in our regular in-person studio classes, joining our live online batches, booking wedding or corporate choreography, subscribing to the DanceED school curriculum, or browsing our website (
              <a href={site.url} target="_blank" rel="noopener noreferrer">
                {site.url.replace(/^https?:\/\//, "")}
              </a>
              ), you agree to comply with and be bound by the following Terms and Conditions.
            </p>
            <p>
              Please read these terms carefully. If you are enrolling on behalf of a minor student (under 18 years), you confirm that you are the parent or legal guardian and accept these terms on the student&rsquo;s behalf.
            </p>

            <h2>1. Enrollment &amp; Seat Allocation</h2>
            <ul>
              <li>
                <strong>Admission Confirmation:</strong> Admission to any batch (Kids, Preteens, Adults, or Private Sessions) is confirmed only upon submission of the registration form and receipt of the required advance fee.
              </li>
              <li>
                <strong>Batch Capacity:</strong> To maintain strict instructor-to-student attention, all studio and online batches operate with capped student limits. We reserve the right to close admissions once batch capacity is achieved.
              </li>
              <li>
                <strong>Age &amp; Level Appropriateness:</strong> Students are placed in batches tailored to age groups and experience levels. Instructors may recommend moving a student to a different batch if deemed beneficial for their technical development and safety.
              </li>
              <li>
                <strong>Non-Transferability:</strong> Enrollments and class passes are non-transferable to other individuals or third parties without prior written consent from management.
              </li>
            </ul>

            <h2>2. Studio Code of Conduct &amp; Punctuality</h2>
            <p>
              To foster a disciplined, inspiring, and safe learning atmosphere for every dancer, all students and visiting guardians must observe the following studio rules:
            </p>
            <ul>
              <li>
                <strong>Punctuality:</strong> Students must arrive at least 5 to 10 minutes prior to scheduled batch times. The initial 10-15 minutes of every class involve mandatory warm-up and conditioning exercises essential for muscle preparedness and injury prevention. Late entry beyond 15 minutes may result in restricted participation for safety reasons.
              </li>
              <li>
                <strong>Dress Code &amp; Footwear:</strong> Dancers must wear comfortable, flexible athletic attire (track pants, leggings, stretch t-shirts). Clean, indoor-only dance sneakers or bare feet (as required by the style) must be worn. Outdoor muddy shoes are strictly prohibited on the studio dance floor.
              </li>
              <li>
                <strong>Respect &amp; Inclusivity:</strong> Zero tolerance for disruptive behavior, bullying, harassment, discriminatory language, or disrespect toward fellow students, instructors, or studio staff. Management reserves the right to suspend or terminate enrollment without refund for repeated behavioral infractions.
              </li>
              <li>
                <strong>Studio Care:</strong> Please treat studio equipment, acoustic systems, full-length mirrors, and facilities with utmost care. Intentional damage to academy property will be assessed and billed to the responsible party.
              </li>
              <li>
                <strong>Personal Belongings:</strong> While we maintain a clean and monitored environment, students are responsible for their personal valuables, bags, and electronic devices. The academy is not liable for lost or unattended personal items.
              </li>
            </ul>

            <h2>3. Online Dance Classes Protocol</h2>
            <p>
              For students participating in our global live online sessions (India &amp; USA batches):
            </p>
            <ul>
              <li>
                <strong>Class Setup:</strong> Dancers must ensure a stable high-speed internet connection, functional audio, and an open, uncluttered dancing area of at least 6 &times; 6 feet with non-slippery flooring.
              </li>
              <li>
                <strong>Video Cameras:</strong> For real-time posture corrections, safety supervision, and student engagement, students are required to keep video cameras turned on throughout the live class.
              </li>
              <li>
                <strong>Recording Prohibition:</strong> Unauthorized screen recording, audio capture, or unauthorized rebroadcasting of online class sessions, instructor routines, or Zoom links is strictly prohibited.
              </li>
            </ul>

            <h2>4. Health, Physical Fitness &amp; Injury Disclaimer</h2>
            <div className="ff-legal-card">
              <h4>Physical Activity Acknowledgment</h4>
              <p>
                Dance is a physically demanding activity involving cardio conditioning, stretching, jumping, and dynamic body movements. By participating in classes (in-person or online), the student and/or their legal guardian acknowledges that participation carries inherent risks of physical exertion, muscle strain, sprains, or minor injury.
              </p>
            </div>
            <ul>
              <li>
                <strong>Fitness Declaration:</strong> The student confirms that they are in good health and physically capable of engaging in active dance instruction.
              </li>
              <li>
                <strong>Medical Disclosure:</strong> Any chronic health conditions, pre-existing joint/ligament injuries, asthma, heart conditions, or pregnancy must be disclosed in writing to the instructor prior to starting classes.
              </li>
              <li>
                <strong>Limitation of Liability:</strong> The FlexiiFeet, its directors, master choreographers, and visiting faculty exercise high professional standards and proper warm-up protocols. However, the academy shall not be held liable for accidental injuries, strains, or medical episodes sustained during classes, rehearsals, or self-practice at home.
              </li>
            </ul>

            <h2>5. Wedding, Sangeet &amp; Event Choreography</h2>
            <p>
              For clients booking our customized wedding sangeet, couple entry, family flashmob, or corporate stage show choreography:
            </p>
            <ul>
              <li>
                <strong>Advance Retainer:</strong> A booking retainer (advance deposit) is required to secure rehearsal calendar dates and initiate personalized music editing and choreography design.
              </li>
              <li>
                <strong>Rehearsal Rescheduling:</strong> Any request to reschedule a scheduled rehearsal session must be communicated at least 24 hours in advance. Cancellations with less than 6 hours&rsquo; notice will be counted as a completed session.
              </li>
              <li>
                <strong>Music &amp; Concept Customization:</strong> Music tracks, tempo adjustments, and medley sound mixing are tailored as per initial creative briefs agreed upon with the client.
              </li>
            </ul>

            <h2>6. School DanceED Curriculum Programs</h2>
            <p>
              Where The FlexiiFeet partners with schools and educational institutions under the DanceED program:
            </p>
            <ul>
              <li>All curriculum materials, lesson plans, annual day themes, and progression metrics adhere to the National Education Policy (NEP 2020) framework.</li>
              <li>School administrations and The FlexiiFeet enter into dedicated institutional agreements governing schedule coordination, instructor deployment, and annual showcase production.</li>
            </ul>

            <h2>7. Intellectual Property Rights</h2>
            <p>
              All original choreographies, routine concepts, teaching methodologies, custom audio track edits, promotional media, brand assets, and training literature created by Master Ayush Lokre and The FlexiiFeet remain the exclusive intellectual property of The FlexiiFeet.
            </p>
            <ul>
              <li>Students and clients are licensed to perform routines for personal enjoyment, school functions, or wedding celebrations for which they were taught.</li>
              <li>Commercial reproduction, unauthorized re-teaching, commercial monetization, or claiming ownership of proprietary routines without prior written authorization is strictly prohibited.</li>
            </ul>

            <h2>8. Fee Payments &amp; Renewals</h2>
            <ul>
              <li>All studio and online course fees must be paid in advance before the first session of the billing cycle (monthly, quarterly, or seasonal).</li>
              <li>Non-payment of renewal fees by the due date may result in release of the reserved batch slot to students on the waiting list.</li>
              <li>For detailed policies regarding cancellations, refunds, and makeup credits, please review our <Link href="/refund-policy">Refund &amp; Cancellation Policy</Link>.</li>
            </ul>

            <h2>9. Changes to Schedules &amp; Batches</h2>
            <p>
              While we make every effort to maintain consistent schedules, The FlexiiFeet reserves the right to make operational adjustments:
            </p>
            <ul>
              <li>Temporarily adjust batch timings, substitute instructors with qualified team choreographers, or reschedule sessions due to national holidays, emergency weather conditions, or studio maintenance.</li>
              <li>Advance notification will be communicated to enrolled students via official WhatsApp groups or email.</li>
            </ul>

            <h2>10. Governing Law &amp; Jurisdiction</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of the Republic of India. Any legal dispute, controversy, or claim arising out of or in connection with these terms, studio admissions, or services shall be subject to the exclusive jurisdiction of the competent courts located in <strong>Indore, Madhya Pradesh, India</strong>.
            </p>

            <h2>11. Contact Information</h2>
            <p>
              For questions regarding these terms, enrollment policies, or institutional partnerships, please reach out to:
            </p>

            <div className="ff-legal-card">
              <h4>The FlexiiFeet Dance Academy</h4>
              <p>
                <strong>Director / Founder:</strong> Master Ayush Lokre
                <br />
                <strong>Address:</strong> {site.address}
                <br />
                <strong>Email:</strong> <a href={`mailto:${site.email}`}>{site.email}</a>
                <br />
                <strong>Phone / WhatsApp:</strong>{" "}
                <a href={site.phoneHref}>{site.phone}</a>
              </p>
            </div>

            <p style={{ marginTop: 32 }}>
              Also refer to our <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
              <Link href="/refund-policy">Refund &amp; Cancellation Policy</Link>.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
