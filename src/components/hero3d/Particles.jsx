import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const DESKTOP_COUNT = 120
const MOBILE_COUNT = 50

// Pre-generate particle data outside component to avoid Math.random in render
function generateParticleData(count) {
  const pos = new Float32Array(count * 3)
  const col = new Float32Array(count * 3)
  const spd = new Float32Array(count)

  const palette = [
    [0.118, 0.357, 0.776],  // #1E5BC6
    [0.863, 0.020, 0.176],  // #DC052D
    [0.969, 0.831, 0.090],  // #F7D417
    [1, 1, 1],              // white
  ]

  for (let i = 0; i < count; i++) {
    const i3 = i * 3
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    const r = 2 + Math.random() * 5

    pos[i3] = r * Math.sin(phi) * Math.cos(theta)
    pos[i3 + 1] = r * Math.sin(phi) * Math.sin(theta)
    pos[i3 + 2] = r * Math.cos(phi) - 2

    const p = palette[Math.floor(Math.random() * palette.length)]
    col[i3] = p[0]
    col[i3 + 1] = p[1]
    col[i3 + 2] = p[2]

    spd[i] = 0.2 + Math.random() * 0.5
  }

  return { positions: pos, colors: col, speeds: spd }
}

const desktopData = generateParticleData(DESKTOP_COUNT)
const mobileData = generateParticleData(MOBILE_COUNT)

export default function Particles({ isMobile, reducedMotion }) {
  const meshRef = useRef()
  const count = isMobile ? MOBILE_COUNT : DESKTOP_COUNT
  const data = isMobile ? mobileData : desktopData

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(data.positions.slice(), 3))
    geo.setAttribute('color', new THREE.BufferAttribute(data.colors.slice(), 3))
    return geo
  }, [data])

  useFrame((state) => {
    if (!meshRef.current || reducedMotion) return
    const posAttr = meshRef.current.geometry.attributes.position
    const arr = posAttr.array
    const t = state.clock.elapsedTime

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const s = data.speeds[i]
      arr[i3 + 1] += Math.sin(t * s + i) * 0.001
    }
    posAttr.needsUpdate = true
  })

  return (
    <points ref={meshRef} geometry={geometry}>
      <pointsMaterial
        size={isMobile ? 0.03 : 0.025}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}
