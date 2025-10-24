"use client";

import { cn } from "@/lib/utils";

export function ShineBorder({
  children,
  className,
  color = "#ea6a61",
  borderRadius = 16,
  borderWidth = 2,
  duration = 10,
}) {
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{
        borderRadius: `${borderRadius}px`,
        padding: `${borderWidth}px`,
        background: `linear-gradient(90deg, transparent 0%, ${color} 50%, transparent 100%)`,
        backgroundSize: "200% 100%",
        animation: `shine ${duration}s linear infinite`,
      }}
    >
      <div 
        className="relative h-full w-full bg-white"
        style={{
          borderRadius: `${borderRadius - borderWidth}px`,
        }}
      >
        {children}
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes shine {
            0% {
              background-position: 200% 0;
            }
            100% {
              background-position: -200% 0;
            }
          }
        `
      }} />
    </div>
  );
}
