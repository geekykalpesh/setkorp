"use client";
import { useRef } from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function Footer() {
  const socialIconRef = useRef(null);
  const locationIconRef = useRef(null);
  const phoneIconRef = useRef(null);
  const emailIconRef = useRef(null);
  return (
    <footer className="bg-[#2b2b2b]" style={{color: '#ffffff !important'}}>
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-white font-bold mb-4 text-lg" style={{color: '#ffffff !important', fontSize: '1.5rem !important'}}>SetKorp</h3>
            <p className="text-sm leading-relaxed mb-4 text-white font-semibold" style={{color: '#ffffff !important'}}>
              Your trusted partner for seamless business setup in Dubai. We turn your entrepreneurial dreams into reality.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-[#f7f7f7]/10 flex items-center justify-center transition-colors"
                onMouseEnter={() => socialIconRef.current?.playerInstance?.play()}
                onMouseLeave={() => socialIconRef.current?.playerInstance?.stop()}
              >
                <lord-icon
                  ref={socialIconRef}
                  src="https://cdn.lordicon.com/hsabxdnr.json"
                  trigger="none"
                  colors="primary:#ee6d66"
                  style={{width: '20px', height: '20px'}}>
                </lord-icon>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-base" style={{color: '#ffffff !important', fontSize: '1.125rem !important'}}>Services</h4>
            <ul className="space-y-2 text-sm text-white">
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors">Business Setup</a></li>
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors">License Services</a></li>
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors">Visa Processing</a></li>
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors">PRO Services</a></li>
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors">Accounting</a></li>
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors">Legal Consulting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-base" style={{color: '#ffffff !important', fontSize: '1.125rem !important'}}>Quick Links</h4>
            <ul className="space-y-2 text-sm text-white">
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors">Our Services</a></li>
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-base" style={{color: '#ffffff !important', fontSize: '1.125rem !important'}}>Contact Info</h4>
            <ul className="space-y-3 text-sm text-white">
              <li 
                className="flex items-start gap-3"
                onMouseEnter={() => locationIconRef.current?.playerInstance?.play()}
                onMouseLeave={() => locationIconRef.current?.playerInstance?.stop()}
              >
                <lord-icon
                  ref={locationIconRef}
                  src="https://cdn.lordicon.com/oeotfwsx.json"
                  trigger="none"
                  colors="primary:#ee6d66"
                  style={{width: '20px', height: '20px'}}
                  className="flex-shrink-0 mt-0.5">
                </lord-icon>
                <span>Dubai, United Arab Emirates</span>
              </li>
              <li 
                className="flex items-center gap-3"
                onMouseEnter={() => phoneIconRef.current?.playerInstance?.play()}
                onMouseLeave={() => phoneIconRef.current?.playerInstance?.stop()}
              >
                <lord-icon
                  ref={phoneIconRef}
                  src="https://cdn.lordicon.com/wtywrnoz.json"
                  trigger="none"
                  colors="primary:#ee6d66"
                  style={{width: '20px', height: '20px'}}
                  className="flex-shrink-0">
                </lord-icon>
                <span>+971 4 XXX XXXX</span>
              </li>
              <li 
                className="flex items-center gap-3"
                onMouseEnter={() => emailIconRef.current?.playerInstance?.play()}
                onMouseLeave={() => emailIconRef.current?.playerInstance?.stop()}
              >
                <lord-icon
                  ref={emailIconRef}
                  src="https://cdn.lordicon.com/wpsdctqb.json"
                  trigger="none"
                  colors="primary:#ee6d66"
                  style={{width: '20px', height: '20px'}}
                  className="flex-shrink-0">
                </lord-icon>
                <span>info@setkorp.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-white font-semibold" style={{color: '#ffffff !important'}}>&copy; {new Date().getFullYear()} SetKorp. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-white">
              <a href="#" className="hover:text-[#ea6a61] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#ea6a61] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#ea6a61] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
