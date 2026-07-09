import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

const stats = [
  { num: "7+", label: "Major projects built" },
  { num: "3", label: "Products live in production" },
  { num: "8", label: "Programming languages" },
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
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="hero-kicker">
            Hi, my name is
          </motion.p>
          <motion.h1 variants={item}>
            Etienne <span className="grad-text">Tuyihamye</span>
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
                <div className="stat-num grad-text">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
