"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import Container from "./common/Container";
import { useConsultationModal } from "@/context/ModalContext";

export default function Navbar() {
  const { openModal } = useConsultationModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const whatsappUrl =
    "https://wa.me/919990613140?text=Hi%20Brandmingo%2C%20I%20would%20like%20to%20get%20a%20free%20consultation%20for%20Digital%20Marketing%20services.";

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Why Choose Us", href: "#why-choose-us", id: "why-choose-us" },
    { name: "Our Process", href: "#process", id: "process" },
    { name: "Industries", href: "#industries", id: "industries" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  // Dynamic Scrollspy: track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      // 1. Scrolled state for navbar shadow
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 2. Active section detection
      const sectionIds = [
        "contact",
        "industries",
        "process",
        "why-choose-us",
        "services",
        "home",
      ];

      // If near the top
      if (window.scrollY < 120) {
        setActiveSection("home");
        return;
      }

      // If near bottom of the page
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 180
      ) {
        setActiveSection("contact");
        return;
      }

      const scrollPosition = window.scrollY + 160;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler on nav click
  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    if (mobileMenuOpen) setMobileMenuOpen(false);

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -85;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full pt-3 pb-2 transition-all duration-300">
      <Container>
        <div
          className={`bg-white rounded-full border border-slate-100/90 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-3.5 flex items-center justify-between ${
            isScrolled
              ? "shadow-[0_14px_40px_rgba(0,0,0,0.08)] backdrop-blur-md bg-white/95"
              : "shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
          }`}
        >
          {/* Brandmingo Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="flex items-center flex-shrink-0 group py-0.5 cursor-pointer"
          >
            <div className="relative h-8 sm:h-9.5 lg:h-10 w-32 sm:w-40 lg:w-44 transition-transform duration-200 group-hover:scale-[1.02]">
              <Image
                src="/brandmingologo.png"
                alt="Brandmingo - Top Digital Marketing Agency Nearby"
                fill
                priority
                sizes="(max-width: 640px) 130px, 176px"
                className="object-contain object-left"
              />
            </div>
          </a>

          {/* Desktop Navigation Links (All 6 Sections with Dynamic Scrollspy Active Dot) */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`relative font-semibold text-[13.5px] xl:text-[14.5px] tracking-normal py-1 whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? "text-[#fc7511] after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-5 after:h-[2.5px] after:bg-[#fc7511] after:rounded-full"
                      : "text-slate-700 hover:text-[#fc7511] font-medium"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Action: Get Free Consultation (Redirects to WhatsApp) */}
          <div className="hidden lg:flex items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-5 xl:px-6 py-2.5 xl:py-3 text-[13.5px] xl:text-[14px] font-semibold flex items-center gap-2 group whitespace-nowrap shadow-[0_6px_20px_rgba(252,117,17,0.35)] hover:shadow-[0_8px_25px_rgba(252,117,17,0.48)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <FaWhatsapp className="size-4 text-white" />
              <span>Get Free Consultation</span>
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Right: WhatsApp Icon Button + Hamburger Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-md shadow-emerald-500/25 active:scale-95 transition-all duration-200"
              aria-label="Direct WhatsApp Chat"
            >
              <FaWhatsapp className="size-4.5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-full text-slate-700 hover:text-[#fc7511] hover:bg-slate-50 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="size-6 text-[#fc7511]" />
              ) : (
                <Menu className="size-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2.5 bg-white rounded-3xl border border-slate-100 shadow-2xl p-5 animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`text-[14.5px] font-medium py-2.5 px-3 rounded-xl transition-colors flex items-center justify-between cursor-pointer ${
                      isActive
                        ? "bg-[#fff6ee] text-[#fc7511] font-semibold"
                        : "text-slate-700 hover:bg-slate-50 hover:text-[#fc7511]"
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#fc7511]" />
                    )}
                  </a>
                );
              })}

              <div className="pt-3 mt-1 border-t border-slate-100">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary w-full py-3 text-center text-sm font-semibold justify-center gap-2 cursor-pointer flex items-center"
                >
                  <FaWhatsapp className="size-4" />
                  <span>Get Free Consultation</span>
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
