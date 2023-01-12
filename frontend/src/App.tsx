import { Suspense, useEffect } from 'react';
import { Canvas, } from '@react-three/fiber';
import Leaf from './components/Leaf';
import ParallaxCamera from './components/ParallaxCamera';
import { Environment } from '@react-three/drei';
import { EffectComposer, DepthOfField } from '@react-three/postprocessing';

function App({ count = 80, depth = 80 }) {
  return (
    <>
      <div className="overlay">
        <h1>hello</h1>
      </div>
      <Canvas gl={{ alpha: false}} camera={{near: 0.01, far: 110, fov: 20 }} >
        <color attach="background" args={["#ffbf40"]} />
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

export default App
