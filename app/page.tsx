"use client";

import Footer from "@/components/Footer";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

// DATA 

const philosophy = "/pictures/services-resort.png";

const stats = [
  { value: "3x", label: "Revenue Per Acre" },
  { value: "40%", label: "Water Savings" },
  { value: "25+", label: "Acres Managed" },
  { value: "0.0", label: "Carbon Negative Footprint Goal" },
];

const pillars = [
  {
    num: "01",
    icon: "explore",
    title: "Plan",
    subtitle: "Strategic Land Intelligence",
    desc: "Design every project with precision — integrating solar, agriculture, water systems, and infrastructure into a unified, future-ready blueprint.",
  },
  {
    num: "02",
    icon: "light_mode",
    title: "Generate",
    subtitle: "Maximize Land Productivity",
    desc: "Harness solar energy, cultivate high-value organic produce, and unlock multi-layered output from every square meter of land.",
  },
  {
    num: "03",
    icon: "eco",
    title: "Rejuvenate",
    subtitle: "Restore & Enhance Ecosystems",
    desc: "Safeguard soil health, water resources, and biodiversity while continuously improving system performance through science, data, and regenerative innovation.",
  },
  {
    num: "04",
    icon: "layers",
    title: "Compound",
    subtitle: "Build Exponential Value",
    desc: "Stack revenue streams and let ecological gains compound into long-term wealth, resilience, and sustainable abundance.",
  },
];

const cycleNodes = [
  {
    icon: "bolt",
    label: "Energy",
    top: "-10%",
    left: "50%",
    tx: "-50%",
    ty: "0%",
  },
  {
    icon: "eco",
    label: "Agriculture",
    top: "50%",
    left: "110%",
    tx: "-100%",
    ty: "-50%",
  },
  {
    icon: "biotech",
    label: "Soil & Bio",
    top: "114%",
    left: "50%",
    tx: "-50%",
    ty: "-100%",
  },
  {
    icon: "landscape",
    label: "Land Value",
    top: "50%",
    left: "-10%",
    tx: "0%",
    ty: "-50%",
  },
];

const journeyCards = [
  {
    category: "Architecture",
    title: "Eco Villa Estate.",
    img: "/pictures/eco-villas.png",
  },
  {
    category: "Regeneration",
    title: "718 Indoor Haven.",
    img: "/pictures/indoor-nature.png",
  },
  {
    category: "Heritage",
    title: "Emerald Canopy Lodge.",
    img: "/pictures/services-agriculture.png",
  },
];

const discoverCards = [
  {
    title: "Green Architecture",
    desc: "Vertical living in the heart of nature.",
    img: "/pictures/FarmbyLake.png",
  },
  {
    title: "Eco-Performance",
    desc: "Sustainable movement for explorers.",
    img: "/pictures/solar-trees.png",
  },
  {
    title: "Solar Infrastructure",
    desc: "Powering tomorrow's sanctuary today.",
    img: "/pictures/services-energy.png",
  },
];

const services = [
  {
    num: "01",
    icon: "grass",
    title: "Regenerative Agriculture",
    tagline: "Restoring Land. Growing Resilient Futures.",
    desc: "We design regenerative farming ecosystems that rebuild soil, improve biodiversity, and unlock long-term productivity — turning land into a living, self-sustaining asset.",
    tags: [
      "Regenerative & Organic Farming",
      "Agroforestry & Permaculture",
      "Medicinal Plantations",
      "Precision & Climate-Smart Farming",
      "Soil Health & Biodiversity Restoration",
      "Water Conservation & Efficient Irrigation",
      "Carbon Sequestration Systems",
      "Agrivoltaics as a Service",
    ],
  },
  {
    num: "02",
    icon: "wb_sunny",
    title: "Renewable Energy",
    tagline: "Clean Energy. Integrated with Nature.",
    desc: "We develop intelligent renewable infrastructure that coexists with agriculture and future communities — enabling land to generate energy without losing ecological value.",
    tags: [
      "Agrivoltaics (Solar + Farming)",
      "Solar & Wind Energy Solutions",
      "Smart Energy Storage & Infrastructure",
      "Green Hydrogen & CBG Ecosystems",
      "Multi-Revenue Land Models",
      "Hybrid & Co-Located Energy Models",
      "P2P & Smart Energy Contracts",
      "Long-Term Energy Security",
    ],
  },
  {
    num: "03",
    icon: "villa",
    title: "Sustainable Communities",
    tagline: "Designing Life Around Nature.",
    desc: "We create wellness-driven, climate-resilient ecosystems where people, infrastructure, and biodiversity coexist — shaping communities designed for future generations.",
    tags: [
      "Biophilic Architecture",
      "Eco-Conscious Community Development",
      "Smart Climate-Resilient Planning",
      "Wellness-Centric Living Spaces",
      "Eco Villas & Resorts",
      "Direct Farm-to-Home Systems",
      "Water & Waste Management",
      "Climate-Resilient & Future-Ready Designs",
    ],
  },
];

// SECTION COLOR TOKENS 
const DARK = {
  bg: "transparent",
  heading: "#ffffff",
  body: "rgba(255,255,255,0.60)",
  muted: "rgba(255,255,255,0.40)",
  border: "rgba(255,255,255,0.10)",
  card: "rgba(255,255,255,0.04)",
  cardBorder: "rgba(255,255,255,0.08)",
};

const LIGHT = {
  bg: "transparent",
  heading: "#1a1a1a",
  body: "#555555",
  muted: "#888888",
  border: "rgba(0,0,0,0.08)",
  card: "#f7f5f2",       
  cardBorder: "rgba(0,0,0,0.06)",
};


function scrollTo(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const W = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => (
  <div
    style={{
      width: "100%",
      maxWidth: 1440,
      marginLeft: "auto",
      marginRight: "auto",
      paddingLeft: "clamp(1.25rem, 5vw, 5rem)",
      paddingRight: "clamp(1.25rem, 5vw, 5rem)",
      ...style,
    }}
  >
    {children}
  </div>
);

const SectionEyebrow = ({
  text,
  center = false,
}: {
  text: string;
  center?: boolean;
}) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: center ? "center" : "flex-start",
      gap: "1rem",
      marginBottom: "2rem",
    }}
  >
    <span
      style={{
        display: "inline-block",
        width: 48,
        height: 1,
        background: "#C5A059",
      }}
    />
    <span
      style={{
        fontFamily: "var(--font-label)",
        fontSize: ".6rem",
        fontWeight: 700,
        letterSpacing: ".28em",
        textTransform: "uppercase",
        color: "#C5A059",
      }}
    >
      {text}
    </span>
    {center && (
      <span
        style={{
          display: "inline-block",
          width: 48,
          height: 1,
          background: "#C5A059",
        }}
      />
    )}
  </div>
);


export default function HomePage() {
  const parentRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const philosophyRef = useRef<HTMLElement>(null);
  const innovationRef = useRef<HTMLElement>(null);
  const pillarsRef = useRef<HTMLElement>(null);
  const pillarsGridRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const journeyRef = useRef<HTMLElement>(null);
  const discoverRef = useRef<HTMLElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [bgMode, setBgMode] = useState<"dark" | "light">("dark");

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.paused
      ? (v.play(), setIsPlaying(true))
      : (v.pause(), setIsPlaying(false));
  }, []);

  useGSAP(() => {
    // Hero entrance
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll(".hero-child"),
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.18,
          duration: 1.15,
          ease: "power3.out",
          delay: 0.3,
        },
      );
    }

    //  Background switching 
    const bgSections: {
      el: HTMLElement | null;
      bg: string;
      mode: "dark" | "light";
    }[] = [
      { el: statsRef.current, bg: "#f2f0ed", mode: "light" },
      { el: aboutRef.current, bg: "#f2f0ed", mode: "light" },
      { el: philosophyRef.current, bg: "#000000", mode: "dark" },
      { el: innovationRef.current, bg: "#0a0a0a", mode: "dark" },
      { el: pillarsRef.current, bg: "#000000", mode: "dark" },
      { el: servicesRef.current, bg: "#f2f0ed", mode: "light" },
      { el: journeyRef.current, bg: "#f2f0ed", mode: "light" },
      { el: discoverRef.current, bg: "#000000", mode: "dark" },
    ];

    let activeBg = "#000000";
    const applyBg = (bg: string, mode: "dark" | "light") => {
      if (activeBg === bg) return;
      activeBg = bg;
      if (!parentRef.current) return;
      gsap.to(parentRef.current, {
        backgroundColor: bg,
        duration: 0.55,
        ease: "power2.inOut",
        overwrite: true,
      });
      setBgMode(mode); 
    };

    bgSections.forEach(({ el, bg, mode }) => {
      if (!el) return;
      ScrollTrigger.create({
        trigger: el,
        start: "top 52%",
        end: "bottom 48%",
        onEnter: () => applyBg(bg, mode),
        onEnterBack: () => applyBg(bg, mode),
      });
    });

    // Section entrance animations
    const animIn = (el: HTMLElement | null, sel: string, stagger = 0.13) => {
      if (!el) return;
      ScrollTrigger.create({
        trigger: el,
        start: "top 75%",
        once: true,
        onEnter: () =>
          gsap.fromTo(
            el.querySelectorAll(sel),
            { y: 48, opacity: 0 },
            { y: 0, opacity: 1, stagger, duration: 0.9, ease: "power3.out" },
          ),
      });
    };

    animIn(statsRef.current, ".stat-item", 0.1);
    animIn(aboutRef.current, ".about-anim", 0.12);
    animIn(philosophyRef.current, ".phil-anim", 0.13);
    animIn(innovationRef.current, ".inno-anim", 0.13);
    animIn(servicesRef.current, ".svc-anim", 0.13);

    if (pillarsGridRef.current) {
      ScrollTrigger.create({
        trigger: pillarsGridRef.current,
        start: "top 78%",
        once: true,
        onEnter: () =>
          gsap.fromTo(
            pillarsGridRef.current!.querySelectorAll(".pillar-card"),
            { y: 56, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.13,
              duration: 0.9,
              ease: "power3.out",
            },
          ),
      });
    }
    [journeyRef, discoverRef].forEach((r) => {
      if (r.current)
        ScrollTrigger.create({
          trigger: r.current,
          start: "top 78%",
          once: true,
          onEnter: () =>
            gsap.fromTo(
              r.current!.querySelectorAll(".card-anim"),
              { y: 50, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                stagger: 0.14,
                duration: 0.9,
                ease: "power3.out",
              },
            ),
        });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <>
      <style>{`
        * { transition: color 0.55s cubic-bezier(.4,0,.2,1), background-color 0.55s cubic-bezier(.4,0,.2,1), border-color 0.55s cubic-bezier(.4,0,.2,1); }

        *, *::before, *::after { box-sizing: border-box; }

        .pillars-grid { display: grid; grid-template-columns: 1fr; gap: 1rem; }
        @media (min-width: 640px)  { .pillars-grid { grid-template-columns: repeat(2,1fr); } }
        @media (min-width: 1280px) { .pillars-grid { grid-template-columns: repeat(4,1fr); } }

        .cards-grid-3 { display: grid; grid-template-columns: 1fr; gap: 1.25rem; }
        @media (min-width: 640px)  { .cards-grid-3 { grid-template-columns: repeat(2,1fr); } }
        @media (min-width: 1024px) { .cards-grid-3 { grid-template-columns: repeat(3,1fr); } }

        .svc-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
        @media (min-width: 1024px) { .svc-grid { grid-template-columns: repeat(3,1fr); } }

        .problem-grid { display: grid; grid-template-columns: 1fr; gap: 3.5rem; align-items: center; }
        @media (min-width: 1024px) { .problem-grid { grid-template-columns: 1fr 1fr; gap: 5rem; } }

        .layers-row { display: grid; grid-template-columns: 80px 1fr; gap: 2rem; align-items: start; padding: 3rem 2.5rem; border-top: 1px solid rgba(255,255,255,.08); }
        .layers-row:last-child { border-bottom: 1px solid rgba(255,255,255,.08); }
        @media (max-width: 640px) { .layers-row { grid-template-columns: 56px 1fr; gap: 1.25rem; padding: 2rem 1.25rem; } }

        .stats-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 2rem; padding: 5rem 0; border-bottom: 1px solid rgba(0,0,0,.1); }
        @media (min-width: 768px) { .stats-grid { grid-template-columns: repeat(4,1fr); } }

        .about-grid { display: grid; grid-template-columns: 1fr; gap: 3.5rem; align-items: start; }
        @media (min-width: 1024px) { .about-grid { grid-template-columns: 1fr 1fr; gap: 6rem; } }

        .about-beliefs { display: grid; grid-template-columns: 1fr; gap: .75rem; }
        @media (min-width: 640px) { .about-beliefs { grid-template-columns: 1fr 1fr; } }

        .phil-grid { display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: start; }
        @media (min-width: 1024px) { .phil-grid { grid-template-columns: 1fr 1fr; gap: 5rem; } }

        .inno-grid { display: grid; grid-template-columns: 1fr; gap: 3.5rem; align-items: center; }
        @media (min-width: 1024px) { .inno-grid { grid-template-columns: 1fr 1fr; gap: 6rem; } }

        .cta-grid { display: grid; grid-template-columns: 1fr; gap: 2.5rem; align-items: center; }
        @media (min-width: 1024px) { .cta-grid { grid-template-columns: 1fr auto; gap: 4rem; } }

        .pillars-header { display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 4rem; }
        @media (min-width: 640px) { .pillars-header { flex-direction: row; justify-content: space-between; align-items: flex-end; } }

        .journey-header { display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 3.5rem; }
        @media (min-width: 640px) { .journey-header { flex-direction: row; justify-content: space-between; align-items: flex-end; } }

        .cta-btns { display: flex; flex-direction: row; flex-wrap: wrap; gap: 1rem; }
        @media (min-width: 1024px) { .cta-btns { flex-direction: column; } }

        .hero-inline-nav { position: absolute; top: 35px; right: clamp(1.25rem,18vw,30rem); z-index: 60; display: none; gap: 2.5rem; align-items: center; }
        @media (min-width: 1025px) { .hero-inline-nav { display: flex; } }

        .hero-eyebrow { position: absolute; top: 110px; left: clamp(1.25rem,5vw,5rem); z-index: 10; display: none; align-items: center; gap: .75rem; }
        @media (min-width: 768px) { .hero-eyebrow { display: flex; } }

        .cycle-wheel { position: relative; width: clamp(240px,50vw,380px); height: clamp(240px,50vw,380px); }

        .pause-btn { display: none; }
        @media (min-width: 768px) { .pause-btn { display: block; } }

        .scroll-indicator { display: none; }
        @media (min-width: 768px) { .scroll-indicator { display: flex; } }

        .hero-row { display: flex; flex-direction: column; align-items: center; width: 100%; }
        @media (min-width: 768px) { .hero-row { flex-direction: row; justify-content: space-between; align-items: flex-end; } }

        .hero-text { width: 100%; text-align: center; }
        @media (min-width: 768px) { .hero-text { max-width: 650px; text-align: left; } }

        .hero-h1 { font-family: var(--font-epilogue),sans-serif; font-weight: 800; line-height: 1.05; letter-spacing: -.03em; color: #fff; margin-bottom: 1.25rem; text-shadow: 0 2px 32px rgba(0,0,0,.5); font-size: clamp(1.9rem,5vw,5rem); }
        @media (min-width: 768px) { .hero-h1 { font-size: clamp(2.5rem,4.5vw,5rem); } }

        .hero-p { color: rgba(255,255,255,.62); font-size: clamp(.85rem,1.1vw,1rem); line-height: 1.75; margin-bottom: 2rem; max-width: 100%; }
        @media (min-width: 768px) { .hero-p { max-width: 480px; } }

        .hero-btns { display: flex; align-items: center; justify-content: center; gap: 2rem; flex-wrap: wrap; }
        @media (min-width: 768px) { .hero-btns { justify-content: flex-start; } }

        .section-pad { padding: 7rem 0; }
        @media (max-width: 768px) { .section-pad { padding: 4rem 0; } }

        .svc-tag { display: inline-block; padding: .35rem .9rem; border-radius: 2rem; font-family: var(--font-label); font-size: .55rem; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; background: rgba(197,160,89,.1); color: #C5A059; border: 1px solid rgba(197,160,89,.25); white-space: nowrap; }
      `}</style>

      <div
        ref={parentRef}
        style={{
          background: "#000",
          color: "#fff",
          overflowX: "hidden",
          willChange: "background-color",
        }}
      >
        {/*  HERO */}
        <section
          id="home"
          style={{
            position: "relative",
            height: "100vh",
            minHeight: 600,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            overflow: "hidden",
          }}
        >
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
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom,rgba(0,0,0,.42) 0%,transparent 22%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(105deg,rgba(0,0,0,.72) 0%,rgba(0,0,0,.38) 38%,transparent 62%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top,#000 0%,rgba(0,0,0,.78) 18%,rgba(0,0,0,.32) 40%,transparent 62%)",
              }}
            />
          </div>

          <div className="hero-eyebrow">
            <span
              style={{
                width: 32,
                height: 1,
                background: "#C5A059",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-label)",
                fontSize: ".70rem",
                fontWeight: 700,
                letterSpacing: ".28em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,.55)",
              }}
            >
              Gugri Industries
            </span>
          </div>

          <div className="hero-inline-nav">
            {[
              { label: "Philosophy", id: "philosophy" },
              { label: "Innovation", id: "innovation" },
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-label)",
                  fontSize: ".68rem",
                  fontWeight: 700,
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,.5)",
                  transition: "color .3s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.color =
                    "#C5A059")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.color =
                    "rgba(255,255,255,.5)")
                }
              >
                {label}
              </button>
            ))}
          </div>

          <div
            style={{
              position: "relative",
              zIndex: 10,
              paddingBottom: "clamp(3rem,6vw,5rem)",
            }}
          >
            <W>
              <div ref={heroRef} className="hero-row">
                <div className="hero-text">
                  <h1 className="hero-child hero-h1" style={{ opacity: 0 }}>
                    Architecting{" "}
                    <em style={{ color: "#C5A059", fontStyle: "italic" }}>
                      Regenerative
                    </em>{" "}
                    Innovation
                  </h1>
                  <p className="hero-child hero-p" style={{ opacity: 0 }}>
                    Designing ecosystems where land, energy, and life grow
                    together — creating regenerative value across generations.
                  </p>
                  <div className="hero-child hero-btns" style={{ opacity: 0 }}>
                    <button
                      onClick={() => scrollTo("philosophy")}
                      style={{
                        padding: ".95rem 2.4rem",
                        border: "1px solid rgba(255,255,255,.45)",
                        background: "rgba(0,0,0,.25)",
                        backdropFilter: "blur(10px)",
                        color: "#fff",
                        fontFamily: "var(--font-label)",
                        fontSize: ".62rem",
                        fontWeight: 700,
                        letterSpacing: ".2em",
                        textTransform: "uppercase",
                        cursor: "pointer",
                        transition:
                          "background .3s, border-color .3s, color .3s",
                      }}
                      onMouseEnter={(e) => {
                        const b = e.currentTarget as HTMLButtonElement;
                        b.style.background = "#fff";
                        b.style.borderColor = "#fff";
                        b.style.color = "#000";
                      }}
                      onMouseLeave={(e) => {
                        const b = e.currentTarget as HTMLButtonElement;
                        b.style.background = "rgba(0,0,0,.25)";
                        b.style.borderColor = "rgba(255,255,255,.45)";
                        b.style.color = "#fff";
                      }}
                    >
                      Discover More
                    </button>
                    <Link href="/connect">
                      <button
                        style={{
                          padding: ".95rem 2.4rem",
                          borderBottom: "1px solid #C5A059",
                          background: "transparent",
                          color: "#C5A059",
                          fontFamily: "var(--font-label)",
                          fontSize: ".62rem",
                          fontWeight: 700,
                          letterSpacing: ".2em",
                          textTransform: "uppercase",
                          cursor: "pointer",
                          transition: "color .3s",
                        }}
                        onMouseEnter={(e) =>
                          ((e.currentTarget as HTMLButtonElement).style.color =
                            "#fff")
                        }
                        onMouseLeave={(e) =>
                          ((e.currentTarget as HTMLButtonElement).style.color =
                            "#C5A059")
                        }
                      >
                        Partner With Us
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="pause-btn">
                  <div className="hero-child" style={{ opacity: 0 }}>
                    <button
                      onClick={togglePlay}
                      aria-label={isPlaying ? "Pause" : "Play"}
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        border: "1px solid rgba(255,255,255,.32)",
                        background: "rgba(0,0,0,.3)",
                        backdropFilter: "blur(10px)",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        transition: "background .3s",
                      }}
                      onMouseEnter={(e) =>
                        ((
                          e.currentTarget as HTMLButtonElement
                        ).style.background = "rgba(255,255,255,.15)")
                      }
                      onMouseLeave={(e) =>
                        ((
                          e.currentTarget as HTMLButtonElement
                        ).style.background = "rgba(0,0,0,.3)")
                      }
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 18 }}
                      >
                        {isPlaying ? "pause" : "play_arrow"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </W>
          </div>

          <div
            className="scroll-indicator"
            style={{
              position: "absolute",
              bottom: "1.75rem",
              left: "50%",
              transform: "translateX(-50%)",
              flexDirection: "column",
              alignItems: "center",
              gap: ".45rem",
              zIndex: 10,
              opacity: 0.4,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-label)",
                fontSize: ".48rem",
                letterSpacing: ".28em",
                textTransform: "uppercase",
                color: "#fff",
              }}
            >
              Scroll
            </span>
            <div
              style={{
                width: 1,
                height: 36,
                background: "linear-gradient(to bottom,#fff,transparent)",
              }}
            />
          </div>
        </section>

        {/* STATS  */}
        <section
          ref={statsRef}
          id="stats"
          style={{ background: "transparent" }}
        >
          <W>
            <div className="stats-grid">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="stat-item"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".6rem",
                    opacity: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-epilogue),sans-serif",
                      fontSize: "clamp(2.8rem,4.5vw,4.5rem)",
                      fontWeight: 300,
                      color: "#C5A059",
                      lineHeight: 1,
                      textAlign: "center",
                    }}
                  >
                    {s.value}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-label)",
                      fontSize: ".6rem",
                      fontWeight: 700,
                      letterSpacing: ".22em",
                      textTransform: "uppercase",
                      color: bgMode === "light" ? LIGHT.muted : DARK.muted,
                      textAlign: "center",
                    }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </W>
        </section>

        {/* ABOUT US */}
        <section
          ref={aboutRef}
          id="about"
          className="section-pad"
          style={{ background: "transparent" }}
        >
          <W>
            <div style={{ textAlign: "center", marginBottom: "5rem" }}>
              <SectionEyebrow text="About Us" center />
              <h2
                className="about-anim"
                style={{
                  fontFamily: "var(--font-epilogue),sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.8rem,4vw,4.5rem)",
                  letterSpacing: "-.04em",
                  lineHeight: 1.05,
                  marginBottom: "1.5rem",
                  opacity: 0,
                  color: bgMode === "light" ? LIGHT.heading : DARK.heading,
                }}
              >
                Land Is Not a Resource.
                <br />
                It Is an{" "}
                <em style={{ color: "#C5A059", fontStyle: "italic" }}>
                  Asset to Regenerate.
                </em>
              </h2>
              <p
                className="about-anim"
                style={{
                  fontSize: "clamp(.9rem,1.2vw,1.1rem)",
                  color: bgMode === "light" ? LIGHT.body : DARK.body,
                  maxWidth: 720,
                  margin: "0 auto",
                  lineHeight: 1.8,
                  opacity: 0,
                }}
              >
                We are a regenerative ecosystem development company that
                architects multi-layered, self-sustaining land systems — where
                agriculture, renewable energy, carbon sequestration, water
                conservation, wellness infrastructure, and future communities do
                not compete for land, but coexist and reinforce one another.
              </p>
            </div>

            <div className="about-grid">
              <div>
                <div
                  className="about-anim"
                  style={{
                    padding: "2.5rem",
                    background: "rgba(197,160,89,.06)",
                    border: "1px solid rgba(197,160,89,.2)",
                    borderRadius: ".25rem",
                    marginBottom: "2rem",
                    opacity: 0,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-epilogue),sans-serif",
                      fontStyle: "italic",
                      fontSize: "clamp(1rem,1.4vw,1.2rem)",
                      color: "#C5A059",
                      lineHeight: 1.7,
                      marginBottom: "1rem",
                    }}
                  >
                    "What surrounds us today shall not define tomorrow."
                  </p>
                  <p
                    style={{
                      color: bgMode === "light" ? LIGHT.body : DARK.body,
                      fontSize: ".88rem",
                      lineHeight: 1.8,
                    }}
                  >
                    To us, land is not a resource to be exhausted for short-term
                    gain, but an asset to be regenerated for generations to
                    come. Every project is built on a simple belief: development
                    should leave land healthier, communities stronger, and the
                    future more abundant than before.
                  </p>
                </div>
                <div
                  className="about-anim"
                  style={{
                    padding: "2.5rem",
                    background: "rgba(197,160,89,.06)",
                    border: "1px solid rgba(197,160,89,.2)",
                    borderRadius: ".25rem",
                    marginBottom: "2rem",
                    opacity: 0,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-label)",
                      fontSize: ".58rem",
                      fontWeight: 700,
                      letterSpacing: ".24em",
                      textTransform: "uppercase",
                      color: "#C5A059",
                      marginBottom: ".75rem",
                    }}
                  >
                    Our Mission
                  </p>
                  <p
                    style={{
                      color: bgMode === "light" ? LIGHT.body : DARK.body,
                      fontSize: ".9rem",
                      lineHeight: 1.8,
                    }}
                  >
                    To transform underutilized land into regenerative ecosystems
                    capable of producing sustainable agriculture, clean energy,
                    environmental restoration, long-term economic resilience,
                    community infrastructure, wellness-oriented living, and
                    future-ready development — all within one interconnected
                    system.
                  </p>
                </div>
              </div>

              <div>
                <p
                  className="about-anim"
                  style={{
                    fontFamily: "var(--font-epilogue),sans-serif",
                    fontWeight: 700,
                    fontSize: "1.4rem",
                    color: bgMode === "light" ? LIGHT.heading : DARK.heading,
                    marginBottom: ".5rem",
                    opacity: 0,
                  }}
                >
                  Nature + Technology + Community
                </p>
                <p
                  className="about-anim"
                  style={{
                    color: bgMode === "light" ? LIGHT.muted : DARK.muted,
                    fontSize: ".88rem",
                    lineHeight: 1.8,
                    marginBottom: "2rem",
                    opacity: 0,
                  }}
                >
                  At Gugri Industries, every project is designed as a living
                  ecosystem. We believe future development must:
                </p>
                <div
                  className="about-beliefs about-anim"
                  style={{ opacity: 0 }}
                >
                  {[
                    "Work with nature, not against it",
                    "Generate long-term ecological value",
                    "Create healthier communities",
                    "Improve human well-being",
                    "Enhance biodiversity",
                    "Support local economies",
                    "Reduce climate vulnerability",
                    "Build resilient self-sustaining systems",
                  ].map((b) => (
                    <div
                      key={b}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: ".65rem",
                        padding: ".85rem 1rem",
                        background:
                          bgMode === "light"
                            ? "rgba(0,0,0,.03)"
                            : "rgba(255,255,255,.03)",
                        border: `1px solid ${bgMode === "light" ? "rgba(0,0,0,.06)" : "rgba(255,255,255,.06)"}`,
                        borderRadius: ".2rem",
                      }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: "#C5A059",
                          marginTop: ".38rem",
                          flexShrink: 0,
                          display: "inline-block",
                        }}
                      />
                      <p
                        style={{
                          fontSize: ".82rem",
                          lineHeight: 1.6,
                          color: bgMode === "light" ? LIGHT.body : DARK.body,
                        }}
                      >
                        {b}
                      </p>
                    </div>
                  ))}
                </div>
                <div
                  className="about-anim"
                  style={{
                    marginTop: "2rem",
                    padding: "1.5rem 2rem",
                    borderLeft: "3px solid #C5A059",
                    opacity: 0,
                  }}
                >
                  <p
                    style={{
                      color: bgMode === "light" ? LIGHT.body : DARK.body,
                      fontSize: ".9rem",
                      lineHeight: 1.75,
                    }}
                  >
                    We view land as a{" "}
                    <span style={{ color: "#C5A059", fontWeight: 600 }}>
                      dynamic, multi-dimensional asset
                    </span>{" "}
                    capable of producing environmental, economic, social, and
                    infrastructural value simultaneously.
                  </p>
                </div>
              </div>
            </div>
          </W>
        </section>

        {/* PHILOSOPHY */}
        <section
          ref={philosophyRef}
          id="philosophy"
          className="section-pad"
          style={{ background: "transparent" }}
        >
          <W>
            <div style={{ textAlign: "center", marginBottom: "5rem" }}>
              <SectionEyebrow text="Our Philosophy" center />
              <h2
                className="phil-anim"
                style={{
                  fontFamily: "var(--font-epilogue),sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.8rem,4vw,5rem)",
                  letterSpacing: "-.04em",
                  lineHeight: 1.0,
                  marginBottom: "1.25rem",
                  opacity: 0,
                  color: bgMode === "light" ? LIGHT.heading : DARK.heading,
                }}
              >
                Growth Should Not Extract Value <br />
                It Should{" "}
                <em style={{ color: "#C5A059", fontStyle: "italic" }}>
                  Regenerate
                </em>{" "}
                It
              </h2>
              <p
                className="phil-anim"
                style={{
                  fontSize: "clamp(.9rem,1.2vw,1.1rem)",
                  color: bgMode === "light" ? LIGHT.body : DARK.body,
                  maxWidth: 680,
                  margin: "0 auto",
                  lineHeight: 1.8,
                  opacity: 0,
                }}
              >
                We believe in a world where human progress and nature are not
                opponents, but partners in an infinite cycle of creation.
              </p>
            </div>
            <div className="phil-grid">
              <div className="phil-anim" style={{ opacity: 0 }}>
                <div
                  style={{
                    position: "relative",
                    borderRadius: ".25rem",
                    overflow: "hidden",
                    aspectRatio: "4/5",
                  }}
                >
                  <img
                    src={philosophy}
                    alt="Timber Haven"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top,rgba(0,0,0,.7) 0%,transparent 55%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "2.5rem",
                      left: "2.5rem",
                      right: "2.5rem",
                      borderLeft: "3px solid #C5A059",
                      paddingLeft: "1.25rem",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-epilogue),sans-serif",
                        fontStyle: "italic",
                        fontSize: "1rem",
                        color: "#C5A059",
                        lineHeight: 1.6,
                      }}
                    >
                      "Calm, intelligent, futuristic sustainability."
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ paddingTop: "2rem" }}>
                <p
                  className="phil-anim"
                  style={{
                    color: bgMode === "light" ? LIGHT.body : DARK.body,
                    lineHeight: 1.85,
                    fontSize: ".95rem",
                    marginBottom: "3rem",
                    opacity: 0,
                  }}
                >
                  At Gugri Industries, we don't just build projects — we
                  cultivate living systems. Our philosophy is rooted in the
                  understanding that nature's greatest strength lies in its
                  cycles: nothing is wasted, everything regenerates.
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  {[
                    {
                      icon: "spa",
                      title: "Harmony",
                      desc: "A perfect balance between human progress and the natural world, where each enhances the other.",
                    },
                    {
                      icon: "currency_exchange",
                      title: "Regenerative Wealth",
                      desc: "Wealth that compounds through ecological health — more land value, more biodiversity, more returns.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="phil-anim"
                      style={{
                        padding: "2rem 2.5rem",
                        background: bgMode === "light" ? LIGHT.card : DARK.card,
                        border: `1px solid ${bgMode === "light" ? LIGHT.cardBorder : DARK.cardBorder}`,
                        borderRadius: ".25rem",
                        opacity: 0,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                          marginBottom: ".75rem",
                        }}
                      >
                        <span
                          className="material-symbols-outlined"
                          style={{ color: "#C5A059", fontSize: 22 }}
                        >
                          {item.icon}
                        </span>
                        <h4
                          style={{
                            fontFamily: "var(--font-epilogue),sans-serif",
                            fontWeight: 700,
                            fontSize: "1rem",
                            textTransform: "uppercase",
                            color:
                              bgMode === "light" ? LIGHT.heading : DARK.heading,
                          }}
                        >
                          {item.title}
                        </h4>
                      </div>
                      <p
                        style={{
                          color: bgMode === "light" ? LIGHT.muted : DARK.muted,
                          fontSize: ".84rem",
                          lineHeight: 1.75,
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
                <div
                  className="phil-anim"
                  style={{ marginTop: "2.5rem", opacity: 0 }}
                >
                  <button
                    onClick={() => scrollTo("innovation")}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: ".65rem",
                      padding: ".9rem 2rem",
                      border: "1px solid rgba(255,255,255,.25)",
                      background: "transparent",
                      color: bgMode === "light" ? LIGHT.heading : DARK.heading,
                      fontFamily: "var(--font-label)",
                      fontSize: ".6rem",
                      fontWeight: 700,
                      letterSpacing: ".2em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      transition: "all .3s",
                      borderRadius: ".15rem",
                    }}
                    onMouseEnter={(e) => {
                      const b = e.currentTarget as HTMLButtonElement;
                      b.style.background = "#C5A059";
                      b.style.borderColor = "#C5A059";
                      b.style.color = "#000";
                    }}
                    onMouseLeave={(e) => {
                      const b = e.currentTarget as HTMLButtonElement;
                      b.style.background = "transparent";
                      b.style.borderColor = "rgba(255,255,255,.25)";
                      b.style.color =
                        bgMode === "light" ? LIGHT.heading : "#fff";
                    }}
                  >
                    Explore Innovation{" "}
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 16 }}
                    >
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </W>
        </section>

        {/* THE PROBLEM */}
        <section className="section-pad" style={{ background: "transparent" }}>
          <W>
            <div className="problem-grid">
              <div>
                <SectionEyebrow text="The Problem" />
                <h2
                  style={{
                    fontFamily: "var(--font-epilogue),sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(1.8rem,3vw,3.5rem)",
                    letterSpacing: "-.03em",
                    lineHeight: 1.1,
                    marginBottom: "2rem",
                    color: bgMode === "light" ? LIGHT.heading : DARK.heading,
                  }}
                >
                  Land Is{" "}
                  <em style={{ color: "#C5A059", fontStyle: "italic" }}>
                    Underutilized
                  </em>{" "}
                  Economically and{" "}
                  <em style={{ color: "#C5A059", fontStyle: "italic" }}>
                    Overstressed
                  </em>{" "}
                  Environmentally
                </h2>
                <p
                  style={{
                    color: bgMode === "light" ? LIGHT.body : DARK.body,
                    lineHeight: 1.85,
                    fontSize: ".92rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  Across the world, vast tracts of arable land generate a
                  fraction of their true potential. Conventional agriculture
                  depletes soil, monoculture farming erodes biodiversity, and
                  landowners watch their most valuable asset slowly degrade.
                </p>
                <p
                  style={{
                    color: bgMode === "light" ? LIGHT.body : DARK.body,
                    lineHeight: 1.85,
                    fontSize: ".92rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  Meanwhile, the energy transition demands land. Water scarcity
                  threatens food security. Carbon markets remain inaccessible to
                  small and mid-scale landowners.
                </p>
                <p
                  style={{
                    color: bgMode === "light" ? LIGHT.body : DARK.body,
                    lineHeight: 1.85,
                    fontSize: ".92rem",
                  }}
                >
                  The result? A paradox — land that could be the foundation of
                  generational wealth becomes a liability.{" "}
                  <em style={{ color: "#C5A059", fontStyle: "italic" }}>
                    We exist to resolve this paradox.
                  </em>
                </p>
              </div>
              <div
                style={{
                  borderRadius: ".25rem",
                  overflow: "hidden",
                  aspectRatio: "4/3",
                }}
              >
                <img
                  src="/pictures/services-agriculture.png"
                  alt="Regenerative farmland"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </W>
        </section>

        {/* MAX POTENTIAL MODEL  */}
        <section className="section-pad" style={{ background: "transparent" }}>
          <W>
            <div style={{ textAlign: "center", marginBottom: "5rem" }}>
              <SectionEyebrow text="Maximum Potential Model" center />
              <h2
                style={{
                  fontFamily: "var(--font-epilogue),sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(2rem,4vw,4.5rem)",
                  letterSpacing: "-.03em",
                  lineHeight: 1.1,
                  marginBottom: "1.25rem",
                  color: bgMode === "light" ? LIGHT.heading : DARK.heading,
                }}
              >
                Multiple Layers of{" "}
                <em style={{ color: "#C5A059", fontStyle: "italic" }}>
                  Stacked
                </em>{" "}
                Value
              </h2>
              <p
                style={{
                  color: bgMode === "light" ? LIGHT.muted : DARK.muted,
                  fontSize: "clamp(.88rem,1.1vw,1rem)",
                  maxWidth: 580,
                  margin: "0 auto",
                  lineHeight: 1.8,
                }}
              >
                Our proprietary Multi-Layer system transforms underutilized land
                into a high-performance regenerative asset, generating value
                from every dimension.
              </p>
            </div>
            <div
              style={{
                borderTop: `1px solid ${bgMode === "light" ? "rgba(0,0,0,.08)" : "rgba(255,255,255,.08)"}`,
                borderLeft: `1px solid ${bgMode === "light" ? "rgba(0,0,0,.08)" : "rgba(255,255,255,.08)"}`,
                borderRight: `1px solid ${bgMode === "light" ? "rgba(0,0,0,.08)" : "rgba(255,255,255,.08)"}`,
                borderRadius: ".25rem .25rem 0 0",
                overflow: "hidden",
              }}
            >
              {[
                {
                  num: "01",
                  title: "Sustainable & Regenerative Agriculture",
                  desc: "The foundation of everything. We restore soil microbiome health through cover cropping, composting, and bio-amendments. Enhanced soil becomes a carbon sink, a water reservoir, and the bedrock of premium agricultural output.",
                },
                {
                  num: "02",
                  title: "Renewable Energy Integration — Solar + Water Systems",
                  desc: "Agrivoltaic installations provide dual-use infrastructure — generating clean energy while creating optimal micro-climates for shade-loving crops. Integrated water harvesting, smart irrigation, and greywater recycling ensure zero-waste water management.",
                },
                {
                  num: "03",
                  title: "Smart Communities",
                  desc: "People coexist in harmony with nature. Lifestyles guided by a nature-first principle where communities consume directly from integrated farm layers and rely on renewable energy. An ecosystem designed to nurture talent, creativity, and resilience.",
                },
                {
                  num: "04",
                  title:
                    "Revenue Stacking — Food + Energy + Communities + Carbon",
                  desc: "The economic engine of regeneration. Premium food systems generate agricultural revenue, renewable energy creates long-term power income, and integrated communities become direct consumers. Multiple independent revenue streams — diversified, resilient, compounding.",
                },
              ].map((layer) => (
                <div
                  key={layer.num}
                  className="layers-row"
                  style={{
                    background:
                      bgMode === "light"
                        ? "rgba(0,0,0,.02)"
                        : "rgba(255,255,255,.02)",
                    transition: "background .25s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLDivElement).style.background =
                      "rgba(197,160,89,.04)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLDivElement).style.background =
                      bgMode === "light"
                        ? "rgba(0,0,0,.02)"
                        : "rgba(255,255,255,.02)")
                  }
                >
                  <span
                    style={{
                      fontFamily: "var(--font-epilogue),sans-serif",
                      fontSize: "clamp(1.4rem,2.5vw,2rem)",
                      fontWeight: 300,
                      color: "#C5A059",
                      lineHeight: 1,
                      paddingTop: ".2rem",
                    }}
                  >
                    {layer.num}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-epilogue),sans-serif",
                        fontWeight: 700,
                        fontSize: "clamp(.95rem,1.4vw,1.2rem)",
                        marginBottom: "1rem",
                        color:
                          bgMode === "light" ? LIGHT.heading : DARK.heading,
                      }}
                    >
                      {layer.title}
                    </h3>
                    <p
                      style={{
                        color: bgMode === "light" ? LIGHT.muted : DARK.muted,
                        fontSize: ".88rem",
                        lineHeight: 1.8,
                      }}
                    >
                      {layer.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </W>
        </section>

        {/* INNOVATION */}
        <section
          ref={innovationRef}
          id="innovation"
          className="section-pad"
          style={{ background: "transparent" }}
        >
          <W>
            <div style={{ textAlign: "center", marginBottom: "6rem" }}>
              <SectionEyebrow text="Cyclic Innovation" center />
              <h2
                className="inno-anim"
                style={{
                  fontFamily: "var(--font-epilogue),sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.8rem,4vw,5rem)",
                  letterSpacing: "-.04em",
                  lineHeight: 1.0,
                  marginBottom: "1.25rem",
                  opacity: 0,
                  color: bgMode === "light" ? LIGHT.heading : DARK.heading,
                }}
              >
                The{" "}
                <em style={{ color: "#C5A059", fontStyle: "italic" }}>
                  Infinite Loop
                </em>
                <br />
                of Regenerative Value
              </h2>
              <p
                className="inno-anim"
                style={{
                  color: bgMode === "light" ? LIGHT.muted : DARK.muted,
                  fontSize: "1rem",
                  maxWidth: 560,
                  margin: "0 auto",
                  lineHeight: 1.8,
                  opacity: 0,
                }}
              >
                Our cyclic model replaces linear extraction with regenerative
                loops — where every output becomes an input for the next cycle
                of growth.
              </p>
            </div>
            <div className="inno-grid">
              <div
                className="inno-anim"
                style={{
                  opacity: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className="cycle-wheel">
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "50%",
                      border: "1px solid rgba(197,160,89,.18)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 40,
                      borderRadius: "50%",
                      border: "1px dashed rgba(197,160,89,.1)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%,-50%)",
                      textAlign: "center",
                      zIndex: 2,
                    }}
                  >
                    <div
                      style={{
                        width: 100,
                        height: 100,
                        borderRadius: "50%",
                        border: "2px solid #C5A059",
                        background: "rgba(197,160,89,.08)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: ".25rem",
                      }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{ color: "#C5A059", fontSize: 28 }}
                      >
                        all_inclusive
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-label)",
                          fontSize: ".42rem",
                          fontWeight: 700,
                          letterSpacing: ".18em",
                          textTransform: "uppercase",
                          color: "#C5A059",
                        }}
                      >
                        Cyclic
                        <br />
                        Value
                      </span>
                    </div>
                  </div>
                  {cycleNodes.map((n) => (
                    <div
                      key={n.label}
                      style={{
                        position: "absolute",
                        top: n.top,
                        left: n.left,
                        transform: `translate(${n.tx},${n.ty})`,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: ".5rem",
                      }}
                    >
                      <div
                        style={{
                          width: 66,
                          height: 66,
                          borderRadius: "50%",
                          border: "1px solid rgba(197,160,89,.4)",
                          background: "rgba(197,160,89,.06)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <span
                          className="material-symbols-outlined"
                          style={{ color: "#C5A059", fontSize: 26 }}
                        >
                          {n.icon}
                        </span>
                      </div>
                      <span
                        style={{
                          fontFamily: "var(--font-label)",
                          fontSize: ".58rem",
                          fontWeight: 700,
                          letterSpacing: ".18em",
                          textTransform: "uppercase",
                          color: bgMode === "light" ? LIGHT.muted : DARK.muted,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {n.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3
                  className="inno-anim"
                  style={{
                    fontFamily: "var(--font-epilogue),sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(1.6rem,2.5vw,2.5rem)",
                    lineHeight: 1.2,
                    marginBottom: "1.5rem",
                    opacity: 0,
                    color: bgMode === "light" ? LIGHT.heading : DARK.heading,
                  }}
                >
                  How Nature's{" "}
                  <em style={{ color: "#C5A059", fontStyle: "italic" }}>
                    Wisdom
                  </em>{" "}
                  Becomes Our Strategy
                </h3>
                <p
                  className="inno-anim"
                  style={{
                    color: bgMode === "light" ? LIGHT.body : DARK.body,
                    lineHeight: 1.85,
                    marginBottom: "2rem",
                    opacity: 0,
                  }}
                >
                  In nature, there is no waste. Every fallen leaf feeds the
                  soil, every raindrop nurtures growth, every sunset stores
                  energy for tomorrow.
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".85rem",
                    marginBottom: "2rem",
                  }}
                >
                  {[
                    ["Energy", "powers precision agriculture."],
                    ["Agriculture", "restores and enriches the soil."],
                    [
                      "Healthy soil",
                      "enhances biodiversity and ecosystem resilience.",
                    ],
                    [
                      "Rich biodiversity",
                      "increases the intrinsic and economic value of the land.",
                    ],
                  ].map(([w, r]) => (
                    <div
                      key={w}
                      className="inno-anim"
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: ".75rem",
                        opacity: 0,
                      }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: "#C5A059",
                          marginTop: ".42rem",
                          flexShrink: 0,
                          display: "inline-block",
                        }}
                      />
                      <p
                        style={{
                          fontSize: ".88rem",
                          lineHeight: 1.7,
                          color: bgMode === "light" ? LIGHT.body : DARK.body,
                        }}
                      >
                        <span style={{ color: "#C5A059", fontWeight: 600 }}>
                          {w}
                        </span>{" "}
                        {r}
                      </p>
                    </div>
                  ))}
                </div>
                <div
                  className="inno-anim"
                  style={{
                    padding: "1.5rem 2rem",
                    background: "rgba(197,160,89,.06)",
                    border: "1px solid rgba(197,160,89,.18)",
                    borderRadius: ".25rem",
                    opacity: 0,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-epilogue),sans-serif",
                      fontStyle: "italic",
                      fontSize: ".95rem",
                      color: bgMode === "light" ? LIGHT.body : DARK.body,
                      lineHeight: 1.7,
                    }}
                  >
                    "And the cycle begins again — each revolution stronger than
                    the last. This is growth through regeneration."
                  </p>
                </div>
              </div>
            </div>
          </W>
        </section>

        {/* FOUR PILLARS */}
        <section
          ref={pillarsRef}
          id="approach"
          className="section-pad"
          style={{ background: "transparent" }}
        >
          <W>
            <div className="pillars-header">
              <div>
                <SectionEyebrow text="Our Approach" />
                <h2
                  style={{
                    fontFamily: "var(--font-epilogue),sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(1.8rem,3vw,3rem)",
                    textTransform: "uppercase",
                    letterSpacing: "-.03em",
                    lineHeight: 1.1,
                    color: bgMode === "light" ? LIGHT.heading : DARK.heading,
                  }}
                >
                  The Four Pillars of
                  <br />
                  <span style={{ color: "#C5A059" }}>Regenerative Growth</span>
                </h2>
              </div>
              <div
                style={{
                  width: "6rem",
                  height: 3,
                  background: "rgba(197,160,89,.3)",
                  flexShrink: 0,
                }}
              />
            </div>
            <div ref={pillarsGridRef} className="pillars-grid">
              {pillars.map((p) => (
                <div
                  key={p.num}
                  className="pillar-card"
                  style={{
                    background: bgMode === "light" ? LIGHT.card : DARK.card,
                    border: `1px solid ${bgMode === "light" ? LIGHT.cardBorder : DARK.cardBorder}`,
                    borderRadius: ".25rem",
                    padding: "3rem 2.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                    cursor: "default",
                    opacity: 0,
                    transition: "background .3s, border-color .3s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.background = "rgba(197,160,89,.07)";
                    el.style.borderColor = "rgba(197,160,89,.25)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.background =
                      bgMode === "light" ? LIGHT.card : DARK.card;
                    el.style.borderColor =
                      bgMode === "light" ? LIGHT.cardBorder : DARK.cardBorder;
                  }}
                >
                  {/* <span
                    style={{
                      fontFamily: "var(--font-label)",
                      fontSize: ".55rem",
                      fontWeight: 700,
                      letterSpacing: ".3em",
                      textTransform: "uppercase",
                      color: bgMode === "light" ? LIGHT.muted : DARK.muted,
                    }}
                  >
                    {p.num}
                  </span> */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: ".6rem",
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ color: "#C5A059", fontSize: 36 }}
                    >
                      {p.icon}
                    </span>
                    <h3
                      style={{
                        fontFamily: "var(--font-epilogue),sans-serif",
                        fontWeight: 700,
                        fontSize: "1.3rem",
                        textTransform: "uppercase",
                        color:
                          bgMode === "light" ? LIGHT.heading : DARK.heading,
                      }}
                    >
                      {p.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-label)",
                        fontSize: ".58rem",
                        fontWeight: 700,
                        letterSpacing: ".14em",
                        textTransform: "uppercase",
                        color: "#C5A059",
                      }}
                    >
                      {p.subtitle}
                    </p>
                  </div>
                  <p
                    style={{
                      fontSize: ".82rem",
                      lineHeight: 1.75,
                      color: bgMode === "light" ? LIGHT.body : DARK.body,
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </W>
        </section>

        {/* PORTFOLIO  */}
        <section
          ref={journeyRef}
          id="experience"
          className="section-pad"
          style={{ background: "transparent" }}
        >
          <W>
            <div className="journey-header">
              <div>
                <SectionEyebrow text="Portfolio" />
                <h2
                  style={{
                    fontFamily: "var(--font-epilogue),sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(1.8rem,3vw,3rem)",
                    lineHeight: 1.15,
                    maxWidth: "22rem",
                    color: bgMode === "light" ? LIGHT.heading : DARK.heading,
                  }}
                >
                  The <span style={{ color: "#C5A059" }}>Architecture</span> of
                  <br />
                  Regenerative Growth
                </h2>
              </div>
            </div>
            <div className="cards-grid-3">
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
                    const img = e.currentTarget.querySelector(
                      "img",
                    ) as HTMLImageElement;
                    if (img) img.style.transform = "scale(1.06)";
                  }}
                  onMouseLeave={(e) => {
                    const img = e.currentTarget.querySelector(
                      "img",
                    ) as HTMLImageElement;
                    if (img) img.style.transform = "scale(1)";
                  }}
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform .7s ease",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top,rgba(0,0,0,.8) 0%,transparent 55%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "2.5rem",
                      left: "2.5rem",
                      right: "2.5rem",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontFamily: "var(--font-label)",
                          fontSize: ".55rem",
                          letterSpacing: ".22em",
                          textTransform: "uppercase",
                          color: "rgba(255,255,255,.55)",
                          marginBottom: ".35rem",
                        }}
                      >
                        {card.category}
                      </p>
                      <h3
                        style={{
                          fontFamily: "var(--font-epilogue),sans-serif",
                          fontWeight: 700,
                          fontSize: "1.3rem",
                          color: "#fff",
                          letterSpacing: "-.02em",
                        }}
                      >
                        {card.title}
                      </h3>
                    </div>
                    <span
                      className="material-symbols-outlined"
                      style={{ color: "#fff", fontSize: 26 }}
                    >
                      arrow_forward
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </W>
        </section>

        {/* DISCOVER */}
        <section
          ref={discoverRef}
          className="section-pad"
          style={{ background: "transparent" }}
        >
          <W>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <SectionEyebrow text="Explore" center />
              <h2
                style={{
                  fontFamily: "var(--font-epilogue),sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(3.5rem,4vw,8rem)",
                  textTransform: "uppercase",
                  letterSpacing: "-.04em",
                  color: bgMode === "light" ? LIGHT.heading : DARK.heading,
                }}
              >
                Discover
              </h2>
            </div>
            <div className="cards-grid-3">
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
                    const img = e.currentTarget.querySelector(
                      "img",
                    ) as HTMLImageElement;
                    if (img) img.style.transform = "scale(1.06)";
                  }}
                  onMouseLeave={(e) => {
                    const img = e.currentTarget.querySelector(
                      "img",
                    ) as HTMLImageElement;
                    if (img) img.style.transform = "scale(1)";
                  }}
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      opacity: 0.75,
                      transition: "transform .7s ease",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top,rgba(0,0,0,.88) 0%,transparent 55%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "2.5rem",
                      left: "2.5rem",
                      right: "2.5rem",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                    }}
                  >
                    <div>
                      <h4
                        style={{
                          fontFamily: "var(--font-epilogue),sans-serif",
                          fontWeight: 700,
                          fontSize: "1.3rem",
                          color: "#fff",
                          marginBottom: ".4rem",
                        }}
                      >
                        {card.title}
                      </h4>
                      <p
                        style={{
                          fontSize: ".72rem",
                          color: "rgba(255,255,255,.38)",
                        }}
                      >
                        {card.desc}
                      </p>
                    </div>
                    <span
                      className="material-symbols-outlined"
                      style={{ color: "#fff", fontSize: 26 }}
                    >
                      arrow_forward
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </W>
        </section>

        {/* CTA  */}
        <section className="section-pad" style={{ background: "transparent" }}>
          <W>
            <div
              className="cta-grid"
              style={{
                background: bgMode === "light" ? "#f5f3f0" : "#0d0d0d",
                border: `1px solid ${bgMode === "light" ? "rgba(197,160,89,.2)" : "rgba(197,160,89,.15)"}`,
                borderRadius: ".25rem",
                padding: "clamp(2.5rem,5vw,5rem)",
              }}
            >
              <div>
                <SectionEyebrow text="Partner With Us" />
                <h2
                  style={{
                    fontFamily: "var(--font-epilogue),sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(2rem,3.5vw,3.8rem)",
                    textTransform: "uppercase",
                    letterSpacing: "-.03em",
                    lineHeight: 1.1,
                    marginBottom: "1.25rem",
                    color: bgMode === "light" ? LIGHT.heading : DARK.heading,
                  }}
                >
                  Join the{" "}
                  <span style={{ color: "#C5A059" }}>Regeneration.</span>
                </h2>
                <p
                  style={{
                    color: bgMode === "light" ? LIGHT.muted : DARK.muted,
                    lineHeight: 1.8,
                    maxWidth: 520,
                    fontSize: ".92rem",
                  }}
                >
                  Experience the alchemy of high luxury and planetary healing.
                  Partner with Gugri Industries to deploy regenerative
                  technology at a global scale.
                </p>
              </div>
              <div className="cta-btns">
                <a
                  href="/connect"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: ".65rem",
                    padding: "1.1rem 2.5rem",
                    background: "#C5A059",
                    color: "#000",
                    fontFamily: "var(--font-label)",
                    fontSize: ".62rem",
                    fontWeight: 700,
                    letterSpacing: ".2em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    borderRadius: ".15rem",
                    transition: "filter .25s, transform .25s",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    const a = e.currentTarget as HTMLAnchorElement;
                    a.style.filter = "brightness(1.12)";
                    a.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const a = e.currentTarget as HTMLAnchorElement;
                    a.style.filter = "none";
                    a.style.transform = "translateY(0)";
                  }}
                >
                  Inquire Now{" "}
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 16 }}
                  >
                    arrow_forward
                  </span>
                </a>
                <button
                  onClick={() => scrollTo("innovation")}
                  style={{
                    padding: "1rem 2.5rem",
                    background: "transparent",
                    border: `1px solid ${bgMode === "light" ? "rgba(0,0,0,.18)" : "rgba(255,255,255,.18)"}`,
                    color: bgMode === "light" ? LIGHT.body : DARK.body,
                    fontFamily: "var(--font-label)",
                    fontSize: ".62rem",
                    fontWeight: 700,
                    letterSpacing: ".2em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    borderRadius: ".15rem",
                    transition: "all .3s",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    const b = e.currentTarget as HTMLButtonElement;
                    b.style.borderColor =
                      bgMode === "light"
                        ? "rgba(0,0,0,.45)"
                        : "rgba(255,255,255,.45)";
                    b.style.color = bgMode === "light" ? "#000" : "#fff";
                  }}
                  onMouseLeave={(e) => {
                    const b = e.currentTarget as HTMLButtonElement;
                    b.style.borderColor =
                      bgMode === "light"
                        ? "rgba(0,0,0,.18)"
                        : "rgba(255,255,255,.18)";
                    b.style.color = bgMode === "light" ? LIGHT.body : DARK.body;
                  }}
                >
                  View Our Model
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
