import * as THREE from 'three';
import { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from '@react-three/drei';

function Jordan({ z } : { z: number }) {
  const ref = useRef<THREE.Group>(null!);
  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z]);
  const { nodes, materials } = useGLTF('/jordan-v1.glb')

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
    <group ref={ref} dispose={null}>
      <group position={[2.82, 0.94, -0.21]} rotation={[-Math.PI / 2, 0, 0]} scale={0.28}>
        <group scale={100}>
          <group position={[-0.1, -0.01, 0.01]}>
            <mesh geometry={(nodes.shoe_shoe_0_1 as THREE.Mesh).geometry} material={materials.shoe} />
            <mesh geometry={(nodes.shoe_shoe_0_2 as THREE.Mesh).geometry} material={materials.shoelace} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/jordan-v1.glb')

export default Jordan;
