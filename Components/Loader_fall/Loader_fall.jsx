import React from "react";
import styles from "./Loader_fall.module.css";

const Loader_fall = () => (
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

export default Loader_fall;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_fall = () => (
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

        export default Loader_fall;
        
        
         */
}
