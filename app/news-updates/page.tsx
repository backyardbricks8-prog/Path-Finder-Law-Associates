import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { NEWS_UPDATES } from '@/lib/data';

export const metadata: Metadata = {
  title: 'News & Legal Updates | Path Finder Law Associates New Delhi',
  description:
    'Legal insights, statutory notes, and procedural updates on insolvency, real estate litigation, and commercial laws by Path Finder Law Associates.',
};

export default function NewsUpdatesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111111]">
      <SiteHeader />

      <main className="flex-1">
        {/* Editorial Header */}
        <section className="py-16 lg:py-24 border-b border-black/10 bg-[#FBF9F5]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-3 text-xs font-mono text-[#800020] uppercase tracking-widest font-bold mb-4">
              <span>Path Finder Law Associates</span>
              <span className="text-black/30">/</span>
              <span>Legal Bulletins & Case Notes</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] text-balance">
              News & Practice Updates
            </h1>
            <p className="text-base sm:text-lg text-black/70 max-w-2xl mt-4 leading-relaxed font-sans">
              Informational commentary and analysis on statutory developments, court precedents, and procedural timelines in Indian law.
            </p>
          </div>
        </section>

        {/* Updates Grid */}
        <section className="py-16 lg:py-24 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="divide-y divide-black/10 border-t border-b border-black/10">
            {NEWS_UPDATES.map((item) => (
              <article
                key={item.id}
                className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:bg-[#FBF9F5] transition-colors px-4 sm:px-6"
              >
                <div className="lg:col-span-4 space-y-2">
                  <div className="text-xs font-mono text-[#800020] uppercase tracking-widest font-bold">
                    {item.category}
                  </div>
                  <div className="text-xs font-mono text-black/50">
                    {item.date}
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-4">
                  <h2 className="text-2xl font-bold text-[#111111] hover:text-[#800020] transition-colors leading-snug">
                    {item.title}
                  </h2>
                  <p className="text-sm sm:text-base text-black/75 leading-relaxed font-sans">
                    {item.excerpt}
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#800020] hover:text-[#111111] transition-colors"
                    >
                      <span>Consult on this subject</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 p-8 bg-[#FBF9F5] border border-black/10 text-xs text-black/60 font-mono leading-relaxed">
            Note: The legal commentaries and practice notes provided on this website are exclusively for academic and informational purposes under the rules of the Bar Council of India, and do not constitute legal advice.
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
