'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Scale, Shield } from 'lucide-react';
import { FIRM_DETAILS, PRACTICE_AREAS, BCI_DISCLAIMER } from '@/lib/data';

export default function SiteFooter() {
  return (
    <footer className="w-full bg-[#111111] text-white border-t border-black/20">
      {/* Upper Footer: Brand, Navigation, and Contact Columns */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          {/* Brand & Chambers Identification (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#800020] flex items-center justify-center text-[#EACEAA]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2v20M2 12h20" strokeOpacity="0.4" />
                  <polygon points="12,6 15,12 12,18 9,12" fill="#EACEAA" stroke="none" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold tracking-tight text-base text-white uppercase leading-none">
                  Path Finder
                </span>
                <span className="text-[10px] tracking-[0.22em] text-[#EACEAA] uppercase font-medium mt-1 leading-none">
                  Law Associates
                </span>
              </div>
            </div>

            <p className="text-xs text-white/70 leading-relaxed font-sans max-w-sm">
              Established in 2013 by Advocate & Solicitor Mr. Santosh Shaw. Chambers providing strategic courtroom advocacy and corporate counsel before the Delhi High Court, District Courts, NCLT, and appellate tribunals.
            </p>

            <div className="pt-2 text-xs font-mono text-white/50 space-y-1">
              <div>FOUNDED: 2013 · NEW DELHI</div>
              <div>BAR COUNCIL OF DELHI ENROLMENT</div>
            </div>
          </div>

          {/* Practice Areas Navigation (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#EACEAA] font-semibold block">
              Areas of Practice
            </span>
            <ul className="space-y-2.5 text-xs text-white/80">
              {PRACTICE_AREAS.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/practice-areas/${p.slug}`}
                    className="hover:text-[#EACEAA] transition-colors flex items-center justify-between group py-0.5"
                  >
                    <span>
                      <span className="font-mono text-white/40 mr-2">{p.number}</span>
                      {p.shortTitle}
                    </span>
                    <ArrowUpRight className="w-3 h-3 text-white/30 group-hover:text-[#EACEAA] transition-colors" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Chambers Address & Direct Links (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#EACEAA] font-semibold block">
              Chambers Address
            </span>
            <address className="not-italic text-xs text-white/80 leading-relaxed space-y-2">
              <div>
                <strong className="text-white block font-sans">New Delhi Office:</strong>
                {FIRM_DETAILS.address.full}
              </div>
              <p className="text-white/60 font-mono text-[11px]">
                {FIRM_DETAILS.metroAccess}
              </p>
            </address>

            <div className="pt-2 space-y-2 border-t border-white/10 text-xs font-mono">
              <div>
                <span className="text-white/50 block text-[10px]">DIRECT TELEPHONE:</span>
                <a href={FIRM_DETAILS.phones[0].href} className="text-white hover:text-[#EACEAA] transition-colors">
                  {FIRM_DETAILS.phones[0].number}
                </a>
              </div>
              <div>
                <span className="text-white/50 block text-[10px]">ELECTRONIC INQUIRY:</span>
                <a href={FIRM_DETAILS.emails[0].href} className="text-white hover:text-[#EACEAA] transition-colors">
                  {FIRM_DETAILS.emails[0].address}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mandatory Bar Council of India Compliance Section */}
        <div className="py-8 border-b border-white/10 space-y-3">
          <div className="flex items-center gap-2 text-[#EACEAA] text-xs font-mono uppercase tracking-widest font-semibold">
            <Scale className="w-3.5 h-3.5" />
            <span>Bar Council of India Mandatory Legal Disclaimer</span>
          </div>
          <p className="text-[11px] sm:text-xs text-white/60 leading-relaxed font-sans text-justify">
            {BCI_DISCLAIMER}
          </p>
        </div>

        {/* Bottom Metadata & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-white/50 gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span>© {new Date().getFullYear()} Path Finder Law Associates</span>
            <span aria-hidden="true" className="text-white/20">·</span>
            <span>All rights reserved</span>
            <span aria-hidden="true" className="text-white/20">·</span>
            <Link href="/news-updates" className="hover:text-white transition-colors">
              Legal Updates
            </Link>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>NEW DELHI · JURISDICTION OF COURTS IN INDIA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
