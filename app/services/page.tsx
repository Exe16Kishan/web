"use client";

import Footer from "@/components/Footer";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

// DATA 

const services = [
  {
    num: "01",
    vertical: "Vertical 01",
    title: "Farm Management",
    desc: "End-to-end regenerative farm management — from soil health restoration and organic certification to precision crop planning, harvest logistics, and market access. Data-driven, nature-aligned.",
    tags: ["Soil Health Restoration", "Precision Crop Planning"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDebbN3NwuLRmy55g1ePb3CmZ2t0vJsGhwxhtvabEwZACKHBrLyZN6aOBUTZnGY_LqFdGljyzSN5Et72fcHuGpIyvOBMJ6HrX-R5m9Y8Ygb16d17JnNGlIxYNE90ogQJ2LbCLZdHrco0h6G7MfJ0iHVvdgO3cA7-Gp4YRrKcF4T9tXmSXtMqKW4oUAkX40RACiSye6ZQn661gs6OJkpHupyqugtZhR_0VNGriyqLmTsJkt_B7O3rsfKA3gMWJ75aw5iz4epCkSXHc",
  },
  {
    num: "02",
    vertical: "Vertical 02",
    title: "Renewable Energy",
    desc: "Agrivoltaic systems, solar tree installations, and distributed energy infrastructure designed to coexist with agriculture. Dual-use land that generates clean power while nurturing crops.",
    tags: ["Agrivoltaic Systems", "Distributed Infrastructure"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYxO9LGVq630sLcF5T6sYvFa9fqbUJRDg7AKjvwRNcQT5rNfK7grs_wyVBOlSXTjAwBnf7UF9CQLtvt9ayunNleeXBnurff8uOp4Xrc4IPt36FzUytMexTUmMvGoaoz_O3pqyyqK_Sznx1CF1uryPc021oM2WcfLL1ra-A68i2qz5Ld_2g8wofNtKhtMprQoXH3Fc9PGB27XujTfOCY0d_byXcHtRAQR2DKJL4gi0pGtr92Jsb6E_Uo8Ahcwf9AFgOA8uEnnfTOyQ",
  },
  {
    num: "03",
    vertical: "Vertical 03",
    title: "Sustainable Real Estate",
    desc: "Nature-integrated living spaces — eco villas, farm resorts, and wellness retreats designed with biophilic architecture. Spaces where luxury and ecology coexist in harmony.",
    tags: ["Biophilic Architecture", "Eco Villas & Resorts"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCepr3IZ5MY3BmKN3p3y5_daHUtuB5h2sQw86JRoFyIGm-1tRNdonqB7xXEokD6xULYXIugfWM9lpkySjqW1NEAHIIKeaSBYx-49upr3G0e4ggy45QfOPdaCHEfKz0gQUAzN8JXYddcns9sG1kfvdfnlcrY4MMt3xl2Pl_8rjZdqefZoYZFNpKNkqDJl_o_yNSkutu7W9V0U75f9-NVc8J6QZc3FkHJtdTlql0_EqERf1DhkGacnb1ZtOuzJgZz3NUwCJR3MIA7ZbM",
  },
];

const techFeatures = [
  { icon: "analytics",   title: "Data-Driven Agriculture", desc: "Soil sensors, satellite imaging, and AI-powered crop health analysis for precision farming decisions." },
  { icon: "sensors",     title: "Automation & Monitoring", desc: "IoT-enabled real-time monitoring of irrigation, energy output, soil moisture, and micro-climate conditions." },
  { icon: "thunderstorm",title: "Weather-Risk Mitigation", desc: "Predictive weather modeling and adaptive systems that protect crops and optimise energy generation cycles." },
  { icon: "eco",         title: "Carbon-Linked Systems",   desc: "Verified carbon sequestration tracking and marketplace integration for tradeable carbon credits." },
];


function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const W = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <div
    style={{
      width: "100%",
      maxWidth: 1440,
      marginLeft: "auto",
      marginRight: "auto",
      paddingLeft:  "clamp(1.25rem, 5vw, 5rem)",
      paddingRight: "clamp(1.25rem, 5vw, 5rem)",
      ...style,
    }}
  >
    {children}
  </div>
);

const SectionEyebrow = ({ text, center = false }: { text: string; center?: boolean }) => (
  <div style={{ display: "flex", alignItems: "center", justifyContent: center ? "center" : "flex-start", gap: "1rem", marginBottom: "2rem" }}>
    <span style={{ display: "inline-block", width: 48, height: 1, background: "#C5A059" }} />
    <span style={{ fontFamily: "var(--font-label)", fontSize: ".6rem", fontWeight: 700, letterSpacing: ".28em", textTransform: "uppercase", color: "#C5A059" }}>
      {text}
    </span>
    {center && <span style={{ display: "inline-block", width: 48, height: 1, background: "#C5A059" }} />}
  </div>
);


export default function ServicesAndTechnologyPage() {
  const pageRef     = useRef<HTMLDivElement>(null);
  const heroRef     = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const cardsRef    = useRef<HTMLDivElement>(null);
  const techRef     = useRef<HTMLElement>(null);
  const techFeatRef = useRef<HTMLDivElement>(null);
  const satRef      = useRef<HTMLElement>(null);
  const pillarsRef  = useRef<HTMLElement>(null);
  const ctaRef      = useRef<HTMLElement>(null);

  const [, setIsDark] = useState(true);

  useGSAP(() => {
    if (heroRef.current) {
      gsap.fromTo(heroRef.current.querySelectorAll(".h-anim"),
        { y: 72, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.18, duration: 1.1, ease: "power3.out", delay: 0.28 });
    }

    let cur = "#000";
    const bgMap = [
      { el: servicesRef.current, bg: "#0a0a0a", color: "#fff" },
      { el: techRef.current,     bg: "#000",    color: "#fff" },
      { el: satRef.current,      bg: "#0d0d0d", color: "#fff" },
      { el: pillarsRef.current,  bg: "#000",    color: "#fff" },
      { el: ctaRef.current,      bg: "#000",    color: "#fff" },
    ];
    bgMap.forEach(({ el, bg, color }) => {
      if (!el || !pageRef.current) return;
      const apply = () => {
        if (cur === bg) return;
        gsap.to(pageRef.current!, { backgroundColor: bg, color, duration: 0.75, ease: "power2.inOut", overwrite: true });
        cur = bg;
        setIsDark(bg !== "#fff");
      };
      ScrollTrigger.create({ trigger: el, start: "top 55%", end: "bottom 45%", onEnter: apply, onEnterBack: apply });
    });

    if (cardsRef.current) {
      ScrollTrigger.create({ trigger: cardsRef.current, start: "top 78%", once: true,
        onEnter: () => gsap.fromTo(cardsRef.current!.querySelectorAll(".svc-card"),
          { y: 60, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.15, duration: 0.9, ease: "power3.out" }) });
    }
    if (techFeatRef.current) {
      ScrollTrigger.create({ trigger: techFeatRef.current, start: "top 76%", once: true,
        onEnter: () => gsap.fromTo(techFeatRef.current!.querySelectorAll(".feat-card"),
          { y: 44, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.12, duration: 0.85, ease: "power3.out" }) });
    }
    if (satRef.current) {
      ScrollTrigger.create({ trigger: satRef.current, start: "top 74%", once: true,
        onEnter: () => gsap.fromTo(satRef.current!.querySelectorAll(".sat-anim"),
          { x: -44, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.14, duration: 0.85, ease: "power3.out" }) });
    }
    if (pillarsRef.current) {
      ScrollTrigger.create({ trigger: pillarsRef.current, start: "top 78%", once: true,
        onEnter: () => gsap.fromTo(pillarsRef.current!.querySelectorAll(".pil-card"),
          { y: 56, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.13, duration: 0.9, ease: "power3.out" }) });
    }
    if (ctaRef.current) {
      ScrollTrigger.create({ trigger: ctaRef.current, start: "top 80%", once: true,
        onEnter: () => gsap.fromTo(ctaRef.current!.querySelectorAll(".c-anim"),
          { y: 36, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.12, duration: 0.8, ease: "power3.out" }) });
    }

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <>
      <style>{`

        /* Services card */
        .svc-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 640px)  { .svc-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .svc-grid { grid-template-columns: repeat(3, 1fr); } }

        /* Technology  */
        .tech-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: start;
          margin-bottom: 3.5rem;
        }
        @media (min-width: 1024px) { .tech-grid { grid-template-columns: 1fr 1fr; gap: 4rem; } }

        /* Tech feature  */
        .feat-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        @media (min-width: 480px) { .feat-grid { grid-template-columns: 1fr 1fr; } }

        /* Stats bar */
        .stats-bar {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background: rgba(255,255,255,.06);
          border-radius: .25rem;
          overflow: hidden;
        }
        @media (min-width: 768px) { .stats-bar { grid-template-columns: repeat(4, 1fr); } }

        /* Satellite */
        .sat-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }
        @media (min-width: 1024px) { .sat-grid { grid-template-columns: 1fr 1fr; gap: 6rem; } }

        /* Pillars bento*/
        .pil-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        @media (min-width: 768px) { .pil-grid { grid-template-columns: 1fr 1fr; } }

        /* CTA */
        .cta-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: center;
        }
        @media (min-width: 1024px) { .cta-grid { grid-template-columns: 1fr auto; gap: 4rem; } }

        /* CTA buttons */
        .cta-btns {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 1rem;
        }
        @media (min-width: 1024px) { .cta-btns { flex-direction: column; } }

        /* eyebrow & inline nav  */
        .svc-hero-eyebrow {
          position: absolute;
          top: 110px;
          left: clamp(1.25rem, 5vw, 5rem);
          z-index: 10;
          display: none;
          align-items: center;
          gap: .75rem;
        }
        @media (min-width: 768px) { .svc-hero-eyebrow { display: flex; } }

        .svc-hero-nav {
          position: absolute;
          top: 35px;
          right: clamp(1.25rem, 18vw, 20rem);
          z-index: 60;
          display: none;
          gap: 2.5rem;
          align-items: center;
        }
        @media (min-width: 1025px) { .svc-hero-nav { display: flex; } }

        /*  headline + philosophy  */
        .svc-hero-content {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          align-items: flex-start;
        }
        @media (min-width: 1024px) {
          .svc-hero-content {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-end;
          }
        }

        /* Right-rail nav dots */
        .svc-rail-nav {
          display: none;
        }
        @media (min-width: 1024px) {
          .svc-rail-nav {
            display: flex;
            position: fixed;
            right: 1.5rem;
            top: 50%;
            transform: translateY(-50%);
            z-index: 40;
            flex-direction: column;
            gap: .75rem;
            align-items: flex-end;
          }
        }

        /* Pillar card 4 */
        .pil-card-weather {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        @media (min-width: 480px) {
          .pil-card-weather { flex-direction: row; align-items: center; }
        }
      `}</style>

      <div
        ref={pageRef}
        style={{
          width: "100%",
          background: "#000",
          color: "#fff",
          overflowX: "hidden",
          transition: "background-color .8s cubic-bezier(.4,0,.2,1), color .8s cubic-bezier(.4,0,.2,1)",
        }}
      >
        {/* rail nav dots */}
        <nav className="svc-rail-nav">
          {[{ id: "services", label: "Services" }, { id: "technology", label: "Technology" }].map(({ id, label }) => (
            <button key={id} onClick={() => scrollToId(id)}
              style={{ display: "flex", alignItems: "center", gap: ".5rem", background: "transparent", border: 0, cursor: "pointer", padding: "2px" }}>
              <span style={{ display: "block", height: "1.5px", width: 8, background: "rgba(255,255,255,.25)" }} />
            </button>
          ))}
        </nav>

        {/* HERO */}
        <section style={{ position: "relative", width: "100%", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", overflow: "hidden" }}>
          {/* BG video */}
          <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
            <video src="/videos/Services&TechIntro.mp4" autoPlay loop muted playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%", filter: "contrast(1.08) saturate(1.12)" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,.42) 0%, transparent 22%)" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(0,0,0,.72) 0%, rgba(0,0,0,.38) 38%, transparent 62%)" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #000 0%, rgba(0,0,0,.78) 18%, rgba(0,0,0,.32) 40%, transparent 62%)" }} />
          </div>

          {/* Eyebrow */}
          <div className="svc-hero-eyebrow">
            <span style={{ width: 32, height: 1, background: "#C5A059", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-label)", fontSize: ".55rem", fontWeight: 700, letterSpacing: ".28em", textTransform: "uppercase", color: "rgba(255,255,255,.55)", whiteSpace: "nowrap" }}>
              Our Methodology
            </span>
            <span style={{ width: 32, height: 1, background: "#C5A059", display: "inline-block" }} />
          </div>

          {/* Inline nav pills */}
          <div className="svc-hero-nav">
            {[{ id: "services", label: "Services" }, { id: "technology", label: "Technology" }].map(({ id, label }) => (
              <button key={id} onClick={() => scrollToId(id)}
                style={{ background: "none", border: "none", borderBottom: "1px solid transparent", paddingBottom: 4, cursor: "pointer", fontFamily: "var(--font-label)", fontSize: ".68rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(255,255,255,.5)", transition: "color .3s, border-color .3s" }}
                onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.color = "#C5A059"; b.style.borderBottomColor = "#C5A059"; }}
                onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.color = "rgba(255,255,255,.38)"; b.style.borderBottomColor = "transparent"; }}>
                {label}
              </button>
            ))}
          </div>

          {/* Hero content */}
          <div style={{ position: "relative", zIndex: 10, paddingBottom: "clamp(3rem, 6vw, 4.5rem)" }}>
            <W>
              <div ref={heroRef} className="svc-hero-content">
                {/* Headline */}
                <div style={{ maxWidth: 720 }}>
                  <h1 className="h-anim"
                    style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 900, fontSize: "clamp(3rem, 7vw, 7.5rem)", lineHeight: 1.0, textTransform: "uppercase", letterSpacing: "-.04em", color: "#fff", marginBottom: "1.75rem", opacity: 0 }}>
                    Three Verticals,<br />
                    <em style={{ fontStyle: "normal", color: "#C5A059" }}>One Vision.</em>
                  </h1>
                  <p className="h-anim"
                    style={{ color: "rgba(255,255,255,.55)", lineHeight: 1.8, fontSize: "clamp(.9rem, 1.2vw, 1.05rem)", maxWidth: 520, opacity: 0 }}>
                    Each service vertical is designed to integrate seamlessly with the others — creating a unified ecosystem of value where technology amplifies nature.
                  </p>
                </div>

                {/* Philosophy card */}
                <div className="h-anim"
                  style={{ flexShrink: 0, maxWidth: 300, width: "100%", borderRadius: ".25rem", padding: "2.5rem", opacity: 0, background: "rgba(19,19,19,.85)", border: "1px solid rgba(255,255,255,.08)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
                  <span style={{ display: "block", fontFamily: "var(--font-label)", fontSize: ".55rem", fontWeight: 700, letterSpacing: ".22em", textTransform: "uppercase", color: "#C5A059", marginBottom: "1rem" }}>
                    Core Philosophy
                  </span>
                  <p style={{ fontFamily: "var(--font-epilogue), sans-serif", fontStyle: "italic", color: "rgba(255,255,255,.52)", lineHeight: 1.7, fontSize: ".9rem" }}>
                    "True luxury is the ability to flourish without depletion. We engineer the infrastructure of tomorrow with the patience of nature."
                  </p>
                </div>
              </div>
            </W>
          </div>

          {/* Scroll hint */}
          <div style={{ position: "absolute", bottom: "1.75rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: ".45rem", zIndex: 10, opacity: 0.4 }}>
            <span style={{ fontFamily: "var(--font-label)", fontSize: ".48rem", letterSpacing: ".28em", textTransform: "uppercase", color: "#fff" }}>Scroll</span>
            <div style={{ width: 1, height: 36, background: "linear-gradient(to bottom, #fff, transparent)" }} />
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" ref={servicesRef} style={{ background: "transparent", padding: "clamp(4rem,8vw,8rem) 0" }}>
          <W>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <SectionEyebrow text="Core Services" center />
              <h2 style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem, 5vw, 5rem)", textTransform: "uppercase", letterSpacing: "-.04em", lineHeight: 1.05, marginBottom: "1.5rem" }}>
                Three Verticals,{" "}
                <em style={{ fontStyle: "normal", color: "#C5A059" }}>One Vision</em>
              </h2>
              <p style={{ color: "rgba(255,255,255,.42)", maxWidth: 560, margin: "0 auto", lineHeight: 1.8, fontSize: "1rem" }}>
                Each vertical integrates seamlessly — creating a unified ecosystem of value.
              </p>
            </div>

            <div ref={cardsRef} className="svc-grid">
              {services.map(svc => (
                <div key={svc.num} className="svc-card"
                  style={{ display: "flex", flexDirection: "column", borderRadius: ".25rem", overflow: "hidden", cursor: "pointer", opacity: 0, border: "1px solid rgba(255,255,255,.07)", background: "#0a0a0a", transition: "border-color .3s" }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(197,160,89,.3)")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,.07)")}
                >
                  {/* Image */}
                  <div style={{ position: "relative", overflow: "hidden", aspectRatio: "16/10" }}>
                    <img src={svc.img} alt={svc.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .7s ease", display: "block" }}
                      onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,.65) 100%)" }} />
                    <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem", width: 44, height: 44, borderRadius: "50%", border: "1px solid rgba(197,160,89,.5)", background: "rgba(0,0,0,.4)", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(8px)" }}>
                      <span style={{ fontFamily: "var(--font-epilogue)", fontWeight: 900, fontSize: ".7rem", color: "#C5A059" }}>{svc.num}</span>
                    </div>
                  </div>

                  {/* Body */}
                  <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "clamp(1.5rem,3vw,2.5rem)" }}>
                    <span style={{ fontFamily: "var(--font-label)", fontWeight: 700, textTransform: "uppercase", fontSize: ".55rem", letterSpacing: ".28em", color: "#C5A059", marginBottom: ".75rem" }}>{svc.vertical}</span>
                    <h3 style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-.02em", lineHeight: 1.1, fontSize: "clamp(1.3rem, 2vw, 1.75rem)", marginBottom: "1.25rem" }}>{svc.title}</h3>
                    <p style={{ color: "rgba(255,255,255,.42)", fontSize: ".85rem", lineHeight: 1.75, marginBottom: "2rem", flex: 1 }}>{svc.desc}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: ".6rem", marginBottom: "2rem" }}>
                      {svc.tags.map(t => (
                        <div key={t} style={{ display: "flex", alignItems: "center", gap: ".6rem" }}>
                          <span className="material-symbols-outlined" style={{ color: "#C5A059", fontSize: 14 }}>check_circle</span>
                          <span style={{ fontFamily: "var(--font-label)", fontWeight: 700, textTransform: "uppercase", fontSize: ".54rem", letterSpacing: ".15em", color: "rgba(255,255,255,.35)" }}>{t}</span>
                        </div>
                      ))}
                    </div>
                    <button
                      style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", background: "none", border: 0, cursor: "pointer", padding: 0, fontFamily: "var(--font-label)", fontWeight: 700, textTransform: "uppercase", fontSize: ".58rem", letterSpacing: ".2em", color: "#C5A059", transition: "gap .3s" }}
                      onMouseEnter={e => (e.currentTarget.style.gap = "1rem")}
                      onMouseLeave={e => (e.currentTarget.style.gap = ".5rem")}>
                      Learn More
                      <span className="material-symbols-outlined" style={{ fontSize: 15 }}>arrow_forward</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </W>
        </section>

        {/* TECHNOLOGY*/}
        <section id="technology" ref={techRef} style={{ background: "transparent", padding: "clamp(4rem,8vw,8rem) 0" }}>
          <W>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <SectionEyebrow text="Technology" center />
              <h2 style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem, 5.5vw, 6rem)", textTransform: "uppercase", letterSpacing: "-.04em", lineHeight: 1, marginBottom: "1.25rem" }}>
                Intelligence That <em style={{ fontStyle: "normal", color: "#C5A059" }}>Nurtures</em>
              </h2>
              <p style={{ color: "rgba(255,255,255,.42)", maxWidth: 560, margin: "0 auto", lineHeight: 1.8, fontSize: "1rem" }}>
                Our technology stack transforms raw environmental data into actionable insights — enabling precision agriculture at scale.
              </p>
            </div>

            {/* Image + feature  */}
            <div className="tech-grid">
              {/* Left image */}
              <div style={{ borderRadius: ".25rem", overflow: "hidden", border: "1px solid rgba(255,255,255,.08)", aspectRatio: "4/5" }}>
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYxO9LGVq630sLcF5T6sYvFa9fqbUJRDg7AKjvwRNcQT5rNfK7grs_wyVBOlSXTjAwBnf7UF9CQLtvt9ayunNleeXBnurff8uOp4Xrc4IPt36FzUytMexTUmMvGoaoz_O3pqyyqK_Sznx1CF1uryPc021oM2WcfLL1ra-A68i2qz5Ld_2g8wofNtKhtMprQoXH3Fc9PGB27XujTfOCY0d_byXcHtRAQR2DKJL4gi0pGtr92Jsb6E_Uo8Ahcwf9AFgOA8uEnnfTOyQ"
                  alt="Technology"
                  style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1)", transition: "filter .7s" }}
                  onMouseEnter={e => (e.currentTarget.style.filter = "grayscale(0)")}
                  onMouseLeave={e => (e.currentTarget.style.filter = "grayscale(1)")}
                />
              </div>

              {/*  feature cards */}
              <div ref={techFeatRef} className="feat-grid">
                {techFeatures.map(feat => (
                  <div key={feat.title} className="feat-card"
                    style={{ borderRadius: ".25rem", padding: "clamp(1.25rem,2.5vw,1.75rem)", display: "flex", flexDirection: "column", gap: ".85rem", cursor: "default", opacity: 0, background: "rgba(19,19,19,.6)", border: "1px solid rgba(255,255,255,.06)", transition: "border-color .3s" }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(197,160,89,.4)")}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,.06)")}>
                    <span className="material-symbols-outlined" style={{ color: "#C5A059", fontSize: 26 }}>{feat.icon}</span>
                    <h4 style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 900, fontSize: ".9rem", textTransform: "uppercase", letterSpacing: "-.01em" }}>{feat.title}</h4>
                    <p style={{ color: "rgba(255,255,255,.38)", fontSize: ".8rem", lineHeight: 1.7 }}>{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats bar */}
            <div className="stats-bar">
              {[
                { label: "Active Nodes",          value: "14,209"    },
                { label: "Prediction Accuracy",   value: "99.4%"     },
                { label: "Carbon Credits Issued",  value: "8,340"     },
                { label: "Adaptive Response",      value: "Real-time" },
              ].map(stat => (
                <div key={stat.label} style={{ display: "flex", flexDirection: "column", gap: ".5rem", padding: "clamp(1.25rem,2.5vw,2rem) clamp(1.5rem,3vw,2.5rem)", background: "#0a0a0a" }}>
                  <span style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 300, color: "#C5A059", fontSize: "clamp(1.4rem,2.5vw,2.2rem)", lineHeight: 1 }}>{stat.value}</span>
                  <span style={{ fontFamily: "var(--font-label)", fontWeight: 700, textTransform: "uppercase", fontSize: ".54rem", letterSpacing: ".2em", color: "rgba(255,255,255,.35)" }}>{stat.label}</span>
                </div>
              ))}
            </div>
          </W>
        </section>

        {/* SATELLITE INSIGHT*/}
        <section ref={satRef}
          style={{ background: "transparent", padding: "clamp(4rem,8vw,8rem) 0", borderTop: "1px solid rgba(255,255,255,.06)", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
          <W>
            <div className="sat-grid">
              {/* Left text */}
              <div>
                <h2 className="sat-anim"
                  style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-.045em", lineHeight: 0.95, fontSize: "clamp(3rem, 6.5vw, 7rem)", marginBottom: "2rem", opacity: 0 }}>
                  Satellite<br />
                  <span style={{ color: "#C5A059" }}>Insight</span>.
                </h2>
                <p className="sat-anim"
                  style={{ color: "rgba(255,255,255,.38)", lineHeight: 1.8, maxWidth: 420, marginBottom: "3rem", fontSize: "1rem", opacity: 0 }}>
                  Leveraging planetary-scale data to monitor growth patterns and environmental health from low earth orbit, ensuring a balanced ecosystem for global sustainability.
                </p>
                <div className="sat-anim" style={{ display: "flex", flexDirection: "column", opacity: 0 }}>
                  {[["Coverage", "Global"], ["Update Cycle", "Every 12h"], ["Resolution", "0.5m / px"]].map(([label, val]) => (
                    <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: "1rem 0", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
                      <span style={{ fontFamily: "var(--font-label)", fontWeight: 700, textTransform: "uppercase", fontSize: ".55rem", letterSpacing: ".18em", color: "rgba(255,255,255,.35)" }}>{label}</span>
                      <span style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: ".7rem", color: "#C5A059" }}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right image */}
              <div className="sat-anim"
                style={{ borderRadius: ".25rem", overflow: "hidden", aspectRatio: "16/9", border: "1px solid rgba(255,255,255,.1)", boxShadow: "0 32px 80px rgba(0,0,0,.6)", opacity: 0 }}>
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRnjLfcKbU7CNVFtaM12HJnd12741xb2ev2eOXPUzv9VUrgYnaS4iSPhYt_LFf-MggD-Kk1_BYC1D6nFH0CQUtU01e2lY1apMhm5Ef9iNC79QbX1ptYKyBvvnvcTnpB9JN9ApFYzSIocR8q1KYN6GvaySmN5_thtBqP2eujBZthvB06HGwsnuPITR6RQq-t-Iolt5oMg0lXe0qPAn-gpq8cO09IWpc4ZffOmvNAvkn_0uSVh4Gs-nJR1tlQ6CsWC8GmyTxGKack00"
                  alt="Satellite"
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .7s" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>
            </div>
          </W>
        </section>

        {/* TECHNOLOGICAL PILLARS */}
        <section ref={pillarsRef} style={{ background: "transparent", padding: "clamp(4rem,8vw,8rem) 0" }}>
          <W>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <SectionEyebrow text="Core Frameworks" center />
              <h2 style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-.045em", lineHeight: 1, fontSize: "clamp(2.5rem, 5.5vw, 6rem)" }}>
                Technological Pillars
              </h2>
            </div>

            <div className="pil-grid">
              {/* Data Agriculture */}
              <div className="pil-card"
                style={{ position: "relative", borderRadius: ".25rem", overflow: "hidden", minHeight: 320, padding: "clamp(2rem,3vw,3rem)", display: "flex", flexDirection: "column", justifyContent: "space-between", cursor: "default", opacity: 0, background: "rgba(19,19,19,.6)", border: "1px solid rgba(255,255,255,.06)", transition: "border-color .3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(197,160,89,.4)"; const img = e.currentTarget.querySelector(".bg-img") as HTMLElement; if (img) img.style.opacity = ".38"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,.06)"; const img = e.currentTarget.querySelector(".bg-img") as HTMLElement; if (img) img.style.opacity = ".18"; }}>
                <img className="bg-img"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaKrAhtBSJ5hMECytCqTFdUNSo5HqvCi48KFbSiihcJNQro-kHBvR4TEmBRWXYsr1vbUxcVb6oQNL-p_JIU6kkTkKBEUmorh9-6t-KzFYhsvRnOZNlAS6NpL3UodjoyBfk2yudMX3c3nadTAza9XLZgPi5lPjGJisle6svQS6TvMRtD2JfWHF7xphewWe-fvgulXsx0hl8Y9nxeC5iChIpruLofstj4aQwiRmyomMSHULUDdlllSuKrbY1vJBQZ0VthLKWZ7f2SD4"
                  alt=""
                  style={{ position: "absolute", right: 0, bottom: 0, width: "60%", height: "100%", objectFit: "cover", objectPosition: "left", opacity: .18, pointerEvents: "none", transition: "opacity .7s" }} />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <span className="material-symbols-outlined" style={{ color: "#C5A059", fontSize: 38, display: "block", marginBottom: "1.5rem" }}>analytics</span>
                  <h3 style={{ fontFamily: "var(--font-epilogue)", fontWeight: 900, textTransform: "uppercase", fontSize: "clamp(1.2rem, 2vw, 1.8rem)", letterSpacing: "-.02em", marginBottom: "1rem" }}>Data-Driven Agriculture</h3>
                  <p style={{ color: "rgba(255,255,255,.38)", fontSize: ".84rem", lineHeight: 1.75, maxWidth: 280 }}>Soil sensors, satellite imaging, and AI-powered crop health analysis for precision farming decisions.</p>
                </div>
                <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", gap: ".5rem", marginTop: "1.5rem" }}>
                  <span style={{ fontFamily: "var(--font-label)", fontWeight: 700, textTransform: "uppercase", fontSize: ".58rem", letterSpacing: ".2em", color: "#C5A059" }}>Explore Dataset</span>
                  <span className="material-symbols-outlined" style={{ color: "#C5A059", fontSize: 15 }}>arrow_forward</span>
                </div>
              </div>

              {/*  Automation */}
              <div className="pil-card"
                style={{ borderRadius: ".25rem", minHeight: 320, padding: "clamp(2rem,3vw,3rem)", display: "flex", flexDirection: "column", justifyContent: "space-between", cursor: "default", opacity: 0, background: "rgba(19,19,19,.6)", border: "1px solid rgba(255,255,255,.06)", transition: "border-color .3s" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(197,160,89,.4)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,.06)")}>
                <div>
                  <span className="material-symbols-outlined" style={{ color: "#C5A059", fontSize: 30, display: "block", marginBottom: "1.5rem" }}>sensors</span>
                  <h3 style={{ fontFamily: "var(--font-epilogue)", fontWeight: 900, textTransform: "uppercase", fontSize: "1.35rem", letterSpacing: "-.01em", marginBottom: "1rem" }}>Automation &amp; Monitoring</h3>
                  <p style={{ color: "rgba(255,255,255,.38)", fontSize: ".84rem", lineHeight: 1.75 }}>IoT-enabled real-time monitoring of irrigation, energy output, soil moisture, and micro-climate conditions.</p>
                </div>
                <div style={{ borderTop: "1px solid rgba(255,255,255,.06)", paddingTop: "1.5rem", marginTop: "1.5rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: ".75rem" }}>
                    <span style={{ fontFamily: "var(--font-label)", fontWeight: 700, textTransform: "uppercase", fontSize: ".55rem", letterSpacing: ".18em", color: "rgba(255,255,255,.35)" }}>Active Nodes</span>
                    <span style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: ".7rem", color: "#C5A059" }}>14,209</span>
                  </div>
                  <div style={{ height: 3, borderRadius: 99, background: "rgba(255,255,255,.06)", overflow: "hidden" }}>
                    <div style={{ height: "100%", width: "75%", background: "#C5A059", borderRadius: 99 }} />
                  </div>
                </div>
              </div>

              {/*  Carbon */}
              <div className="pil-card"
                style={{ borderRadius: ".25rem", minHeight: 280, padding: "clamp(2rem,3vw,3rem)", display: "flex", flexDirection: "column", cursor: "default", opacity: 0, background: "rgba(19,19,19,.6)", border: "1px solid rgba(255,255,255,.06)", transition: "border-color .3s" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(197,160,89,.4)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,.06)")}>
                <span className="material-symbols-outlined" style={{ color: "#C5A059", fontSize: 28, display: "block", marginBottom: "1.5rem" }}>eco</span>
                <h3 style={{ fontFamily: "var(--font-epilogue)", fontWeight: 900, textTransform: "uppercase", fontSize: "1.25rem", letterSpacing: "-.01em", marginBottom: "1rem" }}>Carbon-Linked Systems</h3>
                <p style={{ color: "rgba(255,255,255,.38)", fontSize: ".84rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>Verified carbon sequestration tracking and marketplace integration for tradeable carbon credits.</p>
                <div style={{ marginTop: "auto", height: 90, borderRadius: ".25rem", overflow: "hidden", border: "1px solid rgba(255,255,255,.06)" }}>
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUmcuwKtim9r5rL_8y7eMnOG_Gw9uZXS9t6V0-Mm05eQ1OHUstqbkk7jPQmDDsT4ChCEYKwSFKPR-3fH8l45CcgRI0UfhrSmhOMkeThNDvhGXlvR4mnu9nlUzoyAS7fZ7moKaKCXHT0DouiQVXGfDJF2nDw7izgg_Yov1r9l-zt-vy8mU_VbMLjX3iR85Zun2BvouSNlOjaRM03IPZLpvTBbb6s71uS5BYEvvI3FQ7kyVeHPrJcggQaHmFLIsfNpPmx0vylTtVrp4"
                    alt="Forest"
                    style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1)", transition: "filter .5s" }}
                    onMouseEnter={e => (e.currentTarget.style.filter = "grayscale(0)")}
                    onMouseLeave={e => (e.currentTarget.style.filter = "grayscale(1)")} />
                </div>
              </div>

              {/*  Weather */}
              <div className="pil-card"
                style={{ borderRadius: ".25rem", minHeight: 280, padding: "clamp(2rem,3vw,3rem)", cursor: "default", opacity: 0, background: "rgba(19,19,19,.5)", border: "1px solid rgba(255,255,255,.06)", backdropFilter: "blur(20px)", transition: "border-color .3s" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(197,160,89,.4)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,.06)")}>
                <div className="pil-card-weather">
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontFamily: "var(--font-epilogue)", fontWeight: 900, textTransform: "uppercase", fontSize: "1.25rem", letterSpacing: "-.01em", marginBottom: "1rem" }}>Weather-Risk Mitigation</h3>
                    <p style={{ color: "rgba(255,255,255,.38)", fontSize: ".84rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>Predictive weather modeling and adaptive systems that protect crops and optimise energy generation cycles.</p>
                    {[["Prediction Accuracy", "99.4%"], ["Adaptive Response", "Real-time"]].map(([label, val]) => (
                      <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: ".85rem 0", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
                        <span style={{ fontFamily: "var(--font-label)", fontWeight: 700, textTransform: "uppercase", fontSize: ".55rem", letterSpacing: ".18em", color: "rgba(255,255,255,.35)" }}>{label}</span>
                        <span style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: ".7rem", color: "#C5A059" }}>{val}</span>
                      </div>
                    ))}
                  </div>
                  {/* Mini data vis */}
                  <div style={{ flexShrink: 0, width: 110, height: 110, borderRadius: ".25rem", background: "#000", border: "1px solid rgba(255,255,255,.1)", display: "flex", flexDirection: "column", justifyContent: "center", gap: ".45rem", padding: "1rem", position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(197,160,89,.08) 0%, transparent 100%)" }} />
                    {[1, 0.6, 0.8, 1, 0.5, 0.7].map((w, i) => (
                      <div key={i} style={{ height: 3, borderRadius: 99, background: "#C5A059", width: `${w * 100}%`, opacity: 0.2 + w * 0.45 }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </W>
        </section>

        {/* CTA*/}
        <section ref={ctaRef} style={{ background: "transparent", padding: "clamp(3rem,6vw,6rem) 0 clamp(4rem,8vw,8rem)" }}>
          <W>
            <div className="cta-grid"
              style={{ borderRadius: ".25rem", padding: "clamp(2.5rem,5vw,6rem)", background: "#0d0d0d", border: "1px solid rgba(197,160,89,.15)" }}>
              <div>
                <SectionEyebrow text="Partner With Us" />
                <h2 className="c-anim"
                  style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-.04em", lineHeight: 1.05, fontSize: "clamp(2.5rem, 5.5vw, 6rem)", marginBottom: "1.5rem", opacity: 0 }}>
                  Ready to Architect<br />
                  <span style={{ color: "#C5A059" }}>The Next Epoch?</span>
                </h2>
                <p className="c-anim"
                  style={{ color: "rgba(255,255,255,.38)", maxWidth: 520, lineHeight: 1.8, fontSize: ".92rem", opacity: 0 }}>
                  Connect with our industrial consultants to see how your portfolio can contribute to the global regenerative movement.
                </p>
              </div>
              <div className="c-anim cta-btns" style={{ opacity: 0 }}>
                <a href="/connect"
                  style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: ".65rem", padding: "1.1rem 2.5rem", background: "#C5A059", color: "#000", fontFamily: "var(--font-label)", fontSize: ".62rem", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", textDecoration: "none", borderRadius: ".15rem", whiteSpace: "nowrap", transition: "filter .25s, transform .25s" }}
                  onMouseEnter={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.filter = "brightness(1.12)"; a.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.filter = "none"; a.style.transform = "translateY(0)"; }}>
                  Start Inquiry
                  <span className="material-symbols-outlined" style={{ fontSize: 15 }}>arrow_forward</span>
                </a>
                <button
                  style={{ padding: "1rem 2.5rem", background: "transparent", border: "1px solid rgba(255,255,255,.18)", color: "rgba(255,255,255,.7)", fontFamily: "var(--font-label)", fontSize: ".62rem", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", cursor: "pointer", borderRadius: ".15rem", whiteSpace: "nowrap", transition: "all .3s" }}
                  onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.borderColor = "rgba(255,255,255,.45)"; b.style.color = "#fff"; }}
                  onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.borderColor = "rgba(255,255,255,.18)"; b.style.color = "rgba(255,255,255,.7)"; }}>
                  Download Report
                </button>
              </div>
            </div>
          </W>
        </section>

        <Footer />
      </div>
    </>
  );
}