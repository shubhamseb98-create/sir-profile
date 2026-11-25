"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Interactive Three.js studio backdrop for the Hero section:
 * - Undulating 3D luminous particle-wave floor (#D4AF37 + soft white crests)
 * - Soft radial-glow atmospheric bokeh motes
 * - Smooth mouse-tracked camera & studio light parallax
 */
export default function HeroThreeScene() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.00125);

    const camera = new THREE.PerspectiveCamera(50, width / height, 1, 2000);
    camera.position.set(0, 42, 430);

    // ── STUDIO LIGHTS ──
    const ambientLight = new THREE.AmbientLight(0x241f0b, 2.0);
    scene.add(ambientLight);

    const keyLight = new THREE.PointLight(0xd4af37, 5.0, 950, 1.1);
    keyLight.position.set(0, 110, 260);
    scene.add(keyLight);

    const rimLeft = new THREE.PointLight(0xd4af37, 3.4, 750, 1.25);
    rimLeft.position.set(-360, 40, 140);
    scene.add(rimLeft);

    const rimRight = new THREE.PointLight(0xffffff, 2.6, 750, 1.25);
    rimRight.position.set(360, -10, 160);
    scene.add(rimRight);

    // ── PROCEDURAL SOFT RADIAL PARTICLE TEXTURE ──
    const spriteCanvas = document.createElement("canvas");
    spriteCanvas.width = 64;
    spriteCanvas.height = 64;
    const sCtx = spriteCanvas.getContext("2d");
    if (sCtx) {
      const grad = sCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, "rgba(255, 255, 255, 1)");
      grad.addColorStop(0.32, "rgba(255, 255, 255, 0.85)");
      grad.addColorStop(0.68, "rgba(255, 255, 255, 0.22)");
      grad.addColorStop(1, "rgba(255, 255, 255, 0)");
      sCtx.fillStyle = grad;
      sCtx.fillRect(0, 0, 64, 64);
    }
    const particleTexture = new THREE.CanvasTexture(spriteCanvas);

    // ── 1. 3D LUMINOUS PARTICLE-WAVE STUDIO FLOOR ──
    const cols = 72;
    const rows = 40;
    const sepX = 20;
    const sepZ = 20;
    const waveCount = cols * rows;
    const wavePositions = new Float32Array(waveCount * 3);
    const waveColors = new Float32Array(waveCount * 3);

    const neonCol = new THREE.Color(0xd4af37);
    const dimCol = new THREE.Color(0x8f5e06);
    const whiteCol = new THREE.Color(0xfcf6ba);

    let ptr = 0;
    for (let ix = 0; ix < cols; ix++) {
      for (let iz = 0; iz < rows; iz++) {
        const x = (ix - cols / 2) * sepX;
        const z = (iz - rows / 2) * sepZ - 105;
        wavePositions[ptr * 3] = x;
        wavePositions[ptr * 3 + 1] = -135;
        wavePositions[ptr * 3 + 2] = z;

        const distNorm = Math.min(1, Math.hypot(x, z + 105) / 760);
        const sheen = 0.5 + 0.5 * Math.sin(ix * 0.14 + iz * 0.18);
        const c = (ix + iz) % 7 === 0 ? whiteCol : dimCol.clone().lerp(neonCol, 0.35 + sheen * 0.65);
        const mixed = c.clone().lerp(dimCol, distNorm * 0.65);
        waveColors[ptr * 3] = mixed.r;
        waveColors[ptr * 3 + 1] = mixed.g;
        waveColors[ptr * 3 + 2] = mixed.b;
        ptr++;
      }
    }

    const waveGeo = new THREE.BufferGeometry();
    waveGeo.setAttribute("position", new THREE.BufferAttribute(wavePositions, 3));
    waveGeo.setAttribute("color", new THREE.BufferAttribute(waveColors, 3));

    const waveMat = new THREE.PointsMaterial({
      size: 5.0,
      map: particleTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.88,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const wavePoints = new THREE.Points(waveGeo, waveMat);
    scene.add(wavePoints);

    // ── 2. ATMOSPHERIC FLOATING BOKEH MOTES (PERIPHERAL) ──
    const moteCount = 200;
    const motePositions = new Float32Array(moteCount * 3);
    const moteColors = new Float32Array(moteCount * 3);
    const moteMeta = [];

    for (let i = 0; i < moteCount; i++) {
      const sideBias = i % 2 === 0 ? 1 : -1;
      const x =
        i % 5 === 0
          ? (Math.random() - 0.5) * 920
          : sideBias * (175 + Math.random() * 340);
      const y = (Math.random() - 0.5) * 440;
      const z = -250 + Math.random() * 360;

      motePositions[i * 3] = x;
      motePositions[i * 3 + 1] = y;
      motePositions[i * 3 + 2] = z;

      const col = i % 3 !== 0 ? neonCol : whiteCol;
      moteColors[i * 3] = col.r;
      moteColors[i * 3 + 1] = col.g;
      moteColors[i * 3 + 2] = col.b;

      moteMeta.push({
        baseX: x,
        speed: 0.25 + Math.random() * 0.55,
        phase: Math.random() * Math.PI * 2,
      });
    }

    const moteGeo = new THREE.BufferGeometry();
    moteGeo.setAttribute("position", new THREE.BufferAttribute(motePositions, 3));
    moteGeo.setAttribute("color", new THREE.BufferAttribute(moteColors, 3));

    const moteMat = new THREE.PointsMaterial({
      size: 7.5,
      map: particleTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const motePoints = new THREE.Points(moteGeo, moteMat);
    scene.add(motePoints);

    // ── INTERACTIVE MOUSE PARALLAX ──
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handlePointerMove = (e) => {
      mouse.targetX = (e.clientX / Math.max(1, window.innerWidth) - 0.5) * 2;
      mouse.targetY = (e.clientY / Math.max(1, window.innerHeight) - 0.5) * 2;
    };
    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    const clock = new THREE.Clock();
    let animId = null;
    let isVisible = true;

    const updateWaveAndScene = (time) => {
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      camera.position.x = mouse.x * 26;
      camera.position.y = 42 - mouse.y * 14;
      camera.lookAt(0, -10, -80);

      keyLight.position.x = mouse.x * 160;
      keyLight.position.y = 110 - mouse.y * 80;

      const posAttr = waveGeo.attributes.position;
      let idx = 0;
      for (let ix = 0; ix < cols; ix++) {
        for (let iz = 0; iz < rows; iz++) {
          const x = posAttr.getX(idx);
          const z = posAttr.getZ(idx);
          const y =
            -135 +
            Math.sin(x * 0.013 + time * 1.05) * 14 +
            Math.cos(z * 0.015 + time * 0.85) * 12 +
            Math.sin((x + z) * 0.008 - time * 0.6) * 8;
          posAttr.setY(idx, y);
          idx++;
        }
      }
      posAttr.needsUpdate = true;

      const moteAttr = moteGeo.attributes.position;
      for (let i = 0; i < moteCount; i++) {
        const m = moteMeta[i];
        const yOffset = ((time * m.speed * 18 + i * 11) % 440) - 220;
        moteAttr.setX(i, m.baseX + Math.sin(time * 0.5 + m.phase) * 14);
        moteAttr.setY(i, yOffset);
      }
      moteAttr.needsUpdate = true;
    };

    const animate = () => {
      if (!isVisible) {
        animId = null;
        return;
      }
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();
      updateWaveAndScene(time);
      renderer.render(scene, camera);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        const nowVisible = entry.isIntersecting;
        if (nowVisible && !isVisible) {
          isVisible = true;
          if (!prefersReducedMotion && !animId) animate();
        } else {
          isVisible = nowVisible;
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    if (prefersReducedMotion) {
      updateWaveAndScene(0);
      renderer.render(scene, camera);
    } else {
      animate();
    }

    const onResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      if (prefersReducedMotion) renderer.render(scene, camera);
    };
    window.addEventListener("resize", onResize);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", onResize);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      particleTexture.dispose();
      waveGeo.dispose();
      waveMat.dispose();
      moteGeo.dispose();
      moteMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none z-[1] overflow-hidden"
    />
  );
}
