"use client";

import Footer from "@/components/Footer";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const W = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 5rem", ...style }}>{children}</div>
);

const specItems = [
  { icon: "eco",          title: "Our Cyclic Innovation Model",  desc: "This model mirrors perfection. This is not growth through extraction. This is growth through regeneration." },
  { icon: "architecture", title: "Architectural Symbiosis",      desc: "Every structure becomes an active participant in its ecosystem, filtering water and generating carbon-negative outputs." },
  { icon: "vital_signs",  title: "Ecosystem Resilience",         desc: "Building land value by restoring the fundamental biological systems that sustain life and industry." },
];

export default function InnovationPage() {
  const heroRef  = useRef<HTMLElement>(null);
  const bentoRef = useRef<HTMLElement>(null);
  const specRef  = useRef<HTMLElement>(null);
  const ctaRef   = useRef<HTMLElement>(null);

  useGSAP(() => {
    /* Hero entrance */
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll(".h-anim"),
        { y: 72, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 1.1, ease: "power3.out", delay: 0.28 }
      );
    }

    /* Bento grid */
    if (bentoRef.current) {
      ScrollTrigger.create({
        trigger: bentoRef.current, start: "top 75%", once: true,
        onEnter: () =>
          gsap.fromTo(
            bentoRef.current!.querySelectorAll(".b-anim"),
            { y: 48, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.12, duration: 0.88, ease: "power3.out" }
          ),
      });
    }

    /* Spec items slide in from left */
    if (specRef.current) {
      ScrollTrigger.create({
        trigger: specRef.current, start: "top 72%", once: true,
        onEnter: () =>
          gsap.fromTo(
            specRef.current!.querySelectorAll(".sp-anim"),
            { x: -36, opacity: 0 },
            { x: 0, opacity: 1, stagger: 0.14, duration: 0.78, ease: "power3.out" }
          ),
      });
    }

    /* CTA fade up */
    if (ctaRef.current) {
      ScrollTrigger.create({
        trigger: ctaRef.current, start: "top 78%", once: true,
        onEnter: () =>
          gsap.fromTo(
            ctaRef.current!.querySelectorAll(".c-anim"),
            { y: 36, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.12, duration: 0.8, ease: "power3.out" }
          ),
      });
    }
  }, []);

  return (
    <div style={{ background: "#000", color: "#fff" }}>

      {/* HERO */}
      <section
        ref={heroRef}
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* BG image — right-side focus */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8HMypfF_QhksC0tK3FBPdwVexMbt5pz_gpsJIIqqZi4LkMhjypjIovrF16A5cAh5ngcY1NALQOuJTm9446eipo7hRB-Ov1lS-K_ddQ02p4fGbh5L9LKoACLhr7fUObGfOXao7KNOPfYvlHHVIsDrFhUsvNZSTd3SCvW89SxxXgomaju-eyDfSQBOs5ukqVM-XKpEnM-vkIY1g87QQvmGM6D-VKtpRyE4_pH9L4X9CCcVG469Lp4nNnimeg9N8RdB1vlM1KyDqVvY"
            alt="Circuit board"
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }}
          />
          {/* Left-side dark fade so text is readable */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #000 0%, rgba(0,0,0,.65) 50%, transparent 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #000 0%, transparent 40%)" }} />
        </div>

        {/* Text content — left-aligned with button on right side */}
        <W style={{ position: "relative", zIndex: 1, paddingTop: "10rem", paddingBottom: "7rem", width: "100%" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "4rem" }}>
            {/* Left side - Text content */}
            <div style={{ maxWidth: 700, flex: 1 }}>
              {/* Eyebrow */}
              <div className="h-anim" style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.75rem", opacity: 0 }}>
                <span style={{ display: "inline-block", width: 48, height: 1, background: "#C5A059" }} />
                <span style={{ fontFamily: "var(--font-label)", fontSize: ".62rem", fontWeight: 700, letterSpacing: ".22em", textTransform: "uppercase", color: "#C5A059" }}>
                  Intelligence That Nurtures
                </span>
              </div>

              {/* Headline — matches screenshot: 3-line stacked, very large */}
              <h1
                className="h-anim"
                style={{
                  fontFamily: "var(--font-epilogue), sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(3rem, 7.5vw, 8rem)",
                  textTransform: "uppercase",
                  letterSpacing: "-.045em",
                  lineHeight: 0.95,
                  marginBottom: "1.75rem",
                  opacity: 0,
                }}
              >
                The Infinite Loop of<br />
                <em style={{ color: "#C5A059", fontStyle: "italic" }}>Regenerative Value.</em>
              </h1>

              {/* Body */}
              <p className="h-anim" style={{ fontSize: "1.05rem", color: "rgba(255,255,255,.55)", lineHeight: 1.8, maxWidth: 480, marginBottom: "2.5rem", opacity: 0 }}>
                Our cyclic model replaces linear extraction with regenerative loops — where every output becomes an input for the next cycle of growth.
              </p>
            </div>

            {/* Right side - Explore Systems Button */}
            <div className="h-anim" style={{ opacity: 0, marginBottom: "2rem" }}>
              <button
                style={{
                  display: "inline-flex", alignItems: "center", gap: ".75rem",
                  padding: ".95rem 2.2rem",
                  border: "1px solid rgba(255,255,255,.4)",
                  background: "transparent", color: "#fff",
                  fontFamily: "var(--font-label)", fontSize: ".62rem", fontWeight: 700,
                  letterSpacing: ".2em", textTransform: "uppercase",
                  cursor: "pointer", transition: "all .3s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = "#fff"; b.style.color = "#000"; b.style.borderColor = "#fff"; }}
                onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = "transparent"; b.style.color = "#fff"; b.style.borderColor = "rgba(255,255,255,.4)"; }}
              >
                Explore Systems
                <span className="material-symbols-outlined" style={{ fontSize: 17 }}>arrow_forward</span>
              </button>
            </div>
          </div>
        </W>
      </section>

      {/* BENTO GRID  */}
      <section ref={bentoRef} style={{ background: "#131313", padding: "6rem 0" }}>
        <W>
          <div style={{ display: "grid", gridTemplateColumns: "1.75fr 1fr", gap: "1.25rem" }}>

            {/* Large card — solar panels image */}
            <div
              className="b-anim"
              style={{
                position: "relative", height: 580, borderRadius: ".5rem",
                overflow: "hidden", background: "#18181b",
                border: "1px solid rgba(255,255,255,.06)", opacity: 0,
              }}
              onMouseEnter={e => { const img = e.currentTarget.querySelector("img") as HTMLImageElement; if (img) img.style.transform = "scale(1.05)"; }}
              onMouseLeave={e => { const img = e.currentTarget.querySelector("img") as HTMLImageElement; if (img) img.style.transform = "scale(1)"; }}
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYxO9LGVq630sLcF5T6sYvFa9fqbUJRDg7AKjvwRNcQT5rNfK7grs_wyVBOlSXTjAwBnf7UF9CQLtvt9ayunNleeXBnurff8uOp4Xrc4IPt36FzUytMexTUmMvGoaoz_O3pqyyqK_Sznx1CF1uryPc021oM2WcfLL1ra-A68i2qz5Ld_2g8wofNtKhtMprQoXH3Fc9PGB27XujTfOCY0d_byXcHtRAQR2DKJL4gi0pGtr92Jsb6E_Uo8Ahcwf9AFgOA8uEnnfTOyQ"
                alt="Solar panels"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.42, transition: "transform .7s ease" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #000 0%, rgba(0,0,0,.18) 55%, transparent 100%)" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, padding: "3rem" }}>
                <span style={{ fontFamily: "var(--font-label)", fontSize: ".57rem", fontWeight: 700, letterSpacing: ".25em", textTransform: "uppercase", color: "#C5A059", display: "block", marginBottom: "1.25rem" }}>Cyclic Value</span>
                <h2 style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 900, fontSize: "clamp(1.4rem, 2.8vw, 2.6rem)", textTransform: "uppercase", letterSpacing: "-.03em", lineHeight: 1.1, marginBottom: "1rem" }}>
                  Energy, Agriculture, Soil &amp; Bio, Land Value
                </h2>
                <p style={{ color: "rgba(255,255,255,.52)", fontSize: ".84rem", lineHeight: 1.75, maxWidth: 480, marginBottom: "1.5rem" }}>
                  How Nature&apos;s Wisdom Becomes Our Strategy: In nature, there is no waste. Every fallen leaf feeds the soil, every raindrop nurtures growth, every sunset stores energy for tomorrow.
                </p>
                <div style={{ display: "flex", gap: ".75rem" }}>
                  {["Circular", "Bio-Integrated"].map(t => (
                    <span key={t} style={{ padding: ".32rem 1rem", borderRadius: 999, border: "1px solid rgba(255,255,255,.15)", fontFamily: "var(--font-label)", fontSize: ".55rem", fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: "rgba(255,255,255,.38)" }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column — two stacked cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

              {/* Regenerative Growth */}
              <div
                className="b-anim"
                style={{
                  flex: 1, background: "#18181b", borderRadius: ".5rem",
                  padding: "2.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between",
                  borderLeft: "4px solid #C5A059", border: "1px solid rgba(255,255,255,.07)",
                  borderLeftWidth: 4, borderLeftColor: "#C5A059",
                  position: "relative", overflow: "hidden", opacity: 0,
                }}
              >
                {/* Watermark icon */}
                <div style={{ position: "absolute", right: -16, top: -16, opacity: .07 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 120 }}>recycling</span>
                </div>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <span className="material-symbols-outlined" style={{ color: "#C5A059", fontSize: 36, display: "block", marginBottom: "1.25rem" }}>bolt</span>
                  <h3 style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 900, fontSize: "1.25rem", textTransform: "uppercase", letterSpacing: "-.01em", marginBottom: ".75rem" }}>Regenerative Growth</h3>
                  <p style={{ color: "rgba(255,255,255,.38)", fontSize: ".82rem", lineHeight: 1.75 }}>
                    Energy powers precision agriculture. Agriculture restores and enriches the soil. Healthy soil enhances biodiversity.
                  </p>
                </div>
              </div>

              {/* Compound Wealth */}
              <div
                className="b-anim"
                style={{
                  flex: 1, borderRadius: ".5rem", padding: "2.5rem",
                  display: "flex", flexDirection: "column", justifyContent: "space-between",
                  position: "relative", overflow: "hidden",
                  border: "1px solid rgba(255,255,255,.07)", background: "rgba(24,24,27,.65)",
                  cursor: "pointer", opacity: 0,
                }}
                onMouseEnter={e => { const img = e.currentTarget.querySelector("img") as HTMLImageElement; if (img) img.style.transform = "scale(1.1)"; }}
                onMouseLeave={e => { const img = e.currentTarget.querySelector("img") as HTMLImageElement; if (img) img.style.transform = "scale(1)"; }}
              >
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKJr-1j6vHCaUxT-8CUXjckoHkolhPtjkYzEVdD6vd3fuJpZlo_FnREVtBifDS2DfFlnRWyhkjp1Kgidgz-TpMwgp3pFgiBUvGPR1rrHWodMb8_1xEoJ3_hCeiyEI8xoRlMQLvVWrkZ7x67sOUkIR2KTJugeHYpuERSBLRgvPxnLI9lfz5gu2UX2g6qliyBP36gk4X5BMRX7S61mpGUl7MSJhf51ABFYzKN0LZptE5sjIHrqvgxQ_UNwKxxICzywYk2pUldTLxbf4"
                  alt="Soil sensor"
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: .2, transition: "transform .5s ease" }}
                />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <h3 style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 900, fontSize: "1.25rem", textTransform: "uppercase", color: "#C5A059", marginBottom: ".75rem" }}>Compound Wealth</h3>
                  <p style={{ color: "rgba(255,255,255,.38)", fontSize: ".82rem", lineHeight: 1.75 }}>
                    Rich biodiversity increases the intrinsic and economic value of the land. Each revolution stronger than the last.
                  </p>
                </div>
                <span className="material-symbols-outlined" style={{ color: "#C5A059", fontSize: 22, alignSelf: "flex-end", position: "relative", zIndex: 1 }}>all_inclusive</span>
              </div>
            </div>
          </div>
        </W>
      </section>

      {/* GROWTH THROUGH REGENERATION  */}
      <section ref={specRef} style={{ background: "#000", padding: "7rem 0" }}>
        <W>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>

            {/* Left — headline + spec list */}
            <div>
              <h2
                className="sp-anim"
                style={{
                  fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 900,
                  fontSize: "clamp(2rem, 3.5vw, 3.5rem)", textTransform: "uppercase",
                  letterSpacing: "-.035em", lineHeight: 1.1, marginBottom: "3rem", opacity: 0,
                }}
              >
                Growth Through<br /><span style={{ color: "#C5A059" }}>Regeneration</span>
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                {specItems.map(item => (
                  <div key={item.title} className="sp-anim" style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start", opacity: 0 }}>
                    <div style={{ flexShrink: 0, width: 44, height: 44, borderRadius: ".375rem", background: "#131313", border: "1px solid rgba(255,255,255,.07)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span className="material-symbols-outlined" style={{ color: "#C5A059", fontSize: 20 }}>{item.icon}</span>
                    </div>
                    <div>
                      <h4 style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 900, fontSize: ".95rem", textTransform: "uppercase", letterSpacing: "-.01em", marginBottom: ".5rem" }}>{item.title}</h4>
                      <p style={{ color: "rgba(255,255,255,.38)", fontSize: ".84rem", lineHeight: 1.75 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — spinning ring + image */}
            <div className="sp-anim" style={{ position: "relative", opacity: 0 }}>
              {/* Spinning orbit */}
              <div style={{
                position: "absolute",
                inset: -40,
                borderRadius: "50%",
                border: "1px solid rgba(197,160,89,.12)",
                animation: "spin-slow 22s linear infinite",
              }} />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyR4wFE0hQxcPrrpfNMze78V44VR63hhdFoMz4-cyRNUoJtZsitJgg2pZgNDLGVAd9ClSi6QWg0Zb_KV85YHCv_poqB2Q_2QPvVtge9VFJtFeQBqJHX55xEEO48HQ1gCQis3SHkgJReZFeLpADVPRJiC0zKXtLk5LA-Pf2giGMR2sctg7gY2fGeNdv2QbtHj5CPWVixfS9QAL5csQoNtUbWuflP5pwmkxqqNuMN7j8-ev5koko_Zwv30LDluiXbhpT2WulsgOcHag"
                alt="Robotic arm"
                style={{ position: "relative", zIndex: 1, width: "100%", borderRadius: ".75rem", boxShadow: "0 32px 80px rgba(0,0,0,.8)", filter: "grayscale(1)", transition: "filter .7s" }}
                onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.filter = "grayscale(0)")}
                onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.filter = "grayscale(1)")}
              />
            </div>
          </div>
        </W>
      </section>

      {/* ENTER THE LOOP CTA  */}
      <section ref={ctaRef} style={{ background: "linear-gradient(to bottom, #000 0%, #131313 100%)", padding: "8rem 0", textAlign: "center", position: "relative", overflow: "hidden" }}>
        {/* Ambient glow */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 700, background: "rgba(197,160,89,.04)", borderRadius: "50%", filter: "blur(120px)", pointerEvents: "none" }} />

        <W style={{ position: "relative", zIndex: 1 }}>
          <h2 className="c-anim" style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 900, fontSize: "clamp(3rem, 6vw, 6rem)", textTransform: "uppercase", letterSpacing: "-.04em", marginBottom: "1.25rem", opacity: 0 }}>
            Enter the Loop
          </h2>
          <p className="c-anim" style={{ color: "rgba(255,255,255,.38)", fontSize: "1.05rem", marginBottom: "3rem", maxWidth: 480, margin: "0 auto 3rem", lineHeight: 1.8, opacity: 0 }}>
            Partner with Gugri Industries to deploy regenerative technology at a global scale.
          </p>
          <div className="c-anim" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", opacity: 0 }}>
            <a
              href="/connect"
              style={{ padding: "1.1rem 2.8rem", background: "#C5A059", color: "#000", fontFamily: "var(--font-label)", fontSize: ".62rem", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", textDecoration: "none", borderRadius: ".375rem", transition: "filter .25s" }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1.1)")}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.filter = "none")}
            >
              Inquire Now
            </a>
            <button
              style={{ padding: "1.1rem 2.8rem", background: "transparent", border: "1px solid rgba(255,255,255,.22)", color: "#fff", fontFamily: "var(--font-label)", fontSize: ".62rem", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", cursor: "pointer", borderRadius: ".375rem", transition: "background .3s, color .3s" }}
              onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = "#fff"; b.style.color = "#000"; }}
              onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = "transparent"; b.style.color = "#fff"; }}
            >
              View Patent Portfolio
            </button>
          </div>
        </W>
      </section>

      <Footer />
    </div>
  );
}