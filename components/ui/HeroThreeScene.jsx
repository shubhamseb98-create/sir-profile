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
    scene.fog = new THREE.FogExp2(0x000000, 0.0012);

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

    const limeLight = new THREE.PointLight(0xCFFF04, 2.5, 800, 1.2);
    limeLight.position.set(-280, -100, 150);
    scene.add(limeLight);

    const neonLight = new THREE.PointLight(0x84CC16, 2.5, 800, 1.2);
    neonLight.position.set(280, 120, 150);
    scene.add(neonLight);

    // ── 3D FLOATING GEOMETRIES GROUP ──
    const shapesGroup = new THREE.Group();
    scene.add(shapesGroup);

    // 1. Sleek Central Orbiting Torus Knot (Wireframe Neon Lime)
    const torusKnotGeo = new THREE.TorusKnotGeometry(55, 14, 120, 20);
    const torusMat = new THREE.MeshStandardMaterial({
      color: 0xCFFF04,
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
      color: 0xCFFF04,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 2.5;
    shapesGroup.add(ring1);

    const ringGeo2 = new THREE.RingGeometry(140, 142, 64);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x84CC16,
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
      color: 0xCFFF04,
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

    // ── 5. PERSPECTIVE GRID FLOOR ──
    const gridHelper = new THREE.GridHelper(1600, 36, 0x334400, 0x182005);
    gridHelper.position.y = -220;
    scene.add(gridHelper);

    // ── FIXED CINEMATIC CAMERA & ANIMATION LOOP ──
    camera.position.set(0, 15, 420);
    camera.lookAt(0, 0, 0);

    const clock = new THREE.Clock();
    let animId;

    let isVisible = true;
    const animate = () => {
      if (!isVisible) {
        animId = null;
        return;
      }
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Rotate torus knot & rings smoothly in place
      torusKnot.rotation.x = time * 0.18;
      torusKnot.rotation.y = time * 0.25;
      ring1.rotation.z = time * 0.10;
      ring2.rotation.x = -time * 0.12;

      // Animate floating gems smoothly in place
      gems.forEach((gem, idx) => {
        gem.rotation.x += gem.userData.speed;
        gem.rotation.y += gem.userData.speed * 1.2;
        gem.position.y = gem.userData.baseY + Math.sin(time * 1.6 + idx * 1.2) * 18;
      });

      renderer.render(scene, camera);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        const nowVisible = entry.isIntersecting;
        if (nowVisible && !isVisible) {
          isVisible = true;
          if (!animId) animate();
        } else {
          isVisible = nowVisible;
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

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
      if (animId) cancelAnimationFrame(animId);
      observer.disconnect();
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
