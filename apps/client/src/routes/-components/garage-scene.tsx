import {
  ContactShadows,
  Environment,
  Lightformer,
  MeshReflectorMaterial,
  OrbitControls,
  useGLTF,
  useTexture,
} from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useMemo, useRef, useState } from 'react'
import { Group, MathUtils, Mesh, RepeatWrapping, SRGBColorSpace } from 'three'

type OrbitHandle = {
  setAzimuthalAngle: (value: number) => void
  setPolarAngle: (value: number) => void
  minDistance: number
  maxDistance: number
  update: () => void
}

import { DEFAULT_CAMERA, presetFor } from './camera-presets'
import { GARAGE_RGB } from './garage-rgb'
import { useRace } from './race-context'

import { useMountEffect } from '@/hooks/use-mount-effect'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'

const DESKTOP_CAR = '/3d-assets/car/rb22-desktop.glb'
const MOBILE_CAR = '/3d-assets/car/rb22-mobile.glb'
const HDR = '/3d-assets/env/warehouse-1k.hdr'
const FLOOR_COLOR = '/3d-assets/textures/concrete/color.jpg'
const FLOOR_NORMAL = '/3d-assets/textures/concrete/normal.jpg'
const FLOOR_ROUGH = '/3d-assets/textures/concrete/roughness.jpg'
const ASPHALT_COLOR = '/3d-assets/textures/asphalt/color.jpg'
const ASPHALT_NORMAL = '/3d-assets/textures/asphalt/normal.jpg'
const ASPHALT_ROUGH = '/3d-assets/textures/asphalt/roughness.jpg'

function pickCarUrl() {
  if (typeof window === 'undefined') return DESKTOP_CAR
  return window.matchMedia('(max-width: 700px)').matches
    ? MOBILE_CAR
    : DESKTOP_CAR
}

function RaceCar({
  progress,
  reduce,
}: {
  progress: number
  reduce: boolean
}) {
  const url = useMemo(() => pickCarUrl(), [])
  const { scene } = useGLTF(url, false, true)
  const root = useMemo(() => scene.clone(true), [scene])
  const group = useRef<Group>(null)
  const { activeId } = useRace()

  useFrame(function spinCar(_, delta) {
    const node = group.current
    if (!node) return
    if (activeId) {
      node.rotation.y = MathUtils.damp(node.rotation.y, Math.PI * 0.12, 4, delta)
      return
    }
    if (reduce) return
    if (progress < 0.02) {
      node.rotation.y += delta * 0.18
      return
    }
    const target = Math.PI * 0.18 + progress * Math.PI * 1.65
    node.rotation.y = MathUtils.damp(node.rotation.y, target, 3.2, delta)
  })

  return (
    <group ref={group} position={[0, 0, 0]}>
      <primitive object={root} />
    </group>
  )
}

function TexturedFloors() {
  const [colorMap, normalMap, roughnessMap] = useTexture([
    FLOOR_COLOR,
    FLOOR_NORMAL,
    FLOOR_ROUGH,
  ])
  const [asphaltColor, asphaltNormal, asphaltRough] = useTexture([
    ASPHALT_COLOR,
    ASPHALT_NORMAL,
    ASPHALT_ROUGH,
  ])

  for (const map of [colorMap, normalMap, roughnessMap]) {
    map.wrapS = RepeatWrapping
    map.wrapT = RepeatWrapping
    map.repeat.set(4, 4)
  }
  colorMap.colorSpace = SRGBColorSpace

  for (const map of [asphaltColor, asphaltNormal, asphaltRough]) {
    map.wrapS = RepeatWrapping
    map.wrapT = RepeatWrapping
    map.repeat.set(2, 6)
  }
  asphaltColor.colorSpace = SRGBColorSpace

  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[28, 28]} />
        <MeshReflectorMaterial
          map={colorMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          blur={[280, 60]}
          resolution={512}
          mixBlur={0.9}
          mixStrength={0.7}
          roughness={0.72}
          depthScale={0.5}
          minDepthThreshold={0.35}
          maxDepthThreshold={1.25}
          color="#1a1d28"
          metalness={0.22}
          mirror={0.32}
        />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.012, 0]}>
        <planeGeometry args={[4.2, 18]} />
        <meshStandardMaterial
          map={asphaltColor}
          normalMap={asphaltNormal}
          roughnessMap={asphaltRough}
          roughness={0.92}
          metalness={0.05}
          color="#2a2a2e"
        />
      </mesh>
    </group>
  )
}

function GarageBay() {
  return (
    <group>
      <Suspense
        fallback={
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[28, 28]} />
            <meshStandardMaterial color="#161821" roughness={0.9} metalness={0.2} />
          </mesh>
        }
      >
        <TexturedFloors />
      </Suspense>

      <BayLines />

      <mesh position={[0, 2.4, -7.5]}>
        <boxGeometry args={[28, 5, 0.35]} />
        <meshStandardMaterial color={GARAGE_RGB.navy} roughness={0.95} />
      </mesh>
      <mesh position={[-9.5, 2.4, -1]}>
        <boxGeometry args={[0.35, 5, 14]} />
        <meshStandardMaterial color="#151824" roughness={0.95} />
      </mesh>
      <mesh position={[9.5, 2.4, -1]}>
        <boxGeometry args={[0.35, 5, 14]} />
        <meshStandardMaterial color="#151824" roughness={0.95} />
      </mesh>

      <mesh position={[0, 4.6, -1]}>
        <boxGeometry args={[28, 0.25, 16]} />
        <meshStandardMaterial color="#10131c" roughness={1} />
      </mesh>

      {[
        [-2.4, 1.2],
        [0, 0.2],
        [2.4, -0.8],
      ].map(([x, z]) => (
        <mesh key={`${x}-${z}`} position={[x, 4.35, z]}>
          <boxGeometry args={[5.5, 0.08, 0.35]} />
          <meshStandardMaterial
            color="#f5f2ea"
            emissive="#f5f2ea"
            emissiveIntensity={2.4}
            toneMapped={false}
          />
        </mesh>
      ))}

      <mesh position={[0, 1.1, -7.3]}>
        <boxGeometry args={[10, 0.12, 0.08]} />
        <meshStandardMaterial
          color={GARAGE_RGB.signal}
          emissive={GARAGE_RGB.signal}
          emissiveIntensity={0.55}
          toneMapped={false}
        />
      </mesh>
    </group>
  )
}

function BayLines() {
  const marks = [-2.1, 2.1]
  return (
    <group>
      {marks.map((x) => (
        <mesh
          key={x}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[x, 0.02, 0]}
        >
          <planeGeometry args={[0.08, 12]} />
          <meshBasicMaterial color={GARAGE_RGB.bullYellow} />
        </mesh>
      ))}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, -5.2]}>
        <planeGeometry args={[4.2, 0.08]} />
        <meshBasicMaterial color={GARAGE_RGB.bullYellow} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 5.2]}>
        <planeGeometry args={[4.2, 0.08]} />
        <meshBasicMaterial color={GARAGE_RGB.chalk} transparent opacity={0.35} />
      </mesh>
    </group>
  )
}

function setFormerIntensity(mesh: Mesh | null, value: number) {
  if (!mesh) return
  ;(mesh as Mesh & { intensity: number }).intensity = value
}

function StripLights({ reduce }: { reduce: boolean }) {
  const stripA = useRef<Mesh>(null)
  const stripB = useRef<Mesh>(null)
  const stripC = useRef<Mesh>(null)
  const t0 = useRef<number | null>(null)

  useFrame(function sweepLights({ clock }) {
    if (reduce) {
      setFormerIntensity(stripA.current, 5)
      setFormerIntensity(stripB.current, 4)
      setFormerIntensity(stripC.current, 3.5)
      return
    }
    if (t0.current === null) t0.current = clock.elapsedTime
    const t = clock.elapsedTime - t0.current
    const step = (delay: number) => Math.min(1, Math.max(0, (t - delay) / 0.4))
    setFormerIntensity(stripA.current, 5 * step(0))
    setFormerIntensity(stripB.current, 4 * step(0.2))
    setFormerIntensity(stripC.current, 3.5 * step(0.4))
  })

  return (
    <group>
      <Lightformer
        ref={stripA}
        form="rect"
        intensity={0}
        color={GARAGE_RGB.chalk}
        scale={[7, 0.4, 1]}
        position={[0, 3.4, 1.2]}
        target={[0, 0.4, 0]}
      />
      <Lightformer
        ref={stripB}
        form="rect"
        intensity={0}
        color="#ffe8dc"
        scale={[5, 0.35, 1]}
        position={[-2.6, 3, -0.4]}
        target={[0, 0.4, 0]}
      />
      <Lightformer
        ref={stripC}
        form="rect"
        intensity={0}
        color="#dce8ff"
        scale={[5, 0.35, 1]}
        position={[2.8, 2.9, -0.8]}
        target={[0, 0.4, 0]}
      />
    </group>
  )
}

function ProjectOrbit({ reduce }: { reduce: boolean }) {
  const { activeId } = useRace()
  const controls = useRef<OrbitHandle | null>(null)
  const lastId = useRef<string | null | undefined>(undefined)

  useFrame(function snapProjectOrbit() {
    if (lastId.current === activeId) return
    lastId.current = activeId
    const ctrl = controls.current
    if (!ctrl || !activeId) return
    const preset = presetFor(activeId)
    const [x, y, z] = preset.position
    const azimuth = Math.atan2(x, z)
    const distance = Math.hypot(x, z)
    const polar = Math.atan2(distance, y)
    ctrl.setAzimuthalAngle(azimuth)
    ctrl.setPolarAngle(MathUtils.clamp(polar, Math.PI / 3.4, Math.PI / 2.05))
    ctrl.minDistance = MathUtils.clamp(distance, 2.4, 7)
    ctrl.maxDistance = ctrl.minDistance
    ctrl.update()
    ctrl.minDistance = 2.4
    ctrl.maxDistance = 7
    void reduce
  })

  return (
    <OrbitControls
      ref={controls as never}
      makeDefault
      enablePan={false}
      enableZoom={false}
      enableRotate={!reduce}
      minPolarAngle={Math.PI / 3.4}
      maxPolarAngle={Math.PI / 2.05}
      minDistance={2.4}
      maxDistance={7}
      target={[0, 0.45, 0.1]}
      rotateSpeed={0.6}
      dampingFactor={0.08}
      enableDamping
    />
  )
}

function SceneBody({
  progress,
  reduce,
}: {
  progress: number
  reduce: boolean
}) {
  return (
    <>
      <color attach="background" args={['#0c0e16']} />
      <fog attach="fog" args={['#0c0e16', 10, 26]} />
      <ambientLight intensity={0.22} />
      <spotLight
        position={[5, 7, 4]}
        angle={0.5}
        penumbra={0.7}
        intensity={2.2}
        color="#fff4ea"
        castShadow={false}
      />
      <spotLight
        position={[-4, 5, 2]}
        angle={0.55}
        penumbra={0.8}
        intensity={1.1}
        color="#c8d4ff"
      />
      <pointLight position={[0, 3.8, 0]} intensity={0.8} color="#fff8f0" />
      <Environment files={HDR} resolution={256}>
        <StripLights reduce={reduce} />
      </Environment>
      <GarageBay />
      <Suspense fallback={null}>
        <RaceCar progress={progress} reduce={reduce} />
      </Suspense>
      <ContactShadows
        position={[0, 0.015, 0]}
        opacity={0.65}
        scale={14}
        blur={2.2}
        far={5}
        color="#000000"
      />
      <ProjectOrbit reduce={reduce} />
    </>
  )
}

export function GarageScene({
  visible,
  progress,
}: {
  visible: boolean
  progress: number
}) {
  const reduce = usePrefersReducedMotion()
  const [webglOk, setWebglOk] = useState(true)

  useMountEffect(() => {
    try {
      const canvas = document.createElement('canvas')
      const ok = !!(canvas.getContext('webgl2') || canvas.getContext('webgl'))
      if (!ok) setWebglOk(false)
    } catch {
      setWebglOk(false)
    }
  })

  if (!webglOk) {
    return (
      <div className="garage-hero-canvas garage-hero-fallback" aria-hidden>
        <img
          src="/3d-assets/car/car-poster.svg"
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        <div className="garage-hero-fallback-copy">
          Garage view unavailable — telemetry still runs below.
        </div>
      </div>
    )
  }

  return (
    <div className="garage-hero-canvas is-interactive" aria-hidden>
      <Canvas
        dpr={[1, 1.5]}
        camera={{
          position: DEFAULT_CAMERA.position,
          fov: 34,
          near: 0.1,
          far: 50,
        }}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: 'high-performance',
          toneMappingExposure: 1.15,
        }}
        frameloop={visible ? 'always' : 'demand'}
      >
        <SceneBody progress={progress} reduce={!!reduce} />
      </Canvas>
    </div>
  )
}

useGLTF.preload(DESKTOP_CAR, false, true)
