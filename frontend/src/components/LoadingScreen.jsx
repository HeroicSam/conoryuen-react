import { useState, useEffect, useRef } from "react";
import gsap, { Power0 } from 'gsap';

function LoadingScreen() {

  const [loadProgress, setLoadProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const blobContainerRef = useRef(null);
  const blobRef = useRef(null);
  let width = window.innerWidth;
  let height = window.innerHeight;
  let blobX, blobY;

  const t1 = gsap.timeline()

  window.addEventListener('resize', () => {

    width = window.innerWidth;
    height = window.innerHeight;

    if (!loading) {
      endLoadingScreen();
    }

  })

  function endLoadingScreen(){

    gsap.to(".loadingScreen", {
      width: width * 0.35,
      height: width * 0.35,
      borderRadius: "50%",
      duration: 2,
    })

    gsap.to(".overlay", {
      width: width * 0.35,
      height: width * 0.35,
      borderRadius: "50%",
      backdropFilter: "blur(50px)",
      duration: 2,

    })

    window.removeEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousemove', handleMouseMove);

  }

  const handleMouseMove = (e) => {

    if (loading) {
      gsap.to(".blob", {
        x: e.clientX,
        y: e.clientY,
        duration: 2,
      })
    } else {
      gsap.to(".blob", {
        x: e.clientX * .1,
        y: e.clientY * .1,
        duration: 2,
      })
    }
  }

  setTimeout(() => {

    if (loadProgress < 100) {
      setLoadProgress(loadProgress + 1);
    } else {
      setTimeout(()=> {
        setLoading(false);
        endLoadingScreen();
      }, 1000)
    }

  }, 50)

  useEffect(() => {

    gsap.set(".blob", {
      width: "1000px",
      height: "1000px",
    })

    window.addEventListener('mousemove', handleMouseMove);

    () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }

  },[])


  return (
    <>
      <div className="overlay absolute w-full h-full flex justify-end items-end overflow-hidden z-20">
        <h1 className="loadProgress font-migra text-black font-bold text-8xl mr-8 mb-8 z-30">
          { loading ? `${loadProgress} %` : null }
        </h1>
      </div>
      <div ref={blobContainerRef} className="loadingScreen absolute w-full h-full bg-soft-green overflow-hidden">
        <div ref={blobRef} className="blob absolute rounded-full bg-soft-yellow translate-x-[-50%] translate-y-[-50%]" />
      </div>
      {/* <div className="parent absolute h-full w-full bg-white flex justify-center items-center">
        <h1>We are farmersddddddddddddd</h1>
      </div> */}
      {/* <div className="grandparent absolute w-full h-full bg-transparent flex justify-center items-center">
      </div> */}
      <svg>
        <filter id='noiseFilter'>
          <feTurbulence 
            baseFrequency='.76' 
            stitchTiles='stitch'/>
          <feColorMatrix in="colorNoise" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
          <feComposite operator="in" in2="SourceGraphic" result="monoNoise"/>
          <feBlend in="SourceGraphic" in2="monoNoise" mode="screen" />
        </filter>
      </svg>
    </>
  )
}

export default LoadingScreen;

// need to add a svg noise filter and animate the gradient clockwise

// bg-gradient-to-br from-soft-yellow to-soft-green
