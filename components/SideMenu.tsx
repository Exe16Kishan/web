'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface SideMenuProps {
  isOpen: boolean
  onClose: () => void
}

const navLinks = [
  { href: '/philosophy', label: 'Philosophy' },
  { href: '/innovation', label: 'Innovation' },
  { href: '/services', label: 'Services' },
  { href: '/technology', label: 'Technology' },
  { href: '/experience', label: 'Experience' },
  { href: '/connect', label: 'Connect' },
]

export default function SideMenu({ isOpen, onClose }: SideMenuProps) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const linksRef = useRef<HTMLAnchorElement[]>([])
  const backdropRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!overlayRef.current || !menuRef.current) return

    if (isOpen) {
      document.body.style.overflow = 'hidden'

      gsap.set(overlayRef.current, { display: 'flex' })
      gsap.set(menuRef.current, { x: '-100%' })

      gsap.to(backdropRef.current, { opacity: 1, duration: 0.4, ease: 'power2.out' })
      gsap.to(menuRef.current, { x: 0, duration: 0.6, ease: 'power4.out' })

      gsap.fromTo(
        linksRef.current,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.07,
          delay: 0.3,
          duration: 0.6,
          ease: 'power3.out',
        }
      )
    } else {
      document.body.style.overflow = ''

      gsap.to(menuRef.current, {
        x: '-100%',
        duration: 0.5,
        ease: 'power4.in',
      })
      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: 'power2.in',
        onComplete: () => {
          if (overlayRef.current) {
            gsap.set(overlayRef.current, { display: 'none' })
          }
        },
      })
    }
  }, [isOpen])

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[60] hidden"
      style={{ display: 'none' }}
    >
      {/* Backdrop */}
      <div
        ref={backdropRef}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        style={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        ref={menuRef}
        className="relative z-10 w-full max-w-md h-full bg-black flex flex-col justify-between py-16 px-12 border-r border-white/5"
        style={{ transform: 'translateX(-100%)' }}
      >
        {/* Close */}
        <button
          className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors"
          onClick={onClose}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>close</span>
        </button>

        {/* Brand */}
        <div className="mt-4">
          <div className="text-lg font-black text-white uppercase tracking-[0.3em] font-headline mb-1">
            GUGRI INDUSTRIES
          </div>
          <p className="text-white/30 text-xs tracking-widest uppercase font-label">
            The Regenerative Architect
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-2 -mx-2">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              ref={el => { if (el) linksRef.current[i] = el }}
              onClick={onClose}
              className="group flex items-center justify-between px-2 py-4 text-4xl md:text-5xl font-light tracking-tight text-white/40 hover:text-primary transition-all duration-500 font-headline border-b border-white/5"
            >
              <span>{link.label}</span>
              <span
                className="material-symbols-outlined text-white/20 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300"
                style={{ fontSize: '24px' }}
              >
                arrow_forward
              </span>
            </a>
          ))}
        </nav>

        {/* Footer */}
        <div className="space-y-4">
          <p className="text-white/20 text-[10px] uppercase tracking-widest font-label">
            © 2024 Gugri Industries
          </p>
          <p className="text-white/20 text-[10px] font-label">
            Engineering the Natural World
          </p>
        </div>
      </div>
    </div>
  )
}