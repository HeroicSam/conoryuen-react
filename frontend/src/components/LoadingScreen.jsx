import { useState, useEffect, useRef } from "react";
import gsap from 'gsap';

function LoadingScreen() {

  const [loadProgress, setLoadProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const blobContainerRef = useRef(null);
  let width = window.innerWidth;
  let height = window.innerHeight;
  let blobContainerWidth;
  let blobContainerHeight;

  window.addEventListener('resize', () => {
    width = window.innerWidth;
    height = window.innerHeight;
    if (!loading) {
      endLoadingScreen();
    }
  })

  function endLoadingScreen(){
    t1.pause();
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
    gsap.to(".blob-cont", {
      borderRadius: "50%",
      duration: 2,
    })
    // gsap.set(".blob", {
    //   width: width * 1.25,
    //   height: width * 1.25,
    //   top: 0 - ( 1.3 * height ),
    //   left: 0 - (.7 * width)
    // })
  }

  const t1 = gsap.timeline()

  function animateBlob(){
    //   t1.to(".blob", {
    //     left: width * .2,
    //     scale: 1.3,
    //     duration: 4,
    //   }).to(".blob", {
    //     top: height * .2,
    //     scale: 0.9,
    //     duration: 3.5,
    //   }).to (".blob", {
    //     left: 0 - (.7 * width),
    //     scale: 1.1,
    //     duration: 4,
    //   }).to(".blob", {
    //     top: 0 - ( 1.3 * height ),
    //     scale: 1.0,
    //     duration: 3,
    // }).repeat(-1)
    t1.to(".blob", {
      rotation: 360,
      duration: 5,
      repeat: -1,
    })
  }


  setTimeout(() => {
    if (loadProgress < 100) {
      setLoadProgress(loadProgress + 1);
    } else {

      endLoadingScreen();

      setTimeout(()=> {
        setLoading(false);
        endLoadingScreen();
      }, 1000)
    }
  }, 50)

  useEffect(() => {

    // gsap.set(".blob", {
    //   width: width * 1.25,
    //   height: width * 1.25,
    //   top: 0 - ( 1.3 * height ),
    //   left: 0 - (.7 * width)
    // })
    console.log(blobContainerRef.current.clientHeight);

    gsap.set(".blob", {
      width: 500,
      height: 500,
      top: 0 - ( 1.3 * height ),
      left: 0 - (.7 * width)
    })
    animateBlob();

  },[])


  return (
    <>
      <div className="overlay flex justify-end items-end overflow-hidden">
        <h1 className="loadProgress font-migra text-black font-bold text-8xl mr-8 mb-8 z-30">
          { loading ? `${loadProgress} %` : null }
        </h1>
      </div>
      <div
        className="loadingScreen absolute w-full h-full flex justify-end items-end overflow-hidden"
      >
        <div ref={blobContainerRef} className="blob-cont absolute w-full h-full bg-soft-green">
          <div className="blob absolute rounded-full bg-soft-yellow" />
        </div>
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
}

export default LoadingScreen;

// need to add a svg noise filter and animate the gradient clockwise

// bg-gradient-to-br from-soft-yellow to-soft-green
