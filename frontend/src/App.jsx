import { useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import useViewportDimensions from "./utility/Hooks";

import LoadingScreen from "./components/LoadingScreen";
import NavBar from "./components/NavBar";

function App() {

  const [loading, setLoading] = useState(true);

  const sizes = useViewportDimensions();

  const tickerWrapperRef = useRef();
  const tickerItemOneRef = useRef();
  const tickerItemTwoRef = useRef();

  let t1 = gsap.timeline();
  let t2 = gsap.timeline();

  function handleMouseEnter() {

    gsap.to(t1, {
      timeScale: 0,
      overWrite: true
    })


    gsap.to(t2, {
      timeScale: 0,
      overWrite: true
    })

    console.log("mouse here")

    // gsap.to(t1, {
    //   timeScale: 1,
    //   overWrite: true
    // })

    // gsap.to(t2, {
    //   timeScale: 1,
    //   overWrite: true
    // })
  }

  function handleMouseOut() {
    // gsap.to(t1, {
    //   timeScale: 0,
    //   overWrite: true
    // })

    // gsap.to(t2, {
    //   timeScale: 0,
    //   overWrite: true
    // })

    gsap.to(t1, {
      timeScale: 1,
      overWrite: true
    })

    gsap.to(t2, {
      timeScale: 1,
      overWrite: true
    })

  }

  function stopAnimations() {
    // gsap.to(t1, {
    //   timeScale: 0,
    //   overWrite: true
    // })
    // gsap.to(t2, {
    //   timeScale: 0,
    //   overWrite: true
    // })
  }

  useLayoutEffect(() => {
    let windowScreen = window.screen.availWidth;

    let wrapperWidth = tickerWrapperRef.current.getBoundingClientRect().width + windowScreen;
    let itemWidth;
    let speed = 10;

    loading && setTimeout(() => {

      itemWidth = tickerItemOneRef.current.offsetWidth;

      gsap.set(".ticker-wrapper", {
        y: window.innerHeight / 4,
      })

      t1.fromTo(tickerItemOneRef.current, {
        x: wrapperWidth,
      }, {
        x: -itemWidth,
        duration: speed,
        ease: "none",
        delay: ((itemWidth - wrapperWidth) * speed) / (wrapperWidth + itemWidth)
      }).repeat(-1)

      t2.fromTo(tickerItemTwoRef.current, {
        x: wrapperWidth,
      }, {
        x: -itemWidth,
        duration: speed,
        ease: "none",
        delay: ((itemWidth - wrapperWidth) * speed ) / (wrapperWidth + itemWidth)
      }).repeat(-1).delay((itemWidth * speed ) / (wrapperWidth + itemWidth))

    }, 500)

  }, [])

  function textTransition() {
    gsap.to(".ticker-wrapper", {
      y: 0,
      ease: "Power4.easeOut",
      delay: 0.1,
      duration: 1.8
    })
  }



  return (
    <div className="flex justify-center items-center font-mori h-full w-full">
      <NavBar />
      <LoadingScreen
        loading={loading}
        setLoading={setLoading}
        sizes={sizes}
        textTransition={textTransition}
        stopAnimations={stopAnimations}
      />
      <div className="absolute w-full h-full font-migra font-bold italic whitespace-nowrap inline-block overflow-x-hidden">
        <ul className="ticker text-[20vh] md:text-[18vh] w-full h-80 whitespace-nowrap inline-block mt-28 overflow-x-hidden leading-loose">
          <div onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut} ref={tickerWrapperRef} className="ticker-wrapper w-full"> 
            {/* <li ref={tickerItemOneRef} className="ticker-item absolute leading-none">Welcome to my Folio  Welcome to my Folio  Welcome to my Folio  Welcome to my Folio  Welcome to my Folio</li>
            <li ref={tickerItemTwoRef} className="ticker-item absolute leading-none">Welcome to my Folio  Welcome to my Folio  Welcome to my Folio  Welcome to my Folio  Welcome to my Folio</li> */}
            <li ref={tickerItemOneRef} className="ticker-item absolute leading-none">Welcome to my Folio  Welcome to my Folio</li>
            <li ref={tickerItemTwoRef} className="ticker-item absolute leading-none">Welcome to my Folio  Welcome to my Folio</li>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default App
