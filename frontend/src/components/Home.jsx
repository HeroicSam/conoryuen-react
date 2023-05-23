import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

function Home() {

  const tickerWrapperRef = useRef();
  const tickerItemRef = useRef();
  const tickerItemRefTwo = useRef();

  let t1 = gsap.timeline();
  let t2 = gsap.timeline();

  useLayoutEffect(() => {

    let tickerWrapperWidth = tickerWrapperRef.current.offsetWidth;

    let spanWidth = tickerItemRef.current.offsetWidth
    let speed = 100;


    t1.fromTo(tickerItemRef.current, {
      xPercent: 100,
    }, {
      xPercent: 0,
      duration: 2,
      ease: "none"
    }).to(tickerItemRef.current, {
      xPercent: - (spanWidth / tickerWrapperWidth) * 100,
      ease: "none",
      duration: 2,
    }).repeat(-1)

    t2.fromTo(tickerItemRefTwo.current, {
      xPercent: 100,
    }, {
      xPercent: 0,
      duration: 2,
      ease: "none"
    }).to(tickerItemRefTwo.current, {
      xPercent: - (spanWidth / tickerWrapperWidth) * 100,
      ease: "none",
      duration: 2,
    }).repeat(-1).delay(2)

  }, [])

  function handleMouseEnter() {
    gsap.to(t1, {
      timeScale: 0,
      overWrite: true
    })

    gsap.to(t2, {
      timeScale: 0,
      overWrite: true
    })
  }

  function handleMouseOut() {
    gsap.to(t1, {
      timeScale: 1,
      overWrite: true
    })

    gsap.to(t2, {
      timeScale: 1,
      overWrite: true
    })
  }

  return(
    
    <div className="absolute w-full h-full font-migra font-bold italic whitespace-nowrap inline-block overflow-hidden">
      <ul onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut} ref={tickerWrapperRef} className="ticker-wrapper absolute text-[15rem] w-full whitespace-nowrap inline-block ">
          <li ref={tickerItemRef} className="ticker-item absolute">Welcome to my Folio</li>
          <li ref={tickerItemRefTwo} className="ticker-item absolute">Welcome to my Folio</li>
      </ul>
    </div>
  )
}

export default Home;

// just as the end of Folio enters the screen, the animation needs to replay, reusing the text and makes the loop seamless
// need to tie animation to element dimensions