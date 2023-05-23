import gsap from "gsap";
import { useEffect, useRef } from "react";

function Home() {

  const tickerWrapperRef = useRef(null);
  let tickerWidth, spanWidth;
  const tickerItemsRef = useRef(null);

  const t1 = gsap.timeline({ repeat: -1 })
  t1.to("li", {
    duration: 1,
    x: "-=50",
    ease: "Power0.easeNone",
  })
  t1.play()

  useEffect(() => {

    const tickerWrapper = tickerWrapperRef.current;
    const tickerItems = tickerItemsRef.current;
    const elem = document.querySelector(".ticker-wrapper")
    const tickerWidth = elem.getBoundingClientRect().width;

    
    
  }, [])

  return(
    
    <div className="absolute w-full h-full font-migra font-bold italic whitespace-nowrap inline-block">
      <ul className="absolute text-[15rem]">
        <span className="ticker-wrapper">
          <span className="ticker-items">
            <li className="">Welcome to my Folio</li>
          </span>
        </span>
      </ul>
    </div>
  )
}

export default Home;
