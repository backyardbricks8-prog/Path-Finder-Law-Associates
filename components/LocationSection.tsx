'use client';

import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Train, ArrowUpRight, Copy, Check } from 'lucide-react';
import { FIRM_DETAILS } from '@/lib/data';

export default function LocationSection() {
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(FIRM_DETAILS.address.full);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="location" className="w-full border-b border-black/10 bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-black/10 pb-4 mb-16">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#800020] font-bold">SECTION 05</span>
            <span aria-hidden="true" className="text-black/30">/</span>
            <span className="text-xs font-mono uppercase tracking-widest text-black/60">
              Chambers Location & Access
            </span>
          </div>
          <span className="text-xs font-mono text-black/40">NEW DELHI HEADQUARTERS</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Address Details & Access Notes (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#800020]">
                Office Coordinates
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-[#111111] leading-tight">
                Janakpuri District Centre Chambers
              </h2>
              <p className="text-sm text-black/75 leading-relaxed font-sans">
                Centrally positioned in West Delhi with direct arterial access to the Delhi High Court, Tis Hazari, and Dwarka District Court complexes.
              </p>
            </div>

            {/* Address Card */}
            <div className="p-6 bg-[#FBF9F5] border border-black/10 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#800020] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-base text-[#111111]">
                    {FIRM_DETAILS.name}
                  </div>
                  <div className="text-sm text-black/80 mt-1 leading-relaxed">
                    {FIRM_DETAILS.address.line1}<br />
                    {FIRM_DETAILS.address.line2}<br />
                    {FIRM_DETAILS.address.city} – {FIRM_DETAILS.address.pincode}, {FIRM_DETAILS.address.country}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-black/10 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={copyAddress}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-black/70 hover:text-[#800020] transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-700" />
                      <span className="text-emerald-700">Address Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href={FIRM_DETAILS.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#800020] hover:text-[#111111] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Access & Hours Details */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-black/80">
                <Clock className="w-4 h-4 text-[#800020] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-[#111111]">Consultation Hours</span>
                  <span className="font-mono text-xs text-black/60">
                    Monday – Saturday: 10:00 AM – 8:00 PM (IST)
                  </span>
                  <p className="text-xs text-black/50 mt-0.5">
                    Prior appointment required to ensure dedicated time with the advocate-in-charge.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-black/80">
                <Train className="w-4 h-4 text-[#800020] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-[#111111]">Transit Connectivity</span>
                  <p className="text-xs text-black/60 mt-0.5">
                    {FIRM_DETAILS.metroAccess}.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="border border-black/10 overflow-hidden bg-neutral-100 relative aspect-[16/11] w-full shadow-xs">
              <iframe
                title="Google Maps Location of Path Finder Law Associates Janakpuri New Delhi"
                src={FIRM_DETAILS.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="flex items-center justify-between text-xs font-mono text-black/50 mt-3">
              <span>Interactive Map · District Centre Janakpuri</span>
              <a
                href={FIRM_DETAILS.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#800020] hover:underline"
              >
                Open in Google Maps App →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
