"use client";

import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function DotGlobe() {
  const groupRef = useRef<THREE.Group>(null);
  const points = useMemo(() => {
    const vertices: number[] = [];
    const colors: number[] = [];
    const colorA = new THREE.Color("#22d3ee");
    const colorB = new THREE.Color("#f472b6");
    const samples = 1400;

    for (let i = 0; i < samples; i += 1) {
      const y = 1 - (i / (samples - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = Math.PI * (3 - Math.sqrt(5)) * i;
      const x = Math.cos(theta) * radius;
      const z = Math.sin(theta) * radius;
      vertices.push(x, y, z);

      const mixed = colorA.clone().lerp(colorB, (y + 1) / 2);
      colors.push(mixed.r, mixed.g, mixed.b);
    }

    return {
      position: new Float32Array(vertices),
      color: new Float32Array(colors)
    };
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.16;
      groupRef.current.rotation.x = Math.sin(Date.now() * 0.00035) * 0.05;
    }
  });

  return (
    <group ref={groupRef} scale={0.9}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[points.position, 3]} />
          <bufferAttribute attach="attributes-color" args={[points.color, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.011} vertexColors transparent opacity={0.92} />
      </points>

      <mesh>
        <sphereGeometry args={[1.03, 64, 64]} />
        <meshBasicMaterial color="#172554" transparent opacity={0.16} wireframe />
      </mesh>

      {[0, 0.78, -0.78].map((tilt, index) => (
        <mesh key={tilt} rotation={[tilt, index * 0.72, index === 0 ? Math.PI / 2 : 0.35]}>
          <torusGeometry args={[1.12, 0.006, 10, 160]} />
          <meshBasicMaterial color={index === 1 ? "#22d3ee" : "#a855f7"} transparent opacity={0.72} />
        </mesh>
      ))}
    </group>
  );
}

export default function Globe() {
  return (
    <div className="relative h-[330px] w-full sm:h-[430px] lg:h-[540px]">
      <div className="absolute inset-10 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-4 right-8 top-10 w-3/4 rounded-full bg-violet-600/10 blur-3xl" />
      <Canvas camera={{ position: [0, 0, 3.75], fov: 40 }} dpr={[1, 2]}>
        <ambientLight intensity={0.8} />
        <pointLight position={[2, 2, 3]} intensity={1.2} color="#22d3ee" />
        <Stars radius={50} depth={20} count={900} factor={2.4} fade speed={0.4} />
        <DotGlobe />
        <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.55} autoRotate autoRotateSpeed={0.65} />
      </Canvas>
      <div className="pointer-events-none absolute left-2 top-16 rounded-xl border border-cyan-400/20 bg-slate-950/50 px-3.5 py-2.5 shadow-glow backdrop-blur md:left-9">
        <p className="text-[0.68rem] text-slate-400">Experience</p>
        <p className="gradient-text text-lg font-black">4+ ans</p>
      </div>
      <div className="pointer-events-none absolute right-2 top-24 rounded-xl border border-violet-400/20 bg-slate-950/50 px-3.5 py-2.5 shadow-violet backdrop-blur md:right-8">
        <p className="text-[0.68rem] text-slate-400">Stack</p>
        <p className="text-lg font-black text-violet-300">15+</p>
      </div>
      <div className="pointer-events-none absolute bottom-16 left-4 rounded-xl border border-pink-400/20 bg-slate-950/50 px-3.5 py-2.5 shadow-violet backdrop-blur md:left-12">
        <p className="text-[0.68rem] text-slate-400">Projects</p>
        <p className="text-lg font-black text-pink-300">10+</p>
      </div>
    </div>
  );
}
