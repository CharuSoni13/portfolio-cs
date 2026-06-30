import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// A continuous particle "neural network" universe that morphs as the user
// scrolls through the six portfolio sections, acting as the cinematic
// backdrop described in the PRD (brain network -> console -> circuit path ->
// gallery -> constellation -> orb).
export default function Scene3D({ quality = 'high', sectionCount = 6 }) {
  const mountRef = useRef(null)
  const stateRef = useRef({ quality })

  useEffect(() => {
    stateRef.current.quality = quality
  }, [quality])

  useEffect(() => {
    const mount = mountRef.current
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.innerWidth < 768

    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x05060a, 0.012)

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200)
    camera.position.set(0, 0, 24)

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2))
    mount.appendChild(renderer.domElement)

    // ---- Node network (the "brain" / constellation) ----
    const NODE_COUNT = isMobile ? 90 : 220
    const nodeGeo = new THREE.BufferGeometry()
    const positions = new Float32Array(NODE_COUNT * 3)
    const basePositions = new Float32Array(NODE_COUNT * 3)
    const colorChoices = [new THREE.Color('#5eead4'), new THREE.Color('#a78bfa'), new THREE.Color('#fbbf6b')]
    const colors = new Float32Array(NODE_COUNT * 3)

    for (let i = 0; i < NODE_COUNT; i++) {
      const radius = 14 + Math.random() * 18
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta) * 0.6
      const z = radius * Math.cos(phi) - 10
      positions.set([x, y, z], i * 3)
      basePositions.set([x, y, z], i * 3)
      const c = colorChoices[i % colorChoices.length]
      colors.set([c.r, c.g, c.b], i * 3)
    }
    nodeGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    nodeGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const nodeMat = new THREE.PointsMaterial({
      size: 0.16,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const points = new THREE.Points(nodeGeo, nodeMat)
    scene.add(points)

    // ---- Connecting lines (synapses) ----
    const lineSegments = []
    const maxLinks = isMobile ? 70 : 180
    for (let i = 0; i < maxLinks; i++) {
      const a = Math.floor(Math.random() * NODE_COUNT)
      const b = Math.floor(Math.random() * NODE_COUNT)
      lineSegments.push(a, b)
    }
    const lineGeo = new THREE.BufferGeometry()
    const linePositions = new Float32Array(lineSegments.length * 3)
    const lineGeoUpdate = () => {
      for (let i = 0; i < lineSegments.length; i++) {
        const idx = lineSegments[i]
        linePositions[i * 3] = positions[idx * 3]
        linePositions[i * 3 + 1] = positions[idx * 3 + 1]
        linePositions[i * 3 + 2] = positions[idx * 3 + 2]
      }
      lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
    }
    lineGeoUpdate()
    const lineMat = new THREE.LineBasicMaterial({ color: 0x2c3550, transparent: true, opacity: 0.35 })
    const lines = new THREE.LineSegments(lineGeo, lineMat)
    scene.add(lines)

    // ---- Ambient drifting dust ----
    const DUST = isMobile ? 200 : 600
    const dustGeo = new THREE.BufferGeometry()
    const dustPos = new Float32Array(DUST * 3)
    for (let i = 0; i < DUST * 3; i++) dustPos[i] = (Math.random() - 0.5) * 80
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3))
    const dustMat = new THREE.PointsMaterial({ size: 0.04, color: 0x9aa3b2, transparent: true, opacity: 0.4 })
    const dust = new THREE.Points(dustGeo, dustMat)
    scene.add(dust)

    // ---- Lights (for subtle ambient glow feel, used by fog/material tone) ----
    scene.add(new THREE.AmbientLight(0x404a66, 1.2))

    let mouseX = 0
    let mouseY = 0
    const handleMouse = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', handleMouse)

    let scrollProgress = 0
    const handleScroll = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      scrollProgress = max > 0 ? window.scrollY / max : 0
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    let frameId
    const clock = new THREE.Clock()

    const animate = () => {
      frameId = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()
      const q = stateRef.current.quality
      const speed = q === 'eco' ? 0.5 : 1

      // camera flies through the network across the whole scroll journey
      const journey = scrollProgress * sectionCount
      camera.position.z = 24 - journey * 6.4
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouseX * 1.6, 0.04)
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, -mouseY * 1.2 + Math.sin(t * 0.15) * 0.4, 0.04)
      camera.lookAt(0, 0, camera.position.z - 18)

      points.rotation.y = t * 0.02 * speed + scrollProgress * 1.4
      lines.rotation.y = points.rotation.y
      dust.rotation.y = -t * 0.01 * speed

      if (!prefersReduced) {
        const posAttr = nodeGeo.attributes.position
        for (let i = 0; i < NODE_COUNT; i++) {
          const ix = i * 3
          posAttr.array[ix + 1] =
            basePositions[ix + 1] + Math.sin(t * 0.6 * speed + i) * 0.35
        }
        posAttr.needsUpdate = true
        lineGeoUpdate()
        lineGeo.attributes.position.needsUpdate = true
      }

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('mousemove', handleMouse)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      nodeGeo.dispose()
      nodeMat.dispose()
      lineGeo.dispose()
      lineMat.dispose()
      dustGeo.dispose()
      dustMat.dispose()
      renderer.dispose()
      if (mount && renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [sectionCount])

  return <div id="bg-canvas" ref={mountRef} aria-hidden="true" />
}
