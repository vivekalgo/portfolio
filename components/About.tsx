"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Brain, Code, Lightbulb, Rocket } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
}

function AnimatedCounter({ value, duration = 1.5 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = value;
    const totalFrames = 60;
    const frameDuration = (duration * 1000) / totalFrames;
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      // Ease out expo formula
      const progress = frame / totalFrames;
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOutProgress * end);

      setCount(current);

      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(counter);
      }
    }, frameDuration);

    return () => clearInterval(counter);
  }, [isInView, value, duration]);

  return <span ref={ref} className="font-mono font-bold">{count}</span>;
}

export default function About() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80 } }
  };

  // Map highlights to icons
  const icons = [
    <Rocket className="w-5 h-5 text-primary" key="rocket" />,
    <Brain className="w-5 h-5 text-secondary" key="brain" />,
    <Code className="w-5 h-5 text-accent" key="code" />,
    <Lightbulb className="w-5 h-5 text-yellow-500" key="light" />
  ];

  return (
    <section id="about" className="relative py-24 bg-transparent border-b border-slate-900/60 overflow-hidden">
      {/* Decorative grids/glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p 
            className="text-xs uppercase font-mono tracking-widest text-accent mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            01 / Professional Profile
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-5xl font-extrabold uppercase text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
        </div>

        {/* Section Grid */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Premium Tech Profile Photo */}
          <motion.div 
            className="lg:col-span-3 flex justify-center lg:justify-start"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full aspect-square max-w-[260px] rounded-2xl overflow-hidden glass-card border border-slate-800 hover:border-accent/40 transition-colors duration-500 group shadow-lg">
              {/* Cyber Scanning Line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent shadow-[0_0_8px_#06b6d4] z-20 animate-scan" />

              {/* Futuristic overlay grid */}
              <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none mix-blend-overlay z-10" />
              
              {/* Neon Glow backdrops */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-accent rounded-2xl blur opacity-15 group-hover:opacity-30 transition duration-500" />

              {/* The Image */}
              <img
                src="/vivek.png"
                alt="Vivek Yadav"
                className="w-full h-full object-cover grayscale contrast-[1.05] hover:grayscale-0 hover:contrast-100 transition-all duration-700 ease-out scale-105 group-hover:scale-100"
              />

              <div className="absolute top-3 right-3 font-mono text-[8px] text-accent/80 z-10 animate-pulse">
                ● ACTIVE
              </div>
            </div>
          </motion.div>

          {/* Middle Column: Bio Narrative */}
          <motion.div 
            className="lg:col-span-5 flex flex-col gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h3 
              variants={childVariants}
              className="text-lg md:text-xl font-semibold text-slate-100 font-sans flex items-center gap-2"
            >
              Engineering solutions at the interface of ML & Web scale.
            </motion.h3>

            <motion.p 
              variants={childVariants}
              className="text-slate-400 font-light leading-relaxed text-xs md:text-sm"
            >
              {personalInfo.aboutText}
            </motion.p>

            <motion.div 
              variants={childVariants}
              className="flex flex-col gap-4 mt-2"
            >
              {personalInfo.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-955 border border-slate-900 shrink-0">
                    {icons[idx % icons.length]}
                  </div>
                  <div>
                    <h4 className="text-[11px] font-semibold text-slate-200 uppercase tracking-wider font-mono">
                      {idx === 0 ? "Startup Focused" : idx === 1 ? "AI Specialization" : idx === 2 ? "Production Oriented" : "Constant Learner"}
                    </h4>
                    <p className="text-[10px] text-slate-400 mt-0.5 font-light leading-relaxed">
                      {highlight}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Stats Dashboard Grid */}
          <motion.div 
            className="lg:col-span-4 grid grid-cols-2 gap-3 w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Stat Card 1 */}
            <div className="glass-card p-4 rounded-xl flex flex-col justify-center min-h-[140px] relative overflow-hidden group hover:border-primary/45 transition-colors duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors pointer-events-none" />
              <p className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
                <AnimatedCounter value={personalInfo.stats.projectsCount} />+
              </p>
              <p className="text-[9px] uppercase font-mono tracking-widest text-slate-400">
                Projects Completed
              </p>
              <p className="text-[8px] text-slate-500 mt-1">
                Real-world web & AI deployments
              </p>
            </div>

            {/* Stat Card 2 */}
            <div className="glass-card p-4 rounded-xl flex flex-col justify-center min-h-[140px] relative overflow-hidden group hover:border-secondary/45 transition-colors duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/5 rounded-full blur-xl group-hover:bg-secondary/10 transition-colors pointer-events-none" />
              <p className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
                <AnimatedCounter value={personalInfo.stats.technologiesCount} />+
              </p>
              <p className="text-[9px] uppercase font-mono tracking-widest text-slate-400">
                Technologies
              </p>
              <p className="text-[8px] text-slate-500 mt-1">
                Frontend, backend & ML frameworks
              </p>
            </div>

            {/* Stat Card 3 */}
            <div className="glass-card p-4 rounded-xl flex flex-col justify-center min-h-[140px] relative overflow-hidden group hover:border-accent/45 transition-colors duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-full blur-xl group-hover:bg-accent/10 transition-colors pointer-events-none" />
              <p className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
                <AnimatedCounter value={personalInfo.stats.contributions} />+
              </p>
              <p className="text-[9px] uppercase font-mono tracking-widest text-slate-400">
                GitHub Commits
              </p>
              <p className="text-[8px] text-slate-500 mt-1">
                Consistent coding activity logs
              </p>
            </div>

            {/* Stat Card 4 */}
            <div className="glass-card p-4 rounded-xl flex flex-col justify-center min-h-[140px] relative overflow-hidden group hover:border-slate-800 transition-colors duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/3 rounded-full blur-xl pointer-events-none" />
              <p className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
                <AnimatedCounter value={personalInfo.stats.learningYears} />+
              </p>
              <p className="text-[9px] uppercase font-mono tracking-widest text-slate-400">
                Years Building
              </p>
              <p className="text-[8px] text-slate-500 mt-1">
                Self-driven engineering research
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
