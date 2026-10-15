import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Scale } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { PRACTICE_AREAS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Areas of Practice | Path Finder Law Associates New Delhi',
  description:
    'Comprehensive litigation and legal advisory services: Corporate Litigation (NCLT), Civil, Property, Criminal, Money Recovery, Matrimonial, NI Act, and Consumer Protection.',
};

export default function PracticeAreasPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111111]">
      <SiteHeader />

      <main className="flex-1">
        {/* Header Ribbon */}
        <section className="border-b border-black/10 py-16 lg:py-24 bg-[#FBF9F5]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-3 text-xs font-mono text-[#800020] uppercase tracking-widest font-bold mb-4">
              <span>Path Finder Law Associates</span>
              <span className="text-black/30">/</span>
              <span>Practice Areas Directory</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] text-balance">
              Litigation & Advisory Practice
            </h1>
            <p className="text-base sm:text-lg text-black/70 max-w-3xl mt-4 leading-relaxed font-sans">
              Advocacy across trial courts, appellate benches, and specialized tribunals in New Delhi. Each practice area is led by experienced counsel with rigorous case preparation.
            </p>
          </div>
        </section>

        {/* Practice Areas Grid */}
        <section className="py-16 lg:py-24 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {PRACTICE_AREAS.map((area) => (
              <div
                key={area.id}
                className="p-8 sm:p-10 border border-black/10 flex flex-col justify-between space-y-6 hover:border-[#800020] transition-colors bg-white group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-[#800020]">
                      {area.number}
                    </span>
                    <span className="text-xs font-mono uppercase text-black/40">
                      {area.category}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-[#111111] group-hover:text-[#800020] transition-colors">
                    {area.title}
                  </h2>

                  <p className="text-sm text-black/75 leading-relaxed">
                    {area.summary}
                  </p>

                  <div className="pt-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-black/50 block mb-2">
                      Key Jurisdictions:
                    </span>
                    <ul className="space-y-1.5 text-xs text-black/70">
                      {area.scope.slice(0, 3).map((s, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-black/30">—</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-black/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-black/50">
                    {area.forums[0]}
                  </span>
                  <Link
                    href={`/practice-areas/${area.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#111111] group-hover:text-[#800020] transition-colors"
                  >
                    <span>Read Brief</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Forums Note */}
          <div className="mt-16 p-8 bg-[#FBF9F5] border border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="text-base font-bold text-[#111111]">
                Tribunals & Specialized Forums
              </h3>
              <p className="text-xs sm:text-sm text-black/70 font-sans">
                Our advocates also represent matters before the Debt Recovery Tribunal (DRT), Customs, Central Excise & Service Tax Appellate Tribunal (CESTAT), and International Commercial Arbitration.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#111111] hover:bg-[#800020] transition-colors shrink-0"
            >
              Consult Chambers
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
