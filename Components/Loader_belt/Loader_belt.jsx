import React from "react";
import styles from "./Loader_belt.module.css";

const Loader_belt = () => (
  <div>
    <div className={styles["lamp"]}>
      <div className={styles["glass"]}>
        <div className={styles["lava"]}>
          <div className={styles["blob"]}></div>
          <div className={styles["blob"]}></div>
          <div className={styles["blob"]}></div>
          <div className={styles["blob"] + styles["top"]}></div>
          <div className={styles["blob"] + styles["bottom"]}></div>
        </div>
      </div>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="goo">
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="10"
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
);

export default Loader_belt;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_belt = () => (
         <div>
          <div className="lamp">
  <div className="glass">
    <div className="lava">
      <div className="blob"></div>
      <div className="blob"></div>
      <div className="blob"></div>
      <div className="blob top"></div>
      <div className="blob bottom"></div>
    </div>
  </div>
</div>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
      <feBlend in="SourceGraphic" in2="goo"></feBlend>
    </filter>
  </defs>
</svg>
        </div>
        );

        export default Loader_belt;
        
        
         */
}
