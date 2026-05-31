"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "8aeca148-699d-4740-be06-f6358223438a",
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Portfolio Contact Form Submission",
          message: formData.message,
          from_name: "Vivek Yadav Portfolio",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch (error) {
      console.error("Error sending message via Web3Forms:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="relative py-24 bg-transparent border-b border-slate-900/60 overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/2 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.p 
            className="text-xs uppercase font-mono tracking-widest text-accent mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            08 / Consultation Gate
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-5xl font-extrabold uppercase text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
        </div>

        {/* Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 max-w-5xl mx-auto items-stretch">
          
          {/* Left panel: Info & coordinates */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-lg font-bold text-white mb-4 uppercase font-sans">
                Start a Conversation
              </h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed mb-10">
                Have a proposal, or looking to hire a full stack engineer to bootstrap your startup product? Send a message, and let's review how we can collaborate.
              </p>

              {/* Coordinates list */}
              <div className="flex flex-col gap-6 mb-12">
                
                {/* Email */}
                <a 
                  href={personalInfo.socials.email}
                  className="flex items-center gap-4 group p-3.5 rounded-lg bg-slate-950/60 border border-slate-900 hover:border-primary/20 hover:bg-slate-900/40 transition-all"
                >
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-primary transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-slate-500 uppercase">Direct Email</p>
                    <p className="text-xs text-white group-hover:text-primary transition-colors">vivekxydv@gmail.com</p>
                  </div>
                </a>

                {/* GitHub */}
                <a 
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 group p-3.5 rounded-lg bg-slate-950/60 border border-slate-900 hover:border-secondary/20 hover:bg-slate-900/40 transition-all"
                >
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-white transition-colors">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-slate-500 uppercase">GitHub Profile</p>
                    <p className="text-xs text-white group-hover:text-secondary transition-colors">github.com/vivekalgo</p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a 
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 group p-3.5 rounded-lg bg-slate-950/60 border border-slate-900 hover:border-accent/20 hover:bg-slate-900/40 transition-all"
                >
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-[#0A66C2] transition-colors">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-slate-500 uppercase">LinkedIn Profile</p>
                    <p className="text-xs text-white group-hover:text-accent transition-colors">linkedin.com/in/vivek-yadav-18bb84351</p>
                  </div>
                </a>

              </div>
            </div>

            {/* Quote block */}
            <div className="p-4 border-l border-accent/20 bg-slate-950/40 text-[10px] font-mono text-slate-500 rounded-r">
              "Building robust, production-grade applications that solve meaningful real-world hurdles is the ultimate engineering goal."
            </div>
          </div>

          {/* Right panel: Dynamic Form */}
          <div className="lg:col-span-7 glass-card p-8 rounded-xl border border-slate-850">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              {/* Form Status Alert (Framer Motion) */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    className="p-4 rounded-lg bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-xs flex items-center gap-3"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    <span>Your proposal has been logged! Vivek will review and respond shortly.</span>
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    className="p-4 rounded-lg bg-red-950/40 border border-red-500/20 text-red-450 text-xs flex items-center gap-3"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Please make sure Name, Email, and Message are filled.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Name field */}
              <div className="flex flex-col">
                <label className="text-[10px] uppercase font-mono tracking-widest text-slate-400 mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Alexis Carter"
                  disabled={status === "sending"}
                  className="w-full bg-slate-950 border border-slate-900 rounded-lg p-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 transition-colors"
                  required
                />
              </div>

              {/* Email field */}
              <div className="flex flex-col">
                <label className="text-[10px] uppercase font-mono tracking-widest text-slate-400 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g. alexis@company.com"
                  disabled={status === "sending"}
                  className="w-full bg-slate-950 border border-slate-900 rounded-lg p-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 transition-colors"
                  required
                />
              </div>

              {/* Subject field */}
              <div className="flex flex-col">
                <label className="text-[10px] uppercase font-mono tracking-widest text-slate-400 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="e.g. Project consultation proposal"
                  disabled={status === "sending"}
                  className="w-full bg-slate-950 border border-slate-900 rounded-lg p-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              {/* Message field */}
              <div className="flex flex-col">
                <label className="text-[10px] uppercase font-mono tracking-widest text-slate-400 mb-2">Message *</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your project goals or inquiry..."
                  disabled={status === "sending"}
                  className="w-full bg-slate-950 border border-slate-900 rounded-lg p-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  required
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3.5 rounded-lg bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all flex items-center justify-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-white disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Transmitting logs...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
