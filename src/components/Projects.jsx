import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal.jsx";
import { projects, concepts } from "../data/content.js";

function CaseStudy({ p }) {
  return (
    <div className="case-inner">
      <div className="case-block">
        <h4>Objectives</h4>
        <ul>
          {p.objectives.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>
      </div>
      <div className="case-block">
        <h4>Challenges</h4>
        <ul>
          {p.challenges.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
      <div className="case-block case-wide">
        <h4>Architecture</h4>
        <p>{p.architecture}</p>
      </div>
      <div className="case-block case-wide">
        <h4>Outcomes</h4>
        <p>{p.outcomes}</p>
      </div>
    </div>
  );
}

function ProjectCard({ p, index }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <Reveal>
      <div className="card">
        <div className="project-top">
          <h3>{p.name}</h3>
          <span className="badge badge-tag">{p.tag}</span>
          <span className="badge badge-status">{p.status}</span>
          {p.live && (
            <a className="badge badge-live" href={p.live} target="_blank" rel="noreferrer">
              Live demo ↗
            </a>
          )}
        </div>
        <p className="project-summary">{p.summary}</p>
        <div className="project-stack">
          {p.stack.map((s) => (
            <span className="chip" key={s}>
              {s}
            </span>
          ))}
        </div>
        <button className="case-toggle" onClick={() => setOpen(!open)}>
          <span className={`arrow ${open ? "open" : ""}`}>▸</span>
          {open ? "Hide case study" : "Read case study"}
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              className="case-body"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <CaseStudy p={p} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <Reveal>
          <p className="section-kicker">03 · Projects</p>
          <h2 className="section-title">
            Case <span className="grad-text">studies</span>
          </h2>
          <p className="section-lede">
            Each project is treated as a real product: objectives, architecture, engineering
            challenges and measurable outcomes — not just a repo link.
          </p>
        </Reveal>
        <div className="projects-list">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} p={p} index={i} />
          ))}
        </div>
        <Reveal>
          <h3 className="subheading">Concepts & R&D</h3>
          <p>Public-safety and energy systems I am designing, prototyping and researching.</p>
        </Reveal>
        <div className="concepts-grid">
          {concepts.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08}>
              <div className="card concept-card">
                <h4>{c.name}</h4>
                <p>{c.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
