"use client";

import React from "react";
import Image from "next/image";
import Container from "./common/Container";
import { ArrowRight, MapPin, BarChart3, Megaphone, Code2 } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { useConsultationModal } from "@/context/ModalContext";

export default function HeroSection() {
  const { openModal } = useConsultationModal();
  const whatsappUrl =
    "https://wa.me/919990613140?text=Hi%20Brandmingo%2C%20I%20would%20like%20to%20get%20a%20free%20consultation%20for%20Digital%20Marketing%20services.";

  const features = [
    {
      title: "SEO Growth",
      desc: "Higher Rankings",
      icon: BarChart3,
      iconBg: "bg-orange-50 text-[#fc7511] border-orange-100",
    },
    {
      title: "Google Ads",
      desc: "More Qualified Leads",
      icon: Megaphone,
      iconBg: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      title: "Social Media",
      desc: "Stronger Brand Presence",
      icon: FaInstagram,
      iconBg: "bg-pink-50 text-pink-600 border-pink-100",
    },
    {
      title: "Website Development",
      desc: "High-Converting Websites",
      icon: Code2,
      iconBg: "bg-amber-50 text-amber-600 border-amber-100",
    },
  ];

  return (
    <section className="relative w-full pt-1 pb-6 sm:pt-4 sm:pb-8 lg:pt-6 lg:pb-10 overflow-hidden">
      {/* Background Soft Warm Glow Effect */}
      <div className="absolute top-0 right-0 w-[350px] sm:w-[500px] lg:w-[700px] h-[350px] sm:h-[500px] bg-gradient-to-bl from-[#fff2e7] via-[#fff9f4] to-transparent rounded-full blur-3xl -z-10 pointer-events-none opacity-80" />
      <div className="absolute -bottom-6 left-1/4 w-[250px] sm:w-[350px] h-[200px] bg-gradient-to-tr from-[#fff5eb] to-transparent rounded-full blur-2xl -z-10 pointer-events-none opacity-50" />

      <Container>
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column: Heading, Subtitle & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            {/* Location / SEO Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#fff4eb] border border-[#fc7511]/25 text-[#fc7511] text-[10px] sm:text-xs font-bold tracking-wider uppercase mb-3 sm:mb-4 shadow-sm">
              <MapPin className="size-3 sm:size-3.5 text-[#fc7511] shrink-0" />
              <span>DIGITAL MARKETING AGENCY IN NOIDA</span>
            </div>

            {/* Main H1 - Crisp, high-impact SEO heading */}
            <h1 className="text-[25px] sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[46px] font-bold text-slate-900 tracking-tight leading-[1.2] mb-3 sm:mb-4">
              Digital Marketing Agency in Noida –{" "}
              <span className="text-[#fc7511] block sm:inline mt-1 sm:mt-0 font-bold">
                Grow Your Business With Brandmingo
              </span>
            </h1>

            {/* Subtext description */}
            <p className="text-[13px] sm:text-base text-slate-600 max-w-xl font-normal leading-relaxed mb-5 sm:mb-7">
              We help businesses in Noida and across India grow with result-driven
              digital marketing services — including SEO, Google Ads, social
              media management, and website development. More traffic, more
              leads, and more sales for your business.
            </p>

            {/* CTA Buttons Row - Responsive & Balanced on Mobile */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 w-full sm:w-auto">
              {/* Primary Consultation Button (Opens Popup) */}
              <button
                type="button"
                onClick={() => openModal({ source: "Hero Section Primary CTA" })}
                className="btn-primary w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 text-[14px] sm:text-[15px] font-semibold flex items-center justify-center gap-2 group whitespace-nowrap shadow-[0_6px_20px_rgba(252,117,17,0.35)] hover:shadow-[0_8px_25px_rgba(252,117,17,0.48)] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              {/* WhatsApp Us Button with Global Orange Border */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ border: "2px solid #fc7511" }}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white hover:bg-[#fff6ee] text-slate-900 hover:text-[#fc7511] text-[14px] sm:text-[15px] font-semibold shadow-sm hover:shadow-[0_4px_16px_rgba(252,117,17,0.2)] active:scale-[0.98] transition-all duration-200 group whitespace-nowrap cursor-pointer"
              >
                <FaWhatsapp className="size-4.5 sm:size-5 text-[#25D366] transition-transform duration-200 group-hover:scale-110 shrink-0" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Graphic Illustration */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
            {/* Subtle glow behind illustration */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#fc7511]/12 via-[#fc7511]/5 to-transparent rounded-full blur-2xl scale-95 pointer-events-none -z-10" />

            <div className="relative w-full max-w-[340px] sm:max-w-lg lg:max-w-none flex items-center justify-center lg:justify-end transition-transform duration-300">
              <Image
                src="/hero section.png"
                alt="Digital Marketing Agency in Noida - Brandmingo Growth Dashboard & Performance"
                width={1672}
                height={941}
                priority
                sizes="(max-width: 640px) 340px, (max-width: 1024px) 500px, 650px"
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Bottom 4 Feature Highlights Grid - 2x2 on Mobile, 4 Cols on Desktop */}
        <div className="mt-6 sm:mt-8 lg:mt-9">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
            {features.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3.5 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_20px_rgba(252,117,17,0.12)] hover:border-[#fc7511]/30 transition-all duration-200 group"
                >
                  <div
                    className={`w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 border ${item.iconBg} transition-transform duration-200 group-hover:scale-105`}
                  >
                    <IconComp className="size-4 sm:size-5 stroke-[2.2]" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[12.5px] sm:text-[14px] lg:text-[15px] font-bold text-slate-900 group-hover:text-[#fc7511] transition-colors leading-snug">
                      {item.title}
                    </span>
                    <span className="text-[10px] sm:text-xs text-slate-500 font-medium leading-snug mt-0.5 line-clamp-1 sm:line-clamp-none">
                      {item.desc}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
