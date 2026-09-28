"use client";

import { useEffect, useRef, useState } from "react";

// Replaces jquery.countTo + appear.js: counts up once when scrolled into view.
export default function Counter({ to, duration = 2000 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(to); // SSR/no-JS shows the real number

  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setN(0);
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / duration);
        setN(Math.round(to * p));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return <span ref={ref}>{n.toLocaleString("en-IN")}</span>;
}
