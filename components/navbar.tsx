"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reports", href: "#reports" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center border-2 border-current transition-colors group-hover:bg-accent group-hover:border-accent">
            <span
              className={`font-serif text-lg font-bold leading-none transition-colors ${
                scrolled ? "text-foreground group-hover:text-accent-foreground" : "text-white group-hover:text-accent-foreground"
              }`}
            >
              T
            </span>
          </div>
          <div className="flex flex-col">
            <span
              className={`font-serif text-lg font-bold tracking-wide leading-tight transition-colors ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              TGEM
            </span>
            <span
              className={`text-[10px] uppercase tracking-[0.2em] leading-tight transition-colors ${
                scrolled ? "text-muted-foreground" : "text-white/60"
              }`}
            >
              Laboratory
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-[13px] font-medium uppercase tracking-[0.15em] transition-colors hover:opacity-70 ${
                  scrolled ? "text-foreground" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className={`hidden lg:inline-flex px-7 py-2.5 text-[13px] font-semibold uppercase tracking-[0.1em] transition-all ${
            scrolled
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white/20"
          }`}
        >
          Get Certified
        </a>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border px-6 pb-8 animate-in slide-in-from-top-2 duration-200">
          <ul className="flex flex-col gap-1 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-[13px] font-medium uppercase tracking-[0.15em] text-foreground border-b border-border/50"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-6 inline-flex bg-primary px-8 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-primary-foreground"
          >
            Get Certified
          </a>
        </div>
      )}
    </header>
  )
}
