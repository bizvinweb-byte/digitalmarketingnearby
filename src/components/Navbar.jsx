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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl =
    "https://wa.me/919990613140?text=Hi%20Brandmingo%2C%20I%20would%20like%20to%20get%20a%20free%20consultation%20for%20Digital%20Marketing%20services.";

  const navLinks = [
    { name: "Home", href: "/", active: true },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Blogs", href: "#blogs" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full pt-3.5 pb-2.5 transition-all duration-300">
      <Container>
        <div
          className={`bg-white rounded-full border border-slate-100/90 transition-all duration-300 px-6 sm:px-8 lg:px-10 py-3.5 sm:py-4 flex items-center justify-between ${
            isScrolled
              ? "shadow-[0_14px_40px_rgba(0,0,0,0.08)] backdrop-blur-md bg-white/95"
              : "shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
          }`}
        >
          {/* Brandmingo Logo */}
          <Link href="/" className="flex items-center flex-shrink-0 group py-0.5">
            <div className="relative h-9 sm:h-11 w-38 sm:w-48 transition-transform duration-200 group-hover:scale-[1.02]">
              <Image
                src="/brandmingologo.png"
                alt="Brandmingo - Top Digital Marketing Agency Nearby"
                fill
                priority
                sizes="(max-width: 640px) 152px, 192px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-10">
            {navLinks.map((item) =>
              item.active ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-[#fc7511] font-semibold text-[15px] lg:text-[16px] tracking-normal py-1 after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-5 after:h-[2.5px] after:bg-[#fc7511] after:rounded-full transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-700 hover:text-[#fc7511] font-medium text-[15px] lg:text-[16px] tracking-normal py-1 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* Desktop Right Action: Get Free Consultation (Redirects to WhatsApp) */}
          <div className="hidden md:flex items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-6 lg:px-8 py-3 lg:py-3.5 text-[15px] font-semibold flex items-center gap-2.5 group whitespace-nowrap shadow-[0_6px_20px_rgba(252,117,17,0.35)] hover:shadow-[0_8px_25px_rgba(252,117,17,0.48)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <FaWhatsapp className="size-4 text-white" />
              <span>Get Free Consultation</span>
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Right: WhatsApp Icon Button + Hamburger Toggle Button */}
          <div className="flex md:hidden items-center gap-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-md shadow-emerald-500/25 active:scale-95 transition-all duration-200"
              aria-label="Direct WhatsApp Chat"
            >
              <FaWhatsapp className="size-5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-slate-700 hover:text-[#fc7511] hover:bg-slate-50 transition-colors focus:outline-none"
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
          <div className="md:hidden mt-3 bg-white rounded-3xl border border-slate-100 shadow-2xl p-6 animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-2.5 px-3 rounded-xl transition-colors flex items-center justify-between ${
                    item.active
                      ? "bg-[#fff6ee] text-[#fc7511] font-semibold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-[#fc7511]"
                  }`}
                >
                  <span>{item.name}</span>
                  {item.active && (
                    <span className="w-2 h-2 rounded-full bg-[#fc7511]" />
                  )}
                </Link>
              ))}

              <div className="pt-4 mt-2 border-t border-slate-100">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary w-full py-3.5 text-center text-sm font-semibold justify-center gap-2.5 cursor-pointer flex items-center"
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
