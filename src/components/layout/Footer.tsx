"use client";

import { Phone, MapPin, Instagram } from "lucide-react";
import { companyData } from "@/constants/siteData";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-10 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10 text-center md:text-left">

          {/* Column 1: Clinic Logo */}
          <div className="md:mb-6">
            <Image 
              src="/assets/footer_logo.png" 
              alt={companyData.name} 
              width={180} 
              height={65} 
              className="object-contain mx-auto md:mx-0"
            />
          </div>

          {/* Column 3: Doctor Details */}
          <div className="mt-8 space-y-6">
            <h4 className="text-[#a6c516] uppercase tracking-[0.2em] text-[10px] font-black">Expert Care</h4>
            <div className="space-y-2">
              <p className="text-white/90 font-bold">Doctor: {companyData.doctorName}</p>
              <p className="text-white/50 text-xs leading-relaxed max-w-xs mx-auto md:mx-0 font-medium">
                {companyData.doctorCredentials}
              </p>
            </div>
          </div>

          {/* Column 4: Contact & Links */}
          <div className="mt-8 space-y-6">
            <h4 className="text-[#a6c516] uppercase tracking-[0.2em] text-[10px] font-black">Quick Contact</h4>
            <div className="space-y-4">
              <a href={`tel:${companyData.phoneRaw}`} className="flex items-center gap-3 justify-center md:justify-start text-white/70 hover:text-[#a6c516] transition-colors group">
                <div className="bg-white/5 p-2 rounded-full group-hover:bg-[#a6c516]/10 transition-colors">
                  <Phone size={14} />
                </div>
                <span className="text-sm font-bold">{companyData.phone}</span>
              </a>
              <a href={`mailto:${companyData.email}`} className="flex items-center gap-3 justify-center md:justify-start text-white/70 hover:text-[#a6c516] transition-colors group">
                <div className="bg-white/5 p-2 rounded-full group-hover:bg-[#a6c516]/10 transition-colors">
                  <Instagram size={14} />
                </div>
                <span className="text-sm font-bold">{companyData.email}</span>
              </a>
            </div>
          </div>
                    {/* Column 2: Location */}
          <div className="mt-8 space-y-6">
            <h4 className="text-[#a6c516] uppercase tracking-[0.2em] text-[10px] font-black">Location</h4>
            <div className="flex items-start gap-3 justify-center md:justify-start text-white/60 leading-relaxed text-sm max-w-[240px] mx-auto md:mx-0">
              <MapPin size={18} className="text-[#a6c516] flex-shrink-0 mt-0.5" />
              <p>{companyData.fullAddress}</p>
            </div>
          </div>
        </div>

        

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest leading-relaxed">
            © {new Date().getFullYear()} {companyData.name}. All Rights Reserved.
          </p>
          <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest leading-relaxed">
            Powered by{" "}
            <a
              href="https://invictusglobaltech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#249b72] hover:text-[#2cc08d] transition-colors"
            >
              Invictus Global Tech Pvt Ltd
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
