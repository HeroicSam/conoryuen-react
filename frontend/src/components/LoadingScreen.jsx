import { useState } from "react";

function LoadingScreen() {

  const [loadProgress, setLoadProgress] = useState(0);

  setTimeout(() => {
    if (loadProgress < 100) {
      setLoadProgress(loadProgress + 1);
    }
  }, 50)


  return (
    <>
      <div
        className="loadingScreen absolute w-full h-full flex justify-end items-end text-8xl font-migra"
      >
        <h1 className="text-black font-bold mr-8 mb-8">
          { loadProgress }%
        </h1>
        <div className="absolute w-full h-full blob-cont">
          <div className="absolute rounded-full w-16 h-16 bg-black" />
          <div className="absolute rounded-full bg-yellow"/>
        </div>
      </div>
      <svg>
        {/* <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FBED96" />
          <stop offset="100%" stop-color="#ABECD6" />
        </linearGradient> */}
        <filter id='noiseFilter'>
          <feTurbulence 
            type='fractalNoise' 
            baseFrequency='.6' 
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
