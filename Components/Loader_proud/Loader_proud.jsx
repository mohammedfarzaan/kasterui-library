import React from "react";
import styles from "./Loader_proud.module.css";

const Loader_proud = () => (
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

export default Loader_proud;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_proud = () => (
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

        export default Loader_proud;
        
        
         */
}
