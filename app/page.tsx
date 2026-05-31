"use client";
import React, { useState } from "react";
import PageLoader from "../components/PageLoader";
import CustomCursor from "../components/CustomCursor";
import Navbar from "../components/Navbar";
import ParticleBackground from "../components/ParticleBackground";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Timeline from "../components/Timeline";
import GitHubDashboard from "../components/GitHubDashboard";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import CommandPalette from "../components/CommandPalette";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Dynamic Cyber Screen Loader */}
      <PageLoader onComplete={() => setLoading(false)} />
      
      {!loading && (
        <main className="min-h-screen bg-[#050816] text-white relative overflow-hidden">
          
          {/* Global Custom Cursor dot & glow rings */}
          <CustomCursor />
          
          {/* Interactive WebGL Star Background Grid */}
          <ParticleBackground />

          {/* Keyboard Controller console (Ctrl+K) */}
          <CommandPalette />

          {/* Floating glass header navigation */}
          <Navbar />

          {/* Section folds */}
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Timeline />
          <GitHubDashboard />
          <Services />
          <Testimonials />
          <Contact />

          {/* Minimalist Tech footer */}
          <Footer />
        </main>
      )}
    </>
  );
}
