import * as THREE from 'three';
import { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from '@react-three/drei';

function MiniTotoro({ z } : { z: number }) {
  const ref = useRef<THREE.Group>(null!);
  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z]);
  const { nodes, materials } = useGLTF('/minitotoro.glb')

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
    <group dispose={null}>
      <group ref={ref} rotation={[-Math.PI / 2, 0, 0]} scale={0.06}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={(nodes.totoro1_pCube1_lambert2_0 as THREE.Mesh).geometry} material={materials.lambert2} position={[0.03, 5.1, -0.06]} material-emissive="#888888" scale={4}/>
        </group>
      </group>
    </group>
  )
}

export default MiniTotoro;
