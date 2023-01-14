import { Suspense } from 'react';
import { Canvas, } from '@react-three/fiber';
import Leaf from './components/Leaf';
import ParallaxCamera from './components/ParallaxCamera';
import { Environment } from '@react-three/drei';
import { EffectComposer, DepthOfField } from '@react-three/postprocessing';

function App({ count = 80, depth = 80 }) {
  return (
    <>
      <div className="overlay">
        <div className="lefside">
          <h1>Conor Yuen</h1>
          <p>Work</p>
          <h1>Hotswaps</h1>
          <h1>EcoHabit</h1>

        </div>
      </div>
      <Canvas gl={{ alpha: false}} camera={{near: 0.01, far: 110, fov: 20 }} >
        <color attach="background" args={["#ffffff"]} /> 
        <spotLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
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

export default App
