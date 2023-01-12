import * as THREE from 'three';
import { useState } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

export default function ParallaxCamera() {
  const [vec] = useState(() => new THREE.Vector3())
  const { camera, mouse } = useThree()
  useFrame(() => camera.position.lerp(vec.set(mouse.x * 0.5, 1, 0.5), 0.05))
  return <PerspectiveCamera />
}