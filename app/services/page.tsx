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

const services = [
  {
    num: "01",
    title: "Farm Management",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDebbN3NwuLRmy55g1ePb3CmZ2t0vJsGhwxhtvabEwZACKHBrLyZN6aOBUTZnGY_LqFdGljyzSN5Et72fcHuGpIyvOBMJ6HrX-R5m9Y8Ygb16d17JnNGlIxYNE90ogQJ2LbCLZdHrco0h6G7MfJ0iHVvdgO3cA7-Gp4YRrKcF4T9tXmSXtMqKW4oUAkX40RACiSye6ZQn661gs6OJkpHupyqugtZhR_0VNGriyqLmTsJkt_B7O3rsfKA3gMWJ75aw5iz4epCkSXHc",
    desc: "End-to-end regenerative farm management — from soil health restoration and organic certification to precision crop planning, harvest logistics, and market access. Data-driven, nature-aligned.",
    tags: ["Soil Health Restoration", "Precision Crop Planning"],
    cta: "Explore Agriculture",
    imgLeft: true,   // image on left, text on right
  },
  {
    num: "02",
    title: "Renewable Energy",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYxO9LGVq630sLcF5T6sYvFa9fqbUJRDg7AKjvwRNcQT5rNfK7grs_wyVBOlSXTjAwBnf7UF9CQLtvt9ayunNleeXBnurff8uOp4Xrc4IPt36FzUytMexTUmMvGoaoz_O3pqyyqK_Sznx1CF1uryPc021oM2WcfLL1ra-A68i2qz5Ld_2g8wofNtKhtMprQoXH3Fc9PGB27XujTfOCY0d_byXcHtRAQR2DKJL4gi0pGtr92Jsb6E_Uo8Ahcwf9AFgOA8uEnnfTOyQ",
    desc: "Agrivoltaic systems, solar tree installations, and distributed energy infrastructure designed to coexist with agriculture. Dual-use land that generates clean power while nurturing crops.",
    tags: ["Agrivoltaic Systems", "Distributed Infrastructure"],
    cta: "View Energy Grid",
    imgLeft: false,  // text on left, image on right
  },
  {
    num: "03",
    title: "Sustainable Real Estate",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCepr3IZ5MY3BmKN3p3y5_daHUtuB5h2sQw86JRoFyIGm-1tRNdonqB7xXEokD6xULYXIugfWM9lpkySjqW1NEAHIIKeaSBYx-49upr3G0e4ggy45QfOPdaCHEfKz0gQUAzN8JXYddcns9sG1kfvdfnlcrY4MMt3xl2Pl_8rjZdqefZoYZFNpKNkqDJl_o_yNSkutu7W9V0U75f9-NVc8J6QZc3FkHJtdTlql0_EqERf1DhkGacnb1ZtOuzJgZz3NUwCJR3MIA7ZbM",
    desc: "Nature-integrated living spaces — eco villas, farm resorts, and wellness retreats designed with biophilic architecture. Spaces where luxury and ecology coexist in harmony.",
    tags: ["Biophilic Architecture", "Eco Villas & Resorts"],
    cta: "Inquire About Property",
    imgLeft: true,
  },
];

export default function ServicesPage() {
  const heroRef     = useRef<HTMLElement>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef      = useRef<HTMLElement>(null);

  useGSAP(() => {
    /* Hero */
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll(".h-anim"),
        { y: 70, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.18, duration: 1.1, ease: "power3.out", delay: 0.28 }
      );
    }

    /* Each service row */
    serviceRefs.current.forEach(el => {
      if (!el) return;
      ScrollTrigger.create({
        trigger: el, start: "top 72%", once: true,
        onEnter: () =>
          gsap.fromTo(
            el.querySelectorAll(".s-anim"),
            { y: 46, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.1, duration: 0.85, ease: "power3.out" }
          ),
      });
    });

    /* CTA */
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

      {/*  HERO */}
      <section ref={heroRef} style={{ padding: "11rem 0 5rem" }}>
        <W>
          {/* Eyebrow */}
          <p className="h-anim" style={{ fontFamily: "var(--font-label)", fontSize: ".6rem", fontWeight: 700, letterSpacing: ".22em", textTransform: "uppercase", color: "#C5A059", marginBottom: "1.5rem", opacity: 0 }}>
            Our Methodology
          </p>

          {/* Headline + philosophy card  */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "3rem", marginBottom: "2.5rem" }}>
            <h1
              className="h-anim"
              style={{
                fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 900,
                fontSize: "clamp(3rem, 6.5vw, 7rem)", textTransform: "uppercase",
                letterSpacing: "-.04em", lineHeight: 0.97, opacity: 0,
              }}
            >
              Three Verticals,<br />
              <span style={{ color: "#C5A059" }}>One Vision.</span>
            </h1>

            {/* Philosophy quote card */}
            <div
              className="h-anim"
              style={{
                flexShrink: 0, maxWidth: 320,
                background: "#131313", border: "1px solid rgba(255,255,255,.08)",
                borderRadius: ".375rem", padding: "2rem 2.5rem", opacity: 0,
              }}
            >
              <span style={{ fontFamily: "var(--font-label)", fontSize: ".57rem", fontWeight: 700, letterSpacing: ".22em", textTransform: "uppercase", color: "#C5A059", display: "block", marginBottom: "1rem" }}>
                Core Philosophy
              </span>
              <p style={{ fontFamily: "var(--font-epilogue), sans-serif", fontStyle: "italic", fontSize: ".88rem", color: "rgba(255,255,255,.52)", lineHeight: 1.75 }}>
                &ldquo;True luxury is the ability to flourish without depletion. We engineer the infrastructure of tomorrow with the patience of nature.&rdquo;
              </p>
            </div>
          </div>

          <p className="h-anim" style={{ color: "rgba(255,255,255,.38)", fontSize: "1rem", maxWidth: 540, lineHeight: 1.85, opacity: 0 }}>
            Each service vertical is designed to integrate seamlessly with the others — creating a unified ecosystem of value.
          </p>
        </W>
      </section>

      {/* SERVICE ROWS */}
      <section style={{ padding: "0 0 5rem" }}>
        <W style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
          {services.map((svc, i) => (
            <div
              key={svc.num}
              ref={el => { serviceRefs.current[i] = el; }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                border: "1px solid rgba(255,255,255,.07)",
                borderRadius: ".375rem",
                overflow: "hidden",
                minHeight: 520,
              }}
            >
              {/* IMAGE */}
              <div
                style={{ order: svc.imgLeft ? 1 : 2, position: "relative", overflow: "hidden" }}
                onMouseEnter={e => { const img = e.currentTarget.querySelector("img") as HTMLImageElement; if (img) img.style.transform = "scale(1.05)"; }}
                onMouseLeave={e => { const img = e.currentTarget.querySelector("img") as HTMLImageElement; if (img) img.style.transform = "scale(1)"; }}
              >
                <img
                  src={svc.img} alt={svc.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .7s ease", minHeight: 400 }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: svc.imgLeft
                    ? "linear-gradient(to right, transparent 50%, rgba(0,0,0,.4) 100%)"
                    : "linear-gradient(to left,  transparent 50%, rgba(0,0,0,.4) 100%)",
                }} />
              </div>

              {/* TEXT */}
              <div
                style={{
                  order: svc.imgLeft ? 2 : 1,
                  background: "#0a0a0a",
                  padding: "4rem 4.5rem",
                  display: "flex", flexDirection: "column", justifyContent: "center",
                }}
              >
                <span className="s-anim" style={{ fontFamily: "var(--font-label)", fontSize: ".57rem", fontWeight: 700, letterSpacing: ".28em", textTransform: "uppercase", color: "#C5A059", display: "block", marginBottom: "1.25rem", opacity: 0 }}>
                  {svc.num}
                </span>
                <h2 className="s-anim" style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 3vw, 3.2rem)", textTransform: "uppercase", letterSpacing: "-.03em", lineHeight: 1.05, marginBottom: "1.25rem", opacity: 0 }}>
                  {svc.title}
                </h2>
                <p className="s-anim" style={{ color: "rgba(255,255,255,.42)", lineHeight: 1.85, marginBottom: "2rem", fontSize: ".88rem", maxWidth: 400, opacity: 0 }}>
                  {svc.desc}
                </p>

                <div className="s-anim" style={{ display: "flex", flexDirection: "column", gap: ".65rem", marginBottom: "2.25rem", opacity: 0 }}>
                  {svc.tags.map(t => (
                    <div key={t} style={{ display: "flex", alignItems: "center", gap: ".65rem" }}>
                      <span className="material-symbols-outlined" style={{ color: "#C5A059", fontSize: 15 }}>check_circle</span>
                      <span style={{ fontFamily: "var(--font-label)", fontSize: ".57rem", fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: "rgba(255,255,255,.35)" }}>{t}</span>
                    </div>
                  ))}
                </div>

                <button
                  className="s-anim"
                  style={{ display: "inline-flex", alignItems: "center", gap: ".6rem", background: "none", border: "none", color: "#C5A059", fontFamily: "var(--font-label)", fontSize: ".6rem", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", cursor: "pointer", padding: 0, alignSelf: "flex-start", transition: "gap .3s", opacity: 0 }}
                  onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.gap = "1rem"}
                  onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.gap = ".6rem"}
                >
                  {svc.cta}
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </W>
      </section>

      {/* CTA  */}
      <section ref={ctaRef} style={{ background: "#000", padding: "8rem 0", textAlign: "center" }}>
        <W>
          <h2 className="c-anim" style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem, 5.5vw, 6rem)", textTransform: "uppercase", letterSpacing: "-.04em", lineHeight: 1.05, marginBottom: "1.5rem", opacity: 0 }}>
            Ready to Architect<br /><span style={{ color: "#C5A059" }}>The Next Epoch?</span>
          </h2>
          <p className="c-anim" style={{ color: "rgba(255,255,255,.38)", fontSize: "1rem", maxWidth: 480, margin: "0 auto 2.5rem", lineHeight: 1.8, opacity: 0 }}>
            Connect with our industrial consultants to see how your portfolio can contribute to the global regenerative movement.
          </p>
          <div className="c-anim" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", opacity: 0 }}>
            <a href="/connect" style={{ padding: "1.1rem 2.8rem", background: "#C5A059", color: "#000", fontFamily: "var(--font-label)", fontSize: ".62rem", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", textDecoration: "none", transition: "filter .25s" }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1.12)")}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.filter = "none")}
            >
              Start Inquiry
            </a>
            <button style={{ padding: "1.1rem 2.8rem", background: "transparent", border: "1px solid rgba(255,255,255,.22)", color: "#fff", fontFamily: "var(--font-label)", fontSize: ".62rem", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", cursor: "pointer", transition: "background .3s, color .3s" }}
              onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = "#fff"; b.style.color = "#000"; }}
              onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = "transparent"; b.style.color = "#fff"; }}
            >
              Download Report
            </button>
          </div>
        </W>
      </section>

      <Footer />
    </div>
  );
}