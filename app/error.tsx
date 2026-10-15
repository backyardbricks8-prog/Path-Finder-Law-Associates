'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log minimal safe diagnostic without leaking personal data or secrets
    console.error('App runtime error captured:', error.message);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FBF9F5] text-[#111111] px-6 py-24">
      <div className="max-w-lg w-full bg-white border border-black/15 p-8 sm:p-10 space-y-6 shadow-sm text-center">
        <div className="w-12 h-12 bg-red-50 text-[#800020] flex items-center justify-center mx-auto border border-red-200">
          <AlertCircle className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#800020] font-bold block">
            System Notice
          </span>
          <h1 className="text-2xl font-bold tracking-tight text-[#111111]">
            An unexpected error occurred
          </h1>
          <p className="text-xs sm:text-sm text-black/70 leading-relaxed font-sans">
            We encountered a temporary issue while loading this page. You can attempt to refresh the view or return to the main chambers directory.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#111111] hover:bg-[#800020] transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#111111] border border-black/20 hover:border-black transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
