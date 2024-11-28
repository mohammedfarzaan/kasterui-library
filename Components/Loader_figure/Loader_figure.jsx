import React from "react";
import styles from "./Loader_figure.module.css";

const Loader_figure = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["dot"] + styles["dot-1"]}></div>
      <div className={styles["dot"] + styles["dot-2"]}></div>
      <div className={styles["dot"] + styles["dot-3"]}></div>
    </div>

    <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="goo">
          <feGaussianBlur
            result="blur"
            stdDeviation="10"
            in="SourceGraphic"
          ></feGaussianBlur>
          <feColorMatrix
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"
            mode="matrix"
            in="blur"
          ></feColorMatrix>
        </filter>
      </defs>
    </svg>
  </div>
);

export default Loader_figure;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_figure = () => (
         <div>
          <div className="container">
  <div className="dot dot-1"></div>
  <div className="dot dot-2"></div>
  <div className="dot dot-3"></div>
</div>

<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="goo">
      <feGaussianBlur
        result="blur"
        stdDeviation="10"
        in="SourceGraphic"
      ></feGaussianBlur>
      <feColorMatrix
        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"
        mode="matrix"
        in="blur"
      ></feColorMatrix>
    </filter>
  </defs>
</svg>
        </div>
        );

        export default Loader_figure;
        
        
         */
}
