import { useState, useRef, Suspense } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Html, useAspect, useVideoTexture } from '@react-three/drei';
import useWidthBreakpointReached from './utility/useWidthBreakpointReached';
import Loader from './components/Loader';
// import Scene from './components/Scene';
import { Model } from './components/Untitledv3';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useWidthBreakpointReached('md');


  const Lights = () => {
    const light = useRef(null);
    return (
      <group>
        <rectAreaLight position={[0, 6, 1.1]} intensity={2} ref={light} rotation={[- Math.PI / 2, 0, 0]} />
      </group>
    )
  }

  const VideoMaterial = ({ url }) => {
    const texture = useVideoTexture(url)
    return <meshBasicMaterial map={texture} toneMapped={false} />
  }

  const VideoScene = () => {
    const size = useAspect(1920, 1080)
    return (
      <mesh position={[0, 4, 6]} rotation={[0, -Math.PI, 0]}>
        <planeGeometry args={[10,6,1]} rotateY={3.14} />
        <VideoMaterial url='video.mp4' />
      </mesh>
    )
  }

  return (
    <>
      <Canvas gl={{ alpha: true}} camera={{near: 0.01, far: 60, fov: 35, position: [0, 7, -15]}} >
        <Lights />
        <OrbitControls target={[0, 3, 5]} />
        <Suspense fallback={<Loader setIsLoaded={setIsLoaded}/>}>
          <color attach="background" args={["#000"]} /> 
          <Model />
          <VideoScene />
          {/* <Html occlude="blending" transform position={[0, 3, 5]} rotation-y={-Math.PI} className='w-[300px] h-[169px]'>
            <video width='310' height='174' autoplay>
              <source src='video.mp4' />
            </video>
          </Html> */}
        </Suspense> 
      </Canvas>
    </>
  )
}

export default App;
