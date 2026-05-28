"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    const count = 55;
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.8 + 0.4,
      speedX: (Math.random() - 0.5) * 0.25,
      speedY: -Math.random() * 0.35 - 0.08,
      opacity: Math.random() * 0.35 + 0.05,
      pulse: Math.random() * Math.PI * 2,
    }));

    let frame: number;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.pulse += 0.012;
        const o = p.opacity * (0.7 + 0.3 * Math.sin(p.pulse));
        if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(197,160,89,${o})`;
        ctx.fill();
      });
      frame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handleMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      const num = el.querySelector<HTMLElement>(".nf-big-num");
      if (num) {
        num.style.transform = `translate(${dx * -12}px, ${dy * -8}px)`;
      }
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      <style>{`
        @keyframes nf-fade-up {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes nf-line-grow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes nf-pulse-ring {
          0%   { transform: translate(-50%,-50%) scale(0.92); opacity: .18; }
          50%  { transform: translate(-50%,-50%) scale(1.06); opacity: .08; }
          100% { transform: translate(-50%,-50%) scale(0.92); opacity: .18; }
        }
        @keyframes nf-drift {
          0%,100% { transform: translateY(0px) rotate(-1deg); }
          50%      { transform: translateY(-10px) rotate(1deg); }
        }

        .nf-root {
          min-height: 100vh;
          background: #000;
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          font-family: var(--font-epilogue, 'Epilogue', sans-serif);
        }

        .nf-canvas {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        /* radial vignette */
        .nf-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(0,0,0,.75) 100%);
          pointer-events: none;
          z-index: 1;
        }

        /* pulsing ring behind 404 */
        .nf-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          width: clamp(420px, 55vw, 720px);
          height: clamp(420px, 55vw, 720px);
          border-radius: 50%;
          border: 1px solid rgba(197,160,89,.1);
          animation: nf-pulse-ring 5s ease-in-out infinite;
          pointer-events: none;
          z-index: 1;
        }
        .nf-ring-2 {
          width: clamp(300px, 38vw, 520px);
          height: clamp(300px, 38vw, 520px);
          border-color: rgba(197,160,89,.07);
          animation-delay: -2.5s;
        }

        /* content z-layer */
        .nf-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: clamp(2rem, 6vw, 5rem);
          max-width: 780px;
          width: 100%;
        }

        /* eyebrow */
        .nf-eyebrow {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2.5rem;
          animation: nf-fade-up .7s ease both;
          animation-delay: .1s;
        }
        .nf-eyebrow-line {
          width: 40px;
          height: 1px;
          background: #C5A059;
          transform-origin: left;
          animation: nf-line-grow .6s ease both;
          animation-delay: .3s;
        }
        .nf-eyebrow-text {
          font-size: .58rem;
          font-weight: 700;
          letter-spacing: .32em;
          text-transform: uppercase;
          color: #C5A059;
        }

        /* big 404 */
        .nf-big-num {
          font-size: clamp(7rem, 22vw, 18rem);
          font-weight: 800;
          letter-spacing: -.07em;
          line-height: .85;
          color: transparent;
          -webkit-text-stroke: 1px rgba(197,160,89,.25);
          position: relative;
          transition: transform .12s ease-out;
          animation: nf-fade-up .9s ease both;
          animation-delay: .2s;
          user-select: none;
          margin-bottom: .25em;
        }
        /* filled overlay that's slightly offset */
        .nf-big-num::after {
          content: '404';
          position: absolute;
          inset: 0;
          color: transparent;
          -webkit-text-stroke: 1px rgba(197,160,89,.08);
          transform: translate(3px, 4px);
        }

        /* headline */
        .nf-headline {
          font-size: clamp(1.5rem, 3.5vw, 3rem);
          font-weight: 700;
          letter-spacing: -.04em;
          line-height: 1.05;
          margin-bottom: 1.25rem;
          animation: nf-fade-up .8s ease both;
          animation-delay: .35s;
          color: #fff;
        }
        .nf-headline em {
          color: #C5A059;
          font-style: italic;
        }

        /* sub */
        .nf-sub {
          font-size: clamp(.85rem, 1.1vw, 1rem);
          color: rgba(255,255,255,.45);
          line-height: 1.8;
          max-width: 42ch;
          margin: 0 auto 3rem;
          animation: nf-fade-up .8s ease both;
          animation-delay: .5s;
        }

        /* divider pip */
        .nf-pip-row {
          display: flex;
          align-items: center;
          gap: .75rem;
          margin-bottom: 3rem;
          animation: nf-fade-up .7s ease both;
          animation-delay: .6s;
        }
        .nf-pip {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: rgba(197,160,89,.35);
        }
        .nf-pip.active { background: #C5A059; }
        .nf-pip-line {
          width: 48px; height: 1px;
          background: linear-gradient(to right, rgba(197,160,89,.5), transparent);
        }

        /* action buttons */
        .nf-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          animation: nf-fade-up .8s ease both;
          animation-delay: .65s;
          margin-bottom: 4rem;
        }

        .nf-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: .6rem;
          padding: 1rem 2.25rem;
          background: #C5A059;
          color: #000;
          font-family: var(--font-label, inherit);
          font-size: .6rem;
          font-weight: 700;
          letter-spacing: .22em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: .15rem;
          border: 1px solid #C5A059;
          cursor: pointer;
          transition: filter .25s, transform .25s;
          white-space: nowrap;
        }
        .nf-btn-primary:hover {
          filter: brightness(1.15);
          transform: translateY(-2px);
        }

        .nf-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: .6rem;
          padding: 1rem 2.25rem;
          background: transparent;
          color: rgba(255,255,255,.6);
          font-family: var(--font-label, inherit);
          font-size: .6rem;
          font-weight: 700;
          letter-spacing: .22em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: .15rem;
          border: 1px solid rgba(255,255,255,.15);
          cursor: pointer;
          transition: border-color .25s, color .25s, transform .25s;
          white-space: nowrap;
        }
        .nf-btn-ghost:hover {
          border-color: rgba(255,255,255,.4);
          color: #fff;
          transform: translateY(-2px);
        }

        /* quick links */
        .nf-links {
          display: flex;
          flex-wrap: wrap;
          gap: .75rem;
          justify-content: center;
          animation: nf-fade-up .8s ease both;
          animation-delay: .8s;
        }
        .nf-link-chip {
          display: inline-flex;
          align-items: center;
          gap: .45rem;
          padding: .5rem 1rem;
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 2rem;
          font-size: .62rem;
          font-family: var(--font-label, inherit);
          letter-spacing: .12em;
          text-transform: uppercase;
          color: rgba(255,255,255,.35);
          text-decoration: none;
          transition: border-color .25s, color .25s, background .25s;
        }
        .nf-link-chip:hover {
          border-color: rgba(197,160,89,.3);
          color: #C5A059;
          background: rgba(197,160,89,.04);
        }
        .nf-link-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: currentColor;
          flex-shrink: 0;
        }

        /* floating leaf ornament */
        .nf-leaf {
          position: absolute;
          bottom: clamp(2rem, 6vh, 5rem);
          right: clamp(2rem, 6vw, 5rem);
          opacity: .08;
          animation: nf-drift 8s ease-in-out infinite;
          pointer-events: none;
          z-index: 1;
        }

        /* bottom brand mark */
        .nf-brand {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          font-size: .52rem;
          font-weight: 700;
          letter-spacing: .3em;
          text-transform: uppercase;
          color: rgba(255,255,255,.15);
          z-index: 2;
          white-space: nowrap;
          animation: nf-fade-up .7s ease both;
          animation-delay: 1s;
        }

        /* horizontal gold rule at very top */
        .nf-top-bar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(to right, transparent, #C5A059, transparent);
          opacity: .4;
          z-index: 3;
        }
      `}</style>

      <div className="nf-root" ref={containerRef}>
        <canvas ref={canvasRef} className="nf-canvas" />

        <div className="nf-vignette" />
        <div className="nf-ring" />
        <div className="nf-ring nf-ring-2" />
        <div className="nf-top-bar" />

        <svg
          className="nf-leaf"
          width="180"
          height="220"
          viewBox="0 0 180 220"
          fill="none"
        >
          <path
            d="M90 10 C140 40, 170 100, 90 210 C10 100, 40 40, 90 10Z"
            fill="#C5A059"
          />
          <path
            d="M90 10 L90 210"
            stroke="rgba(0,0,0,.3)"
            strokeWidth="1.5"
          />
          {[40, 70, 100, 130, 160].map((y) => (
            <g key={y}>
              <path
                d={`M90 ${y} Q${110 + (y - 90) * 0.3} ${y - 10} ${120 + (y - 90) * 0.2} ${y}`}
                stroke="rgba(0,0,0,.2)"
                strokeWidth="1"
                fill="none"
              />
              <path
                d={`M90 ${y} Q${70 - (y - 90) * 0.3} ${y - 10} ${60 - (y - 90) * 0.2} ${y}`}
                stroke="rgba(0,0,0,.2)"
                strokeWidth="1"
                fill="none"
              />
            </g>
          ))}
        </svg>

        <div className="nf-content">
          {/* eyebrow */}
          <div className="nf-eyebrow">
            <span className="nf-eyebrow-line" />
            <span className="nf-eyebrow-text">Gugri Industries</span>
            <span className="nf-eyebrow-line" style={{ transformOrigin: "right" }} />
          </div>

          {/* 404 */}
          <div className="nf-big-num">404</div>

          {/* headline */}
          <h1 className="nf-headline">
            This Path Has Not Been{" "}
            <em>Cultivated Yet.</em>
          </h1>

          {/* subtext */}
          <p className="nf-sub">
            Like untouched land awaiting regeneration, this page doesn't exist — 
            but every ecosystem starts somewhere. Let us guide you back to fertile ground.
          </p>

          {/* pip decoration */}
          <div className="nf-pip-row">
            <div className="nf-pip-line" />
            <div className="nf-pip" />
            <div className="nf-pip active" />
            <div className="nf-pip" />
            <div
              className="nf-pip-line"
              style={{ background: "linear-gradient(to left, rgba(197,160,89,.5), transparent)" }}
            />
          </div>

          {/* action buttons */}
          <div className="nf-actions">
            <Link href="/" className="nf-btn-primary">
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 15 }}
              >
                home
              </span>
              Return Home
            </Link>
            <Link href="/connect" className="nf-btn-ghost">
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 15 }}
              >
                mail
              </span>
              Contact Us
            </Link>
          </div>

          {/* quick nav chips */}
          <div className="nf-links">
            {[
              { label: "Philosophy", href: "/#philosophy" },
              { label: "Our Approach", href: "/#approach" },
              { label: "Portfolio", href: "/#experience" },
              { label: "Innovation", href: "/#innovation" },
            ].map((l) => (
              <Link key={l.label} href={l.href} className="nf-link-chip">
                <span className="nf-link-dot" />
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* bottom brand mark */}
        <span className="nf-brand">Gugri Industries — Regenerative Ecosystems</span>
      </div>
    </>
  );
}