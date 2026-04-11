'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

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
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-60 flex">
          <motion.div
            className="absolute inset-0 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="relative z-10 w-full max-w-md h-full bg-white flex flex-col justify-between py-16 px-12"
          >
            <button
              className="absolute top-8 right-8 text-black/60 hover:text-black transition-colors"
              onClick={onClose}
            >
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>

            {/* TOP HEADING */}
            <div className="mt-6 px-2 space-y-2">
              <div className="text-lg font-black text-black uppercase tracking-[0.35em] font-headline leading-tight">
                GUGRI INDUSTRIES
              </div>
              <p className="text-black/40 text-xs tracking-[0.25em] uppercase font-label leading-relaxed">
                The Regenerative Architect
              </p>
            </div>

            {/* NAV */}
            <nav className="flex flex-col space-y-2 -mx-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="group flex items-center justify-between px-2 py-4 text-4xl md:text-5xl font-light tracking-tight text-black/50 hover:text-black transition-all duration-300 font-headline border-b border-black/10"
                >
                  <span>{link.label}</span>
                  <span className="material-symbols-outlined text-black/30 group-hover:translate-x-1 transition-all duration-300">
                    arrow_forward
                  </span>
                </motion.a>
              ))}
            </nav>

            {/* FOOTER */}
            <div className="px-2 pt-6 space-y-2 border-t border-black/10">
              <p className="text-black/30 text-[10px] uppercase tracking-[0.25em] font-label">
                © 2024 Gugri Industries
              </p>
              <p className="text-black/30 text-[10px] font-label tracking-wide">
                Engineering the Natural World
              </p>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}