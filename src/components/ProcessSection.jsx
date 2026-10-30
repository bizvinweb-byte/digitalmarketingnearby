"use client";

import React from "react";
import Container from "./common/Container";
import {
  Settings,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import {
  FaGear,
  FaFileLines,
  FaMagnifyingGlass,
  FaBullseye,
  FaLightbulb,
  FaArrowTrendUp,
  FaChartColumn,
  FaArrowRight,
} from "react-icons/fa6";
import { useConsultationModal } from "@/context/ModalContext";

export default function ProcessSection() {
  const { openModal } = useConsultationModal();
  const whatsappUrl =
    "https://wa.me/919990613140?text=Hi%20Brandmingo%2C%20I%20would%20like%20to%20know%20more%20about%20your%20working%20process.";

  const steps = [
    {
      num: "01",
      title: "Business Analysis",
      desc: "We understand your business goals, target audience and current market position to identify the right opportunities.",
      query: "Business Analysis & Market Opportunity",
      renderIcon: () => (
        <div className="relative flex items-center justify-center">
          {/* Document Base */}
          <div className="w-10 h-12 bg-gradient-to-br from-[#fc7511] to-[#e56507] rounded-lg shadow-md flex flex-col justify-center items-center gap-1 p-2 text-white/90">
            <div className="w-5 h-1 bg-white/80 rounded-full" />
            <div className="w-4 h-1 bg-white/70 rounded-full" />
            <div className="w-5 h-1 bg-white/80 rounded-full" />
          </div>
          {/* Magnifying Glass Overlay */}
          <div className="absolute -bottom-1 -right-2 w-6 h-6 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-slate-800">
            <FaMagnifyingGlass className="size-3 text-[#fc7511]" />
          </div>
        </div>
      ),
    },
    {
      num: "02",
      title: "Strategy Planning",
      desc: "We create a customized digital marketing strategy with clear roadmap, channels and measurable goals.",
      query: "Digital Marketing Strategy Planning",
      renderIcon: () => (
        <div className="relative flex items-center justify-center">
          {/* Bullseye Dartboard Target - Clean Concentric Brand Orange Rings (No Black Artifacts) */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#fff2e6] via-[#ffe3cc] to-[#ffd2b3] border-2 border-white shadow-md flex items-center justify-center">
            <FaBullseye className="size-7 text-[#fc7511] drop-shadow-[0_2px_6px_rgba(252,117,17,0.35)]" />
          </div>
        </div>
      ),
    },
    {
      num: "03",
      title: "Execution",
      desc: "Our team implements the strategy with high-quality content, campaigns and optimized solutions.",
      query: "Campaign Execution and Optimization",
      renderIcon: () => (
        <div className="relative flex items-center justify-center">
          {/* Glowing Lightbulb */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#fff7ed] via-[#ffeed8] to-[#ffddb8] border-2 border-white shadow-md flex items-center justify-center text-[#fc7511]">
            <FaLightbulb className="size-6 text-[#fc7511] drop-shadow-[0_2px_8px_rgba(252,117,17,0.4)]" />
          </div>
          {/* Spark rays */}
          <div className="absolute -top-1 left-2 w-1.5 h-1.5 bg-[#fc7511] rounded-full animate-ping opacity-60" />
        </div>
      ),
    },
    {
      num: "04",
      title: "Reporting & Optimization",
      desc: "We track performance with detailed reports and continuously optimize to ensure better results and higher ROI.",
      query: "Performance Reporting and ROI Optimization",
      renderIcon: () => (
        <div className="relative flex items-center justify-center">
          {/* Chart Columns with Trend Arrow */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#fff2e6] via-[#ffe5cf] to-[#ffd5b8] border-2 border-white shadow-md flex items-center justify-center">
            <div className="flex items-end gap-1 h-6">
              <div className="w-1.5 h-3 bg-[#fc7511]/50 rounded-xs" />
              <div className="w-1.5 h-4 bg-[#fc7511]/75 rounded-xs" />
              <div className="w-1.5 h-5.5 bg-[#fc7511] rounded-xs shadow-xs" />
            </div>
          </div>
          {/* Growth Trend Arrow */}
          <div className="absolute -top-1 -right-1 text-slate-900">
            <FaArrowTrendUp className="size-4 text-slate-900 stroke-[1.5]" />
          </div>
        </div>
      ),
    },
  ];

  const getStepLink = (query) =>
    `https://wa.me/919990613140?text=Hi%20Brandmingo%2C%20I%20would%20like%20to%20know%20more%20about%20Step%3A%20${encodeURIComponent(
      query
    )}.`;

  // Schema.org HowTo Structured Data for Process
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Brandmingo Digital Marketing Process - How We Work",
    "description":
      "A structured and result-driven 4-step digital marketing approach to deliver the best solutions for business growth.",
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.title,
      "text": step.desc,
      "url": "https://digitalmarketingnearby.com/#process",
    })),
  };

  return (
    <section
      id="process"
      className="relative w-full py-8 sm:py-10 lg:py-12 overflow-hidden"
    >
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* Background Soft Glow Accents */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[350px] bg-[#fff5eb] rounded-full blur-3xl -z-10 pointer-events-none opacity-80" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-gradient-to-tl from-[#fff2e7] to-transparent rounded-full blur-3xl -z-10 pointer-events-none opacity-70" />

      {/* Decorative Curving Connecting Line Behind Steps (Desktop) */}
      <div className="hidden xl:block absolute top-[235px] left-0 right-0 w-full h-[60px] pointer-events-none -z-5">
        <div className="w-full h-full border-t border-dashed border-[#fc7511]/25 relative">
          {/* Orange Accent Node Left */}
          <div className="absolute -top-2 left-[5%] w-4 h-4 rounded-full bg-[#fc7511] ring-4 ring-[#ffe8d6] shadow-sm" />
          {/* Orange Accent Node Right */}
          <div className="absolute -top-2 right-[5%] w-4 h-4 rounded-full bg-[#fc7511] ring-4 ring-[#ffe8d6] shadow-sm" />
        </div>
      </div>

      <Container>
        {/* Section Header - Exactly Standardized Across Entire Site */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-9 sm:mb-11 lg:mb-12">
          {/* Global Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#fff4eb] border border-[#fc7511]/25 text-[#fc7511] text-[10.5px] sm:text-xs font-bold tracking-wider uppercase mb-3 shadow-sm transition-transform duration-300 hover:scale-105">
            <FaGear className="size-3 text-[#fc7511]" />
            <span>OUR PROCESS</span>
          </div>

          {/* H2 Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-bold text-slate-900 tracking-tight leading-[1.2] mb-3">
            How We <span className="text-[#fc7511]">Work</span>
          </h2>

          {/* Subtext - 2 Lines as Requested */}
          <p className="text-xs sm:text-sm lg:text-[14.5px] text-slate-600 font-normal leading-relaxed max-w-2xl">
            A structured and result-driven approach to deliver the best digital marketing
            <br className="hidden sm:inline" /> solutions for your business.
          </p>
        </div>

        {/* 4 Process Cards Grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-5 lg:gap-x-5 xl:gap-x-6 items-stretch">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center group">
              {/* Arched Dotted Connector with Arrow Button (Between Cards on Desktop) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center absolute -right-3.5 xl:-right-4 top-10 z-30 pointer-events-none">
                  {/* Small Circular Orange Indicator with Right Arrow */}
                  <div className="w-6 h-6 xl:w-7 xl:h-7 rounded-full bg-[#fc7511] text-white flex items-center justify-center shadow-md shadow-orange-500/30 transition-transform duration-300 group-hover:scale-110">
                    <FaArrowRight className="size-2.5 xl:size-3 text-white" />
                  </div>
                </div>
              )}

              {/* Watermark Step Number */}
              <div className="absolute -top-7 left-4 sm:left-6 text-3xl sm:text-4xl font-extrabold text-[#ffe2cc] select-none pointer-events-none transition-colors duration-300 group-hover:text-[#fc7511]/35 z-10">
                {step.num}
              </div>

              {/* Floating Circular 3D Icon Container */}
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-gradient-to-br from-[#fff7f0] via-[#ffeedc] to-[#ffe0c4] shadow-[0_8px_24px_rgba(252,117,17,0.18)] border-4 border-white flex items-center justify-center relative -mb-10 z-20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_12px_28px_rgba(252,117,17,0.28)]">
                {step.renderIcon()}
              </div>

              {/* White Card Body (Clickable to Open Consultation Modal) */}
              <div
                onClick={() =>
                  openModal({
                    source: `Process: Step ${step.num} - ${step.title}`,
                  })
                }
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    openModal({
                      source: `Process: Step ${step.num} - ${step.title}`,
                    });
                  }
                }}
                className="w-full bg-white rounded-3xl border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(252,117,17,0.12)] hover:border-[#fc7511]/35 pt-14 pb-6 px-5 sm:px-6 flex flex-col justify-between text-left transition-all duration-300 group-hover:-translate-y-1.5 flex-1 relative overflow-hidden cursor-pointer select-none"
              >
                {/* Bottom Peach Corner Glow */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-tl from-[#fff0e2] to-transparent pointer-events-none group-hover:scale-150 transition-transform duration-500 -z-0 opacity-80" />

                <div className="relative z-10">
                  {/* Step Title */}
                  <h3 className="text-base sm:text-[17px] font-bold text-slate-900 group-hover:text-[#fc7511] transition-colors duration-200 mb-2 leading-snug">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs sm:text-[12.5px] text-slate-600 leading-relaxed font-normal mb-5">
                    {step.desc}
                  </p>
                </div>

                {/* Learn More Action Button */}
                <div className="relative z-10 pt-3 border-t border-slate-100/80">
                  <div className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-[#fc7511] group-hover:gap-2.5 transition-all duration-200">
                    <span>Learn More</span>
                    <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

