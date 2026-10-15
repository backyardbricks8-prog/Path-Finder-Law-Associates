'use client';

import React, { useSyncExternalStore } from 'react';
import { Scale, Check } from 'lucide-react';
import { BCI_DISCLAIMER } from '@/lib/data';

const STORAGE_KEY = 'pfla_bci_acknowledged';

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  window.addEventListener('pfla_bci_update', callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener('pfla_bci_update', callback);
  };
}

function getSnapshot() {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'true';
  } catch {
    return true;
  }
}

function getServerSnapshot() {
  return true;
}

export default function BciModal() {
  const hasAcknowledged = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const handleAccept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
      window.dispatchEvent(new Event('pfla_bci_update'));
    } catch {
      // Ignore
    }
  };

  if (hasAcknowledged) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="bci-title"
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div className="bg-white border border-black/20 max-w-xl w-full p-6 sm:p-8 shadow-2xl space-y-6">
        <div className="flex items-center gap-3 border-b border-black/10 pb-4">
          <div className="w-8 h-8 bg-[#800020] text-[#EACEAA] flex items-center justify-center shrink-0">
            <Scale className="w-4 h-4" />
          </div>
          <div>
            <h2 id="bci-title" className="text-sm font-bold uppercase tracking-wider text-[#111111]">
              Bar Council of India Disclaimer
            </h2>
            <span className="text-[11px] font-mono text-black/50">
              Statutory regulatory compliance statement
            </span>
          </div>
        </div>

        <div className="text-xs text-black/80 leading-relaxed space-y-3 font-sans">
          <p>{BCI_DISCLAIMER}</p>
          <p className="text-[11px] text-black/60 font-mono">
            By proceeding, you confirm that you are seeking information regarding Path Finder Law Associates of your own accord and that no solicitation or advertisement has taken place.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3 border-t border-black/10">
          <button
            type="button"
            onClick={handleAccept}
            className="w-full sm:w-auto px-6 py-3 bg-[#111111] hover:bg-[#800020] text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
          >
            <Check className="w-4 h-4 text-[#EACEAA]" />
            <span>I Acknowledge & Agree</span>
          </button>
        </div>
      </div>
    </div>
  );
}
