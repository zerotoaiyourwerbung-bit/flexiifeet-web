"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";

// Page motion, no library: each page fades in on navigation (keyed by path, CSS .ff-page), and every top-level section
// below the fold fades up as it scrolls into view (.ff-reveal -> .is-in). Sections already on screen are left alone,
// so nothing is ever hidden without JS.
// The fade is for navigation only; the very first page a visitor loads appears straight away.
let navigated = false;

export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    navigated = true;
    const page = ref.current;
    if (!page || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    for (const el of page.children) {
      if (el.getBoundingClientRect().top < innerHeight) continue;
      el.classList.add("ff-reveal");
      io.observe(el);
    }
    return () => io.disconnect();
  }, [pathname]);

  return (
    <div key={pathname} ref={ref} className={navigated ? "ff-page" : undefined}>
      {children}
    </div>
  );
}
