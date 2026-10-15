'use client';

import React from 'react';

export default function WhatsAppButton() {
  const phoneNumber = '919868099363';
  const message = 'Hello, I visited your website and would like to discuss a legal matter.';
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <aside
      aria-label="Direct messaging assistance"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 print:hidden"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center justify-center transition-transform duration-200 ease-out hover:scale-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-[#25D366] focus-visible:outline-offset-4 rounded-full"
      >
        {/* Desktop Hover Tooltip */}
        <span
          role="tooltip"
          className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden sm:inline-flex items-center bg-[#111111] text-white text-[11px] font-mono tracking-wider uppercase px-3 py-1.5 shadow-lg border border-white/10 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 ease-out whitespace-nowrap"
        >
          Chat on WhatsApp
        </span>

        {/* Official WhatsApp Logo Icon */}
        <svg
          viewBox="0 0 60 60"
          width="52"
          height="52"
          xmlns="http://www.w3.org/2000/svg"
          className="w-13 h-13 sm:w-14 sm:h-14 drop-shadow-md"
          aria-hidden="true"
        >
          <circle cx="30" cy="30" r="28" fill="#25D366" />
          <path
            fill="#FFFFFF"
            d="M30 14C21.2 14 14 21.2 14 30C14 32.8 14.7 35.5 16.1 37.9L14.5 45.5L22.3 43.9C24.6 45.2 27.2 46 30 46C38.8 46 46 38.8 46 30C46 21.2 38.8 14 30 14ZM30 43.4C27.5 43.4 25.1 42.7 23 41.5L22.5 41.2L17.9 42.4L19.1 37.9L18.8 37.4C17.4 35.2 16.6 32.7 16.6 30C16.6 22.6 22.6 16.6 30 16.6C37.4 16.6 43.4 22.6 43.4 30C43.4 37.4 37.4 43.4 30 43.4ZM37.3 34.3C36.9 34.1 34.9 33.1 34.5 33C34.1 32.9 33.9 32.8 33.6 33.2C33.3 33.6 32.6 34.5 32.3 34.8C32.1 35 31.9 35.1 31.5 34.9C31.1 34.7 29.8 34.3 28.2 32.9C27 31.8 26.2 30.5 26 30.1C25.8 29.7 26 29.5 26.2 29.3C26.4 29.1 26.6 28.8 26.8 28.6C27 28.4 27.1 28.2 27.2 27.9C27.3 27.6 27.3 27.4 27.2 27.2C27.1 27 26.3 25 26 24.2C25.7 23.4 25.4 23.5 25.1 23.5C24.9 23.5 24.6 23.5 24.4 23.5C24.1 23.5 23.7 23.6 23.3 24C23 24.4 22 25.3 22 27.3C22 29.3 23.4 31.2 23.6 31.5C23.8 31.8 26.4 35.8 30.4 37.5C31.3 37.9 32.1 38.2 32.7 38.4C33.7 38.7 34.5 38.6 35.2 38.5C36 38.4 37.6 37.5 37.9 36.6C38.2 35.7 38.2 34.9 38.1 34.7C38 34.5 37.7 34.4 37.3 34.3Z"
          />
        </svg>
      </a>
    </aside>
  );
}
