"use client";

import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

const navs = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#welcome" },
  { name: "Services", href: "#services" },
  { name: "Features", href: "#features" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export function NavMenu({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  const ref = useRef(null);
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isManualScroll, setIsManualScroll] = useState(false);

  React.useEffect(() => {
    const firstItem = ref.current?.querySelector(
      `[href="#${navs[0].href.substring(1)}"]`,
    )?.parentElement;
    if (firstItem) {
      const rect = firstItem.getBoundingClientRect();
      setLeft(firstItem.offsetLeft);
      setWidth(rect.width);
      setIsReady(true);
    }
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      if (isManualScroll) return;

      const sections = navs.map((item) => item.href.substring(1));
      let closestSection = sections[0];
      let minDistance = Infinity;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top - 100);
          if (distance < minDistance) {
            minDistance = distance;
            closestSection = section;
          }
        }
      }

      setActiveSection(closestSection);
      const navItem = ref.current?.querySelector(
        `[href="#${closestSection}"]`,
      )?.parentElement;
      if (navItem) {
        const rect = navItem.getBoundingClientRect();
        setLeft(navItem.offsetLeft);
        setWidth(rect.width);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isManualScroll]);

  const handleClick = (e, item) => {
    e.preventDefault();

    const targetId = item.href.substring(1);
    const element = document.getElementById(targetId);

    if (element) {
      setIsManualScroll(true);
      setActiveSection(targetId);
      const navItem = e.currentTarget.parentElement;
      if (navItem) {
        const rect = navItem.getBoundingClientRect();
        setLeft(navItem.offsetLeft);
        setWidth(rect.width);
      }

      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 100;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsMobileMenuOpen(false);

      setTimeout(() => {
        setIsManualScroll(false);
      }, 500);
    }
  };

  return (
    <>
    <div className="hidden md:block">
      <ul
        className="relative flex w-fit rounded-full h-11 px-1 items-center justify-center gap-1"
        ref={ref}
      >
        {navs.map((item) => (
          <li
            key={item.name}
            className={`z-10 cursor-pointer h-full flex items-center justify-center px-3 py-1 text-sm font-medium transition-colors duration-200 ${
              activeSection === item.href.substring(1)
                ? "text-[#ea6a61]"
                : "text-[#2b2b2b] hover:text-[#ea6a61]"
            } tracking-tight whitespace-nowrap`}
          >
            <a href={item.href} onClick={(e) => handleClick(e, item)}>
              {item.name}
            </a>
          </li>
        ))}
        {isReady && (
          <motion.li
            animate={{ left, width }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="absolute inset-0 my-1.5 rounded-full bg-[#ea6a61]/10 border border-[#ea6a61]/20"
          />
        )}
      </ul>
    </div>
    
    {/* Mobile Menu */}
    {isMobileMenuOpen && (
      <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-2 bg-white border-2 border-[#e85a4f] rounded-lg shadow-lg overflow-hidden">
        <ul className="py-2">
          {navs.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={(e) => handleClick(e, item)}
                className={`block px-4 py-3 text-sm font-medium transition-colors ${
                  activeSection === item.href.substring(1)
                    ? "text-[#ea6a61] bg-[#ea6a61]/10"
                    : "text-[#2b2b2b] hover:bg-[#ea6a61]/5"
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )}
    </>
  );
}
