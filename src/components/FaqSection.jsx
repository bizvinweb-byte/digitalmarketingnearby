"use client";

import React, { useState } from "react";
import Image from "next/image";
import Container from "./common/Container";
import {
  ChevronDown,
  ArrowRight,
  HelpCircle,
  MessageSquare,
} from "lucide-react";

export default function FaqSection() {
  // 7 Frequently Asked Questions Provided by User
  const faqs = [
    {
      id: "01",
      question: "How much do digital marketing services cost in Noida?",
      answer:
        "Our digital marketing packages are customized based on your business goals, budget, and required services.",
    },
    {
      id: "02",
      question: "How long does SEO take to show results?",
      answer:
        "SEO typically takes 3–6 months to show noticeable improvements, depending on competition and website performance.",
    },
    {
      id: "03",
      question: "Do you manage Google Ads and Meta Ads?",
      answer:
        "Yes, Brandmingo manages Google, Facebook, and Instagram Ads to generate qualified leads and improve conversions.",
    },
    {
      id: "04",
      question: "Do you provide local SEO services in Noida?",
      answer:
        "Yes, we offer local SEO, Google Business Profile optimization, and local keyword targeting across Noida and Delhi NCR.",
    },
    {
      id: "05",
      question: "Do you offer website development services?",
      answer:
        "Yes, we build fast, responsive, SEO-friendly WordPress, Shopify, React, and Next.js websites.",
    },
    {
      id: "06",
      question: "Which industries does Brandmingo serve?",
      answer:
        "We serve real estate, ecommerce, healthcare, education, startups, IT & SaaS, and local businesses.",
    },
    {
      id: "07",
      question: "How can I get a free consultation?",
      answer:
        "Contact Brandmingo for a free initial consultation and a customized digital marketing strategy for your business.",
    },
  ];

  // Client Logos for Social Proof
  const clientLogos = [
    "/clients/client-1.png",
    "/clients/client-2.png",
    "/clients/client-3.png",
    "/clients/client-4.png",
  ];

  // Accordion state: 01 open by default as in reference UI
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  // Schema.org FAQPage Structured Data for Rich Google Search Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      className="relative w-full py-8 sm:py-10 lg:py-12 overflow-hidden bg-white"
    >
      {/* Schema.org FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Background Soft Glow Accents */}
      <div className="absolute top-10 left-5 w-[420px] h-[350px] bg-[#fff5eb] rounded-full blur-3xl -z-10 pointer-events-none opacity-80" />
      <div className="absolute bottom-10 right-5 w-[450px] h-[380px] bg-gradient-to-tl from-[#fff2e7] via-[#fff9f4] to-transparent rounded-full blur-3xl -z-10 pointer-events-none opacity-70" />

      <Container>
        {/* Section Header */}
        <div className="relative flex flex-col items-center text-center max-w-2xl mx-auto mb-6 sm:mb-7 lg:mb-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#fff4eb] border border-[#fc7511]/25 text-[#fc7511] text-[10px] sm:text-[11px] font-bold tracking-wider uppercase mb-2.5 shadow-2xs transition-transform duration-300 hover:scale-105">
            <HelpCircle className="size-3 text-[#fc7511]" />
            <span>FAQ</span>
          </div>

          {/* H2 Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-bold text-slate-900 tracking-tight leading-[1.2] mb-2.5">
            Frequently Asked <span className="text-[#fc7511]">Questions</span>
          </h2>

          {/* Subtext */}
          <p className="text-xs sm:text-[13.5px] text-slate-600 font-normal leading-relaxed max-w-xl mx-auto">
            Get quick answers to common questions about our digital marketing
            services, pricing, timelines and process.
          </p>
        </div>

        {/* 3-Column Layout Matching Reference UI: Left Text | Center Image | Right FAQs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-5 xl:gap-7 items-center">
          
          {/* COLUMN 1: Text, CTA & Trust Social Proof (Order 2 on Mobile, Order 1 on Tablet/Desktop) */}
          <div className="order-2 md:order-1 lg:order-1 md:col-span-1 lg:col-span-3 xl:col-span-3 flex flex-col justify-center text-left">
            {/* Mini Badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#fff4eb] border border-[#fc7511]/25 text-[#fc7511] text-[10px] font-bold uppercase tracking-wider mb-2.5 w-fit">
              <MessageSquare className="size-3 text-[#fc7511]" />
              <span>HAVE QUESTIONS?</span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-[26px] lg:text-[28px] xl:text-[32px] font-bold text-slate-900 tracking-tight leading-[1.15] mb-2.5">
              Let&apos;s Clear <br />
              <span className="text-[#fc7511]">Your Doubts</span>
            </h3>

            {/* Subtext */}
            <p className="text-xs sm:text-[12.5px] text-slate-600 font-normal leading-relaxed mb-4 max-w-sm">
              From pricing to timelines, here are answers to the most common
              questions about our digital marketing and development services.
            </p>

            {/* CTA Button */}
            <a
              href="https://wa.me/919990613140?text=Hi%20Brandmingo%2C%20I%20have%20some%20questions%20regarding%20digital%20marketing%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-[#fc7511] hover:bg-[#e06206] text-white text-xs sm:text-[12.5px] font-semibold tracking-wide shadow-md shadow-[#fc7511]/25 transition-all duration-300 hover:scale-105 active:scale-95 mb-5 group cursor-pointer w-fit"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Trust Avatars Stack */}
            <div className="flex items-center gap-2.5 pt-1">
              <div className="flex -space-x-1.5">
                {clientLogos.map((src, i) => (
                  <div
                    key={i}
                    className="relative w-7 h-7 rounded-full ring-2 ring-white overflow-hidden bg-white shadow-2xs flex items-center justify-center p-0.5 border border-slate-100"
                  >
                    <Image
                      src={src}
                      alt="Brandmingo Client"
                      width={28}
                      height={28}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col text-left leading-tight">
                <span className="text-[11.5px] sm:text-xs font-bold text-slate-900">
                  <span className="text-[#fc7511]">100+</span> Businesses Trust Brandmingo
                </span>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Graphic Image (Order 1 on Mobile, so it appears directly under main heading!) */}
          <div className="order-1 md:order-2 lg:order-2 md:col-span-1 lg:col-span-4 xl:col-span-4 flex items-center justify-center py-2 sm:py-4">
            <div className="relative w-full max-w-[290px] sm:max-w-[340px] xl:max-w-[400px]">
              <Image
                src="/faq.png"
                alt="Brandmingo Digital Marketing Consultation & FAQs"
                width={800}
                height={912}
                className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-sm"
                priority={false}
              />
            </div>
          </div>

          {/* COLUMN 3: 7 FAQ Accordions Stacked Vertically (Order 3) */}
          <div className="order-3 md:order-3 lg:order-3 col-span-1 md:col-span-2 lg:col-span-5 xl:col-span-5 flex flex-col gap-2.5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.id}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-[#fc7511]/40 shadow-[0_4px_18px_rgba(252,117,17,0.08)]"
                      : "border-slate-100 hover:border-[#fc7511]/25 shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
                  }`}
                >
                  {/* Accordion Header / Toggle */}
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-3.5 sm:p-4 flex items-center justify-between gap-3 text-left transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      {/* Number Badge (01, 02...) */}
                      <span className="text-[11px] sm:text-xs font-bold px-2 py-0.5 rounded-md shrink-0 bg-[#fff4eb] text-[#fc7511]">
                        {faq.id}
                      </span>

                      {/* Question Text */}
                      <span className="text-xs sm:text-[13px] xl:text-[13.5px] font-bold text-slate-900 leading-snug">
                        {faq.question}
                      </span>
                    </div>

                    {/* Expand/Collapse Chevron Indicator */}
                    <div
                      className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full shrink-0 flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-[#fc7511] text-white rotate-180"
                          : "bg-slate-50 text-slate-400 hover:bg-[#fff4eb] hover:text-[#fc7511]"
                      }`}
                    >
                      <ChevronDown className="size-3.5 stroke-[2.2]" />
                    </div>
                  </button>

                  {/* Accordion Content with Smooth Transition */}
                  <div
                    className={`transition-all duration-300 ease-in-out px-3.5 sm:px-4 overflow-hidden ${
                      isOpen ? "max-h-48 pb-3.5 sm:pb-4 opacity-100" : "max-h-0 pb-0 opacity-0"
                    }`}
                  >
                    <div className="pt-2 border-t border-slate-100">
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {faq.answer}
                      </p>
                    </div>
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