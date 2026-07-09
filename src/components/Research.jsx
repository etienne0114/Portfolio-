import Reveal from "./Reveal.jsx";
import { research } from "../data/content.js";

export default function Research() {
  return (
    <section id="research">
      <div className="container">
        <Reveal>
          <p className="section-kicker">05 · Research interests</p>
          <h2 className="section-title">
            What I'm <span className="grad-text">studying</span>
          </h2>
        </Reveal>
        <div className="research-grid">
          {research.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 0.08}>
              <div className="card research-card">
                <h4>{r.title}</h4>
                <p>{r.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
