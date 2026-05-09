"use client";

import { Phone, Calendar, MapPin, Instagram } from "lucide-react";

interface MobileStickyBarProps {
  onBookClick: () => void;
}

export default function MobileStickyBar({ onBookClick }: MobileStickyBarProps) {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-around p-3 md:hidden z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <a
        href="https://wa.me/919272222256"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center text-[#25D366] text-xs font-bold gap-1"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.14 1.535 5.874L.057 23.885a.5.5 0 0 0 .606.606l6.115-1.476A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.944 9.944 0 0 1-5.116-1.41l-.368-.217-3.812.921.954-3.727-.237-.385A9.946 9.946 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
        WhatsApp
      </a>
      <a
        href="tel:+919272222256"
        className="flex flex-col items-center text-[#3b7dba] text-xs font-bold gap-1"
      >
        <Phone size={24} />
        Call
      </a>
      <button
        onClick={onBookClick}
        id="mobile-book-btn"
        className="flex flex-col items-center text-[#a6c516] text-xs font-bold gap-1"
      >
        <Calendar size={24} />
        Book
      </button>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.google.com/maps/place/Envision+Eye+Clinic+Cataract+and+LASIK+Surgery+Center/@18.5563839,73.8014374,2565m/data=!3m2!1e3!5s0x3bc2bf3011b112b5:0xd3be525331bf6927!4m6!3m5!1s0x3bc2bf2522c46783:0xed3da2e96d85b17!8m2!3d18.5603887!4d73.8076555!16s%2Fg%2F1td1sx4_?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D"
        className="flex flex-col items-center text-gray-500 text-xs font-bold gap-1"
      >
        <MapPin size={24} />
        Directions
      </a>
      <a
        href="https://www.instagram.com/envisioneyeclinicpune/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center text-[#E1306C] text-xs font-bold gap-1"
      >
        <Instagram size={24} />
        Instagram
      </a>
    </div>
  );
}
