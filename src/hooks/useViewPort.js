import { useState, useEffect } from 'react';

const MOBILE_THRESHOLD = 1000;

export const useViewPort = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(undefined);

  useEffect(() => {
    if (isMobile === undefined) {
      setIsMobile(window.innerWidth <= MOBILE_THRESHOLD);
    }
    const handleWindowResize = () => {
      setWidth(window.innerWidth)
      setIsMobile(window.innerWidth <= MOBILE_THRESHOLD);
    }
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return { width, isMobile };
};