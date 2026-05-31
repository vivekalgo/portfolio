"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import { testimonialsData } from "../data/portfolioData";

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(0); // -1: left, 1: right

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIdx]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIdx((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIdx((prev) => (prev + 1) % testimonialsData.length);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" as const }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" as const }
    })
  };

  const activeTestimonial = testimonialsData[activeIdx];

  return (
    <section className="relative py-24 bg-transparent border-b border-slate-900/60 overflow-hidden">
      {/* Background spot glow */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-secondary/3 blur-[90px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p 
            className="text-xs uppercase font-mono tracking-widest text-accent mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            07 / Client Endorsements
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-5xl font-extrabold uppercase text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Testimonials
          </motion.h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
        </div>

        {/* Carousel Box */}
        <div className="relative glass-card p-8 md:p-12 rounded-2xl border border-slate-850 max-w-3xl mx-auto overflow-hidden">
          
          {/* Quote floating decoration */}
          <div className="absolute top-6 left-6 text-slate-800 pointer-events-none opacity-40">
            <Quote className="w-16 h-16 rotate-180" />
          </div>

          <div className="min-h-[220px] md:min-h-[180px] flex items-center relative z-10">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIdx}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full text-center md:text-left flex flex-col justify-center"
              >
                {/* Quote Quote text */}
                <p className="text-sm md:text-base text-slate-300 font-light italic leading-relaxed mb-8">
                  "{activeTestimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-slate-900/60 pt-6">
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <div className="p-2 rounded-full bg-slate-950 border border-slate-800 text-slate-400">
                      <MessageSquare className="w-4 h-4 text-accent" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-bold text-white tracking-wide uppercase font-mono">
                        {activeTestimonial.author}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav buttons (Arrows) */}
          <div className="absolute bottom-6 right-8 flex items-center gap-2 z-20">
            <button
              onClick={handlePrev}
              className="p-1.5 rounded bg-slate-950 hover:bg-slate-850 border border-slate-800 text-slate-400 hover:text-white transition-all"
              title="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-1.5 rounded bg-slate-950 hover:bg-slate-850 border border-slate-800 text-slate-400 hover:text-white transition-all"
              title="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Indicators dot bar */}
        <div className="flex items-center justify-center gap-1.5 mt-8">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > activeIdx ? 1 : -1);
                setActiveIdx(idx);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === activeIdx 
                  ? "bg-accent w-4 shadow-[0_0_8px_#06b6d4]" 
                  : "bg-slate-800 hover:bg-slate-700"
              }`}
              title={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
