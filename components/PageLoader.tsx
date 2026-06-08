"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

interface PageLoaderProps {
  onComplete: () => void;
}

const statusText = [
  "Initializing cognitive modules...",
  "Spinning up Three.js WebGL scenes...",
  "Loading vector embeddings...",
  "Compiling hyper-grid elements...",
  "Constructing premium dashboards...",
  "Connecting nodes...",
  "System fully operational."
];

export default function PageLoader({ onComplete }: PageLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Progress counter animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Random incremental jumps
        const step = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + step, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  // Update loading messages based on progress
  useEffect(() => {
    const nextIndex = Math.min(
      Math.floor((progress / 100) * statusText.length),
      statusText.length - 1
    );
    setStatusIndex(nextIndex);
    
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setVisible(false);
        setTimeout(onComplete, 600); // Allow exit transition to complete
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  const loaderBg = mounted && theme === 'light'
    ? "linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 50%, #F5F3FF 100%)"
    : undefined;

  const loaderTitleGradient = mounted && theme === 'light'
    ? "bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600"
    : "text-white";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 bg-background z-[9999] flex flex-col items-center justify-center p-4 overflow-hidden transition-colors duration-300"
          style={{ background: loaderBg }}
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: "-100vh",
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          {/* Neon Spotlight Grid */}
          <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/10 blur-[120px] pointer-events-none" />

          {/* Loading Container */}
          <div className="w-full max-w-md text-center z-10">
            {/* Header */}
            <motion.h1 
              className={`text-4xl md:text-5xl font-extrabold tracking-[0.25em] mb-16 uppercase ${loaderTitleGradient}`}
              initial={{ letterSpacing: "0.1em", opacity: 0 }}
              animate={{ letterSpacing: "0.25em", opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Vivek Yadav
            </motion.h1>

            {/* Percentage Indicator */}
            <div className="mb-4">
              <motion.span 
                className="text-6xl md:text-7xl font-light font-mono text-text tracking-tighter"
                key={progress}
                initial={{ opacity: 0.6, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {progress}%
              </motion.span>
            </div>

            {/* Slider Track */}
            <div className="w-full h-[2px] bg-slate-800 rounded-full overflow-hidden mb-6 relative">
              <motion.div 
                className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
                style={{ width: `${progress}%` }}
                layoutId="loader-bar"
              />
              {/* Glowing lead */}
              <div 
                className="absolute top-0 h-full w-4 bg-primary blur-[4px] shadow-[0_0_8px_#3b82f6]"
                style={{ left: `calc(${progress}% - 8px)` }}
              />
            </div>

            {/* Loading Status Updates */}
            <div className="h-6 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={statusIndex}
                  className="text-slate-400 font-mono text-xs tracking-wider"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {statusText[statusIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* Minimal Cyber Borders */}
          <div className="absolute top-8 left-8 w-12 h-[1px] bg-primary/30" />
          <div className="absolute top-8 left-8 w-[1px] h-12 bg-primary/30" />
          <div className="absolute bottom-8 right-8 w-12 h-[1px] bg-secondary/30" />
          <div className="absolute bottom-8 right-8 w-[1px] h-12 bg-secondary/30" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
