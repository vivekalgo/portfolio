"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, FileText, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import TechScene from "./TechScene";
import { personalInfo } from "../data/portfolioData";
import { useTheme } from "./ThemeProvider";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const titles = ["AI Engineer", "Full Stack Developer", "Startup Builder"];
  const [titleIdx, setTitleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const nameGradient = mounted && theme === 'light'
    ? "from-indigo-600 via-violet-600 to-pink-500"
    : "from-white via-slate-100 to-slate-400";

  const titleGradient = mounted && theme === 'light'
    ? "from-blue-600 via-indigo-500 to-cyan-500"
    : "from-primary via-secondary to-accent";

  // Typing effect loop
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentTitle = titles[titleIdx];

    if (isDeleting) {
      if (charIdx > 0) {
        timer = setTimeout(() => {
          setTypedText(currentTitle.substring(0, charIdx - 1));
          setCharIdx((prev) => prev - 1);
        }, 50);
      } else {
        setIsDeleting(false);
        setTitleIdx((prev) => (prev + 1) % titles.length);
      }
    } else {
      if (charIdx < currentTitle.length) {
        timer = setTimeout(() => {
          setTypedText(currentTitle.substring(0, charIdx + 1));
          setCharIdx((prev) => prev + 1);
        }, 100);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    }

    return () => clearTimeout(timer);
  }, [charIdx, isDeleting, titleIdx]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 100 }
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-28 pb-16 overflow-hidden bg-transparent">
      {/* Decorative cosmic glow layers */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/10 w-96 h-96 rounded-full bg-secondary/8 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        {/* Left Side Info */}
        <motion.div 
          className="lg:col-span-7 text-left flex flex-col justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Sparkle greeting tag */}
          <motion.div 
            variants={itemVariants}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full w-fit mb-6 shadow-inner ${
              mounted && theme === 'light'
                ? "bg-indigo-50/70 border border-indigo-100/80"
                : "bg-slate-900/60 border border-slate-800/80"
            }`}
          >
            <Sparkles className={`w-4 h-4 animate-pulse ${
              mounted && theme === 'light' ? "text-indigo-600" : "text-accent"
            }`} />
            <span className={`text-[10px] uppercase font-mono tracking-widest ${
              mounted && theme === 'light' ? "text-indigo-600 font-semibold" : "text-slate-300"
            }`}>
              Welcome to the Future of Product Building
            </span>
          </motion.div>
 
          {/* Name */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 uppercase"
          >
            <span className={`block bg-clip-text text-transparent bg-gradient-to-r ${nameGradient}`}>
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Dynamic Typing Title */}
          <motion.h2 
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl font-mono text-slate-300 font-bold mb-6 h-10 flex items-center"
          >
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${titleGradient}`}>
              {typedText}
            </span>
            <span className="w-1.5 h-6 bg-accent ml-1 animate-pulse" />
          </motion.h2>

          {/* Short Bio */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-muted max-w-xl mb-10 leading-relaxed font-light"
          >
            {personalInfo.description}
          </motion.p>

          {/* Call-to-actions */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12"
          >
            {/* View Projects */}
            <a 
              href="#projects" 
              className={`px-6 py-3.5 rounded-lg bg-gradient-to-r from-primary via-secondary to-accent font-semibold text-sm transition-all text-center flex items-center justify-center gap-2 group text-white ${
                mounted && theme === 'light'
                  ? "hover:shadow-[0_8px_25px_rgba(139,92,246,0.35)]"
                  : "hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
              }`}
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>

            {/* Contact */}
            <a 
              href="#contact" 
              className={`px-6 py-3.5 rounded-lg border border-dashed text-center flex items-center justify-center gap-2 font-mono text-xs transition-all ${
                mounted && theme === 'light'
                  ? "bg-indigo-50/40 border-indigo-200 text-indigo-600 hover:bg-indigo-50/80"
                  : "bg-slate-900/50 hover:bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white"
              }`}
            >
              Contact Me
            </a>

            <a 
              href={personalInfo.socials.resume} 
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3.5 rounded-lg border border-dashed text-center flex items-center justify-center gap-2 font-mono text-xs transition-all ${
                mounted && theme === 'light'
                  ? "bg-indigo-50/40 border-indigo-200 text-indigo-600 hover:bg-indigo-50/80"
                  : "bg-slate-900/50 hover:bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white"
              }`}
            >
              <FileText className={`w-4 h-4 ${mounted && theme === 'light' ? "text-indigo-600" : "text-accent"}`} />
              <span>Resume.pdf</span>
            </a>
          </motion.div>

          {/* Social connections */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-6 border-t border-slate-900 pt-8"
          >
            <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500">
              Connect:
            </span>
            <div className="flex items-center gap-4">
              <a 
                href={personalInfo.socials.github} 
                target="_blank" 
                rel="noreferrer" 
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all hover:-translate-y-1 ${
                  mounted && theme === 'light'
                    ? "border border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:border-slate-400 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] cursor-pointer"
                    : "border border-slate-855 bg-slate-950 text-slate-400 hover:text-white hover:border-primary hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                }`}
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a 
                href={personalInfo.socials.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all hover:-translate-y-1 ${
                  mounted && theme === 'light'
                    ? "border border-slate-200 bg-white text-slate-600 hover:text-[#0A66C2] hover:border-slate-400 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] cursor-pointer"
                    : "border border-slate-855 bg-slate-950 text-slate-400 hover:text-[#0A66C2] hover:border-secondary hover:shadow-[0_0_15px_rgba(139,92,246,0.2)]"
                }`}
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a 
                href={personalInfo.socials.email} 
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all hover:-translate-y-1 ${
                  mounted && theme === 'light'
                    ? "border border-slate-200 bg-white text-slate-600 hover:text-red-500 hover:border-slate-400 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] cursor-pointer"
                    : "border border-slate-850 bg-slate-950 text-slate-400 hover:text-red-400 hover:border-accent hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                }`}
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side 3D scene */}
        <motion.div 
          className="lg:col-span-5 w-full flex items-center justify-center relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Subtle surrounding glow ring */}
          <div className="absolute w-[380px] h-[380px] rounded-full border border-slate-900 pointer-events-none" />
          <div className="absolute w-[460px] h-[460px] rounded-full border border-dashed border-slate-900/60 pointer-events-none animate-spin-slow" />
          
          <TechScene />
        </motion.div>
      </div>

      {/* Cyber bottom highlight border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-800/40 to-transparent" />
    </section>
  );
}
