'use client'

import type { Metadata } from 'next'
import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import SideMenu from '@/components/SideMenu'
import CustomCursor from '@/components/CustomCursor'
import { useState } from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>GUGRI INDUSTRIES | The Regenerative Architect</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,300;0,400;0,600;0,700;0,800;0,900;1,300;1,400;1,700;1,800;1,900&family=Manrope:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-background font-body overflow-x-hidden">
        <CustomCursor />
        <SideMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        <Navbar onMenuClick={() => setMenuOpen(true)} />
        <main>{children}</main>
      </body>
    </html>
  )
}