import React from 'react';
import type { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import LocationSection from '@/components/LocationSection';
import ContactSection from '@/components/ContactSection';
import { FIRM_DETAILS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contact & Chambers Location | Path Finder Law Associates',
  description:
    'Chambers at 111, 1st Floor, Jyoti Shikhar, District Centre, Janakpuri, New Delhi – 110058. Direct telephone: +91 9868099363, +91 11 4287 8448. Schedule a formal consultation.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111111]">
      <SiteHeader />

      <main className="flex-1">
        {/* Editorial Header */}
        <section className="py-16 lg:py-20 border-b border-black/10 bg-[#FBF9F5]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-3 text-xs font-mono text-[#800020] uppercase tracking-widest font-bold mb-4">
              <span>Path Finder Law Associates</span>
              <span className="text-black/30">/</span>
              <span>Chambers & Communications</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] text-balance">
              Chambers Location & Intake
            </h1>
            <p className="text-base sm:text-lg text-black/70 max-w-2xl mt-4 leading-relaxed font-sans">
              Consultations at our Janakpuri District Centre chambers are scheduled by prior appointment. Contact our office by phone, email, or submission below.
            </p>
          </div>
        </section>

        {/* Location Section */}
        <LocationSection />

        {/* Contact & Enquiry Section */}
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
