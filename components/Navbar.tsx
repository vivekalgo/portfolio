"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Menu, X, Command, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const triggerCommandPalette = () => {
    window.dispatchEvent(new CustomEvent("toggle-command-palette"));
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Timeline", href: "#timeline" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
  ];

  const navBg = mounted && theme === 'light'
    ? (scrolled ? "rgba(255, 255, 255, 0.55)" : "rgba(255, 255, 255, 0)")
    : (scrolled ? "rgba(10, 15, 30, 0.75)" : "rgba(5, 8, 22, 0)");
    
  const navBorder = mounted && theme === 'light'
    ? (scrolled ? "1px solid rgba(99, 102, 241, 0.12)" : "1px solid rgba(255, 255, 255, 0)")
    : (scrolled ? "1px solid rgba(59, 130, 246, 0.18)" : "1px solid rgba(255, 255, 255, 0)");

  const navShadow = mounted && theme === 'light'
    ? (scrolled ? "0 10px 30px -10px rgba(99, 102, 241, 0.06), 0 0 20px 0 rgba(99, 102, 241, 0.02)" : "none")
    : (scrolled ? "0 10px 30px -10px rgba(0, 0, 0, 0.7), 0 0 20px 0 rgba(59, 130, 246, 0.05)" : "none");

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-40 w-full flex justify-center pointer-events-none"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          className={`pointer-events-auto flex items-center justify-between transition-all duration-300 w-full ${
            scrolled ? "px-6 md:px-8" : "px-6 md:px-12"
          }`}
          animate={{
            width: scrolled ? "90%" : "100%",
            maxWidth: scrolled ? "1200px" : "100%",
            marginTop: scrolled ? "16px" : "0px",
            borderRadius: scrolled ? "9999px" : "0px",
            backgroundColor: navBg,
            backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
            border: navBorder,
            paddingTop: scrolled ? "12px" : "24px",
            paddingBottom: scrolled ? "12px" : "24px",
            boxShadow: navShadow,
          }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 22,
          }}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-transform duration-300 group-hover:rotate-6">
              <Terminal className="w-4 h-4 text-white" />
            </div>
            <span className="font-mono text-sm tracking-widest text-slate-100 group-hover:text-accent transition-colors font-bold">
              VIVEK.DEV
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest text-slate-300 hover:text-white transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action buttons (Command Palette trigger + Mobile burger + Theme switcher) */}
          <div className="flex items-center gap-3">
            {/* Search/Command Console trigger */}
            <button
              onClick={triggerCommandPalette}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-all text-xs font-mono group"
              title="Open console (Ctrl+K)"
            >
              <Command className="w-3.5 h-3.5 group-hover:text-accent transition-colors" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden lg:inline-block bg-slate-950 px-1.5 py-0.5 rounded text-[10px] text-slate-500 border border-slate-800">
                Ctrl K
              </kbd>
            </button>

            {/* Theme switcher */}
            <button
              onClick={toggleTheme}
              className="w-8 h-8 rounded-md bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer flex items-center justify-center shrink-0"
              title={mounted && theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            >
              {mounted && theme === "light" ? (
                <Moon className="w-4 h-4 text-indigo-400" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400 animate-pulse" />
              )}
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-md hover:bg-slate-800/50 text-slate-300 hover:text-slate-100 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </motion.header>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex flex-col justify-between p-6 md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: "easeOut" }}
          >
            <div className="flex flex-col">
              {/* Header inside drawer */}
              <div className="flex items-center justify-between mb-12">
                <span className="font-mono text-sm tracking-widest text-slate-100 font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  MENU
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-md hover:bg-slate-800/50 text-slate-300 hover:text-slate-100 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation links inside drawer */}
              <nav className="flex flex-col gap-6">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-semibold text-slate-300 hover:text-slate-100 tracking-wide transition-colors py-2 border-b border-slate-900 flex items-center justify-between"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <span>{link.name}</span>
                    <span className="text-xs font-mono text-accent">0{idx + 1}</span>
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* Drawer Footer */}
            <div className="border-t border-slate-900 pt-6 flex flex-col gap-4">
              {/* Theme Toggle inside drawer */}
              <div className="flex items-center justify-between py-1">
                <span className="font-mono text-xs text-slate-400 tracking-wider">THEME MODE</span>
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-slate-100 transition-all cursor-pointer"
                >
                  {mounted && theme === "light" ? (
                    <>
                      <Moon className="w-3.5 h-3.5 text-indigo-600" />
                      <span className="text-xs font-mono">Dark Mode</span>
                    </>
                  ) : (
                    <>
                      <Sun className="w-3.5 h-3.5 text-amber-400" />
                      <span className="text-xs font-mono">Light Mode</span>
                    </>
                  )}
                </button>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  triggerCommandPalette();
                }}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center gap-2 font-mono text-sm font-semibold hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-shadow text-white cursor-pointer"
              >
                <Command className="w-4 h-4" />
                Open Dashboard (Ctrl+K)
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
