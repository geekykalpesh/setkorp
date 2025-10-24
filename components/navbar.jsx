"use client";

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NavMenu } from "@/components/nav-menu"
import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState, useRef } from "react"

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const calculatorIconRef = useRef(null);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <nav className="fixed top-4 md:top-8 left-1/2 transform -translate-x-1/2 z-50 w-[calc(100vw-2rem)] max-w-[1400px]">
      <motion.div
        initial={{ width: "100%" }}
        animate={{ 
          width: isScrolled ? (typeof window !== 'undefined' && window.innerWidth < 768 ? "85%" : "70%") : "100%",
          borderRadius: isScrolled ? "9999px" : "0px"
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="border-2 border-[#e85a4f] bg-white backdrop-blur-xl shadow-lg mx-auto"
      >
        <div className="flex h-12 md:h-14 items-center justify-between px-2 sm:px-3 md:px-4">
          <Link href="/" className="flex items-center transition-transform hover:scale-105">
            <Image
              src="/assets/logo.svg"
              alt="SETKORP"
              width={120}
              height={40}
              className="h-6 md:h-8 w-auto object-contain"
              priority
            />
          </Link>

          <NavMenu isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />

          <div className="flex items-center space-x-2 md:space-x-3">
            <Button 
              size="sm" 
              className="bg-[#ea6a61] hover:bg-[#ea6a61]/90 h-8 md:h-9 text-xs flex items-center gap-1 md:gap-2 px-2 md:px-4"
              onMouseEnter={() => calculatorIconRef.current?.playerInstance?.play()}
              onMouseLeave={() => calculatorIconRef.current?.playerInstance?.stop()}
            >
              <lord-icon
                ref={calculatorIconRef}
                src="https://cdn.lordicon.com/emxxkbtx.json"
                trigger="none"
                colors="primary:#ffffff"
                style={{width: '16px', height: '16px'}}>
              </lord-icon>
              <span className="hidden sm:inline">Cost Calculator</span>
              <span className="sm:hidden">Calculator</span>
            </Button>
            <button
              className="md:hidden p-2 text-[#ea6a61]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
    </nav>
  )
}