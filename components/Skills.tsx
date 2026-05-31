"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, Terminal, Layout, Layers, ShieldCheck } from "lucide-react";
import { skillsCategories, SkillCategory } from "../data/portfolioData";

export default function Skills() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 80, damping: 15 }
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend":
        return <Layout className="w-5 h-5 text-primary" />;
      case "Backend":
        return <Layers className="w-5 h-5 text-secondary" />;
      case "AI / ML":
        return <Cpu className="w-5 h-5 text-accent animate-pulse" />;
      case "Tools":
      default:
        return <Terminal className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <section id="skills" className="relative py-24 bg-transparent border-b border-slate-900/60 overflow-hidden">
      {/* Dynamic spot-glow */}
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-accent/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.p 
            className="text-xs uppercase font-mono tracking-widest text-accent mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            03 / Core Competencies
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-5xl font-extrabold uppercase text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Skills & Tech Stack
          </motion.h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
        </div>

        {/* Categories Grid */}
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillsCategories.map((cat: SkillCategory, catIdx: number) => (
            <motion.div
              key={cat.category}
              variants={cardVariants}
              className="glass-card p-6 rounded-xl border border-slate-850 hover:border-slate-700/60 transition-colors duration-300 relative group"
            >
              {/* Heading */}
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-900">
                <div className="p-2 rounded-lg bg-slate-950 border border-slate-900">
                  {getCategoryIcon(cat.category)}
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                  {cat.category}
                </h3>
              </div>

              {/* Skills mapped inside */}
              <div className="flex flex-col gap-6">
                {cat.items.map((skill) => (
                  <div key={skill.name} className="flex flex-col">
                    <div className="flex justify-between items-center text-xs font-mono mb-2 text-slate-300">
                      <span className="font-light hover:text-white transition-colors">{skill.name}</span>
                      <span className="text-[10px] text-slate-500 font-bold">{skill.percentage}%</span>
                    </div>

                    {/* Progress Track */}
                    <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden relative">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
                        transition={{ duration: 1.2, delay: 0.1 * catIdx, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Extra futuristic highlight edge */}
              <div className="absolute bottom-4 right-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <ShieldCheck className="w-3.5 h-3.5 text-accent/80" />
                <span className="text-[8px] font-mono text-slate-500">VERIFIED</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
