"use client";

import Footer from "@/components/Footer";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ConnectPage() {
  const heroRef    = useRef<HTMLElement>(null);
  const formColRef = useRef<HTMLDivElement>(null);
  const sideColRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    /*  headline + subtitle */
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll(".h-anim"),
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.22, duration: 1.15, ease: "power3.out", delay: 0.3 }
      );
    }

    /*  labelled child  */
    if (formColRef.current) {
      ScrollTrigger.create({
        trigger: formColRef.current,
        start: "top 68%",
        once: true,
        onEnter: () =>
          gsap.fromTo(
            formColRef.current!.querySelectorAll(".f-anim"),
            { y: 32, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.08, duration: 0.72, ease: "power3.out" }
          ),
      });
    }

    /* sidebar */
    if (sideColRef.current) {
      ScrollTrigger.create({
        trigger: sideColRef.current,
        start: "top 68%",
        once: true,
        onEnter: () =>
          gsap.fromTo(
            sideColRef.current!.querySelectorAll(".s-anim"),
            { y: 32, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.12, duration: 0.72, ease: "power3.out" }
          ),
      });
    }
  }, []);

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

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    ((e.currentTarget as HTMLElement).style.borderBottomColor = "#C5A059");
  const onBlur  = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    ((e.currentTarget as HTMLElement).style.borderBottomColor = "#434843");

  return (
    <div style={{ background: "#000", color: "#fff" }}>
      <section
        ref={heroRef}
        style={{
          position: "relative",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtabJJvIRlWZx7rUiglLvyp2HujH6fqG6dMYRahtOpRM5irpqQJ47y4Xs5L_xQCxC0f6TAI3AI9HHAqj0MGMFjEVYPXh8pO7276Isa4XbGq55cidKJVSGDuJ-5jW51HUd_vn4RtdPnpqNyi4rOGjvuVG56WSuG7UUTeKTblBoRJO3hLbe-FzblRb6NPbtdNYK57SM-G7Q3KRq7e0BsUVsWJlTwIeKs-B60ajUTHgQWZ_VlzACbZj-mtMx13NnpC4lznL2g1Q33JHI"
            alt="Forest architecture"
            style={{ width: "100%", height: "100%", objectFit: "cover",
              filter: "brightness(0.45) contrast(1.15)" }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 30%, transparent 60%, #000 100%)",
          }} />
        </div>
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 1.5rem" }}>
          <h1
            className="h-anim"
            style={{
              fontFamily: "var(--font-epilogue), sans-serif",
              fontWeight: 900,
              fontSize: "clamp(3.2rem, 9.5vw, 9rem)",
              lineHeight: 0.97,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              color: "#fff",
              marginBottom: "1.6rem",
            }}
          >
            Let&apos;s Build the{" "}
            <span style={{ color: "#C5A059" }}>Future</span>
            {" "}Together
          </h1>

          <p
            className="h-anim"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontSize: "clamp(0.95rem, 1.5vw, 1.25rem)",
              color: "rgba(255,255,255,0.52)",
              lineHeight: 1.7,
              maxWidth: 500,
              margin: "0 auto",
            }}
          >
            Pioneering sustainable luxury through regenerative
            architectural partnerships and engineered precision.
          </p>
        </div>
        <div style={{
          position: "absolute", bottom: "2.8rem",
          left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column",
          alignItems: "center", gap: "0.6rem",
          opacity: 0.38, zIndex: 1,
        }}>
          <span style={{
            fontFamily: "var(--font-label)",
            fontSize: "0.52rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
          }}>
            Scroll to Explore
          </span>
          <div style={{ width: 1, height: 48, background: "#C5A059" }} />
        </div>
      </section>
      <section style={{
        display: "grid",
        gridTemplateColumns: "58% 42%",
        background: "#000",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        minHeight: "85vh",
      }}>
        <div
          ref={formColRef}
          style={{
            padding: "6.5rem 6rem 6.5rem 7rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ maxWidth: 440 }}>

            <h2 className="f-anim" style={{
              fontFamily: "var(--font-epilogue), sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 2.8vw, 3rem)",
              textTransform: "uppercase",
              letterSpacing: "-0.03em",
              marginBottom: "0.4rem",
              opacity: 0,
            }}>
              Inquiry
            </h2>

            <p className="f-anim" style={{
              color: "rgba(255,255,255,0.32)",
              fontSize: "0.85rem",
              marginBottom: "3rem",
              opacity: 0,
            }}>
              Submit your details for a private architectural consultation.
            </p>

            {/* FULL NAME */}
            <div className="f-anim" style={{ marginBottom: "2.5rem", opacity: 0 }}>
              <label style={fieldLabel}>Full Name</label>
              <input type="text" style={inputBase} onFocus={onFocus} onBlur={onBlur} />
            </div>

            {/* EMAIL */}
            <div className="f-anim" style={{ marginBottom: "2.5rem", opacity: 0 }}>
              <label style={fieldLabel}>Email Address</label>
              <input type="email" style={inputBase} onFocus={onFocus} onBlur={onBlur} />
            </div>

            {/* SELECT PROJECT TYPE */}
            <div className="f-anim" style={{ marginBottom: "2.5rem", position: "relative", opacity: 0 }}>
              <label style={{ ...fieldLabel, color: "#C5A059" }}>Select Project Type</label>
              {/* Wrapper with bottom border */}
              <div style={{ position: "relative" }}>
                <select
                  defaultValue=""
                  style={{
                    ...inputBase,
                    appearance: "none",
                    cursor: "pointer",
                    paddingRight: "1.5rem",
                    fontSize: "0.88rem",
                    color: "rgba(255,255,255,0.65)",
                    background: "transparent",
                  }}
                  onFocus={onFocus}
                  onBlur={onBlur}
                >
                  <option value=""      style={{ background: "#131313" }}>Area of Interest</option>
                  <option value="res"   style={{ background: "#131313" }}>Residential Masterpiece</option>
                  <option value="com"   style={{ background: "#131313" }}>Sustainable Commercial Space</option>
                  <option value="regen" style={{ background: "#131313" }}>Regenerative Strategy</option>
                  <option value="press" style={{ background: "#131313" }}>Press &amp; Media</option>
                </select>
                <span
                  className="material-symbols-outlined"
                  style={{
                    position: "absolute", right: 0, bottom: "0.6rem",
                    fontSize: 18, color: "rgba(255,255,255,0.35)",
                    pointerEvents: "none",
                  }}
                >
                  expand_more
                </span>
              </div>
            </div>

            {/* MESSAGE */}
            <div className="f-anim" style={{ marginBottom: "2.8rem", opacity: 0 }}>
              <label style={fieldLabel}>Message</label>
              <textarea
                rows={4}
                style={{ ...inputBase, resize: "none", paddingTop: "0.4rem" }}
                onFocus={onFocus}
                onBlur={onBlur}
              />
            </div>

            {/* SUBMIT */}
            <button
              className="f-anim"
              style={{
                width: "100%",
                background: "#C5A059",
                color: "#000",
                fontFamily: "var(--font-label)",
                fontWeight: 700,
                fontSize: "0.62rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                padding: "1.35rem 1.5rem",
                border: "none",
                borderRadius: "0.375rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
                transition: "filter 0.25s, transform 0.15s",
                opacity: 0,
              }}
              onMouseEnter={e =>
                ((e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.1)")
              }
              onMouseLeave={e =>
                ((e.currentTarget as HTMLButtonElement).style.filter = "none")
              }
              onMouseDown={e =>
                ((e.currentTarget as HTMLButtonElement).style.transform = "scale(0.985)")
              }
              onMouseUp={e =>
                ((e.currentTarget as HTMLButtonElement).style.transform = "scale(1)")
              }
            >
              Send Message
              <span className="material-symbols-outlined" style={{ fontSize: 17 }}>
                arrow_forward
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT sidebar */}
        <div
          ref={sideColRef}
          style={{
            background: "#131313",
            borderLeft: "1px solid rgba(255,255,255,0.06)",
            padding: "6.5rem 5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "4.5rem" }}>
            <div className="s-anim" style={{ opacity: 0 }}>
              <span style={{
                fontFamily: "var(--font-label)",
                fontSize: "0.57rem",
                fontWeight: 700,
                letterSpacing: "0.38em",
                textTransform: "uppercase",
                color: "#C5A059",
                display: "block",
                marginBottom: "1.4rem",
              }}>
                Location
              </span>
              <h3 style={{
                fontFamily: "var(--font-epilogue), sans-serif",
                fontWeight: 300,
                fontSize: "clamp(1.5rem, 2.2vw, 2.2rem)",
                lineHeight: 1.2,
                marginBottom: "1.2rem",
              }}>
                India Headquarters
              </h3>
              <p style={{
                color: "rgba(255,255,255,0.42)",
                lineHeight: 1.9,
                fontSize: "0.88rem",
                fontFamily: "var(--font-body)",
              }}>
                A-404, Tech Park North,<br />
                Electronic City, Bangalore 560100<br />
                Karnataka, India
              </p>
            </div>

            {/* Digital */}
            <div className="s-anim" style={{ opacity: 0 }}>
              <span style={{
                fontFamily: "var(--font-label)",
                fontSize: "0.57rem",
                fontWeight: 700,
                letterSpacing: "0.38em",
                textTransform: "uppercase",
                color: "#C5A059",
                display: "block",
                marginBottom: "1.4rem",
              }}>
                Digital
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {[
                  { href: "mailto:connect@gugriindustries.com", text: "connect@gugriindustries.com" },
                  { href: "tel:+918005550192",                  text: "+91 800 555 0192" },
                ].map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    style={{
                      fontFamily: "var(--font-epilogue), sans-serif",
                      fontSize: "clamp(1rem, 1.5vw, 1.5rem)",
                      fontWeight: 400,
                      color: "#fff",
                      textDecoration: "none",
                      transition: "color 0.25s",
                      display: "block",
                    }}
                    onMouseEnter={e =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = "#C5A059")
                    }
                    onMouseLeave={e =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")
                    }
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom image */}
          <div
            className="s-anim"
            style={{
              marginTop: "4rem",
              borderRadius: "0.375rem",
              overflow: "hidden",
              height: 220,
              filter: "grayscale(1) contrast(1.25)",
              opacity: 0.38,
              transition: "opacity 0.65s, filter 0.65s",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.opacity = "1";
              el.style.filter  = "grayscale(0) contrast(1)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.opacity = "0.38";
              el.style.filter  = "grayscale(1) contrast(1.25)";
            }}
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
  );
}