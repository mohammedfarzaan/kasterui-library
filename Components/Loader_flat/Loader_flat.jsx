import React from "react";
import styles from "./Loader_flat.module.css";

const Loader_flat = () => (
  <div>
    <div className={styles["blobs"]}>
      <div className={styles["blob-center"]}></div>
      <div className={styles["blob"]}></div>
      <div className={styles["blob"]}></div>
      <div className={styles["blob"]}></div>
      <div className={styles["blob"]}></div>
      <div className={styles["blob"]}></div>
      <div className={styles["blob"]}></div>
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

export default Loader_flat;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_flat = () => (
         <div>
          <div className="blobs">
	<div className="blob-center"></div>
	<div className="blob"></div>
	<div className="blob"></div>
	<div className="blob"></div>
	<div className="blob"></div>
	<div className="blob"></div>
	<div className="blob"></div>
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

        export default Loader_flat;
        
        
         */
}
