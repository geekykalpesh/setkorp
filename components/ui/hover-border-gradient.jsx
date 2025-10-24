"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const HoverBorderGradient = ({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}) => {
  return (
    <Tag
      className={cn(
        "relative flex rounded-full border content-center bg-black/20 hover:bg-black/10 transition duration-500 dark:bg-white/20 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "w-auto text-white z-10 bg-black px-4 py-2 rounded-[inherit]",
          className
        )}
      >
        {children}
      </div>
      <motion.div
        className={cn(
          "flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
        )}
      >
        <motion.div
          className="flex-none inset-[-1000%] absolute bg-[conic-gradient(from_0deg_at_50%_50%,#00BFFF_0deg,#0080FF_72deg,#8A2BE2_144deg,#FF1493_216deg,#FF6347_288deg,#00BFFF_360deg)] rounded-[inherit]"
          animate={{
            rotate: clockwise ? [0, 360] : [360, 0],
          }}
          transition={{
            duration: duration,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </motion.div>
    </Tag>
  );
};