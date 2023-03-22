import { useState, useTransition, useRef, Suspense } from 'react'
import { useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import gsap from 'gsap'

import Loader from '../components/Loader'
import useWidthBreakpointReached from '../utility/Hooks'

import Ground from './world/Ground'
import Scene from './world/Scene'
import Tablet from './world/Tablet'

import Lights from './Lights'
import PostProcessing from './PostProcessing'
import Raycaster from './Raycaster'

function Experience() {

  const isMobile = useWidthBreakpointReached('md');
  const [isLoaded, setIsLoaded] = useState(false)
  const [lockScreenToggle, setLockScreenToggle] = useState(true);
  const [homeScreenToggle, setHomeScreenToggle] = useState(false);
  const [isPending, startTransition] = useTransition()

  const { camera } = useThree();

  const cameraRef = useRef(null)

  // OrbitControls functions
  function orbitDisable() {
    cameraRef.current.enableRotate = false
    cameraRef.current.enableZoom = true
  }

  function handleTransition() {

    const transitionTimeline = gsap.timeline()
    setHomeScreenToggle(true);

    startTransition(() => {
      orbitDisable()
      transitionTimeline.to(
        camera.position,
        {
          x: .076,
          y: 1.25,
          z: 1,
          duration: 2,
          ease: 'power3.inOut',
        }
      ).to(".lockScreen", {
        y: -930,
        duration: .3,
        onComplete: () => {
          setLockScreenToggle(false)
        }
      })
    })    
  }

  return (
    <Suspense fallback={<Loader setIsLoaded={setIsLoaded} />}>
      <color attach="background" args={["#FFDFD3"]} />
      <OrbitControls
        ref={cameraRef}
        target={[0.076, 1.192, .835]}
        enablePan={false}
      />
      {isMobile && (
          <Raycaster
            handleTransition={handleTransition}
          />
        )
      }
      <Ground />
      <Scene />
      <Tablet
        handleTransition={handleTransition}
        lockScreenToggle={lockScreenToggle}
        homeScreenToggle={homeScreenToggle}
      />
      <Lights />
      <PostProcessing />
    </Suspense>
  )
}

export default Experience
