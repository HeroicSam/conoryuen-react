import { useGLTF } from "@react-three/drei";

export default function Leaf(props) {
  const { scene } = useGLTF('/leaf.glb');
  
  return (
    <primitive object={scene} {...props} />
  )
}