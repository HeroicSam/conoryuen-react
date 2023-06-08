import { useState, useLayoutEffect, useRef, useEffect } from "react";
import gsap from "gsap";

import useViewportDimensions from "./utility/Hooks";

import LoadingScreen from "./components/LoadingScreen";
import NavBar from "./components/NavBar";

const marqueeTexts = ["Welcome to my Folio"];

function App() {

  const marqueeElements = useRef([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const marqueeTween = useRef();

  const marqueeInitialSet = () => {
    gsap.set(marqueeElements.current, {
      xPercent: -100,
      x: function(index) {
        return (screenWidth / 2) * index;
      }
    })
  }

  const resizeHandler = () => {
    gsap.set(marqueeElements.current, { clearProps: "all" });
    setScreenWidth(window.innerWidth);
  }

  const marqueeElementsRefHandler = (e, i) => {
    marqueeElements.current[i] = e;
  }

  useEffect(() => {
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
      marqueeTween.current.pause().kill();
    }
  }, [])

  useEffect(() => {
    marqueeInitialSet();
    marqueeTween.current && marqueeTween.current.pause().kill();
    marqueeTween.current = gsap.to(marqueeElements.current, {
      x: `+=${screenWidth * 1.5}`,
      ease: "none",
      repeat: -1,
      duration: 10,
      rotation: 0.1,
      modifiers: {
        x: (x) => {
          return (parseFloat(x) % (screenWidth * 3)) + "px";
        }
      }
    })
  }, [screenWidth])

  console.log(parseFloat(1920) % (screenWidth * 1.5))

  const renderMarqueeElements = () => {
    if (marqueeTexts.length === 1) {
      marqueeTexts[1] = marqueeTexts[0];
    }
    // if (marqueeTexts.length === 2) {
    //   marqueeTexts[2] = marqueeTexts[0];
    // }
    return marqueeTexts.map((e, i) => (
      <p
        className=" text-center px-4 text-[15vh] font-semibold absolute pin-l"
        key={`marquee-${i}`}
        ref={(el) => marqueeElementsRefHandler(el, i)}
      >
        {e}
      </p>
    ));
  };

  return (
    <div className="flex justify-center items-center font-mori h-full w-full">
      <NavBar />
      {/* <LoadingScreen
        loading={loading}
        setLoading={setLoading}
        sizes={sizes}
        textTransition={textTransition}
      /> */}
      <div className="absolute w-full h-full font-migra font-bold italic whitespace-nowrap inline-block overflow-x-hidden">
        {renderMarqueeElements()}
      </div>
    </div>
  )
}

export default App

// before adding the rest of the home text tickers, I need to iron out the responsiveness on the first one to save time.
// handling bigger viewports, add more texts?