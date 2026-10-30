import { ModalProvider } from "@/context/ModalContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessSection from "@/components/ProcessSection";
import IndustriesSection from "@/components/IndustriesSection";
import ReviewsSection from "@/components/ReviewsSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/common/FloatingContact";

export default function Home() {
  return (
    <ModalProvider>
      <main className="min-h-screen bg-white">
        {/* 1. Global SEO-focused Floating Navbar */}
        <Navbar />

        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Trust & Social Proof Section */}
        <TrustSection />

        {/* 4. Our Digital Marketing Services Section */}
        <ServicesSection />

        {/* 5. Why Choose Brandmingo Section */}
        <WhyChooseUs />

        {/* 6. How We Work / Process Section */}
        <ProcessSection />

        {/* 7. Industries We Serve Section */}
        <IndustriesSection />

        {/* 8. Client Reviews / Testimonials Section */}
        <ReviewsSection />

        {/* 9. Frequently Asked Questions (FAQ) Section */}
        <FaqSection />

        {/* 10. Lead Generation CTA & Free Consultation Section */}
        <CtaSection />

        {/* 11. High-Converting SEO Footer */}
        <Footer />

        {/* 12. Floating Right-Side Quick Action Contact (Call + WhatsApp) */}
        <FloatingContact />
      </main>
    </ModalProvider>
  );
}
