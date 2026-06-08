"use client";
import React, { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowLeft, Cpu, Terminal, Shield, Network,
  AlertTriangle, CheckCircle, Database, HardDrive, Compass,
  Smartphone, Laptop, Activity, TrendingUp
} from "lucide-react";
import { projectsData } from "@/data/portfolioData";
import CustomCursor from "@/components/CustomCursor";
import ParticleBackground from "@/components/ParticleBackground";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function CaseStudyPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const { id } = resolvedParams;

  const project = projectsData.find((p) => p.id === id);

  if (!project || !project.caseStudy) {
    return (
      <main className="min-h-screen bg-background text-text flex flex-col items-center justify-center p-6 relative transition-colors duration-300">
        <ParticleBackground />
        <div className="text-center z-10 glass-card p-8 rounded-xl border border-slate-800 max-w-md">
          <Terminal className="w-12 h-12 text-accent mx-auto mb-4 animate-bounce" />
          <h1 className="text-2xl font-mono font-bold mb-2 uppercase">Project Logs Missing</h1>
          <p className="text-xs text-slate-500 mb-6">The requested project case study could not be located in local memory archives.</p>
          <Link href="/" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-accent text-xs font-mono font-bold text-white">
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
        </div>
      </main>
    );
  }

  const { 
    problem, 
    solution, 
    techStack, 
    challenges, 
    architecture, 
    results,
    overview,
    oneLineSummary,
    systemFlow,
    whyTechChosen,
    engineeringChallenges,
    securityFeatures,
    performanceResults,
    whatILearned,
    databaseDesign,
    apiStructure,
    aiMlPipeline,
    whatIBuiltPersonally,
    futureImprovements,
    technicalDeepDive,
    footerInfo
  } = project.caseStudy;

  // Render a full-scale schematic architectural diagram based on project ID
  const renderArchitectureDiagram = (id: string) => {
    switch (id) {
      case "aisentinel-india":
        return (
          <div className="w-full glass-card p-6 rounded-xl border border-slate-850 bg-slate-950/40 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-900 pb-3 mb-6">
              <span className="text-[9px] font-mono text-accent uppercase tracking-widest flex items-center gap-1.5">
                <Network className="w-3.5 h-3.5 animate-pulse" />
                RAG Contract Compliance & Key Rotation Schema
              </span>
              <span className="text-[8px] font-mono text-slate-500">SYS_V2.5_LEGAL_RAG</span>
            </div>
            
            <svg className="w-full h-auto min-h-[220px]" viewBox="0 0 600 240" fill="none">
              {/* Box 1: File Upload Ingest */}
              <rect x="20" y="40" width="110" height="50" rx="6" fill="#0f172a" stroke="#3b82f6" strokeWidth="1" />
              <text x="75" y="62" fill="#fff" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">PDF / DOCX Ingest</text>
              <text x="75" y="74" fill="#94a3b8" fontSize="7" fontFamily="monospace" textAnchor="middle">(Client Upload)</text>

              {/* Arrow 1: Ingest to Extractor */}
              <line x1="130" y1="65" x2="190" y2="65" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 3" />
              <polygon points="190,65 184,61 184,69" fill="#3b82f6" />
              <text x="160" y="56" fill="#06b6d4" fontSize="7.5" fontFamily="monospace" textAnchor="middle">REST Multipart</text>

              {/* Box 2: Clause Parsing & Classifier */}
              <rect x="190" y="40" width="110" height="50" rx="6" fill="#0f172a" stroke="#8b5cf6" strokeWidth="1" />
              <text x="245" y="62" fill="#fff" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Text Extractor</text>
              <text x="245" y="74" fill="#8b5cf6" fontSize="7" fontFamily="monospace" textAnchor="middle">pdfplumber &amp; docx</text>

              {/* Arrow 2: Extractor to In-Memory Store */}
              <line x1="300" y1="65" x2="360" y2="65" stroke="#8b5cf6" strokeWidth="1" />
              <polygon points="360,65 354,61 354,69" fill="#8b5cf6" />
              <text x="330" y="56" fill="#a855f7" fontSize="7.5" fontFamily="monospace" textAnchor="middle">Regex Split</text>

              {/* Box 3: In-Memory Vector Store & Cosine Similarity */}
              <rect x="360" y="25" width="220" height="80" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
              <text x="470" y="42" fill="#fff" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">IN-MEMORY STORE</text>
              <text x="470" y="56" fill="#10b981" fontSize="8" fontFamily="monospace" textAnchor="middle">NumPy Cosine Similarity</text>
              <text x="470" y="68" fill="#94a3b8" fontSize="7" fontFamily="monospace" textAnchor="middle">(Indian Contract Act reference)</text>
              <text x="470" y="80" fill="#ef4444" fontSize="7" fontFamily="monospace" textAnchor="middle">Deterministic MD5 Fallback</text>

              {/* Arrow 3 (Retrieved Context path: Box 3 bottom-left -> down -> left -> down to Box 4) */}
              <path d="M400 105 L400 125 L195 125 L195 150" stroke="#10b981" strokeWidth="1.25" strokeDasharray="3 3" fill="none" />
              <polygon points="195,150 191,144 199,144" fill="#10b981" />
              <text x="297.5" y="120" fill="#10b981" fontSize="7.5" fontFamily="monospace" textAnchor="middle">Retrieved Context</text>

              {/* Query Connection (Box 5 to Box 3 vertical dashed line) */}
              <line x1="480" y1="150" x2="480" y2="105" stroke="#10b981" strokeWidth="1" strokeDasharray="2 2" />
              <polygon points="480,105 476,111 484,111" fill="#10b981" />
              <text x="490" y="131" fill="#10b981" fontSize="7" fontFamily="monospace" textAnchor="start">Query / Search</text>

              {/* Box 4: API Key Rotation Pool */}
              <rect x="110" y="150" width="170" height="60" rx="8" fill="#0f172a" stroke="#f97316" strokeWidth="1.5" />
              <text x="195" y="168" fill="#fff" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">API KEY MANAGER</text>
              <text x="195" y="180" fill="#f97316" fontSize="7.5" fontFamily="monospace" textAnchor="middle">GeminiAPIKeyManager (Pool)</text>
              <text x="195" y="192" fill="#e2e8f0" fontSize="7" fontFamily="monospace" textAnchor="middle">Auto Key Failover on 429</text>

              {/* Arrow 4 (Gemini manager sending synthesized response to React UI) */}
              <line x1="280" y1="180" x2="380" y2="180" stroke="#f97316" strokeWidth="1.25" />
              <polygon points="380,180 374,176 374,184" fill="#f97316" />
              <text x="330" y="173" fill="#f97316" fontSize="7.5" fontFamily="monospace" textAnchor="middle">LLM Synthesis</text>

              {/* Box 5: React UI Dashboard */}
              <rect x="380" y="150" width="200" height="60" rx="6" fill="#0f172a" stroke="#06b6d4" strokeWidth="1" />
              <text x="480" y="168" fill="#fff" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Vite &amp; React Dashboard</text>
              <text x="480" y="180" fill="#94a3b8" fontSize="7.5" fontFamily="monospace" textAnchor="middle">(General, HR &amp; Salary Views)</text>
              <text x="480" y="192" fill="#06b6d4" fontSize="7.5" fontFamily="monospace" textAnchor="middle">RAG Q&amp;A Panel</text>

              {/* Path from Box 1 to Key Manager / Backend */}
              <path d="M75 90 L75 180 L110 180" stroke="#475569" strokeWidth="1" fill="none" />
              <polygon points="110,180 104,176 104,184" fill="#475569" />
            </svg>
          </div>
        );
      case "local-commerce":
        return (
          <div className="w-full glass-card p-6 rounded-xl border border-slate-850 bg-slate-950/40 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-900 pb-3 mb-6">
              <span className="text-[9px] font-mono text-accent uppercase tracking-widest flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 animate-pulse" />
                Hyperlocal Dispatch Matching Architecture
              </span>
              <span className="text-[8px] font-mono text-slate-500">SYS_V2.0_LOCATIONAL</span>
            </div>
            <svg className="w-full h-auto min-h-[180px]" viewBox="0 0 400 180" fill="none">
              {/* Box: Customer UI */}
              <rect x="10" y="20" width="90" height="40" rx="6" fill="#0f172a" stroke="#3b82f6" strokeWidth="1" />
              <text x="55" y="40" fill="#fff" fontSize="8" fontFamily="monospace" textAnchor="middle">Customer Web Portal</text>
              <text x="55" y="50" fill="#94a3b8" fontSize="6" fontFamily="monospace" textAnchor="middle">(Next.js 15 Client)</text>

              {/* Box: Merchant dashboard */}
              <rect x="10" y="100" width="90" height="40" rx="6" fill="#0f172a" stroke="#8b5cf6" strokeWidth="1" />
              <text x="55" y="120" fill="#fff" fontSize="8" fontFamily="monospace" textAnchor="middle">Vendor Console</text>
              <text x="55" y="130" fill="#94a3b8" fontSize="6" fontFamily="monospace" textAnchor="middle">(Inventory Sync)</text>

              {/* Lines to backend API */}
              <line x1="100" y1="40" x2="140" y2="70" stroke="#3b82f6" strokeWidth="1" />
              <line x1="100" y1="120" x2="140" y2="90" stroke="#8b5cf6" strokeWidth="1" />

              {/* Central Box: Supabase / Edge Matcher */}
              <rect x="140" y="50" width="120" height="60" rx="8" fill="#0f172a" stroke="#06b6d4" strokeWidth="1.5" />
              <text x="200" y="70" fill="#fff" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">SUPABASE ENGINE</text>
              <text x="200" y="85" fill="#06b6d4" fontSize="7" fontFamily="monospace" textAnchor="middle">PostGIS Radius Matcher</text>
              <text x="200" y="98" fill="#94a3b8" fontSize="7" fontFamily="monospace" textAnchor="middle">Trigger Workers queue</text>

              {/* Arrow to Stripe */}
              <line x1="200" y1="110" x2="200" y2="135" stroke="#475569" strokeWidth="1" strokeDasharray="2 2" />
              <polygon points="200,135 197,130 203,130" fill="#475569" />
              <rect x="155" y="135" width="90" height="30" rx="4" fill="#0f172a" stroke="#475569" strokeWidth="1" />
              <text x="200" y="152" fill="#94a3b8" fontSize="8" fontFamily="monospace" textAnchor="middle">Stripe Split Payments</text>

              {/* Link from Matcher to Driver dispatch */}
              <line x1="260" y1="80" x2="300" y2="80" stroke="#10b981" strokeWidth="1" />
              <polygon points="300,80 295,77 295,83" fill="#10b981" />

              {/* Box: Driver tracking App */}
              <rect x="300" y="60" width="90" height="40" rx="6" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
              <text x="345" y="80" fill="#fff" fontSize="8" fontFamily="monospace" textAnchor="middle">Driver Network</text>
              <text x="345" y="90" fill="#94a3b8" fontSize="6" fontFamily="monospace" textAnchor="middle">(Real-time Map Channels)</text>
            </svg>
          </div>
        );
      case "ai-showcase":
      default:
        return (
          <div className="w-full glass-card p-6 rounded-xl border border-slate-850 bg-slate-950/40 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-900 pb-3 mb-6">
              <span className="text-[9px] font-mono text-accent uppercase tracking-widest flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 animate-pulse" />
                Retrieval-Augmented Generation Schematic
              </span>
              <span className="text-[8px] font-mono text-slate-500">SYS_V3.0_RAG</span>
            </div>
            <svg className="w-full h-auto min-h-[180px]" viewBox="0 0 400 180" fill="none">
              {/* Box: Upload File */}
              <rect x="10" y="20" width="70" height="30" rx="4" fill="#0f172a" stroke="#3b82f6" strokeWidth="1" />
              <text x="45" y="38" fill="#fff" fontSize="8" fontFamily="monospace" textAnchor="middle">PDF Document</text>

              {/* Arrow to Parser */}
              <line x1="80" y1="35" x2="100" y2="35" stroke="#3b82f6" strokeWidth="1" />
              <polygon points="100,35 95,32 95,38" fill="#3b82f6" />

              {/* Box: Chunk / Embed */}
              <rect x="100" y="15" width="90" height="40" rx="6" fill="#0f172a" stroke="#8b5cf6" strokeWidth="1" />
              <text x="145" y="35" fill="#fff" fontSize="8" fontFamily="monospace" textAnchor="middle">Chuncker / Text Embed</text>
              <text x="145" y="45" fill="#8b5cf6" fontSize="6" fontFamily="monospace" textAnchor="middle">(HuggingFace Model)</text>

              {/* Arrow to Vector Database */}
              <line x1="190" y1="35" x2="210" y2="35" stroke="#8b5cf6" strokeWidth="1" />
              <polygon points="210,35 205,32 205,38" fill="#8b5cf6" />

              {/* Database: Pinecone Vector Database */}
              <rect x="210" y="10" width="80" height="50" rx="6" fill="#0f172a" stroke="#06b6d4" strokeWidth="1.5" />
              <text x="250" y="32" fill="#fff" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">VECTOR DB</text>
              <text x="250" y="42" fill="#06b6d4" fontSize="7" fontFamily="monospace" textAnchor="middle">Pinecone/PGVector</text>
              <text x="250" y="52" fill="#94a3b8" fontSize="6" fontFamily="monospace" textAnchor="middle">(Embedding Index)</text>

              {/* Query loop */}
              <rect x="60" y="95" width="80" height="40" rx="6" fill="#0f172a" stroke="#3b82f6" strokeWidth="1" />
              <text x="100" y="115" fill="#fff" fontSize="8" fontFamily="monospace" textAnchor="middle">User Query</text>
              <text x="100" y="125" fill="#94a3b8" fontSize="6" fontFamily="monospace" textAnchor="middle">(Natural Language)</text>

              {/* Similarity fetch arrow */}
              <path d="M140 115 L250 115 L250 60" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3 3" />
              <polygon points="250,60 247,65 253,65" fill="#06b6d4" />
              <text x="200" y="110" fill="#06b6d4" fontSize="6" fontFamily="monospace" textAnchor="middle">Cosine Similarity Fetch</text>

              {/* Retrieval package arrow */}
              <path d="M210 35 L50 35 L50 95" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="3 3" />
              
              {/* Synthesis context node */}
              <rect x="280" y="90" width="110" height="50" rx="8" fill="#0f172a" stroke="#ef4444" strokeWidth="1" />
              <text x="335" y="110" fill="#fff" fontSize="8" fontFamily="monospace" textAnchor="middle">LLM Synthesis Engine</text>
              <text x="335" y="120" fill="#94a3b8" fontSize="6" fontFamily="monospace" textAnchor="middle">(Prompt context injected)</text>
              <text x="335" y="130" fill="#ef4444" fontSize="6" fontFamily="monospace" textAnchor="middle">(OpenAI/Llama API)</text>

              {/* Match vector to Prompt synthesis */}
              <line x1="140" y1="115" x2="280" y2="115" stroke="#ef4444" strokeWidth="1" />
              <polygon points="280,115 275,112 275,118" fill="#ef4444" />
            </svg>
          </div>
        );
    }
  };

  const renderMultiAppEcosystem = () => {
    return (
      <div className="flex flex-col gap-12 mt-12 border-t border-slate-900 pt-12">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes flowPulseCyan {
            0% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: -20; }
          }
          @keyframes flowPulseIndigo {
            0% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: -20; }
          }
          @keyframes flowPulseEmerald {
            0% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: -20; }
          }
          .animate-flow-cyan {
            stroke-dasharray: 6 4;
            animation: flowPulseCyan 1.2s linear infinite;
          }
          .animate-flow-indigo {
            stroke-dasharray: 6 4;
            animation: flowPulseIndigo 1s linear infinite;
          }
          .animate-flow-emerald {
            stroke-dasharray: 6 4;
            animation: flowPulseEmerald 0.8s linear infinite;
          }
        `}} />

        {/* Section Header */}
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-[10px] font-mono uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
            System Blueprint V3.0
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight uppercase mb-4">
            Multi-App Ecosystem Architecture
          </h2>
          <p className="text-xs md:text-sm text-slate-400 font-light leading-relaxed max-w-2xl">
            QuickFix is engineered as a robust, three-tiered application network. Instead of a single standalone app, it integrates a client-facing portal, provider-dispatch tooling, and a central administration dashboard, synchronizing operations in real time.
          </p>
        </div>

        {/* ECOSYSTEM APPS SHOWCASE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Customer App */}
          <div className="glass-card border border-slate-850 p-6 rounded-xl flex flex-col justify-between hover:border-cyan-500/35 transition-colors duration-300 relative group overflow-hidden bg-slate-950/20">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl" />
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-cyan-950/60 rounded-lg border border-cyan-500/20 text-cyan-400">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wide">Customer App</h3>
              </div>
              <p className="text-[10px] font-mono text-slate-500 uppercase mb-2">Target Users: Consumers / End-Users</p>
              <p className="text-xs text-slate-300 leading-relaxed mb-6 font-light">
                Designed for speed and discoverability, enabling users to find nearby shops, select repair categories, track technicians on live maps, and complete bookings.
              </p>

              {/* Mockup Container */}
              <div className="w-full h-44 bg-slate-950 border border-slate-900 rounded-lg p-2.5 overflow-hidden relative mb-6 shadow-inner">
                {/* Mobile UI shell */}
                <div className="w-full h-full border border-slate-850 rounded-md bg-slate-900/60 p-2 flex flex-col justify-between text-[8px] font-mono">
                  {/* Top Bar */}
                  <div className="flex justify-between items-center text-slate-500 border-b border-slate-850 pb-1.5 mb-1.5">
                    <span>⚡ QuickFix Client</span>
                    <span className="text-cyan-400 animate-pulse">● Live</span>
                  </div>
                  {/* Search box */}
                  <div className="bg-slate-950 border border-slate-850 rounded px-2 py-1 mb-2 text-slate-400 flex items-center justify-between">
                    <span>Search repairs & service...</span>
                    <span>🔍</span>
                  </div>
                  {/* Service list */}
                  <div className="grid grid-cols-2 gap-1.5 mb-2">
                    <div className="bg-cyan-950/30 border border-cyan-500/20 rounded p-1 text-center">
                      <span className="text-cyan-300 block font-bold">AC Repair</span>
                      <span className="text-[6px] text-slate-500">24 Providers</span>
                    </div>
                    <div className="bg-indigo-950/30 border border-indigo-500/20 rounded p-1 text-center">
                      <span className="text-indigo-300 block font-bold">Electrical</span>
                      <span className="text-[6px] text-slate-500">18 Providers</span>
                    </div>
                  </div>
                  {/* Map tracking mock */}
                  <div className="flex-1 bg-slate-950 border border-slate-850 rounded p-1.5 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute inset-0 bg-cyan-500/5 animate-pulse" />
                    <div className="text-slate-400 text-[6px]">Active Technician Tracking</div>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-emerald-400 font-sans font-bold">Arriving in 8 mins</span>
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Features list */}
              <div className="space-y-1.5">
                <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block mb-2">Core Features:</span>
                {[
                  "User Registration & Login",
                  "Browse Service Categories",
                  "Search Nearby Providers",
                  "Book Services",
                  "Track Booking Status",
                  "Real-time Notifications",
                  "Order History",
                  "Secure Payments",
                  "Profile Management",
                  "Ratings & Reviews"
                ].map(f => (
                  <div key={f} className="flex items-center gap-1.5 text-[10px] text-slate-300 font-mono">
                    <span className="text-cyan-400">✓</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Provider App */}
          <div className="glass-card border border-slate-850 p-6 rounded-xl flex flex-col justify-between hover:border-indigo-500/35 transition-colors duration-300 relative group overflow-hidden bg-slate-950/20">
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-xl" />
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-indigo-950/60 rounded-lg border border-indigo-500/20 text-indigo-400">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wide">Provider App</h3>
              </div>
              <p className="text-[10px] font-mono text-slate-500 uppercase mb-2">Target Users: Technicians / Businesses</p>
              <p className="text-xs text-slate-300 leading-relaxed mb-6 font-light">
                Empowers professionals to configure operational radius, manage dynamic inventory, respond to customer requests, track daily earnings, and optimize routing.
              </p>

              {/* Mockup Container */}
              <div className="w-full h-44 bg-slate-950 border border-slate-900 rounded-lg p-2.5 overflow-hidden relative mb-6 shadow-inner">
                {/* Mobile UI shell */}
                <div className="w-full h-full border border-slate-850 rounded-md bg-slate-900/60 p-2 flex flex-col justify-between text-[8px] font-mono">
                  {/* Top Bar */}
                  <div className="flex justify-between items-center text-slate-500 border-b border-slate-850 pb-1.5 mb-1.5">
                    <span>⚡ QuickFix Provider</span>
                    <span className="text-indigo-400 animate-pulse">● Available</span>
                  </div>
                  {/* Earnings card */}
                  <div className="bg-indigo-950/40 border border-indigo-500/20 rounded p-1.5 mb-2 flex justify-between items-center">
                    <div>
                      <span className="text-[6px] text-slate-400 block">Today's Earnings</span>
                      <span className="text-white font-bold">$340.50</span>
                    </div>
                    <span className="text-emerald-400 text-[6px]">↑ 12% vs yest.</span>
                  </div>
                  {/* Job Dispatch Alert Mockup */}
                  <div className="flex-1 bg-slate-950 border border-slate-850 rounded p-2 flex flex-col justify-between relative overflow-hidden animate-pulse">
                    <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />
                    <div className="flex justify-between items-center">
                      <span className="text-white font-bold font-sans text-[7px]">INCOMING REPAIR REQUEST</span>
                      <span className="text-indigo-400">1.2 km</span>
                    </div>
                    <p className="text-slate-400 text-[6px] mt-0.5">AC Filter Replacement - $75.00</p>
                    <div className="flex gap-1.5 mt-2">
                      <div className="bg-indigo-600 text-white font-bold py-0.5 px-2 rounded text-center cursor-pointer flex-1">Accept</div>
                      <div className="bg-slate-900 text-slate-400 border border-slate-800 py-0.5 px-2 rounded text-center cursor-pointer">Decline</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features list */}
              <div className="space-y-1.5">
                <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block mb-2">Core Features:</span>
                {[
                  "Provider Registration",
                  "Profile Management",
                  "Accept / Reject Requests",
                  "Booking Management",
                  "Earnings Dashboard",
                  "Availability Control",
                  "Service Tracking",
                  "Customer Communication",
                  "Performance Analytics"
                ].map(f => (
                  <div key={f} className="flex items-center gap-1.5 text-[10px] text-slate-300 font-mono">
                    <span className="text-indigo-400">✓</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Admin Dashboard */}
          <div className="glass-card border border-slate-850 p-6 rounded-xl flex flex-col justify-between hover:border-emerald-500/35 transition-colors duration-300 relative group overflow-hidden bg-slate-950/20">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl" />
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-emerald-950/60 rounded-lg border border-emerald-500/20 text-emerald-400">
                  <Laptop className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wide">Admin Dashboard</h3>
              </div>
              <p className="text-[10px] font-mono text-slate-500 uppercase mb-2">Target Users: Platform Administrators</p>
              <p className="text-xs text-slate-300 leading-relaxed mb-6 font-light">
                The administrative control center. Regulates vendor verification queues, manages categories, analyzes transactional volume, and tracks system health metrics.
              </p>

              {/* Mockup Container */}
              <div className="w-full h-44 bg-slate-950 border border-slate-900 rounded-lg p-2.5 overflow-hidden relative mb-6 shadow-inner">
                {/* Desktop UI shell */}
                <div className="w-full h-full border border-slate-850 rounded-md bg-slate-900/60 p-2 flex flex-col justify-between text-[8px] font-mono">
                  {/* Top Header */}
                  <div className="flex justify-between items-center text-slate-500 border-b border-slate-850 pb-1.5 mb-1.5">
                    <span>🛡️ QuickFix Admin Console</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                      Live Metrics
                    </span>
                  </div>
                  {/* Quick stats */}
                  <div className="grid grid-cols-3 gap-1 mb-2">
                    <div className="bg-slate-950 border border-slate-850 p-1 rounded">
                      <span className="text-[5px] text-slate-500 block">Total Volume</span>
                      <span className="text-white font-bold font-sans text-[7px]">$12,450</span>
                    </div>
                    <div className="bg-slate-950 border border-slate-850 p-1 rounded">
                      <span className="text-[5px] text-slate-500 block">Active Bookings</span>
                      <span className="text-white font-bold font-sans text-[7px]">84 Orders</span>
                    </div>
                    <div className="bg-slate-950 border border-slate-850 p-1 rounded">
                      <span className="text-[5px] text-slate-500 block">Verification Queue</span>
                      <span className="text-amber-400 font-bold font-sans text-[7px]">6 Pending</span>
                    </div>
                  </div>
                  {/* System log terminal */}
                  <div className="flex-1 bg-slate-950 border border-slate-850 rounded p-1.5 font-mono text-[5px] text-slate-400 leading-relaxed overflow-hidden">
                    <div className="text-emerald-500">&gt;_ sys_monitor: OK</div>
                    <div>&gt; [07:42:10] Supabase Realtime synchronized.</div>
                    <div>&gt; [07:43:05] Booking ID #4892 dispatched to Tech ID #102.</div>
                    <div>&gt; [07:44:00] Stripe Split Payout queued.</div>
                  </div>
                </div>
              </div>

              {/* Features list */}
              <div className="space-y-1.5">
                <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block mb-2">Core Features:</span>
                {[
                  "User Management",
                  "Provider Verification",
                  "Category Management",
                  "Banner Management",
                  "Shop Management",
                  "Service Management",
                  "Order Monitoring",
                  "Analytics Dashboard",
                  "Revenue Tracking",
                  "Platform Control"
                ].map(f => (
                  <div key={f} className="flex items-center gap-1.5 text-[10px] text-slate-300 font-mono">
                    <span className="text-emerald-400">✓</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* HOW ALL THREE APPS CONNECT (PREMIUM VISUALIZATION) */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Network className="w-5 h-5 text-indigo-400" />
            <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">How All Three Apps Connect</h3>
          </div>
          <p className="text-xs md:text-sm text-slate-400 font-light leading-relaxed mb-4">
            Below is the transactional telemetry schematic. Observe how queries initiated in the Customer App resolve through our central node network to instantly trigger state transitions on the Provider App, with full verification logging reflected dynamically inside the Admin Panel.
          </p>

          <div className="w-full glass-card p-6 rounded-xl border border-slate-850 bg-slate-950/40 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-900 pb-3 mb-6">
              <span className="text-[9px] font-mono text-indigo-400 uppercase tracking-widest flex items-center gap-1.5">
                <Network className="w-3.5 h-3.5 animate-pulse" />
                Inter-App Live Telemetry Pipeline
              </span>
              <span className="text-[8px] font-mono text-slate-500">GLOW_ROUTE_VER_1.5</span>
            </div>

            <svg className="w-full h-auto min-h-[260px]" viewBox="0 0 700 260" fill="none">
              {/* Customer App Node */}
              <rect x="30" y="40" width="140" height="50" rx="8" fill="#050816" stroke="#06b6d4" strokeWidth="1.5" />
              <text x="100" y="64" fill="#fff" fontSize="9.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">CUSTOMER APP</text>
              <text x="100" y="78" fill="#06b6d4" fontSize="7.5" fontFamily="monospace" textAnchor="middle">Flutter Client</text>

              {/* Provider App Node */}
              <rect x="530" y="40" width="140" height="50" rx="8" fill="#050816" stroke="#8b5cf6" strokeWidth="1.5" />
              <text x="600" y="64" fill="#fff" fontSize="9.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">PROVIDER APP</text>
              <text x="600" y="78" fill="#8b5cf6" fontSize="7.5" fontFamily="monospace" textAnchor="middle">Flutter Client</text>

              {/* Central Backend APIs (Node.js/Express) */}
              <rect x="260" y="40" width="180" height="70" rx="10" fill="#050816" stroke="#3b82f6" strokeWidth="2" />
              <text x="350" y="68" fill="#fff" fontSize="10.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">BACKEND APIs</text>
              <text x="350" y="82" fill="#3b82f6" fontSize="8" fontFamily="monospace" textAnchor="middle">Node.js / Express.js</text>
              <text x="350" y="95" fill="#94a3b8" fontSize="7.5" fontFamily="monospace" textAnchor="middle">(REST &amp; WebSockets)</text>

              {/* Supabase & Postgres Database Node (bottom) */}
              <rect x="260" y="170" width="180" height="60" rx="10" fill="#050816" stroke="#10b981" strokeWidth="2" />
              <text x="350" y="195" fill="#fff" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">SUPABASE / POSTGRES</text>
              <text x="350" y="210" fill="#10b981" fontSize="8" fontFamily="monospace" textAnchor="middle">Central DB &amp; Auth Storage</text>

              {/* Admin Panel Node (side) */}
              <rect x="30" y="170" width="140" height="60" rx="8" fill="#050816" stroke="#10b981" strokeWidth="1.5" />
              <text x="100" y="195" fill="#fff" fontSize="9.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">ADMIN DASHBOARD</text>
              <text x="100" y="210" fill="#10b981" fontSize="7.5" fontFamily="monospace" textAnchor="middle">React Console</text>

              {/* ANIMATED CHANNELS */}
              
              {/* 1. Customer -> Backend APIs */}
              <path d="M170 55 L260 55" stroke="#1f2937" strokeWidth="2" fill="none" />
              <path d="M170 55 L260 55" stroke="#06b6d4" strokeWidth="2" className="animate-flow-cyan" fill="none" />
              <polygon points="260,55 252,50 252,60" fill="#06b6d4" />
              <text x="215" y="47" fill="#06b6d4" fontSize="7.5" fontFamily="monospace" textAnchor="middle">Book Services</text>

              {/* 2. Backend APIs -> Provider App */}
              <path d="M440 55 L530 55" stroke="#1f2937" strokeWidth="2" fill="none" />
              <path d="M440 55 L530 55" stroke="#8b5cf6" strokeWidth="2" className="animate-flow-indigo" fill="none" />
              <polygon points="530,55 522,50 522,60" fill="#8b5cf6" />
              <text x="485" y="47" fill="#8b5cf6" fontSize="7.5" fontFamily="monospace" textAnchor="middle">Dispatch Request</text>

              {/* 3. Provider App -> Customer App (Indirectly via WebSockets flow) */}
              <path d="M600 90 L600 140 L100 140 L100 90" stroke="#1f2937" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
              <path d="M600 90 L600 140 L100 140 L100 90" stroke="#a855f7" strokeWidth="1.5" className="animate-flow-indigo" fill="none" />
              <polygon points="100,90 95,98 105,98" fill="#a855f7" />
              <text x="350" y="134" fill="#a855f7" fontSize="7.5" fontFamily="monospace" textAnchor="middle">Real-time Location Broadcasts</text>

              {/* 4. Backend APIs <-> Database (Bidirectional) */}
              <path d="M335 110 L335 170" stroke="#1f2937" strokeWidth="2" fill="none" />
              <path d="M335 110 L335 170" stroke="#10b981" strokeWidth="2" className="animate-flow-emerald" fill="none" />
              <polygon points="335,170 330,162 340,162" fill="#10b981" />

              <path d="M365 170 L365 110" stroke="#1f2937" strokeWidth="2" fill="none" />
              <path d="M365 170 L365 110" stroke="#10b981" strokeWidth="2" className="animate-flow-emerald" fill="none" />
              <polygon points="365,110 360,118 370,118" fill="#10b981" />
              <text x="382" y="143" fill="#10b981" fontSize="7.5" fontFamily="monospace" textAnchor="start">Sync Queries</text>

              {/* 5. Admin Dashboard -> Entire System (Updates DB / API configs) */}
              <path d="M100 170 L100 110 M170 200 L260 200" stroke="#1f2937" strokeWidth="1.5" strokeDasharray="4 2" fill="none" />
              <path d="M100 170 L100 110 M170 200 L260 200" stroke="#10b981" strokeWidth="1.5" className="animate-flow-emerald" fill="none" />
              <polygon points="260,200 252,195 252,205" fill="#10b981" />
              <polygon points="100,110 95,118 105,118" fill="#10b981" />
              <text x="215" y="193" fill="#10b981" fontSize="7.5" fontFamily="monospace" textAnchor="middle">Global Control</text>
            </svg>
          </div>

          {/* Shop Onboarding & Provisioning flow */}
          <div className="bg-slate-950/60 border border-slate-900 rounded-xl p-6 relative overflow-hidden mt-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/45 border border-emerald-950 px-2 py-0.5 rounded uppercase">Provisioning Loop</span>
              <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider">Merchant Onboarding &amp; Credentials Flow</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {/* Step 1 */}
              <div className="flex flex-col gap-2 bg-slate-900/40 p-4 rounded-lg border border-slate-850/80">
                <span className="text-xs font-mono text-emerald-400 font-bold">Step 01: Admin Shop Creation</span>
                <p className="text-[11px] text-slate-300 leading-relaxed font-light">
                  From the Admin Panel, the platform administrator registers a new shop, inputting details and provisioning the provider's login phone number and secure credentials (password).
                </p>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col gap-2 bg-slate-900/40 p-4 rounded-lg border border-slate-850/80">
                <span className="text-xs font-mono text-cyan-400 font-bold">Step 02: Secure Credentials Handshake</span>
                <p className="text-[11px] text-slate-300 leading-relaxed font-light">
                  Supabase database instantly records the merchant credentials. The credentials are encrypted and synchronized across the provider authentication table.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col gap-2 bg-slate-900/40 p-4 rounded-lg border border-slate-850/80">
                <span className="text-xs font-mono text-indigo-400 font-bold">Step 03: Provider App Management</span>
                <p className="text-[11px] text-slate-300 leading-relaxed font-light">
                  The merchant logs into the Provider App using their set phone number and password. Upon successful authentication, they gain immediate dashboard control to configure services, orders, and shop details.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* TECHNICAL ARCHITECTURE MATRIX & PROJECT SCALE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tech Matrix */}
          <div className="glass-card border border-slate-850 p-6 md:p-8 rounded-xl flex flex-col justify-between bg-slate-950/10">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Cpu className="w-5 h-5 text-cyan-400" />
                <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">Ecosystem Tech Stack</h3>
              </div>
              <div className="space-y-4">
                {[
                  { key: "Frontend clients", val: "Flutter" },
                  { key: "API Gateway & backend", val: "Node.js / Express.js" },
                  { key: "Database Storage", val: "Supabase / PostgreSQL" },
                  { key: "Authentication", val: "JWT / Supabase Auth" },
                  { key: "File Storage", val: "Cloud Storage" },
                  { key: "Deployment Status", val: "Production Ready" }
                ].map(item => (
                  <div key={item.key} className="flex justify-between items-center border-b border-slate-900/60 pb-2">
                    <span className="text-[10px] font-mono text-slate-500 uppercase">{item.key}:</span>
                    <span className="text-xs font-mono text-slate-200 font-semibold">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scale Metrics */}
          <div className="glass-card border border-slate-850 p-6 md:p-8 rounded-xl flex flex-col justify-between bg-gradient-to-tr from-slate-950 via-slate-950 to-indigo-950/20">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Activity className="w-5 h-5 text-indigo-400 animate-pulse" />
                <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">Ecosystem Scale Statistics</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "3", label: "Connected Applications", sub: "Client app, Provider app & Admin dashboard" },
                  { num: "1", label: "Centralized Backend", sub: "REST APIs & websocket handlers" },
                  { num: "Multiple", label: "User Roles", sub: "Customers, merchants, technicians & admins" },
                  { num: "Real-Time", label: "Communication", sub: "Socket-level direct message updates" },
                  { num: "Scalable", label: "Architecture", sub: "Engineered for high transactional volume" }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-slate-950/60 border border-slate-900 p-4 rounded-lg">
                    <div className="text-2xl font-extrabold text-indigo-400 font-mono mb-1">{stat.num}</div>
                    <div className="text-[9px] text-white font-mono uppercase tracking-wider mb-1">{stat.label}</div>
                    <div className="text-[8px] text-slate-500 font-light leading-relaxed">{stat.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BUSINESS IMPACT */}
        <div className="glass-card border border-slate-850 p-6 md:p-8 rounded-xl bg-gradient-to-r from-slate-950 to-emerald-950/15">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-emerald-400" />
            <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">Business & Operational Impact</h3>
          </div>
          <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-light mb-4">
            QuickFix is designed as a scalable local service marketplace platform. By decentralizing operations into specialized nodes, the ecosystem handles custom pricing and match dispatch rules seamlessly:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs leading-relaxed font-light">
            <div className="space-y-2">
              <span className="font-mono text-cyan-400 uppercase tracking-widest text-[9px] block">Customers:</span>
              <p className="text-slate-300">
                Customers can easily book services, browse listings, track arrival on maps, and handle payments.
              </p>
            </div>
            <div className="space-y-2">
              <span className="font-mono text-indigo-400 uppercase tracking-widest text-[9px] block">Providers:</span>
              <p className="text-slate-300">
                Providers can grow their business, manage bookings, view operational logs, and log daily earnings.
              </p>
            </div>
            <div className="space-y-2">
              <span className="font-mono text-emerald-400 uppercase tracking-widest text-[9px] block">Admins:</span>
              <p className="text-slate-300">
                Admins can manage the complete ecosystem, verify providers, manage shops, and check dashboard telemetry.
              </p>
            </div>
          </div>
          <div className="mt-6 border-t border-slate-900 pt-4 text-[10px] text-slate-400 font-mono flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Designed for future expansion to multiple cities and thousands of concurrent users.
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-background text-text pt-24 pb-20 relative overflow-hidden font-sans transition-colors duration-300">
      <CustomCursor />
      <ParticleBackground />

      {/* Cosmic background glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/3 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Navigation header back button */}
        <div className="mb-10">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-slate-400 hover:text-white transition-colors group py-1.5 px-3 rounded-lg border border-slate-900 hover:border-slate-800 bg-slate-950/60"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Go Back To Dashboard</span>
          </Link>
        </div>

        {/* Project Header Title */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="text-[10px] font-mono tracking-wider text-accent bg-slate-950 border border-slate-850 px-2.5 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
          {project.isUpcoming && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-[9px] font-mono uppercase tracking-widest w-fit animate-pulse">
              <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-ping" />
              Proposed Architecture Specification
            </div>
          )}
          {oneLineSummary && (
            <p className="text-xs font-mono text-accent uppercase tracking-widest mb-3">
              // {oneLineSummary}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase mb-4">
            {project.title}
          </h1>
          <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
            {project.longDescription || project.description}
          </p>
        </header>

        {/* Technical Breakdown Body */}
        <section className="flex flex-col gap-10">
          
          {/* Overview Section */}
          {overview && (
            <div className="glass-card p-6 md:p-8 rounded-xl border border-slate-850 bg-gradient-to-br from-slate-950 to-slate-900/60 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="w-5 h-5 text-accent animate-pulse" />
                <h2 className="text-sm font-bold text-white font-mono uppercase tracking-wider">Project Overview</h2>
              </div>
              <p className="text-xs md:text-sm text-slate-300 font-light leading-relaxed whitespace-pre-line">
                {overview}
              </p>
            </div>
          )}

          {/* Box 1: The Problem */}
          <div className="glass-card p-6 md:p-8 rounded-xl border border-slate-850 relative group">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              <h2 className="text-sm font-bold text-white font-mono uppercase tracking-wider">The Problem</h2>
            </div>
            <p className="text-xs md:text-sm text-slate-300 font-light leading-relaxed whitespace-pre-line">
              {problem}
            </p>
          </div>

          {/* Box 2: The Solution */}
          <div className="glass-card p-6 md:p-8 rounded-xl border border-slate-850 relative group">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <h2 className="text-sm font-bold text-white font-mono uppercase tracking-wider">The Solution</h2>
            </div>
            <p className="text-xs md:text-sm text-slate-300 font-light leading-relaxed whitespace-pre-line">
              {solution}
            </p>
          </div>

          {/* Box 3: Technical stack / Why Chosen */}
          {whyTechChosen ? (
            <div className="glass-card p-6 md:p-8 rounded-xl border border-slate-850">
              <div className="flex items-center gap-2 mb-6">
                <Cpu className="w-5 h-5 text-primary" />
                <h2 className="text-sm font-bold text-white font-mono uppercase tracking-wider">Why These Technologies Were Chosen</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {whyTechChosen.map((item, idx) => (
                  <div key={idx} className="bg-slate-950/60 border border-slate-900 rounded-lg p-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between border-b border-slate-900 pb-2 mb-3">
                        <span className="text-xs font-mono font-bold text-accent">{item.tech}</span>
                        <span className="text-[9px] font-mono text-slate-500">{item.description}</span>
                      </div>
                      <div className="mb-3">
                        <div className="text-[9px] font-mono text-slate-400 uppercase mb-1">Responsibilities:</div>
                        <div className="text-[11px] text-slate-300 font-light leading-relaxed">{item.role}</div>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-slate-900/50">
                      <div className="text-[9px] font-mono text-slate-400 uppercase mb-1">Reason:</div>
                      <div className="text-[11px] text-slate-300 font-light leading-relaxed italic">{item.reason}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="glass-card p-6 md:p-8 rounded-xl border border-slate-850">
              <div className="flex items-center gap-2 mb-6">
                <Cpu className="w-5 h-5 text-primary" />
                <h2 className="text-sm font-bold text-white font-mono uppercase tracking-wider">Engine Tech Stack</h2>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {techStack.map((tech) => (
                  <div key={tech} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/80 border border-slate-900 text-xs font-mono text-slate-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Box 4: Technical Challenges & Resolution */}
          {engineeringChallenges ? (
            <div className="glass-card p-6 md:p-8 rounded-xl border border-slate-850">
              <div className="flex items-center gap-2 mb-6">
                <Terminal className="w-5 h-5 text-secondary" />
                <h2 className="text-sm font-bold text-white font-mono uppercase tracking-wider">Engineering Challenges & Resolutions</h2>
              </div>
              <div className="flex flex-col gap-6">
                {engineeringChallenges.map((challenge, idx) => (
                  <div key={idx} className="bg-slate-950/40 border border-slate-900 rounded-xl p-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-secondary/10 border-l border-b border-slate-900 px-3 py-1 rounded-bl text-[8px] font-mono text-secondary uppercase tracking-widest">
                      Challenge {idx + 1}
                    </div>
                    <h3 className="text-xs font-bold text-white font-mono uppercase mb-4 pr-16">{challenge.title}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[11px]">
                      <div className="border border-red-950/30 bg-red-950/5 rounded p-3">
                        <span className="font-mono text-red-400 block mb-1 uppercase tracking-wider font-semibold">Issue:</span>
                        <p className="text-slate-300 font-light leading-relaxed">{challenge.issue}</p>
                      </div>
                      <div className="border border-blue-950/30 bg-blue-950/5 rounded p-3">
                        <span className="font-mono text-blue-400 block mb-1 uppercase tracking-wider font-semibold">Solution:</span>
                        <p className="text-slate-300 font-light leading-relaxed">{challenge.solution}</p>
                      </div>
                      <div className="border border-emerald-950/30 bg-emerald-950/5 rounded p-3">
                        <span className="font-mono text-emerald-400 block mb-1 uppercase tracking-wider font-semibold">Result:</span>
                        <p className="text-slate-300 font-light leading-relaxed">{challenge.result}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="glass-card p-6 md:p-8 rounded-xl border border-slate-850">
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="w-5 h-5 text-secondary" />
                <h2 className="text-sm font-bold text-white font-mono uppercase tracking-wider">Challenges & Blockers</h2>
              </div>
              <p className="text-xs md:text-sm text-slate-300 font-light leading-relaxed whitespace-pre-line">
                {challenges}
              </p>
            </div>
          )}

          {/* Box 5: Architecture Schema */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Network className="w-5 h-5 text-accent" />
              <h2 className="text-sm font-bold text-white font-mono uppercase tracking-wider">System Architecture</h2>
            </div>
            <p className="text-xs md:text-sm text-slate-400 font-light leading-relaxed mb-2">
              {architecture}
            </p>
            {renderArchitectureDiagram(project.id)}
          </div>

          {id === "local-commerce" && renderMultiAppEcosystem()}

          {/* System Flow Section */}
          {systemFlow && (
            <div className="glass-card p-6 md:p-8 rounded-xl border border-slate-850">
              <div className="flex items-center gap-2 mb-6">
                <Network className="w-5 h-5 text-accent" />
                <h2 className="text-sm font-bold text-white font-mono uppercase tracking-wider">System Flow Pipeline</h2>
              </div>
              <div className="flex flex-col gap-3 relative md:pl-6 pl-4">
                <div className="absolute left-[7px] md:left-[31px] top-2 bottom-2 w-[1px] bg-slate-800" />
                {systemFlow.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-4 relative z-10">
                    <div className="w-4 h-4 rounded-full bg-slate-950 border-2 border-accent flex items-center justify-center text-[8px] font-mono font-bold text-accent">
                      {idx + 1}
                    </div>
                    <div className="bg-slate-950/60 border border-slate-900 rounded-lg px-4 py-2 text-xs font-mono text-slate-200">
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Security Features Section */}
          {securityFeatures && (
            <div className="glass-card p-6 md:p-8 rounded-xl border border-slate-850">
              <div className="flex items-center gap-2 mb-6">
                <Shield className="w-5 h-5 text-emerald-400 animate-pulse" />
                <h2 className="text-sm font-bold text-white font-mono uppercase tracking-wider">Surveillance & Security Features</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {securityFeatures.map((feat, idx) => (
                  <div key={idx} className="bg-slate-950/80 border border-slate-900 rounded-lg p-3 text-center flex flex-col justify-center items-center group hover:border-slate-800 transition-colors">
                    <Shield className="w-4 h-4 text-emerald-400 mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-mono text-slate-200 leading-tight">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Box 6: Outcomes & metrics */}
          {performanceResults ? (
            <div className="glass-card p-6 md:p-8 rounded-xl border border-slate-850 bg-gradient-to-r from-slate-950 to-primary/5">
              <div className="flex items-center gap-2 mb-6">
                <Shield className="w-5 h-5 text-emerald-400 animate-pulse" />
                <h2 className="text-sm font-bold text-white font-mono uppercase tracking-wider">Project Results & Metrics</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {performanceResults.slice(0, 3).map((res, idx) => {
                  let val = "100%";
                  let desc = res;
                  if (res.includes("<2 second")) {
                    val = "<2s";
                    desc = "Alert response latency";
                  } else if (res.includes("10+ HD")) {
                    val = "10+";
                    desc = "Simultaneous HD camera streams";
                  } else if (res.includes("80% lower") || res.includes("80% reduction")) {
                    val = "80%";
                    desc = "Bandwidth savings via edge filtering";
                  } else if (res.includes("High detection")) {
                    val = "High";
                    desc = "Anomaly detection accuracy";
                  } else if (res.includes("Production-ready")) {
                    val = "Ready";
                    desc = "Production prototype architecture";
                  } else {
                    const split = res.split(" ");
                    if (split[0] && (split[0].includes("%") || split[0].includes("<") || split[0].includes("+"))) {
                      val = split[0];
                      desc = split.slice(1).join(" ");
                    }
                  }
                  return (
                    <div key={idx} className="bg-slate-950/60 border border-slate-900 rounded-lg p-4 text-center">
                      <div className="text-2xl font-extrabold text-accent font-mono mb-1">{val}</div>
                      <div className="text-[10px] text-slate-400 font-light leading-relaxed">{desc}</div>
                    </div>
                  );
                })}
              </div>
              
              <div className="flex flex-col gap-2 border-t border-slate-900/50 pt-4">
                <p className="text-xs text-slate-400 font-mono mb-2 uppercase">Core Validation Metrics:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {performanceResults.map((res, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="glass-card p-6 md:p-8 rounded-xl border border-slate-850 bg-gradient-to-r from-slate-950 to-primary/5">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-emerald-400 animate-pulse" />
                <h2 className="text-sm font-bold text-white font-mono uppercase tracking-wider">Project Results</h2>
              </div>
              <p className="text-xs md:text-sm text-slate-300 font-light leading-relaxed whitespace-pre-line">
                {results}
              </p>
            </div>
          )}

          {/* Database Design */}
          {databaseDesign && (
            <div className="glass-card p-6 md:p-8 rounded-xl border border-slate-850">
              <div className="flex items-center gap-2 mb-4">
                <Database className="w-5 h-5 text-primary" />
                <h2 className="text-sm font-bold text-white font-mono uppercase tracking-wider">Database & Storage Design</h2>
              </div>
              <p className="text-xs md:text-sm text-slate-300 font-light leading-relaxed whitespace-pre-line">
                {databaseDesign}
              </p>
            </div>
          )}

          {/* API Structure */}
          {apiStructure && (
            <div className="glass-card p-6 md:p-8 rounded-xl border border-slate-850">
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="w-5 h-5 text-accent" />
                <h2 className="text-sm font-bold text-white font-mono uppercase tracking-wider">API Structure & Verified Endpoints</h2>
              </div>
              <div className="flex flex-col gap-2.5">
                {apiStructure.map((endpoint, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-slate-950/60 border border-slate-900 rounded-lg p-2.5 font-mono text-[10px] md:text-xs text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>{endpoint}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* AI/ML Pipeline */}
          {aiMlPipeline && (
            <div className="glass-card p-6 md:p-8 rounded-xl border border-slate-850">
              <div className="flex items-center gap-2 mb-4">
                <Cpu className="w-5 h-5 text-accent animate-pulse" />
                <h2 className="text-sm font-bold text-white font-mono uppercase tracking-wider">AI/ML Pipeline</h2>
              </div>
              <p className="text-xs md:text-sm text-slate-300 font-light leading-relaxed whitespace-pre-line">
                {aiMlPipeline}
              </p>
            </div>
          )}

          {/* What I Built Personally */}
          {whatIBuiltPersonally && (
            <div className="glass-card p-6 md:p-8 rounded-xl border border-slate-850 bg-gradient-to-r from-slate-950 to-secondary/5">
              <div className="flex items-center gap-2 mb-4">
                <Compass className="w-5 h-5 text-secondary" />
                <h2 className="text-sm font-bold text-white font-mono uppercase tracking-wider">What I Built Personally</h2>
              </div>
              <p className="text-xs md:text-sm text-slate-300 font-light leading-relaxed whitespace-pre-line">
                {whatIBuiltPersonally}
              </p>
            </div>
          )}

          {/* Future Improvements */}
          {futureImprovements && (
            <div className="glass-card p-6 md:p-8 rounded-xl border border-slate-850">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
                <h2 className="text-sm font-bold text-white font-mono uppercase tracking-wider">Future Improvements</h2>
              </div>
              <div className="flex flex-col gap-2.5">
                {futureImprovements.map((imp, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>{imp}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technical Deep Dive */}
          {technicalDeepDive && (
            <div className="glass-card p-6 md:p-8 rounded-xl border border-slate-850 bg-gradient-to-br from-slate-950 to-slate-900">
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="w-5 h-5 text-accent animate-pulse" />
                <h2 className="text-sm font-bold text-white font-mono uppercase tracking-wider">Technical Deep Dive</h2>
              </div>
              <p className="text-xs md:text-sm text-slate-300 font-light leading-relaxed whitespace-pre-line">
                {technicalDeepDive}
              </p>
            </div>
          )}

          {/* What I Learned Section */}
          {whatILearned && (
            <div className="glass-card p-6 md:p-8 rounded-xl border border-slate-850">
              <div className="flex items-center gap-2 mb-6">
                <CheckCircle className="w-5 h-5 text-primary" />
                <h2 className="text-sm font-bold text-white font-mono uppercase tracking-wider">What I Learned</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whatILearned.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 bg-slate-950/40 border border-slate-900/80 rounded-lg p-3">
                    <div className="w-4 h-4 rounded bg-primary/10 border border-primary/20 flex items-center justify-center text-[10px] font-mono font-bold text-primary mt-0.5">✓</div>
                    <span className="text-[11px] font-mono text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Project Footer Badging */}
          {footerInfo && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-900/60 pt-6">
              <div className="bg-slate-950/80 border border-slate-900 rounded-lg p-3 text-center">
                <div className="text-[9px] font-mono text-slate-500 uppercase mb-1">Status</div>
                <div className="text-xs font-mono font-bold text-emerald-400">{footerInfo.status}</div>
              </div>
              <div className="bg-slate-950/80 border border-slate-900 rounded-lg p-3 text-center">
                <div className="text-[9px] font-mono text-slate-500 uppercase mb-1">Category</div>
                <div className="text-xs font-mono font-bold text-slate-200 leading-tight">{footerInfo.category}</div>
              </div>
              <div className="bg-slate-950/80 border border-slate-900 rounded-lg p-3 text-center">
                <div className="text-[9px] font-mono text-slate-500 uppercase mb-1">Role</div>
                <div className="text-xs font-mono font-bold text-accent">{footerInfo.role}</div>
              </div>
              <div className="bg-slate-950/80 border border-slate-900 rounded-lg p-3 text-center">
                <div className="text-[9px] font-mono text-slate-500 uppercase mb-1">Duration</div>
                <div className="text-xs font-mono font-bold text-secondary">{footerInfo.duration}</div>
              </div>
            </div>
          )}

        </section>

        {/* Footer actions */}
        <div className="flex justify-between items-center mt-16 pt-8 border-t border-slate-900">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Dashboard Home</span>
          </Link>
          <div className="flex items-center gap-4">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-xs font-mono text-accent hover:text-white transition-colors uppercase">
                Launch Live App
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-xs font-mono text-slate-400 hover:text-white transition-colors uppercase">
                Source Code
              </a>
            )}
          </div>
        </div>

      </div>
    </main>
  );
}
