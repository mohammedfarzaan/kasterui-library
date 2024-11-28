import React from "react";
import styles from "./Loader_heavy.module.css";

const Loader_heavy = () => (
  <div>
    <svg style="position: absolute; width: 0; height: 0;">
      <filter id="goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation="12"></feGaussianBlur>
        <feColorMatrix
          values="0 0 0 0 0 
            0 0 0 0 0 
            0 0 0 0 0 
            0 0 0 48 -7"
        ></feColorMatrix>
      </filter>
    </svg>

    <div className={styles["loader"]}></div>
  </div>
);

export default Loader_heavy;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_heavy = () => (
         <div>
          <svg style="position: absolute; width: 0; height: 0;">
  <filter id="goo">
  <feGaussianBlur in="SourceGraphic" stdDeviation="12"></feGaussianBlur>
  <feColorMatrix values="0 0 0 0 0 
            0 0 0 0 0 
            0 0 0 0 0 
            0 0 0 48 -7"></feColorMatrix>
</filter>
</svg>

<div className="loader"></div>
        </div>
        );

        export default Loader_heavy;
        
        
         */
}
