import { useState, useRef, useEffect } from 'react'
import { useThree } from '@react-three/fiber'
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
      position={[0.076, 1.192, .835]}
      rotation-x={-Math.PI / 9}
      distanceFactor={.056}
      wrapperClass="tablet"
      occlude
      transform
    >
      {!tabletToggle && (
        <div className={`${'w-[1200px] h-[1600px]'}`} onPointerDown={() => toTablet()}>
          <div className='absolute w-full h-full flex flex-col items-center text-white text-9xl  '>
            <Time />
            <div className="h-full">
              <h1>placeholder</h1>
            </div>
            <Bar />
          </div>
          <img className="w-full h-full object-cover" src='/pape2.jpg' />
        </div>
      )}
      {tabletToggle && <iframe src="./src/experience/world/tablet/tablet.html" />}
    </Html>
  )
}

export default Tablet;