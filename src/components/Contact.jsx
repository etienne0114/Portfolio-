import Reveal from "./Reveal.jsx";
import { profile } from "../data/content.js";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <Reveal>
          <div className="card contact-card">
            <p className="section-kicker">07 · Contact</p>
            <h2>
              Let's build something <span className="grad-text">impactful</span>
            </h2>
            <p>
              I'm open to software engineering roles, apprenticeships, collaborations and
              conversations about ambitious products — especially those built from Africa for the
              world.
            </p>
            <div className="contact-actions">
              <a href={`mailto:${profile.email}`} className="btn btn-primary">
                ✉ Email me
              </a>
              <a href={profile.github} className="btn btn-ghost" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={profile.linkedin} className="btn btn-ghost" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
