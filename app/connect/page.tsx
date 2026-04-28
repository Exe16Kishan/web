"use client";

import Footer from "@/components/Footer";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const W = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{ width: "100%", maxWidth: 1440, marginLeft: "auto", marginRight: "auto", paddingLeft: "clamp(1.25rem, 5vw, 5rem)", paddingRight: "clamp(1.25rem, 5vw, 5rem)", ...style }}>
    {children}
  </div>
);

export default function ConnectPage() {
  const heroRef    = useRef<HTMLElement>(null);
  const formColRef = useRef<HTMLDivElement>(null);
  const sideColRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll(".h-anim"),
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.22, duration: 1.15, ease: "power3.out", delay: 0.3 }
      );
    }
    if (formColRef.current) {
      ScrollTrigger.create({
        trigger: formColRef.current, start: "top 68%", once: true,
        onEnter: () => gsap.fromTo(
          formColRef.current!.querySelectorAll(".f-anim"),
          { y: 32, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.08, duration: 0.72, ease: "power3.out" }
        ),
      });
    }
    if (sideColRef.current) {
      ScrollTrigger.create({
        trigger: sideColRef.current, start: "top 68%", once: true,
        onEnter: () => gsap.fromTo(
          sideColRef.current!.querySelectorAll(".s-anim"),
          { y: 32, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.12, duration: 0.72, ease: "power3.out" }
        ),
      });
    }
  }, []);

  // Shared input/focus styles 
  const inputBase: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid #434843",
    padding: "0.55rem 0 0.7rem",
    color: "#fff",
    fontFamily: "var(--font-body)",
    fontSize: "0.95rem",
    outline: "none",
    transition: "border-color 0.3s",
    boxSizing: "border-box",
  };
  const fieldLabel: React.CSSProperties = {
    display: "block",
    fontFamily: "var(--font-label)",
    fontSize: "0.6rem",
    fontWeight: 700,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.35)",
    marginBottom: "0.65rem",
  };
  const eyebrow: React.CSSProperties = {
    fontFamily: "var(--font-label)",
    fontSize: "0.57rem",
    fontWeight: 700,
    letterSpacing: "0.38em",
    textTransform: "uppercase",
    color: "#C5A059",
    display: "block",
    marginBottom: "1.25rem",
  };
  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    ((e.currentTarget as HTMLElement).style.borderBottomColor = "#C5A059");
  const onBlur  = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    ((e.currentTarget as HTMLElement).style.borderBottomColor = "#434843");

  return (
    <>
      <style>{`

        /* Body  */
        .connect-body {
          display: grid;
          grid-template-columns: 1fr;
          background: #000;
          border-top: 1px solid rgba(255,255,255,.06);
        }
        @media (min-width: 1024px) {
          .connect-body { grid-template-columns: 58% 42%; min-height: 85vh; }
        }

        /* Form column padding */
        .connect-form-col {
          padding: clamp(3rem, 6vw, 6.5rem) clamp(1.25rem, 10vw, 7rem);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* Sidebar padding */
        .connect-side-col {
          background: #131313;
          border-left: none;
          border-top: 1px solid rgba(255,255,255,.06);
          padding: clamp(3rem, 6vw, 6.5rem) clamp(1.25rem, 5vw, 5rem);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 3rem;
        }
        @media (min-width: 1024px) {
          .connect-side-col {
            border-left: 1px solid rgba(255,255,255,.06);
            border-top: none;
            gap: 0;
          }
        }

        /* Sidebar */
        .connect-side-info {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }
        @media (min-width: 640px) and (max-width: 1023px) {
          .connect-side-info {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
        }

        /* Two-col form  */
        .form-two-col {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
        }
        @media (min-width: 640px) {
          .form-two-col { grid-template-columns: 1fr 1fr; gap: 0 3rem; }
        }

        /* Input focus  */
        .select-wrap select:focus {
          border-bottom-color: #C5A059;
        }

        /* Hero text size  */
        .connect-hero-title {
          font-family: var(--font-epilogue), sans-serif;
          font-weight: 900;
          font-size: clamp(2.8rem, 9.5vw, 9rem);
          line-height: 0.97;
          letter-spacing: -0.04em;
          text-transform: uppercase;
          color: #fff;
          margin-bottom: 1.6rem;
        }
      `}</style>

      <div style={{ background: "#000", color: "#fff", overflowX: "hidden" }}>

        {/* HERO */}
        <section
          ref={heroRef}
          style={{ position: "relative", height: "100vh", minHeight: 560, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden" }}
        >
          {/* BG */}
          <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtabJJvIRlWZx7rUiglLvyp2HujH6fqG6dMYRahtOpRM5irpqQJ47y4Xs5L_xQCxC0f6TAI3AI9HHAqj0MGMFjEVYPXh8pO7276Isa4XbGq55cidKJVSGDuJ-5jW51HUd_vn4RtdPnpqNyi4rOGjvuVG56WSuG7UUTeKTblBoRJO3hLbe-FzblRb6NPbtdNYK57SM-G7Q3KRq7e0BsUVsWJlTwIeKs-B60ajUTHgQWZ_VlzACbZj-mtMx13NnpC4lznL2g1Q33JHI"
              alt="Forest architecture"
              style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.45) contrast(1.15)" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,.5) 0%, transparent 30%, transparent 60%, #000 100%)" }} />
          </div>

          {/* Text */}
          <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 clamp(1.25rem, 5vw, 3rem)", maxWidth: 900, width: "100%" }}>
            <h1 className="h-anim connect-hero-title" style={{ opacity: 0 }}>
              Let&apos;s Build the{" "}
              <span style={{ color: "#C5A059" }}>Future</span>
              {" "}Together
            </h1>
            <p className="h-anim"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "clamp(.9rem, 1.5vw, 1.25rem)", color: "rgba(255,255,255,.52)", lineHeight: 1.7, maxWidth: 500, margin: "0 auto", opacity: 0 }}>
              Pioneering sustainable luxury through regenerative architectural partnerships and engineered precision.
            </p>
          </div>

          {/* Scroll hint */}
          <div style={{ position: "absolute", bottom: "2.8rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: ".6rem", opacity: 0.38, zIndex: 1 }}>
            <span style={{ fontFamily: "var(--font-label)", fontSize: ".52rem", letterSpacing: ".3em", textTransform: "uppercase", color: "#fff" }}>Scroll to Explore</span>
            <div style={{ width: 1, height: 48, background: "#C5A059" }} />
          </div>
        </section>

        {/* FORM + SIDEBAR */}
        <section className="connect-body">

          {/* ── FORM COLUMN ── */}
          <div ref={formColRef} className="connect-form-col">
            <div style={{ maxWidth: 500, width: "100%" }}>

              {/* Eyebrow */}
              <div className="f-anim" style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem", opacity: 0 }}>
                <span style={{ display: "inline-block", width: 36, height: 1, background: "#C5A059" }} />
                <span style={{ fontFamily: "var(--font-label)", fontSize: ".58rem", fontWeight: 700, letterSpacing: ".28em", textTransform: "uppercase", color: "#C5A059" }}>Private Consultation</span>
              </div>

              <h2 className="f-anim"
                style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 2.8vw, 3rem)", textTransform: "uppercase", letterSpacing: "-.03em", marginBottom: ".5rem", opacity: 0 }}>
                Inquiry
              </h2>
              <p className="f-anim"
                style={{ color: "rgba(255,255,255,.32)", fontSize: ".88rem", marginBottom: "2.5rem", lineHeight: 1.7, opacity: 0 }}>
                Submit your details for a private architectural consultation.
              </p>

              {/* Name + Email */}
              <div className="form-two-col">
                <div className="f-anim" style={{ marginBottom: "2.25rem", opacity: 0 }}>
                  <label style={fieldLabel}>Full Name</label>
                  <input type="text" placeholder="Your full name" style={inputBase} onFocus={onFocus} onBlur={onBlur} />
                </div>
                <div className="f-anim" style={{ marginBottom: "2.25rem", opacity: 0 }}>
                  <label style={fieldLabel}>Email Address</label>
                  <input type="email" placeholder="your@email.com" style={inputBase} onFocus={onFocus} onBlur={onBlur} />
                </div>
              </div>

              {/* Phone */}
              <div className="f-anim" style={{ marginBottom: "2.25rem", opacity: 0 }}>
                <label style={fieldLabel}>Phone (optional)</label>
                <input type="tel" placeholder="+91 000 000 0000" style={inputBase} onFocus={onFocus} onBlur={onBlur} />
              </div>

              {/* Project type */}
              <div className="f-anim select-wrap" style={{ marginBottom: "2.25rem", position: "relative", opacity: 0 }}>
                <label style={{ ...fieldLabel, color: "#C5A059" }}>Select Project Type</label>
                <div style={{ position: "relative" }}>
                  <select
                    defaultValue=""
                    style={{ ...inputBase, appearance: "none", cursor: "pointer", paddingRight: "1.5rem", fontSize: ".88rem", color: "rgba(255,255,255,.65)" }}
                    onFocus={onFocus} onBlur={onBlur}
                  >
                    <option value=""      style={{ background: "#131313" }}>Area of Interest</option>
                    <option value="res"   style={{ background: "#131313" }}>Residential Masterpiece</option>
                    <option value="com"   style={{ background: "#131313" }}>Sustainable Commercial Space</option>
                    <option value="regen" style={{ background: "#131313" }}>Regenerative Strategy</option>
                    <option value="press" style={{ background: "#131313" }}>Press &amp; Media</option>
                  </select>
                  <span className="material-symbols-outlined"
                    style={{ position: "absolute", right: 0, bottom: ".6rem", fontSize: 18, color: "rgba(255,255,255,.35)", pointerEvents: "none" }}>
                    expand_more
                  </span>
                </div>
              </div>

              {/* Message */}
              <div className="f-anim" style={{ marginBottom: "2.5rem", opacity: 0 }}>
                <label style={fieldLabel}>Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project vision..."
                  style={{ ...inputBase, resize: "none", paddingTop: ".4rem" }}
                  onFocus={onFocus} onBlur={onBlur}
                />
              </div>

              {/* Privacy note */}
              <p className="f-anim" style={{ fontSize: ".72rem", color: "rgba(255,255,255,.22)", lineHeight: 1.6, marginBottom: "1.75rem", opacity: 0 }}>
                By submitting, you agree to our Privacy Policy. We never share your data with third parties.
              </p>

              {/* Submit */}
              <button
                className="f-anim"
                style={{
                  width: "100%",
                  background: "#C5A059",
                  color: "#000",
                  fontFamily: "var(--font-label)",
                  fontWeight: 700,
                  fontSize: ".62rem",
                  letterSpacing: ".22em",
                  textTransform: "uppercase",
                  padding: "1.25rem 1.5rem",
                  border: "none",
                  borderRadius: ".375rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: ".75rem",
                  transition: "filter .25s, transform .15s",
                  opacity: 0,
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.1)")}
                onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.filter = "none")}
                onMouseDown={e => ((e.currentTarget as HTMLButtonElement).style.transform = "scale(0.985)")}
                onMouseUp={e => ((e.currentTarget as HTMLButtonElement).style.transform = "scale(1)")}
              >
                Send Message
                <span className="material-symbols-outlined" style={{ fontSize: 17 }}>arrow_forward</span>
              </button>
            </div>
          </div>

          {/* SIDEBAR */}
          <div ref={sideColRef} className="connect-side-col">

            <div className="connect-side-info">
              {/* Location */}
              <div className="s-anim" style={{ opacity: 0 }}>
                <span style={eyebrow}>Location</span>
                <h3 style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 300, fontSize: "clamp(1.35rem, 2.2vw, 2rem)", lineHeight: 1.2, marginBottom: "1rem" }}>
                  India Headquarters
                </h3>
                <p style={{ color: "rgba(255,255,255,.42)", lineHeight: 1.9, fontSize: ".88rem", fontFamily: "var(--font-body)" }}>
                  A-404, Tech Park North,<br />
                  Electronic City, Bangalore 560100<br />
                  Karnataka, India
                </p>
              </div>

              {/* Digital contact */}
              <div className="s-anim" style={{ opacity: 0 }}>
                <span style={eyebrow}>Digital</span>
                <div style={{ display: "flex", flexDirection: "column", gap: ".85rem" }}>
                  {[
                    { href: "mailto:connect@gugriindustries.com", text: "connect@gugriindustries.com" },
                    { href: "tel:+918005550192",                  text: "+91 800 555 0192" },
                  ].map(link => (
                    <a key={link.href} href={link.href}
                      style={{ fontFamily: "var(--font-epilogue), sans-serif", fontSize: "clamp(.95rem, 1.5vw, 1.45rem)", fontWeight: 400, color: "#fff", textDecoration: "none", transition: "color .25s", display: "block", wordBreak: "break-word" }}
                      onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = "#C5A059")}
                      onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}>
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>

              {/* Hours */}
              <div className="s-anim" style={{ opacity: 0 }}>
                <span style={eyebrow}>Office Hours</span>
                <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
                  {[
                    ["Monday – Friday", "9:00 AM – 7:00 PM IST"],
                    ["Saturday",        "10:00 AM – 4:00 PM IST"],
                    ["Sunday",          "By Appointment"],
                  ].map(([day, hrs]) => (
                    <div key={day} style={{ display: "flex", justifyContent: "space-between", padding: ".6rem 0", borderBottom: "1px solid rgba(255,255,255,.06)", gap: "1rem" }}>
                      <span style={{ fontFamily: "var(--font-label)", fontSize: ".56rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.35)" }}>{day}</span>
                      <span style={{ fontFamily: "var(--font-label)", fontSize: ".56rem", fontWeight: 700, color: "#C5A059", whiteSpace: "nowrap" }}>{hrs}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom image */}
            <div
              className="s-anim"
              style={{ borderRadius: ".375rem", overflow: "hidden", height: 200, filter: "grayscale(1) contrast(1.25)", opacity: 0.38, transition: "opacity .65s, filter .65s", flexShrink: 0 }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.opacity = "1"; el.style.filter = "grayscale(0) contrast(1)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.opacity = "0.38"; el.style.filter = "grayscale(1) contrast(1.25)"; }}
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuABQtbNBXrrgjAmph8_ZhYgqRjRkaAFsqUzljDKfDnNNA8QSGEIuTHsBxYrjw5W9dRLGTeqCZeiHnKu8mZY9AR9wxA_SK4YvQASODPnPew1Wtla9Cbtph8jX_AujJBJvI-q_NS86hOjltn5GeMTln2nx_jqlV2N0X27UEneW_aJ3N59Ti3jTYn_Bq1t7PuET7xYy3qTmpdeX5MpeAnKzYR4tw4SiIDcirYsGERzVWsfA9aQEEZnWJULul8ohcLwi3uo0XvTCAtLpfg"
                alt="Sustainable building materials"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}