import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { profile } from "../data/content.js";

function useTypewriter(words, typeSpeed = 65, pause = 1700) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let timeout;
    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? typeSpeed / 2 : typeSpeed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typeSpeed, pause]);

  return text;
}

function CountUp({ value, suffix = "", duration = 1.6 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * value));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 7, suffix: "+", label: "Major projects built" },
  { value: 3, suffix: "", label: "Products live in production" },
  { value: 8, suffix: "", label: "Programming languages" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.6, 0.35, 1] } },
};

export default function Hero() {
  const role = useTypewriter(profile.roles);

  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-grid">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.p variants={item} className="hero-kicker">
              Hi, my name is
            </motion.p>
            <motion.h1 variants={item}>
              Etienne Tuyihamye<span className="dot">.</span>
            </motion.h1>
            <motion.p variants={item} className="hero-role">
              {role}
              <span className="cursor" />
            </motion.p>
            <motion.p variants={item} className="hero-tagline">
              {profile.tagline}
            </motion.p>
            <motion.div variants={item} className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View my work →
              </a>
              <a href={profile.resumeUrl} className="btn btn-ghost" target="_blank" rel="noreferrer">
                Download résumé
              </a>
              <a href={profile.github} className="btn btn-ghost" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </motion.div>
            <motion.div variants={item} className="hero-stats">
              {stats.map((s) => (
                <div className="stat" key={s.label}>
                  <div className="stat-num">
                    <CountUp value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.21, 0.6, 0.35, 1] }}
          >
            <motion.div
              className="portrait-wrap"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                className="portrait"
                src="/me.jpg"
                alt="Etienne Tuyihamye — Software & AI Engineer"
              />
              <div className="portrait-badge">
                <span className="pulse-dot" />
                Based in {profile.location}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
