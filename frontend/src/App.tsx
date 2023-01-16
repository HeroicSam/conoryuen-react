import { Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, DepthOfField } from '@react-three/postprocessing';
import { Perf } from 'r3f-perf'
import Loader from './components/Loader';
import Leaf from './components/Leaf';
import ParallaxCamera from './components/ParallaxCamera';
import { useState, Suspense } from 'react';

function App({ count = 80, depth = 80 }) {
  const [modelsLoaded, setModelsLoaded] = useState(false);
  console.log(modelsLoaded);
  return (
    <>
      {modelsLoaded && (
        <div className="overlay">
          <div className="lefside">
            <h1 className="text-lg">Conor Yuen</h1>
            <p>Work</p>
            <h1>Hotswaps</h1>
            <h1>EcoHabit</h1>
          </div>
        </div>
      )}
      <Canvas gl={{ alpha: false}} camera={{near: 0.01, far: 110, fov: 20 }} >
        <Suspense fallback={<Loader setModelsLoaded={setModelsLoaded}/>}>
          <Perf />
          <color attach="background" args={["#ffffff"]} /> 
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
