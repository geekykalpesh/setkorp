"use client";

import { Badge } from "@/components/ui/badge"
import { PointerHighlight } from "@/components/ui/pointer-highlight"
import { useEffect } from "react"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { GlowingEffect } from "@/components/ui/glowing-effect"

const industries = [
  { name: "Holding Companies", icon: "lordicon-holding", desc: "Strategic corporate structures for business growth" },
  { name: "Trading Companies", icon: "lordicon-trading", desc: "Global market solutions and trading excellence" },
  { name: "Media & Marketing", icon: "lordicon-media", desc: "Creative brand strategies and digital presence" },
  { name: "Project Management", icon: "lordicon", desc: "Efficient execution and delivery solutions" },
  { name: "Energy Companies", icon: "lordicon-energy", desc: "Sustainable power solutions for the future" },
  { name: "Consulting Firms", icon: "lordicon-consulting", desc: "Expert guidance and strategic advice" },
  { name: "Software & Technology", icon: "lordicon-software", desc: "Digital innovation and tech solutions" },
  { name: "Event Management", icon: "lordicon-event", desc: "Memorable experiences and flawless execution" }
];

export default function WelcomeSection() {
  // Removed manual event listeners to prevent conflict with lord-icon built-in triggers

  return (
    <section className="relative py-8 sm:py-10 md:py-12 px-3 sm:px-4 bg-[#ea6a61]/5 overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-[#ea6a61]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-[#2a8d8d]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-6 sm:mb-8 space-y-3 sm:space-y-4">
          <Badge className="label px-4 py-2 sm:px-6 sm:py-3 bg-[#ea6a61] text-white border-0 text-xs sm:text-sm">
            Welcome to Setkorp
          </Badge>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl px-2 sm:px-0">
            Your gateway to <span className="text-[#ea6a61]">seamless business</span><br className="hidden sm:block" /> <span className="inline-flex items-center gap-1 sm:gap-2">setup in <PointerHighlight rectangleClassName="border-[#ea6a61]" pointerClassName="text-[#ea6a61]"><span className="text-[#ea6a61]">Dubai</span></PointerHighlight></span>
          </h2>
          <TextGenerateEffect 
            words="We specialize in providing expert assistance across multiple industries, helping businesses establish and thrive in Dubai's dynamic market"
            className="caption max-w-3xl mx-auto font-normal"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {industries.map((industry, index) => (
            <div key={index} className="group relative text-center p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 hover:bg-white/90 hover:shadow-xl hover:border-[#ea6a61]/30 transition-all cursor-pointer" data-lordicon-target>
              <GlowingEffect proximity={100} spread={30} />
              <div 
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 transition-all"
                onMouseEnter={(e) => {
                  const icon = e.currentTarget.querySelector('lord-icon');
                  if (icon && icon.playerInstance) {
                    icon.playerInstance.playFromBeginning();
                  }
                }}
              >
                {industry.icon === "lordicon-holding" ? (
                  <lord-icon
                    src="https://cdn.lordicon.com/lrzdmsmx.json"
                    colors="primary:#ec736b"
                    style={{width: '80px', height: '80px'}}>
                  </lord-icon>
                ) : industry.icon === "lordicon" ? (
                  <lord-icon
                    src="https://cdn.lordicon.com/asyunleq.json"
                    colors="primary:#ec736b"
                    style={{width: '80px', height: '80px'}}>
                  </lord-icon>
                ) : industry.icon === "lordicon-energy" ? (
                  <lord-icon
                    src="https://cdn.lordicon.com/apgkpdeb.json"
                    colors="primary:#ec736b"
                    style={{width: '80px', height: '80px'}}>
                  </lord-icon>
                ) : industry.icon === "lordicon-event" ? (
                  <lord-icon
                    src="https://cdn.lordicon.com/uoljexdg.json"
                    colors="primary:#ec736b"
                    style={{width: '80px', height: '80px'}}>
                  </lord-icon>
                ) : industry.icon === "lordicon-software" ? (
                  <lord-icon
                    src="https://cdn.lordicon.com/lrubprlz.json"
                    colors="primary:#ec736b"
                    style={{width: '80px', height: '80px'}}>
                  </lord-icon>
                ) : industry.icon === "lordicon-trading" ? (
                  <lord-icon
                    src="https://cdn.lordicon.com/excswhey.json"
                    colors="primary:#ec736b"
                    style={{width: '80px', height: '80px'}}>
                  </lord-icon>
                ) : industry.icon === "lordicon-media" ? (
                  <lord-icon
                    src="https://cdn.lordicon.com/zczzhvwa.json"
                    colors="primary:#ec736b"
                    style={{width: '80px', height: '80px'}}>
                  </lord-icon>
                ) : industry.icon === "lordicon-consulting" ? (
                  <lord-icon
                    src="https://cdn.lordicon.com/yraqammt.json"
                    colors="primary:#ec736b"
                    style={{width: '80px', height: '80px'}}>
                  </lord-icon>
                ) : (
                  <img src={industry.icon} alt={industry.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
                )}
              </div>
              <h4 className="mb-1 sm:mb-2 group-hover:text-[#ea6a61] transition-colors text-xs sm:text-sm md:text-base">{industry.name}</h4>
              <p className="caption text-xs sm:text-sm">{industry.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
