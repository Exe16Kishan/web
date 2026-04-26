"use client";

import Link from "next/link";

const footerCols = [
  {
    title: "Architecture",
    links: ["Estate Models", "Configurator", "Global Locations", "Services"],
  },
  {
    title: "Company",
    links: ["Sustainability", "Careers", "Investor Relations", "Newsroom"],
  },
  { title: "Social", links: ["Instagram", "LinkedIn", "Youtube"] },
];

const label: React.CSSProperties = {
  fontFamily: "var(--font-inter), sans-serif",
  fontSize: ".6rem",
  fontWeight: 700,
  letterSpacing: ".2em",
  textTransform: "uppercase",
  color: "#fff",
  display: "block",
  marginBottom: "2rem",
};

const footLink: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-body)",
  fontSize: ".82rem",
  color: "rgba(255,255,255,.35)",
  textDecoration: "none",
  marginBottom: "1rem",
  transition: "color .25s",
};

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          margin-bottom: 4rem;
        }
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr 1fr;
            gap: 2.5rem;
          }
        }
        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1.2fr 1fr 1fr 1fr 1.2fr;
            gap: 3rem;
            margin-bottom: 6rem;
          }
        }

        /* Digital experience */
        .footer-digital {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        @media (min-width: 1024px) {
          .footer-digital { align-items: flex-end; }
          .footer-digital .footer-digital-label { text-align: right; }
        }

        /* Store buttons */
        .store-btns {
          display: flex;
          flex-direction: column;
          gap: .6rem;
          width: 100%;
        }
        @media (min-width: 480px) {
          .store-btns { flex-direction: row; }
        }

        /* Bottom bar legal links: wrap on mobile */
        .footer-legal {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.25rem 2rem;
        }

        /* Footer padding */
        .footer-inner {
          position: relative;
          z-index: 1;
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 clamp(1.25rem, 5vw, 5rem);
        }

        /* Footer wordmark image */
        .footer-wordmark {
          width: 100%;
          max-width: 340px;
          height: auto;
          object-fit: contain;
          display: block;
          opacity: 0.08;
          /* Invert so the black logo shows white on dark bg */
          filter: invert(1);
          pointer-events: none;
          user-select: none;
        }
        @media (min-width: 768px) {
          .footer-wordmark { max-width: 480px; }
        }
        @media (min-width: 1024px) {
          .footer-wordmark { max-width: 680px; opacity: 0.055; }
        }

        /* Hide link columns */
        .footer-link-col {
          display: flex;
          flex-direction: column;
        }
      `}</style>

      <footer
        style={{
          background: "#000",
          paddingTop: "6rem",
          paddingBottom: "3rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div aria-hidden style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", userSelect: "none", overflow: "hidden" }}>
          <span className="watermark">GUGRI INDUSTRIES</span>
        </div>
       
        {/* <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            userSelect: "none",
            overflow: "hidden",
            padding: "0 2rem",
          }}
        >
          <img
            src="/logos/Company_Wordmark_Black.png"
            alt=""
            className="footer-wordmark"
          />
        </div> */}

        <div className="footer-inner">
          <div className="footer-grid">
            <div>
              <span style={label}>Region</span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: ".5rem",
                  color: "rgba(255,255,255,.35)",
                  fontSize: ".82rem",
                  cursor: "pointer",
                  marginBottom: "2rem",
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>public</span>
                International / English
              </div>
              <img
                src="/logos/Footer.png"
                alt="Gugri Industries"
                style={{
                  height: 110,
                  width: "auto",
                  objectFit: "contain",
                  display: "block",
                  maxWidth: "100%",
                }}
              />
            </div>

            {footerCols.map(col => (
              <div key={col.title} className="footer-link-col">
                <span style={label}>{col.title}</span>
                {col.links.map(l => (
                  <Link
                    key={l}
                    href="#"
                    style={footLink}
                    onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = "#C5A059")}
                    onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,.35)")}
                  >
                    {l}
                  </Link>
                ))}
              </div>
            ))}

            <div className="footer-digital">
              <span style={label} className="footer-digital-label">Digital Experience</span>
              <div className="store-btns">
                {[
                  {
                    name: "App Store",
                    sub: "Download on the",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
                    color: "#007AFF",
                  },
                  {
                    name: "Google Play",
                    sub: "Get it on",
                    icon: "https://cdn-icons-png.flaticon.com/512/300/300218.png",
                    color: "#34A853",
                  },
                ].map((s, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: ".6rem",
                      padding: ".6rem 1.2rem",
                      border: "1px solid rgba(255,255,255,.12)",
                      background: "#0f0f10",
                      borderRadius: ".35rem",
                      cursor: "pointer",
                      transition: "all .3s ease",
                      flex: 1,
                      minWidth: 0,
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = s.color;
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,.12)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <img
                      src={s.icon}
                      alt={s.name}
                      style={{ width: 18, height: 18, objectFit: "contain", filter: "invert(1)", flexShrink: 0 }}
                    />
                    <div style={{ display: "flex", flexDirection: "column", lineHeight: 1, minWidth: 0 }}>
                      <span style={{ fontSize: ".65rem", color: "rgba(255,255,255,.4)", marginBottom: ".1rem", whiteSpace: "nowrap" }}>{s.sub}</span>
                      <span style={{ fontSize: ".75rem", fontWeight: 600, color: "#fff", whiteSpace: "nowrap" }}>{s.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,.06)",
              paddingTop: "2.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.25rem",
            }}
          >
            <div className="footer-legal">
              {["Legal Notice", "Privacy Policy", "Cookie Policy", "Accessibility"].map(t => (
                <Link
                  key={t}
                  href="#"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: ".55rem",
                    letterSpacing: ".18em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,.22)",
                    textDecoration: "none",
                    transition: "color .25s",
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = "#C5A059")}
                  onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,.22)")}
                >
                  {t}
                </Link>
              ))}
            </div>
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: ".55rem",
                letterSpacing: ".2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,.15)",
                textAlign: "center",
              }}
            >
              © 2024 GUGRI INDUSTRIES. Engineering the Natural World. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}