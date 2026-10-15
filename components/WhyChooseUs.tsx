'use client';

import React from 'react';
import Image from 'next/image';
import { WHY_CHOOSE_US_POINTS } from '@/lib/data';

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="w-full border-b border-black/10 bg-[#FFFFFF] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-black/10 pb-4 mb-16">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#800020] font-bold">SECTION 03</span>
            <span aria-hidden="true" className="text-black/30">/</span>
            <span className="text-xs font-mono uppercase tracking-widest text-black/60">
              Chambers Philosophy & Approach
            </span>
          </div>
          <span className="text-xs font-mono text-black/40">FACTUAL SERVICE APPROACH</span>
        </div>

        {/* Section Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 items-start">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#800020]">
              Litigation Standards
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-[#111111] leading-tight text-balance">
              Rigorous analysis, unmediated counsel, and{' '}
              <span className="font-serif italic font-normal text-[#800020]">
                principled advocacy
              </span>.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-6">
            <p className="text-sm sm:text-base text-black/75 leading-relaxed font-sans">
              We approach each brief with structured scrutiny. Our advocates evaluate procedural remedies, evidentiary strength, and potential jurisdictional obstacles before filing, ensuring our clients enter courtroom proceedings with comprehensive preparation.
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid with Hairline Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-black/10">
          {WHY_CHOOSE_US_POINTS.map((point) => (
            <div
              key={point.number}
              className="p-8 border-r border-b border-black/10 flex flex-col justify-between space-y-6 hover:bg-[#FBF9F5] transition-colors duration-200"
            >
              <div className="space-y-4">
                <span className="font-mono text-xs font-bold text-[#800020] block">
                  {point.number}
                </span>
                <h3 className="text-lg font-bold text-[#111111] leading-snug">
                  {point.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-black/70 leading-relaxed pt-4 border-t border-black/5">
                {point.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Architectural Image Banner */}
        <div className="mt-16 border border-black/10 relative overflow-hidden aspect-[21/9] w-full bg-[#111111]">
          <Image
            src="/images/tribunal_facade_1792041876456.jpg"
            alt="High Court and Tribunals Centre architectural facade representing institutional litigation"
            fill
            sizes="(max-width: 1024px) 100vw, 90vw"
            className="object-cover grayscale contrast-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between text-white gap-2">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#EACEAA] block">
                APPELLATE & TRIBUNAL FORUMS
              </span>
              <span className="text-sm sm:text-base font-semibold">
                High Court of Delhi · NCLT · NCLAT · NCDRC · DRT
              </span>
            </div>
            <span className="text-xs font-mono text-white/60">
              FIG. 03 — INSTITUTIONAL LITIGATION
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
