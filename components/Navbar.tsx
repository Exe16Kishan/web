"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface NavbarProps {
  onMenuClick: () => void;
  menuOpen?: boolean;
}

export default function Navbar({ onMenuClick, menuOpen = false }: NavbarProps) {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "1.75rem 2rem",
        transition: "background .4s",
        background: solid || menuOpen ? "rgba(0,0,0,.95)" : undefined,
      }}
      className={!solid && !menuOpen ? "nav-gradient" : ""}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1600px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        {/* Hamburger */}
        <button
          onClick={onMenuClick}
          aria-label="Toggle menu"
          style={{
            display: "flex",
            alignItems: "center",
            gap: ".75rem",
            background: "none",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            transition: "color .3s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.color = "#C5A059")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.color = "#fff")
          }
        >
          <div
            style={{
              width: 26,
              height: 18,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  height: "1.5px",
                  background: "currentColor",
                  transformOrigin: "center",
                  transition: "transform .45s ease, opacity .3s",
                  transform:
                    menuOpen && i === 0
                      ? "translateY(8.25px) rotate(45deg)"
                      : menuOpen && i === 2
                        ? "translateY(-8.25px) rotate(-45deg)"
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
            }}
          >
            {menuOpen ? "Close" : "Menu"}
          </span>
        </button>

        {/* Logo image – centred */}
        <Link
          href="/"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <img
            src="/logos/Logo2.png"
            alt="Gugri Industries"
            className="size-48"
            style={{
              objectFit: "contain",
              transition: "opacity .3s, filter .3s",
              filter: "blur(0.3px)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLImageElement;
              el.style.opacity = ".7";
              el.style.filter = "blur(0px) brightness(1.1)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLImageElement;
              el.style.opacity = "1";
              el.style.filter = "blur(0.6px) brightness(1.05)";
            }}
          />
        </Link>

        {/* Connect */}
        <Link
          href="/connect"
          style={{
            padding: ".5rem 1.5rem",
            border: "1px solid rgba(255,255,255,.22)",
            color: "#fff",
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: ".6rem",
            fontWeight: 700,
            letterSpacing: ".18em",
            textTransform: "uppercase",
            textDecoration: "none",
            transition: "background .3s, color .3s",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.background = "#fff";
            el.style.color = "#000";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.background = "transparent";
            el.style.color = "#fff";
          }}
        >
          Connect
        </Link>
      </div>
    </nav>
  );
}
