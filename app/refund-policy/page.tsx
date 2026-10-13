import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | The FlexiiFeet Dance Academy",
  description:
    "Learn about our transparent payment terms, batch cancellation guidelines, compensatory classes, and refund rules for studio and online dance programs.",
  alternates: {
    canonical: "/refund-policy",
  },
};

export default function RefundPolicyPage() {
  return (
    <>
      <section className="ff-legal-header">
        <div className="container">
          <span className="ff-legal-tag">Cancellations &amp; Billing</span>
          <h1>Refund &amp; Cancellation Policy</h1>
          <p>Last updated: October 14, 2026 · Effective Date: January 1, 2024</p>
        </div>
      </section>

      <section className="ff-legal-section">
        <div className="container">
          <article className="ff-legal-content">
            <p>
              At <strong>{site.name}</strong>, we strive to deliver world-class dance training with small batch sizes, individualized attention, and dedicated master choreographers.
            </p>
            <p>
              Because studio studio slots, online batch seats, and choreographer schedules are strictly capped, enrollment guarantees your dedicated spot. This Refund and Cancellation Policy outlines the guidelines governing fee payments, missed sessions, schedule adjustments, and cancellations across all our programs.
            </p>

            <h2>1. General Policy Principles</h2>
            <ul>
              <li>
                All program enrollments (studio batches, online live classes, intensive bootcamps, and event choreography retainers) require full advance payment or an agreed deposit prior to commencement.
              </li>
              <li>
                Once a batch has commenced or registration is finalized, <strong>fees paid are non-refundable and non-transferable</strong> to other individuals, except under the explicit scenarios detailed in this policy.
              </li>
              <li>
                Non-attendance or voluntary withdrawal by a student does not constitute grounds for a monetary refund.
              </li>
            </ul>

            <h2>2. In-Person Studio Classes (Indore)</h2>
            <p>
              For our regular studio batches across Kids, Preteens, Adults, and Private Training at our Saket Nagar studio:
            </p>
            <ul>
              <li>
                <strong>Monthly &amp; Quarterly Enrollments:</strong> Fees are collected per billing cycle (monthly or quarterly). Fees once paid are non-refundable once the billing month has started.
              </li>
              <li>
                <strong>Missed Classes &amp; Makeup Sessions:</strong> We understand that occasional illness, school exams, or family emergencies happen. If a student intimates the studio team at least <strong>24 hours in advance</strong> of an absence, the student may attend up to <strong>two (2) compensatory makeup classes</strong> within the same billing month, subject to available slots in parallel running batches.
              </li>
              <li>
                <strong>Medical Leave &amp; Freeze Option:</strong> In the event of a major prolonged illness or physical injury requiring extended rest (supported by a valid medical practitioner&rsquo;s certificate submitted before absence), management may approve a fee freeze, carrying forward unused weeks for up to 30 days upon recovery.
              </li>
            </ul>

            <div className="ff-legal-card">
              <h4>Compensatory Class Guidelines</h4>
              <p>
                Compensatory classes must be pre-scheduled with the studio coordinator and consumed within the same active billing month. They cannot be accumulated, carried over to subsequent months, or deducted from future renewal fees.
              </p>
            </div>

            <h2>3. Online Dance Classes (India &amp; USA Batches)</h2>
            <p>
              For our live virtual interactive dance programs:
            </p>
            <ul>
              <li>
                Once virtual access links, batch slot allocations, and orientation details are issued, online course fees are strictly non-refundable.
              </li>
              <li>
                <strong>Time Zone Adjustments:</strong> If a student undergoes an unavoidable academic or professional timing change, we will make reasonable efforts to transition the student to another suitable time zone batch, provided an open slot exists.
              </li>
              <li>
                <strong>Student Technical Issues:</strong> The academy is not responsible for missed classes resulting from personal internet outages, device malfunctions, or power cuts on the student&rsquo;s end. Where available, reference choreography clips may be shared to help the student catch up.
              </li>
            </ul>

            <h2>4. Workshops, Masterclasses &amp; Bootcamps</h2>
            <ul>
              <li>
                Short-term workshops, guest masterclasses, and summer bootcamps have limited seats and fixed artist commitments. Registrations and tickets are <strong>non-refundable</strong>.
              </li>
              <li>
                <strong>Seat Replacement:</strong> If an enrolled participant is unable to attend, they may transfer their seat to an eligible friend or family member, provided they inform our team in writing at least <strong>24 hours prior</strong> to the workshop start time.
              </li>
            </ul>

            <h2>5. Wedding, Sangeet &amp; Stage Event Choreography</h2>
            <p>
              For private wedding sangeet, couple entry, flashmob, and corporate stage production projects:
            </p>
            <ul>
              <li>
                <strong>Advance Retainer:</strong> A booking retainer (advance deposit of 30% to 50%) is required to lock dates on the choreographer&rsquo;s calendar and initiate customized track editing, mixing, and creative concept development. This retainer is <strong>non-refundable</strong> once work has commenced.
              </li>
              <li>
                <strong>Rehearsal Rescheduling:</strong> If the client needs to reschedule a confirmed rehearsal slot, notice must be given at least <strong>24 hours in advance</strong> to accommodate trainer routing. Rescheduling requests with less than 6 hours&rsquo; notice will be treated as a consumed rehearsal session.
              </li>
              <li>
                <strong>Event Cancellation:</strong> If an event is cancelled or indefinitely postponed by the client, any balance for unused, unconducted rehearsals will not be charged; however, the advance retainer and fees for completed sessions remain non-refundable.
              </li>
            </ul>

            <h2>6. Cancellations or Rescheduling by The FlexiiFeet</h2>
            <p>
              While rare, unforeseen circumstances such as severe monsoon weather, government holidays, studio power disruptions, or sudden instructor illness may necessitate canceling a class:
            </p>
            <ul>
              <li>The studio will notify enrolled students immediately via official WhatsApp announcements or SMS.</li>
              <li>A dedicated makeup session will be scheduled at a mutually agreed date and time.</li>
              <li>If a makeup class cannot reasonably be arranged by the academy, a pro-rata fee credit will be applied toward the student&rsquo;s subsequent month enrollment.</li>
            </ul>

            <h2>7. Chargebacks &amp; Dispute Policy</h2>
            <p>
              We pride ourselves on transparent communication and fair resolution of student concerns. If you experience any billing discrepancy, please contact our administrative team directly before initiating a chargeback or payment gateway dispute. Most billing inquiries can be investigated and resolved within 24 to 48 business hours.
            </p>

            <h2>8. How to Contact Billing Support</h2>
            <p>
              For questions regarding fee receipts, leaves, compensatory scheduling, or medical freeze requests, please reach out with your student name and batch details:
            </p>

            <div className="ff-legal-card">
              <h4>The FlexiiFeet Administration &amp; Billing</h4>
              <p>
                <strong>Studio Address:</strong> {site.address}
                <br />
                <strong>Email:</strong> <a href={`mailto:${site.email}`}>{site.email}</a>
                <br />
                <strong>Phone / WhatsApp:</strong>{" "}
                <a href={site.phoneHref}>{site.phone}</a>
                <br />
                <strong>Support Hours:</strong> Monday – Saturday, 10:00 AM – 7:30 PM IST
              </p>
            </div>

            <p style={{ marginTop: 32 }}>
              Please also see our <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
              <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
