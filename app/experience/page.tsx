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

const inquireItems = [
  { icon: "real_estate_agent", title: "Priority Resident Enrollment", desc: "Be among the first to experience our flagship farm resort ecosystem." },
  { icon: "workspace_premium", title: "Exclusive Material Access",    desc: "Founding members receive proprietary bio-textile integration in their private villas." },
];

export default function ExperiencePage() {
  const heroRef    = useRef<HTMLElement>(null);
  const bentoRef   = useRef<HTMLElement>(null);
  const inquireRef = useRef<HTMLElement>(null);
  const quoteRef   = useRef<HTMLElement>(null);

  useGSAP(() => {
    /* Hero */
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll(".h-anim"),
        { y: 72, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 1.1, ease: "power3.out", delay: 0.28 }
      );
    }

    /* Bento */
    if (bentoRef.current) {
      ScrollTrigger.create({
        trigger: bentoRef.current, start: "top 72%", once: true,
        onEnter: () =>
          gsap.fromTo(
            bentoRef.current!.querySelectorAll(".b-anim"),
            { y: 48, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.14, duration: 0.88, ease: "power3.out" }
          ),
      });
    }

    /* Inquire section (white bg) */
    if (inquireRef.current) {
      ScrollTrigger.create({
        trigger: inquireRef.current, start: "top 70%", once: true,
        onEnter: () =>
          gsap.fromTo(
            inquireRef.current!.querySelectorAll(".i-anim"),
            { y: 36, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.1, duration: 0.78, ease: "power3.out" }
          ),
      });
    }

    /* Quote */
    if (quoteRef.current) {
      ScrollTrigger.create({
        trigger: quoteRef.current, start: "top 78%", once: true,
        onEnter: () =>
          gsap.fromTo(
            quoteRef.current!.querySelectorAll(".q-anim"),
            { y: 36, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power3.out" }
          ),
      });
    }
  }, []);

  return (
    <div style={{ background: "#000", color: "#fff" }}>

      {/* HERO - Redesigned with left alignment */}
      <section
        ref={heroRef}
        style={{ 
          position: "relative", 
          minHeight: "100vh", 
          display: "flex", 
          alignItems: "center", 
          overflow: "hidden" 
        }}
      >
        {/* Background Image */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuApkHP08yex_lTnONCFOtPTjwwaFSKh60EOMWoSPk29izgQCg28fnxdkIYj6mkjtzcwhJAAgeXJvhJASPSLH8W3Ahxx_dtvhLprwiCQL1UUqrh17vQIPg8k_1aeQvMjd5LlrG82tWAeV5hAce41WfXYhZlCZu1W00W7OJWamgrdR2qLcqEYIJtmpk0bc7NcHbmJcxoxDjQ_NT39Rzk-g9r0rLllL_U-QeT7AwsaUeaCmszi9ThVTj4QGp5NFs69OG0ReYKPwYGFyJM"
            alt="Luxury biophilic resort"
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.58 }}
          />
          {/* Gradient overlay - stronger on left for text readability */}
          <div style={{ 
            position: "absolute", 
            inset: 0, 
            background: "linear-gradient(to right, #000 0%, rgba(0,0,0,.7) 50%, rgba(0,0,0,.2) 100%)" 
          }} />
          <div style={{ 
            position: "absolute", 
            inset: 0, 
            background: "linear-gradient(to top, #000 0%, transparent 40%)" 
          }} />
        </div>

        {/* Content Container */}
        <W style={{ position: "relative", zIndex: 1, width: "100%", paddingTop: "10rem", paddingBottom: "7rem" }}>
          <div style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "flex-end",
            minHeight: "calc(100vh - 17rem)"
          }}>
            
            {/* Left Side - Heading and Content */}
            <div style={{ maxWidth: 700 }}>
              <span 
                className="h-anim" 
                style={{ 
                  fontFamily: "var(--font-label)", 
                  fontSize: ".6rem", 
                  fontWeight: 700, 
                  letterSpacing: ".38em", 
                  textTransform: "uppercase", 
                  color: "#C5A059", 
                  display: "block", 
                  marginBottom: "1.5rem", 
                  opacity: 0 
                }}
              >
                Project Vision
              </span>
              
              <h1
                className="h-anim"
                style={{
                  fontFamily: "var(--font-epilogue), sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(3rem, 7vw, 7rem)",
                  textTransform: "uppercase",
                  letterSpacing: "-.04em",
                  lineHeight: 1.0,
                  marginBottom: "1.5rem",
                  opacity: 0,
                }}
              >
                Where Nature<br />
                <em style={{ fontStyle: "italic", fontWeight: 300, color: "#C5A059" }}>Meets</em>{" "}Luxury
              </h1>
              
              <p 
                className="h-anim" 
                style={{ 
                  color: "rgba(255,255,255,.55)", 
                  fontSize: "clamp(.9rem,1.4vw,1.15rem)", 
                  lineHeight: 1.75, 
                  maxWidth: 520, 
                  marginBottom: "2.5rem", 
                  opacity: 0 
                }}
              >
                Our flagship project vision — a farm resort, energy park, and regenerative ecosystem woven into a single, breathtaking experience.
              </p>
            </div>

            {/* Right Side - Buttons side by side at bottom */}
            <div className="h-anim" style={{ opacity: 0, marginBottom: "2rem" }}>
              <div style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
                {/* Main Explore Button */}
                <button 
                  style={{ 
                    padding: ".9rem 2.2rem", 
                    border: "1px solid rgba(255,255,255,.4)", 
                    background: "transparent", 
                    color: "#fff", 
                    fontFamily: "var(--font-label)", 
                    fontSize: ".6rem", 
                    fontWeight: 700, 
                    letterSpacing: ".2em", 
                    textTransform: "uppercase", 
                    cursor: "pointer", 
                    transition: "all .3s ease",
                    whiteSpace: "nowrap"
                  }}
                  onMouseEnter={e=>{const b=e.currentTarget as HTMLButtonElement;b.style.background="#fff";b.style.color="#000";b.style.borderColor="#fff";}}
                  onMouseLeave={e=>{const b=e.currentTarget as HTMLButtonElement;b.style.background="transparent";b.style.color="#fff";b.style.borderColor="rgba(255,255,255,.4)";}}
                >
                  Explore Retreats
                </button>
                
                {/* Secondary Link Button */}
                <button 
                  style={{ 
                    background: "transparent", 
                    border: "none", 
                    borderBottom: "1px solid rgba(197,160,89,.35)", 
                    color: "#C5A059", 
                    fontFamily: "var(--font-label)", 
                    fontSize: ".6rem", 
                    fontWeight: 700, 
                    letterSpacing: ".2em", 
                    textTransform: "uppercase", 
                    cursor: "pointer", 
                    padding: ".9rem 0", 
                    transition: "all .3s ease",
                    whiteSpace: "nowrap"
                  }}
                  onMouseEnter={e=>{
                    const btn = e.currentTarget as HTMLButtonElement;
                    btn.style.borderBottomColor = "#C5A059";
                    btn.style.color = "#C5A059";
                    btn.style.transform = "translateX(-4px)";
                  }}
                  onMouseLeave={e=>{
                    const btn = e.currentTarget as HTMLButtonElement;
                    btn.style.borderBottomColor = "rgba(197,160,89,.35)";
                    btn.style.color = "#C5A059";
                    btn.style.transform = "translateX(0)";
                  }}
                >
                  View Private Gallery
                </button>
              </div>
            </div>
          </div>
        </W>

        {/* Scroll indicator - centered at bottom */}
        <div style={{ 
          position: "absolute", 
          bottom: "2.5rem", 
          left: "50%", 
          transform: "translateX(-50%)", 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          gap: ".5rem", 
          zIndex: 1 
        }}>
          <span style={{ fontFamily: "var(--font-label)", fontSize: ".52rem", letterSpacing: ".3em", textTransform: "uppercase", color: "rgba(255,255,255,.35)" }}>
            Discover
          </span>
          <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, #C5A059, transparent)" }} />
        </div>
      </section>

      {/* BENTO GRID  */}
      <section ref={bentoRef} style={{ background: "#000", padding: "7rem 0" }}>
        <W>
          {/* Section header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3.5rem" }}>
            <div style={{ maxWidth: 500 }}>
              <h2 style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4vw,4rem)", textTransform: "uppercase", letterSpacing: "-.04em", lineHeight: 1.1, marginBottom: "1rem" }}>
                Immerse Yourself in a{" "}
                <span style={{ color: "#C5A059" }}>Living Ecosystem</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,.35)", fontSize: ".84rem", lineHeight: 1.8 }}>
                Indoor beach pools, open landscape villas, nature-integrated infrastructure — every detail designed to blur the boundary between architecture and the natural world.
              </p>
            </div>
            {/* Nav arrows */}
            <div style={{ display: "flex", gap: ".75rem", flexShrink: 0 }}>
              {["west", "east"].map(d => (
                <button key={d} style={{ width: 44, height: 44, borderRadius: "50%", border: "1px solid rgba(255,255,255,.12)", background: "transparent", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background .25s" }}
                  onMouseEnter={e=>((e.currentTarget as HTMLButtonElement).style.background="rgba(255,255,255,.1)")}
                  onMouseLeave={e=>((e.currentTarget as HTMLButtonElement).style.background="transparent")}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>{d}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Bento: 7/12 + 5/12 columns */}
          <div style={{ display: "grid", gridTemplateColumns: "7fr 5fr", gap: "1.25rem", minHeight: 640 }}>

            {/* Large card — Lagoon Sanctuary */}
            <div
              className="b-anim"
              style={{ position: "relative", borderRadius: ".375rem", overflow: "hidden", background: "#131313", border: "1px solid rgba(255,255,255,.06)", opacity: 0 }}
              onMouseEnter={e=>{const img=e.currentTarget.querySelector("img") as HTMLImageElement;if(img)img.style.transform="scale(1.07)";}}
              onMouseLeave={e=>{const img=e.currentTarget.querySelector("img") as HTMLImageElement;if(img)img.style.transform="scale(1)";}}
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwPeY19orczkCitxPeIgWKKntK2LNEUPLXZEwhRCXr2PUNWwGgnb-pw_AU3-QeCm8lbiVj7W589nOuYbuXt9pY_0TdIWKLMyJXuwOSdweC_2-pxdl8ArIa_b6uw5q6slrWpJIUB9efa3sWEeNLHPUwBA_biI05YaqMozQVsopbxwSrCoWJeFzI1QhYoce5J31NUqOlJlRUXaNANhV4dgSn4RrnrNquBSZQjZSWfdLvXCdcJo11ZLDUZ9IOffFiU4JBvyoy5KEtIoQ"
                alt="Lagoon sanctuary"
                style={{ width: "100%", height: "100%", objectFit: "cover", opacity: .7, transition: "transform .7s ease", minHeight: 500 }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,.9) 0%, transparent 55%)" }} />
              <div style={{ position: "absolute", bottom: "2.5rem", left: "2.5rem", right: "2.5rem" }}>
                <div style={{ marginBottom: "1rem" }}>
                  <span style={{ display: "inline-block", padding: ".3rem 1rem", borderRadius: 999, background: "rgba(197,160,89,.2)", color: "#C5A059", fontFamily: "var(--font-label)", fontSize: ".55rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", backdropFilter: "blur(8px)" }}>
                    Signature Retreat
                  </span>
                </div>
                <h3 style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 900, fontSize: "clamp(1.3rem,2.2vw,2rem)", textTransform: "uppercase", letterSpacing: "-.02em", marginBottom: ".6rem" }}>
                  The Lagoon Sanctuary
                </h3>
                <p style={{ color: "rgba(255,255,255,.38)", fontSize: ".82rem", lineHeight: 1.7, maxWidth: 380 }}>
                  Indoor-outdoor beach pools that utilize natural bio-filtration systems for pure, mineral-rich water.
                </p>
              </div>
            </div>

            {/* Right column — two stacked cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                {
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDypP0eHa--oxOtdSXIKfVJXPUBYQarRhUs40eWW5l4efsv9m77_-n3ExWDz1b_KBaR97JAUiCYwOgehZ1iDgFvLlQkm9OS4OJribpakCwJ_44v8sg_ZsXWOqJfMn8sW8LLfKNxu18TK_v6a65xAxywMti-8Lazh5llETpfrr4ivMxA2Yu_j10LJnL4JModklxbgr24rBOIsc6SFwrQb5H63_F9ElQ5l-5HFmtrFqXWp0Kvf03Aa_CCQvhEmNaBcY799y2FtvXKG0M",
                  title: "Open Landscape Villas",
                  sub: "Blurring the boundary of home.",
                },
                {
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYxO9LGVq630sLcF5T6sYvFa9fqbUJRDg7AKjvwRNcQT5rNfK7grs_wyVBOlSXTjAwBnf7UF9CQLtvt9ayunNleeXBnurff8uOp4Xrc4IPt36FzUytMexTUmMvGoaoz_O3pqyyqK_Sznx1CF1uryPc021oM2WcfLL1ra-A68i2qz5Ld_2g8wofNtKhtMprQoXH3Fc9PGB27XujTfOCY0d_byXcHtRAQR2DKJL4gi0pGtr92Jsb6E_Uo8Ahcwf9AFgOA8uEnnfTOyQ",
                  title: "Nature-Integrated Infrastructure",
                  sub: "Powering a living ecosystem.",
                },
              ].map(card => (
                <div
                  key={card.title}
                  className="b-anim"
                  style={{ flex: 1, position: "relative", borderRadius: ".375rem", overflow: "hidden", background: "#131313", border: "1px solid rgba(255,255,255,.06)", minHeight: 280, opacity: 0 }}
                  onMouseEnter={e=>{const img=e.currentTarget.querySelector("img") as HTMLImageElement;if(img)img.style.transform="scale(1.07)";const ov=e.currentTarget.querySelector(".ov") as HTMLDivElement;if(ov)ov.style.background="rgba(0,0,0,.25)";}}
                  onMouseLeave={e=>{const img=e.currentTarget.querySelector("img") as HTMLImageElement;if(img)img.style.transform="scale(1)";const ov=e.currentTarget.querySelector(".ov") as HTMLDivElement;if(ov)ov.style.background="rgba(0,0,0,.42)";}}
                >
                  <img src={card.img} alt={card.title} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: .7, transition: "transform .7s ease", position: "absolute", inset: 0 }} />
                  <div className="ov" style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.42)", transition: "background .4s" }} />
                  <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "2rem 2.25rem" }}>
                    <h3 style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 900, fontSize: "1.15rem", textTransform: "uppercase", letterSpacing: "-.015em", marginBottom: ".35rem" }}>{card.title}</h3>
                    <p style={{ fontFamily: "var(--font-label)", fontSize: ".55rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(255,255,255,.38)" }}>{card.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </W>
      </section>

      {/* INQUIRE — WHITE BG  */}
      <section ref={inquireRef} style={{ background: "#fff", color: "#000", padding: "8rem 0" }}>
        <W>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>

            {/* Left — text */}
            <div>
              <span className="i-anim" style={{ fontFamily: "var(--font-label)", fontSize: ".57rem", fontWeight: 700, letterSpacing: ".42em", textTransform: "uppercase", color: "#C5A059", display: "block", marginBottom: "1.75rem", opacity: 0 }}>
                Direct Access
              </span>
              <h3 className="i-anim" style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem,5vw,5.5rem)", textTransform: "uppercase", letterSpacing: "-.04em", lineHeight: 1.0, marginBottom: "1.75rem", opacity: 0 }}>
                Inquire About<br />The Project
              </h3>
              <p className="i-anim" style={{ color: "#999", fontSize: "1rem", lineHeight: 1.85, marginBottom: "3rem", maxWidth: 460, opacity: 0 }}>
                Secure your place within the most ambitious regenerative living environment ever conceived. Exclusive access is currently open for private membership.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                {inquireItems.map(item => (
                  <div key={item.title} className="i-anim" style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem", opacity: 0 }}>
                    <div style={{ flexShrink: 0, width: 52, height: 52, borderRadius: ".5rem", background: "#f5f5f5", border: "1px solid rgba(0,0,0,.07)", display: "flex", alignItems: "center", justifyContent: "center", transition: "border-color .25s" }}>
                      <span className="material-symbols-outlined" style={{ color: "#C5A059", fontSize: 26 }}>{item.icon}</span>
                    </div>
                    <div>
                      <h4 style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 700, fontSize: ".95rem", textTransform: "uppercase", letterSpacing: "-.01em", color: "#000", marginBottom: ".4rem" }}>{item.title}</h4>
                      <p style={{ color: "#999", fontSize: ".84rem", lineHeight: 1.7 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — image */}
            <div className="i-anim" style={{ borderRadius: ".375rem", overflow: "hidden", aspectRatio: "4/5", opacity: 0 }}>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCepr3IZ5MY3BmKN3p3y5_daHUtuB5h2sQw86JRoFyIGm-1tRNdonqB7xXEokD6xULYXIugfWM9lpkySjqW1NEAHIIKeaSBYx-49upr3G0e4ggy45QfOPdaCHEfKz0gQUAzN8JXYddcns9sG1kfvdfnlcrY4MMt3xl2Pl_8rjZdqefZoYZFNpKNkqDJl_o_yNSkutu7W9V0U75f9-NVc8J6QZc3FkHJtdTlql0_EqERf1DhkGacnb1ZtOuzJgZz3NUwCJR3MIA7ZbM"
                alt="Luxury forest retreat"
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .7s" }}
                onMouseEnter={e=>((e.currentTarget as HTMLImageElement).style.transform="scale(1.04)")}
                onMouseLeave={e=>((e.currentTarget as HTMLImageElement).style.transform="scale(1)")}
              />
            </div>
          </div>
        </W>
      </section>

      {/* QUOTE  */}
      <section ref={quoteRef} style={{ background: "#000", padding: "8rem 0", textAlign: "center", position: "relative", overflow: "hidden" }}>
        {/* Watermark */}
        <div aria-hidden style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", userSelect: "none" }}>
          <span style={{ fontFamily: "var(--font-epilogue),sans-serif", fontWeight: 900, fontSize: "clamp(6rem,18vw,22rem)", color: "rgba(255,255,255,.018)", textTransform: "uppercase", letterSpacing: "-.05em", lineHeight: 1, whiteSpace: "nowrap" }}>ECOSYSTEM</span>
        </div>

        <W style={{ position: "relative", zIndex: 1 }}>
          <span className="q-anim material-symbols-outlined" style={{ color: "#C5A059", fontSize: 48, display: "block", marginBottom: "2.5rem", opacity: 0, fontVariationSettings: "'FILL' 1" }}>
            format_quote
          </span>
          <blockquote
            className="q-anim"
            style={{
              fontFamily: "var(--font-epilogue), sans-serif",
              fontStyle: "italic", fontWeight: 300,
              fontSize: "clamp(1.8rem, 4vw, 4.5rem)",
              lineHeight: 1.2, marginBottom: "2.5rem",
              maxWidth: 820, margin: "0 auto 2.5rem",
              opacity: 0,
            }}
          >
            &ldquo;Luxury is no longer about excess. It is about the{" "}
            <strong style={{ color: "#C5A059", fontWeight: 900, fontStyle: "italic" }}>unfiltered connection</strong>{" "}
            between the soul and the earth.&rdquo;
          </blockquote>
          <cite className="q-anim" style={{ fontFamily: "var(--font-label)", fontSize: ".57rem", fontWeight: 700, letterSpacing: ".22em", textTransform: "uppercase", color: "rgba(255,255,255,.35)", fontStyle: "normal", opacity: 0 }}>
            — Utkarsh Gugri, Founder
          </cite>
        </W>
      </section>

      <Footer />
    </div>
  );
}