import { Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, DepthOfField } from '@react-three/postprocessing';
import gsap, { Power4 } from 'gsap';
import { Perf } from 'r3f-perf';
import Loader from './components/Loader';
import MiniTotoro from './components/Minitotoro';
import Leaf from './components/Leaf';
import Keyboard from './components/Keyboard';
import ParallaxCamera from './components/ParallaxCamera';
import NavBar from './components/NavBar';
import useWidthBreakpointReached from './utility/useWidthBreakpointReached';
import { useState, Suspense, useEffect } from 'react';

function App({ count = 20, depth = 80 }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [modelsLoaded, setModelsLoaded] = useState(1);
  const isMobile = useWidthBreakpointReached('md');

  useEffect(() => {
    const t1 = gsap.timeline();
    const t2 = gsap
    t1.from(".singleText, .ease", {
      y: 400,
      ease: Power4.easeOut,
      delay: 0.1,
      duration: 1.8,
      stagger: {
        amount: 0.4,
      },
    });
  }, [isLoaded]);

  return (
    <>
      {isLoaded && (
        <div className="flex flex absolute inset-0 z-50 text-black justify-center">
          <NavBar isMobile={isMobile} />
          <div className={`
            w-full h-full flex flex-col justify-end items-center px-24 py-20
            ${isMobile ? 'px-8 py-6' : null}
          `}>
            <hr className="w-full border" />
            <div 
              className="w-full h-40 relative overflow-hidden"
              onMouseEnter={() => {
                setModelsLoaded(2)
              }}
              onMouseLeave={() => {
                setModelsLoaded(1)
              }}
            >
              <h1 className="singleText absolute text-9xl stilson text-black">Hotswaps</h1>
            </div>
            <hr className="w-full border" />
            <div 
              className="w-full h-40 relative overflow-hidden"
              onMouseEnter={() => {
                setModelsLoaded(3)
              }}
              onMouseLeave={() => {
                setModelsLoaded(1)
              }}
            >
              <h1 className="singleText absolute text-9xl stilson ml-10 text-black">EcoHabit</h1>
            </div>
            <hr className="w-full border" />
            <div 
              className="w-full h-40 relative overflow-hidden"
              onMouseEnter={() => {
                setModelsLoaded(4)
              }}
              onMouseLeave={() => {
                setModelsLoaded(1)
              }}
            >
              <h1 className="singleText absolute text-9xl stilson ml-20 text-black">Against All Odds</h1>
            </div>
            <hr className="w-full border" />
            <div className="w-full h-40 relative overflow-hidden">
              <h1 className="singleText absolute text-9xl stilson ml-32 text-black">This Site!</h1>
            </div>
            <hr className="w-full border" />
          </div>
        </div>
      )}
      <Canvas gl={{ alpha: false}} camera={{near: 0.01, far: 110, fov: 20 }} >
        <Suspense fallback={<Loader setIsLoaded={setIsLoaded}/>}>
          <Perf />
          <color attach="background" args={["#ffffff"]} /> 
          <spotLight position={[10, 10, 10]} intensity={1} />
          <Environment preset='apartment' />
          {(modelsLoaded === 1) && Array.from({ length: count }, (_, i) => (<MiniTotoro key={i} z={-(i / count) * depth - 20}/>))}
          {(modelsLoaded === 2) && Array.from({ length: count }, (_, i) => (<Keyboard key={i} z={-(i / count) * depth - 20}/>))}
          {(modelsLoaded === 3) && Array.from({ length: count }, (_, i) => (<Leaf key={i} z={-(i / count) * depth - 20}/>))}
          {/* <EffectComposer>
            <DepthOfField target={[0, 0, depth / 2]} focalLength={0.5} bokehScale={11} height={700} />
          </EffectComposer> */}
          <ParallaxCamera />
        </Suspense>
      </Canvas>
    </>
  )
}

// FFBF52
// ffbf40
// Changing backgrounds whnen hovering over menu items, e.g falling keyboards, plastic bottles lol, etc.
// Hover effect for menu items -> left to right font color transition, or bold -> semibold effect.
// Scroll down automatically selects different links
// Info block maybe can scroll as well, or transition in and out

export default App;
