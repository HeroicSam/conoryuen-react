import { useRef } from 'react'
import { Html } from "@react-three/drei"
import Time from './utils/Time'
import Bar from './Bar'
import TabletHome from './TabletHome'

function Tablet({ handleTransition, lockScreenToggle, homeScreenToggle }) {

  const tabletRef = useRef(null);

  let ifrm = document.getElementById('applet')
  console.log(ifrm)

  return (
    <Html
      ref={tabletRef}
      position={[0.076, 1.193, .835]}
      rotation-x={-Math.PI / 9}
      scale={.01}
      occlude
      transform
      className='w-[670px] h-[930px] overflow-hidden bg-home-screen rounded-xl'
      onClick={() => handleTransition()} 
    >
      {lockScreenToggle && (
        <div className={`lockScreen ${'w-full h-full'} bg-white`} onPointerDown={() => handleTransition()} onPointerUp={() => handleTransition()} >
          <div className='absolute w-full h-full flex flex-col items-center text-white text-7xl' >
            <Time />
            <div className="h-full">
            </div>
            <Bar />
          </div>
          <img className="w-full h-full object-cover rounded-xl" src='/pape4.png' />
        </div>
      )}
      {homeScreenToggle && (
        <TabletHome />
      )}
    </Html>
  )
}

export default Tablet;