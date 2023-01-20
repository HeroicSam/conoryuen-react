import { Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import gsap, { Power4 } from 'gsap';
import Loader from './components/Loader';
import MiniTotoro from './components/Minitotoro';
import Leaf from './components/Leaf';
import Keyboard from './components/Keyboard';
import Jordan from './components/Jordan';
import ParallaxCamera from './components/ParallaxCamera';
import NavBar from './components/NavBar';
import useWidthBreakpointReached from './utility/useWidthBreakpointReached';
import { useState, Suspense, useEffect } from 'react';

function App({ count = 30, depth = 80 }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [modelsLoaded, setModelsLoaded] = useState(1);
  const [isActive, setIsActive] = useState(false);
  const isMobile = useWidthBreakpointReached('md');

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
    console.log('running')
  }, [isLoaded]);

  function handleAccordion() {
    const t2 = gsap.timeline();
    const open = t2.to(".accordion" , {
      height: 400,
      ease: Power4.easeOut,
    })
    if (isActive) {
      console.log('reversing')
      open.reverse(1);
    } else {
      open.play()
    }
  }
  console.log(isLoaded)
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
              className="accordion w-full h-20 relative overflow-hidden"
              onMouseEnter={() => {
                setModelsLoaded(2)
              }}
              onMouseLeave={() => {
                setModelsLoaded(1)
              }}
              onClick={() => {
                setIsActive(!isActive);
                handleAccordion();
              }}
            >
              <h1 className="singleText absolute text-5xl leading-normal stilson text-black">Hotswaps</h1>
            </div>
            <hr className="w-full border" />
            <div 
              className="w-full h-20 relative overflow-hidden"
              onMouseEnter={() => {
                setModelsLoaded(3)
              }}
              onMouseLeave={() => {
                setModelsLoaded(1)
              }}
            >
              <h1 className="singleText absolute text-5xl leading-normal stilson ml-4 text-black">EcoHabit</h1>
            </div>
            <hr className="w-full border" />
            <div 
              className="w-full h-20 relative overflow-hidden"
              onMouseEnter={() => {
                setModelsLoaded(4)
              }}
              onMouseLeave={() => {
                setModelsLoaded(1)
              }}
            >
              <h1 className="singleText absolute text-5xl leading-normal stilson ml-8 text-black">Against All Odds</h1>
            </div>
            <hr className="w-full border" />
            <div className="w-full h-20 relative overflow-hidden">
              <h1 className="singleText absolute text-5xl leading-normal stilson ml-12 text-black">This Site!</h1>
            </div>
            <hr className="w-full border" />
          </div>
        </div>
      )}
      <Canvas gl={{ alpha: false}} camera={{near: 0.01, far: 110, fov: 20 }} >
        <Suspense fallback={<Loader setIsLoaded={setIsLoaded}/>}>
          <color attach="background" args={["#F6F6F6"]} /> 
          <spotLight position={[10, 10, 10]} intensity={1} />
          <Environment preset='apartment' />
          {(modelsLoaded === 1) && Array.from({ length: count }, (_, i) => (<MiniTotoro key={i} z={-(i / count) * depth - 20}/>))}
          {(modelsLoaded === 2) && Array.from({ length: count }, (_, i) => (<Keyboard key={i} z={-(i / count) * depth - 20}/>))}
          {(modelsLoaded === 3) && Array.from({ length: 80 }, (_, i) => (<Leaf key={i} z={-(i / count) * depth - 20}/>))}
          {(modelsLoaded === 4) && Array.from({ length: 5 }, (_, i) => (<Jordan key={i} z={-(i / count) * depth - 20}/>))}
          <ParallaxCamera />
        </Suspense>
      </Canvas>
    </>
  )
}

export default App;
