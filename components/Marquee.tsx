import type { ReactNode } from "react";

// Infinite horizontal scroller, pure CSS (see .ff-marquee in globals.css).
// Items are rendered twice so the -50% translate loops seamlessly; the copy is hidden from screen readers.
export default function Marquee({ children, speed = 40, className = "" }: { children: ReactNode; speed?: number; className?: string }) {
  return (
    <div className={`ff-marquee ${className}`} style={{ ["--ff-speed" as string]: `${speed}s` }}>
      <div className="ff-marquee-track">
        <div className="ff-marquee-group">{children}</div>
        <div className="ff-marquee-group" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
