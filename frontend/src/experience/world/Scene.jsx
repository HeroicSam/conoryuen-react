import { useGLTF } from '@react-three/drei'
import { materials } from './Materials'

export function Scene() {
  const { nodes } = useGLTF('/scene.glb')
  return (
    <>
      <mesh castShadow geometry={nodes.Main.geometry} material={materials.whiteKeyMaterial} />
      <mesh castShadow geometry={nodes.blackkey.geometry} material={materials.blackKeyMaterial} />
      <mesh castShadow geometry={nodes.blackkey001.geometry} material={materials.blackKeyMaterial} />
      <mesh castShadow geometry={nodes.blackkey002.geometry} material={materials.blackKeyMaterial} />
      <mesh castShadow geometry={nodes.blackkey003.geometry} material={materials.blackKeyMaterial} />
      <mesh castShadow geometry={nodes.blackkey004.geometry} material={materials.blackKeyMaterial} />
      <mesh castShadow geometry={nodes.blackkey005.geometry} material={materials.blackKeyMaterial} />
      <mesh castShadow geometry={nodes.blackkey006.geometry} material={materials.blackKeyMaterial} />
      <mesh castShadow geometry={nodes.blackkey007.geometry} material={materials.blackKeyMaterial} />
      <mesh castShadow geometry={nodes.White_Keys01.geometry} material={materials.whiteKeyMaterial} />
      <mesh castShadow geometry={nodes.White_Keys002.geometry} material={materials.whiteKeyMaterial} />
      <mesh castShadow geometry={nodes.White_Keys003.geometry} material={materials.whiteKeyMaterial} />
      <mesh castShadow geometry={nodes.White_Keys004.geometry} material={materials.whiteKeyMaterial} />
      <mesh castShadow geometry={nodes.White_Keys005.geometry} material={materials.whiteKeyMaterial} />
      <mesh castShadow geometry={nodes.White_Keys006.geometry} material={materials.whiteKeyMaterial} />
      <mesh castShadow geometry={nodes.White_Keys007.geometry} material={materials.whiteKeyMaterial} />
      <mesh castShadow geometry={nodes.White_Keys008.geometry} material={materials.whiteKeyMaterial} />
      <mesh castShadow geometry={nodes.FrontBrassPiece.geometry} material={materials.brassMaterial} />
      <mesh castShadow geometry={nodes.BackBrassPiece.geometry} material={materials.brassMaterial} />
      <mesh castShadow geometry={nodes.BrassBridges.geometry} material={materials.brassMaterial} />
      <mesh castShadow geometry={nodes.Wires01.geometry} material={nodes.Wires01.material} />
      <mesh castShadow geometry={nodes.Wires02.geometry} material={nodes.Wires02.material} />
      <mesh castShadow geometry={nodes.Pegs.geometry} material={materials.redMaterial} />
      <mesh castShadow geometry={nodes.RedBar.geometry} material={materials.redMaterial} />
      <mesh castShadow geometry={nodes.WoodBase.geometry} material={materials.woodMaterial} />
      <mesh castShadow geometry={nodes.Pegs02.geometry} material={materials.redMaterial} />
      <mesh castShadow geometry={nodes.Wires03.geometry} material={nodes.Wires03.material} />
      <mesh castShadow geometry={nodes.Tablet.geometry} material={materials.blackKeyMaterial} onClick={() => console.log('hey there')} />
      <mesh geometry={nodes.Logo.geometry} material={materials['Material.001']} position={[-0.05, 0.93, 1]} rotation={[Math.PI / 2, 0, 0]} scale={0.04} />
    </>

  )
}

useGLTF.preload('/scene.glb')
