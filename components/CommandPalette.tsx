"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, Terminal, FileText, ArrowRight, Mail, Cpu, FolderOpen, User, PhoneCall,
  Sparkles, Layers
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import { personalInfo } from "../data/portfolioData";

interface Option {
  id: string;
  name: string;
  category: "Navigation" | "Socials" | "Actions";
  description: string;
  icon: React.ReactNode;
  action: () => void;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  const options: Option[] = [
    {
      id: "nav-about",
      name: "Go to About Section",
      category: "Navigation",
      description: "Learn more about Vivek's qualifications and passion",
      icon: <User className="w-4 h-4 text-primary" />,
      action: () => scrollToSection("about")
    },
    {
      id: "nav-projects",
      name: "Go to Projects",
      category: "Navigation",
      description: "Explore Vivek's featured works and AI systems",
      icon: <FolderOpen className="w-4 h-4 text-accent" />,
      action: () => scrollToSection("projects")
    },
    {
      id: "nav-skills",
      name: "Go to Skills",
      category: "Navigation",
      description: "Inspect technical competencies across sectors",
      icon: <Cpu className="w-4 h-4 text-secondary" />,
      action: () => scrollToSection("skills")
    },
    {
      id: "nav-timeline",
      name: "Go to Timeline",
      category: "Navigation",
      description: "Track Vivek's professional learning milestone path",
      icon: <Terminal className="w-4 h-4 text-slate-400" />,
      action: () => scrollToSection("timeline")
    },
    {
      id: "nav-services",
      name: "Go to Services",
      category: "Navigation",
      description: "View specialized software builder offerings",
      icon: <Layers className="w-4 h-4 text-primary" />,
      action: () => scrollToSection("services")
    },
    {
      id: "nav-contact",
      name: "Go to Contact Form",
      category: "Navigation",
      description: "Send a direct message or secure hire inquiry",
      icon: <PhoneCall className="w-4 h-4 text-accent" />,
      action: () => scrollToSection("contact")
    },
    {
      id: "social-github",
      name: "Open GitHub Profile",
      category: "Socials",
      description: "Inspect repository activity and open-source contributions",
      icon: <GithubIcon className="w-4 h-4 text-white" />,
      action: () => openLink(personalInfo.socials.github)
    },
    {
      id: "social-linkedin",
      name: "Open LinkedIn Profile",
      category: "Socials",
      description: "Connect or review experience milestones on LinkedIn",
      icon: <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />,
      action: () => openLink(personalInfo.socials.linkedin)
    },
    {
      id: "social-email",
      name: "Send Direct Email",
      category: "Socials",
      description: "Draft an email to: vivekxydv@gmail.com",
      icon: <Mail className="w-4 h-4 text-red-400" />,
      action: () => openLink(personalInfo.socials.email)
    },
    {
      id: "action-resume",
      name: "Download PDF Resume",
      category: "Actions",
      description: "Get the latest standard engineering CV copy",
      icon: <FileText className="w-4 h-4 text-yellow-500" />,
      action: () => openLink(personalInfo.socials.resume)
    },
    {
      id: "action-hire",
      name: "Initiate Project Proposal",
      category: "Actions",
      description: "Instantly jump to project consultation form fields",
      icon: <Sparkles className="w-4 h-4 text-purple-400" />,
      action: () => scrollToSection("contact")
    }
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openLink = (url: string) => {
    setIsOpen(false);
    window.open(url, "_blank");
  };

  // Listen for hotkeys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleToggleEvent = () => {
      setIsOpen((prev) => !prev);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("toggle-command-palette", handleToggleEvent);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("toggle-command-palette", handleToggleEvent);
    };
  }, []);

  // Autofocus input when palette opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Handle arrow key selection mapping
  const filtered = options.filter(
    (opt) =>
      opt.name.toLowerCase().includes(query.toLowerCase()) ||
      opt.category.toLowerCase().includes(query.toLowerCase()) ||
      opt.description.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleListKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filtered.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % Math.max(1, filtered.length));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        filtered[selectedIndex].action();
      }
    }
  };

  // Scroll active list item into view if necessary
  useEffect(() => {
    if (listRef.current) {
      const activeEl = listRef.current.children[selectedIndex] as HTMLElement;
      if (activeEl) {
        const listHeight = listRef.current.clientHeight;
        const activeTop = activeEl.offsetTop;
        const activeHeight = activeEl.clientHeight;

        if (activeTop + activeHeight > listRef.current.scrollTop + listHeight) {
          listRef.current.scrollTop = activeTop + activeHeight - listHeight;
        } else if (activeTop < listRef.current.scrollTop) {
          listRef.current.scrollTop = activeTop;
        }
      }
    }
  }, [selectedIndex]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
          {/* Backdrop Blur */}
          <motion.div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />

          {/* Dialog Container */}
          <motion.div
            className="w-full max-w-xl rounded-xl border border-slate-800 bg-[#090D1C] shadow-2xl overflow-hidden glass-card z-10"
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            onKeyDown={handleListKeyDown}
          >
            {/* Input search */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-800">
              <Search className="w-5 h-5 text-slate-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Type a command or search sections..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-white placeholder-slate-500 text-sm focus:outline-none"
              />
              <button 
                onClick={() => setIsOpen(false)}
                className="text-[10px] uppercase font-mono text-slate-500 hover:text-white px-1.5 py-0.5 border border-slate-800 rounded bg-slate-950 shrink-0"
              >
                esc
              </button>
            </div>

            {/* Options list */}
            <div 
              ref={listRef}
              className="max-h-[320px] overflow-y-auto p-2 flex flex-col gap-1"
            >
              {filtered.length > 0 ? (
                filtered.map((opt, index) => {
                  const isActive = index === selectedIndex;
                  return (
                    <div
                      key={opt.id}
                      onClick={() => opt.action()}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer transition-all ${
                        isActive 
                          ? "bg-slate-800/80 text-white shadow-inner" 
                          : "text-slate-300 hover:bg-slate-900/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-1.5 rounded-md ${isActive ? "bg-slate-950" : "bg-slate-900/80"}`}>
                          {opt.icon}
                        </div>
                        <div>
                          <p className="text-xs font-semibold font-mono tracking-wide">{opt.name}</p>
                          <p className="text-[10px] text-slate-500 mt-0.5">{opt.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500 border border-slate-800/50 bg-slate-950/30 px-1.5 py-0.5 rounded">
                          {opt.category}
                        </span>
                        {isActive && (
                          <ArrowRight className="w-3.5 h-3.5 text-accent animate-pulse" />
                        )}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="py-12 text-center">
                  <Terminal className="w-8 h-8 text-slate-600 mx-auto mb-2 animate-bounce" />
                  <p className="text-xs text-slate-500 font-mono">No matching console commands found</p>
                </div>
              )}
            </div>

            {/* Footer hints */}
            <div className="flex items-center justify-between px-4 py-2 border-t border-slate-900 bg-slate-950/40 text-[10px] text-slate-500 font-mono">
              <div className="flex items-center gap-3">
                <span>↑↓ Navigate</span>
                <span>↵ Enter</span>
              </div>
              <div>
                <span>Active Console v1.0</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
