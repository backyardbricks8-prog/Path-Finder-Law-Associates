'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { FIRM_DETAILS } from '@/lib/data';

export default function HeroSection() {
  return (
    <section className="relative w-full border-b border-black/10 bg-white">
      {/* Top Editorial Rule & Metadata Ribbon */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-4">
        <div className="flex flex-wrap items-center justify-between text-xs font-mono uppercase tracking-widest text-[#111111]/60 border-b border-black/10 pb-4 gap-4">
          <div className="flex items-center gap-3">
            <span className="text-[#800020] font-bold">PFLA / 2013</span>
            <span aria-hidden="true" className="text-black/30">·</span>
            <span>New Delhi Chambers</span>
            <span aria-hidden="true" className="text-black/30">·</span>
            <span>Advocates & Solicitors</span>
          </div>
          <div className="flex items-center gap-2">
            <span>High Court of Delhi</span>
            <span aria-hidden="true" className="text-black/30">/</span>
            <span>NCLT</span>
            <span aria-hidden="true" className="text-black/30">/</span>
            <span>Specialized Tribunals</span>
          </div>
        </div>
      </div>

      {/* Main Hero Split Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Headline and Positioning (7 columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#800020] block">
                Advocacy & Legal Advisory
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-[#111111] leading-[1.08] text-balance">
                Legal clarity for{' '}
                <span className="font-serif italic font-normal text-[#800020] tracking-normal">
                  individuals, businesses
                </span>{' '}
                and institutions.
              </h1>

              <p className="text-base sm:text-lg text-[#111111]/80 max-w-2xl leading-relaxed font-sans pt-2">
                Founded in 2013 by Advocate and Solicitor Mr. Santosh Shaw, Path Finder Law Associates provides disciplined representation across corporate, civil, criminal, property, and matrimonial dispute resolution. We combine comprehensive trial preparation with unmediated, transparent counsel.
              </p>
            </div>

            {/* Action Zone */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#111111] hover:bg-[#800020] transition-colors duration-200"
              >
                Schedule Legal Consultation
              </Link>
              <Link
                href="#practice-areas"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#111111] border border-black/20 hover:border-black transition-colors duration-200"
              >
                <span>Areas of Practice</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#800020]" />
              </Link>
            </div>

            {/* Factual Anchors Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-black/10">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-black/50 block font-mono">
                  Established
                </span>
                <span className="text-lg font-bold text-[#111111] tabular-nums">2013</span>
                <span className="text-xs text-black/60 block mt-0.5">10+ Years Practice</span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-black/50 block font-mono">
                  Head Chambers
                </span>
                <span className="text-lg font-bold text-[#111111]">Janakpuri</span>
                <span className="text-xs text-black/60 block mt-0.5">District Centre, New Delhi</span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-black/50 block font-mono">
                  Founder
                </span>
                <span className="text-lg font-bold text-[#111111]">Adv. Santosh Shaw</span>
                <span className="text-xs text-black/60 block mt-0.5">Advocate & Solicitor</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Photography Focal Anchor (5 columns) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative aspect-[4/5] w-full bg-[#111111] overflow-hidden border border-black/10">
              <Image
                src="/images/hero_legal_architecture_1792041875550.jpg"
                alt="Path Finder Law Associates legal library and consultation chambers in New Delhi"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover grayscale contrast-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-mono tracking-wider flex items-center justify-between">
                <span>NEW DELHI CHAMBERS</span>
                <span className="text-[#EACEAA]">FIG. 01</span>
              </div>
            </div>
            <p className="text-xs text-[#111111]/60 font-mono mt-3 text-right">
              Chambers interior · Janakpuri District Centre
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
