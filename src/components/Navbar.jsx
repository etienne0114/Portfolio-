import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "../data/content.js";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Blog", "#blog"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const goTo = (e, href) => {
    e.preventDefault();
    document.body.style.overflow = "";
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", href);
    }
  };

  return (
    <nav className={`nav ${scrolled || open ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#top" className="nav-logo" onClick={(e) => goTo(e, "#top")}>
         Code With Etienne<span>.</span>
        </a>
        <ul className="nav-links">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} onClick={(e) => goTo(e, href)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a href={profile.resumeUrl} className="btn btn-ghost btn-sm nav-cta" target="_blank" rel="noreferrer">
          Résumé
        </a>
        <button className="nav-burger" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
          {open ? "✕" : "☰"}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.ul
            className="nav-mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            {links.map(([label, href]) => (
              <li key={href}>
                <a href={href} onClick={(e) => goTo(e, href)}>
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="nav-mobile-resume"
                onClick={() => setOpen(false)}
              >
                Résumé ↗
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
