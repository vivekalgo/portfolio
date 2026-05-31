"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { GitCommit, GitFork, Star, Award, Activity } from "lucide-react";
import { GithubIcon } from "./icons/BrandIcons";

export default function GitHubDashboard() {
  const [tooltip, setTooltip] = useState<{ show: boolean; text: string; x: number; y: number }>({
    show: false,
    text: "",
    x: 0,
    y: 0
  });

  // Generate mock data for the 53x7 contribution grid (1 year of commits)
  const rows = 7;
  const cols = 42; // standard fit for dashboard card size
  
  // Custom helper to generate commit levels
  const gridCells = Array.from({ length: cols }, (_, cIdx) => {
    return Array.from({ length: rows }, (_, rIdx) => {
      const total = cIdx * rows + rIdx;
      // High commit activity zones to look realistic
      let level = 0;
      const seed = Math.sin(total * 0.1) * Math.cos(total * 0.05);
      if (seed > 0.6) level = 4;
      else if (seed > 0.2) level = 3;
      else if (seed > -0.2) level = 2;
      else if (seed > -0.6) level = 1;

      // Randomize weekends
      if (rIdx === 0 || rIdx === 6) {
        level = Math.max(0, level - 2);
      }

      return {
        level,
        commits: level === 0 ? 0 : level === 1 ? Math.floor(Math.random() * 2) + 1 : level === 2 ? Math.floor(Math.random() * 3) + 3 : level === 3 ? Math.floor(Math.random() * 4) + 6 : Math.floor(Math.random() * 5) + 10,
        day: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][rIdx],
        week: cIdx + 1
      };
    });
  });

  const getCellColor = (level: number) => {
    switch (level) {
      case 4: return "bg-emerald-400"; // High
      case 3: return "bg-emerald-600";
      case 2: return "bg-emerald-800";
      case 1: return "bg-emerald-950"; // Low
      case 0:
      default: return "bg-slate-900"; // None
    }
  };

  const handleCellHover = (e: React.MouseEvent, commits: number, day: string, week: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + window.scrollX + rect.width / 2;
    const y = rect.top + window.scrollY - 35;
    
    setTooltip({
      show: true,
      text: `${commits} commits on ${day}, Week ${week}`,
      x,
      y
    });
  };

  const stats = [
    { label: "Total Commits", value: "1,450", icon: <GitCommit className="w-4 h-4 text-emerald-400" /> },
    { label: "Repositories", value: "24", icon: <GitFork className="w-4 h-4 text-primary" /> },
    { label: "Stars Earned", value: "120", icon: <Star className="w-4 h-4 text-yellow-500" /> },
    { label: "Contribution Rate", value: "98.4%", icon: <Award className="w-4 h-4 text-accent" /> }
  ];

  const languages = [
    { name: "TypeScript", share: 38, color: "bg-primary" },
    { name: "Python", share: 35, color: "bg-accent" },
    { name: "JavaScript", share: 15, color: "bg-yellow-500" },
    { name: "HTML/CSS", share: 8, color: "bg-secondary" },
    { name: "Shell", share: 4, color: "bg-slate-500" }
  ];

  return (
    <section className="relative py-24 bg-transparent border-b border-slate-900/60 overflow-hidden">
      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-emerald-500/2 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p 
            className="text-xs uppercase font-mono tracking-widest text-accent mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            05 / Version Control Activity
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-5xl font-extrabold uppercase text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            GitHub Dashboard
          </motion.h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-emerald-500 to-accent mx-auto mt-4" />
        </div>

        {/* Dashboard Shell Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left panel: General stats summary */}
          <div className="lg:col-span-4 flex flex-col gap-4 h-full">
            <div className="glass-card p-6 rounded-xl border border-slate-850 hover:border-emerald-500/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-slate-950 flex items-center justify-center border border-slate-800 text-white">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                    Vivek-Yadav
                  </h3>
                  <p className="text-[10px] text-slate-500 font-mono">
                    github.com/vivek-yadav
                  </p>
                </div>
              </div>

              {/* Grid values */}
              <div className="flex flex-col gap-4">
                {stats.map((stat, sIdx) => (
                  <div key={sIdx} className="flex items-center justify-between p-3 rounded-lg bg-slate-950/60 border border-slate-900">
                    <div className="flex items-center gap-2.5">
                      {stat.icon}
                      <span className="text-[11px] font-mono text-slate-400">{stat.label}</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-white">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Language distribution card */}
            <div className="glass-card p-6 rounded-xl border border-slate-850 flex-1">
              <div className="flex items-center gap-2 mb-6">
                <Activity className="w-4 h-4 text-accent" />
                <span className="text-[10px] uppercase font-mono tracking-widest text-slate-300 font-semibold">
                  Language Metrics
                </span>
              </div>
              <div className="flex flex-col gap-4">
                {/* Horizontal segmented bar */}
                <div className="w-full h-2 rounded-full overflow-hidden flex bg-slate-900">
                  {languages.map((lang) => (
                    <div 
                      key={lang.name} 
                      className={`${lang.color} h-full`} 
                      style={{ width: `${lang.share}%` }} 
                      title={`${lang.name}: ${lang.share}%`}
                    />
                  ))}
                </div>
                {/* Legends list */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-3 pt-2">
                  {languages.map((lang) => (
                    <div key={lang.name} className="flex items-center justify-between text-[10px] font-mono">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${lang.color}`} />
                        <span className="text-slate-400 font-light">{lang.name}</span>
                      </div>
                      <span className="text-slate-500 font-bold">{lang.share}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right panel: Contribution grid map */}
          <div className="lg:col-span-8 glass-card p-6 rounded-xl border border-slate-850 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-900">
                <span className="text-[10px] uppercase font-mono tracking-widest text-slate-300 font-semibold">
                  Annual Contribution Grid
                </span>
                <span className="text-[10px] font-mono text-emerald-400">
                  Active streak: 42 days
                </span>
              </div>

              {/* SVG Grid container */}
              <div className="w-full overflow-x-auto pb-4 scrollbar-thin">
                <div className="flex gap-1 min-w-[500px]">
                  {/* Y-axis days */}
                  <div className="flex flex-col gap-1 justify-between text-[9px] font-mono text-slate-600 pr-2 pt-1">
                    <span>Mon</span>
                    <span>Wed</span>
                    <span>Fri</span>
                  </div>

                  {/* Grid cells mapping */}
                  <div className="flex flex-1 gap-1">
                    {gridCells.map((column, colIdx) => (
                      <div key={colIdx} className="flex flex-col gap-1">
                        {column.map((cell, rowIdx) => (
                          <div
                            key={rowIdx}
                            onMouseEnter={(e) => handleCellHover(e, cell.commits, cell.day, cell.week)}
                            onMouseLeave={() => setTooltip((prev) => ({ ...prev, show: false }))}
                            className={`w-3.5 h-3.5 rounded-sm transition-all duration-150 cursor-pointer ${getCellColor(cell.level)} hover:scale-125 hover:shadow-[0_0_8px_#10b981]`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Grid legend indicators */}
            <div className="flex items-center justify-between text-[9px] font-mono text-slate-500 pt-6 border-t border-slate-900 mt-4">
              <span>Learn velocity calculated daily</span>
              <div className="flex items-center gap-1">
                <span>Less</span>
                <div className="w-2.5 h-2.5 bg-slate-900 rounded-sm" />
                <div className="w-2.5 h-2.5 bg-emerald-950 rounded-sm" />
                <div className="w-2.5 h-2.5 bg-emerald-800 rounded-sm" />
                <div className="w-2.5 h-2.5 bg-emerald-600 rounded-sm" />
                <div className="w-2.5 h-2.5 bg-emerald-400 rounded-sm" />
                <span>More</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Global Tooltip (relative to body) */}
      {tooltip.show && (
        <div 
          className="fixed z-[100] pointer-events-none bg-slate-950 border border-slate-800 px-2 py-1.5 rounded text-[10px] font-mono text-white shadow-xl -translate-x-1/2"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          {tooltip.text}
        </div>
      )}
    </section>
  );
}
