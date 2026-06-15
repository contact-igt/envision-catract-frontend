"use client";

import { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const galleryItems = [
  {
    src: "/assets/gallery1.jpeg",
    alt: "Envision Eye Clinic facility",
  },
  {
    src: "/assets/gallery2.jpeg",
    alt: "Patient care at Envision Eye Clinic",
  },
  {
    src: "/assets/gallery3.jpg",
    alt: "Clinic interior at Envision Eye Clinic",
  },
  {
    src: "/assets/gallery4.JPG",
    alt: "Eye care technology at Envision Eye Clinic",
  },
];

export default function GallerySection() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-20 md:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-20 px-4">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-5 tracking-tight text-[#3b7dba]">
            Our Gallery
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-bold">
            Take a glimpse into our state-of-the-art facility and experience
            the care we provide.
          </p>
        </div>

        <div className="-mx-4 md:-mx-5 [&_.slick-list]:overflow-visible [&_.slick-track]:flex [&_.slick-track]:items-stretch [&_.slick-slide]:h-auto [&_.slick-slide>div]:h-full overflow-hidden">
          <Slider ref={sliderRef} {...settings}>
            {galleryItems.map((item) => (
              <div key={item.src} className="px-4 md:px-5 h-full">
                <div className="relative h-[300px] lg:h-[300px] overflow-hidden rounded-[1.65rem] bg-white">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) calc(100vw - 32px), (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
