'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Scale, BookOpen, ShieldCheck } from 'lucide-react';
import { FIRM_DETAILS } from '@/lib/data';

export default function AboutSection() {
  return (
    <section id="about" className="w-full border-b border-black/10 bg-[#FFFFFF] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Index Header */}
        <div className="flex items-center justify-between border-b border-black/10 pb-4 mb-16">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#800020] font-bold">SECTION 01</span>
            <span aria-hidden="true" className="text-black/30">/</span>
            <span className="text-xs font-mono uppercase tracking-widest text-black/60">
              Founding & Background
            </span>
          </div>
          <span className="text-xs font-mono text-black/40">10+ YEARS IN PRACTICE</span>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Heading and Archival Visual (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#800020]">
                Chambers History
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-[#111111] leading-tight text-balance">
                Founded on courtroom discipline and{' '}
                <span className="font-serif italic font-normal text-[#800020]">
                  statutory precision
                </span>.
              </h2>
            </div>

            <div className="relative aspect-[4/3] w-full bg-[#111111] overflow-hidden border border-black/10">
              <Image
                src="/images/about_consultation_desk_1792041875583.jpg"
                alt="Advocate desk and legal consultation records at Path Finder Law Associates"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 right-3 text-white text-[11px] font-mono tracking-wider flex justify-between">
                <span>CONSULTATION CHAMBERS</span>
                <span className="text-[#EACEAA]">FIG. 02</span>
              </div>
            </div>

            <div className="p-6 bg-[#FBF9F5] border border-black/10 space-y-2">
              <div className="text-xs font-mono uppercase tracking-widest text-black/60">
                Founder & Managing Counsel
              </div>
              <div className="text-lg font-bold text-[#111111]">
                Mr. Santosh Shaw
              </div>
              <div className="text-xs text-[#800020] font-medium">
                Advocate & Solicitor · Bar Council of Delhi
              </div>
              <p className="text-xs text-black/70 pt-2 leading-relaxed">
                Directing litigious strategy and appellate advocacy across civil, corporate, matrimonial, and tribunal forums since 2013.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Scope (7 cols) */}
          <div className="lg:col-span-7 space-y-8 lg:pt-2">
            <div className="prose prose-neutral max-w-none text-base sm:text-lg text-[#111111]/80 leading-relaxed space-y-6">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#800020]">
                Path Finder Law Associates was founded in 2013 by Advocate and Solicitor Mr. Santosh Shaw with a singular mission: to provide individuals, businesses, and institutions with grounded, high-conviction legal representation in complex legal landscapes.
              </p>
              <p>
                From our chambers in Janakpuri District Centre, New Delhi, the firm has built an enduring practice rooted in meticulous document examination, strategic courtroom argument, and realistic case assessments. Rather than delegating critical matters, we ensure that every client receives unmediated, direct advocacy from experienced legal minds.
              </p>
              <p>
                Our team provides comprehensive legal representation across corporate disputes, commercial and civil litigation, criminal defense, property inheritance, matrimonial disputes, NCLT insolvency proceedings, Debt Recovery Tribunals (DRT), customs duty disputes, and cross-border international law matters.
              </p>
            </div>

            {/* Core Practice Tenets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-black/10">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#800020]">
                  <Scale className="w-4 h-4" />
                  <span className="text-xs font-mono uppercase tracking-wider font-bold">
                    Courtroom Precision
                  </span>
                </div>
                <p className="text-xs text-black/70 leading-relaxed">
                  Rigorous preparation of pleadings, evidence, and precedent before the Delhi High Court and District Benches.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#800020]">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-xs font-mono uppercase tracking-wider font-bold">
                    Specialized Tribunals
                  </span>
                </div>
                <p className="text-xs text-black/70 leading-relaxed">
                  Dedicated experience before NCLT, NCLAT, NCDRC, DRT, and appellate regulatory authorities.
                </p>
              </div>
            </div>

            {/* Quick Action Link */}
            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#111111] hover:text-[#800020] transition-colors py-2 border-b border-[#111111] hover:border-[#800020]"
              >
                <span>Read Full Chambers Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
