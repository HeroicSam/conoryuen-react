import { Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, DepthOfField } from '@react-three/postprocessing';
import { Perf } from 'r3f-perf';
import gsap, { Power4 } from 'gsap';
import Loader from './components/Loader';
import Leaf from './components/Leaf';
import ParallaxCamera from './components/ParallaxCamera';
import NavBar from './components/NavBar';
import { useState, Suspense, useEffect } from 'react';

function App({ count = 80, depth = 80 }) {
  const [modelsLoaded, setModelsLoaded] = useState(false);

  useEffect(() => {
    const t1 = gsap.timeline();
    t1.from(".singleText, .ease", {
      y: 400,
      ease: Power4.easeOut,
      delay: 0.1,
      duration: 1.8,
      stagger: {
        amount: 0.4,
      },
    });
  });

  return (
    <>
      {modelsLoaded && (
        <div className="flex flex absolute inset-0 z-50 text-black justify-center">
          <NavBar />
          <div className="w-full h-full flex flex-col justify-end items-center px-24 py-20">
            <div className="singleLine">
              <h1 className="singleText">HOTSWAPS</h1>
            </div>
            <hr className="w-full border" />
            <div className="singleLine">
              <h1 className="singleText">ECOHABIT</h1>
            </div>
          </div>
        </div>
      )}
      <Canvas gl={{ alpha: false}} camera={{near: 0.01, far: 110, fov: 20 }} >
        <Suspense fallback={<Loader setModelsLoaded={setModelsLoaded}/>}>
          {/* <Perf /> */}
          <color attach="background" args={["#FFBF52"]} /> 
          <spotLight position={[10, 10, 10]} intensity={1} />
          <Environment preset='apartment' />
          {Array.from({ length: count }, (_, i) => (<Leaf key={i} z={-(i / count) * depth - 20} />))}
          <EffectComposer>
            <DepthOfField target={[0, 0, depth / 2]} focalLength={0.5} bokehScale={11} height={700} />
          </EffectComposer>
          <ParallaxCamera />
        </Suspense>
      </Canvas>
    </>
  )
}

// ffbf40
// Changing backgrounds whnen hovering over menu items, e.g falling keyboards, plastic bottles lol, etc.
// Hover effect for menu items -> left to right font color transition, or bold -> semibold effect.
// Scroll down automatically selects different links
// Info block maybe can scroll as well, or transition in and out

export default App;
