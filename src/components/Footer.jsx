import { profile } from "../data/content.js";

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <span>
          © {new Date().getFullYear()} Etienne Tuyihamye · Kigali, Rwanda
        </span>
        <span>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {" · "}
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          {" · "}
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          {" · "}
          {profile.phones.map((p, i) => (
            <span key={p.label}>
              {i > 0 && " | "}
              <a href={p.whatsapp} target="_blank" rel="noreferrer">
                {p.label}
              </a>
            </span>
          ))}
        </span>
      </div>
    </footer>
  );
}
