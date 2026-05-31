"use client";
import React from "react";
import { Terminal, Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#02040d] border-t border-slate-900/60 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Logo & copyright */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center">
            <Terminal className="w-3.5 h-3.5 text-white" />
          </div>
          <div className="text-left">
            <p className="text-[10px] font-mono font-bold tracking-widest text-white uppercase">
              VIVEK.DEV
            </p>
            <p className="text-[9px] text-slate-500 font-mono mt-0.5">
              © {currentYear} Vivek Yadav. All rights reserved.
            </p>
          </div>
        </div>

        {/* Center: Navigation jumps */}
        <nav className="flex items-center gap-6 text-[10px] uppercase font-mono tracking-widest">
          <a href="#about" className="text-slate-400 hover:text-white transition-colors">About</a>
          <a href="#projects" className="text-slate-400 hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="text-slate-400 hover:text-white transition-colors">Skills</a>
          <a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a>
        </nav>

        {/* Right: Social links & Scroll Up button */}
        <div className="flex items-center gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a 
              href={personalInfo.socials.github} 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-500 hover:text-white transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a 
              href={personalInfo.socials.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-500 hover:text-[#0A66C2] transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a 
              href={personalInfo.socials.email} 
              className="text-slate-500 hover:text-red-400 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Scroll top */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded bg-slate-950 border border-slate-900 text-slate-400 hover:text-white hover:border-primary/50 transition-all cursor-pointer"
            title="Scroll to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
