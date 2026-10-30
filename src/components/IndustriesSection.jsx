"use client";

import React from "react";
import Image from "next/image";
import {
  TrendingUp,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import {
  FaHouse,
  FaBagShopping,
  FaSuitcaseMedical,
  FaGraduationCap,
  FaRocket,
  FaLayerGroup,
  FaLocationDot,
} from "react-icons/fa6";
import { useConsultationModal } from "@/context/ModalContext";

export default function IndustriesSection() {
  const { openModal } = useConsultationModal();
  const whatsappUrl =
    "https://wa.me/919990613140?text=Hi%20Brandmingo%2C%20I%20would%20like%20to%20get%20a%20free%20consultation%20and%20grow%20my%20business%20in%20my%20industry.";

  // 7 Core Industries using user-provided images from /Industriesimage/
  const industries = [
    {
      title: "Real Estate",
      desc: "Lead generation, paid campaigns and branding for property developers and consultants.",
      image: "/Industriesimage/Real%20Estate.png",
      icon: FaHouse,
      query: "Real Estate Digital Marketing and Lead Generation",
    },
    {
      title: "Ecommerce",
      desc: "End-to-end digital growth for D2C brands, marketplaces and online stores.",
      image: "/Industriesimage/Ecommerce.png",
      icon: FaBagShopping,
      query: "Ecommerce Marketing, Sales Scaling & D2C Growth",
    },
    {
      title: "Healthcare",
      desc: "Increase patient enquiries and brand visibility for hospitals, clinics and healthcare providers.",
      image: "/Industriesimage/Healthcare.png",
      icon: FaSuitcaseMedical,
      query: "Healthcare Digital Marketing, Hospitals and Clinics",
    },
    {
      title: "Education",
      desc: "Admissions growth and brand awareness for schools, colleges and online learning platforms.",
      image: "/Industriesimage/Education.png",
      icon: FaGraduationCap,
      query: "Education Marketing, Student Admissions & EdTech",
    },
    {
      title: "Startups",
      desc: "Go-to-market strategies and performance marketing for early-stage and growing startups.",
      image: "/Industriesimage/Startups.png",
      icon: FaRocket,
      query: "Startup Growth Marketing, Go-To-Market & Scale",
    },
    {
      title: "IT & SaaS",
      desc: "Demand generation and digital campaigns for tech companies and SaaS products.",
      image: "/Industriesimage/IT%20%26%20SaaS.png",
      icon: FaLayerGroup,
      query: "IT & SaaS Demand Generation and B2B Marketing",
    },
    {
      title: "Local Businesses",
      desc: "More visibility, calls and footfall for service-based businesses in Noida and across India.",
      image: "/Industriesimage/Local%20Businesses.png",
      icon: FaLocationDot,
      query: "Local Business SEO, Google Map Pack & Leads",
    },
  ];

  // Real Brandmingo Client Logos for Bottom Banner Social Proof
  const clientLogos = [
    "/clients/client-1.png",
    "/clients/client-2.png",
    "/clients/client-3.png",
    "/clients/client-4.png",
  ];

  const getIndustryLink = (query) =>
    `https://wa.me/919990613140?text=Hi%20Brandmingo%2C%20I%20am%20interested%20in%20Digital%20Marketing%20solutions%20for%20${encodeURIComponent(
      query
    )}.`;

  return (
    <section
      id="industries"
      className="relative w-full py-8 sm:py-10 lg:py-12 overflow-hidden bg-gradient-to-br from-[#fc7511] via-[#f76400] to-[#e45500] text-white scroll-mt-24"
    >
      {/* Background Decorative Mesh & Curved Accent Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_50%)] pointer-events-none -z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(0,0,0,0.12),transparent_50%)] pointer-events-none -z-0" />

      {/* Top Left Dot Grid Matrix Accent */}
      <div className="hidden sm:block absolute top-6 left-6 w-32 h-32 opacity-20 pointer-events-none -z-0">
        <div className="grid grid-cols-6 gap-2 w-full h-full">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
          ))}
        </div>
      </div>

      {/* Bottom Right Dot Grid Matrix Accent */}
      <div className="hidden sm:block absolute bottom-8 right-6 w-32 h-32 opacity-20 pointer-events-none -z-0">
        <div className="grid grid-cols-6 gap-2 w-full h-full">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
          ))}
        </div>
      </div>

      {/* Wide Container to give 7 Cards Optimum Width & Proportions */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Handwritten "Grow Together" Accent */}
        <div className="relative flex flex-col items-center text-center max-w-3xl mx-auto mb-5 sm:mb-6 lg:mb-7">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] sm:text-[11px] font-bold tracking-wider uppercase mb-2 shadow-xs transition-transform duration-300 hover:scale-105">
            <BarChart3 className="size-3 text-white" />
            <span>INDUSTRIES</span>
          </div>

          {/* Main H2 Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-bold text-white tracking-tight leading-[1.2] mb-2">
            Industries <span className="text-[#fff2e6]">We Serve</span>
          </h2>

          {/* Subtext */}
          <p className="text-xs sm:text-sm lg:text-[14px] text-white/90 font-normal leading-relaxed max-w-xl mx-auto">
            We work with businesses across diverse industries, delivering tailored
            digital marketing and development solutions to drive real growth.
          </p>

          {/* Handwritten "Grow Together" Accent with Curved Arrow (Top-Right on Desktop) */}
          <div className="hidden lg:flex items-center gap-2 absolute top-0 -right-16 xl:-right-24 select-none pointer-events-none -rotate-[8deg]">
            <div className="flex flex-col items-center font-handwriting leading-none text-white">
              <span className="text-2xl xl:text-[27px] font-bold tracking-wide drop-shadow-sm">
                Grow
              </span>
              <span className="text-2xl xl:text-[27px] font-bold tracking-wide drop-shadow-sm -mt-1">
                Together
              </span>
            </div>
            {/* Curved Arrow pointing down towards the cards */}
            <div className="relative w-7 h-7 -rotate-45 text-white/90">
              <ArrowRight className="size-5 stroke-[2.5]" />
            </div>
          </div>
        </div>

        {/* 7 Industry Cards - Fully Responsive (2-cols on mobile with 7th card spanning full width, 7-cols on desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2.5 sm:gap-3 xl:gap-3.5 items-stretch">
          {industries.map((item, idx) => {
            const IconComp = item.icon;
            const isSeventhCard = idx === 6; // 7th Card: Local Businesses
            return (
              <div
                key={idx}
                onClick={() =>
                  openModal({
                    source: `Industry Card: ${item.title}`,
                  })
                }
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    openModal({
                      source: `Industry Card: ${item.title}`,
                    });
                  }
                }}
                className={`group bg-white rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.14)] flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1.5 cursor-pointer text-slate-900 border border-white/80 select-none ${
                  isSeventhCard
                    ? "col-span-2 sm:col-span-1 lg:col-span-1"
                    : "col-span-1"
                }`}
              >
                {/* Top: Compact Photographic Visual from user's /Industriesimage/ */}
                <div className={`relative w-full overflow-hidden bg-slate-100 shrink-0 ${
                  isSeventhCard ? "h-24 sm:h-22 xl:h-24" : "h-20 sm:h-22 xl:h-24"
                }`}>
                  <Image
                    src={item.image}
                    alt={`${item.title} digital marketing`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none z-10" />
                </div>

                {/* Floating Icon Badge overlapping Image and Content */}
                <div className="relative px-2.5 sm:px-3 -mt-3.5 z-20">
                  <div className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-lg bg-white shadow-md border border-slate-100 flex items-center justify-center text-[#fc7511] group-hover:bg-[#fc7511] group-hover:text-white transition-all duration-300">
                    <IconComp className="size-3.5" />
                  </div>
                </div>

                {/* Content Body - Compact, Proportional & Readable */}
                <div className="p-2.5 sm:p-3 pt-1 pb-2.5 flex flex-col justify-between flex-1">
                  <div>
                    {/* Title */}
                    <h3 className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#fc7511] transition-colors leading-snug mb-0.5">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[9.5px] sm:text-[10px] text-slate-600 font-normal leading-[1.35] mb-2 line-clamp-3">
                      {item.desc}
                    </p>
                  </div>

                  {/* Circular Orange Arrow Action */}
                  <div className="pt-1.5 border-t border-slate-100/90 flex items-center">
                    <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-full bg-[#fff4eb] text-[#fc7511] group-hover:bg-[#fc7511] group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xs group-hover:translate-x-0.5">
                      <ArrowRight className="size-2.5 stroke-[2.5]" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Floating Banner: Real Client Logos + Compact "Let's Grow Your Industry" + Consultation CTA */}
        <div className="bg-white rounded-2xl sm:rounded-full py-2.5 px-4 sm:py-3 sm:px-6 shadow-[0_12px_40px_rgba(0,0,0,0.14)] border border-white/90 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 mt-6 sm:mt-8 lg:mt-9 text-slate-900">
          {/* Left: Real Client Logos Stack & 100+ Businesses Trust Brandmingo */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="flex -space-x-2">
              {clientLogos.map((src, i) => (
                <div
                  key={i}
                  className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full ring-2 ring-white overflow-hidden bg-white shadow-2xs flex items-center justify-center p-0.5 border border-slate-100"
                >
                  <Image
                    src={src}
                    alt={`Brandmingo Client Logo ${i + 1}`}
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[13px] sm:text-[14px] font-bold text-slate-900 leading-tight">
                100<span className="text-[#fc7511] font-extrabold">+</span>
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight whitespace-nowrap">
                Businesses Trust Brandmingo
              </span>
            </div>
          </div>

          {/* Middle: Compact Industry Growth Message with Icon */}
          <div className="hidden md:flex items-center gap-2.5 border-l border-slate-200/80 pl-4 lg:pl-6 text-left">
            <div className="w-8 h-8 rounded-lg bg-[#fff4eb] text-[#fc7511] flex items-center justify-center shrink-0 border border-[#fc7511]/15 shadow-2xs">
              <TrendingUp className="size-4 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 leading-snug">
                Let&apos;s Grow Your Industry
              </h4>
              <p className="text-[10px] sm:text-[11px] text-slate-500 font-normal leading-tight">
                Get a customized digital marketing plan for your business.
              </p>
            </div>
          </div>

          {/* Right: Compact Consultation Button (Redirects to WhatsApp) */}
          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full md:w-auto px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-[13px] font-semibold flex items-center justify-center gap-1.5 shadow-[0_4px_14px_rgba(252,117,17,0.32)] hover:shadow-[0_6px_20px_rgba(252,117,17,0.45)] hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap cursor-pointer"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="size-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
