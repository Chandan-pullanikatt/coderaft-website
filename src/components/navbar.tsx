"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"
import { motion } from "framer-motion"

const navItems = [
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Process", href: "/process" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center px-4 mx-auto">
        <div className="mr-8 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block font-heading text-xl tracking-wide">
              Coderaft
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors hover:text-[#00D4FF] ${
                  pathname === item.href ? "text-[#00D4FF] font-medium" : "text-foreground/80"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Mobile Nav would go here */}
          </div>
          <nav className="flex items-center space-x-4">
            <ThemeToggle />
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,212,255,0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#00D4FF] to-[#06B6D4] text-[#0A2540] hover:opacity-90 font-bold border-0 h-10 px-6 rounded-full shadow-[0_0_10px_rgba(0,212,255,0.4)] transition-all text-sm"
            >
              Get in Touch
            </motion.button>
          </nav>
        </div>
      </div>
    </header>
  )
}
