import { useEffect, useState } from 'react';

// TODO CHEK
const useDeviceType = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleDeviceType = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isMobileDevice = /Mobi/i.test(navigator.userAgent) || isTouchDevice;

      setIsMobile(isMobileDevice);
    };

    handleDeviceType();

    window.addEventListener('resize', handleDeviceType);

    return () => {
      window.removeEventListener('resize', handleDeviceType);
    };
  }, []);

  return isMobile;
};

export default useDeviceType;
