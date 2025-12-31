'use client'

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const logoImages = [
  "/assets/carousel-logos/juggernot-1-300x300.jpg",
  "/assets/carousel-logos/MFZ-logo-01-1536x1086-1-300x212.webp",
  "/assets/carousel-logos/Noor-Ride-Transparent-01-300x225.png",
  "/assets/carousel-logos/SAAL-Consulting-details.jpeg-150x150.jpg",
  "/assets/carousel-logos/WhatsApp_Image_2023-12-27_at_12.56.51_e9e64087-removebg-preview-300x78.png",
  "/assets/carousel-logos/2.webp",
  "/assets/carousel-logos/3.webp",
  "/assets/carousel-logos/4.webp",
  "/assets/carousel-logos/6.webp"
];

const animation = { duration: 30000, easing: (t) => t };

export default function PartnerCarousel() {
  const [ref] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: { perView: 5, spacing: 20 },
    breakpoints: {
      "(max-width: 1024px)": { slides: { perView: 4, spacing: 16 } },
      "(max-width: 768px)": { slides: { perView: 3, spacing: 12 } },
      "(max-width: 640px)": { slides: { perView: 2, spacing: 8 } },
      "(max-width: 480px)": { slides: { perView: 1.5, spacing: 6 } },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <section className="relative py-12 bg-[#ea6a61]/5 overflow-hidden w-full">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      
      <div className="container mx-auto max-w-6xl text-center mb-8 px-4 sm:px-6 md:px-4 relative z-10">
        <TypewriterEffect
          words={[
            { text: "Brands ", className: "text-gray-900" },
            { text: "That ", className: "text-gray-900" },
            { text: "Trust ", className: "text-[#ea6a61]" },
            { text: "Us ", className: "text-gray-900" }
          ]}
          className="text-2xl sm:text-3xl md:text-4xl font-black"
          cursorClassName="bg-[#ea6a61]"
        />
      </div>
      
      <div className="overflow-hidden container mx-auto max-w-6xl px-2 sm:px-4 md:px-0 relative z-10">
        <div ref={ref} className="keen-slider px-2 sm:px-4">
        {logoImages.map((src, idx) => (
          <div
            key={idx}
            className="keen-slider__slide flex items-center justify-center py-4 sm:py-6 md:py-8"
          >
            <img
              src={src}
              alt={`Brand logo ${idx + 1}`}
              className="max-h-12 sm:max-h-16 md:max-h-20 w-auto object-contain hover:scale-110 transition-all duration-500 filter drop-shadow-lg"
            />
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
