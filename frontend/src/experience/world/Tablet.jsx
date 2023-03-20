import { useState, useRef } from 'react'
import { useThree } from '@react-three/fiber';
import { Html } from "@react-three/drei";

function Tablet({ toTablet }) {

  const { camera } = useThree();
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
        <div className="w-[1200px] h-[1600px]" onPointerDown={() => toTablet()}>
          <div className='w-full h-full absolute text-white'>Hello</div>
          <img className="w-full h-full object-cover" src='/pape2.jpg' />
        </div>
      )}
      {tabletToggle && <iframe src="./src/experience/world/tablet/tablet.html" />}
    </Html>
  )
}

export default Tablet;