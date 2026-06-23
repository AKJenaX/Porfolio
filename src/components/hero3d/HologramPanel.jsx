import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const panelData = [
  {
    position: [-3.2, 1.8, -1],
    rotation: [0, 0.4, 0],
    width: 1.6,
    height: 1.0,
    color: '#1E5BC6',
  },
  {
    position: [3.4, -1.2, -0.8],
    rotation: [0, -0.35, 0.05],
    width: 1.4,
    height: 0.9,
    color: '#DC052D',
  },
  {
    position: [-2.8, -2.0, -1.5],
    rotation: [0.1, 0.3, -0.05],
    width: 1.2,
    height: 0.7,
    color: '#F7D417',
  },
]

function Panel({ position, rotation, width, height, color, reducedMotion }) {
  const meshRef = useRef()
  const edgeRef = useRef()
  const initialY = position[1]

  const edgeGeo = useMemo(() => {
    const shape = new THREE.Shape()
    const w = width / 2
    const h = height / 2
    shape.moveTo(-w, -h)
    shape.lineTo(w, -h)
    shape.lineTo(w, h)
    shape.lineTo(-w, h)
    shape.lineTo(-w, -h)
    const points = shape.getPoints(4)
    const geo = new THREE.BufferGeometry().setFromPoints(points)
    return geo
  }, [width, height])

  // Scanline positions
  const scanGeo = useMemo(() => {
    const lines = []
    const w = width / 2
    const h = height / 2
    const count = 5
    for (let i = 0; i < count; i++) {
      const y = -h + (height / (count + 1)) * (i + 1)
      lines.push(-w * 0.85, y, 0.001, w * 0.85, y, 0.001)
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(lines, 3))
    return geo
  }, [width, height])

  useFrame((state) => {
    if (meshRef.current && !reducedMotion) {
      meshRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.08
    }
  })

  return (
    <group ref={meshRef} position={position} rotation={rotation}>
      {/* Panel fill */}
      <mesh>
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.04}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Border */}
      <line ref={edgeRef} geometry={edgeGeo}>
        <lineBasicMaterial color={color} transparent opacity={0.3} />
      </line>

      {/* Scan lines */}
      <lineSegments geometry={scanGeo}>
        <lineBasicMaterial color={color} transparent opacity={0.08} />
      </lineSegments>
    </group>
  )
}

export default function HologramPanel({ reducedMotion }) {
  return (
    <group>
      {panelData.map((panel, i) => (
        <Panel key={i} {...panel} reducedMotion={reducedMotion} />
      ))}
    </group>
  )
}
