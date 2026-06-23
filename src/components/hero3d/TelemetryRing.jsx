import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const ringConfigs = [
  { radius: 2.8, color: '#1E5BC6', speed: 0.15, segments: 64, opacity: 0.35 },
  { radius: 3.5, color: '#DC052D', speed: -0.1, segments: 48, opacity: 0.25 },
  { radius: 4.2, color: '#F7D417', speed: 0.08, segments: 32, opacity: 0.15 },
]

function DataRing({ radius, color, speed, segments, opacity }) {
  const ref = useRef()
  const ticksRef = useRef()

  const points = useMemo(() => {
    const pts = []
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2
      pts.push(new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, 0))
    }
    return pts
  }, [radius, segments])

  const tickGeometry = useMemo(() => {
    const positions = []
    const tickCount = Math.floor(segments / 2)
    for (let i = 0; i < tickCount; i++) {
      const angle = (i / tickCount) * Math.PI * 2
      const innerR = radius - 0.08
      const outerR = radius + (i % 4 === 0 ? 0.18 : 0.08)
      positions.push(
        Math.cos(angle) * innerR, Math.sin(angle) * innerR, 0,
        Math.cos(angle) * outerR, Math.sin(angle) * outerR, 0,
      )
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    return geo
  }, [radius, segments])

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += speed * delta
    if (ticksRef.current) ticksRef.current.rotation.z += speed * delta
  })

  const curve = useMemo(() => new THREE.CatmullRomCurve3(points, true), [points])
  const tubeGeo = useMemo(() => new THREE.TubeGeometry(curve, segments, 0.008, 4, true), [curve, segments])

  return (
    <group ref={ref}>
      <mesh geometry={tubeGeo}>
        <meshBasicMaterial
          color={color}
          transparent
          opacity={opacity}
          toneMapped={false}
        />
      </mesh>
      <lineSegments ref={ticksRef} geometry={tickGeometry}>
        <lineBasicMaterial color={color} transparent opacity={opacity * 0.6} />
      </lineSegments>
    </group>
  )
}

export default function TelemetryRing({ reducedMotion }) {
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current && !reducedMotion) {
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05 + 0.3
      groupRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.15) * 0.03
    }
  })

  return (
    <group ref={groupRef} rotation={[0.3, 0, 0]}>
      {ringConfigs.map((config, i) => (
        <DataRing key={i} {...config} />
      ))}
    </group>
  )
}
