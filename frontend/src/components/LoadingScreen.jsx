import { useState, useEffect } from "react";
import gsap from 'gsap';

function LoadingScreen({ textTransition, sizes, loading, setLoading, stopAnimations }) {

  const [loadProgress, setLoadProgress] = useState(0);
  // const [loading, setLoading] = useState(true);

  const { width, shrinkFactor } = sizes;

  const blobDimension = width * 0.7;

  function transitionLoadingScreen(){

    gsap.to(".loadingScreen", {
      width: width * shrinkFactor,
      height: width * shrinkFactor,
      borderRadius: "50%",
      duration: 2,
      onComplete: () => {
        stopAnimations();
      }
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

  useEffect(() => {

    if (!loading) {
      transitionLoadingScreen();
    };

  }, [ width ])

  useEffect(() => {

    setTimeout(() => {
      if (loadProgress < 100) {
        setLoadProgress(loadProgress + 1);
      } else {
        setTimeout(()=> {
          setLoading(false);
          transitionLoadingScreen();
          textTransition();
        }, 1000);
      };
    }, 50);

  }, [ loadProgress ]);

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
    <div className={` top-0 fixed w-full h-full flex justify-center items-center overflow-hidden z-30 ${loading ? "" : "absolute max-h-[1080px]"}`}>
      <div className={`overlay absolute w-full h-full flex justify-center items-center overflow-hidden z-30 ${loading ? "" : " max-h-[1080px]"}`}>
        <h1 className="font-migra text-black font-bold text-8xl z-30">
          { loading ? `${loadProgress}%` : null }
        </h1>
      </div>
      <div className={`loadingScreen fixed w-full h-full bg-soft-green flex justify-center items-center overflow-hidden z-10 ${loading ? "" : "absolute max-h-[1080px]"}`}>
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
    </div>
  )
};

export default LoadingScreen;
