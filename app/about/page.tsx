import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Scale, Award, Shield, Check, ArrowRight } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { FIRM_DETAILS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About the Chambers | Path Finder Law Associates New Delhi',
  description:
    'Founded in 2013 by Advocate & Solicitor Mr. Santosh Shaw. Tenured trial and appellate advocates serving individuals, businesses, and institutions in New Delhi.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111111]">
      <SiteHeader />

      <main className="flex-1">
        {/* Editorial Page Header */}
        <section className="py-16 lg:py-24 border-b border-black/10 bg-[#FBF9F5]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-3 text-xs font-mono text-[#800020] uppercase tracking-widest font-bold mb-4">
              <span>Path Finder Law Associates</span>
              <span className="text-black/30">/</span>
              <span>About Chambers</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] text-balance">
              Dedicated Advocacy & Professional Rigor
            </h1>
            <p className="text-lg text-black/70 max-w-3xl mt-4 leading-relaxed font-sans">
              Founded in 2013 by Advocate and Solicitor Mr. Santosh Shaw, our chambers have delivered unmediated legal counsel across civil, criminal, corporate, and tribunal matters for over a decade.
            </p>
          </div>
        </section>

        {/* Narrative Section with Split Grid */}
        <section className="py-16 lg:py-24 max-w-7xl mx-auto px-6 lg:px-12 border-b border-black/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Visual (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative aspect-[4/5] w-full bg-[#111111] overflow-hidden border border-black/10">
                <Image
                  src="/images/about_consultation_desk_1792041875583.jpg"
                  alt="Advocate & Solicitor Santosh Shaw consultation chambers"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-mono tracking-wider flex justify-between">
                  <span>COUNSEL CHAMBERS</span>
                  <span className="text-[#EACEAA]">EST. 2013</span>
                </div>
              </div>

              <div className="p-6 bg-[#FBF9F5] border border-black/10 space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-black/50 block">
                  Founding Counsel
                </span>
                <div className="text-xl font-bold text-[#111111]">
                  Mr. Santosh Shaw
                </div>
                <div className="text-xs text-[#800020] font-mono">
                  Advocate & Solicitor
                </div>
                <p className="text-xs text-black/70 pt-2 leading-relaxed font-sans">
                  Practicing before the High Court of Delhi, District Courts, National Company Law Tribunal (NCLT), and specialized debt/consumer tribunals.
                </p>
              </div>
            </div>

            {/* Editorial Body (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#800020] font-bold">
                  Our Evolution Since 2013
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-[#111111] leading-tight">
                  A modern litigation practice built on classical jurisprudence.
                </h2>
              </div>

              <div className="prose prose-neutral max-w-none text-base sm:text-lg text-black/80 space-y-6 leading-relaxed font-sans">
                <p>
                  Path Finder Law Associates was founded in 2013 with a clear imperative: to create a law firm that bridges commercial agility with rigorous courtroom advocacy. Headquartered at Jyoti Shikhar in Janakpuri District Centre, New Delhi, our practice has represented a diverse spectrum of clients—from individual litigants seeking justice in matrimonial or inheritance disputes to corporate entities navigating insolvency under the Insolvency and Bankruptcy Code (IBC).
                </p>
                <p>
                  Our litigation foundation rests upon deep statutory scrutiny. In modern Indian jurisprudence, procedural missteps or delays in limitation can irreparably prejudice a cause. Hence, we prioritize comprehensive pre-litigation documentation, thorough discovery of records, and precise drafting of pleadings.
                </p>
                <p>
                  Over the past decade, our advocates have regularly argued cases across:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  'Delhi High Court (Original, Appellate & Writ Benches)',
                  'National Company Law Tribunal (NCLT & NCLAT)',
                  'Delhi District Courts (Tis Hazari, Saket, Patiala House, Dwarka, Rohini, Karkardooma)',
                  'Debt Recovery Tribunals (DRT-I, II, III Delhi)',
                  'National Consumer Disputes Redressal Commission (NCDRC)',
                  'Customs, Central Excise & Service Tax Appellate Tribunal',
                  'Principal Family Courts across Delhi NCR',
                  'Special Courts under the Negotiable Instruments Act',
                ].map((forum, idx) => (
                  <div key={idx} className="p-3 bg-[#FBF9F5] border border-black/10 flex items-start gap-2.5">
                    <span className="text-xs font-mono text-[#800020] font-bold shrink-0 mt-0.5">
                      0{idx + 1}.
                    </span>
                    <span className="text-xs text-black/80 font-sans">{forum}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-black/10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#111111] hover:bg-[#800020] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <span>Connect With Chambers</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
