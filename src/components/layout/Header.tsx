"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import { Phone, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Image from "next/image";

interface HeaderProps {
  onBookClick?: () => void;
  showBookButton?: boolean
}

export default function Header({ onBookClick, showBookButton = true }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(true);

  // useLayoutEffect runs before paint — prevents flash of header on mid-page refresh
  useLayoutEffect(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-200 ${
        isScrolled ? "opacity-0 pointer-events-none" : "bg-transparent pb-4 opacity-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        {/* <div className="text-2xl font-extrabold text-[#3b7dba]">
          Envision<span className="text-[#a6c516]">EyeClinic</span>
        </div> */}
        <Image src={"/assets/logo.png"} width={140} height={150} className="object-contain" alt="logo" />

        {/* Mobile Nav Icons */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="https://wa.me/919272222256"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-[#25d366] flex items-center justify-center text-white shadow-md hover:scale-105 transition-transform duration-200"
            aria-label="WhatsApp"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.14 1.535 5.874L.057 23.885a.5.5 0 0 0 .606.606l6.115-1.476A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.944 9.944 0 0 1-5.116-1.41l-.368-.217-3.812.921.954-3.727-.237-.385A9.946 9.946 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
          </a>
          <a
            href="tel:+919272222256"
            className="w-14 h-14 rounded-full bg-[#3b7dba] flex items-center justify-center text-white shadow-md hover:scale-105 transition-transform duration-200"
            aria-label="Call Now"
          >
            <Phone size={22} />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-4 items-center">
         {showBookButton && <Button
            onClick={onBookClick}
            variant="secondary"
            className="px-12 py-5 text-base gap-2 hover:scale-105 transition-transform duration-200"
          >
            Book Consultation <ArrowRight size={18} />
          </Button>}
          <Button variant="secondary" className="px-12 py-5 text-base gap-2 hover:scale-105 transition-transform duration-200">
            <Phone size={18} /> Call Now
          </Button>
        </nav>
      </div>
    </header>
  );
}
