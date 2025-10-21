'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Stars } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

type IcosahedronArgs = [radius?: number, detail?: number];

type FloatingMeshProps = {
  position: [number, number, number];
  color: string;
  wireframe?: boolean;
  args?: IcosahedronArgs;
  speed?: number;
};

function FloatingGem({ position, color, wireframe, args = [1, 0], speed = 0.35 }: FloatingMeshProps) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const t = clock.getElapsedTime() * speed;
    mesh.current.rotation.x = Math.sin(t / 2) * 0.6;
    mesh.current.rotation.y = t;
    mesh.current.position.y = position[1] + Math.sin(t * 2) * 0.35;
  });

  return (
    <Float floatIntensity={1.1} speed={1.6} rotationIntensity={0.8} position={position}>
      <mesh ref={mesh} castShadow>
        <icosahedronGeometry args={args} />
        <meshStandardMaterial
          color={color}
          wireframe={wireframe}
          transparent
          opacity={wireframe ? 0.35 : 0.9}
          roughness={wireframe ? 0.35 : 0.1}
          metalness={wireframe ? 0 : 0.7}
          emissive={!wireframe ? new THREE.Color(color).multiplyScalar(0.25) : undefined}
        />
      </mesh>
    </Float>
  );
}

function Ribbon() {
  const ref = useRef<THREE.Mesh>(null);
  const uniforms = {
    uTime: { value: 0 },
    uColorA: { value: new THREE.Color('#58fff5') },
    uColorB: { value: new THREE.Color('#6f60ff') }
  };

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    const material = ref.current.material as THREE.ShaderMaterial;
    material.uniforms.uTime.value = t;
  });

  return (
    <mesh ref={ref} rotation={[0, 0.4, -0.2]} position={[0.6, -0.2, -1.2]}>
      <planeGeometry args={[4.4, 1.4, 200, 30]} />
      <shaderMaterial
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        uniforms={uniforms}
        vertexShader={`
          uniform float uTime;

          varying vec2 vUv;
          varying float vWave;

          void main() {
            vUv = uv;

            float waveX = sin((uv.x + uTime * 0.2) * 4.0) * 0.08;
            float waveY = cos((uv.x * 4.0) + uTime * 0.35) * 0.06;

            vec3 pos = position;
            pos.y += waveX;
            pos.z += waveY;

            vWave = waveX + waveY;

            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `}
        fragmentShader={`
          uniform vec3 uColorA;
          uniform vec3 uColorB;

          varying vec2 vUv;
          varying float vWave;

          void main() {
            vec3 color = mix(uColorA, uColorB, vUv.x + vWave);
            float alpha = smoothstep(0.05, 0.5, vUv.y) * 0.65;
            gl_FragColor = vec4(color, alpha);
          }
        `}
      />
    </mesh>
  );
}

export function HeroCanvas() {
  return (
    <div className="hero-canvas">
      <Canvas gl={{ antialias: true }} dpr={[1, 1.8]}>
      <color attach="background" args={["#020615"]} />
      <PerspectiveCamera position={[0, 0, 6.5]} fov={52} makeDefault />
      <ambientLight intensity={0.35} />
      <directionalLight
        position={[4, 6, 2]}
        intensity={1}
        color={new THREE.Color('#7ad5ff')}
        castShadow
      />
      <directionalLight position={[-3, -2, -3]} intensity={0.35} color={new THREE.Color('#64fff6')} />

      <group position={[0, -0.4, 0]}>
        <FloatingGem position={[-1.2, 0.1, 0.2]} color="#58fff5" args={[1.3, 1]} />
        <FloatingGem position={[1.4, 0.6, -0.3]} color="#6f60ff" args={[1.05, 1]} speed={0.28} />
        <FloatingGem position={[0.25, -0.8, -0.4]} color="#ffffff" args={[0.8, 1]} wireframe speed={0.4} />
        <Ribbon />
      </group>

      <Stars
        radius={18}
        depth={40}
        count={2500}
        factor={0.6}
        saturation={0}
        fade
        speed={0.6}
      />
      </Canvas>
    </div>
  );
}
