"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, Circle, ArrowUpRight } from "lucide-react";
import { timelineData } from "../data/portfolioData";

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-24 bg-transparent border-b border-slate-900/60 overflow-hidden">
      {/* Background neon ambient spot */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-primary/2 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.p 
            className="text-xs uppercase font-mono tracking-widest text-accent mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            04 / Chronological Milestones
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-5xl font-extrabold uppercase text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Journey Timeline
          </motion.h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Vertical central spine line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-accent opacity-30 transform -translate-x-1/2" />
          
          <div className="flex flex-col gap-16 md:gap-12">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={item.year}
                  className={`flex flex-col md:flex-row relative w-full items-start ${
                    isEven ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Central glowing node pointer */}
                  <div className="absolute left-4 md:left-1/2 top-6 transform -translate-x-1/2 z-10">
                    <motion.div 
                      className={`w-4 h-4 rounded-full border-2 bg-background flex items-center justify-center ${
                        index === timelineData.length - 1 
                          ? "border-accent shadow-[0_0_10px_#06b6d4]" 
                          : "border-primary"
                      }`}
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: "spring" as const, stiffness: 150 }}
                    >
                      <Circle className={`w-1.5 h-1.5 fill-current ${
                        index === timelineData.length - 1 ? "text-accent animate-pulse" : "text-primary"
                      }`} />
                    </motion.div>
                  </div>

                  {/* Content Card Wrapper */}
                  <motion.div 
                    className={`w-full md:w-[45%] pl-10 md:pl-0 ${
                      isEven ? "md:text-right md:pr-10" : "md:text-left md:pl-10"
                    }`}
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring" as const, stiffness: 80, damping: 15 }}
                  >
                    <div className="glass-card p-6 rounded-xl relative group hover:border-primary/30 transition-colors duration-300">
                      
                      {/* Year badge */}
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono font-bold text-accent mb-4">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.year}
                      </span>

                      {/* Milestone Title */}
                      <h3 className="text-base font-bold text-white mb-2 tracking-tight group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>

                      {/* Milestone Description */}
                      <p className="text-xs text-slate-400 font-light leading-relaxed">
                        {item.description}
                      </p>

                      {/* Node corner decoration */}
                      <div className="absolute top-4 right-4 text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowUpRight className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
