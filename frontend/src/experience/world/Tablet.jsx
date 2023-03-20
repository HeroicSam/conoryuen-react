import { useState, useRef } from 'react'
import { useThree } from '@react-three/fiber';
import { Html } from "@react-three/drei";
import gsap from 'gsap'

function Tablet({ toTablet }) {

  const { camera } = useThree();
  const tabletRef = useRef(null);
  const [tabletToggle, setTabletToggle] = useState(false);

  console.log(tabletRef)

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
      {!tabletToggle && <img src='/duck.jpg' onPointerDown={() => toTablet()} /> }
      {tabletToggle && <iframe src="./src/experience/world/tablet/tablet.html" />}
    </Html>
  )
}

export default Tablet;