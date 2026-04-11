'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

interface NavbarProps {
  onMenuClick: () => void
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full top-0 z-50 px-8 py-8 transition-all duration-500 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md'
          : 'bg-gradient-to-b from-black via-black/80 to-transparent'
      }`}
    >
      <div className="flex justify-between items-center max-w-full mx-auto relative">
        {/* Menu Button */}
        <button
          className="flex items-center space-x-3 text-white hover:text-primary transition-colors duration-300 group"
          onClick={onMenuClick}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>menu</span>
          <span className="font-bold text-[10px] uppercase tracking-widest hidden sm:inline-block font-label">
            Menu
          </span>
        </button>

        {/* Logo */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-black text-white uppercase tracking-[0.3em] absolute left-1/2 -translate-x-1/2 text-center whitespace-nowrap font-headline hover:text-primary transition-colors duration-300"
        >
          GUGRI INDUSTRIES
        </Link>

        {/* Connect CTA */}
        <Link
          href="/connect"
          className="px-5 py-2 border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 font-label"
        >
          Connect
        </Link>
      </div>
    </nav>
  )
}