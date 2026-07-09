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
            <div className="contact-phones">
              {profile.phones.map((p) => (
                <a key={p.label} href={p.whatsapp} target="_blank" rel="noreferrer" className="phone-link">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.7.9-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.5 7.5 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.4c.1-.2.2-.3.2-.4.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2 1 2.4a9.1 9.1 0 0 0 3.5 3.1c.5.2.9.3 1.2.4.5.2 1 .1 1.3.1.4-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.4-.3Z" />
                  </svg>
                  {p.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
