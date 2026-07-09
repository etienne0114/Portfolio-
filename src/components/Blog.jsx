import Reveal from "./Reveal.jsx";
import { blogPosts } from "../data/content.js";

export default function Blog() {
  return (
    <section id="blog">
      <div className="container">
        <Reveal>
          <p className="section-kicker">06 · Blog</p>
          <h2 className="section-title">
            Learning in <span className="grad-text">public</span>
          </h2>
          <p className="section-lede">
            Technical write-ups documenting my journey — from GPU runtimes to IoT hardware.
          </p>
        </Reveal>
        <div className="blog-grid">
          {blogPosts.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <div className="card blog-card">
                <div className="blog-meta">
                  <span>{b.tag}</span>
                  <span>{b.date}</span>
                </div>
                <h3>{b.title}</h3>
                <p>{b.excerpt}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
