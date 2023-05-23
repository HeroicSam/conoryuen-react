import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const TickerComponent = () => {
  const tickerWrapperRef = useRef(null);
  const tickerItemsRef = useRef(null);
  const tickerWidthRef = useRef(null);
  const spanWidthRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    const tickerWrapper = tickerWrapperRef.current;
    const tickerItems = tickerItemsRef.current;
    const tickerWidth = tickerWidthRef.current.offsetWidth;
    const spanWidth = spanWidthRef.current.offsetWidth;

    tickerItems.parentNode.classList.add('ticker-items');
    tickerItems.parentNode.style.width = `${tickerWidth}px`;
    tickerItems.cloneNode(true).forEach((child) => {
      tickerItems.appendChild(child);
    });

    tickerWrapper.classList.add('ticker-wrapper');
    gsap.fromTo(
      tickerWrapper,
      {
        xPercent: tickerWidth / spanWidth / 2 * 100
      },
      {
        xPercent: 0,
        duration: tickerWidth / 100,
        ease: "none"
      }
    );

    tlRef.current = gsap.to(tickerWrapper, {
      xPercent: -50,
      ease: "none",
      duration: spanWidth / 100,
      repeat: -1
    });
  }, []);

  const handleMouseEnter = () => {
    gsap.to(tlRef.current, { timeScale: 0, overwrite: true });
  };

  const handleMouseLeave = () => {
    gsap.to(tlRef.current, { timeScale: 1, overwrite: true });
  };

  return (
    <ul onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <span ref={tickerItemsRef}>
        {/* List items here */}
      </span>
      <span ref={tickerWrapperRef}></span>
    </ul>
  );
};

export default TickerComponent;