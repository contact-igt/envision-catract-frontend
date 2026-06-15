"use client";

import Image from "next/image";
import { Eye, Clock, CheckCircle, ArrowRight, Info, Zap, Star } from "lucide-react";
import { treatmentComparison, procedureData } from "@/constants/siteData";
import { Highlight } from "@/components/ui/Highlight";

interface TreatmentSectionProps {
  onOpenModal: () => void;
}


export default function TreatmentSection({ onOpenModal }: TreatmentSectionProps) {
  return (
    <section>

      {/* ── What is Cataract Surgery? — warm cream bg ── */}
      <div className="py-20 bg-[#fcfbf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-5xl font-bold text-[#3b7dba] mb-4 tracking-tight">
              {procedureData.title}
            </h2>
            <p className="text-gray-700 font-semibold text-lg md:text-[1.5rem] max-w-5xl mx-auto mt-4 md:mt-7 leading-relaxed md:leading-[3rem]">
              Today’s cataract surgery is nothing like it used to be.{" "}
              <br />
            {procedureData.highlights.map((highlight, i) => (
              <Highlight key={i}>{highlight}</Highlight>
            ))}{" "}
              — and most patients are seeing clearly by the very next morning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full">
              <h3 className="text-2xl font-bold text-[#a6c516] mb-4 flex items-center gap-3">
                <Eye className="text-[#3b7dba]" /> {procedureData.whatIsSection.title}
              </h3>
              <div className="space-y-4 flex-grow">
                <p className="text-gray-700 leading-relaxed text-lg italic">
                  &quot;{procedureData.whatIsSection.description}&quot;
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {procedureData.whatIsSection.conclusion}
                </p>
              </div>
              <div className="mt-8">
                <button
                  onClick={onOpenModal}
                  className="inline-flex items-center gap-2 bg-[#a6c516] hover:bg-[#8fa813] text-white font-black px-10 py-4 rounded-full transition-all duration-200 shadow-lg hover:scale-105 text-sm"
                >
                  Book a Evaluation <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="bg-[#3b7dba] p-8 rounded-3xl shadow-lg text-white flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Clock className="text-[#a6c516]" /> {procedureData.dayOfSection.title}
              </h3>
              <ul className="space-y-4 flex-grow">
                {procedureData.dayOfSection.steps.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="bg-[#a6c516] text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5 shadow-md">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-0.5">{item.step}</h4>
                      <p className="text-blue-50 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Recovery Bar */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  {procedureData.recovery.map((stat, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <Zap size={14} className="text-[#a6c516] fill-[#a6c516]" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">{stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Which IOL Lens? — light blue tint bg ── */}
      <div className="py-20 bg-[#eef4fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-bold text-[#3b7dba] text-center mb-4 tracking-tight">
            {treatmentComparison.title}
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            {treatmentComparison.subtitle}
          </p>

          {/* Wrapper: pt-8 space; price-tag badge at top-right corner */}
          <div className="pt-8 relative">

            <div className="overflow-x-auto rounded-2xl shadow-xl border border-[#a6c516]/30">
              <table className="w-full text-left bg-white min-w-[800px] table-fixed border-separate border-spacing-0">
                {/* Strict equal-width columns */}
                <colgroup>
                  <col style={{ width: "20%" }} />
                  <col style={{ width: "20%" }} />
                  <col style={{ width: "20%" }} />
                  <col style={{ width: "20%" }} />
                  <col style={{ width: "20%" }} />
                </colgroup>
 
                <thead>
                  <tr className="bg-[#3b7dba] text-white">
                    <th className="p-12 md:p-12 text-base font-bold align-middle border-r border-white/20 rounded-tl-2xl">
                      Feature
                    </th>
                    <th className="p-4 md:p-6 text-base font-bold align-middle text-center border-r border-white/20">
                      Monofocal
                      <span className="block text-sm font-normal opacity-80 mt-0.5">
                        Standard Lens
                      </span>
                    </th>
                    <th className="p-4 md:p-6 text-base font-bold align-middle text-center border-r border-white/20">
                      Toric
                      <span className="block text-sm font-normal opacity-80 mt-0.5">
                        For Astigmatism
                      </span>
                    </th>
                    <th className="p-4 md:p-6 text-base font-bold align-middle text-center border-r border-white/20">
                      Enhanced
                      <span className="block text-sm font-normal opacity-80 mt-0.5">
                        Monofocal
                      </span>
                    </th>
                    <th className="p-4 md:p-6 text-base font-bold align-middle text-center bg-[#7ba832] text-white relative rounded-tr-2xl border-l-2 border-r-2 border-t-2 border-[#7ba832]">
                      {/* Most Popular Tag - Top Right Corner */}
                      <span className="absolute top-1.5 right-1.5 inline-flex items-center gap-1 bg-white text-[#5a8a10] text-[8px] md:text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm border border-[#5a8a10]/10 pointer-events-none whitespace-nowrap">
                        <Star size={10} className="fill-current" /> Most Popular
                      </span>
                      <span className="block">Trifocal / Multifocal</span>
                      <span className="block text-sm font-normal opacity-80 mt-0.5">
                        Premium Lens
                      </span>
                    </th>
                  </tr>
                </thead>
 
                <tbody className="divide-y divide-gray-100">
 
                  {/* Lens Design / Image Row */}
                  <tr className="bg-white">
                    <td className="py-5 px-4 md:px-6 font-bold text-gray-800 text-sm md:text-base align-middle border-r border-black/[0.08] border-b border-black/[0.08]">
                      Lens Design
                    </td>
                    {/* Fixed 120×100 icon container — images center reliably regardless of intrinsic dimensions */}
                    <td className="py-5 px-4 md:px-6 align-middle border-r border-black/[0.08] border-b border-black/[0.08]">
                      <div className="w-[120px] h-[100px] flex items-center justify-center mx-auto">
                        <Image
                          src="/assets/monofocal.png"
                          alt="Monofocal Lens"
                          width={110}
                          height={90}
                          className="rounded-xl object-contain max-w-full max-h-full"
                        />
                      </div>
                    </td>
                    <td className="py-5 px-4 md:px-6 align-middle border-r border-black/[0.08] border-b border-black/[0.08]">
                      <div className="w-[120px] h-[100px] flex items-center justify-center mx-auto">
                        <Image
                          src="/assets/toric.png"
                          alt="Toric Lens"
                          width={110}
                          height={90}
                          className="rounded-xl object-contain max-w-full max-h-full"
                        />
                      </div>
                    </td>
                    <td className="py-5 px-4 md:px-6  align-middle border-r border-black/[0.08] border-b border-black/[0.08]">
                      <div className="w-[120px] h-[100px] flex items-center justify-center mx-auto">
                        <Image
                          src="/assets/enhanced-monofocal.png"
                          alt="Enhanced Monofocal Lens"
                          width={110}
                          height={90}
                          className="rounded-xl object-contain max-w-full max-h-full"
                        />
                      </div>
                    </td>
                    <td 
                      className="py-5 px-4 md:px-6  align-middle border-l-2 border-r-2 border-b"
                      style={{ borderLeftColor: '#7ba832', borderRightColor: '#7ba832', borderBottomColor: 'rgba(0, 0, 0, 0.08)' }}
                    >
                      {/* Same fixed container — neutralises any right-bias from trifocal image padding */}
                      <div className="w-[120px] h-[100px] flex items-center justify-center mx-auto">
                        <Image
                          src="/assets/trifocal2.png"
                          alt="Trifocal Lens"
                          width={110}
                          height={90}
                          className="rounded-xl object-contain max-w-full max-h-full"
                        />
                      </div>
                    </td>
                  </tr>
 
                  {/* Data rows */}
                  {treatmentComparison.rows.map((row, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? "bg-gray-50/50" : "bg-white"}
                    >
                      {/* Feature column — left-aligned, bold label */}
                      <td className="py-4 px-4 md:px-6 font-bold text-gray-800 text-sm md:text-base align-middle leading-[1.5] border-r border-black/[0.08] border-b border-black/[0.08]">
                        {row.feature}
                      </td>
 
                      {/* Lens value columns — centered content, uniform dividers */}
                      {[row.mono, row.toric, row.enhancedMono, row.trifocal].map((val, colIdx) => {
                        const isLastCol = colIdx === 3;
                        const isLastRow = idx === treatmentComparison.rows.length - 1;
                        return (
                          <td
                            key={colIdx}
                            className={`py-4 px-4 md:px-6 align-middle leading-[1.5] ${
                              isLastCol
                                ? `border-l-2 border-r-2 border-[#7ba832] ${isLastRow ? "border-b-2 rounded-br-2xl" : "border-b"}`
                                : `border-r border-black/[0.08] ${isLastRow ? "" : "border-b border-black/[0.08]"}`
                            }`}
                            style={isLastCol && isLastRow ? { borderBottomColor: "#7ba832" } : isLastCol && !isLastRow ? { borderBottomColor: "rgba(0,0,0,0.08)" } : undefined}
                          >
                            {/* Icon + text grouped, centered as a unit */}
                            <div className="flex items-center justify-center gap-2">
                              {row.positive.includes(colIdx) ? (
                                <CheckCircle
                                  size={17}
                                  className="text-[#a6c516] flex-shrink-0"
                                />
                              ) : (
                                <span className="w-[17px] flex-shrink-0" />
                              )}
                              <span
                                className={`text-sm text-center md:text-[0.9rem] leading-[1.5] ${
                                  row.positive.includes(colIdx)
                                    ? colIdx === 3
                                      ? "font-bold text-[#5a8a1a]"
                                      : "font-semibold text-gray-800"
                                    : "text-gray-500"
                                }`}
                              >
                                {val}
                              </span>
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-5 flex items-start gap-4 bg-white border-l-4 border-[#3b7dba] rounded-2xl px-6 py-5 shadow-sm">
            <div className="bg-[#3b7dba]/10 p-2 rounded-full flex-shrink-0">
              <Info size={20} className="text-[#3b7dba]" />
            </div>
            <p className="text-sm md:text-base text-[#2c4a6e] font-medium leading-relaxed">
              <span className="font-bold text-[#3b7dba] text-lg block mb-1">A note from the Eye Surgeon:</span>
              {treatmentComparison.doctorNote}
            </p>
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={onOpenModal}
              className="inline-flex items-center gap-2 bg-[#3b7dba] hover:bg-[#2c6396] text-white font-bold px-10 py-4 rounded-full transition-all duration-200 shadow-xl hover:scale-105 text-base"
            >
              Get a Personalised Lens Recommendation <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}
