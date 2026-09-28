"use client";

import { useEffect, useState } from "react";

// Template "scroll-top" button; custom.js logic in React.
export default function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      className="scroll-top"
      aria-label="Back to top"
      style={{ display: show ? "block" : "none" }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <span className="icon-down-arrow"></span>
    </button>
  );
}
