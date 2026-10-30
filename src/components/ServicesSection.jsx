"use client";

import React from "react";
import Container from "./common/Container";
import {
  LayoutGrid,
  Search,
  BarChart3,
  Share2,
  Code2,
  PenTool,
  ShoppingBag,
  Image as ImageIcon,
  ArrowRight,
} from "lucide-react";
import { useConsultationModal } from "@/context/ModalContext";

export default function ServicesSection() {
  const { openModal } = useConsultationModal();
  const whatsappUrl =
    "https://wa.me/919990613140?text=Hi%20Brandmingo%2C%20I%20would%20like%20to%20know%20more%20about%20your%20Digital%20Marketing%20services.";

  // Row 1: 4 Core Services (Website Development as first card)
  const topServices = [
    {
      title: "Website Development",
      desc: "Fast, modern and conversion-focused websites built to support business growth.",
      icon: Code2,
      query: "Website Development and Design",
    },
    {
      title: "SEO Optimization",
      desc: "Boost your search visibility with on-page SEO, technical SEO, local SEO and content strategies.",
      icon: Search,
      query: "SEO Optimization Services",
    },
    {
      title: "Google Ads & PPC Marketing",
      desc: "Run high-intent campaigns that generate qualified leads, clicks and measurable ROI.",
      icon: BarChart3,
      query: "Google Ads and PPC Campaigns",
    },
    {
      title: "Social Media Management",
      desc: "Build your brand presence with strategic content, audience engagement and social growth.",
      icon: Share2,
      query: "Social Media Management",
    },
  ];

  // Row 2: 3 Specialized Creative & Commerce Services
  const bottomServices = [
    {
      title: "UI/UX Design & Audits",
      desc: "Improve user journeys, usability and interface design for better engagement and performance.",
      icon: PenTool,
      query: "UI/UX Design and Audits",
    },
    {
      title: "Ecommerce Management",
      desc: "Optimize online stores, product listings and marketplace performance to drive sales.",
      icon: ShoppingBag,
      query: "Ecommerce Management and Optimization",
    },
    {
      title: "Graphic Designing",
      desc: "Create impactful brand visuals, marketing creatives and design assets that convert.",
      icon: ImageIcon,
      query: "Graphic Designing and Brand Creatives",
    },
  ];

  const getServiceLink = (serviceName) =>
    `https://wa.me/919990613140?text=Hi%20Brandmingo%2C%20I%20am%20interested%20in%20${encodeURIComponent(
      serviceName
    )}%20for%20my%20business.`;

  // Schema.org Structured Data for Services (Google Search Rich Results)
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Digital Marketing Services in Noida - Brandmingo",
    "description":
      "Comprehensive digital marketing services including SEO, Google Ads, Social Media, Web Development, UI/UX, and Ecommerce.",
    "itemListElement": [...topServices, ...bottomServices].map(
      (service, index) => ({
        "@type": "Service",
        "position": index + 1,
        "name": service.title,
        "description": service.desc,
        "provider": {
          "@type": "Organization",
          "name": "Brandmingo",
          "url": "https://brandmingo.com",
        },
        "areaServed": "Noida, Delhi NCR, India",
      })
    ),
  };

  // Reusable Human-Crafted Luxury Agency Card
  const renderCard = (service, idx) => {
    const IconComp = service.icon;
    return (
      <div
        key={idx}
        onClick={() =>
          openModal({
            service: service.title,
            source: `Services Card: ${service.title}`,
          })
        }
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            openModal({
              service: service.title,
              source: `Services Card: ${service.title}`,
            });
          }
        }}
        aria-label={`Get consultation for ${service.title}`}
        className="group relative bg-white rounded-3xl border border-slate-100 p-6 sm:p-7 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-[#fc7511]/30 hover:shadow-[0_20px_45px_rgba(252,117,17,0.12)] cursor-pointer select-none"
        style={{
          boxShadow: "0 2px 14px rgba(0, 0, 0, 0.03)",
        }}
      >
        {/* Bottom-Right Warm Peach Designer Corner Glow */}
        <div className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full bg-gradient-to-tl from-[#ffeeda] to-transparent pointer-events-none group-hover:scale-140 group-hover:from-[#ffe3c4] transition-all duration-500 opacity-80 -z-0" />

        {/* Card Content */}
        <div className="relative z-10">
          {/* Top: Icon in Smooth Peach Square */}
          <div className="w-12 h-12 rounded-2xl bg-[#fff4eb] border border-[#fc7511]/15 text-[#fc7511] flex items-center justify-center shrink-0 mb-6 group-hover:bg-[#fc7511] group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(252,117,17,0.32)] transition-all duration-300">
            <IconComp className="size-5 sm:size-5.5 stroke-[2.2]" />
          </div>

          {/* Service Title */}
          <h3 className="text-[17px] sm:text-[18px] font-bold text-slate-900 group-hover:text-[#fc7511] transition-colors duration-200 leading-snug mb-2.5">
            {service.title}
          </h3>

          {/* Service Description */}
          <p className="text-slate-600 text-[13px] sm:text-[13.5px] leading-relaxed font-normal mb-6">
            {service.desc}
          </p>
        </div>

        {/* Bottom Action: Learn More Arrow Link */}
        <div className="relative z-10 pt-2 flex items-center">
          <div className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-[#fc7511] group-hover:gap-2.5 transition-all duration-200">
            <span>Get Free Consultation</span>
            <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="services"
      className="relative w-full py-8 sm:py-10 lg:py-12 overflow-hidden scroll-mt-24"
    >
      {/* Inject Structured Data for Google SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      {/* Background Soft Glow Accents */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[300px] bg-[#fff5eb] rounded-full blur-3xl -z-10 pointer-events-none opacity-80" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[350px] bg-gradient-to-tl from-[#fff2e7] via-[#fff9f4] to-transparent rounded-full blur-3xl -z-10 pointer-events-none opacity-70" />

      <Container>
        {/* Section Header */}
        <div className="relative mb-6 sm:mb-7 lg:mb-8">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Global Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#fff4eb] border border-[#fc7511]/25 text-[#fc7511] text-[10.5px] sm:text-xs font-bold tracking-wider uppercase mb-2.5 shadow-sm transition-transform duration-300 hover:scale-105">
              <LayoutGrid className="size-3 text-[#fc7511]" />
              <span>OUR SERVICES</span>
            </div>

            {/* Main H2 Heading - Standardized across website */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-bold text-slate-900 tracking-tight leading-[1.2] mb-3">
              Digital Marketing Services{" "}
              <span className="text-[#fc7511]">in Noida</span>
            </h2>

            {/* Subtext */}
            <p className="text-xs sm:text-sm lg:text-[14.5px] text-slate-600 font-normal leading-relaxed max-w-2xl">
              SEO, Google Ads, social media management, website development and creative
              solutions to help businesses in Noida and across India generate
              more traffic, qualified leads and revenue.
            </p>

            {/* Orange Center Indicator Pill */}
            <div className="w-10 h-1 bg-[#fc7511] rounded-full mt-3" />
          </div>

          {/* View All Services Button - Floating Right on Desktop */}
          <div className="mt-4 md:mt-0 md:absolute md:right-0 md:bottom-1 flex justify-center md:justify-end">
            <button
              type="button"
              onClick={() => openModal({ source: "Services Section View All CTA" })}
              className="btn-primary px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold flex items-center gap-2 group whitespace-nowrap shadow-[0_4px_16px_rgba(252,117,17,0.32)] hover:shadow-[0_8px_24px_rgba(252,117,17,0.45)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span>View All Services</span>
              <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Services Grid - Clean, Spacious, Elegant Human-Crafted Layout */}
        <div className="space-y-4 sm:space-y-5 lg:space-y-6">
          {/* Row 1: 4 Core Services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-5">
            {topServices.map((service, idx) => renderCard(service, idx))}
          </div>

          {/* Row 2: 3 Specialized Services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-5">
            {bottomServices.map((service, idx) => renderCard(service, idx))}
          </div>
        </div>
      </Container>
    </section>
  );
}
