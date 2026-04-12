"use client";

import Footer from "@/components/Footer";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const loopSteps = [
  { num: "01", icon: "energy_savings_leaf", title: "Ingestion", desc: "Capturing energy surplus to power the next phase of the ecosystem." },
  { num: "02", icon: "biotech", title: "Synthesis", desc: "Converting natural inputs into high-performance sustainable assets." },
  { num: "03", icon: "foundation", title: "Deployment", desc: "Integrating structures that actively enhance their surrounding biome." },
  { num: "04", icon: "autorenew", title: "Rebirth", desc: "Closing the cycle where end-of-life becomes new nutrient-dense beginnings." },
];

const W = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 5rem", ...style }}>{children}</div>
);

export default function PhilosophyPage() {
  const heroRef   = useRef<HTMLDivElement>(null);
  const deepRef   = useRef<HTMLElement>(null);
  const loopRef   = useRef<HTMLElement>(null);
  const ctaRef    = useRef<HTMLElement>(null);
  const loopGridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero entrance
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll(".hero-child"),
        { y: 70, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.18, duration: 1.1, ease: "power3.out", delay: 0.25 }
      );
    }

    // Scroll BG transitions
    const bgSections = [
      { el: deepRef.current,  from: "#000", to: "#000", color: "#fff" },
      { el: loopRef.current,  from: "#000", to: "#131313", color: "#fff" },
      { el: ctaRef.current,   from: "#131313", to: "#000", color: "#fff" },
    ];
    bgSections.forEach(({ el, to, color }) => {
      if (!el) return;
      ScrollTrigger.create({
        trigger: el, start: "top 60%", once: true,
        onEnter: () => gsap.to(el, { backgroundColor: to, color, duration: 0.7 }),
      });
    });

    // Deep-dive reveals
    if (deepRef.current) {
      ScrollTrigger.create({
        trigger: deepRef.current, start: "top 72%", once: true,
        onEnter: () => gsap.fromTo(
          deepRef.current!.querySelectorAll(".reveal"),
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out" }
        ),
      });
    }

    // Loop grid
    if (loopGridRef.current) {
      ScrollTrigger.create({
        trigger: loopGridRef.current, start: "top 75%", once: true,
        onEnter: () => gsap.fromTo(
          loopGridRef.current!.querySelectorAll(".loop-card"),
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.12, duration: 0.85, ease: "power3.out" }
        ),
      });
    }
  }, []);

  return (
    <div style={{ background: "#000", color: "#fff" }}>

      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuApkHP08yex_lTnONCFOtPTjwwaFSKh60EOMWoSPk29izgQCg28fnxdkIYj6mkjtzcwhJAAgeXJvhJASPSLH8W3Ahxx_dtvhLprwiCQL1UUqrh17vQIPg8k_1aeQvMjd5LlrG82tWAeV5hAce41WfXYhZlCZu1W00W7OJWamgrdR2qLcqEYIJtmpk0bc7NcHbmJcxoxDjQ_NT39Rzk-g9r0rLllL_U-QeT7AwsaUeaCmszi9ThVTj4QGp5NFs69OG0ReYKPwYGFyJM"
            alt="Forest villa" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.55 }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,.95) 100%)" }} />
        </div>
        <W style={{ position: "relative", zIndex: 10, paddingTop: "10rem", paddingBottom: "6rem" }}>
          <div ref={heroRef}>
            <div className="hero-child" style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
              <span style={{ height: 1, width: 48, background: "#C5A059", display: "inline-block" }} />
              <span style={{ fontFamily: "var(--font-inter),sans-serif", fontSize: ".6rem", fontWeight: 700, letterSpacing: ".22em", textTransform: "uppercase", color: "#C5A059" }}>Our Philosophy</span>
            </div>
            <h1 className="hero-child" style={{ fontFamily: "var(--font-epilogue),sans-serif", fontWeight: 900, fontSize: "clamp(2.8rem,5.5vw,6rem)", textTransform: "uppercase", letterSpacing: "-.03em", lineHeight: 1.05, color: "#fff", marginBottom: "2rem" }}>
              Growth Should Not<br />
              <span style={{ color: "#C5A059" }}>Extract Value —</span><br />
              It Should <em style={{ color: "#C5A059" }}>Regenerate</em> It
            </h1>
            <p className="hero-child" style={{ fontFamily: "var(--font-body)", fontSize: "1.15rem", color: "rgba(255,255,255,.7)", maxWidth: 680, lineHeight: 1.75, marginBottom: "3rem" }}>
              We believe in a world where human progress and nature are not opponents, but partners in an infinite cycle of creation. We design ecosystems where energy powers agriculture, agriculture restores soil, soil enhances biodiversity.
            </p>
            <div className="hero-child" style={{ display: "flex", gap: "4rem" }}>
              {[["3x","Revenue Per Acre"],["0.0","Waste Output"]].map(([v,l]) => (
                <div key={l}>
                  <div style={{ fontFamily: "var(--font-epilogue),sans-serif", fontSize: "clamp(2.5rem,4vw,4rem)", fontWeight: 900, color: "#C5A059", lineHeight: 1 }}>{v}</div>
                  <div style={{ fontFamily: "var(--font-inter),sans-serif", fontSize: ".58rem", fontWeight: 700, letterSpacing: ".22em", textTransform: "uppercase", color: "rgba(255,255,255,.4)", marginTop: ".5rem" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </W>
      </section>

      {/* ── DEEP DIVE ── */}
      <section ref={deepRef} style={{ background: "#000", color: "#fff", padding: "8rem 0" }}>
        <W>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start" }}>
            {/* Left — sticky text */}
            <div style={{ position: "sticky", top: "8rem" }}>
              <h2 className="reveal" style={{ fontFamily: "var(--font-epilogue),sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem,2.8vw,3rem)", textTransform: "uppercase", letterSpacing: "-.03em", lineHeight: 1.15, marginBottom: "2rem", opacity: 0 }}>
                At Gugri Industries, we don't just build projects —{" "}
                <span style={{ color: "#C5A059", textDecoration: "underline", textUnderlineOffset: 8, textDecorationColor: "rgba(197,160,89,.4)" }}>we cultivate living systems.</span>
              </h2>
              <p className="reveal" style={{ color: "rgba(255,255,255,.5)", lineHeight: 1.8, marginBottom: "2.5rem", opacity: 0 }}>
                Our philosophy is rooted in the understanding that nature's greatest strength lies in its cycles: nothing is wasted, everything regenerates. We translate this wisdom into multi-layer land use strategies.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { title: "Harmony", desc: "A perfect balance between human progress and the natural world." },
                  { title: "Wealth Creation", desc: "Regenerative wealth that compounds through ecological health." },
                ].map(item => (
                  <div key={item.title} className="reveal pillar-card" style={{ padding: "2rem 2.5rem", background: "rgba(19,19,19,.7)", borderRadius: ".25rem", opacity: 0 }}>
                    <h4 style={{ fontFamily: "var(--font-epilogue),sans-serif", fontWeight: 900, fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "-.01em", marginBottom: ".6rem" }}>{item.title}</h4>
                    <p style={{ color: "rgba(255,255,255,.4)", fontSize: ".85rem", lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — image */}
            <div className="reveal" style={{ opacity: 0 }}>
              <div style={{ position: "relative", borderRadius: ".25rem", overflow: "hidden", aspectRatio: "4/5" }}>
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL1y_4kmTWDPOP2ga1uxCy3JknZQoHrhewAl2oKAK_qNmPG5oRulCCYoV1ROziYCjH-PGP7UxkrOYQSe6XRXNmgGwvoTE3fl2ZR3yRwmTYc-C8kcaDnc0uUVAQYb76zZ4xyjK5kjijmtETwyKw3LW9WbthnyQqKl1SWBJFkOnyez6FXDFFz_2WrkXp9LOnTKSb1ztjiWC1JrBFiFR2Djtl00bTzV5yuFeX9UXhuTeJInhPXMVIOtLC5Yd5RXFIcXVffosb8Pf-rkE"
                  alt="Timber cabin" style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ marginTop: "2rem", padding: "2rem 2.5rem", background: "rgba(19,19,19,.8)", borderRadius: ".25rem", border: "1px solid rgba(255,255,255,.07)" }}>
                <p style={{ fontFamily: "var(--font-epilogue),sans-serif", fontStyle: "italic", fontSize: "1.1rem", color: "#C5A059" }}>"Calm, intelligent, futuristic sustainability."</p>
              </div>
            </div>
          </div>
        </W>
      </section>

      {/* ── INFINITE LOOP ── */}
      <section ref={loopRef} style={{ background: "#131313", padding: "8rem 0" }}>
        <W>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontFamily: "var(--font-epilogue),sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem,5vw,5.5rem)", textTransform: "uppercase", letterSpacing: "-.04em" }}>
              The <span style={{ color: "#C5A059" }}>Infinite Loop</span>
            </h2>
            <p style={{ fontFamily: "var(--font-inter),sans-serif", fontSize: ".6rem", fontWeight: 700, letterSpacing: ".3em", textTransform: "uppercase", color: "rgba(255,255,255,.3)", marginTop: ".75rem" }}>Our Circularity Blueprint</p>
          </div>
          <div ref={loopGridRef} style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1rem" }}>
            {loopSteps.map(s => (
              <div key={s.num} className="loop-card pillar-card" style={{ background: "rgba(0,0,0,.5)", borderRadius: ".25rem", padding: "3rem 2.5rem", display: "flex", flexDirection: "column", gap: "2rem", cursor: "default", opacity: 0 }}>
                <span style={{ fontFamily: "var(--font-inter),sans-serif", fontSize: ".55rem", fontWeight: 700, letterSpacing: ".3em", textTransform: "uppercase", color: "rgba(255,255,255,.28)" }}>{s.num} / Process</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <span className="material-symbols-outlined" style={{ color: "#C5A059", fontSize: 36 }}>{s.icon}</span>
                  <h3 style={{ fontFamily: "var(--font-epilogue),sans-serif", fontWeight: 900, fontSize: "1.3rem", textTransform: "uppercase" }}>{s.title}</h3>
                </div>
                <p style={{ color: "rgba(255,255,255,.38)", fontSize: ".82rem", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </W>
      </section>

      {/* ── CTA ── */}
      <section ref={ctaRef} style={{ background: "#000", padding: "8rem 0" }}>
        <W>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center", background: "#131313", border: "1px solid rgba(255,255,255,.06)", borderRadius: ".25rem", padding: "5rem" }}>
            <div>
              <h2 style={{ fontFamily: "var(--font-epilogue),sans-serif", fontWeight: 900, fontSize: "clamp(2.2rem,3.5vw,4rem)", textTransform: "uppercase", letterSpacing: "-.03em", lineHeight: 1.1, marginBottom: "1.5rem" }}>
                Join the <br /><span style={{ color: "#C5A059" }}>Regeneration.</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,.5)", lineHeight: 1.8, marginBottom: "2.5rem" }}>Experience the alchemy of high luxury and planetary healing. Partner with Gugri Industries.</p>
              <a href="/connect" style={{ display: "inline-flex", alignItems: "center", gap: ".75rem", background: "#fff", color: "#000", fontFamily: "var(--font-inter),sans-serif", fontSize: ".65rem", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", padding: "1.1rem 2.5rem", textDecoration: "none", transition: "background .3s, color .3s" }}
                onMouseEnter={e => { const el = e.currentTarget; el.style.background = "#C5A059"; }}
                onMouseLeave={e => { const el = e.currentTarget; el.style.background = "#fff"; }}
              >
                Inquire Now <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
              </a>
            </div>
            <div style={{ borderRadius: ".25rem", overflow: "hidden", aspectRatio: "4/5" }}>
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCepr3IZ5MY3BmKN3p3y5_daHUtuB5h2sQw86JRoFyIGm-1tRNdonqB7xXEokD6xULYXIugfWM9lpkySjqW1NEAHIIKeaSBYx-49upr3G0e4ggy45QfOPdaCHEfKz0gQUAzN8JXYddcns9sG1kfvdfnlcrY4MMt3xl2Pl_8rjZdqefZoYZFNpKNkqDJl_o_yNSkutu7W9V0U75f9-NVc8J6QZc3FkHJtdTlql0_EqERf1DhkGacnb1ZtOuzJgZz3NUwCJR3MIA7ZbM"
                alt="Forest estate" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .7s" }}
                onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)")}
                onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
              />
            </div>
          </div>
        </W>
      </section>

      <Footer />
    </div>
  );
}