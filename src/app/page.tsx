"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import MobileStickyBar from "@/components/layout/MobileStickyBar";
import HeroSection from "@/components/sections/HeroSection";
import SymptomsSection from "@/components/sections/SymptomsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import DoctorSection from "@/components/sections/DoctorSection";
import TreatmentSection from "@/components/sections/TreatmentSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaSection from "@/components/sections/CtaSection";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/ui/BookingModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="font-sans bg-[#fcfbf9] text-black min-h-screen pb-20 md:pb-0 overflow-hidden">
      {/* Layout */}
      <Header onBookClick={openModal} />
      <MobileStickyBar onBookClick={openModal} />

      {/* Page Sections */}
      <main>
        <HeroSection onBookClick={openModal} />
        <SymptomsSection onOpenModal={openModal} />
        <TestimonialsSection />
        <DoctorSection />
        <TreatmentSection onOpenModal={openModal} />
        <WhyChooseSection onOpenModal={openModal} />
        <FaqSection onOpenModal={openModal} />
        <CtaSection />
        <Footer />
      </main>

      <BookingModal isOpen={modalOpen} onClose={closeModal} />

      {/* Sticky WhatsApp Button */}
      <a
        href="https://wa.me/919272222256"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-24 right-5 md:bottom-8 md:right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-110 transition-transform duration-200"
      >
        <svg viewBox="0 0 24 24" width="30" height="30" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.14 1.535 5.874L.057 23.885a.5.5 0 0 0 .606.606l6.115-1.476A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.944 9.944 0 0 1-5.116-1.41l-.368-.217-3.812.921.954-3.727-.237-.385A9.946 9.946 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
      </a>
    </div>
  );
}
