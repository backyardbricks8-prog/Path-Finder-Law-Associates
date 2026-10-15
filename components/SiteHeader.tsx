'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { FIRM_DETAILS } from '@/lib/data';

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About Us', href: '/#about' },
    { label: 'Practice Areas', href: '/#practice-areas' },
    { label: 'Why Us', href: '/#why-us' },
    { label: 'Reviews', href: '/#reviews' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-black/10 shadow-xs'
            : 'bg-white border-black/8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single primary brand anchor) */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group shrink-0 focus-visible:outline-2 focus-visible:outline-[#800020]"
            aria-label="Path Finder Law Associates Home"
          >
            {/* Architectural Compass / Cross Emblem */}
            <div className="w-8 h-8 bg-[#111111] flex items-center justify-center text-[#EACEAA] transition-transform duration-200 group-hover:scale-105">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2v20M2 12h20" strokeOpacity="0.3" />
                <polygon points="12,6 15,12 12,18 9,12" fill="#EACEAA" stroke="none" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-base text-[#111111] uppercase leading-none">
                Path Finder
              </span>
              <span className="text-[10px] tracking-[0.22em] text-[#800020] uppercase font-medium mt-1 leading-none">
                Law Associates
              </span>
            </div>
          </Link>

          {/* Zone 2: 4–5 single-line nav links */}
          <nav
            aria-label="Primary"
            className="hidden md:flex items-center gap-8 text-sm font-medium text-[#111111]/80"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-[#800020] transition-colors duration-150 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#800020] hover:after:w-full after:transition-all after:duration-200 focus-visible:outline-2 focus-visible:outline-[#800020]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#111111] hover:bg-[#800020] transition-colors duration-200 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#800020]"
            >
              Consult Chambers
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#111111] hover:text-[#800020] focus-visible:outline-2 focus-visible:outline-[#800020]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-black/10 bg-white px-6 py-6 space-y-4">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-[#111111] hover:text-[#800020] py-2 border-b border-black/5 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-black/40" />
                </Link>
              ))}
            </nav>

            <div className="pt-3 space-y-3">
              <a
                href={FIRM_DETAILS.phones[0].href}
                className="flex items-center gap-2 text-sm font-medium text-[#800020]"
              >
                <Phone className="w-4 h-4" />
                <span>{FIRM_DETAILS.phones[0].number}</span>
              </a>
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#111111] hover:bg-[#800020]"
              >
                Consult Chambers
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
