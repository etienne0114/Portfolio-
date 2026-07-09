import { useEffect, useRef } from "react";

export default function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width, height, dpr;
    let stars = [];
    let bandStars = [];
    let shootingStar = null;
    let nextShootAt = 0;
    let raf;

    const rand = (min, max) => min + Math.random() * (max - min);

    function build() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // free-floating stars in 3 parallax depths
      const count = Math.min(240, Math.floor((width * height) / 9000));
      stars = Array.from({ length: count }, () => {
        const depth = Math.random();
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          r: rand(0.4, 1.6) + depth * 0.6,
          depth,
          warm: Math.random() < 0.16,
          twinkle: rand(0.5, 1),
          phase: rand(0, Math.PI * 2),
          speed: rand(0.6, 1.6),
        };
      });

      // dense faint band running diagonally — the "milky way"
      const bandCount = Math.min(340, Math.floor((width * height) / 6500));
      bandStars = Array.from({ length: bandCount }, () => {
        const t = Math.random();
        const bx = t * (width + 600) - 300;
        const by = height * 0.85 - t * height * 0.7;
        const spread = rand(-1, 1) * rand(0, 130);
        return {
          x: bx + spread * 0.35,
          y: by + spread,
          r: rand(0.3, 0.9),
          alpha: rand(0.08, 0.4),
          phase: rand(0, Math.PI * 2),
          speed: rand(0.4, 1.1),
        };
      });
    }

    function drawNebula() {
      // extremely faint warm haze along the band — additive glow only, no fill
      const g = ctx.createLinearGradient(0, height * 0.85, width, height * 0.15);
      g.addColorStop(0, "rgba(245,163,26,0)");
      g.addColorStop(0.45, "rgba(245,200,120,0.035)");
      g.addColorStop(0.55, "rgba(230,230,255,0.045)");
      g.addColorStop(1, "rgba(245,163,26,0)");
      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.rotate(-0.02);
      ctx.translate(-width / 2, -height / 2);
      ctx.fillStyle = g;
      ctx.fillRect(-100, 0, width + 200, height);
      ctx.restore();
    }

    function spawnShootingStar(now) {
      const fromLeft = Math.random() < 0.5;
      shootingStar = {
        x: fromLeft ? rand(-50, width * 0.3) : rand(width * 0.5, width + 50),
        y: rand(0, height * 0.4),
        vx: (fromLeft ? 1 : -1) * rand(9, 14),
        vy: rand(3, 6),
        life: 1,
        decay: rand(0.012, 0.02),
      };
      nextShootAt = now + rand(5000, 12000);
    }

    function frame(now) {
      ctx.clearRect(0, 0, width, height);
      const scroll = window.scrollY || 0;
      const t = now / 1000;

      drawNebula();

      for (const s of bandStars) {
        const a = s.alpha * (0.7 + 0.3 * Math.sin(t * s.speed + s.phase));
        const y = (((s.y - scroll * 0.03) % (height + 40)) + height + 40) % (height + 40) - 20;
        ctx.globalAlpha = a;
        ctx.fillStyle = "#e8e8f0";
        ctx.beginPath();
        ctx.arc(s.x, y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const s of stars) {
        const tw = 0.55 + 0.45 * Math.sin(t * s.speed * s.twinkle + s.phase);
        const parallax = scroll * (0.02 + s.depth * 0.07);
        const y = (((s.y - parallax) % (height + 60)) + height + 60) % (height + 60) - 30;
        const drift = ((s.x + t * (2 + s.depth * 5)) % (width + 60)) - 30;
        ctx.globalAlpha = (0.25 + s.depth * 0.55) * tw;
        ctx.fillStyle = s.warm ? "#f5c877" : "#f2f4ff";
        ctx.beginPath();
        ctx.arc(drift, y, s.r, 0, Math.PI * 2);
        ctx.fill();
        if (s.r > 1.5) {
          ctx.globalAlpha *= 0.35;
          ctx.beginPath();
          ctx.arc(drift, y, s.r * 2.6, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (!shootingStar && now > nextShootAt) spawnShootingStar(now);
      if (shootingStar) {
        const sh = shootingStar;
        const grad = ctx.createLinearGradient(sh.x, sh.y, sh.x - sh.vx * 9, sh.y - sh.vy * 9);
        grad.addColorStop(0, `rgba(255,255,255,${0.85 * sh.life})`);
        grad.addColorStop(1, "rgba(255,255,255,0)");
        ctx.globalAlpha = 1;
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(sh.x, sh.y);
        ctx.lineTo(sh.x - sh.vx * 9, sh.y - sh.vy * 9);
        ctx.stroke();
        sh.x += sh.vx;
        sh.y += sh.vy;
        sh.life -= sh.decay;
        if (sh.life <= 0 || sh.x < -150 || sh.x > width + 150 || sh.y > height + 50) {
          shootingStar = null;
        }
      }

      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(frame);
    }

    function staticFrame() {
      ctx.clearRect(0, 0, width, height);
      drawNebula();
      for (const s of [...bandStars, ...stars]) {
        ctx.globalAlpha = s.alpha ?? 0.25 + (s.depth ?? 0) * 0.55;
        ctx.fillStyle = s.warm ? "#f5c877" : "#f2f4ff";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    build();
    if (reduceMotion) {
      staticFrame();
    } else {
      nextShootAt = performance.now() + 4000;
      raf = requestAnimationFrame(frame);
    }

    const onResize = () => {
      build();
      if (reduceMotion) staticFrame();
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield" aria-hidden="true" />;
}
