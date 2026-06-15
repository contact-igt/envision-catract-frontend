"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ProcedureStepsSectionProps {
  onOpenModal: () => void;
}

export default function ProcedureStepsSection({
  onOpenModal,
}: ProcedureStepsSectionProps) {
  return (
    <section className="py-20 md:py-24 bg-[#f7fbfd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-[#3b7dba] mb-4 tracking-tight leading-tight">
            Quick Procedure with Most Advanced Technology
          </h2>
          <p className="text-base md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Experience modern cataract surgery designed for comfort, precision,
            and clearer vision.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-4xl overflow-hidden rounded-[1.75rem] bg-white shadow-2xl shadow-[#3b7dba]/10 ring-1 ring-black/5">
            <Image
              src="/assets/procedure_steps.png"
              alt="Step-by-step cataract procedure illustration"
              width={1536}
              height={1024}
              className="w-full h-auto object-contain"
              sizes="(min-width: 1024px) 896px, calc(100vw - 32px)"
            />
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <button
            onClick={onOpenModal}
            className="inline-flex items-center justify-center gap-3 bg-[#a6c516] hover:bg-[#8fa813] text-white font-black px-8 sm:px-12 py-4 rounded-full transition-all duration-200 shadow-xl hover:scale-105 active:scale-95 text-sm sm:text-base"
          >
            Book Your Cataract Consultation <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
