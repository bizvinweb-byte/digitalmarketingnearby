"use client";

import React from "react";
import Image from "next/image";
import Container from "./common/Container";
import {
  TrendingUp,
  Check,
  Play,
  ArrowRight,
  Users,
  Target,
  Rocket,
  Headphones,
  ShieldCheck,
} from "lucide-react";
import { useConsultationModal } from "@/context/ModalContext";

export default function WhyChooseUs() {
  const { openModal } = useConsultationModal();
  const whatsappUrl =
    "https://wa.me/919990613140?text=Hi%20Brandmingo%2C%20I%20would%20like%20to%20get%20a%20free%20consultation%20and%20know%20why%20Brandmingo%20is%20the%20best%20choice%20for%20my%20business.";

  const checklist = [
    "Result-driven approach",
    "Dedicated support team",
    "Customized strategies",
    "Transparent reporting",
  ];

  // 6 Trust & Excellence Pillars (Right Column) - Exactly matching UI/UX design
  const pillars = [
    {
      title: "Local Market Expertise",
      desc: "Deep understanding of Noida & Delhi NCR business landscape.",
      icon: Users,
    },
    {
      title: "Customized Strategies",
      desc: "Tailored digital plans as per your business goals and industry.",
      icon: Target,
    },
    {
      title: "Transparent Reporting",
      desc: "Regular updates with clear metrics and measurable results.",
      icon: TrendingUp,
    },
    {
      title: "Conversion-Focused Execution",
      desc: "Data-driven campaigns designed to generate real business growth.",
      icon: Rocket,
    },
    {
      title: "Dedicated Support",
      desc: "A dedicated team always available to support your journey.",
      icon: Headphones,
    },
    {
      title: "Long-Term Partnership",
      desc: "We focus on building lasting relationships and continuous growth.",
      icon: ShieldCheck,
    },
  ];

  // Client Logos for Social Proof
  const clientLogos = [
    "/clients/client-1.png",
    "/clients/client-2.png",
    "/clients/client-3.png",
    "/clients/client-4.png",
  ];

  return (
    <section
      id="why-choose-us"
      className="relative w-full py-8 sm:py-10 lg:py-12 overflow-hidden scroll-mt-24"
    >
      {/* Background Soft Glow Accents */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[450px] bg-gradient-to-r from-[#fff3e8] via-[#fff9f4] to-transparent rounded-full blur-3xl -z-10 pointer-events-none opacity-80" />

      <Container>
        {/* 3-Column Layout: Left (Content) | Center (Visual & Floating Card) | Right (6 Pillars) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.18fr_1.12fr_1fr] gap-8 lg:gap-6 xl:gap-7 items-center">
          
          {/* Column 1: Left Content & Single Row Buttons */}
          <div className="flex flex-col items-start text-left z-10 w-full">
            {/* Global Badge - Matching Trust & Services */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#fff4eb] border border-[#fc7511]/25 text-[#fc7511] text-[10.5px] sm:text-xs font-bold tracking-wider uppercase mb-3 shadow-sm transition-transform duration-200 hover:scale-105">
              <TrendingUp className="size-3.5 text-[#fc7511]" />
              <span>WHY CHOOSE US</span>
            </div>

            {/* Global H2 Heading - 100% Identical to Trust & Services */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-bold text-slate-900 tracking-tight leading-[1.2] mb-3">
              Why Choose{" "}
              <span className="text-[#fc7511]">Brandmingo?</span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-[14.5px] text-slate-600 font-normal leading-relaxed mb-5 max-w-md">
              We combine strategy, creativity and technology to deliver
              measurable digital growth for businesses in Noida and across
              India.
            </p>

            {/* Bullet Checklist with Orange Icons */}
            <div className="space-y-2.5 mb-6 w-full">
              {checklist.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#fc7511] text-white flex items-center justify-center shrink-0 shadow-sm shadow-orange-500/20">
                    <Check className="size-2.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-[13.5px] font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons Row - Both in 1 Single Row with Full Pill Styling & Borders */}
            <div className="flex flex-row items-center gap-2.5 sm:gap-3 w-full sm:w-auto mb-6 flex-wrap sm:flex-nowrap">
              {/* Primary Consultation Button (Opens Popup) */}
              <button
                type="button"
                onClick={() => openModal({ source: "Why Choose Us CTA" })}
                className="btn-primary px-4 sm:px-4.5 py-2.5 sm:py-3 text-[12px] sm:text-[13px] font-semibold flex items-center justify-center gap-1.5 whitespace-nowrap shadow-[0_5px_18px_rgba(252,117,17,0.35)] hover:shadow-[0_8px_25px_rgba(252,117,17,0.48)] hover:-translate-y-0.5 transition-all duration-200 shrink-0 cursor-pointer"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>

              {/* See How We Work - Full Pill Button with Clean Border */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 hover:text-[#fc7511] text-[12px] sm:text-[13px] font-semibold shadow-sm hover:shadow transition-all duration-200 group whitespace-nowrap shrink-0 hover:-translate-y-0.5"
                style={{ border: "1.5px solid #e2e8f0" }}
              >
                <div className="w-5 h-5 rounded-full bg-[#fff4eb] text-[#fc7511] flex items-center justify-center group-hover:bg-[#fc7511] group-hover:text-white transition-colors">
                  <Play className="size-2 fill-current ml-0.5" />
                </div>
                <span>See How We Work</span>
              </a>
            </div>

            {/* Social Proof: Happy Clients Stack with Prominent Real Client Logos */}
            <div className="flex items-center gap-3 pt-3.5 border-t border-slate-100 w-full">
              <div className="flex -space-x-2">
                {clientLogos.map((src, i) => (
                  <div
                    key={i}
                    className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full ring-2 ring-white overflow-hidden bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex items-center justify-center p-1 sm:p-1.5 border border-slate-200/80 transition-transform duration-200 hover:scale-115 hover:z-30 cursor-pointer"
                  >
                    <Image
                      src={src}
                      alt={`Brandmingo Media client in Noida - successful business growth ${i + 1}`}
                      width={44}
                      height={44}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col text-left pl-1">
                <span className="text-sm sm:text-[15px] font-bold text-slate-900 leading-tight">
                  100<span className="text-[#fc7511] font-extrabold">+</span>
                </span>
                <span className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight">
                  Happy Clients
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Center Image (whychooseus.png) & Floating Card */}
          <div className="relative flex items-center justify-center px-1 sm:px-2 lg:px-0">
            {/* Soft Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#fc7511]/15 to-transparent rounded-full blur-2xl scale-95 pointer-events-none -z-10" />

            <div className="relative w-full max-w-[390px] sm:max-w-[440px] lg:max-w-none transition-transform duration-300 hover:scale-[1.015]">
              {/* Exact Transparent PNG Image */}
              <Image
                src="/whychooseus.png"
                alt="Why Choose Brandmingo Digital Marketing Agency Noida"
                width={1099}
                height={1108}
                unoptimized
                priority
                sizes="(max-width: 640px) 390px, (max-width: 1024px) 440px, 520px"
                className="w-full h-auto object-contain drop-shadow-xl"
              />

              {/* Floating Stat Card (Bottom-Left) - Perfectly Positioned Over Visual with No Column Overlap */}
              <div className="absolute -bottom-3 left-1 sm:bottom-1 sm:left-3 lg:bottom-2 lg:left-2 xl:bottom-4 xl:left-4 bg-white/98 backdrop-blur-md rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-[0_16px_40px_rgba(0,0,0,0.1)] border border-slate-100/90 flex flex-col z-20 transition-transform duration-200 hover:scale-105">
                {/* Row 1: Icon + "Your Growth / Our Priority" */}
                <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl sm:rounded-2xl bg-[#fff4eb] border border-[#fc7511]/15 text-[#fc7511] flex items-center justify-center shrink-0 shadow-sm">
                    <TrendingUp className="size-4 sm:size-4.5 stroke-[2.2]" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[12px] sm:text-[13px] font-bold text-slate-900 leading-[1.15]">
                      Your Growth
                    </span>
                    <span className="text-[12px] sm:text-[13px] font-bold text-slate-900 leading-[1.15]">
                      Our Priority
                    </span>
                  </div>
                </div>

                {/* Row 2: Ascending Orange Bars + "↑ 2X / Average Growth / for Our Clients" */}
                <div className="flex items-center gap-2.5 sm:gap-3 pt-0.5">
                  {/* 4 Ascending Orange Bars representing Growth */}
                  <div className="flex items-end gap-1 h-6 sm:h-7 shrink-0 pb-0.5">
                    <div className="w-1.5 h-2.5 bg-[#fc7511]/40 rounded-full" />
                    <div className="w-1.5 h-4 bg-[#fc7511]/60 rounded-full" />
                    <div className="w-1.5 h-5 bg-[#fc7511]/80 rounded-full" />
                    <div className="w-1.5 h-6.5 sm:h-7 bg-[#fc7511] rounded-full shadow-sm shadow-orange-500/25" />
                  </div>

                  {/* Stat details */}
                  <div className="flex flex-col text-left leading-tight">
                    <span className="text-[12.5px] sm:text-[13.5px] font-extrabold text-[#fc7511] leading-none mb-0.5">
                      ↑ 2X
                    </span>
                    <span className="text-[9px] sm:text-[9.5px] text-slate-500 font-medium leading-[1.15]">
                      Average Growth
                    </span>
                    <span className="text-[9px] sm:text-[9.5px] text-slate-500 font-medium leading-[1.15]">
                      for Our Clients
                    </span>
                  </div>
                </div>
              </div>

              {/* Results Driven Hand-Drawn Annotation with Curved Arrow - Exactly matching Screenshot 2 */}
              <div className="hidden lg:flex items-center gap-2 absolute -bottom-9 right-3 xl:-bottom-10 xl:right-6 select-none pointer-events-none z-10">
                {/* Curved Arrow pointing up-left towards the stat card */}
                <div className="relative w-11 xl:w-13 h-6 -rotate-[10deg] shrink-0">
                  {/* Curved shaft */}
                  <div className="w-full h-full border-b-[2.5px] border-l-[2.5px] border-[#fc7511] rounded-bl-[20px]" />
                  {/* Solid Orange Arrowhead at top-left pointing towards the card */}
                  <div className="absolute -top-1.5 -left-1.5 w-0 h-0 border-r-[7px] border-r-[#fc7511] border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent -rotate-45" />
                </div>

                {/* Handwritten "Results Driven" in Caveat cursive font with twin underline swooshes */}
                <div className="flex flex-col items-start -rotate-[6deg] font-handwriting leading-none pt-0.5">
                  <span className="text-lg sm:text-[21px] font-bold text-slate-800 tracking-wide">
                    Results
                  </span>
                  <span className="text-lg sm:text-[21px] font-bold text-slate-800 tracking-wide relative ml-1">
                    Driven
                    {/* Twin Hand-Drawn Orange Accent Underlines */}
                    <span className="absolute -bottom-1 left-0 w-[105%] h-[2px] bg-[#fc7511] rounded-full rotate-[-2deg]" />
                    <span className="absolute -bottom-2 left-1 w-[90%] h-[1.5px] bg-[#fc7511]/85 rounded-full rotate-[-1deg]" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Right 6 Feature Pillars (2x3 Grid) */}
          <div className="w-full">
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {pillars.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-slate-100 shadow-[0_3px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_25px_rgba(252,117,17,0.12)] hover:border-[#fc7511]/40 p-3 sm:p-3.5 flex flex-col justify-start relative overflow-hidden transition-all duration-300 group hover:-translate-y-1"
                  >
                    {/* Corner subtle peach tint */}
                    <div className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full bg-gradient-to-tl from-[#fff0e2] to-transparent pointer-events-none group-hover:scale-150 transition-transform duration-300 -z-0 opacity-70" />

                    <div className="relative z-10">
                      {/* Icon in Rounded Box */}
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#fff4eb] border border-[#fc7511]/15 text-[#fc7511] flex items-center justify-center shrink-0 mb-2 group-hover:bg-[#fc7511] group-hover:text-white transition-all duration-300 shadow-sm">
                        <IconComp className="size-4 stroke-[2.2]" />
                      </div>

                      {/* Title */}
                      <h3 className="text-[12px] sm:text-[13px] font-bold text-slate-900 group-hover:text-[#fc7511] transition-colors leading-snug mb-1">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[10.5px] sm:text-[11px] text-slate-600 font-normal leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
