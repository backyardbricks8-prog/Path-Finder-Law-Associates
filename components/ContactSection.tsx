'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { FIRM_DETAILS, PRACTICE_AREAS } from '@/lib/data';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practiceArea: PRACTICE_AREAS[0].title,
    message: '',
    honeypot: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState<string>('');
  const [refId, setRefId] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic client checks
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setStatus('error');
      setFeedbackMessage('Please fill in all required fields.');
      return;
    }

    setStatus('loading');
    setFeedbackMessage('');

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setFeedbackMessage(data.message);
        setRefId(data.referenceId || '');
        setFormData({
          name: '',
          email: '',
          phone: '',
          practiceArea: PRACTICE_AREAS[0].title,
          message: '',
          honeypot: '',
        });
      } else {
        setStatus('error');
        setFeedbackMessage(data.error || 'Unable to submit enquiry. Please call our chambers directly.');
      }
    } catch {
      setStatus('error');
      setFeedbackMessage('A network communication issue occurred. Please call or email the chambers directly.');
    }
  };

  return (
    <section id="contact" className="w-full border-b border-black/10 bg-[#FFFFFF] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-black/10 pb-4 mb-16">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#800020] font-bold">SECTION 06</span>
            <span aria-hidden="true" className="text-black/30">/</span>
            <span className="text-xs font-mono uppercase tracking-widest text-black/60">
              Direct Chambers Engagement
            </span>
          </div>
          <span className="text-xs font-mono text-black/40">CONFIDENTIAL ENQUIRY</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Channels & Confidentiality Notice (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#800020]">
                Contact Chambers
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-[#111111] leading-tight">
                Initiate a formal legal consultation.
              </h2>
              <p className="text-sm text-black/75 leading-relaxed font-sans">
                Contact our chambers directly by phone or submit an introductory brief below. All initial communications are handled with discretion under professional standards.
              </p>
            </div>

            {/* Direct Phone Links */}
            <div className="p-6 bg-[#FBF9F5] border border-black/10 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#800020] font-semibold block">
                Direct Telephony Lines
              </span>

              <div className="space-y-3">
                {FIRM_DETAILS.phones.map((p) => (
                  <div key={p.number} className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-black/50 block font-mono">{p.label}</span>
                      <a
                        href={p.href}
                        className="text-base sm:text-lg font-bold text-[#111111] hover:text-[#800020] transition-colors tabular-nums"
                      >
                        {p.number}
                      </a>
                    </div>
                    <a
                      href={p.href}
                      className="p-2 border border-black/10 hover:border-[#800020] hover:text-[#800020] transition-colors text-black/60"
                      aria-label={`Call ${p.label}`}
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Email Channels */}
            <div className="p-6 bg-[#FBF9F5] border border-black/10 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#800020] font-semibold block">
                Electronic Mail Inquiries
              </span>

              <div className="space-y-3">
                {FIRM_DETAILS.emails.map((e) => (
                  <div key={e.address} className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-black/50 block font-mono">{e.label}</span>
                      <a
                        href={e.href}
                        className="text-sm sm:text-base font-semibold text-[#111111] hover:text-[#800020] transition-colors break-all"
                      >
                        {e.address}
                      </a>
                    </div>
                    <a
                      href={e.href}
                      className="p-2 border border-black/10 hover:border-[#800020] hover:text-[#800020] transition-colors text-black/60 shrink-0 ml-2"
                      aria-label={`Email ${e.label}`}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Confidentiality Warning Box */}
            <div className="p-5 border border-black/15 bg-white text-xs text-black/70 space-y-2">
              <div className="font-bold text-[#111111] font-mono uppercase tracking-wider text-[11px]">
                Advisory on Confidentiality
              </div>
              <p className="leading-relaxed">
                Please do not transmit confidential or privileged documents through this online form. A formal advocate-client relationship is established only upon conflict verification and execution of a vakalatnama or engagement agreement.
              </p>
            </div>
          </div>

          {/* Right Column: Enquiry Form with Real Server Validation (7 cols) */}
          <div className="lg:col-span-7 bg-[#FBF9F5] border border-black/10 p-8 sm:p-10">
            <div className="mb-6 pb-4 border-b border-black/10 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#111111]">
                  Consultation Request Form
                </h3>
                <p className="text-xs text-black/60 font-mono mt-0.5">
                  Verified server-side intake · Response within 1 business day
                </p>
              </div>
              <span className="text-xs font-mono text-[#800020] font-bold">
                ENQUIRY
              </span>
            </div>

            {status === 'success' ? (
              <div className="p-8 bg-white border border-emerald-300 space-y-4 text-left">
                <div className="flex items-center gap-3 text-emerald-800">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                  <span className="font-bold text-base">Enquiry Successfully Transmitted</span>
                </div>
                <p className="text-sm text-black/80 leading-relaxed">
                  {feedbackMessage}
                </p>
                {refId && (
                  <div className="p-3 bg-neutral-50 border border-neutral-200 text-xs font-mono text-neutral-700">
                    Transmission Reference ID: <strong className="text-black">{refId}</strong>
                  </div>
                )}
                <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#111111] hover:bg-[#800020] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                  <a
                    href={FIRM_DETAILS.phones[0].href}
                    className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#111111] border border-black/20 hover:border-black transition-colors"
                  >
                    Direct Call: {FIRM_DETAILS.phones[0].number}
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Honeypot field (hidden from genuine users) */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                {status === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 flex items-start gap-3 text-red-800 text-xs sm:text-sm">
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span>{feedbackMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-black/80">
                      Full Legal Name <span className="text-[#800020]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 bg-white border border-black/15 focus:border-[#800020] focus:ring-1 focus:ring-[#800020] text-sm text-[#111111] placeholder:text-black/30 outline-none transition-colors"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-black/80">
                      Telephone / Mobile <span className="text-[#800020]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98..."
                      className="w-full px-4 py-3 bg-white border border-black/15 focus:border-[#800020] focus:ring-1 focus:ring-[#800020] text-sm text-[#111111] placeholder:text-black/30 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-black/80">
                      Email Address <span className="text-[#800020]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@domain.com"
                      className="w-full px-4 py-3 bg-white border border-black/15 focus:border-[#800020] focus:ring-1 focus:ring-[#800020] text-sm text-[#111111] placeholder:text-black/30 outline-none transition-colors"
                    />
                  </div>

                  {/* Practice Area Selector */}
                  <div className="space-y-1.5">
                    <label htmlFor="practiceArea" className="block text-xs font-mono uppercase tracking-wider text-black/80">
                      Practice Area <span className="text-[#800020]">*</span>
                    </label>
                    <select
                      id="practiceArea"
                      name="practiceArea"
                      value={formData.practiceArea}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-black/15 focus:border-[#800020] focus:ring-1 focus:ring-[#800020] text-sm text-[#111111] outline-none transition-colors"
                    >
                      {PRACTICE_AREAS.map((p) => (
                        <option key={p.id} value={p.title}>
                          {p.number}. {p.title}
                        </option>
                      ))}
                      <option value="DRT & Recovery">Debt Recovery Tribunal (DRT)</option>
                      <option value="Customs & International">Customs & International Law</option>
                      <option value="General Legal Counsel">Other Legal Advisory</option>
                    </select>
                  </div>
                </div>

                {/* Brief Message */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-black/80">
                      Brief Outline of Legal Matter <span className="text-[#800020]">*</span>
                    </label>
                    <span className="text-[11px] font-mono text-black/40">No privileged docs</span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide a general summary of the dispute, court jurisdiction if already initiated, and desired legal relief..."
                    className="w-full px-4 py-3 bg-white border border-black/15 focus:border-[#800020] focus:ring-1 focus:ring-[#800020] text-sm text-[#111111] placeholder:text-black/30 outline-none transition-colors resize-y"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 px-6 text-xs font-semibold uppercase tracking-wider text-white bg-[#111111] hover:bg-[#800020] disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting to Chambers...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Consultation Request</span>
                        <Send className="w-3.5 h-3.5 text-[#EACEAA]" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
