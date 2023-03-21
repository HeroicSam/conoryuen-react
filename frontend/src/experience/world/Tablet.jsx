import { useState, useRef, useTransition } from 'react'
import { Html } from "@react-three/drei"
import gsap from 'gsap'
import Time from './utils/Time'
import Bar from './Bar'

function Tablet({ toTablet, tabletToggle }) {

  const [lockScreenToggle, setLockScreenToggle] = useState(true);
  const [homeScreenToggle, setHomeScreenToggle] = useState(false);
  const [isPending, startTransition] = useTransition()
  const tabletRef = useRef(null);

  function handleTransition() {
    setHomeScreenToggle(true);
    startTransition(() => {
      toTablet()
      gsap.to(".lockScreen", {
        y: -1000,
        duration: 2,
        delay: 1,
        ease: 'power3.inOut',
        onComplete: () => {
          setLockScreenToggle(false)
        }
      })
    })    
  }

  return (
    <Html
      ref={tabletRef}
      position={[0.076, 1.193, .835]}
      rotation-x={-Math.PI / 9}
      scale={.01}
      occlude
      transform
      className='w-[670px] h-[930px] overflow-hidden bg-home-screen rounded-xl'
    >
      {lockScreenToggle && (
        <div className={`lockScreen ${'w-full h-full'} bg-white`} onPointerDown={() => handleTransition()} >
          <div className='absolute w-full h-full flex flex-col items-center text-white text-7xl' >
            <Time />
            <div className="h-full">
            </div>
            <Bar />
          </div>
          <img className="w-full h-full object-cover rounded-xl" src='/pape4.png' />
        </div>
      )}
      {homeScreenToggle && <iframe src="./src/experience/world/tablet/tablet.html" />}
    </Html>
  )
}

export default Tablet;