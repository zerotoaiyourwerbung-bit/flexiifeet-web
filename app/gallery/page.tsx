import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery – Classes, Stages & Performances",
  description: "Moments from The FlexiiFeet: school shows, classes, weddings and stage performances.",
  alternates: { canonical: "/gallery" },
};

// Add images by dropping them into public/gallery; no code change needed. Files show in name order (prefix with 01-, 02- to control it).
const images = fs
  .readdirSync(path.join(process.cwd(), "public/gallery"))
  .filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f))
  .sort();

export default function Gallery() {
  return (
    <section className="ff-gallery">
      <div className="container">
        <h1>Gallery</h1>
        <p>Moments from our classes, school shows, weddings and stages.</p>
        <div className="ff-gallery-grid">
          {images.map((f) => (
            <img key={f} src={`/gallery/${encodeURIComponent(f)}`} alt="The FlexiiFeet moment" loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
}
