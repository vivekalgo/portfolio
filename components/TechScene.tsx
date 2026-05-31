"use client";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function TechScene() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [webGlSupported, setWebGlSupported] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    // Detect WebGL support
    try {
      const canvas = document.createElement("canvas");
      const support = !!(window.WebGLRenderingContext && 
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")));
      if (!support) {
        setWebGlSupported(false);
        return;
      }
    } catch {
      setWebGlSupported(false);
      return;
    }

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 10;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group to hold all 3D items for easy mouse tilt interaction
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Interactive Holographic Core Globe
    const globeRadius = 3.6;
    const globeGeometry = new THREE.SphereGeometry(globeRadius, 24, 24);
    const globeMaterial = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    const globeMesh = new THREE.Mesh(globeGeometry, globeMaterial);
    mainGroup.add(globeMesh);

    // 2. Floating Neural Nodes System
    const nodesCount = 60;
    const nodeGeometry = new THREE.BufferGeometry();
    const nodePositions = new Float32Array(nodesCount * 3);
    const nodeVelocities: number[] = [];

    // Store absolute position objects to calculate connection lines
    const nodePoints: THREE.Vector3[] = [];

    for (let i = 0; i < nodesCount; i++) {
      // Place nodes in a spherical shell slightly larger than the core globe
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = globeRadius + 0.3 + Math.random() * 0.8; // node elevation shell

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      nodePositions[i * 3] = x;
      nodePositions[i * 3 + 1] = y;
      nodePositions[i * 3 + 2] = z;

      nodePoints.push(new THREE.Vector3(x, y, z));
      
      // Velocities for gentle floating movement
      nodeVelocities.push(
        (Math.random() - 0.5) * 0.015,
        (Math.random() - 0.5) * 0.015,
        (Math.random() - 0.5) * 0.015
      );
    }

    nodeGeometry.setAttribute("position", new THREE.BufferAttribute(nodePositions, 3));

    // Glow dot texture using Canvas
    const createCircleTexture = () => {
      const size = 16;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const grad = ctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2);
        grad.addColorStop(0, "rgba(255, 255, 255, 1)");
        grad.addColorStop(0.3, "rgba(6, 182, 212, 0.8)");
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, size, size);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const nodeMaterial = new THREE.PointsMaterial({
      size: 0.35,
      map: createCircleTexture(),
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const nodePointsMesh = new THREE.Points(nodeGeometry, nodeMaterial);
    mainGroup.add(nodePointsMesh);

    // 3. Dynamic Neural Connections (Lines)
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
    });

    // Create container for line segments
    let lineSegments: THREE.LineSegments | null = null;

    const updateConnections = () => {
      if (lineSegments) mainGroup.remove(lineSegments);

      const indices: number[] = [];
      const threshold = 2.4; // Connect nodes that float close to each other

      for (let i = 0; i < nodesCount; i++) {
        for (let j = i + 1; j < nodesCount; j++) {
          const dist = nodePoints[i].distanceTo(nodePoints[j]);
          if (dist < threshold) {
            indices.push(i, j);
          }
        }
      }

      const lineGeometry = new THREE.BufferGeometry().setFromPoints(nodePoints);
      lineGeometry.setIndex(indices);
      lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
      mainGroup.add(lineSegments);
    };

    // 4. Orbiting Star Particle Field
    const starsCount = 180;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starsCount * 3);

    for (let i = 0; i < starsCount; i++) {
      // Outer floating envelope
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const r = 6 + Math.random() * 8; // orbit radius outer limits

      starPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      starPositions[i * 3 + 2] = r * Math.cos(phi);
    }

    starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({
      color: 0x06b6d4,
      size: 0.08,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });
    const starPoints = new THREE.Points(starGeometry, starMaterial);
    mainGroup.add(starPoints);

    // Mouse Tracking Interactivity
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates (-1 to 1)
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouse.targetX = (x / width) * 2 - 1;
      mouse.targetY = -(y / height) * 2 + 1;
    };

    container.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    let clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Rotate globe mesh
      globeMesh.rotation.y = elapsedTime * 0.08;
      globeMesh.rotation.x = elapsedTime * 0.04;

      // Rotate nodes system
      nodePointsMesh.rotation.y = elapsedTime * 0.05;
      
      // Rotate outer star field
      starPoints.rotation.y = -elapsedTime * 0.02;

      // Animate node points gently floating
      const positions = nodePointsMesh.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < nodesCount; i++) {
        const i3 = i * 3;
        
        // Add velocity offsets
        positions[i3] += nodeVelocities[i3];
        positions[i3 + 1] += nodeVelocities[i3 + 1];
        positions[i3 + 2] += nodeVelocities[i3 + 2];

        // Keep them bounded in spherical shell
        const vec = new THREE.Vector3(positions[i3], positions[i3 + 1], positions[i3 + 2]);
        const dist = vec.length();

        if (dist < globeRadius + 0.1 || dist > globeRadius + 1.6) {
          nodeVelocities[i3] = -nodeVelocities[i3];
          nodeVelocities[i3 + 1] = -nodeVelocities[i3 + 1];
          nodeVelocities[i3 + 2] = -nodeVelocities[i3 + 2];
        }

        // Update standard Vector3 objects for distance connection loops
        nodePoints[i].set(positions[i3], positions[i3 + 1], positions[i3 + 2]);
      }
      
      // Let points compiler know positions updated
      nodePointsMesh.geometry.attributes.position.needsUpdate = true;

      // Redraw close connectors
      updateConnections();

      // Smooth mouse follow physics (lerp)
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Tilt main group based on mouse position
      mainGroup.rotation.y = mouse.x * 0.4;
      mainGroup.rotation.x = -mouse.y * 0.4;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Dispose resources
      globeGeometry.dispose();
      globeMaterial.dispose();
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      lineMaterial.dispose();
      if (lineSegments) {
        (lineSegments as THREE.LineSegments).geometry.dispose();
      }
      renderer.dispose();
    };
  }, []);

  if (!webGlSupported) {
    // Elegant static fallback if WebGL fails
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-80 h-80 rounded-full border border-primary/20 flex items-center justify-center animate-pulse-slow">
          <div className="absolute w-64 h-64 rounded-full border border-secondary/20 flex items-center justify-center animate-spin-slow">
            <div className="w-48 h-48 rounded-full border border-accent/20 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent shadow-[0_0_20px_#06b6d4] animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef} 
      className="w-full h-[350px] sm:h-[450px] md:h-[550px] relative select-none"
    />
  );
}
