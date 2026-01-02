"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#", label: "About" },
  { href: "#", label: "Features" },
  { href: "#", label: "Contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 backdrop-blur-lg bg-background/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="font-heading text-xl font-bold bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        >
          Game Nights
        </Link>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden lg:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all rounded-lg hover:bg-purple-500/10 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-purple-400 to-blue-400 group-hover:w-3/4 transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* Desktop Login Button */}
        <Link
          href="/login"
          className="hidden lg:block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all rounded-lg hover:bg-purple-500/10 relative group"
        >
          Login
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-purple-400 to-blue-400 group-hover:w-3/4 transition-all duration-300" />
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden relative w-8 h-8 flex items-center justify-center"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="w-5 h-4 relative flex flex-col justify-center">
            {/* Top line */}
            <span
              className={`absolute h-0.5 w-5 bg-linear-to-r from-purple-400 via-blue-400 to-purple-400 rounded-full transition-all duration-300 ease-in-out animate-gradient ${
                mobileMenuOpen ? "rotate-45 top-1/2 -translate-y-1/2" : "top-0"
              }`}
            />
            {/* Middle line */}
            <span
              className={`absolute h-0.5 w-5 bg-linear-to-r from-purple-400 via-blue-400 to-purple-400 rounded-full top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out animate-gradient ${
                mobileMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
              }`}
            />
            {/* Bottom line */}
            <span
              className={`absolute h-0.5 w-5 bg-linear-to-r from-purple-400 via-blue-400 to-purple-400 rounded-full transition-all duration-300 ease-in-out animate-gradient ${
                mobileMenuOpen
                  ? "-rotate-45 top-1/2 -translate-y-1/2"
                  : "bottom-0"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 overflow-hidden transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-b border-border/40 backdrop-blur-lg bg-background/95">
          <div className="container mx-auto px-6">
            {/* Mobile Navigation Links */}
            <nav className="flex flex-col gap-8 pt-12 pb-24 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-medium text-foreground active:text-purple-400 transition-colors duration-200 py-2 relative"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-linear-to-r from-purple-400 to-blue-400" />
                </Link>
              ))}

              {/* Login Link */}
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-medium text-foreground active:text-purple-400 transition-colors duration-200 py-2 relative"
              >
                Login
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-linear-to-r from-purple-400 to-blue-400" />
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
