import Reveal from "./Reveal.jsx";
import { about } from "../data/content.js";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <Reveal>
          <p className="section-kicker">01 · About</p>
          <h2 className="section-title">
            Engineer first, <span className="grad-text">framework second</span>
          </h2>
        </Reveal>
        <div className="about-grid">
          <Reveal className="about-text">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Reveal>
          <Reveal delay={0.15}>
            {about.education.map((e) => (
              <div className="card edu-card" key={e.school}>
                <h4>{e.school}</h4>
                <div className="edu-cred">
                  {e.credential} · {e.period}
                </div>
                <p>{e.detail}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
