import { useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import useViewportDimensions from "./utility/Hooks";
import horizontalLoop from "./utility/HelperFunctions";

import LoadingScreen from "./components/LoadingScreen";
import NavBar from "./components/NavBar";

let t1 = gsap.timeline();
let t2 = gsap.timeline();

function App() {

  const [loading, setLoading] = useState(true);
  const [enableHoverAnimations, setEnableHoverAnimations] = useState(false);

  const sizes = useViewportDimensions();

  const tickerLoops = useRef([]);
  const tickerLoopsTwo = useRef([]);

  let tickerItems, tickerItemsTwo;

  useLayoutEffect(() => {

    tickerItems = gsap.utils.toArray(".tickerItem")
    tickerItemsTwo = gsap.utils.toArray(".tickerItemTwo")

    tickerLoops.current = horizontalLoop(tickerItems, {paused: false, speed: 3, repeat: -1});
    tickerLoopsTwo.current = horizontalLoop(tickerItemsTwo, {paused: false, speed: 3, repeat: -1, reversed: 1});

    loading && gsap.set(".ticker-wrapper", {
      y: window.innerHeight / 4,
    })

  }, []);

  function textTransition() {
    gsap.to(".ticker-wrapper", {
      y: 0,
      ease: "Power4.easeOut",
      delay: 0.1,
      duration: 1.8,
      stagger: 0.2,
    });
  };

  function handleMouseEnter() {
    if (enableHoverAnimations) {
      gsap.to(t1, {
        timeScale: 1,
      });
      gsap.to(t2, {
        timeScale: 1,
      });
    };
  };

  function handleMouseOut() {
    if (enableHoverAnimations) {
      gsap.to(t1, {
        timeScale: 0,
      });
  
      gsap.to(t2, {
        timeScale: 0,
      });
    };
  };
  
  function stopAnimations() {
    gsap.to(t1, {
      timeScale: 0,
      overWrite: true,
    });
    gsap.to(t2, {
      timeScale: 0,
      overWrite: true,
    });
    setEnableHoverAnimations(true);
  };
  
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
      <div className="absolute flex flex-col w-full h-full font-migra font-bold italic whitespace-nowrap inline-block overflow-x-hidden">
        <div className="ticker text-[20vh] md:text-[18vh] w-full h-64 whitespace-nowrap inline-block mt-40 overflow-x-hidden leading-none">
          <div className="ticker-wrapper w-full relative flex">
            <div className="tickerItem">Welcome to my Folio</div>
            <div className="tickerItem">Welcome to my Folio</div>
            <div className="tickerItem">Welcome to my Folio</div>
          </div>
        </div>
        <div className="ticker text-[20vh] md:text-[18vh] w-full h-64 whitespace-nowrap inline-block overflow-x-hidden leading-none z-50">
        <div className="ticker-wrapper w-full relative flex">
          <div className="tickerItemTwo">Welcome to my Folio</div>
          <div className="tickerItemTwo">Welcome to my Folio</div>
          <div className="tickerItemTwo">Welcome to my Folio</div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default App
