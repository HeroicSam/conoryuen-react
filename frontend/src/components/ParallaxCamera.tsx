import * as THREE from 'three';
import { useEffect, useState } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

export default function ParallaxCamera() {
  const [vec] = useState(() => new THREE.Vector3())
  const { camera } = useThree()
  const cursorPos = { x: 0, y: 0 };

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorPos.x = e.clientX
      cursorPos.y = e.clientY
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [])

  useFrame(() => {
    camera.position.lerp(vec.set(cursorPos.x * 0.0005, 0, 0.5), 0.05) // y- cursorPos.y * 0.0005
  })
  return <PerspectiveCamera />
}