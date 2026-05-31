"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 30, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Disable custom cursor on touch devices for accessibility
    const isMobile = window.matchMedia("(max-width: 768px)").matches || 
                     ('ontouchstart' in window) || 
                     (navigator.maxTouchPoints > 0);
    if (isMobile) return;
    
    setEnabled(true);
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    // Track when hovering over clickable elements to grow the cursor
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("button") || 
        target.closest("a") ||
        target.classList.contains("interactive-cursor")
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <>
      {/* Cursor outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/50 pointer-events-none z-50 mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: clicked ? 0.8 : hovered ? 1.5 : 1,
          borderColor: clicked 
            ? "rgb(6, 182, 212)" 
            : hovered 
              ? "rgb(139, 92, 246)" 
              : "rgba(59, 130, 246, 0.5)",
          backgroundColor: clicked 
            ? "rgba(6, 182, 212, 0.2)" 
            : hovered 
              ? "rgba(139, 92, 246, 0.15)" 
              : "rgba(59, 130, 246, 0)",
        }}
        transition={{ type: "tween", duration: 0.15 }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 ml-3 mt-3 rounded-full bg-accent pointer-events-none z-50"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: clicked ? 0.5 : hovered ? 0 : 1,
        }}
      />
      {/* Ambient mouse glow aura */}
      <motion.div
        className="fixed top-0 left-0 w-48 h-48 -ml-20 -mt-20 rounded-full bg-secondary/8 blur-[50px] pointer-events-none z-40"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
    </>
  );
}
