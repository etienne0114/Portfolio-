import { useState } from "react";
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

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-logo">
          Etienne<span>.</span>T
        </a>
        <ul className="nav-links">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
        <a href={profile.resumeUrl} className="btn btn-ghost btn-sm nav-cta" target="_blank" rel="noreferrer">
          Résumé
        </a>
        <button className="nav-burger" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? "✕" : "☰"}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.ul
            className="nav-mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {links.map(([label, href]) => (
              <li key={href}>
                <a href={href} onClick={() => setOpen(false)}>
                  {label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
