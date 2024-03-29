import { useState, useEffect } from 'react';

function calculateShrinkFactor(viewPortWidth) {

  let shrinkFactor;

  if (viewPortWidth >= 1900) {
    shrinkFactor = 0.25;
  } else if (viewPortWidth >= 1536) {
    shrinkFactor = 0.30;
  } else if (viewPortWidth >= 1280) {
    shrinkFactor = 0.35;
  } else if (viewPortWidth >= 1024) {
    shrinkFactor = 0.30;
  } else if (viewPortWidth >= 768) {
    shrinkFactor = 0.35;
  } else if (viewPortWidth >= 640) {
    shrinkFactor = 0.55;
  } else {
    shrinkFactor = 0.75;
  };

  return shrinkFactor;

};

export default function useViewportDimensions() {

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    shrinkFactor: calculateShrinkFactor(window.innerWidth),
  });

  useEffect(() => {

    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      const newShrinkFactor = calculateShrinkFactor(newWidth);

      setDimensions({
        width: newWidth,
        height: newHeight,
        shrinkFactor: newShrinkFactor,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize)
    }

  }, []);

  return dimensions;

};