import { Suspense, useRef, useMemo, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Color mappings for power unit sub-assemblies
const GROUP_COLORS = {
  ENGINE: '#DC052D', // Backend & APIs — Red Bull Crimson
  'POWER UNIT': '#F7D417', // ML & AI — Electric Gold
  AERODYNAMICS: '#1E5BC6', // Frontend & Mobile — Aero Blue
  'FUEL SYSTEMS': '#CCCCCC', // Databases — Titanium Silver
  ELECTRONICS: '#00F0FF', // Cloud & DevOps — Cyber Cyan
  TELEMETRY: '#DC052D', // Languages & IoT — Telemetry Crimson
}

function EngineCoreMesh({ activeGroup = 'ENGINE', mousePos, reducedMotion }) {
  const mainGroup = useRef()
  const turbineRef = useRef()
  const mguRing1Ref = useRef()
  const mguRing2Ref = useRef()
  const gearsetRef = useRef()
  const aeroWingGroup = useRef()

  const currentColor = GROUP_COLORS[activeGroup] || '#DC052D'

  // Precision mechanical materials
  const darkTitaniumMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#091122',
    metalness: 0.95,
    roughness: 0.2,
  }), [])

  const carbonChassisMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#040712',
    metalness: 0.88,
    roughness: 0.45,
  }), [])

  // Reactive glow material that updates smoothly based on activeGroup
  const activeGlowMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: currentColor,
    emissive: currentColor,
    emissiveIntensity: 1.5,
    metalness: 0.6,
    roughness: 0.1,
  }), [currentColor])

  const wireframeMat = useMemo(() => new THREE.MeshBasicMaterial({
    color: currentColor,
    wireframe: true,
    transparent: true,
    opacity: 0.4,
  }), [currentColor])

  // Gyro & kinetic rotation animation
  useFrame((state, delta) => {
    if (!mainGroup.current) return
    const t = state.clock.elapsedTime
    const speedMult = activeGroup ? 1.4 : 1.0

    if (!reducedMotion) {
      // Rotation interpolation based on cursor drag / pointer
      const targetRotY = mousePos.current.x * 0.65 + t * 0.22 * speedMult
      const targetRotX = -mousePos.current.y * 0.4 + 0.35

      mainGroup.current.rotation.y = THREE.MathUtils.lerp(mainGroup.current.rotation.y, targetRotY, 0.05)
      mainGroup.current.rotation.x = THREE.MathUtils.lerp(mainGroup.current.rotation.x, targetRotX, 0.05)

      // Turbocharger compressor spin
      if (turbineRef.current) {
        turbineRef.current.rotation.z += delta * 3.8 * speedMult
      }

      // MGU-K energy rings counter-rotation
      if (mguRing1Ref.current) {
        mguRing1Ref.current.rotation.x += delta * 0.85 * speedMult
        mguRing1Ref.current.rotation.y += delta * 0.65 * speedMult
      }
      if (mguRing2Ref.current) {
        mguRing2Ref.current.rotation.y -= delta * 0.95 * speedMult
        mguRing2Ref.current.rotation.z += delta * 0.55 * speedMult
      }

      // Planetary gear ring
      if (gearsetRef.current) {
        gearsetRef.current.rotation.z -= delta * 1.2 * speedMult
      }

      // Aero winglets subtle oscillation
      if (aeroWingGroup.current) {
        aeroWingGroup.current.position.y = Math.sin(t * 2) * 0.04
      }
    }
  })

  // Cylinder bank geometry positions
  const cylinderPistons = useMemo(() => [
    { pos: [-0.65, 0.35, 0.35], rot: [0, 0, 0.45] },
    { pos: [0.65, 0.35, 0.35], rot: [0, 0, -0.45] },
    { pos: [-0.65, 0.35, -0.35], rot: [0, 0, 0.45] },
    { pos: [0.65, 0.35, -0.35], rot: [0, 0, -0.45] },
  ], [])

  return (
    <group ref={mainGroup} scale={1.2}>
      {/* --- Central ICE V6 Cylinder Crankcase --- */}
      <mesh material={darkTitaniumMat} position={[0, 0, 0]}>
        <cylinderGeometry args={[0.75, 0.85, 1.4, 16]} />
      </mesh>

      {/* --- Outer Wireframe Diagnostic Cage --- */}
      <mesh material={wireframeMat} position={[0, 0, 0]}>
        <cylinderGeometry args={[0.82, 0.92, 1.45, 12, 3, true]} />
      </mesh>

      {/* --- V-Angle Cylinder Banks --- */}
      {cylinderPistons.map((cyl, idx) => (
        <group key={idx} position={cyl.pos} rotation={cyl.rot}>
          <mesh material={darkTitaniumMat}>
            <cylinderGeometry args={[0.22, 0.24, 0.75, 16]} />
          </mesh>
          {/* Cylinder Combustion Cap (Illuminates on ENGINE / FUEL SYSTEMS) */}
          <mesh
            material={activeGroup === 'ENGINE' || activeGroup === 'FUEL SYSTEMS' ? activeGlowMat : darkTitaniumMat}
            position={[0, 0.4, 0]}
          >
            <cylinderGeometry args={[0.25, 0.25, 0.1, 16]} />
          </mesh>
        </group>
      ))}

      {/* --- Turbocharger Compressor Turbine --- */}
      <group position={[0, 0.85, 0]}>
        <mesh material={darkTitaniumMat}>
          <torusGeometry args={[0.48, 0.15, 16, 32]} />
        </mesh>
        <mesh ref={turbineRef} material={activeGroup === 'ENGINE' ? activeGlowMat : darkTitaniumMat}>
          <cylinderGeometry args={[0.35, 0.35, 0.12, 8]} />
        </mesh>
        {/* Turbo exhaust glow ring */}
        <mesh position={[0, 0.15, 0]}>
          <ringGeometry args={[0.38, 0.44, 32]} />
          <meshBasicMaterial color={currentColor} transparent opacity={0.6} side={THREE.DoubleSide} />
        </mesh>
      </group>

      {/* --- MGU-K & MGU-H Energy Store Gyro Rings (Illuminates on POWER UNIT) --- */}
      <group ref={mguRing1Ref} position={[0, 0, 0]}>
        <mesh material={activeGroup === 'POWER UNIT' ? activeGlowMat : darkTitaniumMat}>
          <torusGeometry args={[1.35, 0.035, 16, 48]} />
        </mesh>
      </group>
      <group ref={mguRing2Ref} position={[0, 0, 0]}>
        <mesh material={activeGroup === 'POWER UNIT' || activeGroup === 'ELECTRONICS' ? activeGlowMat : darkTitaniumMat}>
          <torusGeometry args={[1.55, 0.025, 16, 48]} />
        </mesh>
      </group>

      {/* --- Kinetic Planetary Gear Ring (Illuminates on ELECTRONICS / TELEMETRY) --- */}
      <group ref={gearsetRef} position={[0, -0.75, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh material={activeGroup === 'ELECTRONICS' || activeGroup === 'TELEMETRY' ? activeGlowMat : darkTitaniumMat}>
          <ringGeometry args={[1.05, 1.25, 36]} />
        </mesh>
      </group>

      {/* --- Aerodynamic Downforce Flanks & Winglets (Illuminates on AERODYNAMICS) --- */}
      <group ref={aeroWingGroup}>
        <mesh
          material={activeGroup === 'AERODYNAMICS' ? activeGlowMat : carbonChassisMat}
          position={[-1.25, -0.15, 0]}
          rotation={[0, 0, 0.25]}
        >
          <boxGeometry args={[0.85, 0.04, 0.7]} />
        </mesh>
        <mesh
          material={activeGroup === 'AERODYNAMICS' ? activeGlowMat : carbonChassisMat}
          position={[1.25, -0.15, 0]}
          rotation={[0, 0, -0.25]}
        >
          <boxGeometry args={[0.85, 0.04, 0.7]} />
        </mesh>
      </group>

      {/* --- Surrounding Telemetry Sensor Orbit Nodes --- */}
      {[
        [1.65, 0.6, 0.4],
        [-1.65, -0.4, 0.5],
        [0.3, 1.4, -0.8],
        [-0.4, -1.2, 0.7],
      ].map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.045, 12, 12]} />
          <meshBasicMaterial color={currentColor} />
        </mesh>
      ))}
    </group>
  )
}

export default function PowerUnitScene({ activeGroup = 'ENGINE' }) {
  const containerRef = useRef()
  const mousePos = useRef({ x: 0, y: 0 })
  const [isInteracting, setIsInteracting] = useState(false)
  const [reducedMotion] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  const handlePointerMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    mousePos.current.x = x
    mousePos.current.y = y
  }

  const currentColor = GROUP_COLORS[activeGroup] || '#DC052D'

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setIsInteracting(true)}
      onPointerLeave={() => {
        mousePos.current.x = 0
        mousePos.current.y = 0
        setIsInteracting(false)
      }}
      className="relative flex h-80 w-full cursor-grab active:cursor-grabbing flex-col overflow-hidden border border-white/8 bg-[#091430]/90 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-md transition-colors duration-300 lg:h-96"
      style={{
        borderColor: `${currentColor}40`,
        backgroundImage:
          'linear-gradient(135deg, rgba(255,255,255,0.015), transparent 50%), repeating-linear-gradient(45deg, rgba(255,255,255,0.01) 0px, rgba(255,255,255,0.01) 1px, transparent 1px, transparent 6px)',
      }}
      aria-label="3D Interactive F1 Power Unit Telemetry Engine"
    >
      {/* Top HUD Telemetry Header */}
      <header className="relative z-10 flex items-center justify-between border-b border-white/8 pb-3 font-mono text-[9px] font-bold tracking-[0.2em] uppercase sm:text-[10px]">
        <div className="flex items-center gap-2">
          <span
            className="h-2 w-2 rounded-full"
            style={{
              backgroundColor: currentColor,
              boxShadow: `0 0 10px ${currentColor}`,
              animation: 'status-blink 1.5s infinite',
            }}
          />
          <span className="text-white/80">3D POWER UNIT CORE // {activeGroup}</span>
        </div>
        <div className="hidden items-center gap-3 text-white/40 sm:flex">
          <span>RPM / 15,000</span>
          <span>MGU-K / ACTIVE</span>
          <span className={isInteracting ? 'text-[#F7D417]' : 'text-[#22c55e]'}>
            {isInteracting ? 'USER INTERACTING' : 'TELEMETRY LIVE'}
          </span>
        </div>
      </header>

      {/* 3D Canvas Viewport */}
      <div className="relative flex-1">
        <Canvas
          camera={{ position: [0, 0.4, 4.4], fov: 45, near: 0.1, far: 30 }}
          dpr={[1, 2]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[4, 6, 4]} intensity={1.4} color="#ffffff" />
          <pointLight position={[-4, 2, 3]} intensity={1.6} color={currentColor} />
          <pointLight position={[4, -2, 3]} intensity={1.2} color="#1E5BC6" />
          <pointLight position={[0, -4, -2]} intensity={0.9} color="#F7D417" />

          <Suspense fallback={null}>
            <EngineCoreMesh
              activeGroup={activeGroup}
              mousePos={mousePos}
              reducedMotion={reducedMotion}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Bottom Subsystem Status Readout */}
      <footer className="relative z-10 flex items-center justify-between border-t border-white/8 pt-2 font-mono text-[8px] tracking-[0.16em] text-white/40 uppercase sm:text-[9px]">
        <span>DRAG TO ROTATE 3D SPEC</span>
        <span style={{ color: currentColor }}>MODE: {activeGroup} DIAGNOSTIC</span>
      </footer>
    </div>
  )
}
