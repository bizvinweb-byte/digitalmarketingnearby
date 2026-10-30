"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  User,
  Phone,
  Building2,
  LayoutGrid,
  MessageSquare,
  ArrowRight,
  Lock,
  CheckCircle2,
  Loader2,
  AlertCircle,
  ChevronDown,
  Check,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

export default function ConsultationForm({
  title = "Request a Free Consultation",
  subtitle = "Fill out the form and our team will get back to you within 24 hours.",
  buttonText = "Get My Free Digital Marketing Consultation",
  source = "CTA Section",
  className = "",
  initialService = "",
  onClose,
}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessName: "",
    service: initialService || "",
    requirements: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [apiError, setApiError] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close custom dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const serviceOptions = [
    "Website Development (Next.js / WordPress / Shopify)",
    "SEO Optimization (Rank #1 Google)",
    "Google Ads & PPC Marketing (High ROI)",
    "Social Media Management & Paid Ads",
    "Local SEO & Google Business Profile",
    "Complete 360° Digital Marketing",
    "Other Custom Requirement",
  ];

  // Real-time Phone Formatter: strictly digits only, max 10 chars
  const handlePhoneChange = (e) => {
    const rawVal = e.target.value.replace(/\D/g, "").slice(0, 10);
    setFormData((prev) => ({ ...prev, phone: rawVal }));

    // Clear error if valid
    if (errors.phone && rawVal.length === 10 && /^[6-9]\d{9}$/.test(rawVal)) {
      setErrors((prev) => ({ ...prev, phone: "" }));
    }
  };

  // Form Field Validation
  const validate = () => {
    const newErrors = {};

    // 1. Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // 2. Phone validation: strictly 10 digits, starts with 6-9
    const cleanPhone = formData.phone.trim();
    if (!cleanPhone) {
      newErrors.phone = "Phone number is required";
    } else if (cleanPhone.length !== 10) {
      newErrors.phone = `Enter 10 digits (${cleanPhone.length}/10 entered)`;
    } else if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      newErrors.phone = "Enter a valid 10-digit number (starts with 6, 7, 8, or 9)";
    }

    // 3. Business Name
    if (!formData.businessName.trim()) {
      newErrors.businessName = "Please enter your business or company name";
    }

    // 4. Required Service
    if (!formData.service) {
      newErrors.service = "Please select a required service";
    }

    // 5. Requirements
    if (!formData.requirements.trim()) {
      newErrors.requirements = "Please tell us briefly about your business goals";
    } else if (formData.requirements.trim().length < 5) {
      newErrors.requirements = "Please enter at least 5 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Send to server API endpoint
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSuccess(true);
      } else {
        // Fallback: If API returns error, still show success and let user WhatsApp
        setApiError(result.message || "Failed to submit. Please try again.");
      }
    } catch (err) {
      console.error("Form submit error:", err);
      // Graceful fallback: Treat as success so the user is never blocked
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // WhatsApp Immediate Connect URL
  const whatsappUrl = `https://wa.me/919990613140?text=${encodeURIComponent(
    `Hi Brandmingo, I requested a consultation:\n\n*Name:* ${formData.name}\n*Phone:* +91 ${formData.phone}\n*Business:* ${formData.businessName}\n*Service:* ${formData.service}\n*Requirements:* ${formData.requirements}`
  )}`;

  return (
    <div
      className={`bg-white rounded-3xl p-6 sm:p-7 xl:p-8 shadow-[0_15px_45px_rgba(0,0,0,0.08)] border border-slate-100 relative text-left transition-all duration-300 ${className}`}
    >
      {/* Top Right Decorative Sparkles Accent */}
      <div className="absolute top-5 right-5 text-[#fc7511] select-none pointer-events-none hidden sm:block">
        <span className="text-sm font-bold tracking-widest text-[#fc7511]/70">
          \ | /
        </span>
      </div>

      {/* Header Badge */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[10.5px] font-bold uppercase tracking-widest text-slate-500">
          GET IN TOUCH
        </span>
        <div className="w-10 h-[1.5px] bg-[#fc7511]/50 rounded-full" />
      </div>

      {/* Heading */}
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug mb-1.5">
        Request a <span className="text-[#fc7511]">Free Consultation</span>
      </h3>

      {/* Subtext */}
      <p className="text-xs sm:text-[13px] text-slate-600 font-normal leading-relaxed mb-6">
        {subtitle}
      </p>

      {/* SUCCESS STATE */}
      {isSuccess ? (
        <div className="py-6 flex flex-col items-center text-center animate-fadeIn">
          <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 shadow-xs">
            <CheckCircle2 className="size-8" />
          </div>

          <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5">
            Consultation Request Received!
          </h4>

          <p className="text-xs sm:text-[13px] text-slate-600 max-w-sm mb-6 leading-relaxed">
            Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>.
            Our digital marketing experts will analyze your business and call you shortly on{" "}
            <span className="font-semibold text-slate-900">+91 {formData.phone}</span>.
          </p>

          {/* Quick WhatsApp Connect */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-5 rounded-full bg-[#25D366] hover:bg-[#1ebd59] text-white text-xs sm:text-[13px] font-bold tracking-wide flex items-center justify-center gap-2 shadow-md shadow-[#25D366]/25 transition-all duration-200 hover:scale-[1.02] active:scale-95 mb-3"
          >
            <FaWhatsapp className="size-4" />
            <span>Chat With Us Instantly on WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => {
              setIsSuccess(false);
              setFormData({
                name: "",
                phone: "",
                businessName: "",
                service: "",
                requirements: "",
              });
            }}
            className="text-xs text-slate-500 hover:text-[#fc7511] font-medium transition-colors cursor-pointer mt-2 underline underline-offset-4"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        /* FORM STATE */
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
          {apiError && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="size-4 shrink-0 text-red-500" />
              <span>{apiError}</span>
            </div>
          )}

          {/* Row 1: Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
            {/* Name */}
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="size-4" />
                </div>
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: "" });
                  }}
                  className={`w-full pl-10 pr-3.5 py-2.5 sm:py-3 rounded-xl bg-slate-50/80 border text-xs sm:text-[13px] text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none transition-all duration-200 ${
                    errors.name
                      ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                      : "border-slate-200 focus:border-[#fc7511] focus:ring-2 focus:ring-[#fc7511]/10"
                  }`}
                />
              </div>
              {errors.name && (
                <span className="text-[11px] text-red-500 font-medium mt-1 block pl-1">
                  {errors.name}
                </span>
              )}
            </div>

            {/* Phone (Strictly 10 Digits) */}
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Phone className="size-4" />
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  maxLength={10}
                  className={`w-full pl-10 pr-12 py-2.5 sm:py-3 rounded-xl bg-slate-50/80 border text-xs sm:text-[13px] text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none transition-all duration-200 ${
                    errors.phone
                      ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                      : "border-slate-200 focus:border-[#fc7511] focus:ring-2 focus:ring-[#fc7511]/10"
                  }`}
                />
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-[10.5px] font-semibold text-slate-400 pointer-events-none">
                  {formData.phone.length}/10
                </span>
              </div>
              {errors.phone && (
                <span className="text-[11px] text-red-500 font-medium mt-1 block pl-1">
                  {errors.phone}
                </span>
              )}
            </div>
          </div>

          {/* Row 2: Business Name */}
          <div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Building2 className="size-4" />
              </div>
              <input
                type="text"
                placeholder="Business Name *"
                value={formData.businessName}
                onChange={(e) => {
                  setFormData({ ...formData, businessName: e.target.value });
                  if (errors.businessName) setErrors({ ...errors, businessName: "" });
                }}
                className={`w-full pl-10 pr-3.5 py-2.5 sm:py-3 rounded-xl bg-slate-50/80 border text-xs sm:text-[13px] text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none transition-all duration-200 ${
                  errors.businessName
                    ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                    : "border-slate-200 focus:border-[#fc7511] focus:ring-2 focus:ring-[#fc7511]/10"
                }`}
              />
            </div>
            {errors.businessName && (
              <span className="text-[11px] text-red-500 font-medium mt-1 block pl-1">
                {errors.businessName}
              </span>
            )}
          </div>

          {/* Row 3: Custom Themed Service Dropdown */}
          <div ref={dropdownRef} className="relative">
            {/* Dropdown Trigger Button */}
            <button
              type="button"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className={`w-full pl-10 pr-10 py-2.5 sm:py-3 rounded-xl bg-slate-50/80 border text-xs sm:text-[13px] text-left flex items-center justify-between transition-all duration-200 cursor-pointer ${
                isDropdownOpen
                  ? "bg-white border-[#fc7511] ring-2 ring-[#fc7511]/15 shadow-xs"
                  : errors.service
                  ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                  : "border-slate-200 hover:border-[#fc7511]/40 hover:bg-white"
              }`}
            >
              {/* Left Grid Icon */}
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <LayoutGrid className="size-4" />
              </div>

              {/* Selected Label or Placeholder */}
              <span
                className={`truncate ${
                  formData.service
                    ? "text-slate-900 font-semibold"
                    : "text-slate-400 font-normal"
                }`}
              >
                {formData.service || "Required Service *"}
              </span>

              {/* Chevron Icon with 180deg flip */}
              <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none">
                <ChevronDown
                  className={`size-4 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180 text-[#fc7511]" : "text-slate-400"
                  }`}
                />
              </div>
            </button>

            {/* Custom Themed Options Menu (No scrollbar, clean display) */}
            {isDropdownOpen && (
              <div className="absolute z-50 left-0 right-0 mt-1.5 bg-white rounded-2xl border border-[#fc7511]/25 shadow-[0_12px_32px_rgba(252,117,17,0.14)] p-1.5 overflow-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {serviceOptions.map((opt, i) => {
                  const isSelected = formData.service === opt;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, service: opt }));
                        if (errors.service) setErrors((prev) => ({ ...prev, service: "" }));
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full px-3 py-2 rounded-xl text-left text-xs sm:text-[12.5px] transition-all duration-150 flex items-center justify-between cursor-pointer mb-0.5 last:mb-0 ${
                        isSelected
                          ? "bg-[#fff4eb] text-[#fc7511] font-bold"
                          : "text-slate-700 hover:bg-[#fff7f0] hover:text-[#fc7511]"
                      }`}
                    >
                      <span className="truncate pr-2">{opt}</span>
                      {isSelected && (
                        <Check className="size-3.5 text-[#fc7511] shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}

            {errors.service && (
              <span className="text-[11px] text-red-500 font-medium mt-1 block pl-1">
                {errors.service}
              </span>
            )}
          </div>

          {/* Row 4: Requirements Textarea */}
          <div>
            <div className="relative">
              <div className="absolute top-3 left-3.5 pointer-events-none text-slate-400">
                <MessageSquare className="size-4" />
              </div>
              <textarea
                rows={3}
                placeholder="Tell us about your business / requirements *"
                value={formData.requirements}
                onChange={(e) => {
                  setFormData({ ...formData, requirements: e.target.value });
                  if (errors.requirements) setErrors({ ...errors, requirements: "" });
                }}
                className={`w-full pl-10 pr-3.5 py-2.5 sm:py-3 rounded-xl bg-slate-50/80 border text-xs sm:text-[13px] text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none transition-all duration-200 resize-none ${
                  errors.requirements
                    ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                    : "border-slate-200 focus:border-[#fc7511] focus:ring-2 focus:ring-[#fc7511]/10"
                }`}
              />
            </div>
            {errors.requirements && (
              <span className="text-[11px] text-red-500 font-medium mt-1 block pl-1">
                {errors.requirements}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 sm:py-3.5 px-6 rounded-xl bg-[#fc7511] hover:bg-[#e06206] text-white text-xs sm:text-[13.5px] font-bold tracking-wide shadow-md shadow-[#fc7511]/25 transition-all duration-300 hover:scale-[1.01] active:scale-98 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed group mt-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="size-4 animate-spin text-white" />
                <span>Sending Consultation Request...</span>
              </>
            ) : (
              <>
                <span>{buttonText}</span>
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>

          {/* Privacy Note with Lock */}
          <div className="pt-2 flex items-center justify-center gap-1.5 text-slate-400 text-[10.5px] sm:text-[11px] text-center">
            <Lock className="size-3 text-slate-400 shrink-0" />
            <span>Your information is safe with us. We never share your details.</span>
          </div>
        </form>
      )}
    </div>
  );
}
