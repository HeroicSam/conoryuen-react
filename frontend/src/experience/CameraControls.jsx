import { useRef } from 'react'
import gsap from 'gsap'
import { useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Scene } from './world/Scene'
import { Ground }  from './world/Ground'
import Tablet from './world/Tablet'

function Camera() {

  const { camera } = useThree();
  const cameraRef = useRef(null)

  function toTablet(){

    cameraRef.current.enableRotate = false
    cameraRef.current.enableZoom = false

    gsap.to(
      camera.position,
      {
        x: .076,
        y: 1.25,
        z: 1,
        duration: 2,
        ease: 'power3.inOut',
        onComplete: () => {

        }
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
      <Tablet toTablet={toTablet} />
    </>
  )
}

export default Camera;