import { useState, useMemo, useRef, Suspense } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import { useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { EffectComposer, Noise, Bloom } from '@react-three/postprocessing'

import { Scene } from './world/Scene'
import { Ground } from './world/Ground'

function Experience() {

  const [orbitEnabled, setOrbitEnabled] = useState(true)
  const orbitRef = useRef(null)

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
    <>
      <OrbitControls ref={orbitRef} target={[.1, 1.14, 1]} enabled={orbitEnabled} />
      <color attach="background" args={["#FFDFD3"]} />
      <pointLight position={[0,5,4]} castShadow intensity={.5}/>
      <ambientLight intensity={.6} />
      <Suspense>
        <Ground />
        <Scene castshadow materials={materials} />
      </Suspense>
      <EffectComposer>
        <Bloom luminanceThreshold={.78} luminanceSmoothing={0.1} height={300} />
        <Noise opacity={0.20} />
      </EffectComposer>
    </>
  )
}

export default Experience
