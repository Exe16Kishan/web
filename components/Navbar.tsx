"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface NavbarProps {
  onMenuClick: () => void;
  menuOpen?: boolean;
}

export default function Navbar({ onMenuClick, menuOpen = false }: NavbarProps) {
  const [solid, setSolid] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <style>{`
        /*  Logo sizes */

        /* Mobile: compact emblem, fixed small size */
        .nav-logo-mobile {
          height: 44px;
          width: 44px;
          object-fit: contain;
          display: block;
          transition: opacity .3s, filter .3s;
          filter: brightness(1.05);
        }

        /* Desktop */
        .nav-logo-desktop {
          height: 88px;
          width: auto;
          max-width: 220px;
          object-fit: contain;
          display: block;
          transition: opacity .3s, filter .3s;
          filter: blur(0.3px) brightness(1.05);
        }

        /* Show/hide based on breakpoint */
        .nav-logo-mobile  { display: block; }
        .nav-logo-desktop { display: none;  }
        @media (min-width: 768px) {
          .nav-logo-mobile  { display: none;  }
          .nav-logo-desktop { display: block; }
        }

        /* Connect button  */
        .nav-connect {
          padding: .45rem 1rem;
          font-size: .58rem;
        }
        @media (min-width: 640px) {
          .nav-connect { padding: .5rem 1.5rem; font-size: .6rem; }
        }

        /* Nav padding  */
        .nav-inner {
          padding: 1.1rem clamp(1rem, 3vw, 2rem);
        }
        @media (min-width: 768px) {
          .nav-inner { padding: 1.75rem clamp(1.25rem, 3vw, 2rem); }
        }
      `}</style>

      <nav
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "background .4s",
          background: solid || menuOpen ? "rgba(0,0,0,.95)" : undefined,
        }}
        className={!solid && !menuOpen ? "nav-gradient" : ""}
      >
        <div
          className="nav-inner"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: "1600px",
            margin: "0 auto",
            position: "relative",
          }}
        >
          {/*Left: Hamburger */}
          <button
            onClick={onMenuClick}
            aria-label="Toggle menu"
            style={{
              display: "flex",
              alignItems: "center",
              gap: ".6rem",
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              transition: "color .3s",
              flexShrink: 0,
              zIndex: 1,
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.color = "#C5A059")}
            onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.color = "#fff")}
          >
            {/* Hamburger */}
            <div style={{ width: 24, height: 17, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              {[0, 1, 2].map(i => (
                <span
                  key={i}
                  style={{
                    display: "block",
                    height: "1.5px",
                    background: "currentColor",
                    transformOrigin: "center",
                    transition: "transform .45s ease, opacity .3s",
                    transform:
                      menuOpen && i === 0 ? "translateY(7.75px) rotate(45deg)"
                      : menuOpen && i === 2 ? "translateY(-7.75px) rotate(-45deg)"
                      : "none",
                    opacity: menuOpen && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </div>

            <span
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: ".625rem",
                fontWeight: 700,
                letterSpacing: ".18em",
                textTransform: "uppercase",
                display: "none",
              }}
              className="nav-menu-label"
            >
              {menuOpen ? "Close" : "Menu"}
            </span>
          </button>
          <Link
            href="/"
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              lineHeight: 0,
            }}
          >
            {/* Mobile logo*/}
            <img
              src="/logos/CompanyLogo.png"
              alt="Gugri Industries"
              className="nav-logo-mobile"
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLImageElement;
                el.style.opacity = ".7";
                el.style.filter = "brightness(1.2)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLImageElement;
                el.style.opacity = "1";
                el.style.filter = "brightness(1.05)";
              }}
            />

            {/* Desktop logo */}
            <img
              src="/logos/CompanyLogo.png"
              alt="Gugri Industries"
              className="nav-logo-desktop"
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLImageElement;
                el.style.opacity = ".7";
                el.style.filter = "blur(0px) brightness(1.1)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLImageElement;
                el.style.opacity = "1";
                el.style.filter = "blur(0.6px) brightness(1.05)";
              }}
            />
          </Link>

          {/* Right: Connect */}
          <Link
            href="/connect"
            className="nav-connect"
            style={{
              border: "1px solid rgba(255,255,255,.22)",
              color: "#fff",
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 700,
              letterSpacing: ".18em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "background .3s, color .3s",
              flexShrink: 0,
              whiteSpace: "nowrap",
              zIndex: 1,
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#fff";
              el.style.color = "#000";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "transparent";
              el.style.color = "#fff";
            }}
          >
            Connect
          </Link>
        </div>
      </nav>

      <style>{`
        @media (min-width: 768px) {
          .nav-menu-label { display: inline !important; }
        }
      `}</style>
    </>
  );
}