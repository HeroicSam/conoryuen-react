import { useState, useRef, useEffect } from 'react'
import { Html } from "@react-three/drei"
import useWidthBreakpointReached from '../../utility/useWidthBreakpointReached'
import Time from './utils/Time'
import Bar from './Bar'

function Tablet({ toTablet }) {

  const isMobile = useWidthBreakpointReached('md');

  const tabletRef = useRef(null);
  const [tabletToggle, setTabletToggle] = useState(false);

  return (
    <Html
      ref={tabletRef}
      position={[0.076, 1.193, .835]}
      rotation-x={-Math.PI / 9}
      scale={.01}
      occlude
      transform
      className='w-[670px] h-[940px]'
    >
      {!tabletToggle && (
        <div className={`${'w-full h-full'}`} onPointerDown={() => toTablet()}>
          <div className='absolute w-full h-full flex flex-col items-center text-white text-9xl  '>
            <Time />
            <div className="h-full">
              <h1>placeholder</h1>
            </div>
            <Bar />
          </div>
          <img className="w-full h-full object-cover rounded-lg" src='/pape4.png' />
        </div>
      )}
      {tabletToggle && <iframe src="./src/experience/world/tablet/tablet.html" />}
    </Html>
  )
}

export default Tablet;