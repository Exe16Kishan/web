"use client";

import Footer from "@/components/Footer";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState, useCallback } from "react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "3x",   label: "Revenue Per Acre" },
  { value: "40%",  label: "Water Savings" },
  { value: "250+", label: "Acres Managed" },
  { value: "0.0",  label: "Net Zero Goal" },
];

const pillars = [
  { num: "01", icon: "light_mode",   title: "Generate", desc: "Harness solar energy, cultivate organic produce, and create tangible value from every square meter of land." },
  { num: "02", icon: "shield",       title: "Protect",  desc: "Safeguard soil health, water resources, and biodiversity through sustainable land management practices." },
  { num: "03", icon: "trending_up",  title: "Improve",  desc: "Continuously enhance ecosystem performance through data-driven optimization and regenerative innovation." },
  { num: "04", icon: "layers",       title: "Compound", desc: "Stack revenue layers and let ecological gains compound into exponential long-term wealth and environmental returns." },
];

const journeyCards = [
  { category: "Architecture",  title: "911 Ridge Estate.",      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCepr3IZ5MY3BmKN3p3y5_daHUtuB5h2sQw86JRoFyIGm-1tRNdonqB7xXEokD6xULYXIugfWM9lpkySjqW1NEAHIIKeaSBYx-49upr3G0e4ggy45QfOPdaCHEfKz0gQUAzN8JXYddcns9sG1kfvdfnlcrY4MMt3xl2Pl_8rjZdqefZoYZFNpKNkqDJl_o_yNSkutu7W9V0U75f9-NVc8J6QZc3FkHJtdTlql0_EqERf1DhkGacnb1ZtOuzJgZz3NUwCJR3MIA7ZbM" },
  { category: "Regeneration",  title: "718 Timber Haven.",      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAL1y_4kmTWDPOP2ga1uxCy3JknZQoHrhewAl2oKAK_qNmPG5oRulCCYoV1ROziYCjH-PGP7UxkrOYQSe6XRXNmgGwvoTE3fl2ZR3yRwmTYc-C8kcaDnc0uUVAQYb76zZ4xyjK5kjijmtETwyKw3LW9WbthnyQqKl1SWBJFkOnyez6FXDFFz_2WrkXp9LOnTKSb1ztjiWC1JrBFiFR2Djtl00bTzV5yuFeX9UXhuTeJInhPXMVIOtLC5Yd5RXFIcXVffosb8Pf-rkE" },
  { category: "Heritage",      title: "Emerald Canopy Lodge.",   img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiiRaa2LjMjk8BnUaERbt00jMcADnRgCfcq9ljYI3UNQYS7XSU9u7VNMq-WCRmYToK8pWSxkG7_H_DDKZUuyDY0y45IqXQ99GgUichNAKHBKOMTO1d2kRplBPgtit-Ni8x6YPr_PXSLCNHthl_mKIh1qDOMcVn59mYthRg9UTJA5bIzRQxpObRrqKSmHhuH0d15Uy7IOvrRtr_Un6jOUu2Kr8Am6kjxtCjls4nM9LdM_AI_B1AmpZJbfTXsde1PO89WeTwlLWBxTg" },
];

const discoverCards = [
  { title: "Green Architecture",   desc: "Vertical living in the heart of nature.",     img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDebbN3NwuLRmy55g1ePb3CmZ2t0vJsGhwxhtvabEwZACKHBrLyZN6aOBUTZnGY_LqFdGljyzSN5Et72fcHuGpIyvOBMJ6HrX-R5m9Y8Ygb16d17JnNGlIxYNE90ogQJ2LbCLZdHrco0h6G7MfJ0iHVvdgO3cA7-Gp4YRrKcF4T9tXmSXtMqKW4oUAkX40RACiSye6ZQn661gs6OJkpHupyqugtZhR_0VNGriyqLmTsJkt_B7O3rsfKA3gMWJ75aw5iz4epCkSXHc" },
  { title: "Eco-Performance",      desc: "Sustainable movement for explorers.",          img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBh4a8eKc_h8VEtbHLGuMmb5xHBPZoQIfoUIoeVR_AYjNRzpOUEmu3BMxZx9dHGnC0d7I1K8I6oP2chK6-0xd6f7Pgl9AR6rWer-0xA1y5MvZAiTgtyUBGcmLKciGfA2zLK6W8eMzeDwkC41mK5c6cvG6ZS-Jd2vF-Z-XiGbnVjQdC5VdRcz3eIOf7VIkbVATUQh738RWda7IKgpZR23ul62UtsWm1Kg8EAYuEXj4Yu8WJKCTg-0LpWJM4_J7SvclgAI7iz58nXvmM" },
  { title: "Solar Infrastructure", desc: "Powering tomorrow's sanctuary today.",        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYxO9LGVq630sLcF5T6sYvFa9fqbUJRDg7AKjvwRNcQT5rNfK7grs_wyVBOlSXTjAwBnf7UF9CQLtvt9ayunNleeXBnurff8uOp4Xrc4IPt36FzUytMexTUmMvGoaoz_O3pqyyqK_Sznx1CF1uryPc021oM2WcfLL1ra-A68i2qz5Ld_2g8wofNtKhtMprQoXH3Fc9PGB27XujTfOCY0d_byXcHtRAQR2DKJL4gi0pGtr92Jsb6E_Uo8Ahcwf9AFgOA8uEnnfTOyQ" },
];

const W = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 5rem", ...style }}>{children}</div>
);

export default function HomePage() {
  const heroRef        = useRef<HTMLDivElement>(null);
  const statsRef       = useRef<HTMLElement>(null);
  const pillarsSecRef  = useRef<HTMLElement>(null);
  const pillarsGridRef = useRef<HTMLDivElement>(null);
  const journeyRef     = useRef<HTMLElement>(null);
  const discoverRef    = useRef<HTMLElement>(null);
  const parentRef      = useRef<HTMLDivElement>(null);
  const videoRef       = useRef<HTMLVideoElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isPlaying, setIsPlaying]   = useState(true);

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setIsPlaying(true); }
    else          { v.pause(); setIsPlaying(false); }
  }, []);

  useGSAP(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll(".hero-child"),
        { y: 70, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.18, duration: 1.15, ease: "power3.out", delay: 0.3 }
      );
    }
    let currentBg    = "#fff";
    let currentColor = "#000";

    const bgSections = [
      { el: statsRef.current,      bg: "#fff", color: "#000" },
      { el: pillarsSecRef.current, bg: "#000", color: "#fff" },
      { el: journeyRef.current,    bg: "#fff", color: "#000" },
      { el: discoverRef.current,   bg: "#000", color: "#fff" },
    ];

    bgSections.forEach(({ el, bg, color }) => {
      if (!el || !parentRef.current) return;
      ScrollTrigger.create({
        trigger: el,
        start: "top 55%",
        end: "bottom 45%",
        onEnter: () => {
          if (currentBg === bg) return;
          gsap.to(parentRef.current!, { backgroundColor: bg, color, duration: 0.75, ease: "power2.inOut", overwrite: true });
          currentBg = bg; currentColor = color;
          setIsDarkMode(bg === "#000");
        },
        onEnterBack: () => {
          if (currentBg === bg) return;
          gsap.to(parentRef.current!, { backgroundColor: bg, color, duration: 0.75, ease: "power2.inOut", overwrite: true });
          currentBg = bg; currentColor = color;
          setIsDarkMode(bg === "#000");
        },
      });
    });
    if (statsRef.current) {
      ScrollTrigger.create({
        trigger: statsRef.current, start: "top 75%", once: true,
        onEnter: () => gsap.fromTo(
          statsRef.current!.querySelectorAll(".stat-item"),
          { y: 44, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.75, ease: "power3.out" }
        ),
      });
    }
    if (pillarsGridRef.current) {
      ScrollTrigger.create({
        trigger: pillarsGridRef.current, start: "top 78%", once: true,
        onEnter: () => gsap.fromTo(
          pillarsGridRef.current!.querySelectorAll(".pillar-card"),
          { y: 56, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.13, duration: 0.9, ease: "power3.out" }
        ),
      });
    }
    if (journeyRef.current) {
      ScrollTrigger.create({
        trigger: journeyRef.current, start: "top 78%", once: true,
        onEnter: () => gsap.fromTo(
          journeyRef.current!.querySelectorAll(".card-anim"),
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.14, duration: 0.9, ease: "power3.out" }
        ),
      });
    }
    if (discoverRef.current) {
      ScrollTrigger.create({
        trigger: discoverRef.current, start: "top 78%", once: true,
        onEnter: () => gsap.fromTo(
          discoverRef.current!.querySelectorAll(".card-anim"),
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.14, duration: 0.9, ease: "power3.out" }
        ),
      });
    }

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  const pillarCard: React.CSSProperties = {
    background: isDarkMode ? "rgba(255,255,255,.055)" : "rgba(0,0,0,.04)",
    border: isDarkMode ? "1px solid rgba(255,255,255,.08)" : "1px solid rgba(0,0,0,.06)",
    borderRadius: ".25rem",
    padding: "3rem 2.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    cursor: "default",
    opacity: 0,
    transition: "background .6s, border-color .6s",
  };

  return (
    <div
      ref={parentRef}
      style={{ background: "#fff", color: "#000", transition: "background-color .8s cubic-bezier(.4,0,.2,1), color .8s cubic-bezier(.4,0,.2,1)" }}
    >
      <section
        style={{
          position: "relative",
          height: "100vh",
          minHeight: 700,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          overflow: "hidden",
        }}
      >
        {/* Video background */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <video
            ref={videoRef}
            src="/videos/LandingIntro.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 30%",
              filter: "contrast(1.08) saturate(1.12)",
            }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,.42) 0%, transparent 22%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(0,0,0,.72) 0%, rgba(0,0,0,.38) 38%, transparent 62%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #000 0%, rgba(0,0,0,.78) 18%, rgba(0,0,0,.32) 40%, transparent 62%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 50% at 65% 55%, rgba(197,160,89,.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        </div>

        <div style={{ position: "absolute", top: 110, left: "5rem", zIndex: 10, display: "flex", alignItems: "center", gap: ".75rem" }}>
          <span style={{ width: 32, height: 1, background: "#C5A059", display: "inline-block" }} />
          <span style={{ fontFamily: "var(--font-label)", fontSize: ".55rem", fontWeight: 700, letterSpacing: ".28em", textTransform: "uppercase", color: "rgba(255,255,255,.55)" }}>
            The Regenerative Architect
          </span>
        </div>

        <div style={{ position: "relative", zIndex: 10, padding: "0 5rem 4.5rem" }}>
          <W style={{ padding: 0 }}>
            <div ref={heroRef} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div style={{ maxWidth: 720 }}>
                <h1
                  className="hero-child"
                  style={{
                    fontFamily: "var(--font-epilogue), sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(3.2rem, 7vw, 7.5rem)",
                    lineHeight: 1.0,
                    textTransform: "uppercase",
                    letterSpacing: "-.04em",
                    color: "#fff",
                    marginBottom: "2.25rem",
                    textShadow: "0 2px 32px rgba(0,0,0,.5)",
                  }}
                >
                  Architecting<br />
                  <span style={{ color: "#C5A059" }}>Sustainable<br />Coexistence</span>
                </h1>
                <div className="hero-child" style={{ display: "flex", alignItems: "center", gap: "2.75rem", flexWrap: "wrap" }}>
                  <button
                    style={{
                      padding: ".95rem 2.4rem",
                      border: "1px solid rgba(255,255,255,.45)",
                      background: "rgba(0,0,0,.25)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      color: "#fff",
                      fontFamily: "var(--font-label)",
                      fontSize: ".62rem",
                      fontWeight: 700,
                      letterSpacing: ".2em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      transition: "background .3s, border-color .3s, color .3s",
                    }}
                    onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = "#fff"; b.style.borderColor = "#fff"; b.style.color = "#000"; }}
                    onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = "rgba(0,0,0,.25)"; b.style.borderColor = "rgba(255,255,255,.45)"; b.style.color = "#fff"; }}
                  >
                    Discover More
                  </button>

                  <div style={{ display: "flex", gap: "2rem" }}>
                    {[["12","Days"],["08","Hrs"],["45","Min"]].map(([n, l]) => (
                      <div key={l} style={{ display: "flex", alignItems: "baseline", gap: ".4rem" }}>
                        <span style={{ fontFamily: "var(--font-epilogue),sans-serif", fontSize: "1.75rem", fontWeight: 400, color: "#fff", lineHeight: 1 }}>{n}</span>
                        <span style={{ fontFamily: "var(--font-label)", fontSize: ".52rem", letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(255,255,255,.5)" }}>{l}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/*  Pause / Play */}
              <div className="hero-child">
                <button
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  style={{
                    width: 50, height: 50,
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,.32)",
                    background: "rgba(0,0,0,.3)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    color: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: "pointer",
                    transition: "background .3s, transform .3s",
                  }}
                  onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = "rgba(255,255,255,.15)"; b.style.transform = "scale(1.06)"; }}
                  onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = "rgba(0,0,0,.3)"; b.style.transform = "scale(1)"; }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                    {isPlaying ? "pause" : "play_arrow"}
                  </span>
                </button>
              </div>
            </div>
          </W>
        </div>
        <div style={{ position: "absolute", bottom: "1.75rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: ".45rem", zIndex: 10, opacity: 0.4 }}>
          <span style={{ fontFamily: "var(--font-label)", fontSize: ".48rem", letterSpacing: ".28em", textTransform: "uppercase", color: "#fff" }}>Scroll</span>
          <div style={{ width: 1, height: 36, background: "linear-gradient(to bottom, #fff, transparent)" }} />
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} style={{ background: "transparent" }}>
        <W>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "2rem", padding: "5rem 0" }}>
            {stats.map(s => (
              <div key={s.label} className="stat-item" style={{ display: "flex", flexDirection: "column", gap: ".6rem", opacity: 0 }}>
                <span style={{ fontFamily: "var(--font-epilogue),sans-serif", fontSize: "clamp(2.8rem,4.5vw,4.5rem)", fontWeight: 300, color: "#C5A059", lineHeight: 1 }}>{s.value}</span>
                <span style={{ fontFamily: "var(--font-label)", fontSize: ".6rem", fontWeight: 700, letterSpacing: ".22em", textTransform: "uppercase", color: "#999" }}>{s.label}</span>
              </div>
            ))}
          </div>
        </W>
      </section>

      {/* Pillars */}
      <section ref={pillarsSecRef} style={{ background: "transparent", padding: "7rem 0 8rem" }}>
        <W>
          <div style={{ marginBottom: "4rem" }}>
            <h2 style={{ fontFamily: "var(--font-epilogue),sans-serif", fontWeight: 900, fontSize: "clamp(2.2rem,4vw,4.5rem)", textTransform: "uppercase", letterSpacing: "-.03em", lineHeight: 1.1 }}>
              The Four Pillars of<br /><span style={{ color: "#C5A059" }}>Regenerative Growth</span>
            </h2>
            <div style={{ marginTop: "1.5rem", width: "6rem", height: 3, background: "rgba(197,160,89,.3)" }} />
          </div>
          <div ref={pillarsGridRef} style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1rem" }}>
            {pillars.map(p => (
              <div key={p.num} className="pillar-card" style={pillarCard}>
                <span style={{ fontFamily: "var(--font-label)", fontSize: ".55rem", fontWeight: 700, letterSpacing: ".3em", textTransform: "uppercase", color: isDarkMode ? "rgba(255,255,255,.32)" : "rgba(0,0,0,.32)" }}>
                  {p.num} / Pillars
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <span className="material-symbols-outlined" style={{ color: "#C5A059", fontSize: 36 }}>{p.icon}</span>
                  <h3 style={{ fontFamily: "var(--font-epilogue),sans-serif", fontWeight: 900, fontSize: "1.3rem", textTransform: "uppercase", letterSpacing: "-.01em" }}>{p.title}</h3>
                </div>
                <p style={{ fontSize: ".82rem", lineHeight: 1.75, color: isDarkMode ? "rgba(255,255,255,.5)" : "rgba(0,0,0,.55)", transition: "color .6s" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </W>
      </section>

      {/* Journey cards */}
      <section ref={journeyRef} style={{ background: "transparent", padding: "7rem 0 8rem" }}>
        <W>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3.5rem" }}>
            <h2 style={{ fontFamily: "var(--font-epilogue),sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem,3vw,3rem)", lineHeight: 1.15, maxWidth: "22rem" }}>
              The <span style={{ color: "#C5A059" }}>Architecture</span> of<br />Regenerative Growth
            </h2>
            <div style={{ display: "flex", gap: "1rem" }}>
              {["west","east"].map(d => (
                <button key={d} style={{ width: 44, height: 44, border: "1px solid rgba(0,0,0,.12)", background: "transparent", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "inherit", transition: "background .25s" }}
                  onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(0,0,0,.06)")}
                  onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = "transparent")}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>{d}</span>
                </button>
              ))}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }}>
            {journeyCards.map(card => (
              <div key={card.title} className="card-anim" style={{ position: "relative", aspectRatio: "4/5", borderRadius: ".25rem", overflow: "hidden", background: "#e5e5e5", cursor: "pointer", opacity: 0 }}
                onMouseEnter={e => { const img = e.currentTarget.querySelector("img") as HTMLImageElement; if (img) img.style.transform = "scale(1.06)"; }}
                onMouseLeave={e => { const img = e.currentTarget.querySelector("img") as HTMLImageElement; if (img) img.style.transform = "scale(1)"; }}
              >
                <img src={card.img} alt={card.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .7s ease" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(0,0,0,.8) 0%,transparent 55%)" }} />
                <div style={{ position: "absolute", bottom: "2.5rem", left: "2.5rem", right: "2.5rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                  <div>
                    <p style={{ fontFamily: "var(--font-label)", fontSize: ".55rem", letterSpacing: ".22em", textTransform: "uppercase", color: "rgba(255,255,255,.55)", marginBottom: ".35rem" }}>{card.category}</p>
                    <h3 style={{ fontFamily: "var(--font-epilogue),sans-serif", fontWeight: 700, fontSize: "1.3rem", color: "#fff", letterSpacing: "-.02em" }}>{card.title}</h3>
                  </div>
                  <span className="material-symbols-outlined" style={{ color: "#fff", fontSize: 26 }}>arrow_forward</span>
                </div>
              </div>
            ))}
          </div>
        </W>
      </section>

      {/* Discover  */}
      <section ref={discoverRef} style={{ background: "transparent", padding: "7rem 0 8rem" }}>
        <W>
          <h2 style={{ fontFamily: "var(--font-epilogue),sans-serif", fontWeight: 900, fontSize: "clamp(3.5rem,8vw,8rem)", textTransform: "uppercase", letterSpacing: "-.04em", textAlign: "center", marginBottom: "4rem" }}>
            Discover
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }}>
            {discoverCards.map(card => (
              <div key={card.title} className="card-anim" style={{ position: "relative", aspectRatio: "4/5", borderRadius: ".25rem", overflow: "hidden", background: "#1a1a1a", cursor: "pointer", opacity: 0 }}
                onMouseEnter={e => { const img = e.currentTarget.querySelector("img") as HTMLImageElement; if (img) img.style.transform = "scale(1.06)"; }}
                onMouseLeave={e => { const img = e.currentTarget.querySelector("img") as HTMLImageElement; if (img) img.style.transform = "scale(1)"; }}
              >
                <img src={card.img} alt={card.title} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: .75, transition: "transform .7s ease" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(0,0,0,.88) 0%,transparent 55%)" }} />
                <div style={{ position: "absolute", bottom: "2.5rem", left: "2.5rem", right: "2.5rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                  <div>
                    <h4 style={{ fontFamily: "var(--font-epilogue),sans-serif", fontWeight: 700, fontSize: "1.3rem", color: "#fff", marginBottom: ".4rem" }}>{card.title}</h4>
                    <p style={{ fontSize: ".72rem", color: "rgba(255,255,255,.38)" }}>{card.desc}</p>
                  </div>
                  <span className="material-symbols-outlined" style={{ color: "#fff", fontSize: 26 }}>arrow_forward</span>
                </div>
              </div>
            ))}
          </div>
        </W>
      </section>

      <Footer />
    </div>
  );
}