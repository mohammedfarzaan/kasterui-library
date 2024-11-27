import React from "react";
import styles from "./Loader_volume.module.css";

const Loader_volume = () => (
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

export default Loader_volume;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_volume = () => (
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

        export default Loader_volume;
        
        
         */
}
