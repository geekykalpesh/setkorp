"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export const StickyScroll = ({
  content,
  contentClassName
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  const linearGradients = [
    "linear-gradient(to bottom right, #ea6a61, #2a8d8d)",
    "linear-gradient(to bottom right, #2a8d8d, #cc9653)",
    "linear-gradient(to bottom right, #cc9653, #ea6a61)",
    "linear-gradient(to bottom right, #ea6a61, #cc9653)",
    "linear-gradient(to bottom right, #2a8d8d, #ea6a61)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <section className="py-20 bg-[#ea6a61]/5">
      <div className="max-w-7xl mx-auto text-center mb-12 px-4">
        <Badge className="mb-4 px-4 py-2 bg-[#ea6a61] text-white border-0">
          OUR SERVICES
        </Badge>
        <h2 className="text-4xl md:text-5xl font-black text-[#2b2b2b] mb-4">
          Services Beyond Expectations
        </h2>
        <p className="text-lg text-[#2b2b2b] max-w-3xl mx-auto">
          Transform your business needs into accomplished goals with our comprehensive services
        </p>
      </div>
      <motion.div
        className="relative flex h-[35rem] justify-center space-x-10 overflow-y-auto rounded-3xl p-10 mx-4 bg-white/95 backdrop-blur-sm shadow-xl"
        ref={ref}>
        <div className="div relative flex items-start px-4">
          <div className="max-w-2xl">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-20">
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-3xl font-black text-[#2b2b2b]">
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-base mt-6 max-w-lg text-[#2b2b2b] leading-relaxed">
                  {item.description}
                </motion.p>
                {item.steps && (
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: activeCard === index ? 1 : 0.3,
                    }}
                    className="mt-6">
                    <p className="text-sm font-bold text-[#ea6a61] mb-3">Easy 3 steps:</p>
                    <div className="space-y-3">
                      {item.steps.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ea6a61] text-white flex items-center justify-center text-xs font-bold">{idx + 1}</span>
                          <p className="text-sm text-[#2b2b2b] leading-relaxed">{step}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>
        <div
          style={{ background: backgroundGradient }}
          className={cn(
            "sticky top-10 hidden h-80 w-96 overflow-hidden rounded-2xl shadow-2xl lg:flex items-center justify-center",
            contentClassName
          )}>
          {content[activeCard].content ?? null}
        </div>
      </motion.div>
    </section>
  );
};
