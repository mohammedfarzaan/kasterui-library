import React from "react";
import styles from "./Loader_grow.module.css";

const Loader_grow = () => (
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

export default Loader_grow;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_grow = () => (
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

        export default Loader_grow;
        
        
         */
}
