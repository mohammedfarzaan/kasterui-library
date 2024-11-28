import React from "react";
import styles from "./Loader_ocean.module.css";

const Loader_ocean = () => (
  <div>
    <div className={styles["loader"]}>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="6"
              result="blur"
            ></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            ></feColorMatrix>
            <feBlend in="SourceGraphic" in2="goo"></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
  </div>
);

export default Loader_ocean;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_ocean = () => (
         <div>
          <div className="loader"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><defs><filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur"></feGaussianBlur><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix><feBlend in="SourceGraphic" in2="goo"></feBlend></filter></defs></svg></div>
        </div>
        );

        export default Loader_ocean;
        
        
         */
}
