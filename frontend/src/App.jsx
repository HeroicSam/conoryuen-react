import { useState, useMemo, useRef } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { EffectComposer, Noise, Bloom, Vignette, DepthOfField, Outline } from '@react-three/postprocessing'

import { Scene } from './components/Scene'

function App() {

  const [orbitEnabled, setOrbitEnabled] = useState(true)
  const orbitRef = useRef()

  function CameraControls(props){
    const camera = useThree((state) => state.camera)
    camera.lookAt(0, 1.5, 0)

    function toTablet(){
      
      gsap.to(
        camera.position,
        {
          x: .09,
          y: 1.91,
          z: 1.1,
          duration: 2,
          ease: 'power3.inOut',
          onComplete: () => {
            setOrbitEnabled(!orbitEnabled)
            camera.lookAt(.1, 1.79, 1)
          }
        }
      )
    }

      return (
        <>
          <Scene castshadow materials={materials} toTablet={toTablet} />
        </>
      )
  } 

  const materials = useMemo(() => {
    return {
      pianoMaterial: new THREE.MeshToonMaterial({
        color: new THREE.Color('#dfdfdf')
      }),
      blackKeyMaterial: new THREE.MeshToonMaterial({
        color: new THREE.Color('black')
      }),
      whiteKeyMaterial: new THREE.MeshLambertMaterial({
        color: new THREE.Color('#ffffff')
      }),
      redMaterial: new THREE.MeshToonMaterial({
        color: new THREE.Color('#f62c2f')
      }),
      brassMaterial: new THREE.MeshStandardMaterial({
        // color: new THREE.Color('#E1C16E'),
        color: new THREE.Color('#b9853c'),

      }),
      woodMaterial: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#a45724')
      })
    }
  })

  return (
    <Canvas shadows camera={{ position: [1.6, 1.9, 2.2] }}>
      <OrbitControls ref={orbitRef} target={[.1, 1.14, 1]} enabled={orbitEnabled} />
      <CameraControls materials={materials} />
      <color attach="background" args={["#FFDFD3"]} />
      <pointLight position={[0,5,4]} castShadow intensity={.5}/>
      <ambientLight intensity={.6} />
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2   , 0, 0]} receiveShadow>
        <planeGeometry args={[10, 10, 10]} />
        <shadowMaterial color='#FFDFD3' />
      </mesh>
      <EffectComposer>
        <Bloom luminanceThreshold={.78} luminanceSmoothing={0.1} height={300} />
        <Noise opacity={0.20} />
      </EffectComposer>
    </Canvas>
  )
}

export default App
