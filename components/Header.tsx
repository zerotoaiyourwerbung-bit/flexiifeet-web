"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, whatsappLink, type NavItem } from "@/lib/site";

// Template markup: about.html "main-header style5 style5withstyle6".
// custom.js behaviours (mobile collapse, dropdown toggle) are re-done in React. The header itself is sticky (CSS),
// so the same header stays on screen while scrolling instead of swapping to the template's sticky clone.

function Menu({ id, onNavigate }: { id?: string; onNavigate?: () => void }) {
  const pathname = usePathname();
  const [openDrop, setOpenDrop] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const isCurrent = (item: NavItem) =>
    item.href === "/" ? pathname === "/" : [item, ...(item.children ?? [])].some((i) => pathname.startsWith(i.href));

  useEffect(() => setOpen(false), [pathname]);

  return (
    <nav className="main-menu style4 navbar-expand-lg">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle mar-right0"
          aria-controls={id}
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      </div>
      <div className={`navbar-collapse collapse clearfix${open ? " show" : ""}`} id={id}>
        <ul className="navigation clearfix">
          {nav.map((item) => (
            <li key={item.label} className={`${item.children ? "dropdown" : ""} ${isCurrent(item) ? "current" : ""}`}>
              <Link href={item.href} onClick={onNavigate}>
                {item.label}
              </Link>
              {item.children && (
                <>
                  <ul style={openDrop === item.label ? { display: "block" } : undefined}>
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} onClick={onNavigate}>
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div
                    className="dropdown-btn"
                    role="button"
                    aria-label={`Toggle ${item.label} menu`}
                    onClick={() => setOpenDrop(openDrop === item.label ? null : item.label)}
                  >
                    <span className="fa fa-angle-down"></span>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default function Header() {
  return (
    <header className="main-header style5 style5withstyle6 ff-header">
      <div className="header-upper-style5">
        <div className="outer-container clearfix">
          <div className="header-upper-left clearfix">
            <div className="logo">
              <Link href="/">
                <img src="/live/logo.png" alt="The FlexiiFeet – Let Loose & Let's Groove" className="ff-logo" />
              </Link>
            </div>
          </div>
          <div className="header-upper-middle clearfix">
            <div className="nav-outer clearfix">
              <Menu id="main-nav" />
            </div>
          </div>
          <div className="header-upper-right clearfix">
            <a className="thm-btn1 ff-connect" href={whatsappLink()} target="_blank" rel="noopener">
              <span></span>Connect Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
