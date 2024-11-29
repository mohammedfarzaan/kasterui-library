import React from "react";
import styles from "./Button_double.module.css";

const Button_double = () => (
  <div>
    <svg width="0">
      <filter id="l-distort">
        <feTurbulence
          numOctaves="20"
          baseFrequency=".03"
          type="fractalNoise"
        ></feTurbulence>
        <feDisplacementMap scale="60" in="SourceGraphic"></feDisplacementMap>
      </filter>
      <filter id="m-distort">
        <feTurbulence
          numOctaves="20"
          baseFrequency=".02"
          type="fractalNoise"
        ></feTurbulence>
        <feDisplacementMap scale="30" in="SourceGraphic"></feDisplacementMap>
      </filter>
    </svg>

    <button className={styles["button"]}>
      <div className={styles["btn-bg"]}>
        <div className={styles["bg1"]}></div>
        <div className={styles["bg2"]}></div>
        <div className={styles["bd1"]}></div>
        <div className={styles["bd1h"]}></div>
        <div
          className={styles["bg-cloud"]}
          style="inset: unset; left: -10px; bottom: -20px; height: 70px; scale: 0.5;"
        ></div>
        <div className={styles["bd6"]}></div>
        <div className={styles["bd-sat"]}></div>
        <div
          className={styles["bg-cloud"]}
          style="top: 30px; left: 270px; height: 50px;"
        ></div>
        <div
          className={styles["bg-cloud"]}
          style="top: 7px; left: 10px; height: 30px;"
        ></div>
        <div
          className={styles["bg-cloud"]}
          style="top: 0px; left: 70px; height: 30px; aspect-ratio: 5;"
        ></div>
        <div
          className={styles["bg-cloud"]}
          style="top: 0px; left: -39px; rotate: 215deg; height: 30px; aspect-ratio: 3;"
        ></div>
        <div className={styles["bd3"]}></div>
        <div className={styles["bd3a"]}></div>
        <div className={styles["bd4"]}></div>
        <div className={styles["bd4h"]}></div>
        <div className={styles["bd4d"]}></div>
        <div className={styles["bd5"]}></div>
      </div>
      <span className={styles["btn-txt"]}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M11 15H6L13 1V9H18L11 23V15Z"></path>
        </svg>
        Join now
      </span>
    </button>
  </div>
);

export default Button_double;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_double = () => (
         <div>
          <svg width="0">
  <filter id="l-distort">
    <feTurbulence
      numOctaves="20"
      baseFrequency=".03"
      type="fractalNoise"
    ></feTurbulence>
    <feDisplacementMap scale="60" in="SourceGraphic"></feDisplacementMap>
  </filter>
  <filter id="m-distort">
    <feTurbulence
      numOctaves="20"
      baseFrequency=".02"
      type="fractalNoise"
    ></feTurbulence>
    <feDisplacementMap scale="30" in="SourceGraphic"></feDisplacementMap>
  </filter>
</svg>

<button className="button">
  <div className="btn-bg">
    <div className="bg1"></div>
    <div className="bg2"></div>
    <div className="bd1"></div>
    <div className="bd1h"></div>
    <div
      className="bg-cloud"
      style="inset: unset; left: -10px; bottom: -20px; height: 70px; scale: 0.5;"
    ></div>
    <div className="bd6"></div>
    <div className="bd-sat"></div>
    <div className="bg-cloud" style="top: 30px; left: 270px; height: 50px;"></div>
    <div className="bg-cloud" style="top: 7px; left: 10px; height: 30px;"></div>
    <div
      className="bg-cloud"
      style="top: 0px; left: 70px; height: 30px; aspect-ratio: 5;"
    ></div>
    <div
      className="bg-cloud"
      style="top: 0px; left: -39px; rotate: 215deg; height: 30px; aspect-ratio: 3;"
    ></div>
    <div className="bd3"></div>
    <div className="bd3a"></div>
    <div className="bd4"></div>
    <div className="bd4h"></div>
    <div className="bd4d"></div>
    <div className="bd5"></div>
  </div>
  <span className="btn-txt">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M11 15H6L13 1V9H18L11 23V15Z"></path>
    </svg>
    Join now
  </span>
</button>
        </div>
        );

        export default Button_double;
        
        
         */
}
