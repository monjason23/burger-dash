import { useEffect, useState } from 'react';

export default () => {
   //cross-browser compatible
   const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
   const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
   const [windowDimensions, setWindowDimensions] = useState({ height, width });
   const deriveWindowDimensions = () => {
      setWindowDimensions({ height, width });
   };

   useEffect(() => {
      deriveWindowDimensions();
      window.addEventListener('resize', deriveWindowDimensions);

      return () => {
         window.removeEventListener('resize', deriveWindowDimensions);
      };
   }, [height, width]);

   return [windowDimensions];
};