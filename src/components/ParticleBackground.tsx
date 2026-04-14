import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const meshRef = useRef<THREE.Points>(null!);
  const count = 800;

  const [positions, sizes] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
      sizes[i] = Math.random() * 2 + 0.5;
    }
    return [positions, sizes];
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = time * 0.02;
      meshRef.current.rotation.x = Math.sin(time * 0.01) * 0.1;

      const positionAttr = meshRef.current.geometry.attributes.position;
      const arr = positionAttr.array as Float32Array;
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        arr[i3 + 1] += Math.sin(time * 0.3 + i * 0.1) * 0.002;
      }
      positionAttr.needsUpdate = true;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#6c63ff"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function FloatingShapes() {
  const group1 = useRef<THREE.Mesh>(null!);
  const group2 = useRef<THREE.Mesh>(null!);
  const group3 = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group1.current) {
      group1.current.rotation.x = t * 0.15;
      group1.current.rotation.y = t * 0.1;
      group1.current.position.y = Math.sin(t * 0.4) * 1.5;
    }
    if (group2.current) {
      group2.current.rotation.x = -t * 0.1;
      group2.current.rotation.z = t * 0.12;
      group2.current.position.y = Math.cos(t * 0.3) * 2;
    }
    if (group3.current) {
      group3.current.rotation.y = t * 0.2;
      group3.current.rotation.z = -t * 0.08;
      group3.current.position.x = Math.sin(t * 0.2) * 1;
    }
  });

  return (
    <>
      <mesh ref={group1} position={[-8, 3, -10]}>
        <octahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial
          color="#6c63ff"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>
      <mesh ref={group2} position={[9, -2, -8]}>
        <icosahedronGeometry args={[2, 0]} />
        <meshStandardMaterial
          color="#00d4aa"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>
      <mesh ref={group3} position={[0, 6, -15]}>
        <torusGeometry args={[2, 0.5, 8, 16]} />
        <meshStandardMaterial
          color="#ff6b9d"
          wireframe
          transparent
          opacity={0.1}
        />
      </mesh>
    </>
  );
}

export default function ParticleBackground() {
  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        gl={{ alpha: true, antialias: false }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#6c63ff" />
        <pointLight position={[-10, -10, 5]} intensity={0.3} color="#00d4aa" />
        <Particles />
        <FloatingShapes />
      </Canvas>
    </div>
  );
}
