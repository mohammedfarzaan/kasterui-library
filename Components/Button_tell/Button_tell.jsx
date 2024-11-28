import React from "react";
import styles from "./Button_tell.module.css";

const Button_tell = () => (
  <div>
    <button className={styles["c-button"] + styles["c-button--gooey"]}>
      {" "}
      Hover me
      <div className={styles["c-button__blobs"]}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </button>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      style="display: block; height: 0; width: 0;"
    >
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

export default Button_tell;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_tell = () => (
         <div>
          <button className="c-button c-button--gooey"> Hover me
  <div className="c-button__blobs">
  <div></div>
  <div></div>
  <div></div>
  </div>
</button>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="display: block; height: 0; width: 0;">
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

        export default Button_tell;
        
        
         */
}
