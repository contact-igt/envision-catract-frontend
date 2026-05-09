"use client";

import { ArrowRight } from "lucide-react";

import { whyEnvisionData } from "@/constants/siteData";

interface WhyChooseSectionProps {
  onOpenModal: () => void;
}

export default function WhyChooseSection({ onOpenModal }: WhyChooseSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-[#3b7dba] mb-4 tracking-tight">
            {whyEnvisionData.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {whyEnvisionData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyEnvisionData.items.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 p-6 rounded-2xl hover:bg-[#f4f7f0] transition-colors border border-transparent hover:border-[#a6c516]/20"
            >
              <div className="text-4xl font-extrabold text-[#a6c516]/30 font-serif leading-none">
                {item.num}
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#3b7dba] mb-2 leading-tight">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 bg-[#3b7dba] hover:bg-[#2c6396] text-white font-black px-12 py-4 rounded-full transition-all duration-200 shadow-xl hover:scale-105 text-base"
          >
            Book Your Consultation <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
