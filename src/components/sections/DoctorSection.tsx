"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";

import { companyData, doctorData } from "@/constants/siteData";

export default function DoctorSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3b7dba] mb-3">
            About the Doctor
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-3 leading-relaxed">
            Meet {companyData.doctorName} — London-trained ophthalmologist with over a decade of experience
            in advanced cataract surgery, LASIK, and personalised eye care.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center">

          {/* Arch Image */}
          <div className="w-full md:w-1/2 relative z-0 flex justify-center md:justify-end">
            <div className="w-[90%] md:w-[85%] h-[500px] md:h-[600px] rounded-t-[300px] overflow-hidden shadow-2xl relative bg-gray-200">
              <Image
                src="/assets/doctor.png"
                alt={`${companyData.doctorName} – Ophthalmologist at ${companyData.name} ${companyData.location}`}
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Overlapping Content Box */}
          <div className="w-full md:w-[55%] md:-ml-12 mt-8 md:mt-0 relative z-10">
            <div className="bg-[#3b7dba] p-10 md:p-14 rounded-3xl shadow-xl text-white">
              <h2 className="text-3xl md:text-3xl font-extrabold mb-4 leading-tight">
                {doctorData.title}
              </h2>
              <p className="text-md md:text-base mb-6 font-medium leading-relaxed opacity-95">
                {doctorData.description}
              </p>

              <ul className="space-y-3 mb-8 text-white/90">
                {doctorData.credentials.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className="mt-1 text-white flex-shrink-0"
                    />
                    <span className="font-semibold text-md md:text-base leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-2 gap-y-6 gap-x-4 pt-6 border-t border-white/20">
                {doctorData.stats.slice(0, 2).map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl md:text-3xl font-black leading-tight">{stat.value}</div>
                    <div className="text-xs md:text-sm uppercase tracking-wider font-bold opacity-90 mt-1.5 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {doctorData.stats.length > 2 && (
                <div className="mt-6 pt-5 border-t border-white/20 flex items-center gap-3.5">
                  <CheckCircle size={28} className="text-white flex-shrink-0" />
                  <div>
                    <div className="text-lg md:text-xl font-black leading-tight">{doctorData.stats[2].value}</div>
                    <div className="text-xs md:text-sm uppercase tracking-wider font-bold opacity-90 mt-1 leading-tight">
                      {doctorData.stats[2].label}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
