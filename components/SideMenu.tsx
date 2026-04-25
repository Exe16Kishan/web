"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { href: "/",           label: "Home" },
  { href: "/philosophy", label: "Philosophy" },
  { href: "/innovation", label: "Innovation" },
  { href: "/services",   label: "Services" },
  { href: "/technology", label: "Technology" },
  { href: "/experience", label: "Experience" },
  { href: "/connect",    label: "Connect" },
];

const EASE = [0.76, 0, 0.24, 1] as const;

export default function SideMenu({ isOpen, onClose }: SideMenuProps) {
  /* Lock body scroll  */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  /* Close on Escape */
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.38, ease: "easeOut" }}
            onClick={onClose}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 59,
              background: "rgba(0,0,0,.55)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
            }}
          />
          <motion.aside
            key="panel"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.58, ease: EASE }}
            style={{
              position: "fixed",
              top: 0, left: 0, bottom: 0,
              width: "min(460px, 92vw)",
              zIndex: 60,
              background: "rgba(8, 8, 10, 0.72)",
              backdropFilter: "blur(28px) saturate(160%)",
              WebkitBackdropFilter: "blur(28px) saturate(160%)",
              borderRight: "1px solid rgba(255,255,255,.07)",
              boxShadow: "4px 0 48px rgba(0,0,0,.65)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "0",
              overflowY: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                padding: "2.5rem 3rem 2rem",
                borderBottom: "1px solid rgba(255,255,255,.07)",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-epilogue), sans-serif",
                    fontWeight: 900,
                    fontSize: ".92rem",
                    letterSpacing: ".32em",
                    textTransform: "uppercase",
                    color: "#fff",
                    marginBottom: ".3rem",
                  }}
                >
                  GUGRI INDUSTRIES
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-label)",
                    fontSize: ".55rem",
                    fontWeight: 600,
                    letterSpacing: ".24em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,.35)",
                  }}
                >
                  The Regenerative Architect
                </p>
              </div>

              <button
                onClick={onClose}
                aria-label="Close menu"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "rgba(255,255,255,.45)",
                  transition: "color .25s",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: ".25rem",
                  marginTop: ".15rem",
                }}
                onMouseEnter={e =>
                  ((e.currentTarget as HTMLButtonElement).style.color = "#fff")
                }
                onMouseLeave={e =>
                  ((e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,.45)")
                }
              >
                <span className="material-symbols-outlined" style={{ fontSize: 28 }}>
                  close
                </span>
              </button>
            </div>
            <nav
              style={{
                flex: 1,
                padding: "1rem 0",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ x: -32, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -16, opacity: 0 }}
                  transition={{ delay: 0.1 + i * 0.065, duration: 0.42, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "1.05rem 3rem",
                      fontFamily: "var(--font-epilogue), sans-serif",
                      fontSize: "clamp(1.7rem, 4.5vw, 2.6rem)",
                      fontWeight: 300,
                      letterSpacing: "-.02em",
                      color: "rgba(255,255,255,.38)",
                      textDecoration: "none",
                      borderBottom: "1px solid rgba(255,255,255,.06)",
                      transition: "color .3s, background .3s, padding-left .35s",
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.color = "#fff";
                      el.style.paddingLeft = "3.5rem";
                      el.style.background = "rgba(255,255,255,.04)";
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.color = "rgba(255,255,255,.38)";
                      el.style.paddingLeft = "3rem";
                      el.style.background = "transparent";
                    }}
                  >
                    <span>{link.label}</span>
                    <span
                      className="material-symbols-outlined"
                      style={{
                        fontSize: 20,
                        color: "rgba(255,255,255,.18)",
                        transition: "color .3s, transform .3s",
                        marginRight: "3rem",
                      }}
                    >
                      arrow_forward
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div>
              <div style={{ height: 3, background: "#C5A059", opacity: .65 }} />

              <div
                style={{
                  padding: "2rem 3rem 2.5rem",
                  borderTop: "1px solid rgba(255,255,255,.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-label)",
                      fontSize: ".55rem",
                      fontWeight: 700,
                      letterSpacing: ".2em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,.28)",
                      marginBottom: ".3rem",
                    }}
                  >
                    © 2024 Gugri Industries
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-label)",
                      fontSize: ".55rem",
                      letterSpacing: ".15em",
                      color: "rgba(255,255,255,.18)",
                    }}
                  >
                    Engineering the Natural World
                  </p>
                </div>
                <div style={{ display: "flex", gap: ".6rem" }}>
                  {["ig", "in", "yt"].map(s => (
                    <div
                      key={s}
                      style={{
                        width: 32, height: 32,
                        borderRadius: ".25rem",
                        background: "rgba(255,255,255,.07)",
                        border: "1px solid rgba(255,255,255,.08)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontFamily: "var(--font-label)",
                        fontSize: ".5rem",
                        fontWeight: 700,
                        letterSpacing: ".05em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,.38)",
                        cursor: "pointer",
                        transition: "background .25s, color .25s, border-color .25s",
                      }}
                      onMouseEnter={e => {
                        const el = e.currentTarget as HTMLDivElement;
                        el.style.background = "#C5A059";
                        el.style.color = "#000";
                        el.style.borderColor = "#C5A059";
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLDivElement;
                        el.style.background = "rgba(255,255,255,.07)";
                        el.style.color = "rgba(255,255,255,.38)";
                        el.style.borderColor = "rgba(255,255,255,.08)";
                      }}
                    >
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}