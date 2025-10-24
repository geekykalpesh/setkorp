"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { AnimatedButton } from "@/components/ui/animated-button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Badge } from "@/components/ui/badge";
import { useRef, useState, useEffect } from "react";

export default function HeroSection() {
  const iconRef = useRef(null);
  const businessIconRef = useRef(null);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const updateProgress = () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        setProgress(progress || 0);
      };

      const handleEnded = () => {
        setIsPlaying(false);
        setProgress(0);
      };

      audio.addEventListener('timeupdate', updateProgress);
      audio.addEventListener('ended', handleEnded);

      return () => {
        audio.removeEventListener('timeupdate', updateProgress);
        audio.removeEventListener('ended', handleEnded);
      };
    }
  }, []);
  const words = [
    {
      text: "Your",
      className: "text-white",
    },
    {
      text: "Business",
      className: "text-white",
    },
    {
      text: "Journey",
      className: "text-[#ea6a61]",
    },
    {
      text: "Starts",
      className: "text-white",
    },
    {
      text: "Here",
      className: "text-[#ea6a61]",
    },
  ];

  return (
    <div className="relative h-[83vh] sm:h-[85vh] md:h-[85vh] flex flex-col items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-[90%] sm:w-[80%] md:w-[80%] h-[85%] sm:h-[85%] md:h-[95%] object-contain z-0 -mt-50 sm:-mt-50 md:translate-y-5 scale-150 sm:scale-110 md:scale-100"
      >
        <source src="/assets/hero-section-video.mp4" type="video/mp4" />
      </video>
      
      {/* Audio Player - Responsive Position */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 sm:bottom-8 sm:left-8 sm:translate-x-0 z-10">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ea6a61]/40 to-[#e85a4f]/40 p-0.5 animate-pulse">
            <div className="w-full h-full bg-transparent rounded-full"></div>
          </div>
          <div className="flex items-center gap-3 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-[#ea6a61]/30 w-max relative z-10">
          <button
            onClick={toggleAudio}
            className="w-10 h-10 bg-[#ea6a61] rounded-full flex items-center justify-center hover:bg-[#ea6a61]/90 transition-all duration-300 hover:scale-105 shadow-md"
          >
            {isPlaying ? (
              <lord-icon
                src="https://cdn.lordicon.com/ilzotttq.json"
                trigger="hover"
                colors="primary:#ffffff"
                style={{width: '20px', height: '20px'}}
              ></lord-icon>
            ) : (
              <lord-icon
                src="https://cdn.lordicon.com/wjogzler.json"
                trigger="hover"
                colors="primary:#ffffff"
                style={{width: '20px', height: '20px'}}
              ></lord-icon>
            )}
          </button>
          <div className="flex items-center gap-3">
            {/* Animated Waveform */}
            <div className="flex items-center gap-0.5 h-4">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className={`w-0.5 bg-[#ea6a61] rounded-full transition-all duration-150 ${
                    isPlaying ? 'animate-pulse' : ''
                  }`}
                  style={{
                    height: `${Math.random() * 12 + 4}px`,
                    animationDelay: `${i * 0.1}s`,
                    opacity: isPlaying ? 1 : 0.4
                  }}
                ></div>
              ))}
            </div>

          </div>
          </div>
        </div>
      </div>
      <audio ref={audioRef} src="/assets/ai-voice.mp3" preload="metadata" controlsList="nodownload" />
      
      
      
      <div className="absolute bottom-40 sm:bottom-50 md:bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-[90%] sm:w-auto max-w-[42rem] px-2 sm:px-0">
        <a 
          href="#contact" 
          className="flex-1 group relative px-6 sm:px-10 md:px-12 py-3 sm:py-4 bg-[#ea6a61] text-white font-semibold rounded-full hover:bg-[#ea6a61]/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl flex items-center justify-center gap-2 text-sm sm:text-base whitespace-nowrap"
          onMouseEnter={() => businessIconRef.current?.playerInstance?.play()}
          onMouseLeave={() => businessIconRef.current?.playerInstance?.stop()}
        >
          <lord-icon
            ref={businessIconRef}
            src="https://cdn.lordicon.com/qlpudrww.json"
            trigger="none"
            colors="primary:#ffffff"
            style={{width: '20px', height: '20px', zIndex: 20}}
          ></lord-icon>
          <span className="relative z-10">Start Your Business</span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ea6a61] to-[#e85a4f] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </a>
        <a 
          href="#services" 
          className="flex-1 group px-6 sm:px-10 md:px-12 py-3 sm:py-4 bg-white text-[#ea6a61] font-semibold rounded-full hover:bg-[#f7f7f7] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl border-2 border-[#ea6a61] flex items-center justify-center gap-2 text-sm sm:text-base whitespace-nowrap"
          onMouseEnter={() => iconRef.current?.playerInstance?.play()}
          onMouseLeave={() => iconRef.current?.playerInstance?.stop()}
        >
          <lord-icon
            ref={iconRef}
            src="https://cdn.lordicon.com/mudwpdhy.json"
            trigger="none"
            colors="primary:#ee6d66"
            style={{width: '20px', height: '20px'}}
          ></lord-icon>
          Our Services
        </a>
      </div>
    </div>
  )
}