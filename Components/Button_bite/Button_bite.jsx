import React from "react";
import styles from "./Button_bite.module.css";

const Button_bite = () => (
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

export default Button_bite;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_bite = () => (
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

        export default Button_bite;
        
        
         */
}
