"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import {
  SIGNATURE_HEIGHT,
  SIGNATURE_STROKES,
  SIGNATURE_VIEWBOX,
  SIGNATURE_WIDTH,
} from "@/data/signaturePaths";

const WRITE_DURATION_MS = 2350;
const HOLD_AFTER_WRITE_MS = 350;
const EXIT_AT_MS = WRITE_DURATION_MS + HOLD_AFTER_WRITE_MS; // 2700ms
const UNMOUNT_AT_MS = EXIT_AT_MS + 820;

export default function Preloader() {
  const [isExiting, setIsExiting] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  const canvasHostRef = useRef(null);
  const svgWrapRef = useRef(null);
  const maskPathRefs = useRef([]);
  const corePathRefs = useRef([]);
  const sigImageRef = useRef(null);
  const nibCoreRef = useRef(null);
  const nibHaloRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("da_preloader_seen") === "true";
    } catch {
      // storage unavailable
    }

    if (seen && process.env.NODE_ENV === "production") {
      window.__DA_PRELOADER_EXITED__ = true;
      window.dispatchEvent(new CustomEvent("da-preloader-exit"));
      const skipId = requestAnimationFrame(() => setIsMounted(false));
      return () => cancelAnimationFrame(skipId);
    }

    window.__DA_PRELOADER_EXITED__ = false;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Measure SVG strokes independently of WebGL
    const lengths = SIGNATURE_STROKES.map((_, idx) => {
      const el = corePathRefs.current[idx];
      if (!el) return 0;
      const len = el.getTotalLength();
      const maskEl = maskPathRefs.current[idx];
      const dash = `${len} ${len}`;
      el.style.strokeDasharray = dash;
      el.style.strokeDashoffset = prefersReducedMotion ? "0" : `${len}`;
      if (maskEl) {
        maskEl.style.strokeDasharray = dash;
        maskEl.style.strokeDashoffset = prefersReducedMotion ? "0" : `${len}`;
      }
      return len;
    });

    const cumulative = [];
    let totalLen = 0;
    for (let i = 0; i < lengths.length; i++) {
      cumulative.push(totalLen);
      totalLen += lengths[i];
    }

    // Shared pen state consumed by optional Three.js spark trail
    const penState = {
      active: false,
      normX: 0,
      normY: 0,
      rectW: 460,
      rectH: 154,
    };

    // ── Optional Three.js Spark & Dust Field (never blocks handwriting loop) ──
    const host = canvasHostRef.current;
    let renderer;
    let ambientGeo;
    let ambientMat;
    let sparkGeo;
    let sparkMat;
    let spriteTex;
    let webglRafId = 0;
    let removeResizeListener = null;

    if (host && !prefersReducedMotion) {
      try {
        const width = host.clientWidth || window.innerWidth;
        const height = host.clientHeight || window.innerHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
        camera.position.z = 12;

        renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        renderer.setSize(width, height);
        renderer.setClearColor(0x000000, 0);
        host.appendChild(renderer.domElement);

        const spriteCanvas = document.createElement("canvas");
        spriteCanvas.width = 64;
        spriteCanvas.height = 64;
        const sctx = spriteCanvas.getContext("2d");
        if (sctx) {
          const grad = sctx.createRadialGradient(32, 32, 0, 32, 32, 32);
          grad.addColorStop(0, "rgba(255,255,255,1)");
          grad.addColorStop(0.28, "rgba(212,175,55,0.85)");
          grad.addColorStop(1, "rgba(212,175,55,0)");
          sctx.fillStyle = grad;
          sctx.fillRect(0, 0, 64, 64);
        }
        spriteTex = new THREE.CanvasTexture(spriteCanvas);

        const AMBIENT_COUNT = 100;
        const ambientPos = new Float32Array(AMBIENT_COUNT * 3);
        for (let i = 0; i < AMBIENT_COUNT; i++) {
          ambientPos[i * 3] = (Math.random() - 0.5) * 20;
          ambientPos[i * 3 + 1] = (Math.random() - 0.5) * 12;
          ambientPos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
        }
        ambientGeo = new THREE.BufferGeometry();
        ambientGeo.setAttribute("position", new THREE.BufferAttribute(ambientPos, 3));
        ambientMat = new THREE.PointsMaterial({
          size: 0.15,
          map: spriteTex,
          color: 0xd4af37,
          transparent: true,
          opacity: 0.4,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        });
        const ambientPoints = new THREE.Points(ambientGeo, ambientMat);
        scene.add(ambientPoints);

        const SPARK_COUNT = 140;
        const sparkAges = new Float32Array(SPARK_COUNT).fill(99);
        const sparkLifetimes = new Float32Array(SPARK_COUNT).fill(0.7);
        const sparkVel = new Float32Array(SPARK_COUNT * 3);
        const sparkPos = new Float32Array(SPARK_COUNT * 3);
        for (let i = 0; i < SPARK_COUNT; i++) sparkPos[i * 3 + 2] = -99;
        let nextSpark = 0;

        sparkGeo = new THREE.BufferGeometry();
        sparkGeo.setAttribute("position", new THREE.BufferAttribute(sparkPos, 3));
        sparkMat = new THREE.PointsMaterial({
          size: 0.24,
          map: spriteTex,
          color: 0xd4af37,
          transparent: true,
          opacity: 0.92,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        });
        scene.add(new THREE.Points(sparkGeo, sparkMat));

        const handleResize = () => {
          if (!host || !renderer) return;
          const w = host.clientWidth || window.innerWidth;
          const h = host.clientHeight || window.innerHeight;
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        };
        window.addEventListener("resize", handleResize);
        removeResizeListener = () => window.removeEventListener("resize", handleResize);

        let lastTime = performance.now();
        const renderWebGL = (now) => {
          const dt = Math.min((now - lastTime) / 1000, 0.05);
          lastTime = now;

          // Project pen coordinates accurately to WebGL z=0 plane
          const curW = host.clientWidth || window.innerWidth;
          const curH = host.clientHeight || window.innerHeight;
          const visibleHeightAtZ0 =
            2 * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2) * camera.position.z;
          const visibleWidthAtZ0 = visibleHeightAtZ0 * (curW / curH);
          const worldSigW = (penState.rectW / curW) * visibleWidthAtZ0;
          const worldSigH = (penState.rectH / curH) * visibleHeightAtZ0;

          if (penState.active) {
            const wx = penState.normX * worldSigW;
            const wy = penState.normY * worldSigH;
            for (let s = 0; s < 2; s++) {
              const idx = nextSpark % SPARK_COUNT;
              nextSpark++;
              sparkAges[idx] = 0;
              sparkLifetimes[idx] = 0.42 + Math.random() * 0.42;
              sparkPos[idx * 3] = wx + (Math.random() - 0.5) * 0.08;
              sparkPos[idx * 3 + 1] = wy + (Math.random() - 0.5) * 0.08;
              sparkPos[idx * 3 + 2] = 0;
              sparkVel[idx * 3] = (Math.random() - 0.65) * 0.95;
              sparkVel[idx * 3 + 1] = (Math.random() - 0.25) * 1.15;
              sparkVel[idx * 3 + 2] = (Math.random() - 0.5) * 0.4;
            }
          }

          for (let i = 0; i < SPARK_COUNT; i++) {
            if (sparkAges[i] < sparkLifetimes[i]) {
              sparkAges[i] += dt;
              sparkPos[i * 3] += sparkVel[i * 3] * dt;
              sparkPos[i * 3 + 1] += sparkVel[i * 3 + 1] * dt;
              sparkPos[i * 3 + 2] += sparkVel[i * 3 + 2] * dt;
              sparkVel[i * 3 + 1] += 0.55 * dt;
            } else {
              sparkPos[i * 3 + 2] = -99;
            }
          }
          sparkGeo.attributes.position.needsUpdate = true;
          ambientPoints.rotation.y += dt * 0.045;
          ambientPoints.rotation.x += dt * 0.018;

          renderer.render(scene, camera);
          webglRafId = requestAnimationFrame(renderWebGL);
        };
        webglRafId = requestAnimationFrame(renderWebGL);
      } catch {
        // Optional particle aura omitted cleanly if WebGL context unavailable
      }
    }

    // ── Primary Independent Stroke-by-Stroke SVG Handwriting Loop ──
    let writeRafId = 0;
    const startWrite = performance.now();

    const stepHandwriting = (now) => {
      if (prefersReducedMotion) {
        if (sigImageRef.current) sigImageRef.current.removeAttribute("mask");
        if (progressBarRef.current) progressBarRef.current.style.transform = "scaleX(1)";
        return;
      }

      const elapsed = now - startWrite;
      const rawT = Math.min(elapsed / WRITE_DURATION_MS, 1);
      // Smooth slight ease-in-out calligraphy pace
      const easedT =
        rawT < 0.5
          ? 2 * rawT * rawT
          : 1 - Math.pow(-2 * rawT + 2, 2) / 2;
      const drawnTarget = easedT * totalLen;

      if (svgWrapRef.current) {
        const rect = svgWrapRef.current.getBoundingClientRect();
        if (rect.width > 0) {
          penState.rectW = rect.width;
          penState.rectH = rect.height;
        }
      }

      let activeIdx = lengths.length - 1;
      for (let i = 0; i < lengths.length; i++) {
        const start = cumulative[i];
        const len = lengths[i];
        const end = start + len;
        const coreEl = corePathRefs.current[i];
        const maskEl = maskPathRefs.current[i];

        if (drawnTarget >= end) {
          if (coreEl) coreEl.style.strokeDashoffset = "0";
          if (maskEl) maskEl.style.strokeDashoffset = "0";
        } else if (drawnTarget <= start) {
          if (coreEl) coreEl.style.strokeDashoffset = `${len}`;
          if (maskEl) maskEl.style.strokeDashoffset = `${len}`;
        } else {
          const localDrawn = drawnTarget - start;
          const remaining = Math.max(0, len - localDrawn);
          if (coreEl) coreEl.style.strokeDashoffset = `${remaining}`;
          if (maskEl) maskEl.style.strokeDashoffset = `${remaining}`;
          activeIdx = i;
        }
      }

      // Track live pen coordinates on active stroke
      if (rawT < 1 && totalLen > 0) {
        const activeStart = cumulative[activeIdx];
        const localLen = Math.min(
          lengths[activeIdx],
          Math.max(0, drawnTarget - activeStart)
        );
        const activeEl = corePathRefs.current[activeIdx];
        if (activeEl) {
          const pt = activeEl.getPointAtLength(localLen);
          if (nibCoreRef.current) {
            nibCoreRef.current.setAttribute("cx", pt.x.toFixed(2));
            nibCoreRef.current.setAttribute("cy", pt.y.toFixed(2));
            nibCoreRef.current.setAttribute("opacity", "1");
          }
          if (nibHaloRef.current) {
            nibHaloRef.current.setAttribute("cx", pt.x.toFixed(2));
            nibHaloRef.current.setAttribute("cy", pt.y.toFixed(2));
            nibHaloRef.current.setAttribute("opacity", "0.5");
          }
          penState.active = true;
          penState.normX = pt.x / SIGNATURE_WIDTH - 0.5;
          penState.normY = 0.5 - pt.y / SIGNATURE_HEIGHT;
        }
      } else {
        penState.active = false;
        if (nibCoreRef.current) nibCoreRef.current.setAttribute("opacity", "0");
        if (nibHaloRef.current) nibHaloRef.current.setAttribute("opacity", "0");
        // Fade ink overlay smoothly once all calligraphy strokes complete
        if (sigImageRef.current) sigImageRef.current.removeAttribute("mask");
      }

      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${easedT})`;
      }

      if (rawT < 1) {
        writeRafId = requestAnimationFrame(stepHandwriting);
      }
    };

    writeRafId = requestAnimationFrame(stepHandwriting);

    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      window.__DA_PRELOADER_EXITED__ = true;
      window.dispatchEvent(new CustomEvent("da-preloader-exit"));
    }, EXIT_AT_MS);

    const finishTimer = setTimeout(() => {
      setIsMounted(false);
      try {
        sessionStorage.setItem("da_preloader_seen", "true");
      } catch {
        // ignore
      }
    }, UNMOUNT_AT_MS);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
      if (writeRafId) cancelAnimationFrame(writeRafId);
      if (webglRafId) cancelAnimationFrame(webglRafId);
      if (removeResizeListener) removeResizeListener();
      ambientGeo?.dispose();
      ambientMat?.dispose();
      sparkGeo?.dispose();
      sparkMat?.dispose();
      spriteTex?.dispose();
      if (renderer) {
        renderer.dispose();
        renderer.domElement?.remove();
      }
    };
  }, []);

  if (!isMounted) return null;

  return (
    <aside
      aria-label="Loading site presentation"
      className={`fixed inset-0 z-[9999] select-none overflow-hidden font-sans bg-[#000000] transition-all duration-800 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isExiting
          ? "-translate-y-full opacity-0 pointer-events-none"
          : "translate-y-0 opacity-100 pointer-events-auto"
      }`}
    >
      {/* ── Three.js Particle Aura & Pen-Tip Spark Trail ── */}
      <div
        ref={canvasHostRef}
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-10"
      />

      {/* ── Center Calligraphic Stroke-by-Stroke Stage (Pure Black Before Writing) ── */}
      <div
        className={`relative z-20 h-full w-full flex flex-col items-center justify-center px-6 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isExiting ? "-translate-y-16 opacity-0 scale-95" : "translate-y-0 opacity-100 scale-100"
        }`}
      >
        <div className="relative flex flex-col items-center justify-center">
          {/* Subtle Ambient Glow Behind Writing Area */}
          <div className="absolute w-72 sm:w-[460px] h-32 sm:h-44 rounded-full bg-[#D4AF37]/12 blur-[90px] pointer-events-none" />

          {/* Exact Vector-Masked Calligraphic Signature */}
          <div
            ref={svgWrapRef}
            className="relative w-72 sm:w-[420px] md:w-[500px] aspect-[942/320]"
          >
            <svg
              viewBox={SIGNATURE_VIEWBOX}
              className="w-full h-full overflow-visible"
              aria-label="Dheeraj Aggarwal Signature"
            >
              <defs>
                <mask
                  id="daSignatureWriteMask"
                  maskUnits="userSpaceOnUse"
                  maskContentUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width={SIGNATURE_WIDTH}
                  height={SIGNATURE_HEIGHT}
                >
                  <rect width={SIGNATURE_WIDTH} height={SIGNATURE_HEIGHT} fill="black" />
                  {SIGNATURE_STROKES.map((d, idx) => (
                    <path
                      key={`mask-${idx}`}
                      ref={(el) => {
                        maskPathRefs.current[idx] = el;
                      }}
                      d={d}
                      fill="none"
                      stroke="white"
                      strokeWidth="15"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        strokeDasharray: "9999 9999",
                        strokeDashoffset: 9999,
                      }}
                    />
                  ))}
                </mask>

                <filter id="daSignatureGlow" x="-15%" y="-25%" width="130%" height="150%">
                  <feDropShadow
                    dx="0"
                    dy="0"
                    stdDeviation="4.5"
                    floodColor="#D4AF37"
                    floodOpacity="0.45"
                  />
                </filter>
              </defs>

              {/* High-res 3D metallic gold signature revealed along active calligraphy paths */}
              <g filter="url(#daSignatureGlow)">
                <image
                  ref={sigImageRef}
                  href="/cl-logo/dheeraj-gold-logo.png"
                  x="0"
                  y="0"
                  width={SIGNATURE_WIDTH}
                  height={SIGNATURE_HEIGHT}
                  preserveAspectRatio="xMidYMid meet"
                  mask="url(#daSignatureWriteMask)"
                />
              </g>

              {/* Luminous Champagne Gold Core Following Pen Tip */}
              <g>
                {SIGNATURE_STROKES.map((d, idx) => (
                  <path
                    key={`core-${idx}`}
                    ref={(el) => {
                      corePathRefs.current[idx] = el;
                    }}
                    d={d}
                    fill="none"
                    stroke="#E5C665"
                    strokeOpacity="0.55"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      strokeDasharray: "9999 9999",
                      strokeDashoffset: 9999,
                    }}
                  />
                ))}
              </g>

              {/* Live Pen Nib Halo & Sparkling Core */}
              <circle
                ref={nibHaloRef}
                cx="0"
                cy="0"
                r="14"
                fill="#D4AF37"
                opacity="0"
                style={{ filter: "blur(6px)" }}
              />
              <circle
                ref={nibCoreRef}
                cx="0"
                cy="0"
                r="4.2"
                fill="#D4AF37"
                opacity="0"
              />
            </svg>
          </div>

          {/* Minimal Bottom Hairline Progress */}
          <div className="mt-5 w-44 sm:w-56 h-[1.5px] bg-white/10 rounded-full overflow-hidden">
            <div
              ref={progressBarRef}
              className="h-full w-full bg-gradient-to-r from-[#D4AF37]/40 via-[#D4AF37] to-white origin-left"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
