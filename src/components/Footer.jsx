"use client";

import React from "react";
import Image from "next/image";
import Container from "./common/Container";
import { useConsultationModal } from "@/context/ModalContext";
import {
  Rocket,
  ArrowRight,
  Phone,
  Mail,
  Globe,
  MapPin,
  ChevronRight,
  TrendingUp,
  Users,
  DollarSign,
  Award,
  Building,
} from "lucide-react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaCode,
  FaArrowTrendUp,
  FaBullseye,
  FaShareNodes,
  FaPalette,
  FaCartShopping,
  FaIndianRupeeSign,
  FaUsers,
  FaAward,
} from "react-icons/fa6";

export default function Footer() {
  const { openModal } = useConsultationModal();
  const phoneDisplay = "+91 99906 13140";
  const phoneTel = "+919990613140";
  const email = "hello@brandmingo.com";
  const address =
    "8th Floor, ITHUM Tower, B-806, Block A, Industrial Area, Sector 62, Noida, UP 201309";

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/company/brandmingo",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "https://www.instagram.com/brandmingo",
    },
    {
      name: "Facebook",
      icon: FaFacebookF,
      href: "https://www.facebook.com/brandmingo",
    },
    {
      name: "X (Twitter)",
      icon: FaXTwitter,
      href: "https://x.com/brandmingo",
    },
  ];

  const serviceLinks = [
    { name: "SEO Services (Rank #1)", icon: FaArrowTrendUp, href: "#services" },
    { name: "Google Ads & PPC Marketing", icon: FaBullseye, href: "#services" },
    { name: "Social Media Marketing", icon: FaShareNodes, href: "#services" },
    { name: "Website Development", icon: FaCode, href: "#services" },
    { name: "UI/UX Creative Design", icon: FaPalette, href: "#services" },
    { name: "Ecommerce Scaling", icon: FaCartShopping, href: "#services" },
  ];

  const microPillars = [
    { icon: FaArrowTrendUp, label: "More", sub: "Traffic" },
    { icon: FaUsers, label: "Quality", sub: "Leads" },
    { icon: FaIndianRupeeSign, label: "Higher", sub: "Revenue" },
    { icon: FaAward, label: "Stronger", sub: "Brand" },
  ];

  // Schema.org Structured Data for LocalBusiness & Organization
  const footerSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Brandmingo Media Private Limited",
    url: "https://digitalmarketingnearby.com",
    logo: "https://digitalmarketingnearby.com/brandmingologo.png",
    image: "https://digitalmarketingnearby.com/brandmingologo.png",
    telephone: "+919990613140",
    email: "hello@brandmingo.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "8th Floor, ITHUM Tower, B-806, Block A, Industrial Area",
      addressLocality: "Sector 62, Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201309",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.627981",
      longitude: "77.373406",
    },
    sameAs: [
      "https://www.linkedin.com/company/brandmingo",
      "https://www.instagram.com/brandmingo",
      "https://www.facebook.com/brandmingo",
      "https://x.com/brandmingo",
      "https://brandmingo.com",
    ],
  };

  return (
    <footer className="relative w-full bg-[#fc7511] text-white overflow-hidden pt-8 sm:pt-10 pb-6">
      {/* Schema.org Organization SEO Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(footerSchema) }}
      />

      {/* Subtle Ambient Radial Highlights */}
      <div className="absolute top-0 right-0 w-[450px] h-[350px] bg-white/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-black/10 rounded-full blur-2xl pointer-events-none -z-0" />

      <Container className="relative z-10">
        
        {/* 1. TOP FLOATING PROMO BANNER (Compact & Clean with White CTA Button) */}
        <div className="w-full bg-white/15 backdrop-blur-sm rounded-2xl p-4 sm:p-5 lg:p-5.5 border border-white/30 shadow-[0_10px_30px_rgba(0,0,0,0.06)] mb-8 sm:mb-10 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-300">
          
          {/* Left: Rocket Icon + Content */}
          <div className="flex items-center gap-3.5 text-left w-full sm:w-auto">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/20 border border-white/35 flex items-center justify-center shrink-0 shadow-2xs">
              <Rocket className="size-5 sm:size-5.5 text-white fill-white/20" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-base sm:text-lg lg:text-[19px] font-bold text-white tracking-tight leading-snug">
                Let&apos;s grow your business <span className="underline decoration-white/40 underline-offset-4">with Brandmingo</span>.
              </h3>
              <p className="text-xs sm:text-[12.5px] text-white/95 font-medium leading-relaxed max-w-xl">
                Get expert digital marketing, SEO, paid ads and a high-converting
                website to scale your business in Noida and across India.
              </p>
            </div>
          </div>

          {/* Right: Premium Solid White CTA Button (No Black BG) */}
          <button
            type="button"
            onClick={() => openModal({ source: "Footer Top Banner CTA" })}
            className="w-full sm:w-auto px-5 sm:px-6 py-2.5 rounded-full bg-white hover:bg-[#fff6ee] text-[#fc7511] text-xs sm:text-[13px] font-bold tracking-wide shadow-md shadow-black/10 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 shrink-0 group cursor-pointer"
          >
            <span>Get Free Consultation</span>
            <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 2. MAIN 4-COLUMN FOOTER GRID (Compact, High-Contrast & High-Visibility) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-6 xl:gap-8 text-left pb-8 border-b border-white/25">
          
          {/* COLUMN 1: Brand Info & SEO Identity with White Logo Patch (4 Cols) */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col">
            {/* Logo on Clean White Patch for 100% Visibility */}
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-xl bg-white shadow-xs w-fit mb-3">
              <Image
                src="/brandmingologo.png"
                alt="Brandmingo Media Private Limited"
                width={150}
                height={40}
                className="h-7 sm:h-7.5 w-auto object-contain"
              />
            </div>

            {/* About Heading & High-Contrast Text */}
            <h4 className="text-[13px] sm:text-[13.5px] font-bold text-white mb-1.5 tracking-tight">
              About Brandmingo
            </h4>
            <p className="text-xs text-white/95 font-medium leading-relaxed mb-3 max-w-sm">
              Brandmingo Media Pvt. Ltd. helps businesses grow with result-driven
              digital marketing, SEO, website development, paid ads and creative
              strategies. Based in Noida, we empower brands across India to get
              more visibility, leads and revenue.
            </p>

            {/* Sub-card: DigitalMarketingNearby.com */}
            <div className="p-2.5 rounded-xl bg-white/20 border border-white/30 flex items-center gap-2.5 mb-3.5 backdrop-blur-xs">
              <div className="w-7 h-7 rounded-lg bg-white/25 flex items-center justify-center text-white shrink-0">
                <Globe className="size-3.5" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xs font-bold text-white tracking-wide">
                  DigitalMarketingNearby.com
                </span>
                <span className="text-[10px] text-white/90">
                  by Brandmingo Media Pvt. Ltd.
                </span>
              </div>
            </div>

            {/* 4 Micro Stat Pillars (High-Visibility Frosted Badges with ₹ Rupee Symbol) */}
            <div className="grid grid-cols-4 gap-1.5 sm:gap-2 pt-2.5 border-t border-white/25">
              {microPillars.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-1.5 rounded-xl bg-white/15 hover:bg-white/25 border border-white/20 transition-all duration-200 flex flex-col items-center text-center group cursor-default"
                  >
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-white/25 flex items-center justify-center text-white mb-1 shadow-2xs group-hover:scale-110 transition-transform">
                      <IconComponent className="size-3 sm:size-3.5 text-white" />
                    </div>
                    <span className="text-[10px] sm:text-[10.5px] font-bold text-white leading-tight">
                      {item.label}
                    </span>
                    <span className="text-[8.5px] sm:text-[9px] text-white/90 leading-tight mt-0.5">
                      {item.sub}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* COLUMN 2: Our Services with High-Contrast White Background Links (3 Cols) */}
          <div className="lg:col-span-3 xl:col-span-3 flex flex-col">
            <h4 className="text-[13.5px] sm:text-[14.5px] font-bold text-white mb-2.5 tracking-tight">
              Our Services
            </h4>
            <div className="flex flex-col gap-1.5">
              {serviceLinks.map((s, idx) => {
                const IconComponent = s.icon;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() =>
                      openModal({
                        service: s.name,
                        source: `Footer Service: ${s.name}`,
                      })
                    }
                    className="w-full py-1.5 px-2.5 rounded-lg bg-white/15 hover:bg-white text-white hover:text-[#fc7511] border border-white/25 hover:border-white transition-all duration-200 flex items-center justify-between group shadow-2xs cursor-pointer text-left"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="w-5 h-5 rounded-md bg-white/20 group-hover:bg-[#fc7511]/15 flex items-center justify-center text-white group-hover:text-[#fc7511] shrink-0 transition-colors">
                        <IconComponent className="size-2.5" />
                      </div>
                      <span className="text-[11.5px] sm:text-xs font-semibold truncate">
                        {s.name}
                      </span>
                    </div>
                    <ChevronRight className="size-3 text-white/70 group-hover:text-[#fc7511] group-hover:translate-x-0.5 transition-all shrink-0" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* COLUMN 3: Contact Us & High-Contrast Social Media (3 Cols) */}
          <div className="lg:col-span-3 xl:col-span-3 flex flex-col">
            <h4 className="text-[13.5px] sm:text-[14.5px] font-bold text-white mb-2.5 tracking-tight">
              Contact Us
            </h4>
            
            <div className="flex flex-col gap-2 mb-3.5">
              {/* Phone Card */}
              <a
                href={`tel:${phoneTel}`}
                className="p-2 rounded-xl bg-white/15 hover:bg-white text-white hover:text-[#fc7511] border border-white/25 hover:border-white transition-all duration-200 flex items-center gap-2.5 group shadow-2xs"
              >
                <div className="w-7 h-7 rounded-full bg-white/25 group-hover:bg-[#fc7511] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                  <Phone className="size-3.5" />
                </div>
                <div className="flex flex-col leading-tight min-w-0">
                  <span className="text-[12px] font-bold tracking-tight">
                    {phoneDisplay}
                  </span>
                  <span className="text-[9.5px] text-white/90 group-hover:text-[#fc7511]/80 mt-0.5">
                    Speak with our digital experts
                  </span>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${email}`}
                className="p-2 rounded-xl bg-white/15 hover:bg-white text-white hover:text-[#fc7511] border border-white/25 hover:border-white transition-all duration-200 flex items-center gap-2.5 group shadow-2xs"
              >
                <div className="w-7 h-7 rounded-full bg-white/25 group-hover:bg-[#fc7511] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                  <Mail className="size-3.5" />
                </div>
                <div className="flex flex-col leading-tight min-w-0">
                  <span className="text-[12px] font-bold tracking-tight truncate">
                    {email}
                  </span>
                  <span className="text-[9.5px] text-white/90 group-hover:text-[#fc7511]/80 mt-0.5">
                    We reply within 24 hours
                  </span>
                </div>
              </a>

              {/* Website Card */}
              <a
                href="https://brandmingo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/15 hover:bg-white text-white hover:text-[#fc7511] border border-white/25 hover:border-white transition-all duration-200 flex items-center gap-2.5 group shadow-2xs"
              >
                <div className="w-7 h-7 rounded-full bg-white/25 group-hover:bg-[#fc7511] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                  <Globe className="size-3.5" />
                </div>
                <div className="flex flex-col leading-tight min-w-0">
                  <span className="text-[12px] font-bold tracking-tight">
                    www.brandmingo.com
                  </span>
                  <span className="text-[9.5px] text-white/90 group-hover:text-[#fc7511]/80 mt-0.5">
                    Visit our official website
                  </span>
                </div>
              </a>
            </div>

            {/* Follow Us (White Circles with Brand Orange Icons for 100% Contrast) */}
            <div>
              <span className="text-[10px] font-bold text-white uppercase tracking-wider block mb-2">
                Follow Us
              </span>
              <div className="flex items-center gap-2">
                {socialLinks.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={idx}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow Brandmingo on ${item.name}`}
                      className="w-7.5 h-7.5 rounded-full bg-white text-[#fc7511] hover:bg-[#fff5ee] flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-sm"
                    >
                      <Icon className="size-3" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* COLUMN 4: Office Address & Noida Graphic (2 Cols) */}
          <div className="lg:col-span-2 xl:col-span-2 flex flex-col justify-between">
            <div>
              <h4 className="text-[13.5px] sm:text-[14.5px] font-bold text-white mb-2.5 tracking-tight">
                Office Address
              </h4>

              {/* Address Box */}
              <div className="flex items-start gap-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-white/25 flex items-center justify-center text-white shrink-0 mt-0.5">
                  <MapPin className="size-3" />
                </div>
                <div className="flex flex-col text-[11px] leading-relaxed text-white">
                  <span className="font-bold tracking-wide uppercase text-[10.5px]">
                    NOIDA HEADQUARTERS
                  </span>
                  <p className="mt-0.5 text-white/95 leading-snug">
                    {address}
                  </p>
                  <span className="text-[9.5px] text-white/80 mt-0.5">
                    (Visit by appointment)
                  </span>
                </div>
              </div>

              {/* Noida India Artistic Script */}
              <div className="text-right my-1.5 font-handwriting select-none pointer-events-none">
                <span className="text-xl sm:text-2xl font-bold text-white tracking-wide block leading-none">
                  Noida
                </span>
                <span className="text-[10px] tracking-widest uppercase font-sans text-white/85 block mt-0.5">
                  INDIA
                </span>
              </div>
            </div>

            {/* Serving Local Businesses Pill Button */}
            <button
              type="button"
              onClick={() =>
                openModal({ source: "Footer: Serving Local Businesses" })
              }
              className="w-full mt-2 p-2 rounded-xl bg-white/15 hover:bg-white text-white hover:text-[#fc7511] border border-white/25 hover:border-white transition-all duration-200 flex items-center justify-between group cursor-pointer shadow-2xs text-left"
            >
              <div className="flex items-center gap-1.5 min-w-0">
                <Building className="size-3.5 shrink-0" />
                <span className="text-[10px] font-bold leading-tight">
                  Serving Local Businesses <br />
                  <span className="font-normal opacity-90">in Noida & Across India</span>
                </span>
              </div>
              <ArrowRight className="size-3 group-hover:translate-x-0.5 transition-transform shrink-0" />
            </button>
          </div>

        </div>

        {/* 3. BOTTOM COPYRIGHT BAR (Centered & Clear Visibility) */}
        <div className="pt-4 text-center">
          <p className="text-xs sm:text-[13px] text-white font-medium tracking-wide">
            &copy; 2026 Brandmingo Media Pvt. Ltd. All rights reserved.
          </p>
        </div>

      </Container>
    </footer>
  );
}