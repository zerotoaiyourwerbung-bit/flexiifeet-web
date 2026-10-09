"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";
import "lenis/dist/lenis.css";

// Smooth (inertial) wheel scrolling for the whole page via Lenis. In-page links like #enquire glide to their target,
// stopping below the sticky header. Touch scrolling stays native. Off for visitors who ask for reduced motion.
export default function SmoothScroll() {
  const [on, setOn] = useState(false);
  useEffect(() => setOn(!matchMedia("(prefers-reduced-motion: reduce)").matches), []);
  return on ? <ReactLenis root options={{ anchors: { offset: -100 } }} /> : null;
}
