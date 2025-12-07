'use client';

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useRef, useEffect } from "react";
import * as THREE from "three";

import { waveFragmentShader, waveVertexShader } from './shaders';
import './scene.css';

const DPR = 1;

const DitheredWaves = () => {
  const mesh = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  const uniforms = {
    time: {
      value: 0.0,
    },
    resolution: new THREE.Uniform(new THREE.Vector2()),
    colorNum: new THREE.Uniform(4.0),
    pixelSize: new THREE.Uniform(2.0),
    mouse: new THREE.Uniform(new THREE.Vector2(0.5, 0.5)),
  };

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX / window.innerWidth;
      mouseRef.current.y = 1.0 - (e.clientY / window.innerHeight); // Flip Y coordinate
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    const { clock } = state;
    if (mesh.current && mesh.current.material) {
      const material = mesh.current.material as THREE.ShaderMaterial;
      material.uniforms.time.value = clock.getElapsedTime();
      material.uniforms.resolution.value = new THREE.Vector2(
        window.innerWidth * DPR,
        window.innerHeight * DPR
      );
      // Smoothly update mouse position
      material.uniforms.mouse.value.lerp(
        new THREE.Vector2(mouseRef.current.x, mouseRef.current.y),
        0.1
      );
    }
  });

  return (
    <>
      <mesh ref={mesh} scale={[viewport.width, viewport.height, 1]}>
        <planeGeometry args={[1, 1]} />
        <shaderMaterial
          fragmentShader={waveFragmentShader}
          vertexShader={waveVertexShader}
          uniforms={uniforms}
          wireframe={false}
        />
      </mesh>
    </>
  );
};

const Scene = () => {
  return (
    <Canvas 
      shadows 
      camera={{ position: [0, 0, 6] }} 
      dpr={[1, 1]}
      style={{ width: '100%', height: '100%' }}
      gl={{ antialias: false }}
    >
      <Suspense fallback={null}>
        <DitheredWaves />
      </Suspense>
    </Canvas>
  );
};

export default Scene;

