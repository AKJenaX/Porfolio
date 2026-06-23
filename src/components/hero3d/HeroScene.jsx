import { Suspense, useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import TelemetryRing from './TelemetryRing'
import HologramPanel from './HologramPanel'
import Particles from './Particles'
import * as THREE from 'three'

// Energy arc: animated curved line connecting two points
function EnergyArc({ start, end, color, speed = 1, reducedMotion }) {
  const ref = useRef()
  const progressRef = useRef(0)

  const geo = useMemo(() => {
    const mid = new THREE.Vector3(
      (start[0] + end[0]) / 2,
      (start[1] + end[1]) / 2 + 1.5,
      (start[2] + end[2]) / 2 - 0.5,
    )
    const curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(...start),
      mid,
      new THREE.Vector3(...end),
    )
    const points = curve.getPoints(40)
    const g = new THREE.BufferGeometry().setFromPoints(points)
    // Compute line distances for dashed material
    g.computeBoundingSphere()
    const posArr = g.attributes.position.array
    const distances = new Float32Array(posArr.length / 3)
    let totalDist = 0
    for (let i = 0; i < distances.length; i++) {
      if (i > 0) {
        const dx = posArr[i * 3] - posArr[(i - 1) * 3]
        const dy = posArr[i * 3 + 1] - posArr[(i - 1) * 3 + 1]
        const dz = posArr[i * 3 + 2] - posArr[(i - 1) * 3 + 2]
        totalDist += Math.sqrt(dx * dx + dy * dy + dz * dz)
      }
      distances[i] = totalDist
    }
    g.setAttribute('lineDistance', new THREE.BufferAttribute(distances, 1))
    return g
  }, [start, end])

  useFrame((_, delta) => {
    if (reducedMotion || !ref.current) return
    progressRef.current = (progressRef.current + delta * speed * 0.3) % 1
    ref.current.material.dashOffset = -progressRef.current * 10
  })

  return (
    <line ref={ref} geometry={geo}>
      <lineDashedMaterial
        color={color}
        transparent
        opacity={0.25}
        dashSize={0.3}
        gapSize={0.2}
        linewidth={1}
      />
    </line>
  )
}

// Slow camera idle drift + mouse follow using a group wrapper instead of mutating camera
function CameraRig({ reducedMotion }) {
  const groupRef = useRef()
  const mouse = useRef({ x: 0, y: 0 })

  const onPointerMove = useCallback((e) => {
    mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
    mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2
  }, [])

  useEffect(() => {
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    return () => window.removeEventListener('pointermove', onPointerMove)
  }, [onPointerMove])

  useFrame((state) => {
    if (reducedMotion || !groupRef.current) return
    const t = state.clock.elapsedTime

    const idleX = Math.sin(t * 0.15) * 0.15
    const idleY = Math.cos(t * 0.12) * 0.1

    const targetX = idleX + mouse.current.x * 0.3
    const targetY = idleY - mouse.current.y * 0.2

    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, -targetX, 0.02)
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, -targetY, 0.02)
  })

  return <group ref={groupRef} />
}

const energyArcs = [
  { start: [-3, 2, -1], end: [2, -1, -0.5], color: '#1E5BC6', speed: 0.8 },
  { start: [3, 1.5, -1.2], end: [-2, -2, -0.8], color: '#DC052D', speed: 1.2 },
  { start: [-1, 3, -1.5], end: [1, -2.5, -1], color: '#F7D417', speed: 0.6 },
]

function SceneContent({ isMobile, reducedMotion }) {
  return (
    <>
      <CameraRig reducedMotion={reducedMotion} />

      {/* Ambient lighting */}
      <ambientLight intensity={0.15} />
      <pointLight position={[5, 3, 5]} intensity={0.3} color="#1E5BC6" />
      <pointLight position={[-4, -2, 3]} intensity={0.15} color="#DC052D" />

      {/* Telemetry rings */}
      <TelemetryRing reducedMotion={reducedMotion} />

      {/* Hologram panels — skip on mobile */}
      {!isMobile && <HologramPanel reducedMotion={reducedMotion} />}

      {/* Energy arcs */}
      {!isMobile && energyArcs.map((arc, i) => (
        <EnergyArc key={i} {...arc} reducedMotion={reducedMotion} />
      ))}

      {/* Particles */}
      <Particles isMobile={isMobile} reducedMotion={reducedMotion} />
    </>
  )
}

export default function HeroScene() {
  const [isMobile] = useState(() => window.matchMedia('(max-width: 767px)').matches)
  const [reducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [isReady, setIsReady] = useState(false)

  // Listen for changes to media queries
  useEffect(() => {
    // Delayed mount — let hero text paint first
    const timer = setTimeout(() => setIsReady(true), 100)
    return () => clearTimeout(timer)
  }, [])

  if (!isReady) return null

  return (
    <div
      className="absolute inset-0 z-0"
      style={{ opacity: 0.85 }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50, near: 0.1, far: 50 }}
        dpr={isMobile ? 1 : Math.min(window.devicePixelRatio, 2)}
        gl={{
          antialias: !isMobile,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true,
        }}
        style={{ background: 'transparent' }}
        frameloop={reducedMotion ? 'demand' : 'always'}
      >
        <Suspense fallback={null}>
          <SceneContent isMobile={isMobile} reducedMotion={reducedMotion} />
        </Suspense>
      </Canvas>
    </div>
  )
}
