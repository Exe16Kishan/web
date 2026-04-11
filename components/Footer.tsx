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
    <footer
      style={{
        background: "#000",
        paddingTop: "8rem",
        paddingBottom: "3rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Watermark */}
      <div
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
        }}
      >
        <span className="watermark">GUGRI INDUSTRIES</span>
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1440,
          margin: "0 auto",
          padding: "0 5rem",
        }}
      >
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr 1fr 1fr 1.2fr",
            gap: "3rem",
            marginBottom: "6rem",
          }}
        >
          {/* Region */}
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
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>public</span>
              International / English
            </div>
          </div>

          {footerCols.map((col) => (
            <div key={col.title}>
              <span style={label}>{col.title}</span>
              {col.links.map((l) => (
                <Link
                  key={l}
                  href="#"
                  style={footLink}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "#C5A059")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      "rgba(255,255,255,.35)")
                  }
                >
                  {l}
                </Link>
              ))}
            </div>
          ))}

          {/* Digital experience */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
            <span style={{ ...label, textAlign: "right" }}>Digital Experience</span>
            <div style={{ display: "flex", gap: ".75rem" }}>
              {["App Store", "Google Play"].map((s) => (
                <div
                  key={s}
                  style={{
                    padding: ".5rem 1rem",
                    border: "1px solid rgba(255,255,255,.1)",
                    background: "#18181b",
                    borderRadius: ".25rem",
                    fontSize: ".6rem",
                    color: "rgba(255,255,255,.5)",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    fontFamily: "var(--font-inter), sans-serif",
                    transition: "border-color .25s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,.3)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,.1)")
                  }
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
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
          <div style={{ display: "flex", gap: "2.5rem" }}>
            {["Legal Notice", "Privacy Policy", "Cookie Policy", "Accessibility"].map((t) => (
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
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "#C5A059")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(255,255,255,.22)")
                }
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
            }}
          >
            © 2024 GUGRI INDUSTRIES. Engineering the Natural World. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}