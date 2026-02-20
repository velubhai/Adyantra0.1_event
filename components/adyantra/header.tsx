"use client"

import { useState } from "react"
import Image from "next/image";
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Logo from "../datas/adtylogo.png"
import Logo1 from "../datas/download.png"

const navLinks = [
  { href: "/adyantra/home", label: "Home", external: false },
  { href: "/adyantra/home#events", label: "Events", external: false },
  { href: "/adyantra/sponsors", label: "Sponsors", external: false },
  { href: "https://forms.gle/YOUR_FORM_ID", label: "Register", external: true },
  { href: "/adyantra/about", label: "About Us", external: false },
  { href: "/adyantra/contact", label: "Contact Us", external: false },
]

export function AdyantraHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-foreground/10 bg-background/60 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        {/* Left Logo */}
          <Link href="/adyantra/home" className="flex items-center gap-0.5">
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-lg bg-primary/10">
                <Image  src={Logo}  alt="Adyantra Logo" width={100} height={100}  className="object-contain p-1"  />
          </div>
          <span className="font-heading text-lg font-bold tracking-tight text-foreground">
            Adyantra
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-12 md:flex">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-accent px-3 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Right Logo (Desktop) */}
        <div className="hidden items-center gap-2.5 md:flex">
          <span className="font-heading text-lg font-bold tracking-tight text-foreground">
            ADITYA
          </span>
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10">
             <Image  src={Logo1}  alt="Adyantra Logo" width={36} height={36}  className="object-contain p-1"  />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-foreground/10 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-foreground/10 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-3">
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg bg-accent px-3 py-2.5 text-center text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
