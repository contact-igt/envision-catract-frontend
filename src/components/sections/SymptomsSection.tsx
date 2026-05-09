"use client";

import { Eye, AlertCircle, CheckCircle, MessageCircle, Moon, BookOpen, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

interface SymptomsSectionProps {
  onOpenModal: () => void;
}

import { companyData, symptomsData } from "@/constants/siteData";

interface SymptomsSectionProps {
  onOpenModal: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  "Blurry or Hazy Vision": <Eye size={32} />,
  "Glare & Halos at Night": <Moon size={32} />,
  "Prescription Keeps Changing": <CheckCircle size={32} />,
  "Trouble Reading Fine Print": <BookOpen size={32} />,
  "Faded or Washed-Out Colours": <AlertCircle size={32} />,
  "Double Vision in One Eye": <Eye size={32} />,
};

export default function SymptomsSection({ onOpenModal }: SymptomsSectionProps) {
  return (
    <section className="py-20 bg-[#3b7dba]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-center mb-16 px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 tracking-tight text-white">
            {symptomsData.title}
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            {symptomsData.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {symptomsData.items.map((symptom, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all text-left group border-t-4 border-[#a6c516]"
            >
              <div className="text-[#a6c516] mb-6 flex items-center justify-between">
                <div className="bg-[#a6c516]/10 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                  {iconMap[symptom.title] || <CheckCircle size={32} />}
                </div>
                <span className="text-4xl font-black text-gray-100 group-hover:text-[#a6c516]/10 transition-colors">0{idx + 1}</span>
              </div>
              <h3 className="text-xl font-extrabold text-gray-800 mb-3 leading-tight">
                {symptom.title}
              </h3>
              <p className="text-gray-600 text-base font-bold leading-relaxed">{symptom.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-wrap justify-center gap-6">
          <a
            href={companyData.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#a6c516] text-white font-extrabold hover:bg-[#8faa10] transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95 text-sm md:text-base"
          >
            <MessageCircle size={20} />
            {symptomsData.cta}
          </a>
          <Button
            variant="outline"
            onClick={onOpenModal}
            className="bg-white !text-[#3b7dba] border-none px-8 py-3.5 text-sm md:text-base hover:bg-gray-100 shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Book My Appointment <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
