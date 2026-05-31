"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, BookOpen, CheckCircle, Cpu, MapPin } from "lucide-react";
import { GithubIcon } from "./icons/BrandIcons";
import { projectsData, Project } from "../data/portfolioData";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 70, damping: 15 }
    }
  };

  // Render a customized animated SVG schema based on project ID
  const renderProjectSchema = (id: string) => {
    switch (id) {
      case "aisentinel-india":
        return (
          <div className="relative w-full h-48 bg-slate-950/80 rounded-t-xl overflow-hidden flex items-center justify-center border-b border-slate-900 group">
            {/* Holographic Radar Scanner */}
            <div className="absolute inset-0 bg-radial-gradient from-primary/10 to-transparent pointer-events-none" />
            <svg className="w-full h-full p-4" viewBox="0 0 200 100" fill="none">
              <circle cx="100" cy="50" r="40" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="100" cy="50" r="25" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.4" />
              <line x1="100" y1="10" x2="100" y2="90" stroke="#1e293b" strokeWidth="0.5" />
              <line x1="60" y1="50" x2="140" y2="50" stroke="#1e293b" strokeWidth="0.5" />
              {/* Radar Sweep */}
              <path d="M100 50 L128 22" stroke="#06b6d4" strokeWidth="1.5" className="origin-[100px_50px] animate-[spin_4s_linear_infinite]" />
              {/* Detected points */}
              <circle cx="85" cy="35" r="3" fill="#ef4444" className="animate-ping" />
              <circle cx="85" cy="35" r="2" fill="#ef4444" />
              <circle cx="120" cy="65" r="2" fill="#06b6d4" />
              <circle cx="100" cy="50" r="4" fill="#3b82f6" />
            </svg>
            <div className="absolute top-3 left-3 bg-red-950/60 border border-red-500/30 px-2 py-0.5 rounded text-[8px] font-mono tracking-widest text-red-400 flex items-center gap-1.5 uppercase">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
              Live AI Feed
            </div>
            <div className="absolute bottom-3 right-3 font-mono text-[9px] text-slate-500">
              SYS_MONITOR_IN: OK
            </div>
          </div>
        );
      case "local-commerce":
        return (
          <div className="relative w-full h-48 bg-slate-950/80 rounded-t-xl overflow-hidden flex items-center justify-center border-b border-slate-900">
            {/* Route Map Grid */}
            <div className="absolute inset-0 bg-radial-gradient from-secondary/10 to-transparent pointer-events-none" />
            <svg className="w-full h-full p-4" viewBox="0 0 200 100" fill="none">
              {/* Nodes and roads */}
              <path d="M30 20 L80 30 L130 15 L170 45 L140 85 L90 70 L30 80 Z" stroke="#1e293b" strokeWidth="1" strokeDasharray="2 2" />
              <path d="M80 30 L90 70" stroke="#1e293b" strokeWidth="1" />
              <path d="M130 15 L140 85" stroke="#1e293b" strokeWidth="1" />
              {/* Route line */}
              <path d="M30 20 L80 30 L90 70 L140 85" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.8" className="animate-[dash_3s_linear_infinite]" />
              {/* Node landmarks */}
              <circle cx="30" cy="20" r="4" fill="#3b82f6" />
              <circle cx="80" cy="30" r="4" fill="#8b5cf6" />
              <circle cx="130" cy="15" r="4" fill="#06b6d4" />
              <circle cx="140" cy="85" r="5" fill="#ef4444" />
              {/* Repair technician indicator */}
              <circle cx="90" cy="70" r="4" fill="#10b981" />
            </svg>
            <div className="absolute top-3 left-3 bg-slate-900/60 border border-slate-800 px-2 py-0.5 rounded text-[8px] font-mono tracking-widest text-slate-300 flex items-center gap-1.5 uppercase">
              <MapPin className="w-2.5 h-2.5 text-secondary" />
              Route Optimizer
            </div>
            <div className="absolute bottom-3 right-3 font-mono text-[9px] text-slate-500">
              DISPATCHER: ACTIVE
            </div>
          </div>
        );
      case "ai-showcase":
      default:
        return (
          <div className="relative w-full h-48 bg-slate-950/80 rounded-t-xl overflow-hidden flex items-center justify-center border-b border-slate-900">
            {/* Latent Vector embeddings */}
            <div className="absolute inset-0 bg-radial-gradient from-accent/10 to-transparent pointer-events-none" />
            <svg className="w-full h-full p-4" viewBox="0 0 200 100" fill="none">
              {/* Latent space mesh */}
              <circle cx="60" cy="35" r="1.5" fill="#3b82f6" />
              <circle cx="70" cy="65" r="2.5" fill="#3b82f6" />
              <circle cx="110" cy="25" r="2" fill="#8b5cf6" />
              <circle cx="130" cy="75" r="1.5" fill="#8b5cf6" />
              <circle cx="160" cy="45" r="3" fill="#06b6d4" />
              {/* Connection paths */}
              <line x1="60" y1="35" x2="110" y2="25" stroke="#1e293b" strokeWidth="0.5" />
              <line x1="70" y1="65" x2="130" y2="75" stroke="#1e293b" strokeWidth="0.5" />
              <line x1="110" y1="25" x2="160" y2="45" stroke="#1e293b" strokeWidth="0.5" />
              <line x1="130" y1="75" x2="160" y2="45" stroke="#1e293b" strokeWidth="0.5" />
              {/* Centroid clusters */}
              <polygon points="100,45 105,55 95,55" fill="none" stroke="#06b6d4" strokeWidth="1" className="origin-[100px_51px] animate-[spin_6s_linear_infinite]" />
              <circle cx="100" cy="51" r="12" stroke="#06b6d4" strokeWidth="0.5" strokeDasharray="1 3" />
            </svg>
            <div className="absolute top-3 left-3 bg-slate-900/60 border border-slate-800 px-2 py-0.5 rounded text-[8px] font-mono tracking-widest text-slate-300 flex items-center gap-1.5 uppercase">
              <Cpu className="w-2.5 h-2.5 text-accent animate-pulse" />
              Vector Space
            </div>
            <div className="absolute bottom-3 right-3 font-mono text-[9px] text-slate-500">
              PIPELINE: PLANNING
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="relative py-24 bg-transparent border-b border-slate-900/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-20">
          <motion.p 
            className="text-xs uppercase font-mono tracking-widest text-accent mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            02 / Functional Repositories
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-5xl font-extrabold uppercase text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
        </div>

        {/* Project Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projectsData.map((project: Project) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.25, ease: "easeOut" } 
              }}
              className={`glass-card rounded-xl flex flex-col justify-between overflow-hidden group transition-colors duration-300 relative ${
                project.isUpcoming
                  ? "border-2 border-indigo-500/50 hover:border-indigo-400/70 shadow-[0_0_30px_rgba(99,102,241,0.15)]"
                  : "border border-slate-800/80 hover:border-primary/30"
              }`}
            >
              {/* Highlight gradient back-glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Upcoming Project — full-width top banner strip */}
              {project.isUpcoming && (
                <>
                  {/* Top glowing banner */}
                  <div className="w-full bg-gradient-to-r from-indigo-600/20 via-indigo-500/30 to-violet-600/20 border-b border-indigo-500/40 px-4 py-2.5 z-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500" />
                      </span>
                      <span className="text-xs font-bold font-mono tracking-widest text-indigo-300 uppercase">
                        🚀 Upcoming Project
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-indigo-400/70 tracking-wide">Q3 2026</span>
                  </div>

                  {/* Diagonal corner ribbon */}
                  <div className="absolute top-10 -right-6 z-30 rotate-45 bg-indigo-600 text-white text-[9px] font-bold font-mono tracking-widest px-8 py-0.5 shadow-lg uppercase">
                    In Design
                  </div>
                </>
              )}

              <div>
                {/* SVG Visual Schema Cover */}
                {renderProjectSchema(project.id)}

                {/* Details */}
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-[9px] font-mono tracking-wide text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-850"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors font-sans uppercase tracking-tight">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-slate-400 font-light mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights list */}
                  <ul className="flex flex-col gap-2 border-t border-slate-900 pt-5">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-slate-400 font-light text-[11px] leading-normal">
                        <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5 group-hover:text-accent transition-colors" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Interaction Call-to-actions */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3 mt-6">
                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    project.liveUrl.startsWith("/") ? (
                      <Link
                        href={project.liveUrl}
                        className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-all hover:scale-105"
                        title="Live Demo"
                      >
                        <Globe className="w-4 h-4" />
                      </Link>
                    ) : (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-all hover:scale-105"
                        title="Live Demo"
                      >
                        <Globe className="w-4 h-4" />
                      </a>
                    )
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-all hover:scale-105"
                      title="Source Code"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <Link 
                  href={`/case-study/${project.id}`} 
                  className="px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-primary hover:text-white border border-slate-800 hover:border-primary text-xs font-mono font-medium tracking-wide flex items-center gap-1.5 transition-all group-hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] text-slate-300"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{project.isUpcoming ? "System Specs" : "Case Study"}</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
