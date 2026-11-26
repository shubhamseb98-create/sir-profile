"use client";

import React, { useEffect, useRef } from "react";

export default function FooterFloatingBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let isVisible = true;
    let width = 0;
    let height = 0;

    const handleResize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect ? rect.width : window.innerWidth;
      height = rect ? rect.height : 360;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Pause rendering when footer is scrolled out of viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    let time = 0;

    const render = () => {
      if (isVisible && width > 0 && height > 0) {
        ctx.clearRect(0, 0, width, height);

        time += 0.008;

        // Base horizontal baseline for the aurora ribbons (anchored near bottom, below text)
        const baseH = height * 0.84;

        // ── Ribbon 1: Subtle Gold Wave ──
        ctx.save();
        const grad1 = ctx.createLinearGradient(0, height * 0.5, width, height);
        grad1.addColorStop(0, "rgba(212,175,55, 0.0)");
        grad1.addColorStop(0.3, "rgba(212,175,55, 0.03)");
        grad1.addColorStop(0.7, "rgba(154, 107, 12, 0.025)");
        grad1.addColorStop(1, "rgba(212,175,55, 0.0)");

        ctx.fillStyle = grad1;
        ctx.beginPath();
        ctx.moveTo(0, height);

        for (let x = 0; x <= width; x += 15) {
          const y =
            baseH +
            Math.sin(x * 0.0035 + time * 0.8) * 18 +
            Math.cos(x * 0.007 - time * 0.5) * 9 +
            Math.sin(x * 0.0015 + time * 0.3) * 10;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fill();
        ctx.restore();

        // ── Ribbon 2: Secondary Gold Ribbon ──
        ctx.save();
        const grad2 = ctx.createLinearGradient(0, height * 0.55, width, height);
        grad2.addColorStop(0, "rgba(212,175,55, 0.0)");
        grad2.addColorStop(0.25, "rgba(212,175,55, 0.04)");
        grad2.addColorStop(0.65, "rgba(252, 246, 186, 0.03)");
        grad2.addColorStop(1, "rgba(212,175,55, 0.0)");

        ctx.fillStyle = grad2;
        ctx.beginPath();
        ctx.moveTo(0, height);

        const ribbonPoints = [];
        for (let x = 0; x <= width; x += 12) {
          const y =
            baseH -
            8 +
            Math.sin(x * 0.0042 + time) * 16 +
            Math.sin(x * 0.0085 - time * 0.7) * 8 +
            Math.cos(x * 0.002 + time * 0.4) * 10;
          ribbonPoints.push({ x, y });
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fill();
        ctx.restore();

        // ── Ribbon 3: Crisp Metallic Crest Line (no blur glow) ──
        ctx.save();
        ctx.strokeStyle = "rgba(212,175,55, 0.16)";
        ctx.lineWidth = 1;

        ctx.beginPath();
        if (ribbonPoints.length > 0) {
          ctx.moveTo(ribbonPoints[0].x, ribbonPoints[0].y);
          for (let i = 1; i < ribbonPoints.length; i++) {
            ctx.lineTo(ribbonPoints[i].x, ribbonPoints[i].y);
          }
          ctx.stroke();
        }
        ctx.restore();

        // ── Ribbon 4: Secondary Ultra-Faint Wave ──
        ctx.save();
        ctx.shadowBlur = 4;
        ctx.shadowColor = "rgba(163, 230, 53, 0.2)";
        ctx.strokeStyle = "rgba(163, 230, 53, 0.1)";
        ctx.lineWidth = 0.75;

        ctx.beginPath();
        for (let x = 0; x <= width; x += 15) {
          const y =
            baseH +
            10 +
            Math.cos(x * 0.0048 - time * 0.9) * 14 +
            Math.sin(x * 0.009 + time * 0.6) * 7;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
    >
      {/* ── Fluid Aurora Canvas Wave (Soft & Crisp) ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none block opacity-75"
      />

      {/* ── Top Border Divider Hairline ── */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent pointer-events-none" />
    </div>
  );
}
