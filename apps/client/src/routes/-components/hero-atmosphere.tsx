import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import type { Points } from 'three'
import * as THREE from 'three'

import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'

function DriftParticles({ animate }: { animate: boolean }) {
  const pointsRef = useRef<Points>(null)
  const positions = useMemo(() => {
    const count = 140
    const data = new Float32Array(count * 3)
    for (let i = 0; i < count; i += 1) {
      data[i * 3] = (Math.random() - 0.5) * 10
      data[i * 3 + 1] = (Math.random() - 0.5) * 5
      data[i * 3 + 2] = (Math.random() - 0.5) * 4
    }
    return data
  }, [])

  useFrame((state) => {
    if (!animate || !pointsRef.current) return
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02
    pointsRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.08) * 0.04
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#858893"
        transparent
        opacity={0.45}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export default function HeroAtmosphere() {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <div className="pf-atmosphere" aria-hidden>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ alpha: true, antialias: false, powerPreference: 'low-power' }}
      >
        <DriftParticles animate={!reducedMotion} />
      </Canvas>
    </div>
  )
}
