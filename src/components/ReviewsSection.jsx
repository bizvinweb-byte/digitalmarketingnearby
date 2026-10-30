"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Container from "./common/Container";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import {
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export default function ReviewsSection() {
  const googleReviewsUrl =
    "https://www.google.com/search?kgmid=/g/11st_0w8_j&hl=en-IN&q=Brandmingo+Media+Private+Limited&shem=epsd1,esd2e,ltae,rimspwouoe,sdpie&shndl=30&source=sh/x/loc/osrp/m5/1&kgs=8a7707c496ebce9f&utm_source=epsd1,esd2e,ltae,rimspwouoe,sdpie,sh/x/loc/osrp/m5/1";

  // 100% Authentic Google Reviews from Brandmingo's Google Profile
  const reviews = [
    {
      name: "Iam Ranier",
      initials: "IR",
      bgGradient: "from-slate-800 to-slate-950",
      role: "Client",
      time: "a month ago",
      rating: 5,
      review:
        "I had a really good experience with Brandmingo. The team understood my requirements and created a clean and professional website for my business. They were supportive throughout the process and made the changes I needed. Really happy with the final result.",
    },
    {
      name: "N K",
      initials: "NK",
      bgGradient: "from-purple-600 to-indigo-700",
      role: "Client",
      time: "a year ago",
      rating: 5,
      review:
        "The team coordinated well , being from different city they delivered the work as per exact requirements. They were patient while doing all the changes,and hit and trials while designing,till we ended up on the final design.",
    },
    {
      name: "Marque Career",
      initials: "MC",
      bgGradient: "from-blue-600 to-cyan-700",
      role: "Client",
      time: "3 years ago",
      rating: 5,
      review:
        "I can confidently say that they are best development company. I would definitely recommend their services to anyone seeking top-tier development solutions.",
    },
    {
      name: "Bandhiya Hardik",
      initials: "BH",
      bgGradient: "from-amber-500 to-orange-600",
      role: "Client",
      time: "2 years ago",
      rating: 5,
      review:
        "Very Creative and Supportive Team. I recommend Brandmingo to all of the people who wants to grow their business.",
    },
    {
      name: "Rajneesh Choudhary",
      initials: "RC",
      bgGradient: "from-emerald-600 to-teal-700",
      role: "Client",
      time: "a year ago",
      rating: 5,
      review:
        "Brandmingo is the best digital marketing agency in Noida! They managed our Meta ads and social media perfectly — our reach and engagement improved, and sales have increased a lot.",
    },
    {
      name: "Mahil Hasan",
      initials: "MH",
      bgGradient: "from-sky-600 to-blue-700",
      role: "Client",
      time: "a year ago",
      rating: 5,
      review:
        "I had an amazing experience with Brandmingo. They were professional, creative and truly wonderful people . Website they built very fast , modern with beautiful designs.",
    },
    {
      name: "Dipika",
      initials: "DP",
      bgGradient: "from-rose-500 to-pink-600",
      role: "Client",
      time: "8 months ago",
      rating: 5,
      review:
        "Brandmingo is really good ....their work is so professional and client focused ...I highly recommend them for their excellent services ...their team is highly supportive and helpful.",
    },
  ];

  // Client Logos for Google Card Social Proof
  const clientLogos = [
    "/clients/client-1.png",
    "/clients/client-2.png",
    "/clients/client-3.png",
    "/clients/client-4.png",
  ];

  // Responsive Slider Logic with Infinite Seamless Loop
  const N = reviews.length; // 7 reviews
  // 3x extended reviews list for seamless infinite loop buffer
  const extendedReviews = [...reviews, ...reviews, ...reviews];

  const [currentIndex, setCurrentIndex] = useState(N); // Start at middle set (index 7)
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [withTransition, setWithTransition] = useState(true);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-detect items per page based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1); // 1 card on mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2); // 2 cards on tablet/laptop
      } else {
        setItemsPerPage(3); // 3 cards on desktop
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Re-enable smooth transition 50ms after silent index reset
  useEffect(() => {
    if (!withTransition) {
      const timer = setTimeout(() => {
        setWithTransition(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [withTransition]);

  // Next slide (seamless forward loop)
  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setWithTransition(true);
    setCurrentIndex((prev) => prev + 1);
  };

  // Prev slide (seamless backward loop)
  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setWithTransition(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // Jump to specific dot
  const goToSlide = (dotIndex) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setWithTransition(true);
    setCurrentIndex(N + dotIndex);
  };

  // Handle seamless reset when reaching cloned buffer boundaries
  const handleTransitionEnd = () => {
    setIsTransitioning(false);

    // If moved into 3rd set (>= 14), silently reset back to middle set (e.g. 14 -> 7)
    if (currentIndex >= N * 2) {
      setWithTransition(false);
      setCurrentIndex((prev) => prev - N);
    }
    // If moved into 1st set (< 7), silently reset forward to middle set (e.g. 6 -> 13)
    else if (currentIndex < N) {
      setWithTransition(false);
      setCurrentIndex((prev) => prev + N);
    }
  };

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
  };

  // Active dot index based on modulo N
  const activeDot = currentIndex % N;

  // Schema.org Review & AggregateRating for Rich Google Snippets
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Brandmingo Media Private Limited",
    "url": "https://digitalmarketingnearby.com",
    "image": "https://digitalmarketingnearby.com/brandmingologo.png",
    "telephone": "+919990613140",
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "54",
      "bestRating": "5",
      "worstRating": "1",
    },
    "review": reviews.map((r) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": r.name,
      },
      "datePublished": "2024-05-15",
      "reviewBody": r.review,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": r.rating.toString(),
        "bestRating": "5",
      },
    })),
  };

  return (
    <section
      id="reviews"
      className="relative w-full py-8 sm:py-10 lg:py-12 overflow-hidden bg-white"
    >
      {/* Schema.org Review Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      {/* Background Soft Glow Accents */}
      <div className="absolute top-1/4 right-8 w-[400px] h-[300px] bg-[#fff5eb] rounded-full blur-3xl -z-10 pointer-events-none opacity-80" />
      <div className="absolute bottom-6 left-8 w-[380px] h-[280px] bg-gradient-to-tr from-[#fff2e7] via-[#fff9f4] to-transparent rounded-full blur-3xl -z-10 pointer-events-none opacity-70" />

      <Container>
        {/* Section Header with Balanced Proportions */}
        <div className="relative flex flex-col items-center text-center max-w-2xl mx-auto mb-6 sm:mb-7 lg:mb-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#fff4eb] border border-[#fc7511]/25 text-[#fc7511] text-[10px] sm:text-[11px] font-bold tracking-wider uppercase mb-2.5 shadow-2xs transition-transform duration-300 hover:scale-105">
            <Star className="size-3 fill-[#fc7511] text-[#fc7511]" />
            <span>CLIENT REVIEWS</span>
          </div>

          {/* H2 Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-bold text-slate-900 tracking-tight leading-[1.2] mb-2.5">
            What Our <span className="text-[#fc7511]">Clients Say</span>
          </h2>

          {/* Subtext */}
          <p className="text-xs sm:text-[13.5px] text-slate-600 font-normal leading-relaxed max-w-xl mx-auto">
            Trusted by startups, SMEs and established brands across India for
            digital marketing, website development and growth solutions.
          </p>

          {/* Handwritten "Real Feedback, Real Growth" Script (Desktop) */}
          <div className="hidden lg:flex flex-col items-center absolute -top-1 -right-12 xl:-right-20 select-none pointer-events-none -rotate-[6deg] font-handwriting leading-none text-slate-800">
            <span className="text-lg xl:text-[21px] font-bold tracking-wide">
              Real
            </span>
            <span className="text-lg xl:text-[21px] font-bold tracking-wide -mt-0.5">
              Feedback
            </span>
            <span className="text-lg xl:text-[21px] font-bold tracking-wide relative -mt-0.5">
              Real Growth
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#fc7511] rounded-full rotate-[-2deg]" />
              <span className="absolute -bottom-2 left-1 w-[90%] h-[1.5px] bg-[#fc7511]/80 rounded-full" />
            </span>
          </div>
        </div>

        {/* 2-Part Layout: Left Fixed Google Rating Card | Right Working Review Slider */}
        <div className="flex flex-col lg:flex-row items-stretch gap-4 sm:gap-5 lg:gap-5 xl:gap-6">
          
          {/* Left: Google Rating Badge Card (Compact & Premium) */}
          <div className="w-full lg:w-[280px] xl:w-[295px] shrink-0 bg-white rounded-2xl border border-slate-100 p-5 sm:p-5.5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex flex-col justify-between text-left relative overflow-hidden transition-all duration-300 hover:shadow-[0_10px_30px_rgba(252,117,17,0.1)] hover:border-[#fc7511]/30">
            {/* Soft Ambient Glow */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#fff3e7] rounded-full blur-2xl pointer-events-none -z-0" />

            <div className="relative z-10">
              {/* Google Brand Logo */}
              <div className="flex items-center gap-2 mb-2.5">
                <FcGoogle className="size-7 shrink-0" />
                <span className="text-lg font-bold text-slate-900 tracking-tight">
                  Google
                </span>
              </div>

              {/* Tagline */}
              <h3 className="text-[14px] sm:text-[14.5px] font-bold text-slate-900 leading-snug mb-2.5">
                Our Clients Love Working With Brandmingo
              </h3>

              {/* Big Score: 4.9/5 */}
              <div className="flex items-baseline gap-1.5 mb-1">
                <span className="text-3xl sm:text-[38px] font-extrabold text-[#fc7511] tracking-tight leading-none">
                  4.9
                </span>
                <span className="text-xl font-bold text-slate-400">/5</span>
              </div>

              {/* 5 Golden Stars */}
              <div className="flex items-center gap-1 text-[#f59e0b] mb-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="size-3.5 fill-current" />
                ))}
              </div>

              <p className="text-[11px] sm:text-xs text-slate-500 font-medium mb-4">
                Based on 50+ Google Reviews
              </p>

              {/* View All Google Reviews CTA Button */}
              <a
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3.5 rounded-full text-xs font-semibold text-slate-800 hover:text-[#fc7511] bg-white hover:bg-[#fff6ee] transition-all duration-200 flex items-center justify-center gap-1.5 shadow-2xs group mb-4"
                style={{ border: "1.5px solid #fc7511" }}
              >
                <span>View All Google Reviews</span>
                <ExternalLink className="size-3 text-[#fc7511] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Bottom: Client Logos + 50+ Businesses Trust */}
            <div className="relative z-10 pt-3 border-t border-slate-100 flex items-center gap-2.5">
              <div className="flex -space-x-1.5">
                {clientLogos.map((src, i) => (
                  <div
                    key={i}
                    className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full ring-2 ring-white overflow-hidden bg-white shadow-2xs flex items-center justify-center p-0.5 border border-slate-100"
                  >
                    <Image
                      src={src}
                      alt={`Brandmingo verified Google 5-star review client in Noida ${i + 1}`}
                      width={28}
                      height={28}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[11px] sm:text-[11.5px] font-bold text-slate-800 leading-tight">
                  Trusted by 50+ Businesses
                </span>
              </div>
            </div>
          </div>

          {/* Right: Working Seamless Infinite Reviews Carousel */}
          <div className="flex-1 flex flex-col justify-between overflow-hidden">
            {/* Slider Viewport */}
            <div
              className="overflow-hidden py-1 -mx-2 sm:-mx-2.5"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex will-change-transform"
                onTransitionEnd={handleTransitionEnd}
                style={{
                  transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
                  transition: withTransition
                    ? "transform 500ms cubic-bezier(0.25, 1, 0.5, 1)"
                    : "none",
                }}
              >
                {extendedReviews.map((item, idx) => (
                  <div
                    key={idx}
                    className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-2 sm:px-2.5 flex flex-col"
                  >
                    <div className="h-full bg-white rounded-2xl border border-slate-100 p-4 sm:p-5 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(252,117,17,0.1)] hover:border-[#fc7511]/35 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
                      {/* Bottom Peach Corner Glow */}
                      <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-gradient-to-tl from-[#fff0e2] to-transparent pointer-events-none group-hover:scale-150 transition-transform duration-500 opacity-70 -z-0" />

                      <div className="relative z-10 flex flex-col">
                        {/* Top Row: Quote Icon + Google Logo */}
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-[#fc7511]/60 text-lg leading-none">
                            <FaQuoteLeft className="size-4 text-[#fc7511]/60" />
                          </div>
                          <FcGoogle className="size-4.5 shrink-0" />
                        </div>

                        {/* 5 Golden Stars */}
                        <div className="flex items-center gap-0.5 text-[#f59e0b] mb-2.5">
                          {[...Array(item.rating)].map((_, i) => (
                            <FaStar key={i} className="size-3 fill-current" />
                          ))}
                        </div>

                        {/* Review Text with Balanced Min-Height & Line Clamp */}
                        <p className="text-slate-600 text-xs sm:text-[12px] leading-relaxed font-normal mb-3.5 line-clamp-4 min-h-[64px] sm:min-h-[72px]">
                          &ldquo;{item.review}&rdquo;
                        </p>
                      </div>

                      {/* Bottom: Client Name & Initials Badge (Clean 1-line alignment) */}
                      <div className="relative z-10 pt-2.5 border-t border-slate-100 flex items-center gap-2.5">
                        {/* Name Initials Badge */}
                        <div
                          className={`w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full bg-gradient-to-br ${item.bgGradient} text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs`}
                        >
                          {item.initials}
                        </div>

                        {/* Name & Role + Time cleanly arranged */}
                        <div className="flex flex-col text-left min-w-0 flex-1">
                          <span className="text-[12.5px] sm:text-[13px] font-bold text-slate-900 truncate group-hover:text-[#fc7511] transition-colors">
                            {item.name}
                          </span>
                          <div className="flex items-center gap-1.5 text-[10.5px] text-slate-500 mt-0.5">
                            <span className="font-medium text-slate-600 truncate">
                              {item.role}
                            </span>
                            <span className="text-slate-300">•</span>
                            <span className="text-slate-400 shrink-0">
                              {item.time}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Slider Navigation: Arrows & Pagination Dots */}
            <div className="flex items-center justify-center sm:justify-end gap-2.5 mt-4 sm:mt-5">
              {/* Prev Button */}
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous reviews"
                className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full bg-white hover:bg-[#fff6ee] text-slate-700 hover:text-[#fc7511] border border-slate-200 hover:border-[#fc7511] shadow-2xs hover:shadow flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95"
              >
                <ChevronLeft className="size-4 stroke-[2.2]" />
              </button>

              {/* Indicator Dots */}
              <div className="flex items-center gap-1.5 px-1.5">
                {Array.from({ length: N }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goToSlide(i)}
                    aria-label={`Go to review ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeDot === i
                        ? "w-5 bg-[#fc7511]"
                        : "w-1.5 bg-slate-200 hover:bg-slate-300"
                    }`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next reviews"
                className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full bg-white hover:bg-[#fff6ee] text-slate-700 hover:text-[#fc7511] border border-slate-200 hover:border-[#fc7511] shadow-2xs hover:shadow flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95"
              >
                <ChevronRight className="size-4 stroke-[2.2]" />
              </button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

