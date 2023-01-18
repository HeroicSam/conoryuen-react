import * as THREE from 'three';
import { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from '@react-three/drei';

function Leaf({ z } : { z: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z]);
  const { nodes, materials } = useGLTF('/leaf-transformed.glb');

  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2),
    y: THREE.MathUtils.randFloatSpread(height),
    rX: Math.random() * Math.PI,
    rY: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  });

  useFrame((state) => {
    ref.current.rotation.set((data.rX += 0.0004), (data.rY += 0.0004), (data.rZ += 0.0005));
    ref.current.position.set(data.x * width, (data.y -= 0.004), z);
    if (data.y < -height) {
      data.y = height
    };
  })

  return (
    <mesh ref={ref} geometry={(nodes.Object_3 as THREE.Mesh).geometry} material={materials['Material.001']} position={[1.09, -0.73, 0.52]} material-emissive="#888888" scale={5} />
  )
}

export default Leaf;