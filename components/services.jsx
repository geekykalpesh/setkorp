"use client";

import React, {
  forwardRef,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { motion, useInView } from "motion/react";
import { Cover } from "@/components/ui/cover";

// CSS for animations - add this to your global CSS or component
const animationStyles = `
  @keyframes slide-down {
    from {
      height: 0;
    }
    to {
      height: var(--radix-accordion-content-height);
    }
  }
  
  @keyframes slide-up {
    from {
      height: var(--radix-accordion-content-height);
    }
    to {
      height: 0;
    }
  }
  
  .animate-slide-down {
    animation: slide-down 0.2s ease-out;
  }
  
  .animate-slide-up {
    animation: slide-up 0.2s ease-out;
  }
`;

// Utility function for class names
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Section Header Component
function SectionHeader({ children }) {
  return (
    <div className="border-b w-full h-full p-10 md:p-14">
      <div className="max-w-xl mx-auto flex flex-col items-center justify-center gap-2">
        {children}
      </div>
    </div>
  );
}

// Accordion Components
const AccordionItem = forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={cn(
        "mt-px overflow-hidden focus-within:relative focus-within:z-10",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
);
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={cn(
          "group flex h-[45px] flex-1 cursor-pointer items-center justify-between px-4 py-3 text-[15px] leading-none outline-none",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </Accordion.Trigger>
    </Accordion.Header>
  )
);
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={cn(
        "overflow-hidden text-[15px] font-medium data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="px-4 pb-4">{children}</div>
    </Accordion.Content>
  )
);
AccordionContent.displayName = "AccordionContent";

// Feature Slideshow Component
const Feature = ({
  collapseDelay = 5000,
  ltr = false,
  linePosition = "left",
  lineColor = "bg-neutral-500 dark:bg-white",
  featureItems,
}) => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [previousIndex, setPreviousIndex] = useState(-1);
  const iconRefs = useRef([]);

  // Add useEffect for icon animations like welcome section
  useEffect(() => {
    const accordionItems = document.querySelectorAll("[data-lordicon-target]");
    accordionItems.forEach((item) => {
      const icon = item.querySelector("lord-icon");
      if (icon) {
        item.addEventListener("mouseenter", () => {
          icon.playerInstance?.playFromBeginning();
        });
      }
    });
  }, []);

  const carouselRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isInView) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(-1);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [isInView]);

  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      const card = carouselRef.current.querySelectorAll(".card")[index];
      if (card) {
        const cardRect = card.getBoundingClientRect();
        const carouselRect = carouselRef.current.getBoundingClientRect();
        const offset =
          cardRect.left -
          carouselRect.left -
          (carouselRect.width - cardRect.width) / 2;

        carouselRef.current.scrollTo({
          left: carouselRef.current.scrollLeft + offset,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex !== undefined ? (prevIndex + 1) % featureItems.length : 0
      );
    }, collapseDelay);

    return () => clearInterval(timer);
  }, [collapseDelay, currentIndex, featureItems.length]);

  useEffect(() => {
    const handleAutoScroll = () => {
      const nextIndex =
        (currentIndex !== undefined ? currentIndex + 1 : 0) %
        featureItems.length;
      scrollToIndex(nextIndex);
    };

    const autoScrollTimer = setInterval(handleAutoScroll, collapseDelay);

    return () => clearInterval(autoScrollTimer);
  }, [collapseDelay, currentIndex, featureItems.length]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      const handleScroll = () => {
        const scrollLeft = carousel.scrollLeft;
        const cardWidth = carousel.querySelector(".card")?.clientWidth || 0;
        const newIndex = Math.min(
          Math.floor(scrollLeft / cardWidth),
          featureItems.length - 1
        );
        setCurrentIndex(newIndex);
      };

      carousel.addEventListener("scroll", handleScroll);
      return () => carousel.removeEventListener("scroll", handleScroll);
    }
  }, [featureItems.length]);

  useEffect(() => {
    if (currentIndex !== previousIndex) {
      setImageLoaded(false);
      setPreviousIndex(currentIndex);
      // Animate icon when accordion changes
      if (currentIndex >= 0 && iconRefs.current[currentIndex]) {
        setTimeout(() => {
          iconRefs.current[currentIndex]?.playerInstance?.play();
        }, 100);
      }
    }
  }, [currentIndex, previousIndex]);

  const renderMedia = () => {
    const currentItem = featureItems[currentIndex];

    if (!currentItem) {
      return (
        <div className="aspect-auto h-full w-full rounded-2xl bg-gradient-to-br from-white to-gray-50/50 p-2 shadow-xl shadow-[#ea6a61]/10 border-2 border-[#ea6a61]/20">
        <div className="h-full w-full rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse" />
      </div>
      );
    }

    if (currentItem.image) {
      return (
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50/50 p-2 shadow-xl shadow-[#ea6a61]/10 border-2 border-[#ea6a61]/20">
          <div
            className={cn(
              "absolute inset-2 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl",
              "transition-all duration-300",
              imageLoaded ? "opacity-0" : "opacity-100"
            )}
          />

          <motion.img
            key={currentIndex}
            src={currentItem.image}
            alt={currentItem.title}
            className={cn(
              "aspect-auto h-full w-full rounded-xl object-cover shadow-lg",
              "transition-all duration-500",
              imageLoaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-xl scale-105"
            )}
            initial={{
              opacity: 0,
              filter: "blur(5px)",
            }}
            animate={{
              opacity: imageLoaded ? 1 : 0,
              filter: imageLoaded ? "blur(0px)" : "blur(5px)",
            }}
            transition={{
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1],
            }}
            onLoad={() => setImageLoaded(true)}
            loading="eager"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      );
    }

    if (currentItem.video) {
      return (
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50/50 p-2 shadow-xl shadow-[#ea6a61]/10 border-2 border-[#ea6a61]/20">
          <video
            preload="auto"
            src={currentItem.video}
            className="aspect-auto h-full w-full rounded-xl object-cover shadow-lg"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      );
    }

    return (
      <div className="aspect-auto h-full w-full rounded-2xl bg-gradient-to-br from-white to-gray-50/50 p-2 shadow-xl shadow-[#ea6a61]/10 border-2 border-[#ea6a61]/20">
        <div className="h-full w-full rounded-xl bg-gradient-to-br from-gray-100 to-gray-200" />
      </div>
    );
  };

  return (
    <div ref={ref} className="w-full">
      <div className="flex w-full flex-col items-center justify-center px-[20px]">
        <div className="grid h-full grid-cols-6 gap-x-10 items-center w-full">
          <div
            className={`col-span-3 w-full h-full hidden lg:flex md:items-center ${
              ltr ? "md:order-2 md:justify-end" : "justify-start"
            }`}
          >
            <Accordion.Root
              className="w-full h-full flex flex-col gap-8"
              type="single"
              defaultValue={`item-${currentIndex}`}
              value={`item-${currentIndex}`}
              onValueChange={(value) =>
                setCurrentIndex(Number(value.split("-")[1]))
              }
            >
              {featureItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl border-2 transition-all duration-300 ease-out",
                    "bg-gradient-to-br from-white to-gray-50/50",
                    "border-[#ea6a61]/20",
                    "shadow-sm hover:shadow-md hover:shadow-[#ea6a61]/5",
                    "hover:border-[#ea6a61]/40 hover:scale-[1.02]",
                    "data-[state=open]:bg-gradient-to-br data-[state=open]:from-[#ea6a61]/5 data-[state=open]:to-[#e85a4f]/5",
                    "data-[state=open]:border-[#ea6a61]/60 data-[state=open]:shadow-lg data-[state=open]:shadow-[#ea6a61]/8",
                    "data-[state=open]:scale-[1.03]",
                    "text-gray-700 data-[state=open]:text-[#ea6a61]"
                  )}
                  value={`item-${index}`}
                  data-lordicon-target
                >
                  <div
                    className={cn(
                      "absolute overflow-hidden rounded-lg transition-opacity",
                      "data-[state=closed]:opacity-0 data-[state=open]:opacity-100",
                      "bg-neutral-300/50 dark:bg-neutral-300/30",
                      {
                        "bottom-0 top-0 h-full w-0.5 left-0":
                          linePosition === "left",
                        "bottom-0 top-0 h-full w-0.5 right-0":
                          linePosition === "right",
                        "left-0 right-0 top-0 h-0.5 w-full":
                          linePosition === "top",
                        "left-0 right-0 bottom-0 h-0.5 w-full":
                          linePosition === "bottom",
                      }
                    )}
                    data-state={currentIndex === index ? "open" : "closed"}
                  >
                    <div
                      className={cn(
                        "absolute transition-all ease-linear",
                        lineColor,
                        {
                          "left-0 top-0 w-full": ["left", "right"].includes(
                            linePosition
                          ),
                          "left-0 top-0 h-full": ["top", "bottom"].includes(
                            linePosition
                          ),
                        },
                        currentIndex === index
                          ? ["left", "right"].includes(linePosition)
                            ? "h-full"
                            : "w-full"
                          : ["left", "right"].includes(linePosition)
                          ? "h-0"
                          : "w-0"
                      )}
                      style={{
                        transitionDuration:
                          currentIndex === index ? `${collapseDelay}ms` : "0s",
                      }}
                    />
                  </div>
                  <AccordionTrigger className="text-left flex items-center justify-between cursor-pointer">
                    <h3 className="font-bold text-lg tracking-tight">{item.title}</h3>
                    <lord-icon
                      ref={(el) => {
                        if (el) iconRefs.current[index] = el;
                      }}
                      src="https://cdn.lordicon.com/yhtmwrae.json"
                      trigger="morph"
                      colors="primary:#ee6d66"
                      style={{ width: "24px", height: "24px" }}
                    ></lord-icon>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm font-medium">
                    <div className="space-y-3">
                      {item.content.split('\n\n').map((section, idx) => {
                        if (section.startsWith('✓')) {
                          return (
                            <div key={idx} className="space-y-2">
                              {section.split('\n').map((line, lineIdx) => (
                                <motion.div 
                                  key={lineIdx} 
                                  className="flex items-center gap-3 group whitespace-nowrap"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: lineIdx * 0.2, duration: 0.5 }}
                                >
                                  <motion.span 
                                    className="text-xs font-semibold text-[#ea6a61] bg-[#ea6a61]/10 px-2 py-1 rounded-full flex-shrink-0 min-w-[24px] h-6 flex items-center justify-center"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: lineIdx * 0.2 + 0.1, duration: 0.4 }}
                                  >
                                    {lineIdx + 1}
                                  </motion.span>
                                  <motion.span 
                                    className="text-gray-800 group-hover:text-[#ea6a61] transition-colors duration-200 font-semibold"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: lineIdx * 0.2 + 0.4, duration: 0.4 }}
                                  >
                                    {line.replace('✓ ', '')}
                                  </motion.span>
                                </motion.div>
                              ))}
                            </div>
                          );
                        } else {
                          return (
                            <p key={idx} className="text-gray-700 leading-relaxed font-semibold text-base">
                              {section}
                            </p>
                          );
                        }
                      })}
                    </div>
                  </AccordionContent>
                  {/* Progress Bar */}
                  <div className="services-progress-timer">
                    <div
                      className={`services-progress-fill ${
                        currentIndex === index ? "active" : ""
                      }`}
                      style={{
                        transitionDuration:
                          currentIndex === index ? `${collapseDelay}ms` : "0s",
                      }}
                    />
                  </div>
                </AccordionItem>
              ))}
            </Accordion.Root>
          </div>
          <div
            className={`col-span-6 h-[350px] min-h-[200px] w-auto lg:col-span-3 ${
              ltr && "md:order-1"
            }`}
          >
            {renderMedia()}
          </div>

          <ul
            ref={carouselRef}
            className="col-span-6 flex snap-x flex-nowrap overflow-x-auto [-ms-overflow-style:none] [-webkit-mask-image:linear-gradient(90deg,transparent,black_10%,white_90%,transparent)] [mask-image:linear-gradient(90deg,transparent,black_10%,white_90%,transparent)] [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden snap-mandatory"
            style={{
              padding: "50px calc(50% - 8px)",
              gap: "32px",
            }}
          >
            {featureItems.map((item, index) => (
              <a
                key={item.id}
                className={cn(
                  "card relative grid h-full max-w-64 shrink-0 items-start justify-center p-3 pb-0 border-2 rounded-2xl overflow-hidden transition-all duration-300 ease-out",
                  "bg-gradient-to-br from-white to-gray-50/50",
                  "shadow-sm hover:shadow-md hover:shadow-[#ea6a61]/5",
                  "hover:scale-[1.02]",
                  currentIndex === index
                    ? "bg-gradient-to-br from-[#ea6a61]/5 to-[#e85a4f]/5 border-[#ea6a61]/60 shadow-lg shadow-[#ea6a61]/8 text-[#ea6a61] scale-[1.03]"
                    : "border-[#ea6a61]/20 hover:border-[#ea6a61]/40 text-gray-700"
                )}
                onClick={() => setCurrentIndex(index)}
                style={{
                  scrollSnapAlign: "center",
                }}
              >
                <div
                  className={cn(
                    "absolute overflow-hidden rounded-lg transition-opacity",
                    "data-[state=closed]:opacity-0 data-[state=open]:opacity-100",
                    "bg-neutral-300/50 dark:bg-neutral-300/30",
                    {
                      "bottom-0 top-0 h-full w-0.5 left-0":
                        linePosition === "left",
                      "bottom-0 top-0 h-full w-0.5 right-0":
                        linePosition === "right",
                      "left-0 right-0 top-0 h-0.5 w-full":
                        linePosition === "top",
                      "left-0 right-0 bottom-0 h-0.5 w-full":
                        linePosition === "bottom",
                    }
                  )}
                  data-state={currentIndex === index ? "open" : "closed"}
                >
                  <div
                    className={cn(
                      "absolute transition-all ease-linear",
                      lineColor,
                      {
                        "left-0 top-0 w-full": ["left", "right"].includes(
                          linePosition
                        ),
                        "left-0 top-0 h-full": ["top", "bottom"].includes(
                          linePosition
                        ),
                      },
                      currentIndex === index
                        ? ["left", "right"].includes(linePosition)
                          ? "h-full"
                          : "w-full"
                        : ["left", "right"].includes(linePosition)
                        ? "h-0"
                        : "w-0"
                    )}
                    style={{
                      transitionDuration:
                        currentIndex === index ? `${collapseDelay}ms` : "0s",
                    }}
                  />
                </div>
                <div className="flex flex-col gap-2 pb-3">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold">{item.title}</h2>
                    <lord-icon
                      src="https://cdn.lordicon.com/yhtmwrae.json"
                      trigger="hover"
                      colors="primary:#ee6d66"
                      style={{ width: "60px", height: "60px" }}
                    ></lord-icon>
                  </div>
                  <div
                    className="mx-0 max-w-sm text-balance text-sm font-medium leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: item.content.replace(/\n/g, "<br>"),
                    }}
                  />
                </div>
                {/* Progress Bar */}
                <div className="services-progress-timer">
                  <div
                    className={`services-progress-fill ${
                      currentIndex === index ? "active" : ""
                    }`}
                    style={{
                      transitionDuration:
                        currentIndex === index ? `${collapseDelay}ms` : "0s",
                    }}
                  />
                </div>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Services Section Configuration
const servicesConfig = {
  title: "Services beyond expectations",
  description:
    "Transform your business needs into accomplished goals with our comprehensive services. Stand out in Dubai's dynamic market with expert solutions tailored for your success.",
  items: [
    {
      id: 1,
      title: "Seamless Business Setup",
      content:
        "We specialize in incorporating businesses seamlessly in UAE.\n\n✓ Choose business type & license\n✓ Complete legal paperwork\n✓ Get registered & start operating",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      id: 2,
      title: "Corporate Banking Solutions",
      content:
        "Expert corporate banking services in Dubai.\n\n✓ Select the best bank\n✓ Prepare required documents\n✓ Open corporate account quickly",
      image:
        "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      id: 3,
      title: "Real Estate Solutions",
      content:
        "Find ideal properties for personal or corporate use in UAE.\n\n✓ Define property requirements\n✓ Visit curated property options\n✓ Complete transaction & finalize",
      image:
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      id: 4,
      title: "Expert Accounting Services",
      content:
        "Professional financial management for your business.\n\n✓ Setup financial plan\n✓ Track expenses & revenues\n✓ Ensure VAT & audit compliance",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
  ],
};

// Main Services Section Component
export function ServicesSection() {
  const { title, description, items } = servicesConfig;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
      <section id="services" className="w-full pb-16 bg-[#ea6a61]/5">
        <div className="text-center mb-8 space-y-4 p-10 md:p-14">
          <motion.div
            className="inline-block label px-6 py-3 bg-[#ea6a61]/10 text-[#ea6a61] border-[#ea6a61]/20 border rounded-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            SETKORP SERVICES
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tighter text-center text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-gray-800">Services </span>
            <Cover className="touch-manipulation">
              <span className="bg-gradient-to-r from-[#ea6a61] via-[#e85a4f] to-[#ea6a61] bg-clip-text text-transparent">beyond </span>
              <span className="text-[#ea6a61]">expectations</span>
            </Cover>
          </motion.h2>
          <motion.p
            className="text-gray-600 text-center text-balance font-medium max-w-2xl mx-auto text-sm md:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
        </div>
        <motion.div
          className="w-full lg:h-[450px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Feature
            collapseDelay={5000}
            linePosition="bottom"
            featureItems={items}
            lineColor="bg-[#e85a4f]"
          />
        </motion.div>
      </section>
    </>
  );
}
