"use client";

import React from "react";
import Container from "./common/Container";
import ConsultationForm from "./common/ConsultationForm";
import {
  Send,
  Target,
  FileSearch,
  Clock,
  TrendingUp,
  PhoneCall,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

export default function CtaSection() {
  const contactPhoneDisplay = "+91 99906 13140";
  const contactPhoneTel = "+919990613140";
  const whatsappUrl =
    "https://wa.me/919990613140?text=Hi%20Brandmingo%2C%20I%20would%20like%20to%20get%20a%20free%20consultation%20for%20my%20business.";

  const features = [
    {
      icon: Target,
      title: "Custom Strategy",
      desc: "Tailored to your business goals",
    },
    {
      icon: FileSearch,
      title: "Expert Advice",
      desc: "From experienced marketing professionals",
    },
    {
      icon: Clock,
      title: "No Obligation",
      desc: "Free consultation, no pressure",
    },
    {
      icon: TrendingUp,
      title: "Better Results",
      desc: "More traffic, leads and sales",
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full py-8 sm:py-10 lg:py-12 overflow-hidden bg-white scroll-mt-24"
    >
      {/* Background Ambient Warm Glows */}
      <div className="absolute top-10 left-0 w-[450px] h-[350px] bg-[#fff0e2] rounded-full blur-3xl -z-10 pointer-events-none opacity-70" />
      <div className="absolute bottom-5 left-1/4 w-[400px] h-[300px] bg-[#fff6ee] rounded-full blur-2xl -z-10 pointer-events-none opacity-50" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-center">
          
          {/* LEFT COLUMN: Content, Feature Badges, Contact Buttons & Handwriting Arrow */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fff4eb] border border-[#fc7511]/25 text-[#fc7511] text-[10.5px] sm:text-xs font-bold tracking-wider uppercase mb-3.5 shadow-2xs w-fit">
              <Send className="size-3 text-[#fc7511]" />
              <span>FREE CONSULTATION</span>
            </div>

            {/* H2 Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-[1.18] mb-3.5">
              Let&apos;s Grow Your <br />
              <span className="text-[#fc7511]">Business Together</span>
            </h2>

            {/* Subtext */}
            <p className="text-xs sm:text-[13.5px] lg:text-[14px] text-slate-600 font-normal leading-relaxed mb-8 max-w-xl">
              Tell us about your goals and get a free, no-obligation consultation
              from our digital marketing experts in Noida Sector 62. We&apos;ll analyse your needs and
              suggest the best ranking and lead generation strategy for your business.
            </p>

            {/* 4 Feature Badges in 1 Row / Responsive Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5 mb-8">
              {features.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-3 sm:p-3.5 rounded-2xl bg-white/80 border border-slate-100 shadow-[0_4px_16px_rgba(0,0,0,0.02)] flex flex-col items-start transition-all duration-300 hover:shadow-[0_8px_20px_rgba(252,117,17,0.08)] hover:border-[#fc7511]/30 hover:-translate-y-0.5 group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#fff4eb] text-[#fc7511] flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                      <IconComponent className="size-4 text-[#fc7511]" />
                    </div>
                    <span className="text-[12px] sm:text-[12.5px] font-bold text-slate-900 leading-tight mb-1">
                      {item.title}
                    </span>
                    <span className="text-[10px] sm:text-[10.5px] text-slate-500 font-normal leading-snug">
                      {item.desc}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Dual Direct Contact Strip (Call + WhatsApp in 1 Single Row on Mobile & Desktop) */}
            <div className="relative flex flex-row items-stretch gap-2 sm:gap-3 w-full max-w-lg mb-4">
              
              {/* Call Us Now Card */}
              <a
                href={`tel:${contactPhoneTel}`}
                className="flex-1 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-2xs hover:shadow-md hover:border-[#fc7511]/35 transition-all duration-300 flex items-center gap-2 sm:gap-3 group cursor-pointer min-w-0"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#fc7511] text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-xs">
                  <PhoneCall className="size-3.5 sm:size-4.5" />
                </div>
                <div className="flex flex-col text-left leading-tight min-w-0">
                  <span className="text-[9.5px] sm:text-[11px] text-slate-500 font-medium truncate">
                    Call Us Now
                  </span>
                  <span className="text-[11px] sm:text-[13.5px] lg:text-[14px] font-bold text-slate-900 group-hover:text-[#fc7511] transition-colors truncate">
                    {contactPhoneDisplay}
                  </span>
                  <span className="text-[8.5px] sm:text-[10px] text-slate-400 font-normal mt-0.5 truncate hidden sm:block">
                    Talk directly with our team
                  </span>
                </div>
              </a>

              {/* Chat on WhatsApp Card */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-2xs hover:shadow-md hover:border-[#25D366]/40 transition-all duration-300 flex items-center gap-2 sm:gap-3 group cursor-pointer min-w-0"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-xs">
                  <FaWhatsapp className="size-4 sm:size-5" />
                </div>
                <div className="flex flex-col text-left leading-tight min-w-0">
                  <span className="text-[9.5px] sm:text-[11px] text-slate-500 font-medium truncate">
                    Chat on WhatsApp
                  </span>
                  <span className="text-[11px] sm:text-[13.5px] lg:text-[14px] font-bold text-slate-900 group-hover:text-[#25D366] transition-colors truncate">
                    {contactPhoneDisplay}
                  </span>
                  <span className="text-[8.5px] sm:text-[10px] text-slate-400 font-normal mt-0.5 truncate hidden sm:block">
                    Quick response, anytime
                  </span>
                </div>
              </a>
            </div>

            {/* Handwriting "Let's Discuss Your Growth" with Curved Arrow (Desktop) */}
            <div className="hidden lg:flex items-center gap-2 self-end mr-6 mt-1 select-none pointer-events-none">
              <div className="flex flex-col text-right font-handwriting leading-none text-slate-800 -rotate-3">
                <span className="text-xl xl:text-2xl font-bold tracking-wide">
                  Let&apos;s Discuss
                </span>
                <span className="text-xl xl:text-2xl font-bold text-[#fc7511] tracking-wide -mt-1">
                  Your Growth
                </span>
              </div>
              <svg
                className="w-14 h-8 text-[#fc7511] -rotate-6"
                viewBox="0 0 60 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 25 C20 5, 45 10, 55 18"
                  stroke="#fc7511"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <path
                  d="M48 18 L55 18 L52 11"
                  stroke="#fc7511"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

          </div>

          {/* RIGHT COLUMN: The Global Reusable Consultation Form */}
          <div className="lg:col-span-5 xl:col-span-5 relative z-10">
            <ConsultationForm source="CTA Section Main" />
          </div>

        </div>
      </Container>
    </section>
  );
}
