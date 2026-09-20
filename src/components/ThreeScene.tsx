import { Environment, Float, Lightformer, Line } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion, useReducedMotion } from "framer-motion";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";
import { SkillIcon } from "./SkillIcon";

const nodes = [
  { position: [-2.15, 1.45, 0] as [number, number, number], color: "#4F46E5" },
  { position: [2.2, 1.2, -0.15] as [number, number, number], color: "#7C3AED" },
  { position: [-2.1, -1.35, 0.3] as [number, number, number], color: "#06B6D4" },
  { position: [2.15, -1.45, 0.15] as [number, number, number], color: "#64748B" },
];

const technologies = [
  { icon: "java", name: "Java" },
  { icon: "javascript", name: "JavaScript" },
  { icon: "react", name: "React" },
  { icon: "nodejs", name: "Node.js" },
  { icon: "mongodb", name: "MongoDB" },
  { icon: "mysql", name: "MySQL" },
  { icon: "git", name: "Git" },
  { icon: "github", name: "GitHub" },
];

function Network() {
  const group = useRef<THREE.Group>(null);
  const core = useRef<THREE.Group>(null);
  const reducedMotion = useReducedMotion();
  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, index) => {
        const angle = index * 2.399;
        const radius = 2.7 + (index % 6) * 0.31;
        return [
          Math.cos(angle) * radius,
          Math.sin(angle * 1.38) * 2.15,
          Math.sin(angle) * 1.7 - 0.5,
        ] as [number, number, number];
      }),
    [],
  );

  useFrame((state, rawDelta) => {
    if (!group.current || !core.current || reducedMotion) return;
    const delta = Math.min(rawDelta, 0.05);
    const smoothing = 1 - Math.exp(-2.4 * delta);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, state.pointer.y * 0.11, smoothing);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, state.pointer.x * 0.15, smoothing);
    core.current.rotation.y += delta * 0.13;
    core.current.rotation.z += delta * 0.045;
  });

  return (
    <group ref={group}>
      <group ref={core}>
        <mesh rotation={[0.35, 0.2, 0]}>
          <icosahedronGeometry args={[1.1, 3]} />
          <meshPhysicalMaterial
            color="#EEF2FF"
            emissive="#4F46E5"
            emissiveIntensity={0.08}
            metalness={0.22}
            opacity={0.68}
            roughness={0.12}
            thickness={1.2}
            transmission={0.48}
            transparent
          />
        </mesh>
        <mesh scale={0.78}>
          <icosahedronGeometry args={[1, 2]} />
          <meshPhysicalMaterial color="#FFFFFF" emissive="#C7D2FE" emissiveIntensity={0.22} metalness={0.35} roughness={0.16} />
        </mesh>
        {[0, 1, 2].map((ring) => (
          <mesh key={ring} rotation={[ring === 1 ? Math.PI / 2 : 0.85, ring * 0.72, ring === 2 ? 0.4 : 0]}>
            <torusGeometry args={[1.42 + ring * 0.18, 0.012, 8, 96]} />
            <meshBasicMaterial color={ring === 1 ? "#7C3AED" : "#4F46E5"} transparent opacity={0.3 - ring * 0.045} />
          </mesh>
        ))}
      </group>

      {nodes.map((node, index) => (
        <group key={node.color + index}>
          <Line points={[[0, 0, 0], node.position]} color={node.color} lineWidth={0.65} transparent opacity={0.28} />
          <Float speed={0.55 + index * 0.08} floatIntensity={0.16} rotationIntensity={0.12}>
            <group position={node.position}>
              <mesh>
                <octahedronGeometry args={[0.4, 0]} />
                <meshPhysicalMaterial color="#FFFFFF" emissive={node.color} emissiveIntensity={0.12} metalness={0.25} roughness={0.18} />
              </mesh>
              <mesh scale={1.32}>
                <octahedronGeometry args={[0.4, 0]} />
                <meshBasicMaterial color={node.color} transparent opacity={0.1} wireframe />
              </mesh>
            </group>
          </Float>
        </group>
      ))}

      {particles.map((position, index) => (
        <mesh key={index} position={position} scale={index % 4 === 0 ? 0.05 : 0.026}>
          <sphereGeometry args={[1, 8, 8]} />
          <meshBasicMaterial color={index % 3 === 0 ? "#06B6D4" : index % 2 ? "#4F46E5" : "#7C3AED"} transparent opacity={0.54} />
        </mesh>
      ))}
    </group>
  );
}

export default function ThreeScene() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="three-scene" data-cursor>
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 8], fov: 48 }} gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}>
        <ambientLight intensity={2.1} />
        <pointLight position={[4, 4, 5]} intensity={17} color="#FFFFFF" />
        <pointLight position={[-4, -2, 3]} intensity={9} color="#C7D2FE" />
        <Suspense fallback={null}>
          <Network />
          <Environment>
            <Lightformer intensity={2.2} position={[0, 5, 2]} scale={[8, 8, 1]} />
            <Lightformer intensity={1.2} color="#E0E7FF" position={[-5, 0, 0]} rotation-y={Math.PI / 2} scale={[8, 2, 1]} />
          </Environment>
        </Suspense>
      </Canvas>

      <div className="hero-tech-ring" aria-label="Core technologies">
        {technologies.map((technology, index) => (
          <motion.div
            className={`hero-tech hero-tech--${index + 1}`}
            initial={reducedMotion ? false : { opacity: 0, scale: 0.72, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.62 + index * 0.055, duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
            key={technology.icon}
            title={technology.name}
          >
            <SkillIcon icon={technology.icon} name={technology.name} />
          </motion.div>
        ))}
      </div>
      <div className="scene-label"><span>01</span> Service topology</div>
      <div className="scene-nodes" aria-hidden="true"><span>JAVA</span><span>API</span><span>DATA</span><span>SERVICES</span></div>
    </div>
  );
}
