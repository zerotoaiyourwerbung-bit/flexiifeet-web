import Link from "next/link";
import { infoPages } from "@/lib/site";

export const metadata = { title: "Page not found" };

// Shown for any URL that doesn't exist; points visitors back to the main sections instead of a dead end.
export default function NotFound() {
  return (
    <section className="ff-section ff-notfound">
      <div className="container">
        <h1>We couldn&rsquo;t find that page.</h1>
        <p>It may have moved, or the link may be mistyped. Here is where most people are headed:</p>
        <ul className="ff-chip-row ff-chip-row--left">
          {infoPages.map((p) => (
            <li key={p.href}>
              <Link href={p.href}>{p.title}</Link>
            </li>
          ))}
        </ul>
        <div className="ff-cta-buttons">
          <Link className="ff-btn ff-btn--grad" href="/">
            Back to home
          </Link>
          <Link className="ff-btn ff-btn--outline" href="/contact">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
