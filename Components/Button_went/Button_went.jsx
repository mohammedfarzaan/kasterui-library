import React from "react";
import styles from "./Button_went.module.css";

const Button_went = () => (
  <div>
    <button>
      <svg>
        <filter id="pedroduarteisalegend">
          <feTurbulence
            stitchTiles="stitch"
            numOctaves="4"
            baseFrequency="0.5"
            type="fractalNoise"
          ></feTurbulence>
        </filter>
        <rect
          filter="url(#pedroduarteisalegend)"
          height="100%"
          width="100%"
        ></rect>
      </svg>
      Button
    </button>
  </div>
);

export default Button_went;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_went = () => (
         <div>
          <button>
      <svg>
      <filter id="pedroduarteisalegend">
        <feTurbulence stitchTiles="stitch" numOctaves="4" baseFrequency="0.5" type="fractalNoise"></feTurbulence>
      </filter>
      <rect filter="url(#pedroduarteisalegend)" height="100%" width="100%"></rect>
    </svg>
      Button
</button>
        </div>
        );

        export default Button_went;
        
        
         */
}
