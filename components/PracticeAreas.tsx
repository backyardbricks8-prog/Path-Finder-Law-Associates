'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import { PRACTICE_AREAS, PracticeArea } from '@/lib/data';

export default function PracticeAreas() {
  const [activeId, setActiveId] = useState<string | null>(PRACTICE_AREAS[0].id);

  const toggleAccordion = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="practice-areas" className="w-full border-b border-black/10 bg-[#FFFFFF] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/10 pb-6 mb-12 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#800020] font-bold">SECTION 02</span>
              <span aria-hidden="true" className="text-black/30">/</span>
              <span className="text-xs font-mono uppercase tracking-widest text-black/60">
                Core Domains of Advocacy
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-[#111111]">
              Areas of Practice
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-black/60 max-w-md font-sans">
            Targeted litigious advisory across trial courts, constitutional benches, and specialized tribunals in New Delhi and NCR.
          </p>
        </div>

        {/* Numbered Editorial List Layout */}
        <div className="border-t border-black/10 divide-y divide-black/10">
          {PRACTICE_AREAS.map((area) => {
            const isOpen = activeId === area.id;

            return (
              <div
                key={area.id}
                className={`transition-colors duration-200 ${
                  isOpen ? 'bg-[#FBF9F5]' : 'hover:bg-neutral-50/70'
                }`}
              >
                {/* Header Row */}
                <div
                  onClick={() => toggleAccordion(area.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleAccordion(area.id);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isOpen}
                  className="w-full py-6 px-4 sm:px-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#800020] select-none text-left"
                >
                  <div className="flex items-start sm:items-center gap-4 sm:gap-8">
                    <span className="font-mono text-sm sm:text-base font-bold text-[#800020] shrink-0 pt-0.5 sm:pt-0">
                      {area.number}
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#111111] group-hover:text-[#800020] transition-colors">
                        {area.title}
                      </h3>
                      <p className="text-xs text-black/50 font-mono mt-0.5">
                        {area.category}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 justify-between md:justify-end shrink-0 pl-12 sm:pl-0">
                    <span className="text-xs font-mono uppercase text-black/40 hidden lg:inline-block">
                      {area.forums[0]}
                    </span>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#111111]">
                      <span className="hidden sm:inline">{isOpen ? 'Close' : 'Details'}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#800020]" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-black/40" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Editorial Content */}
                {isOpen && (
                  <div className="px-4 sm:px-6 pb-8 pt-2 grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-black/5">
                    {/* Summary & Overview */}
                    <div className="lg:col-span-6 space-y-4">
                      <p className="text-sm sm:text-base text-black/80 leading-relaxed">
                        {area.detailedContent}
                      </p>
                      <div className="pt-2">
                        <Link
                          href={`/practice-areas/${area.slug}`}
                          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#800020] hover:text-[#111111] transition-colors"
                        >
                          <span>Full Practice Scope & Precedents</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                    {/* Scope Items */}
                    <div className="lg:col-span-6 space-y-3">
                      <div className="text-xs font-mono uppercase tracking-widest text-[#800020] font-semibold">
                        Key Litigation Aspects
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-black/75">
                        {area.scope.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="font-mono text-black/40 shrink-0 text-xs mt-0.5">—</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-3 border-t border-black/10">
                        <span className="text-[11px] font-mono uppercase text-black/50 block mb-1">
                          Key Forums & Tribunals:
                        </span>
                        <div className="flex flex-wrap gap-x-2 text-xs text-black/70 font-mono">
                          {area.forums.map((forum, fIdx) => (
                            <React.Fragment key={fIdx}>
                              <span>{forum}</span>
                              {fIdx < area.forums.length - 1 && (
                                <span className="text-black/30">·</span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* View All Practice Areas Link */}
        <div className="mt-12 pt-6 border-t border-black/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-black/60 font-mono">
            Also providing advisory in Debt Recovery Tribunals (DRT), Customs Duty, and Cross-Border Matters.
          </p>
          <Link
            href="/practice-areas"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#111111] hover:text-[#800020] transition-colors"
          >
            <span>Explore Practice Area Directory</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
