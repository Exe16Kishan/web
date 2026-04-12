"use client";

import Footer from "@/components/Footer";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "3x", label: "Revenue Per Acre" },
  { value: "40%", label: "Water Savings" },
  { value: "250+", label: "Acres Managed" },
  { value: "0.0", label: "Net Zero Goal" },
];

const pillars = [
  { num: "01", icon: "light_mode", title: "Generate", desc: "Harness solar energy, cultivate organic produce, and create tangible value from every square meter of land." },
  { num: "02", icon: "shield", title: "Protect", desc: "Safeguard soil health, water resources, and biodiversity through sustainable land management practices." },
  { num: "03", icon: "trending_up", title: "Improve", desc: "Continuously enhance ecosystem performance through data-driven optimization and regenerative innovation." },
  { num: "04", icon: "layers", title: "Compound", desc: "Stack revenue layers and let ecological gains compound into exponential long-term wealth and environmental returns." },
];

const journeyCards = [
  { category: "Architecture", title: "911 Ridge Estate.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCepr3IZ5MY3BmKN3p3y5_daHUtuB5h2sQw86JRoFyIGm-1tRNdonqB7xXEokD6xULYXIugfWM9lpkySjqW1NEAHIIKeaSBYx-49upr3G0e4ggy45QfOPdaCHEfKz0gQUAzN8JXYddcns9sG1kfvdfnlcrY4MMt3xl2Pl_8rjZdqefZoYZFNpKNkqDJl_o_yNSkutu7W9V0U75f9-NVc8J6QZc3FkHJtdTlql0_EqERf1DhkGacnb1ZtOuzJgZz3NUwCJR3MIA7ZbM" },
  { category: "Regeneration", title: "718 Timber Haven.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAL1y_4kmTWDPOP2ga1uxCy3JknZQoHrhewAl2oKAK_qNmPG5oRulCCYoV1ROziYCjH-PGP7UxkrOYQSe6XRXNmgGwvoTE3fl2ZR3yRwmTYc-C8kcaDnc0uUVAQYb76zZ4xyjK5kjijmtETwyKw3LW9WbthnyQqKl1SWBJFkOnyez6FXDFFz_2WrkXp9LOnTKSb1ztjiWC1JrBFiFR2Djtl00bTzV5yuFeX9UXhuTeJInhPXMVIOtLC5Yd5RXFIcXVffosb8Pf-rkE" },
  { category: "Heritage", title: "Emerald Canopy Lodge.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiiRaa2LjMjk8BnUaERbt00jMcADnRgCfcq9ljYI3UNQYS7XSU9u7VNMq-WCRmYToK8pWSxkG7_H_DDKZUuyDY0y45IqXQ99GgUichNAKHBKOMTO1d2kRplBPgtit-Ni8x6YPr_PXSLCNHthl_mKIh1qDOMcVn59mYthRg9UTJA5bIzRQxpObRrqKSmHhuH0d15Uy7IOvrRtr_Un6jOUu2Kr8Am6kjxtCjls4nM9LdM_AI_B1AmpZJbfTXsde1PO89WeTwlLWBxTg" },
];

const discoverCards = [
  { title: "Green Architecture", desc: "Vertical living in the heart of nature.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDebbN3NwuLRmy55g1ePb3CmZ2t0vJsGhwxhtvabEwZACKHBrLyZN6aOBUTZnGY_LqFdGljyzSN5Et72fcHuGpIyvOBMJ6HrX-R5m9Y8Ygb16d17JnNGlIxYNE90ogQJ2LbCLZdHrco0h6G7MfJ0iHVvdgO3cA7-Gp4YRrKcF4T9tXmSXtMqKW4oUAkX40RACiSye6ZQn661gs6OJkpHupyqugtZhR_0VNGriyqLmTsJkt_B7O3rsfKA3gMWJ75aw5iz4epCkSXHc" },
  { title: "Eco-Performance", desc: "Sustainable movement for explorers.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBh4a8eKc_h8VEtbHLGuMmb5xHBPZoQIfoUIoeVR_AYjNRzpOUEmu3BMxZx9dHGnC0d7I1K8I6oP2chK6-0xd6f7Pgl9AR6rWer-0xA1y5MvZAiTgtyUBGcmLKciGfA2zLK6W8eMzeDwkC41mK5c6cvG6ZS-Jd2vF-Z-XiGbnVjQdC5VdRcz3eIOf7VIkbVATUQh738RWda7IKgpZR23ul62UtsWm1Kg8EAYuEXj4Yu8WJKCTg-0LpWJM4_J7SvclgAI7iz58nXvmM" },
  { title: "Solar Infrastructure", desc: "Powering tomorrow's sanctuary today.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYxO9LGVq630sLcF5T6sYvFa9fqbUJRDg7AKjvwRNcQT5rNfK7grs_wyVBOlSXTjAwBnf7UF9CQLtvt9ayunNleeXBnurff8uOp4Xrc4IPt36FzUytMexTUmMvGoaoz_O3pqyyqK_Sznx1CF1uryPc021oM2WcfLL1ra-A68i2qz5Ld_2g8wofNtKhtMprQoXH3Fc9PGB27XujTfOCY0d_byXcHtRAQR2DKJL4gi0pGtr92Jsb6E_Uo8Ahcwf9AFgOA8uEnnfTOyQ" },
];

/* shared section */
const W = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 5rem", ...style }}>
    {children}
  </div>
);

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const pillarsSecRef = useRef<HTMLElement>(null);
  const pillarsGridRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLElement>(null);
  const discoverRef = useRef<HTMLElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useGSAP(() => {
    /* hero entrance */
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll(".hero-child"),
        { y: 70, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.18, duration: 1.1, ease: "power3.out", delay: 0.25 }
      );
    }

    /* Smooth background transitions */
    if (parentRef.current) {
      gsap.set(parentRef.current, {
        backgroundColor: "#fff",
        color: "#000"
      });
    }

    // Update dark mode state for card styling
    const updateDarkMode = (bgColor: string) => {
      setIsDarkMode(bgColor === "#000");
    };

    /* Individual ScrollTriggers */
    const sections = [
      { trigger: statsRef.current, bg: "#fff", textColor: "#000", start: "top 60%", end: "bottom 40%" },
      { trigger: pillarsSecRef.current, bg: "#000", textColor: "#fff", start: "top 60%", end: "bottom 40%" },
      { trigger: journeyRef.current, bg: "#fff", textColor: "#000", start: "top 60%", end: "bottom 40%" },
      { trigger: discoverRef.current, bg: "#000", textColor: "#fff", start: "top 60%", end: "bottom 40%" },
    ];

    // storing current state 
    let currentBg = "#fff";
    let currentColor = "#000";

    sections.forEach(({ trigger, bg, textColor, start, end }) => {
      if (!trigger || !parentRef.current) return;
      
      ScrollTrigger.create({
        trigger: trigger,
        start: start,
        end: end,
        scrub: 1.5,
        onUpdate: (self) => {
          if (parentRef.current && self.progress > 0.1) {
            const progress = Math.min(Math.max(self.progress, 0), 1);
            if (currentBg !== bg || currentColor !== textColor) {
              gsap.to(parentRef.current, {
                backgroundColor: bg,
                color: textColor,
                duration: 0.5,
                ease: "power2.inOut",
                overwrite: true,
                onUpdate: () => {
                  updateDarkMode(bg);
                }
              });
              currentBg = bg;
              currentColor = textColor;
            }
          }
        },
        onEnter: () => {
          if (parentRef.current && (currentBg !== bg || currentColor !== textColor)) {
            gsap.to(parentRef.current, {
              backgroundColor: bg,
              color: textColor,
              duration: 0.8,
              ease: "power2.inOut",
              overwrite: true,
              onUpdate: () => {
                updateDarkMode(bg);
              }
            });
            currentBg = bg;
            currentColor = textColor;
          }
        },
        onEnterBack: () => {
          if (parentRef.current && (currentBg !== bg || currentColor !== textColor)) {
            gsap.to(parentRef.current, {
              backgroundColor: bg,
              color: textColor,
              duration: 0.8,
              ease: "power2.inOut",
              overwrite: true,
              onUpdate: () => {
                updateDarkMode(bg);
              }
            });
            currentBg = bg;
            currentColor = textColor;
          }
        }
      });
    });

    /*Stats count-up animation */
    if (statsRef.current) {
      ScrollTrigger.create({
        trigger: statsRef.current,
        start: "top 75%",
        once: true,
        onEnter: () => {
          gsap.fromTo(
            statsRef.current!.querySelectorAll(".stat-item"),
            { y: 44, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.1, duration: 0.75, ease: "power3.out" }
          );
        },
      });
    }

    /* pillars stagger with better card styling */
    if (pillarsGridRef.current) {
      ScrollTrigger.create({
        trigger: pillarsGridRef.current,
        start: "top 78%",
        once: true,
        onEnter: () => {
          gsap.fromTo(
            pillarsGridRef.current!.querySelectorAll(".pillar-card"),
            { y: 56, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.13, duration: 0.9, ease: "power3.out" }
          );
        },
      });
    }

    /* Journey cards */
    if (journeyRef.current) {
      ScrollTrigger.create({
        trigger: journeyRef.current,
        start: "top 78%",
        once: true,
        onEnter: () => {
          gsap.fromTo(
            journeyRef.current!.querySelectorAll(".card-anim"),
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.14, duration: 0.9, ease: "power3.out" }
          );
        },
      });
    }

    /* discover cards */
    if (discoverRef.current) {
      ScrollTrigger.create({
        trigger: discoverRef.current,
        start: "top 78%",
        once: true,
        onEnter: () => {
          gsap.fromTo(
            discoverRef.current!.querySelectorAll(".card-anim"),
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.14, duration: 0.9, ease: "power3.out" }
          );
        },
      });
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div 
      ref={parentRef}
      style={{ 
        background: "#fff", 
        color: "#000",
        transition: "background-color 0.8s cubic-bezier(0.4, 0, 0.2, 1), color 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
      }}
    >

      {/* hero section with blurred background */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          overflow: "hidden",
        }}
      >
        {/* Background image with blur effect */}
        <div style={{ position: "absolute", inset: 0 }}>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuApkHP08yex_lTnONCFOtPTjwwaFSKh60EOMWoSPk29izgQCg28fnxdkIYj6mkjtzcwhJAAgeXJvhJASPSLH8W3Ahxx_dtvhLprwiCQL1UUqrh17vQIPg8k_1aeQvMjd5LlrG82tWAeV5hAce41WfXYhZlCZu1W00W7OJWamgrdR2qLcqEYIJtmpk0bc7NcHbmJcxoxDjQ_NT39Rzk-g9r0rLllL_U-QeT7AwsaUeaCmszi9ThVTj4QGp5NFs69OG0ReYKPwYGFyJM"
            alt="Luxury villa in forest"
            style={{ 
              width: "100%", 
              height: "100%", 
              objectFit: "cover", 
              filter: "blur(8px) brightness(0.7)",
              transform: "scale(1.1)",
              transition: "filter 0.5s ease"
            }}
          />
          {/* Dark overlay for better text readability */}
          <div style={{ 
            position: "absolute", 
            inset: 0, 
            background: "linear-gradient(to top, #000 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.3) 100%)" 
          }} />
        </div>

        {/* content */}
        <div style={{ position: "relative", zIndex: 10, padding: "0 5rem 5rem" }}>
          <W style={{ padding: 0 }}>
            <div ref={heroRef} style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {/* headline */}
              <h1
                className="hero-child"
                style={{
                  fontFamily: "var(--font-epilogue), sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(3.2rem, 7vw, 7rem)",
                  lineHeight: 1.05,
                  textTransform: "uppercase",
                  letterSpacing: "-.03em",
                  color: "#fff",
                  marginBottom: "2rem",
                  textShadow: "0 2px 20px rgba(0,0,0,0.3)"
                }}
              >
                Architecting<br />
                <span style={{ color: "#C5A059" }}>Sustainable<br />Coexistence</span>
              </h1>

              {/* CTA row */}
              <div className="hero-child" style={{ display: "flex", alignItems: "center", gap: "3rem" }}>
                <button
                  style={{
                    padding: ".9rem 2.2rem",
                    border: "1px solid rgba(255,255,255,.4)",
                    background: "transparent",
                    color: "#fff",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: ".65rem",
                    fontWeight: 700,
                    letterSpacing: ".2em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "all .3s ease",
                    backdropFilter: "blur(10px)",
                  }}
                  onMouseEnter={(e) => { const b = e.currentTarget; b.style.background = "#fff"; b.style.color = "#000"; b.style.backdropFilter = "blur(0px)"; }}
                  onMouseLeave={(e) => { const b = e.currentTarget; b.style.background = "transparent"; b.style.color = "#fff"; b.style.backdropFilter = "blur(10px)"; }}
                >
                  Discover more
                </button>

                {/* countdown */}
                <div style={{ display: "flex", gap: "1.75rem" }}>
                  {[["12", "Days"], ["08", "Hrs"], ["45", "Min"]].map(([n, l]) => (
                    <div key={l} style={{ display: "flex", alignItems: "baseline", gap: ".35rem" }}>
                      <span style={{ fontFamily: "var(--font-epilogue), sans-serif", fontSize: "1.6rem", fontWeight: 400, color: "#fff", textShadow: "0 1px 10px rgba(0,0,0,0.3)" }}>{n}</span>
                      <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: ".55rem", letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(255,255,255,.7)" }}>{l}</span>
                    </div>
                  ))}
                </div>

                {/* Pause btn */}
                <div style={{ marginLeft: "auto" }}>
                  <button
                    style={{
                      width: 44, height: 44,
                      border: "1px solid rgba(255,255,255,.3)",
                      background: "rgba(0,0,0,0.3)",
                      backdropFilter: "blur(10px)",
                      color: "#fff",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      cursor: "pointer",
                      transition: "all .3s ease",
                    }}
                    onMouseEnter={(e) => { 
                      const btn = e.currentTarget as HTMLButtonElement;
                      btn.style.background = "rgba(255,255,255,0.2)";
                      btn.style.backdropFilter = "blur(15px)";
                    }}
                    onMouseLeave={(e) => { 
                      const btn = e.currentTarget as HTMLButtonElement;
                      btn.style.background = "rgba(0,0,0,0.3)";
                      btn.style.backdropFilter = "blur(10px)";
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>pause</span>
                  </button>
                </div>
              </div>
            </div>
          </W>
        </div>
      </section>

      {/* STATS*/}
      <section
        ref={statsRef}
        style={{ background: "transparent" }}
      >
        <W>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "2rem",
              padding: "5rem 0",
            }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="stat-item"
                style={{ display: "flex", flexDirection: "column", gap: ".6rem", opacity: 0 }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-epilogue), sans-serif",
                    fontSize: "clamp(2.8rem, 4.5vw, 4.5rem)",
                    fontWeight: 300,
                    color: "#C5A059",
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: ".6rem",
                    fontWeight: 700,
                    letterSpacing: ".22em",
                    textTransform: "uppercase",
                    color: "#999",
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </W>
      </section>

      {/* pillar section with adaptive cards */}
      <section
        ref={pillarsSecRef}
        style={{ background: "transparent", padding: "7rem 0 8rem" }}
      >
        <W>
          {/* Headline */}
          <div style={{ marginBottom: "4rem" }}>
            <h2
              style={{
                fontFamily: "var(--font-epilogue), sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.2rem, 4vw, 4.5rem)",
                textTransform: "uppercase",
                letterSpacing: "-.03em",
                lineHeight: 1.1,
              }}
            >
              The Four Pillars of{" "}
              <br />
              <span style={{ color: "#C5A059" }}>Regenerative Growth</span>
            </h2>
            <div style={{ marginTop: "1.5rem", width: "6rem", height: "3px", background: "rgba(197,160,89,.3)" }} />
          </div>

          {/* Grid with adaptive cards */}
          <div
            ref={pillarsGridRef}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1rem",
            }}
          >
            {pillars.map((p) => (
              <div
                key={p.num}
                className="pillar-card"
                style={{
                  background: isDarkMode 
                    ? "rgba(255, 255, 255, 0.08)" 
                    : "rgba(0, 0, 0, 0.04)",
                  backdropFilter: "blur(10px)",
                  borderRadius: ".25rem",
                  padding: "3rem 2.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                  cursor: "default",
                  opacity: 0,
                  transition: "background 0.6s cubic-bezier(0.4, 0, 0.2, 1), backdrop-filter 0.6s ease",
                  border: isDarkMode 
                    ? "1px solid rgba(255, 255, 255, 0.1)" 
                    : "1px solid rgba(0, 0, 0, 0.06)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: ".55rem",
                    fontWeight: 700,
                    letterSpacing: ".3em",
                    textTransform: "uppercase",
                    color: isDarkMode 
                      ? "rgba(255, 255, 255, 0.4)" 
                      : "rgba(0, 0, 0, 0.4)",
                    transition: "color 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  {p.num} / Pillars
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <span className="material-symbols-outlined" style={{ color: "#C5A059", fontSize: 36 }}>
                    {p.icon}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-epilogue), sans-serif",
                      fontWeight: 900,
                      fontSize: "1.3rem",
                      textTransform: "uppercase",
                      letterSpacing: "-.01em",
                    }}
                  >
                    {p.title}
                  </h3>
                </div>
                <p style={{ 
                  color: isDarkMode 
                    ? "rgba(255, 255, 255, 0.6)" 
                    : "rgba(0, 0, 0, 0.6)",
                  fontSize: ".82rem", 
                  lineHeight: 1.7,
                  transition: "color 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </W>
      </section>

      {/* journey */}
      <section
        ref={journeyRef}
        style={{ background: "transparent", padding: "7rem 0 8rem" }}
      >
        <W>
          {/* Header row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontFamily: "var(--font-epilogue), sans-serif",
                fontWeight: 900,
                fontSize: "clamp(1.8rem, 3vw, 3rem)",
                lineHeight: 1.15,
                maxWidth: "22rem",
              }}
            >
              The{" "}
              <span style={{ color: "#C5A059" }}>Architecture</span>
              {" "}of<br />Regenerative Growth
            </h2>

            {/* Nav arrows */}
            <div style={{ display: "flex", gap: "1rem" }}>
              {["west", "east"].map((d) => (
                <button
                  key={d}
                  style={{
                    width: 44, height: 44,
                    border: "1px solid rgba(0,0,0,.1)",
                    background: "transparent",
                    borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: "pointer",
                    transition: "all .3s ease",
                  }}
                  onMouseEnter={(e) => { 
                    const btn = e.currentTarget as HTMLButtonElement;
                    btn.style.background = "rgba(0,0,0,0.05)";
                    btn.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => { 
                    const btn = e.currentTarget as HTMLButtonElement;
                    btn.style.background = "transparent";
                    btn.style.transform = "scale(1)";
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>{d}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }}>
            {journeyCards.map((card) => (
              <div
                key={card.title}
                className="card-anim"
                style={{
                  position: "relative",
                  aspectRatio: "4/5",
                  borderRadius: ".25rem",
                  overflow: "hidden",
                  background: "#e5e5e5",
                  cursor: "pointer",
                  opacity: 0,
                }}
                onMouseEnter={(e) => {
                  const img = e.currentTarget.querySelector("img") as HTMLImageElement;
                  if (img) img.style.transform = "scale(1.06)";
                }}
                onMouseLeave={(e) => {
                  const img = e.currentTarget.querySelector("img") as HTMLImageElement;
                  if (img) img.style.transform = "scale(1)";
                }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .7s ease" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,.8) 0%, transparent 55%)" }} />
                <div style={{ position: "absolute", bottom: "2.5rem", left: "2.5rem", right: "2.5rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                  <div>
                    <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: ".55rem", letterSpacing: ".22em", textTransform: "uppercase", color: "rgba(255,255,255,.55)", marginBottom: ".35rem" }}>{card.category}</p>
                    <h3 style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 700, fontSize: "1.3rem", color: "#fff", letterSpacing: "-.02em" }}>{card.title}</h3>
                  </div>
                  <span className="material-symbols-outlined" style={{ color: "#fff", fontSize: 26 }}>arrow_forward</span>
                </div>
              </div>
            ))}
          </div>
        </W>
      </section>

      {/* discover*/}
      <section
        ref={discoverRef}
        style={{ background: "transparent", padding: "7rem 0 8rem" }}
      >
        <W>
          <h2
            style={{
              fontFamily: "var(--font-epilogue), sans-serif",
              fontWeight: 900,
              fontSize: "clamp(3.5rem, 8vw, 8rem)",
              textTransform: "uppercase",
              letterSpacing: "-.04em",
              textAlign: "center",
              marginBottom: "4rem",
            }}
          >
            Discover
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }}>
            {discoverCards.map((card) => (
              <div
                key={card.title}
                className="card-anim"
                style={{
                  position: "relative",
                  aspectRatio: "4/5",
                  borderRadius: ".25rem",
                  overflow: "hidden",
                  background: "#1a1a1a",
                  cursor: "pointer",
                  opacity: 0,
                }}
                onMouseEnter={(e) => {
                  const img = e.currentTarget.querySelector("img") as HTMLImageElement;
                  if (img) img.style.transform = "scale(1.06)";
                }}
                onMouseLeave={(e) => {
                  const img = e.currentTarget.querySelector("img") as HTMLImageElement;
                  if (img) img.style.transform = "scale(1)";
                }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.7, transition: "transform .7s ease" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,.88) 0%, transparent 55%)" }} />
                <div style={{ position: "absolute", bottom: "2.5rem", left: "2.5rem", right: "2.5rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                  <div>
                    <h4 style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 700, fontSize: "1.3rem", color: "#fff", marginBottom: ".4rem" }}>{card.title}</h4>
                    <p style={{ fontSize: ".72rem", color: "rgba(255,255,255,.38)", fontFamily: "var(--font-body)" }}>{card.desc}</p>
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