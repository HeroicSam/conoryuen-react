import { useState, useEffect } from "react";
import gsap from 'gsap';

function LoadingScreen() {

  const [loadProgress, setLoadProgress] = useState(0);

  setTimeout(() => {
    if (loadProgress < 100) {
      setLoadProgress(loadProgress + 1);
    }
  }, 50)

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    gsap.set(".blob", {
      width: width * 1.25,
      height: width * 1.25,
      top: 0 - (.5 * height),
      left: 0 - (.5 * width)
    })

    const t1 = gsap.timeline();

    t1.to(".blob", {
      left: width - (.7 * width),
      scale: 1.3,
      duration: 4,
    }).to(".blob", {
      top: height - (.8 * height),
      scale: 0.9,
      duration: 3.5,
    }).to (".blob", {
      left: 0 - (.5 * width),
      scale: 1.1,
      duration: 4,
    }).to(".blob", {
      top: 0 - (.5 * height),
      scale: 1.0,
      duration: 3,
    }).repeat(-1)
  },[])


  return (
    <>
      <div className="overlay flex justify-end items-end">
        <h1 className="font-migra text-black font-bold text-8xl mr-8 mb-8 z-30">
          { loadProgress }%
        </h1>
      </div>
      <div
        className="loadingScreen absolute w-full h-full flex justify-end items-end"
      >
        <div className="blob-cont absolute w-full h-full bg-soft-green">
          <div className="blob absolute rounded-full bg-soft-yellow" />
        </div>
      </div>
      <svg>
        <filter id='noiseFilter'>
          <feTurbulence 
            type='fractalNoise' 
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
