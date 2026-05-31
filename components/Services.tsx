"use client";
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, Globe, Zap, Terminal } from "lucide-react";
import { servicesData } from "../data/portfolioData";

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
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

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Cpu":
        return <Cpu className="w-6 h-6 text-accent" />;
      case "Layers":
        return <Layers className="w-6 h-6 text-primary" />;
      case "Globe":
        return <Globe className="w-6 h-6 text-secondary" />;
      case "Zap":
        return <Zap className="w-6 h-6 text-yellow-500 animate-pulse" />;
      case "Terminal":
      default:
        return <Terminal className="w-6 h-6 text-slate-400" />;
    }
  };

  return (
    <section id="services" className="relative py-24 bg-transparent border-b border-slate-900/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.p 
            className="text-xs uppercase font-mono tracking-widest text-accent mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            06 / Available Services
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-5xl font-extrabold uppercase text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What I Can Build
          </motion.h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
        </div>

        {/* Services Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {servicesData.map((service, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -6, 
                transition: { duration: 0.2, ease: "easeOut" } 
              }}
              className="glass-card p-8 rounded-xl border border-slate-850 hover:border-accent/30 transition-all duration-300 relative group flex flex-col justify-between"
            >
              {/* Floating ambient circle behind icons */}
              <div className="absolute top-8 left-8 w-12 h-12 rounded-full bg-slate-950/80 -z-10 group-hover:scale-110 transition-transform" />

              <div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-900 w-fit mb-6 shadow-inner group-hover:shadow-[0_0_12px_rgba(6,182,212,0.25)] transition-shadow duration-300">
                  {getServiceIcon(service.iconName)}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight group-hover:text-accent transition-colors uppercase font-sans">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-400 font-light leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>


            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
