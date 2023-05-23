import { useState, useEffect } from "react";
import gsap from 'gsap';

function LoadingScreen() {

  const [loadProgress, setLoadProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  const blobDimension = window.innerWidth * 0.7;
  let width = window.innerWidth;
  let height = window.innerHeight;
  let shrinkFactor = 0.35;

  window.addEventListener('resize', () => {

    width = window.innerWidth;
    height = window.innerHeight;

    calculateShrinkFactor();
    
    if (!loading) {
      endLoadingScreen();
    };

  });

  function calculateShrinkFactor() {

    let viewPortWidth = window.innerWidth;

    if (viewPortWidth >= 1000) {
      shrinkFactor = 0.35;
    } else if (800 <= viewPortWidth < 999) {
      shrinkFactor = 0.55;
    } else if (viewPortWidth < 800) {
      shrinkFactor = 0.75;
    };

  };

  calculateShrinkFactor();

  function endLoadingScreen(){

    gsap.to(".loadingScreen", {
      width: width * shrinkFactor,
      height: width * shrinkFactor,
      borderRadius: "50%",
      duration: 2,
    });

    gsap.to(".overlay", {
      width: width * shrinkFactor,
      height: width * shrinkFactor,
      borderRadius: "50%",
      backdropFilter: "blur(50px)",
      duration: 2,
    });

    gsap.to(".blob", {
      width: width * shrinkFactor,
      height: width * shrinkFactor,
    });

  };

  const handleMouseMove = (e) => {

    const percentX = (e.clientX / window.innerWidth) * 100;
    const percentY = (e.clientY / window.innerHeight) * 100;

    gsap.to(".blob", {
      left: `${percentX}%`,
      top: `${percentY}%`,
      duration: 2,
    });

  };

  setTimeout(() => {

    if (loadProgress < 100) {
      setLoadProgress(loadProgress + 1);
    } else {
      setTimeout(()=> {
        setLoading(false);
        endLoadingScreen();
      }, 1000);
    };

  }, 50);

  useEffect(() => {

    gsap.set(".blob", {
      width: `${blobDimension}px`,
      height: `${blobDimension}px`,
    });

    window.addEventListener('mousemove', handleMouseMove);

    () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };

  },[]);


  return (
    <>
      <div className="overlay absolute w-full h-full flex justify-end items-end overflow-hidden z-20">
        <h1 className="loadProgress font-migra text-black font-bold text-8xl mr-8 mb-8 z-30">
          { loading ? `${loadProgress} %` : null }
        </h1>
      </div>
      <div className="loadingScreen absolute w-full h-full bg-soft-green overflow-hidden z-10">
        <div className="blob absolute rounded-full bg-soft-yellow translate-x-[-50%] translate-y-[-50%]" />
      </div>
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
};

export default LoadingScreen;