import React from "react";
import styles from "./Loader_ball.module.css";

const Loader_ball = () => (
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

export default Loader_ball;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_ball = () => (
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

        export default Loader_ball;
        
        
         */
}
