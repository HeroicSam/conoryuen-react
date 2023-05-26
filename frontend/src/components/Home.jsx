import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

function Home() {

  const tickerWrapperRef = useRef();
  const tickerItemOneRef = useRef();
  const tickerItemTwoRef = useRef();
  let t1 = gsap.timeline();
  let t2 = gsap.timeline()

  useLayoutEffect(() => {

    let wrapperWidth = tickerWrapperRef.current.getBoundingClientRect().width;

    let itemWidth;

    let speed = 3;

    setTimeout(() => {

      itemWidth = tickerItemOneRef.current.offsetWidth;

      console.log(itemWidth)

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
        delay: ((itemWidth - wrapperWidth) * speed )/ (wrapperWidth + itemWidth)
      }).repeat(-1).delay((itemWidth * speed )/ (wrapperWidth + itemWidth))


    }, 500)



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
      <ul className="ticker absolute text-[15rem] w-full whitespace-nowrap inline-block ">
        <div onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut} ref={tickerWrapperRef} className="ticker-wrapper w-full"> 
          <li ref={tickerItemOneRef} className="ticker-item absolute leading-none">Welcome to my Folio</li>
          <li ref={tickerItemTwoRef} className="ticker-item absolute leading-none">Welcome to my Folio</li>
        </div>
      </ul>
    </div>
  )
}

export default Home;

// just as the end of Folio enters the screen, the animation needs to replay, reusing the text and makes the loop seamless
// need to tie animation to element dimensions

// onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}