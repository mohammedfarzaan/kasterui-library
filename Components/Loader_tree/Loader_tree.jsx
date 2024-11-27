import React from "react";
import styles from "./Loader_tree.module.css";

const Loader_tree = () => (
  <div>
    <svg height="0" width="0">
      <defs>
        <filter
          color-interpolation-filters="sRGB"
          height="200%"
          y="-50%"
          width="200%"
          x="-50%"
          id="goo"
        >
          <feGaussianBlur
            result="blur"
            stdDeviation="8"
            in="SourceGraphic"
          ></feGaussianBlur>
          <feColorMatrix
            result="cm"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"
            mode="matrix"
            in="blur"
          ></feColorMatrix>
        </filter>
      </defs>
    </svg>

    <svg height="180" width="320" viewBox="0 0 320 180">
      <g filter="url(#goo)">
        <circle
          cy="90"
          cx="160"
          r="24"
          fill="#275EFE"
          className="circle"
        ></circle>
        <circle
          cy="90"
          cx="160"
          r="24"
          fill="#275EFE"
          className="circle right"
        ></circle>
      </g>
    </svg>
  </div>
);

export default Loader_tree;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_tree = () => (
         <div>
          <svg height="0" width="0">
    <defs>
        <filter color-interpolation-filters="sRGB" height="200%" y="-50%" width="200%" x="-50%" id="goo">
            <feGaussianBlur result="blur" stdDeviation="8" in="SourceGraphic"></feGaussianBlur>
            <feColorMatrix result="cm" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" mode="matrix" in="blur"></feColorMatrix>
        </filter>
    </defs>
</svg>

<svg height="180" width="320" viewBox="0 0 320 180">
    <g filter="url(#goo)">
        <circle cy="90" cx="160" r="24" fill="#275EFE" className="circle"></circle>
        <circle cy="90" cx="160" r="24" fill="#275EFE" className="circle right"></circle>
    </g>
</svg>
        </div>
        );

        export default Loader_tree;
        
        
         */
}
