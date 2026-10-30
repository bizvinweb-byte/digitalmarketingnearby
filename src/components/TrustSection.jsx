import React from "react";
import Container from "./common/Container";
import { Briefcase, Users, Award, TrendingUp } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaStar } from "react-icons/fa6";

export default function TrustSection() {
  const stats = [
    {
      icon: Briefcase,
      value: "200+",
      label: "Projects Completed",
    },
    {
      icon: Users,
      value: "100+",
      label: "Happy Clients",
    },
    {
      icon: Award,
      value: "3+",
      label: "Years of Experience",
    },
    {
      icon: TrendingUp,
      value: "2X",
      label: "Average Growth for Our Clients",
    },
  ];

  return (
    <section className="relative w-full py-8 sm:py-10 lg:py-12 overflow-hidden">
      {/* Subtle background glow & curved decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#fc7511]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-6 sm:mb-7 lg:mb-8">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#fff4eb] border border-[#fc7511]/25 text-[#fc7511] text-[10.5px] sm:text-xs font-bold tracking-wider uppercase mb-3 shadow-sm">
            <TrendingUp className="size-3.5 text-[#fc7511]" />
            <span>TRUSTED BY BUSINESSES</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-bold text-slate-900 tracking-tight leading-[1.2] mb-3">
            Real Results.{" "}
            <span className="text-[#fc7511] font-bold">Real Businesses in Noida.</span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl">
            We help startups, SMEs and established brands grow with
            result-driven digital marketing and development solutions from
            Noida Sector 62 to across India.
          </p>
        </div>

        {/* Floating Trust / Stats Card */}
        <div className="bg-white rounded-2xl md:rounded-3xl border border-slate-100 shadow-[0_10px_35px_rgba(0,0,0,0.04)] p-4 sm:p-6 lg:p-7">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 lg:gap-0 lg:divide-x lg:divide-slate-100 items-center">
            {/* First 4 Stats */}
            {stats.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 sm:gap-3.5 lg:px-4 xl:px-5 group"
                >
                  {/* Soft circular icon container */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#fff4eb] text-[#fc7511] flex items-center justify-center shrink-0 border border-[#fc7511]/20 transition-transform duration-200 group-hover:scale-105">
                    <IconComp className="size-5 sm:size-5.5 stroke-[2.2]" />
                  </div>

                  {/* Value and label */}
                  <div className="flex flex-col text-left">
                    <span className="text-xl sm:text-2xl lg:text-[25px] font-bold text-[#fc7511] leading-tight">
                      {item.value}
                    </span>
                    <span className="text-xs sm:text-[12.5px] text-slate-600 font-medium leading-snug mt-0.5">
                      {item.label}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* 5th Column: Google Reviews */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1 flex items-center justify-center lg:justify-start gap-3.5 pt-3 lg:pt-0 lg:px-4 xl:px-5 border-t lg:border-t-0 border-slate-100">
              {/* Official Google G Logo */}
              <div className="shrink-0 flex items-center justify-center">
                <FcGoogle className="size-9 sm:size-10" />
              </div>

              {/* Rating, Stars & Label */}
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl sm:text-2xl lg:text-[24px] font-extrabold text-slate-900 leading-none">
                    4.9/5
                  </span>
                </div>

                {/* 5 Stars */}
                <div className="flex items-center gap-0.5 my-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="size-3 sm:size-3.5 text-amber-400"
                    />
                  ))}
                </div>

                <span className="text-xs sm:text-[12px] text-slate-500 font-medium leading-none">
                  Google Reviews
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

