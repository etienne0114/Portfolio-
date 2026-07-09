import Reveal from "./Reveal.jsx";
import { experience } from "../data/content.js";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <Reveal>
          <p className="section-kicker">04 · Experience</p>
          <h2 className="section-title">
            Where I've <span className="grad-text">built</span>
          </h2>
        </Reveal>
        <div className="timeline">
          {experience.map((e, i) => (
            <Reveal key={e.role} delay={i * 0.1}>
              <div className="tl-item">
                <div className="tl-dot" />
                <h3>{e.role}</h3>
                <div className="tl-org">
                  {e.org} · {e.period}
                </div>
                <ul>
                  {e.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
