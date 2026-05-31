"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  Smartphone,
  Copy,
  CheckCheck,
  ArrowLeft,
  KeyRound,
  Phone,
  Globe,
} from "lucide-react";
import Link from "next/link";

const APK_URL = "/customer.apk";

export default function LocalCommerceDemo() {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedOtp, setCopiedOtp] = useState(false);

  const copy = (text: string, setter: (v: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setter(true);
    setTimeout(() => setter(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#050816] text-white relative overflow-hidden">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-violet-700/10 blur-[100px]" />
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full bg-cyan-600/8 blur-[90px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 py-16">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors mb-12 tracking-widest uppercase"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Portfolio
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-14"
        >
          {/* App icon */}
          <div className="relative mx-auto w-20 h-20 mb-6">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 opacity-20 blur-xl" />
            <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-700 flex items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.4)]">
              <Smartphone className="w-9 h-9 text-white" />
            </div>
          </div>

          <p className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-3">
            Android APK · v1.0.0
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-4">
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              QUICKFIX
            </span>
          </h1>
          <p className="text-base text-slate-400 leading-relaxed max-w-md mx-auto">
            Hyperlocal service platform — connecting customers with nearby shops,
            vendors, and repair technicians in real-time.
          </p>
        </motion.div>

        {/* Live Web Demo Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-2xl border border-cyan-500/30 bg-slate-950/70 backdrop-blur-xl p-8 mb-6 shadow-[0_0_50px_rgba(6,182,212,0.1)] relative overflow-hidden group hover:border-cyan-400/50 transition-all duration-300"
        >
          {/* Subtle decoration glows */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                </span>
                <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
                  Web Application
                </span>
              </div>
              <h2 className="text-xl font-bold tracking-tight text-white mb-2">
                Live Website Demo
              </h2>
              <p className="text-xs text-slate-400 max-w-sm">
                Explore the customer marketplace and service dashboard directly from your web browser.
              </p>
            </div>
            
            <a
              href="https://magical-gelato-5aa64b.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-gradient-to-br from-cyan-950 to-slate-900 hover:from-cyan-900 hover:to-slate-800 border border-cyan-500/30 hover:border-cyan-400 text-cyan-400 hover:text-cyan-300 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:-translate-y-1 hover:scale-105 flex items-center justify-center shrink-0"
              title="Launch Web App"
            >
              <Globe className="w-6 h-6 animate-[spin_8s_linear_infinite]" />
            </a>
          </div>
        </motion.div>

        {/* Download Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl border border-indigo-500/35 bg-slate-950/70 backdrop-blur-xl p-8 mb-6 shadow-[0_0_50px_rgba(99,102,241,0.08)] relative overflow-hidden group hover:border-indigo-400/50 transition-all duration-300"
        >
          {/* Subtle decoration glows */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
                </span>
                <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase">
                  Android Application
                </span>
              </div>
              <h2 className="text-xl font-bold tracking-tight text-white mb-2">
                QuickFix Customer App
              </h2>
              <p className="text-xs text-slate-400 max-w-sm">
                Download and install the mobile app directly to access hyperlocal services on the go.
              </p>
            </div>
            
            <a
              href={APK_URL}
              download="customer.apk"
              className="p-4 rounded-xl bg-gradient-to-br from-indigo-950 to-slate-900 hover:from-indigo-900 hover:to-slate-800 border border-indigo-500/30 hover:border-indigo-400 text-indigo-400 hover:text-indigo-300 transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.15)] hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:-translate-y-1 hover:scale-105 flex items-center justify-center shrink-0 group-hover:scale-105"
              title="Download APK"
            >
              <Download className="w-6 h-6" />
            </a>
          </div>
        </motion.div>


        {/* Demo Credentials Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-2xl border border-cyan-500/20 bg-slate-950/70 backdrop-blur-xl p-8 shadow-[0_0_40px_rgba(6,182,212,0.05)]"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-cyan-300 uppercase">
              Demo Login Credentials
            </span>
          </div>

          <p className="text-sm text-slate-400 mb-6 leading-relaxed">
            Use these credentials to explore the app — no sign-up required.
          </p>

          {/* Phone Number */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Phone className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
                Phone Number
              </span>
            </div>
            <div className="flex items-center justify-between bg-slate-900/80 border border-slate-800 rounded-lg px-4 py-3.5">
              <span className="font-mono text-lg font-bold text-white tracking-widest">
                1234567890
              </span>
              <button
                onClick={() => copy("1234567890", setCopiedPhone)}
                className="text-slate-500 hover:text-white transition-colors"
                title="Copy phone number"
              >
                {copiedPhone ? (
                  <CheckCheck className="w-4 h-4 text-cyan-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* OTP */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <KeyRound className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
                OTP Code
              </span>
            </div>
            <div className="flex items-center justify-between bg-slate-900/80 border border-slate-800 rounded-lg px-4 py-3.5">
              <div className="flex items-center gap-2">
                {["1", "2", "3", "4", "5", "6"].map((d, i) => (
                  <span
                    key={i}
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-800 border border-slate-700 font-mono text-base font-bold text-cyan-400"
                  >
                    {d}
                  </span>
                ))}
              </div>
              <button
                onClick={() => copy("123456", setCopiedOtp)}
                className="ml-3 text-slate-500 hover:text-white transition-colors"
                title="Copy OTP"
              >
                {copiedOtp ? (
                  <CheckCheck className="w-4 h-4 text-cyan-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          <div className="mt-6 rounded-lg bg-yellow-500/5 border border-yellow-500/15 px-4 py-3 flex items-start gap-3">
            <span className="text-yellow-400 text-sm mt-0.5">⚠️</span>
            <p className="text-[11px] text-yellow-300/70 font-mono leading-relaxed">
              This is a demo environment with seeded data. Any orders or bookings
              placed will not trigger real payments or deliveries.
            </p>
          </div>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-[10px] font-mono text-slate-700 mt-10 tracking-widest"
        >
          VIVEK.DEV · QUICKFIX HYPERLOCAL PLATFORM · v1.0.0
        </motion.p>
      </div>
    </main>
  );
}
