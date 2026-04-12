"use client";

import Footer from "@/components/Footer";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const W = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => (
  <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 5rem", ...style }}>
    {children}
  </div>
);

export default function TechnologyPage() {
  const heroRef      = useRef<HTMLElement>(null);
  const pillarsRef   = useRef<HTMLElement>(null);
  const satelliteRef = useRef<HTMLElement>(null);
  const ctaRef       = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll(".h-anim"),
        { y: 72, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 1.1, ease: "power3.out", delay: 0.28 }
      );
    }
    if (pillarsRef.current) {
      ScrollTrigger.create({
        trigger: pillarsRef.current,
        start: "top 75%",
        once: true,
        onEnter: () =>
          gsap.fromTo(
            pillarsRef.current!.querySelectorAll(".p-anim"),
            { y: 48, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.13, duration: 0.88, ease: "power3.out" }
          ),
      });
    }

    if (satelliteRef.current) {
      ScrollTrigger.create({
        trigger: satelliteRef.current,
        start: "top 72%",
        once: true,
        onEnter: () =>
          gsap.fromTo(
            satelliteRef.current!.querySelectorAll(".s-anim"),
            { x: -44, opacity: 0 },
            { x: 0, opacity: 1, stagger: 0.16, duration: 0.82, ease: "power3.out" }
          ),
      });
    }

    if (ctaRef.current) {
      ScrollTrigger.create({
        trigger: ctaRef.current,
        start: "top 80%",
        once: true,
        onEnter: () =>
          gsap.fromTo(
            ctaRef.current!.querySelectorAll(".c-anim"),
            { y: 36, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.12, duration: 0.8, ease: "power3.out" }
          ),
      });
    }
  }, []);

  /* ── shared card base ── */
  const card: React.CSSProperties = {
    background: "rgba(19,19,19,0.6)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: ".375rem",
    transition: "border-color .55s",
  };

  return (
    <div style={{ background: "#000", color: "#fff" }}>
      <section ref={heroRef} style={{ padding: "11rem 0 5rem" }}>
        <W>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
            <div>
              <h1
                className="h-anim"
                style={{
                  fontFamily: "var(--font-epilogue), sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(3rem, 7vw, 7.5rem)",
                  textTransform: "uppercase",
                  letterSpacing: "-.045em",
                  lineHeight: 0.95,
                  marginBottom: "1.75rem",
                  opacity: 0,
                }}
              >
                Intelligence<br />
                That{" "}
                <em style={{ color: "#C5A059", fontStyle: "italic" }}>Nurtures</em>
              </h1>
              <p
                className="h-anim"
                style={{
                  color: "rgba(255,255,255,.52)",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  maxWidth: 480,
                  opacity: 0,
                }}
              >
                Our technology stack transforms raw environmental data into
                actionable insights — enabling precision agriculture at scale.
              </p>
            </div>
            <div
              className="h-anim"
              style={{
                aspectRatio: "4/5",
                borderRadius: ".375rem",
                overflow: "hidden",
                filter: "grayscale(1)",
                transition: "filter .7s",
                border: "1px solid rgba(255,255,255,.06)",
                opacity: 0,
              }}
              onMouseEnter={e =>
                ((e.currentTarget as HTMLDivElement).style.filter = "grayscale(0)")
              }
              onMouseLeave={e =>
                ((e.currentTarget as HTMLDivElement).style.filter = "grayscale(1)")
              }
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYxO9LGVq630sLcF5T6sYvFa9fqbUJRDg7AKjvwRNcQT5rNfK7grs_wyVBOlSXTjAwBnf7UF9CQLtvt9ayunNleeXBnurff8uOp4Xrc4IPt36FzUytMexTUmMvGoaoz_O3pqyyqK_Sznx1CF1uryPc021oM2WcfLL1ra-A68i2qz5Ld_2g8wofNtKhtMprQoXH3Fc9PGB27XujTfOCY0d_byXcHtRAQR2DKJL4gi0pGtr92Jsb6E_Uo8Ahcwf9AFgOA8uEnnfTOyQ"
                alt="Forest sensors"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </W>
      </section>
      <section ref={pillarsRef} style={{ padding: "2rem 0 7rem" }}>
        <W>
          <div style={{ marginBottom: "3.5rem" }}>
            <span
              style={{
                fontFamily: "var(--font-label)",
                fontSize: ".58rem",
                fontWeight: 700,
                letterSpacing: ".28em",
                textTransform: "uppercase",
                color: "#C5A059",
                display: "block",
                marginBottom: ".9rem",
              }}
            >
              Core Frameworks
            </span>
            <h2
              style={{
                fontFamily: "var(--font-epilogue), sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 5.5vw, 6rem)",
                textTransform: "uppercase",
                letterSpacing: "-.045em",
                lineHeight: 1,
              }}
            >
              Technological Pillars
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "auto auto",
              gap: "1rem",
            }}
          >
            <div
              className="p-anim"
              style={{ ...card, padding: "2.75rem", position: "relative", overflow: "hidden", minHeight: 380, display: "flex", flexDirection: "column", justifyContent: "space-between", opacity: 0 }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(197,160,89,.4)";
                const img = e.currentTarget.querySelector(".bg-img") as HTMLImageElement;
                if (img) img.style.opacity = ".38";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,.06)";
                const img = e.currentTarget.querySelector(".bg-img") as HTMLImageElement;
                if (img) img.style.opacity = ".18";
              }}
            >
              <img
                className="bg-img"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaKrAhtBSJ5hMECytCqTFdUNSo5HqvCi48KFbSiihcJNQro-kHBvR4TEmBRWXYsr1vbUxcVb6oQNL-p_JIU6kkTkKBEUmorh9-6t-KzFYhsvRnOZNlAS6NpL3UodjoyBfk2yudMX3c3nadTAza9XLZgPi5lPjGJisle6svQS6TvMRtD2JfWHF7xphewWe-fvgulXsx0hl8Y9nxeC5iChIpruLofstj4aQwiRmyomMSHULUDdlllSuKrbY1vJBQZ0VthLKWZ7f2SD4"
                alt=""
                style={{
                  position: "absolute", right: 0, bottom: 0,
                  width: "60%", height: "100%",
                  objectFit: "cover", objectPosition: "left",
                  opacity: .18, transition: "opacity .7s", pointerEvents: "none",
                }}
              />
            
              <div style={{ position: "relative", zIndex: 1 }}>
                <span className="material-symbols-outlined" style={{ color: "#C5A059", fontSize: 38, display: "block", marginBottom: "1.25rem" }}>analytics</span>
                <h3 style={{ fontFamily: "var(--font-epilogue),sans-serif", fontWeight: 900, fontSize: "clamp(1.3rem,2vw,1.8rem)", textTransform: "uppercase", letterSpacing: "-.02em", marginBottom: "1rem" }}>
                  Data-Driven Agriculture
                </h3>
                <p style={{ color: "rgba(255,255,255,.38)", fontSize: ".84rem", lineHeight: 1.75, maxWidth: 340 }}>
                  Soil sensors, satellite imaging, and AI-powered crop health analysis for precision farming decisions.
                </p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: ".65rem", position: "relative", zIndex: 1 }}>
                <span style={{ fontFamily: "var(--font-label)", fontSize: ".58rem", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: "#C5A059" }}>
                  Explore Dataset
                </span>
                <span className="material-symbols-outlined" style={{ color: "#C5A059", fontSize: 15 }}>arrow_forward</span>
              </div>
            </div>
            <div
              className="p-anim"
              style={{ ...card, padding: "2.75rem", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 380, opacity: 0 }}
              onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(197,160,89,.4)")}
              onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,.06)")}
            >
              <div>
                <span className="material-symbols-outlined" style={{ color: "#C5A059", fontSize: 30, display: "block", marginBottom: "1.25rem" }}>sensors</span>
                <h3 style={{ fontFamily: "var(--font-epilogue),sans-serif", fontWeight: 900, fontSize: "1.35rem", textTransform: "uppercase", letterSpacing: "-.01em", marginBottom: "1rem" }}>
                  Automation &amp; Monitoring
                </h3>
                <p style={{ color: "rgba(255,255,255,.38)", fontSize: ".82rem", lineHeight: 1.75 }}>
                  IoT-enabled real-time monitoring of irrigation, energy output, soil moisture, and micro-climate conditions.
                </p>
              </div>
              <div style={{ borderTop: "1px solid rgba(255,255,255,.06)", paddingTop: "1.5rem", marginTop: "1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: ".6rem" }}>
                  <span style={{ fontFamily: "var(--font-label)", fontSize: ".57rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(255,255,255,.35)" }}>
                    Active Nodes
                  </span>
                  <span style={{ fontFamily: "var(--font-label)", fontSize: ".7rem", fontWeight: 700, color: "#C5A059" }}>14,209</span>
                </div>
                <div style={{ height: 4, background: "rgba(255,255,255,.06)", borderRadius: 2, overflow: "hidden" }}>
                  <div style={{ width: "75%", height: "100%", background: "#C5A059", borderRadius: 2 }} />
                </div>
              </div>
            </div>
            <div
              className="p-anim"
              style={{ ...card, padding: "2.75rem", display: "flex", flexDirection: "column", minHeight: 320, opacity: 0 }}
              onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(197,160,89,.4)")}
              onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,.06)")}
            >
              <span className="material-symbols-outlined" style={{ color: "#C5A059", fontSize: 28, display: "block", marginBottom: "1.25rem" }}>eco</span>
              <h3 style={{ fontFamily: "var(--font-epilogue),sans-serif", fontWeight: 900, fontSize: "1.25rem", textTransform: "uppercase", letterSpacing: "-.01em", marginBottom: ".9rem" }}>
                Carbon-Linked Systems
              </h3>
              <p style={{ color: "rgba(255,255,255,.38)", fontSize: ".82rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                Verified carbon sequestration tracking and marketplace integration for tradeable carbon credits.
              </p>
              {/* Small image at bottom */}
              <div style={{ marginTop: "auto", height: 100, borderRadius: ".375rem", overflow: "hidden", border: "1px solid rgba(255,255,255,.06)", filter: "grayscale(1)", transition: "filter .5s" }}
                onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.filter = "grayscale(0)")}
                onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.filter = "grayscale(1)")}
              >
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUmcuwKtim9r5rL_8y7eMnOG_Gw9uZXS9t6V0-Mm05eQ1OHUstqbkk7jPQmDDsT4ChCEYKwSFKPR-3fH8l45CcgRI0UfhrSmhOMkeThNDvhGXlvR4mnu9nlUzoyAS7fZ7moKaKCXHT0DouiQVXGfDJF2nDw7izgg_Yov1r9l-zt-vy8mU_VbMLjX3iR85Zun2BvouSNlOjaRM03IPZLpvTBbb6s71uS5BYEvvI3FQ7kyVeHPrJcggQaHmFLIsfNpPmx0vylTtVrp4"
                  alt="Forest"
                  style={{ width: "100%", height: "100%", objectFit: "cover" , objectPosition: "center" }}
                />
              </div>
            </div>

            <div
              className="p-anim"
              style={{
                ...card,
                background: "rgba(19,19,19,.5)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                padding: "2.75rem",
                display: "flex",
                gap: "2.5rem",
                alignItems: "center",
                minHeight: 320,
                opacity: 0,
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(197,160,89,.4)")}
              onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,.06)")}
            >
              <div style={{ flex: 1 }}>
                <h3 style={{ fontFamily: "var(--font-epilogue),sans-serif", fontWeight: 900, fontSize: "1.25rem", textTransform: "uppercase", letterSpacing: "-.01em", marginBottom: "1rem" }}>
                  Weather-Risk Mitigation
                </h3>
                <p style={{ color: "rgba(255,255,255,.38)", fontSize: ".82rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                  Predictive weather modeling and adaptive systems that protect crops and optimize energy generation cycles.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  {[["Prediction Accuracy", "99.4%"], ["Adaptive Response", "Real-time"]].map(([label, val]) => (
                    <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: ".65rem 0", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
                      <span style={{ fontFamily: "var(--font-label)", fontSize: ".55rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(255,255,255,.35)" }}>{label}</span>
                      <span style={{ fontFamily: "var(--font-label)", fontSize: ".7rem", fontWeight: 700, color: "#C5A059" }}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ flexShrink: 0, width: 140, height: 140, background: "#000", borderRadius: ".375rem", border: "1px solid rgba(255,255,255,.1)", padding: "1rem", display: "flex", flexDirection: "column", justifyContent: "center", gap: ".5rem", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(197,160,89,.08) 0%, transparent 100%)" }} />
                {[1, 0.6, 0.8, 1, 0.5, 0.7].map((w, i) => (
                  <div key={i} style={{ height: 3, background: "#C5A059", borderRadius: 2, width: `${w * 100}%`, opacity: 0.2 + w * 0.45 }} />
                ))}
              </div>
            </div>
          </div>
        </W>
      </section>
      <section
        ref={satelliteRef}
        style={{
          background: "rgba(19,19,19,.3)",
          borderTop: "1px solid rgba(255,255,255,.06)",
          borderBottom: "1px solid rgba(255,255,255,.06)",
          padding: "7rem 0",
          marginBottom: "6rem",
        }}
      >
        <W>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
            <div>
              <h2
                className="s-anim"
                style={{
                  fontFamily: "var(--font-epilogue), sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(3rem, 6.5vw, 7rem)",
                  textTransform: "uppercase",
                  letterSpacing: "-.045em",
                  lineHeight: 0.95,
                  marginBottom: "2rem",
                  opacity: 0,
                }}
              >
                Satellite<br />
                <span style={{ color: "#C5A059" }}>Insight</span>.
              </h2>
              <p
                className="s-anim"
                style={{
                  color: "rgba(255,255,255,.38)",
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  maxWidth: 420,
                  opacity: 0,
                }}
              >
                Leveraging planetary-scale data to monitor growth patterns and
                environmental health from low earth orbit, ensuring a balanced
                ecosystem for global sustainability.
              </p>
            </div>
            <div
              className="s-anim"
              style={{
                borderRadius: ".375rem",
                overflow: "hidden",
                aspectRatio: "16/9",
                border: "1px solid rgba(255,255,255,.1)",
                boxShadow: "0 32px 80px rgba(0,0,0,.6)",
                opacity: 0,
              }}
              onMouseEnter={e => {
                const img = e.currentTarget.querySelector("img") as HTMLImageElement;
                if (img) img.style.transform = "scale(1.05)";
              }}
              onMouseLeave={e => {
                const img = e.currentTarget.querySelector("img") as HTMLImageElement;
                if (img) img.style.transform = "scale(1)";
              }}
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRnjLfcKbU7CNVFtaM12HJnd12741xb2ev2eOXPUzv9VUrgYnaS4iSPhYt_LFf-MggD-Kk1_BYC1D6nFH0CQUtU01e2lY1apMhm5Ef9iNC79QbX1ptYKyBvvnvcTnpB9JN9ApFYzSIocR8q1KYN6GvaySmN5_thtBqP2eujBZthvB06HGwsnuPITR6RQq-t-Iolt5oMg0lXe0qPAn-gpq8cO09IWpc4ZffOmvNAvkn_0uSVh4Gs-nJR1tlQ6CsWC8GmyTxGKack00"
                alt="Satellite visualization"
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .7s ease" }}
              />
            </div>
          </div>
        </W>
      </section>
      <section ref={ctaRef} style={{ padding: "0 0 7rem" }}>
        <W>
          <div
            style={{
              background: "rgba(19,19,19,.55)",
              border: "1px solid rgba(255,255,255,.06)",
              borderRadius: ".375rem",
              padding: "5rem 3rem",
              textAlign: "center",
            }}
          >
            <h2
              className="c-anim"
              style={{
                fontFamily: "var(--font-epilogue), sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2rem, 5vw, 5rem)",
                textTransform: "uppercase",
                letterSpacing: "-.04em",
                marginBottom: "2.5rem",
                opacity: 0,
              }}
            >
              Ready to{" "}
              <em style={{ fontStyle: "italic", color: "#C5A059" }}>reimagine</em>{" "}
              industry?
            </h2>
            <a
              className="c-anim"
              href="/connect"
              style={{
                display: "inline-block",
                background: "#C5A059",
                color: "#000",
                fontFamily: "var(--font-label)",
                fontSize: ".62rem",
                fontWeight: 700,
                letterSpacing: ".22em",
                textTransform: "uppercase",
                padding: "1.1rem 3rem",
                textDecoration: "none",
                transition: "background .3s, color .3s, border-color .3s",
                border: "1px solid transparent",
                opacity: 0,
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "transparent";
                el.style.color = "#fff";
                el.style.borderColor = "rgba(255,255,255,.25)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "#C5A059";
                el.style.color = "#000";
                el.style.borderColor = "transparent";
              }}
            >
              Connect With Our Engineers
            </a>
          </div>
        </W>
      </section>

      <Footer />
    </div>
  );
}