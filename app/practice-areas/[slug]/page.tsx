import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Scale, CheckCircle2, Building2, MapPin } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { PRACTICE_AREAS, FIRM_DETAILS } from '@/lib/data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRACTICE_AREAS.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = PRACTICE_AREAS.find((p) => p.slug === slug);
  if (!area) return { title: 'Practice Area | Path Finder Law Associates' };

  return {
    title: `${area.title} | Path Finder Law Associates New Delhi`,
    description: area.summary,
  };
}

export default async function PracticeAreaDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const area = PRACTICE_AREAS.find((p) => p.slug === slug);

  if (!area) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111111]">
      <SiteHeader />

      <main className="flex-1">
        {/* Navigation Breadcrumb */}
        <div className="border-b border-black/10 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between text-xs font-mono text-black/60">
            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-2 text-black/80 hover:text-[#800020] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Practice Areas</span>
            </Link>
            <div className="hidden sm:flex items-center gap-2 text-black/40">
              <span>{area.number}</span>
              <span>/</span>
              <span>{area.category}</span>
            </div>
          </div>
        </div>

        {/* Hero Section of Detail Page */}
        <section className="py-16 lg:py-24 border-b border-black/10 bg-[#FBF9F5]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-4xl space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-[#800020]">
                  PRACTICE AREA {area.number}
                </span>
                <span className="text-black/30">·</span>
                <span className="text-xs font-mono uppercase tracking-widest text-black/50">
                  {area.category}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] leading-tight text-balance">
                {area.title}
              </h1>

              <p className="text-lg sm:text-xl text-black/80 font-serif italic max-w-3xl leading-relaxed">
                &ldquo;{area.summary}&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* Content Body Grid */}
        <section className="py-16 lg:py-24 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-12">
              {/* Detailed Narrative */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#111111]">
                  Chambers Approach & Legal Framework
                </h2>
                <p className="text-base sm:text-lg text-black/80 leading-relaxed font-sans">
                  {area.detailedContent}
                </p>
                <p className="text-base sm:text-lg text-black/80 leading-relaxed font-sans">
                  Our litigation strategy begins with comprehensive scrutiny of underlying instruments, statutory limitation periods, and jurisprudential precedents. Whether drafting original claims or structuring appellate counter-arguments, our advocates ensure clear, unassailable evidentiary presentation.
                </p>
              </div>

              {/* Scope of Legal Services */}
              <div className="space-y-6 pt-8 border-t border-black/10">
                <h3 className="text-xl font-bold text-[#111111]">
                  Litigation Scope & Procedural Representation
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {area.scope.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-[#FBF9F5] border border-black/10 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#800020] shrink-0 mt-0.5" />
                      <span className="text-sm text-black/80 font-sans">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Courtroom Forums */}
              <div className="space-y-6 pt-8 border-t border-black/10">
                <h3 className="text-xl font-bold text-[#111111]">
                  Regular Courts & Benches of Practice
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-mono text-black/75">
                  {area.forums.map((f, idx) => (
                    <li key={idx} className="p-3 border border-black/10 bg-white flex items-center gap-2">
                      <Scale className="w-3.5 h-3.5 text-[#800020] shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Sidebar Consultation Card (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 sm:p-8 bg-[#111111] text-white space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#EACEAA]">
                    CONSULT CHAMBERS
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    Retain Counsel for {area.shortTitle}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Schedule a formal case evaluation with Advocate & Solicitor Mr. Santosh Shaw and our litigation team.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-3 text-xs font-mono">
                  <div>
                    <span className="text-white/50 block text-[10px]">DIRECT PHONE:</span>
                    <a
                      href={FIRM_DETAILS.phones[0].href}
                      className="text-white hover:text-[#EACEAA] font-bold text-sm"
                    >
                      {FIRM_DETAILS.phones[0].number}
                    </a>
                  </div>
                  <div>
                    <span className="text-white/50 block text-[10px]">CHAMBERS EMAIL:</span>
                    <a
                      href={FIRM_DETAILS.emails[0].href}
                      className="text-white hover:text-[#EACEAA]"
                    >
                      {FIRM_DETAILS.emails[0].address}
                    </a>
                  </div>
                  <div>
                    <span className="text-white/50 block text-[10px]">CHAMBERS LOCATION:</span>
                    <span className="text-white/80">Janakpuri District Centre, New Delhi</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/#contact"
                    className="block w-full text-center py-3 px-4 text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-[#EACEAA] transition-colors"
                  >
                    Initiate Case Intake
                  </Link>
                </div>
              </div>

              {/* Other Practice Areas Directory */}
              <div className="p-6 border border-black/10 bg-[#FBF9F5] space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-black/60 font-semibold block">
                  Other Practice Areas
                </span>
                <ul className="space-y-2 text-xs text-black/80 font-sans">
                  {PRACTICE_AREAS.filter((p) => p.slug !== area.slug).slice(0, 5).map((other) => (
                    <li key={other.id}>
                      <Link
                        href={`/practice-areas/${other.slug}`}
                        className="hover:text-[#800020] transition-colors flex items-center justify-between py-1 border-b border-black/5"
                      >
                        <span>{other.title}</span>
                        <ArrowUpRight className="w-3 h-3 text-black/30" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
