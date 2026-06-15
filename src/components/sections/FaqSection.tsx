"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { faqsData } from "@/constants/siteData";

interface FaqSectionProps {
  onOpenModal: () => void;
}

export default function FaqSection({ onOpenModal }: FaqSectionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#f4f7f0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-[#3b7dba] mb-4 tracking-tight">
            {faqsData.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {faqsData.subtitle}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqsData.items.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-4 font-bold text-base md:text-lg text-[#3b7dba] flex justify-between items-center transition-all hover:bg-gray-50 focus:outline-none"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="flex items-start gap-3">
                  <span className="text-[#a6c516] italic font-black">Q{i + 1}.</span>
                  {faq.q}
                </span>
                {openFaq === i ? (
                  <ChevronUp className="text-[#a6c516] flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-gray-400 flex-shrink-0" />
                )}
              </button>

              {openFaq === i && (
                <div className="px-10 pb-6 text-gray-700 leading-relaxed text-base md:text-lg border-t border-gray-50 pt-5 font-medium animate-in fade-in slide-in-from-top-1 duration-200">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-3 bg-[#3b7dba] hover:bg-[#2c6396] text-white font-bold px-12 py-4 rounded-full transition-all duration-200 shadow-xl hover:scale-105 active:scale-95 text-sm lg:text-lg"
          >
            Ready for Clearer Vision? <br className="block mid:hidden" /> Book Now <ArrowRight size={20} />
          </button>
          <p className="mt-6 text-gray-500 font-bold italic text-sm">
            Still have a question? Ask us directly on WhatsApp or during your evaluation.
          </p>
        </div>
      </div>
    </section>
  );
}
