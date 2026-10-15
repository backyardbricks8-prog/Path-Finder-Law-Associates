'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Quote } from 'lucide-react';
import { AUTHENTIC_REVIEWS, FIRM_DETAILS } from '@/lib/data';

export default function ReviewsSection() {
  const primaryReview = AUTHENTIC_REVIEWS[0]; // Somesh Nishand
  const secondaryReviews = AUTHENTIC_REVIEWS.slice(1);

  return (
    <section id="reviews" className="w-full border-b border-black/10 bg-[#FBF9F5] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-black/10 pb-4 mb-16">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#800020] font-bold">SECTION 04</span>
            <span aria-hidden="true" className="text-black/30">/</span>
            <span className="text-xs font-mono uppercase tracking-widest text-black/60">
              Client Feedback
            </span>
          </div>
          <span className="text-xs font-mono text-black/40">VERIFIED TESTIMONIALS</span>
        </div>

        {/* Section Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#800020]">
              Authentic Perspectives
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-[#111111] leading-tight text-balance">
              Testimonials from clients we have{' '}
              <span className="font-serif italic font-normal text-[#800020]">
                represented in legal matters
              </span>.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pt-4 flex lg:justify-end">
            <a
              href={FIRM_DETAILS.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#111111] hover:text-[#800020] transition-colors py-2 border-b border-black/20 hover:border-[#800020]"
            >
              <span>View Google Reviews</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Lead Testimonial: Somesh Nishand (Prominent Editorial Pull-Quote) */}
        <div className="bg-white border border-black/10 p-8 sm:p-12 lg:p-16 mb-8 relative">
          <div className="text-[#800020]/20 mb-6">
            <Quote className="w-12 h-12" />
          </div>

          <blockquote className="text-lg sm:text-xl lg:text-2xl font-serif text-[#111111] leading-relaxed max-w-4xl italic">
            &ldquo;{primaryReview.text}&rdquo;
          </blockquote>

          <div className="mt-8 pt-6 border-t border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="font-bold text-base text-[#111111] font-sans">
                {primaryReview.reviewer}
              </div>
              <div className="text-xs text-black/50 font-mono mt-0.5">
                {primaryReview.relation} · Verified Client
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#800020]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#800020]" />
              <span>{primaryReview.source}</span>
            </div>
          </div>
        </div>

        {/* Secondary Reviews Grid (Two Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondaryReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white border border-black/10 p-8 flex flex-col justify-between space-y-6"
            >
              <blockquote className="text-sm sm:text-base text-black/80 font-sans leading-relaxed">
                &ldquo;{rev.text}&rdquo;
              </blockquote>

              <div className="pt-4 border-t border-black/10 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-[#111111]">
                    {rev.reviewer}
                  </div>
                  <div className="text-xs text-black/50 font-mono">
                    {rev.relation}
                  </div>
                </div>
                <span className="text-xs font-mono text-black/40">
                  {rev.source}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance & Verification Note */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-xs text-black/50 font-mono leading-normal">
            Past outcomes do not constitute a guarantee of future case results. Reviews are reproduced verbatim from verified client submissions and public Google review records.
          </p>
        </div>
      </div>
    </section>
  );
}
