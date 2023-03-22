import { useState, useEffect } from 'react';

function getWidthBreakpointReached(breakpointPrefix: any) {
  const width = window.innerWidth;
  // these values are from tailwind responsive design
  const breakpointPrefixWidths = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536
  };
  return width < (breakpointPrefixWidths as any)[breakpointPrefix];
}

export default function useWidthBreakpointReached(breakpointPrefix: any) {
  const [widthBreakpointReached, setWidthBreakpointReached] = useState(getWidthBreakpointReached(breakpointPrefix));

  useEffect(() => {
    function handleResize() {
      setWidthBreakpointReached(getWidthBreakpointReached(breakpointPrefix));
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return widthBreakpointReached;
}
