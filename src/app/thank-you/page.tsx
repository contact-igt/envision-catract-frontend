"use client";

import { useEffect, useState } from "react";
import {
  CheckCircle,
  Phone,
  Clock,
  MapPin,
  Star,
  ArrowRight,
  Instagram,
  Play,
} from "lucide-react";
import { companyData } from "@/constants/siteData";
import Header from "@/components/layout/Header";
import MobileStickyBar from "@/components/layout/MobileStickyBar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

const NEXT_STEPS = [
  {
    icon: <Phone size={22} className="text-[#3b7dba]" />,
    title: "We'll Call You Soon",
    desc: "Our team will reach out within 30 minutes to confirm your evaluation slot.",
  },
  {
    icon: <Clock size={22} className="text-[#3b7dba]" />,
    title: "Keep Your Schedule Ready",
    desc: "The LASIK evaluation typically takes 60–90 minutes. Plan your visit accordingly.",
  },
  {
    icon: <MapPin size={22} className="text-[#3b7dba]" />,
    title: "Know Where to Come",
    desc: "2nd Floor, Shivraj Apartments, near Parihar Chowk, Aundh, Pune — 411007.",
  },
];

const REVIEWS = [
  {
    name: "Geet Kelkar",
    stars: 5,
    quote:
      "Just within a week after surgery, I now have my entire vision back after 12 years of wearing spectacles (−5.5) in both eyes. Dr Vaishali guided me accurately throughout!",
  },
  {
    name: "Satisfied Patient",
    stars: 5,
    quote:
      "From expert consultation to friendly support, every step was handled with care and clarity. Absolutely recommend Envision Eye Clinic.",
  },
];

export default function ThankYouPage() {
  const [visible, setVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#fcfbf9] font-sans pb-20 md:pb-0">
      <MobileStickyBar onBookClick={() => { }} />
      {/* ── TOP ANNOUNCEMENT BAR ── */}
      {/* <div className="bg-[#a6c516] text-white text-center py-2 text-xs md:text-sm font-bold tracking-wide uppercase fixed top-0 w-full z-[60]">
        Healthy Eyes, One blink at A Time.
      </div> */}

      {/* ── UNIFIED HEADER ── */}
      <Header showBookButton={false} />

      {/* Spacer for fixed navbar */}
      <div className="h-28 md:h-36" />

      {/* ── HERO CONFIRMATION ── */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          {/* Animated checkmark */}
          <div
            className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#a6c516]/10 mb-6 transition-all duration-700 ${visible ? "scale-100 opacity-100" : "scale-50 opacity-0"
              }`}
          >
            <CheckCircle size={44} className="text-[#a6c516]" />
          </div>

          <h1
            className={`text-3xl md:text-5xl font-extrabold text-[#3b7dba] mb-4 leading-tight transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            Your Request is Confirmed!
          </h1>

          <p
            className={`text-lg text-gray-600 font-medium mb-8 leading-relaxed transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            Thank you for reaching out to{" "}
            <span className="text-[#3b7dba] font-bold">Envision Eye Clinic</span>.
            Our team will call you within{" "}
            <span className="text-[#a6c516] font-bold">30 minutes</span> to
            confirm your appointment.
          </p>

          {/* Quick action buttons */}
          <div
            className={`flex flex-wrap justify-center gap-4 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <a
              href={companyData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-black px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 text-sm"
            >
              <Instagram size={18} /> Chat on WhatsApp
            </a>
            <a
              href={`tel:${companyData.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-[#3b7dba] hover:bg-[#2c6396] text-white font-black px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 text-sm"
            >
              <Phone size={16} /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ── SPLIT SECTION: NEXT STEPS & PATIENT STORIES ── */}
      <section className="py-16 px-4 bg-[#f6f8f3]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left Column: What Happens Next */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#3b7dba] mb-4">
                  What Happens Next?
                </h2>
                <p className="text-gray-500 font-medium text-lg">
                  We&apos;ve received your request. Here is how we&apos;ll proceed with your evaluation.
                </p>
              </div>

              <div className="space-y-5">
                {NEXT_STEPS.map((step, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex gap-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 bg-[#3b7dba]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      {step.icon}
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="font-extrabold text-gray-800 text-lg mb-1">{step.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Follow on Instagram */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-[#a6c516]/10 px-4 py-1.5 rounded-full text-sm font-extrabold text-[#3b7dba] mb-4">
                  <Instagram size={14} /> @envisioneyeclinicpune
                </div>
                <h2 className="text-3xl font-extrabold text-gray-800 mb-3">
                  Follow on Instagram
                </h2>
                <p className="text-gray-500 font-medium">
                  Stay updated with eye care tips and real patient journeys.
                </p>
              </div>

              <div className="relative mx-auto lg:mx-0 max-w-[400px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
                {/* Decorative border */}
                <div className="h-1.5 bg-gradient-to-r from-[#3b7dba] to-[#a6c516]" />

                <div className="relative aspect-[4/5] bg-gray-100 flex flex-col items-center justify-center overflow-hidden">
                  {!isPlaying ? (
                    <>
                      {/* Instagram Feed Image */}
                      <Image
                        src="/assets/thankyou_video.jpg"
                        alt="Envision Eye Clinic Instagram Feed"
                        width={400}
                        height={500}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Overlay with Play Icon */}
                      <div
                        className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center cursor-pointer"
                        onClick={() => setIsPlaying(true)}
                      >
                        <div className="w-20 h-20 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:scale-110 border border-white/50">
                          <Play size={40} className="text-white fill-white ml-1" />
                        </div>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-20 pointer-events-none">
                        <p className="text-white font-bold text-lg">Click to Play Patient Story</p>
                        <p className="text-white/70 text-sm">@envisioneyeclinicpune</p>
                      </div>
                    </>
                  ) : (
                    <video
                      src="/assets/video.mp4"
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                    />
                  )}
                </div>
              </div>

              <div className="text-center lg:text-left">
                <a
                  href={companyData.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#3b7dba] font-bold hover:underline group"
                >
                  Visit our Instagram <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF / REVIEWS ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="font-black text-gray-800">4.9 / 5.0 on Google Reviews</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 text-center mb-10">
            Trusted by Patients Across Pune
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS.map((r, i) => (
              <div
                key={i}
                className="bg-[#fcfbf9] rounded-2xl p-7 border border-gray-100 hover:shadow-md transition-shadow relative"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(r.stars)].map((_, j) => (
                    <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 text-base leading-relaxed">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <p className="font-black text-gray-800 text-sm">— {r.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href={companyData.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#3b7dba] font-black hover:underline text-sm uppercase tracking-wider"
            >
              View More Reviews <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Sticky WhatsApp Button */}
      <a
        href="https://wa.me/919272222256"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-24 right-5 md:bottom-8 md:right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-lg"
      >
        <svg viewBox="0 0 24 24" width="30" height="30" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.14 1.535 5.874L.057 23.885a.5.5 0 0 0 .606.606l6.115-1.476A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.944 9.944 0 0 1-5.116-1.41l-.368-.217-3.812.921.954-3.727-.237-.385A9.946 9.946 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
      </a>

      {/* Instagram embed script */}
      <script async src="//www.instagram.com/embed.js" />
    </div>
  );
}
