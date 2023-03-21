import { useState, useRef } from 'react'
import gsap from 'gsap'
import { useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Scene } from './world/Scene'
import { Ground }  from './world/Ground'
import Tablet from './world/Tablet'

function Camera({ isLoaded }) {

  const { camera } = useThree();
  const cameraRef = useRef(null)

  const [tabletToggle, setTabletToggle] = useState(false);

  function toTablet(){

    cameraRef.current.enableRotate = false
    cameraRef.current.enableZoom = true

    gsap.to(
      camera.position,
      {
        x: .076,
        y: 1.25,
        z: 1,
        duration: 2,
        ease: 'power3.inOut',
      }
    )
  }

  return (
    <>
      <OrbitControls
        ref={cameraRef}
        target={[0.076, 1.192, .835]}
        enablePan={false}
      />
      <Ground />
      <Scene />
      <Tablet toTablet={toTablet} tabletToggle={tabletToggle} />
    </>
  )
}

export default Camera;