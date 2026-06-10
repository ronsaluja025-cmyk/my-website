import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedFluidObject() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Smooth, organic fluid rotation
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;

    // React to pointer
    const targetX = (state.pointer.x * Math.PI) / 6;
    const targetY = (state.pointer.y * Math.PI) / 6;
    
    meshRef.current.rotation.x += 0.05 * (targetY - meshRef.current.rotation.x);
    meshRef.current.rotation.y += 0.05 * (targetX - meshRef.current.rotation.y);

    // Flow through the website based on scroll
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollProgress = maxScroll > 0 ? scrollY / maxScroll : 0;

    // Start near the top, flow down to the bottom
    const startY = 1;
    const endY = -viewport.height * 0.4; // Moves down relative to the camera
    
    const targetPosY = startY + (endY - startY) * scrollProgress;
    
    // Move side-to-side dynamically in an S-curve based on scroll depth
    const targetPosX = state.pointer.x * 0.5 + Math.sin(scrollProgress * Math.PI * 2) * 2;

    // Smoothly interpolate (lerp) position for butter-smooth movement
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetPosY, 0.05);
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetPosX, 0.05);
    
    // Slowly grow in size as it moves down the page
    const targetScale = 1.5 + scrollProgress * 0.8;
    meshRef.current.scale.setScalar(THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.05));
  });

  return (
    <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} scale={1.5}>
        {/* Changed to a beautiful fluid Torus Knot geometry */}
        <torusKnotGeometry args={[1, 0.4, 256, 64]} />
        <MeshDistortMaterial 
          color="#ffffff" 
          distort={0.4} 
          speed={2} 
          roughness={0.1} 
          metalness={0.8}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transmission={0.8} // Glass-like property
          thickness={1.5}
          ior={1.4}
        />
      </mesh>
    </Float>
  );
}

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-80">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={1.5} />
        {/* High contrast dynamic lighting to catch the curves of the Torus */}
        <directionalLight position={[5, 5, 5]} intensity={4} color="#ffffff" />
        <directionalLight position={[-5, -5, 5]} intensity={3} color="#2563eb" />
        <directionalLight position={[0, 5, -5]} intensity={2} color="#a855f7" />
        <AnimatedFluidObject />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
