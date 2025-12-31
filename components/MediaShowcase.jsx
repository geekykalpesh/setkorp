"use client";

import { Badge } from "@/components/ui/badge";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

export default function MediaShowcase() {
  return (
    <section className="py-8 sm:py-10 md:py-12 px-3 sm:px-4 bg-[#fcfcfc] relative overflow-hidden">
      
      <div className="container mx-auto max-w-6xl relative z-10 px-4 sm:px-6 md:px-8">
        <div className="text-center mb-6 sm:mb-8 space-y-3 sm:space-y-4">
          <Badge className="label px-4 py-2 sm:px-6 sm:py-3 bg-[#2a8d8d]/10 text-[#2a8d8d] border-[#2a8d8d]/20 text-xs sm:text-sm">
            OUR PROCESS
          </Badge>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl px-2 sm:px-0">
            From <span className="text-[#ea6a61]">Chaos</span> to <PointerHighlight 
              rectangleClassName="border-[#2a8d8d]"
              pointerClassName="text-[#2a8d8d]"
              containerClassName="inline-block"
            >
              <span className="text-[#2a8d8d]">Clarity</span>
            </PointerHighlight>
          </h2>
          <p className="body-lg max-w-2xl mx-auto text-gray-700 text-sm sm:text-base md:text-lg px-2 sm:px-0">
            We transform complex business challenges into streamlined solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Unsorted Video */}
          <div className="group relative transition-all duration-500">
            <div className="text-center mb-3 sm:mb-4">
              <h3 className="text-[#2b2b2b] mb-2 text-sm sm:text-base md:text-lg">Without <span className="text-[#2a8d8d] font-bold">Setkorp</span></h3>
            </div>
            <video autoPlay loop muted playsInline className="w-full h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-lg">
              <source src="/assets/unsorted.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Center Image */}
          <div className="group relative flex items-center justify-center">
            <img src="/assets/VS-1.webp" alt="VS" className="w-full h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-contain" />
          </div>

          {/* Sorted Video */}
          <div className="group relative transition-all duration-500">
            <div className="text-center mb-3 sm:mb-4">
              <h3 className="text-[#2b2b2b] mb-2 text-sm sm:text-base md:text-lg">With <span className="text-[#ea6a61] font-bold">Setkorp</span></h3>
            </div>
            <video autoPlay loop muted playsInline className="w-full h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-lg">
              <source src="/assets/sorted.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
