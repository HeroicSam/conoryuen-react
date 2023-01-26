import { Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Loader from './components/Loader';
import MiniTotoro from './components/Minitotoro';
import Leaf from './components/Leaf';
import Keyboard from './components/Keyboard';
import ParallaxCamera from './components/ParallaxCamera';
import NavBar from './components/NavBar';
import useWidthBreakpointReached from './utility/useWidthBreakpointReached';
import { useState, Suspense, useLayoutEffect, useRef } from 'react';
import './fonts/TestDomaineDisplay-Bold.otf';
import gsap, { Power4 } from 'gsap'; // THIS NEEDS TO BE THE LAST IMPORT OR EVERYTHING FUCKIN BREAKS
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App({ count = 40, depth = 80 }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isActive, setIsActive] = useState(false)
  const [modelsLoaded, setModelsLoaded] = useState(1);
  const isMobile = useWidthBreakpointReached('md');

  const pageRef = useRef(null);
  const canvasRef = useRef(null);

  const wordOneRef = useRef(null);
  const wordTwoRef = useRef(null);
  const wordThreeRef = useRef(null);
  const wordFourRef = useRef(null);

  const refArray = [wordOneRef, wordTwoRef, wordThreeRef, wordFourRef];

  useLayoutEffect(() => {
    const t1 = gsap.timeline();
    t1.from(".ease", {
      y: 400,
      ease: Power4.easeOut,
      delay: 0.1,
      duration: 1.8,
      stagger: {
        amount: 0.4,
      },
    })

    const pageEle = pageRef.current;

    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: pageEle,
        start: "top top",
        end: "bottom 100%",
        scrub: true,
      }
    })

    // refArray.forEach((ele, i) => {
    //   const element = ele.current;
    //   const t2 = gsap.timeline()
    //   t2.from(element, {
    //     y: 400,
    //     ease: Power4.easeOut,
    //     duration: 1.4,
    //   }).to(element, {
    //     y: -400,
    //     ease: Power4.easeIn,
    //     duration: 1.4
    //   }).repeat(-1).repeatDelay(5.1).delay(.85 + (2 * i))
    // })

  }, [isLoaded]);

  function handleAccordion() {
    const t2 = gsap.timeline();
    const open = t2.to(".accordion" , {
      height: 400,
      ease: Power4.easeOut,
    })
    if (isActive) {
      console.log('reversing')
      open.reverse();
    } else {
      open.play()
    }
  }

  return (
    <>
      {isLoaded && (
        <div ref={pageRef} className="flex flex-col w-full absolute left-0 right-0 z-50 text-black justify-center overflow-y-scroll">
          <NavBar isMobile={isMobile} />
          <div className={`
            w-full h-screen flex flex-col justify-start items-center px-16 py-20
            ${isMobile ? 'px-0 py-4' : null}
          `}>
            <div className='flex justify-center w-full h-[6rem] relative overflow-hidden mt-20'>
              <h1 className='ease text-gray-800 domaine text-[4rem]'>I'm a</h1>
            </div>
            <div className='flex justify-center w-full h-[6rem] relative overflow-hidden mt-[-1rem]'>
              <h1 className='ease text-gray-800 domaine text-[4rem]'>Frontend</h1>
            </div>
            <div className='flex justify-center w-full h-[6rem] relative overflow-hidden mt-[-1rem]'>
              <h1 ref={wordOneRef} className='ease text-gray-800 domaine text-[4rem] absolute'>Developer</h1>
              {/* <h1 ref={wordTwoRef} className='text-gray-800 domaine text-[4rem] absolute'>Designer</h1>
              <h1 ref={wordThreeRef} className='text-gray-800 domaine text-[4rem] absolute'>Enthusiast</h1>
              <h1 ref={wordFourRef} className='text-gray-800 domaine text-[4rem] absolute'>Guy</h1> */}
            </div>
            <div className='flex justify-center items-center forma overflow-hidden mt-6 w-4/5'>
              <p className='ease forma text-center text-gray-600 w-4/5'>with an unhealthy obsession for motion design and dynamic user experiences.</p>
            </div>
            <div className='forma mt-auto text-[11px]'>
              <a>Github</a>{"  /  "}<a>LinkedIn</a>
            </div>
          </div>
          <div className="h-max flex flex-col">
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
                // handleAccordion();
              }}
            >
              <h1 className="singleText absolute text-5xl leading-normal forma text-gray-800">Hotswaps</h1>
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
      <Canvas ref={canvasRef} gl={{ alpha: false}} camera={{near: 0.01, far: 110, fov: 20 }} >
        <Suspense fallback={<Loader setIsLoaded={setIsLoaded}/>}>
          <color attach="background" args={["#F6F6F6"]} /> 
          <spotLight position={[10, 10, 10]} intensity={1} />
          <Environment preset='apartment' />
          {(modelsLoaded === 1) && Array.from({ length: count }, (_, i) => (<MiniTotoro key={i} z={-(i / count) * depth - 20}/>))}
          {(modelsLoaded === 2) && Array.from({ length: count }, (_, i) => (<Keyboard key={i} z={-(i / count) * depth - 20}/>))}
          {(modelsLoaded === 3) && Array.from({ length: 80 }, (_, i) => (<Leaf key={i} z={-(i / count) * depth - 20}/>))}
          <ParallaxCamera />
        </Suspense>
      </Canvas>
    </>
  )
}

export default App;
