"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroThreeScene() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0f1a, 0.0012);

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(55, width / height, 1, 2000);
    camera.position.set(0, 15, 420);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // ── LIGHTS ──
    const ambientLight = new THREE.AmbientLight(0x0f294d, 2.0);
    scene.add(ambientLight);

    const mouseLight = new THREE.PointLight(0x38bdf8, 4.0, 700, 1.1);
    mouseLight.position.set(0, 50, 220);
    scene.add(mouseLight);

    const blueLight = new THREE.PointLight(0x2563eb, 3.0, 800, 1.2);
    blueLight.position.set(-280, -100, 150);
    scene.add(blueLight);

    const cyanLight = new THREE.PointLight(0x06b6d4, 3.0, 800, 1.2);
    cyanLight.position.set(280, 120, 150);
    scene.add(cyanLight);

    // ── 3D FLOATING GEOMETRIES GROUP ──
    const shapesGroup = new THREE.Group();
    scene.add(shapesGroup);

    // 1. Sleek Central Orbiting Torus Knot (Wireframe Cyan)
    const torusKnotGeo = new THREE.TorusKnotGeometry(55, 14, 120, 20);
    const torusMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
      roughness: 0.1,
      metalness: 0.9,
    });
    const torusKnot = new THREE.Mesh(torusKnotGeo, torusMat);
    torusKnot.position.set(0, 0, -80);
    shapesGroup.add(torusKnot);

    // 2. Futuristic Cyber Rings
    const ringGeo1 = new THREE.RingGeometry(110, 112, 64);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 2.5;
    shapesGroup.add(ring1);

    const ringGeo2 = new THREE.RingGeometry(140, 142, 64);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.25,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 3;
    ring2.rotation.x = Math.PI / 6;
    shapesGroup.add(ring2);

    // 3. Orbiting 3D Faceted Icosahedrons (Gems)
    const gemGeo = new THREE.IcosahedronGeometry(24, 0);
    const gemMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.55,
      metalness: 0.9,
    });

    const gems = [];
    const gemData = [
      { x: -340, y: 110, z: -40, speed: 0.008, scale: 1.1 },
      { x: 350, y: -90, z: -30, speed: -0.007, scale: 1.0 },
      { x: -280, y: -140, z: -90, speed: 0.009, scale: 0.8 },
      { x: 300, y: 140, z: -80, speed: -0.006, scale: 0.9 },
    ];

    gemData.forEach((d) => {
      const gem = new THREE.Mesh(gemGeo, gemMat);
      gem.position.set(d.x, d.y, d.z);
      gem.scale.setScalar(d.scale);
      gem.userData = { speed: d.speed, baseY: d.y };
      shapesGroup.add(gem);
      gems.push(gem);
    });

    // ── 4. GLOWING 3D PARTICLE FIELD ──
    const particleCount = 1400;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const initPositions = [];

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 1400;
      const y = (Math.random() - 0.5) * 900;
      const z = (Math.random() - 0.5) * 800 - 50;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      initPositions.push({ x, y, z });
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Crisp circular glow particle texture
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    const radGrad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    radGrad.addColorStop(0, "rgba(255, 255, 255, 1)");
    radGrad.addColorStop(0.25, "rgba(56, 189, 248, 0.95)");
    radGrad.addColorStop(0.65, "rgba(14, 116, 144, 0.35)");
    radGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = radGrad;
    ctx.fillRect(0, 0, 64, 64);

    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMat = new THREE.PointsMaterial({
      size: 8,
      map: particleTexture,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ── 5. PERSPECTIVE GRID FLOOR ──
    const gridHelper = new THREE.GridHelper(1600, 36, 0x1e3a5f, 0x0c1e36);
    gridHelper.position.y = -220;
    scene.add(gridHelper);

    // ── MOUSE PARALLAX & ANIMATION LOOP ──
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMouseMove = (e) => {
      const halfW = window.innerWidth / 2;
      const halfH = window.innerHeight / 2;
      targetX = (e.clientX - halfW) * 0.45;
      targetY = (e.clientY - halfH) * 0.45;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    const clock = new THREE.Clock();
    let animId;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Smooth camera parallax
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      camera.position.x = currentX * 0.55;
      camera.position.y = 15 - currentY * 0.35;
      camera.lookAt(0, 0, 0);

      // Light tracking
      mouseLight.position.x = currentX * 1.4;
      mouseLight.position.y = -currentY * 1.4;

      // Rotate torus knot & rings
      torusKnot.rotation.x = time * 0.22;
      torusKnot.rotation.y = time * 0.32;
      ring1.rotation.z = time * 0.12;
      ring2.rotation.x = -time * 0.16;

      // Animate floating gems
      gems.forEach((gem, idx) => {
        gem.rotation.x += gem.userData.speed;
        gem.rotation.y += gem.userData.speed * 1.2;
        gem.position.y = gem.userData.baseY + Math.sin(time * 1.6 + idx * 1.2) * 18;
      });

      // Wave ripple on particles
      const posAttr = particleGeo.attributes.position;
      for (let i = 0; i < particleCount; i++) {
        const init = initPositions[i];
        const wave = Math.sin(time * 1.3 + init.x * 0.008 + init.z * 0.008) * 14;
        posAttr.setY(i, init.y + wave);
      }
      posAttr.needsUpdate = true;
      particles.rotation.y = time * 0.018;

      renderer.render(scene, camera);
    };

    animate();

    const onResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      torusKnotGeo.dispose();
      torusMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      gemGeo.dispose();
      gemMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      particleTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: 0.95 }}
    />
  );
}
