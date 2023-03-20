import { useState, useRef } from 'react'
import gsap from 'gsap'
import { useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function Camera() {

  const [orbitEnabled, setOrbitEnabled] = useState(true);
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

  return (
    <>
      <OrbitControls ref={orbitRef} target={[.1, 1.14, 1]} enabled={orbitEnabled} />
    </>
  )
}

export default Camera;