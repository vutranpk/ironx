"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Text } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

// Helper for rounded plates
// Helper for rounded plates
function CastIronPlate({ position, radius, thickness, material }: any) {
  const edgeRadius = thickness / 2;
  const innerRadius = radius - edgeRadius;
  const bodyThickness = thickness * 0.7; // Thinner main body creates the classic indentation

  return (
    <group position={position} rotation={[0, 0, Math.PI / 2]}>
      {/* Central Hub */}
      <mesh material={material}>
        <cylinderGeometry args={[0.4, 0.4, thickness + 0.02, 32]} />
      </mesh>
      
      {/* Main flat body */}
      <mesh material={material}>
        <cylinderGeometry args={[innerRadius, innerRadius, bodyThickness, 64]} />
      </mesh>
      
      {/* Rounded edge */}
      {/* Torus is in XY plane (normal Z). Rotate around X to put normal on Y axis (matching cylinder) */}
      <mesh material={material} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[innerRadius, edgeRadius, 32, 64]} />
      </mesh>
    </group>
  );
}

// Procedural Realistic Dumbbell Model
function Dumbbell() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      const scrollY = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrollY / height));
      
      const waypoints = [
        { p: [0, 20, -50], r: [0, 0, 0] },                 // 0% (Hero)
        { p: [25, 0, -30], r: [0.2, 0.4, 0.2] },           // 11% (About 1)
        { p: [25, 0, -30], r: [0.4, 0.8, 0.4] },           // 22% (About 2)
        { p: [25, 0, -30], r: [0.6, 1.2, 0.6] },           // 33% (About 3)
        { p: [25, 0, -30], r: [0.8, 1.6, 0.8] },           // 44% (About 4)
        { p: [8, -2, -10], r: [1.0, 2.0, 1.0] },           // 55% (About 5 - Enters)
        { p: [-10, 0, -8], r: [1.2, 2.4, 1.2] },           // 66% (Classes)
        { p: [-12, -1, -6], r: [1.4, 2.8, 1.4] },          // 77% (Classes end)
        { p: [10, -2, -8], r: [1.6, 3.2, 1.6] },           // 88% (Coaches)
        { p: [0, 5, -20], r: [1.8, 3.6, 1.8] }             // 100% (CTA)
      ];

      const numSegments = waypoints.length - 1;
      const scaledProgress = progress * numSegments;
      const index = Math.floor(scaledProgress);
      const clampedIndex = Math.min(index, numSegments - 1);
      const t = scaledProgress - clampedIndex;

      const currentWp = waypoints[clampedIndex];
      const nextWp = waypoints[clampedIndex + 1];

      const targetX = THREE.MathUtils.lerp(currentWp.p[0], nextWp.p[0], t);
      const targetY = THREE.MathUtils.lerp(currentWp.p[1], nextWp.p[1], t);
      const targetZ = THREE.MathUtils.lerp(currentWp.p[2], nextWp.p[2], t);

      const targetRX = THREE.MathUtils.lerp(currentWp.r[0], nextWp.r[0], t);
      const targetRY = THREE.MathUtils.lerp(currentWp.r[1], nextWp.r[1], t);
      const targetRZ = THREE.MathUtils.lerp(currentWp.r[2], nextWp.r[2], t);

      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.015);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.015);
      groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, targetZ, 0.015);

      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRX, 0.015);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRY, 0.015);
      groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, targetRZ, 0.015);
      
      groupRef.current.rotation.x += delta * 0.05;
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  const chromeMaterial = new THREE.MeshPhysicalMaterial({
    color: "#ffffff",
    metalness: 1.0,
    roughness: 0.15,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
    envMapIntensity: 2.0
  });

  const gripMaterial = new THREE.MeshPhysicalMaterial({
    color: "#dddddd",
    metalness: 0.9,
    roughness: 0.6,
    envMapIntensity: 1.5
  });

  const castIronMaterial = new THREE.MeshPhysicalMaterial({
    color: "#1a1a1a",
    metalness: 0.7,
    roughness: 0.8,
    clearcoat: 0.05,
    envMapIntensity: 1.2
  });

  return (
    <group ref={groupRef} scale={1.8}>
      
      {/* CENTRAL HANDLE */}
      <mesh material={chromeMaterial} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.15, 0.15, 2.4, 32]} />
      </mesh>
      {/* Knurled Grip Area (slightly thicker and rougher) */}
      <mesh material={gripMaterial} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.16, 0.16, 1.4, 64]} />
      </mesh>

      {/* ================= LEFT SIDE ================= */}
      <group>
        {/* Inner Collar */}
        <mesh material={chromeMaterial} position={[-1.3, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.25, 0.25, 0.2, 32]} />
        </mesh>
        
        {/* Large Plate */}
        <CastIronPlate position={[-1.7, 0, 0]} radius={1.6} thickness={0.6} material={castIronMaterial} />
        
        {/* Small Plate */}
        <CastIronPlate position={[-2.25, 0, 0]} radius={1.2} thickness={0.5} material={castIronMaterial} />
        
        {/* Star Nut (Hex-like securing collar) */}
        <mesh material={chromeMaterial} position={[-2.6, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.35, 0.35, 0.2, 6]} />
        </mesh>
        
        {/* Threaded Rod End */}
        <mesh material={chromeMaterial} position={[-2.85, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.12, 0.12, 0.3, 32]} />
        </mesh>
        
        {/* Simulated threads using multiple thin toruses */}
        {/* Torus normal is Z, rotate around Y by 90deg to point normal along X axis */}
        {[...Array(6)].map((_, i) => (
          <mesh key={`l-thread-${i}`} material={chromeMaterial} position={[-2.75 - (i * 0.04), 0, 0]} rotation={[0, Math.PI / 2, 0]}>
            <torusGeometry args={[0.12, 0.015, 8, 32]} />
          </mesh>
        ))}
      </group>

      {/* ================= RIGHT SIDE ================= */}
      <group>
        {/* Inner Collar */}
        <mesh material={chromeMaterial} position={[1.3, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.25, 0.25, 0.2, 32]} />
        </mesh>
        
        {/* Large Plate */}
        <CastIronPlate position={[1.7, 0, 0]} radius={1.6} thickness={0.6} material={castIronMaterial} />
        
        {/* Small Plate */}
        <CastIronPlate position={[2.25, 0, 0]} radius={1.2} thickness={0.5} material={castIronMaterial} />
        
        {/* Star Nut */}
        <mesh material={chromeMaterial} position={[2.6, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.35, 0.35, 0.2, 6]} />
        </mesh>
        
        {/* Threaded Rod End */}
        <mesh material={chromeMaterial} position={[2.85, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.12, 0.12, 0.3, 32]} />
        </mesh>

        {/* Simulated threads */}
        {[...Array(6)].map((_, i) => (
          <mesh key={`r-thread-${i}`} material={chromeMaterial} position={[2.75 + (i * 0.04), 0, 0]} rotation={[0, Math.PI / 2, 0]}>
            <torusGeometry args={[0.12, 0.015, 8, 32]} />
          </mesh>
        ))}
      </group>

    </group>
  );
}

export default function Background3D() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 15], fov: 35 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={3} color="#ff4500" />
        <directionalLight position={[-10, -10, -10]} intensity={2} color="#ffffff" />
        <spotLight position={[0, 15, 0]} intensity={5} color="#ffffff" penumbra={1} />
        
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
          <Dumbbell />
        </Float>
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
