import { useState, useRef, Suspense } from 'react';
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, useHelper } from '@react-three/drei';
import useWidthBreakpointReached from './utility/useWidthBreakpointReached';
import Loader from './components/Loader';
import Scene from './components/scene';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useWidthBreakpointReached('md');

  const Lights = () => {
    const light = useRef(null);
    useHelper(light, RectAreaLightHelper, 'cyan')
    return (
      <group>
        <rectAreaLight position={[0, 6, 2]} intensity={3} ref={light} rotation={[- Math.PI / 2, 0, 0]} />
      </group>
    )
  }

  return (
    <>
      <div className="">
        This is a div
      </div>
      <Canvas gl={{ alpha: true}} camera={{near: 0.01, far: 110, fov: 80, position: [0, 3, -5] }} >
        <Lights />
        <Suspense fallback={<Loader setIsLoaded={setIsLoaded}/>}>
          <color attach="background" args={["#000000"]} /> 
          <Scene />
          <OrbitControls />
        </Suspense> 
      </Canvas>
    </>
  )
}

export default App;
