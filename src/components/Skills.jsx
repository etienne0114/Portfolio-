import Reveal from "./Reveal.jsx";
import { skillGroups } from "../data/content.js";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <Reveal>
          <p className="section-kicker">02 · Skills</p>
          <h2 className="section-title">
            Technical <span className="grad-text">toolbox</span>
          </h2>
          <p className="section-lede">
            I build complete products — backend services, mobile apps, AI systems and embedded
            hardware — so my stack spans the full pipeline from silicon to screen.
          </p>
        </Reveal>
        <div className="skills-grid">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 0.08}>
              <div className="card">
                <div className="skill-head">
                  <div className="skill-icon">{g.icon}</div>
                  <h3>{g.title}</h3>
                </div>
                <div className="skill-chips">
                  {g.items.map((s) => (
                    <span className="chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
