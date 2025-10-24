"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { useEffect, useState } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const [scope, animate] = useAnimate();
  const [showCursor, setShowCursor] = useState(true);
  const isInView = useInView(scope, { once: false });
  
  useEffect(() => {
    if (isInView) {
      // Reset cursor visibility
      setShowCursor(true);
      
      // Reset all spans to initial state
      animate("span", {
        display: "none",
        opacity: 0,
      }, { duration: 0 });
      
      // Start typing animation after a brief delay
      setTimeout(() => {
        const totalChars = wordsArray.reduce((acc, word) => acc + word.text.length, 0);
        const animationDuration = totalChars * 0.05 + 0.2;
        
        animate("span", {
          display: "inline-block",
          opacity: 1,
        }, {
          duration: 0.2,
          delay: stagger(0.05),
          ease: "easeInOut",
        });
        
        setTimeout(() => {
          setShowCursor(false);
        }, animationDuration * 1000);
      }, 100);
    }
  }, [isInView]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <motion.span
                  initial={{ display: "none" }}
                  key={`char-${index}`}
                  className={cn(`opacity-0`, word.className)}>
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </div>
          );
        })}
      </motion.div>
    );
  };
  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )}>
      {renderWords()}
      {showCursor && (
        <motion.span
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={cn(
            "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
            cursorClassName
          )}></motion.span>
      )}
    </div>
  );
};