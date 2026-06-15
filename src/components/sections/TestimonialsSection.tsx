"use client";

import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { companyData, testimonialsData } from "@/constants/siteData";

const QuoteIcon = () => (
  <svg width="40" height="25" viewBox="0 0 32 24" fill="#a6c516">
    <path d="M0 24V14.4C0 6.08 4.48 1.28 13.44 0l1.28 2.88C11.2 4.16 9.28 7.36 8.96 11.2H14.4V24H0zm17.6 0V14.4C17.6 6.08 22.08 1.28 31.04 0l1.28 2.88C28.8 4.16 26.88 7.36 26.56 11.2H32V24H17.6z" />
  </svg>
);

// Threshold: approx chars that fit in 7 lines at card width
const LONG_QUOTE_THRESHOLD = 300;

export default function TestimonialsSection() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-20 bg-[#f4f7f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#3b7dba] mb-2 leading-tight tracking-tight">
              {testimonialsData.title}
            </h2>
            <div className="flex items-center gap-2">
              <div className="flex text-[#a6c516]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <span className="font-bold text-gray-800">{testimonialsData.googleRating.score}</span>
              <span className="text-gray-500">
                — {testimonialsData.googleRating.location}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full border-2 border-[#3b7dba] text-[#3b7dba] flex items-center justify-center hover:bg-[#3b7dba] hover:text-white transition-colors duration-200"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() => sliderRef.current?.slickNext()}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full border-2 border-[#3b7dba] text-[#3b7dba] flex items-center justify-center hover:bg-[#3b7dba] hover:text-white transition-colors duration-200"
            >
              <ChevronRight size={20} />
            </button>

            <Button as="a" href={companyData.googleReviews} variant="secondary">Review us on Google</Button>
          </div>
        </div>

        {/* Slider */}
        <div className="-mx-6 [&_.slick-track]:flex [&_.slick-track]:items-stretch [&_.slick-slide]:h-auto [&_.slick-slide>div]:h-full pb-10">
          <Slider ref={sliderRef} {...settings}>
            {[...testimonialsData.items, ...testimonialsData.items].map((item, i) => {
              const isLong = item.quote.length > LONG_QUOTE_THRESHOLD;
              return (
                <div key={i} className="px-6 h-full">
                  <div
                    className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-gray-200/40 border border-gray-50 relative flex flex-col h-full hover:border-[#a6c516]/30 transition-all duration-300"
                    style={{ minHeight: "320px" }}
                  >
                    <div className="absolute top-8 right-8 opacity-20">
                      <QuoteIcon />
                    </div>
                    <div className="flex text-[#a6c516] mb-6 gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={16} fill="currentColor" />
                      ))}
                    </div>

                    {/* Quote with hard CSS 7-line clamp */}
                    <div className="mb-3 z-10 relative">
                      <p
                        className="text-gray-700 italic leading-relaxed text-base md:text-lg font-medium"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 7,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        &ldquo;{item.quote}&rdquo;
                      </p>
                      {isLong && (
                        <a
                          href={companyData.googleReviews}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#3b7dba] hover:underline font-semibold text-sm mt-1 inline-block not-italic"
                        >
                          ...read more
                        </a>
                      )}
                    </div>

                    <div className="mt-auto pt-6 border-t border-gray-50">
                      <h4 className="font-bold text-[#3b7dba] text-lg">{item.name}</h4>
                      <p className="text-xs md:text-sm text-[#a6c516] font-bold mt-1 uppercase tracking-wider">
                        {item.tag}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}
