"use client";

import Image from "next/image";
import { CheckCircle, MapPin, Eye, Heart } from "lucide-react";
import CountUp from "react-countup";
import { companyData, doctorData } from "@/constants/siteData";

const parseStatValue = (val: string) => {
  const match = val.match(/^([\d,]+)(.*)$/);
  if (!match) return { isNumeric: false, raw: val };

  const numStr = match[1].replace(/,/g, "");
  const end = parseInt(numStr, 10);
  if (isNaN(end)) return { isNumeric: false, raw: val };

  const suffix = match[2] || "";
  const separator = match[1].includes(",") ? "," : "";

  return {
    isNumeric: true,
    end,
    suffix,
    separator
  };
};

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "MapPin":
      return <MapPin size={18} />;
    case "Eye":
      return <Eye size={18} />;
    case "Heart":
      return <Heart size={18} />;
    default:
      return <Eye size={18} />;
  }
};

export default function DoctorSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-start mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3b7dba]">
            About the Doctor
          </h2>
        </div>

        {/* Meet Doctor Section */}
        <div className="flex flex-col mid:flex-row gap-8 mb-8 mid:mb-12 items-start mid:items-center">
          
          {/* Left: Meet Doctor Name with Arrow */}
          <div className="w-full mid:w-2/5 flex flex-col items-start md:items-center relative">
            <h4 className="text-4xl mid:text-5xl font-bold text-[#3b7dba] text-left leading-tight">Meet
            <br className="hidden mid:block" />
            <span className="text-[#a6c516]">{companyData.doctorName}</span>
            </h4>
            
            {/* Arrow - Hidden on mobile and tablet, visible only on desktop (992px+) */}
            <div className="hidden mid:block absolute left-[10rem] top-[9rem] mid:left-[10rem] -rotate-12">
              <Image
                src="/assets/arrow.png"
                alt="Arrow pointing down"
                width={100}
                height={100}
                className="opacity-60"
              />
            </div>
          </div>

          {/* Right: Credentials & Specialization Cards - Wider Layout */}
          <div className="w-full mid:w-3/5">
            <div className="flex flex-col mid:grid mid:grid-cols-2 gap-4 mid:gap-6 lg:gap-8">
              
              {/* Credentials Card */}
              <div className="border-l-4 h-[225px] mid:min-h-[265px] border-[#a6c516] bg-[#f9faf7] rounded-lg p-5 mid:p-8 flex flex-col">
                <h4 className="text-[#3b7dba] font-bold text-2xl mid:text-2xl mb-3 mid:mb-4">
                  Credentials
                </h4>
                <div className="relative mt-8 mt-auto flex  flex-wrap gap-3">
                  {doctorData.credentialsBadges.map((badge, i) => {
                    const isLocation = badge === "India" || badge === "London";
                    return (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 mid:gap-2 bg-[#a6c516] text-white rounded-full px-4 py-2 font-bold text-sm md:text-base w-fit"
                      >
                        {isLocation && <MapPin size={14} className="mid:w-4 lg:w-5" />}
                        {badge}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Specialization Card */}
              <div className="border-l-4 h-[225px] mid:min-h-[265px] border-[#a6c516] bg-[#f9faf7] rounded-lg p-5 mid:p-8 flex flex-col">
                <h4 className="text-[#3b7dba] font-bold text-2xl mid:text-2xl mb-3 mid:mb-4">
                  Specialization
                </h4>
                <div className="flex flex-wrap lg:flex-col gap-3 mt-auto">
                  {doctorData.specializationBadges.map((item, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 mid:gap-2 bg-[#a6c516] text-white rounded-full px-4 py-2 font-bold text-sm md:text-base w-fit px-4 py-2 rounded-full text-sm md:text-base font-bold text-white inline-block w-fit"
                    >
                      {getIcon(item.icon)}
                      {item.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image & Bio Section - Aligned with Cards Start */}
        <div className="flex flex-col mid:flex-row items-center gap-4 mid:gap-2 lg:gap-4">

          {/* Arch Image */}
          <div className="w-full mid:w-1/2 relative z-0 flex items-center justify-center mid:justify-end">
            <div className="w-[90%] mid:w-[85%] h-[500px] mid:h-[600px] rounded-t-[300px] overflow-hidden shadow-2xl relative bg-gray-200">
              <Image
                src="/assets/doctor.png"
                alt={`${companyData.doctorName} – Ophthalmologist at ${companyData.name} ${companyData.location}`}
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Overlapping Content Card — Solid brand blue, green accents */}
          <div className="w-full mid:w-[55%] mid:-ml-12 mt-8 mid:mt-0 relative z-10">
            <div className="relative rounded-3xl shadow-2xl overflow-hidden bg-[#3b7dba]">

              {/* Green accent top bar */}
              <div className="h-1.5 w-full bg-[#a6c516]" />

              <div className="p-8 mid:p-10 lg:p-14">

                {/* Title */}
                <h2 className="hidden mid:block text-2xl md:text-3xl font-extrabold text-white mb-4 leading-tight">
                  Meet{" "}
                  <span style={{ color: "#c8e830" }}>{companyData.doctorName}</span>
                </h2>

                {/* Description */}
                <p className="text-[17px] md:text-lg text-white mb-7 font-semibold leading-relaxed">
                  Every eye is different. Every life is different. That&apos;s why{" "}
                  <span className="font-extrabold text-white">Dr. Vaishalli</span>{" "}doesn&apos;t just perform cataract surgery — she{" "}
                  <span style={{ color: "#c8e830" }} className="font-bold">listens first, plans carefully</span>, and chooses the lens that fits how you actually live.{" "}
                  Trained at renowned institutes in India, she got exposed to Global best practices in Eye Surgery at{" "}
                  <span className="font-extrabold text-white">Moorfields Eye Hospital, London</span>, she brings{" "}
                  <span style={{ color: "#c8e830" }} className="font-bold">world-class expertise</span>{" "}to warm, personalised care right here in Aundh.
                </p>

                {/* Credentials */}
                <ul className="space-y-5 md:space-y-3 mb-8">
                  {doctorData.credentials.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: "#c8e830" }}
                      />
                      <span className="text-[16px] md:text-base font-semibold text-white leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="border-t border-[#a6c516]/30 mb-6" />

                {/* Stats */}
                <div className="grid grid-cols-2 gap-y-4 mid:gap-y-6 gap-x-4 mb-6">
                  {doctorData.stats.slice(0, 2).map((stat, i) => {
                    const parsed = parseStatValue(stat.value);
                    return (
                      <div key={i}>
                        <div
                          className="text-2xl mid:text-2xl lg:text-3xl font-black leading-tight"
                          style={{ color: "#c8e830" }}
                        >
                          {parsed.isNumeric ? (
                            <CountUp
                              end={parsed?.end || 0}
                              suffix={parsed?.suffix}
                              separator={parsed?.separator}
                              duration={2.5}
                              enableScrollSpy
                              scrollSpyOnce
                            />
                          ) : (
                            stat.value
                          )}
                        </div>
                        <div className="text-[10px] mid:text-xs lg:text-sm uppercase tracking-wider font-bold text-white/70 mt-1 leading-tight">
                          {stat.label}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Third stat — "Trained at Renowned" */}
                {doctorData.stats.length > 2 && (
                  <>
                    <div className="border-t border-[#a6c516]/25 mb-5" />
                    <div className="flex flex-col mid:flex-row mid:items-center gap-3">
                      <div
                        className="flex items-center gap-2 px-3 mid:px-4 py-1.5 mid:py-2 rounded-full text-xs mid:text-sm font-bold border w-fit"
                        style={{
                          background: "rgba(166,197,22,0.15)",
                          borderColor: "rgba(166,197,22,0.50)",
                          color: "#c8e830",
                        }}
                      >
                        <CheckCircle size={14} className="mid:w-4 lg:w-[15px]" style={{ color: "#c8e830" }} />
                        <span>{doctorData.stats[2].value}</span>
                      </div>
                      <div className="text-[10px] mid:text-xs lg:text-xs uppercase tracking-wider font-bold text-white/65 leading-tight">
                        {doctorData.stats[2].label}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
