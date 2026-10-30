"use client";

import React from "react";
import { PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

export default function FloatingContact() {
  const phoneTel = "+919990613140";
  const whatsappUrl =
    "https://wa.me/919990613140?text=Hi%20Brandmingo%2C%20I%20would%20like%20to%20know%20more%20about%20your%20digital%20marketing%20services.";

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-7 sm:right-6 z-50 flex flex-col items-end gap-2.5 sm:gap-3 pointer-events-auto select-none">
      
      {/* 1. Phone Call Floating Button */}
      <a
        href={`tel:${phoneTel}`}
        aria-label="Call Brandmingo at +91 99906 13140"
        className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#e45a00] to-[#fc7511] text-white shadow-[0_8px_20px_rgba(252,117,17,0.38)] hover:shadow-[0_12px_28px_rgba(252,117,17,0.5)] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer border border-white/20"
      >
        {/* Soft Pulse Ripple */}
        <span className="absolute -inset-1 rounded-full bg-[#fc7511] opacity-25 animate-ping pointer-events-none group-hover:opacity-40" />

        {/* Phone Icon */}
        <PhoneCall className="size-5 sm:size-5.5 text-white relative z-10 group-hover:rotate-12 transition-transform" />

        {/* Hover Tooltip (Desktop) */}
        <span className="absolute right-14 whitespace-nowrap px-3 py-1.5 rounded-xl bg-slate-900/90 text-white text-xs font-semibold shadow-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none hidden sm:block backdrop-blur-xs">
          Call: +91 99906 13140
        </span>
      </a>

      {/* 2. WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Brandmingo on WhatsApp"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-[0_8px_22px_rgba(37,211,102,0.42)] hover:shadow-[0_12px_30px_rgba(37,211,102,0.55)] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer border border-white/20"
      >
        {/* Soft Pulse Ripple */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-pulse pointer-events-none" />

        {/* WhatsApp Icon */}
        <FaWhatsapp className="size-6 sm:size-7 text-white relative z-10 group-hover:scale-105 transition-transform" />

        {/* Hover Tooltip (Desktop) */}
        <span className="absolute right-15 whitespace-nowrap px-3 py-1.5 rounded-xl bg-slate-900/90 text-white text-xs font-semibold shadow-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none hidden sm:block backdrop-blur-xs">
          Chat on WhatsApp
        </span>
      </a>

    </div>
  );
}
