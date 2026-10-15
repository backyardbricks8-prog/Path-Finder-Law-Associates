import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, BookOpen } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111111]">
      <SiteHeader />

      <main className="flex-1 flex items-center justify-center py-24 px-6 lg:px-12">
        <div className="max-w-2xl w-full text-center space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#800020] font-bold block">
              Error 404 · Docket Not Found
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#111111] leading-tight">
              Requested Page Does Not Exist
            </h1>
            <p className="text-sm sm:text-base text-black/70 max-w-lg mx-auto font-sans leading-relaxed">
              The page or document reference you are looking for may have been relocated or updated under our reorganized practice directory.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#111111] hover:bg-[#800020] transition-colors"
            >
              <Home className="w-4 h-4 text-[#EACEAA]" />
              <span>Return to Chambers Home</span>
            </Link>
            <Link
              href="/practice-areas"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#111111] border border-black/20 hover:border-black transition-colors"
            >
              <BookOpen className="w-4 h-4 text-[#800020]" />
              <span>Explore Practice Areas</span>
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
