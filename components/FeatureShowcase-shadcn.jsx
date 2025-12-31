"use client";

import { Badge } from "@/components/ui/badge";
import { ShineBorder } from "@/components/ui/shine-border";
import Image from "next/image";
import { useEffect } from "react";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const setKorpFeatures = [
  {
    lordicon: "hsabxdnr",
    title: "Where clarity meets trust",
    desc: "We firmly believe that our inner values are mirrored in our external actions with clarity, integrity, and honesty.",
  },
  {
    lordicon: "qlpudrww",
    title: "Experience forging excellence",
    desc: "Our commitment in service providing is rooted in the values we hold by our specialization.",
  },
  {
    lordicon: "okqjaags",
    title: "Time and cost, Masterfully aligned",
    desc: "We strive to conduct business in a timely and cost-effective way that saves your time.",
  },
  {
    lordicon: "uvofdfal",
    title: "Your trust, Our transparency",
    desc: "Sustainability is built on a foundation of valuable resources and we're your trusted source.",
  },
];

export default function SetKorpShowcase() {
  // Removed manual event listeners to prevent conflict with lord-icon built-in triggers

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center space-y-4">
          <Badge className="label px-6 py-3 bg-[#ea6a61]/10 text-[#ea6a61] border-[#ea6a61]/20">
            SETKORP EXCELLENCE
          </Badge>
          <h2 className="text-center">
            Where challenges find  
            <span className="inline-block w-[200px] text-left ml-2">
              <LayoutTextFlip
                text=""
                words={["answers", "clarity", "excellence", "trust", "innovation"]}
                duration={2000}
              />
            </span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {setKorpFeatures.map(({ icon, lordicon, title, desc }, i) => (
            <div key={i} className="feature-card group relative bg-white/80 backdrop-blur-sm border-2 border-[#e85a4f]/20 hover:border-[#ea6a61] rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <GlowingEffect proximity={120} spread={35} />
              <div className="flex items-start gap-6">
                <div 
                  className="flex-shrink-0 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform"
                  onMouseEnter={(e) => {
                    const icon = e.currentTarget.querySelector('lord-icon');
                    if (icon && icon.playerInstance) {
                      icon.playerInstance.playFromBeginning();
                    }
                  }}
                >
                  {lordicon ? (
                    <lord-icon
                      src={`https://cdn.lordicon.com/${lordicon}.json`}
                      colors="primary:#ee6d66"
                      style={{width: '64px', height: '64px'}}
                      data-lordicon-target={i}>
                    </lord-icon>
                  ) : (
                    <Image src={icon} alt="" width={64} height={64} className="w-full h-full object-contain" unoptimized />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="mb-3 group-hover:text-[#ea6a61] transition-colors">{title}</h3>
                  <p className="body">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
