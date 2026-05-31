"use client";
import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  baseX: number;
  baseY: number;
  density: number;
  vx: number;
  vy: number;
  color: string;
  alpha: number;
  fadeSpeed: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, radius: 150 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 65;

    const colors = [
      "rgba(59, 130, 246, ",  // Primary Blue
      "rgba(139, 92, 246, ", // Secondary Purple
      "rgba(6, 182, 212, "   // Accent Cyan
    ];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 2 + 1;
        const vx = (Math.random() - 0.5) * 0.4;
        const vy = (Math.random() - 0.5) * 0.4;
        const density = Math.random() * 30 + 1;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const alpha = Math.random() * 0.5 + 0.1;
        const fadeSpeed = (Math.random() * 0.005) + 0.002;

        particles.push({
          x,
          y,
          size,
          baseX: x,
          baseY: y,
          vx,
          vy,
          density,
          color,
          alpha,
          fadeSpeed
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw active particles
      particles.forEach((p) => {
        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Bounce on boundaries
        if (p.x < 0 || p.x > canvas.width) p.vx = -p.vx;
        if (p.y < 0 || p.y > canvas.height) p.vy = -p.vy;

        // Slow glow pulsing
        p.alpha += p.fadeSpeed;
        if (p.alpha > 0.75 || p.alpha < 0.1) {
          p.fadeSpeed = -p.fadeSpeed;
        }

        // Interactive mouse gravity effect
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseRef.current.radius) {
          const force = (mouseRef.current.radius - distance) / mouseRef.current.radius;
          const directionX = dx / distance;
          const directionY = dy / distance;
          // Pull gently towards mouse
          p.x += directionX * force * 0.8;
          p.y += directionY * force * 0.8;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.max(0, Math.min(1, p.alpha))})`;
        ctx.shadowBlur = p.size * 2;
        ctx.shadowColor = p.color.includes("59, 130") ? "#3B82F6" : p.color.includes("139, 92") ? "#8B5CF6" : "#06B6D4";
        ctx.fill();
      });

      // Reset shadows for standard drawing
      ctx.shadowBlur = 0;

      // Draw subtle connecting webs for close-proximity particles
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 110) {
            const opacity = (110 - distance) / 110 * 0.08;
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = 0;
      mouseRef.current.y = 0;
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    resizeCanvas();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      {/* CSS Dark Cyber Grid Layer */}
      <div className="absolute inset-0 cyber-grid" />

      {/* Glowing spotlights */}
      <div className="spotlight-blue" />
      <div className="spotlight-purple" />

      {/* Floating Canvas Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
    </div>
  );
}
