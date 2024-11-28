import React from "react";
import styles from "./Loader_gone.module.css";

const Loader_gone = () => (
  <div>
    <div className={styles["jelly"]}></div>
    <svg width="0" height="0" className="jelly-maker">
      <defs>
        <filter id="uib-jelly-ooze">
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="6.25"
            result="blur"
          ></feGaussianBlur>
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="ooze"
          ></feColorMatrix>
          <feBlend in="SourceGraphic" in2="ooze"></feBlend>
        </filter>
      </defs>
    </svg>
  </div>
);

export default Loader_gone;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_gone = () => (
         <div>
          <div className="jelly"></div>
<svg width="0" height="0" className="jelly-maker">
  <defs>
    <filter id="uib-jelly-ooze">
      <feGaussianBlur in="SourceGraphic" stdDeviation="6.25" result="blur"></feGaussianBlur>
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="ooze"></feColorMatrix>
      <feBlend in="SourceGraphic" in2="ooze"></feBlend>
    </filter>
  </defs>
</svg>
        </div>
        );

        export default Loader_gone;
        
        
         */
}
