"use client";
import { useRef } from "react";


export default function Footer() {
  // Icon refs removed

  return (
    <footer className="bg-[#2b2b2b] relative" style={{ backgroundColor: '#2b2b2b', color: '#ffffff' }}>
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-white font-bold mb-4 text-lg" style={{ color: '#ffffff', fontSize: '1.5rem' }}>SetKorp</h3>
            <p className="text-sm leading-relaxed mb-4 text-white font-semibold" style={{ color: '#ffffff' }}>
              Your trusted partner for seamless business setup in Dubai. We turn your entrepreneurial dreams into reality.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-[#f7f7f7]/10 flex items-center justify-center transition-colors"
                onMouseEnter={(e) => e.currentTarget.querySelector('lord-icon')?.playerInstance?.playFromBeginning()}
              >
                <lord-icon
                  src="https://cdn.lordicon.com/hsabxdnr.json"
                  colors="primary:#ee6d66"
                  style={{width: '20px', height: '20px'}}>
                </lord-icon>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-base" style={{ color: '#ffffff', fontSize: '1.125rem' }}>Services</h4>
            <ul className="space-y-2 text-sm text-white">
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors" style={{ color: '#ffffff' }}>Business Setup</a></li>
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors" style={{ color: '#ffffff' }}>License Services</a></li>
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors" style={{ color: '#ffffff' }}>Visa Processing</a></li>
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors" style={{ color: '#ffffff' }}>PRO Services</a></li>
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors" style={{ color: '#ffffff' }}>Accounting</a></li>
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors" style={{ color: '#ffffff' }}>Legal Consulting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-base" style={{ color: '#ffffff', fontSize: '1.125rem' }}>Quick Links</h4>
            <ul className="space-y-2 text-sm text-white">
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors" style={{ color: '#ffffff' }}>About Us</a></li>
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors" style={{ color: '#ffffff' }}>Our Services</a></li>
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors" style={{ color: '#ffffff' }}>Testimonials</a></li>
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors" style={{ color: '#ffffff' }}>FAQ</a></li>
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors" style={{ color: '#ffffff' }}>Contact</a></li>
              <li><a href="#" className="hover:text-[#ea6a61] transition-colors" style={{ color: '#ffffff' }}>Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-base" style={{ color: '#ffffff', fontSize: '1.125rem' }}>Contact Info</h4>
            <ul className="space-y-3 text-sm text-white">
              <li 
                className="flex items-start gap-3"
                onMouseEnter={(e) => e.currentTarget.querySelector('lord-icon')?.playerInstance?.playFromBeginning()}
              >
                <lord-icon
                  src="https://cdn.lordicon.com/oeotfwsx.json"
                  colors="primary:#ee6d66"
                  style={{width: '20px', height: '20px'}}
                  className="flex-shrink-0 mt-0.5">
                </lord-icon>
                <span style={{ color: '#ffffff' }}>Dubai, United Arab Emirates</span>
              </li>
              <li 
                className="flex items-center gap-3"
                onMouseEnter={(e) => e.currentTarget.querySelector('lord-icon')?.playerInstance?.playFromBeginning()}
              >
                <lord-icon
                  src="https://cdn.lordicon.com/wtywrnoz.json"
                  colors="primary:#ee6d66"
                  style={{width: '20px', height: '20px'}}
                  className="flex-shrink-0">
                </lord-icon>
                <span style={{ color: '#ffffff' }}>+971 4 XXX XXXX</span>
              </li>
              <li 
                className="flex items-center gap-3"
                onMouseEnter={(e) => e.currentTarget.querySelector('lord-icon')?.playerInstance?.playFromBeginning()}
              >
                <lord-icon
                  src="https://cdn.lordicon.com/wpsdctqb.json"
                  colors="primary:#ee6d66"
                  style={{width: '20px', height: '20px'}}
                  className="flex-shrink-0">
                </lord-icon>
                <span style={{ color: '#ffffff' }}>info@setkorp.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-white font-semibold" style={{ color: '#ffffff' }}>&copy; {new Date().getFullYear()} SetKorp. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-white">
              <a href="#" className="hover:text-[#ea6a61] transition-colors" style={{ color: '#ffffff' }}>Terms of Service</a>
              <a href="#" className="hover:text-[#ea6a61] transition-colors" style={{ color: '#ffffff' }}>Privacy Policy</a>
              <a href="#" className="hover:text-[#ea6a61] transition-colors" style={{ color: '#ffffff' }}>Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
