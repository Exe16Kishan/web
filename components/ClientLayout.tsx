"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import SideMenu from "@/components/SideMenu";
import SmoothScroll from "./SmoothScroll";
import ScrollProgress from "./ScrollProgress";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <SideMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <Navbar onMenuClick={() => setMenuOpen((v) => !v)} menuOpen={menuOpen} />
      <main>{children}</main>
    </>
  );
}