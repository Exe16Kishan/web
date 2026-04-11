'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-black pt-32 pb-12 relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none overflow-hidden">
        <span className="watermark">GUGRI INDUSTRIES</span>
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-8 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-16 mb-32">
          {/* Region */}
          <div className="col-span-2 md:col-span-1">
            <h5 className="text-white text-[11px] font-bold uppercase tracking-widest mb-8 font-label">Region</h5>
            <div className="flex items-center gap-2 text-white/40 text-sm hover:text-primary cursor-pointer transition-colors">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>public</span>
              <span className="font-medium font-body">International / English</span>
            </div>
          </div>

          {/* Architecture */}
          <div>
            <h5 className="text-white text-[11px] font-bold uppercase tracking-widest mb-8 font-label">Architecture</h5>
            <ul className="flex flex-col gap-4 text-white/40 text-sm font-body">
              {['Estate Models', 'Configurator', 'Global Locations', 'Services'].map(item => (
                <li key={item}>
                  <Link href="#" className="hover:text-primary transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-white text-[11px] font-bold uppercase tracking-widest mb-8 font-label">Company</h5>
            <ul className="flex flex-col gap-4 text-white/40 text-sm font-body">
              {['Sustainability', 'Careers', 'Investor Relations', 'Newsroom'].map(item => (
                <li key={item}>
                  <Link href="#" className="hover:text-primary transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h5 className="text-white text-[11px] font-bold uppercase tracking-widest mb-8 font-label">Social</h5>
            <ul className="flex flex-col gap-4 text-white/40 text-sm font-body">
              {['Instagram', 'LinkedIn', 'Youtube'].map(item => (
                <li key={item}>
                  <Link href="#" className="hover:text-primary transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Digital Experience */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-end">
            <h5 className="text-white text-[11px] font-bold uppercase tracking-widest mb-8 w-full text-left md:text-right font-label">
              Digital Experience
            </h5>
            <div className="flex gap-4">
              <div className="w-32 h-10 bg-zinc-900 rounded border border-white/10 flex items-center justify-center hover:border-white/30 transition-colors cursor-pointer px-3">
                <span className="text-white text-xs font-label">App Store</span>
              </div>
              <div className="w-32 h-10 bg-zinc-900 rounded border border-white/10 flex items-center justify-center hover:border-white/30 transition-colors cursor-pointer px-3">
                <span className="text-white text-xs font-label">Google Play</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-12 flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-[10px] uppercase tracking-widest text-white/30 font-label">
            {['Legal Notice', 'Privacy Policy', 'Cookie Policy', 'Accessibility'].map(item => (
              <Link key={item} href="#" className="hover:text-primary transition-colors">{item}</Link>
            ))}
          </div>
          <p className="text-center text-[10px] text-white/20 tracking-[0.2em] font-label uppercase">
            © 2024 GUGRI INDUSTRIES. Engineering the Natural World. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}