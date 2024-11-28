import React from "react";
import styles from "./Button_aboard.module.css";

const Button_aboard = () => (
  <div>
    <div id="bg">
      <div id="orangebg"></div>
      <div id="pinkbg"></div>

      <div id="yellowbg"></div>
      <div id="purplebg"></div>
    </div>
    <button className={styles["button"]}>
      <div id="pink1" className={styles["pink"]}></div>
      <div id="pink2" className={styles["pink"]}></div>
      <div id="pink3" className={styles["pink"]}></div>
      <div id="pink4" className={styles["pink"]}></div>
      <div id="pink5" className={styles["pink"]}></div>
      <div id="pink6" className={styles["pink"]}></div>

      <div id="orange1" className={styles["orange"]}></div>
      <div id="orange2" className={styles["orange"]}></div>
      <div id="orange3" className={styles["orange"]}></div>
      <div id="orange4" className={styles["orange"]}></div>

      <div id="white1" className={styles["white"]}></div>
      <div id="white2" className={styles["white"]}></div>
      <div id="white3" className={styles["white"]}></div>
      <div id="white4" className={styles["white"]}></div>
      <div id="white5" className={styles["white"]}></div>
      <div id="white6" className={styles["white"]}></div>
      <div id="white7" className={styles["white"]}></div>
      <div id="white8" className={styles["white"]}></div>
      <div id="orange5" className={styles["orangei"]}></div>
      <div id="orange6" className={styles["orangei"]}></div>
      <div id="orange7" className={styles["orangei"]}></div>
      <div id="orange8" className={styles["orangei"]}></div>
      <div id="orange9" className={styles["orangei"]}></div>
      <div id="orange10" className={styles["orangei"]}></div>
      <div id="orange11" className={styles["orange"]}></div>
      <div id="pink7" className={styles["pinki"]}></div>
      <div id="pink8" className={styles["pinki"]}></div>
      <div id="pink9" className={styles["pinki"]}></div>
      <div id="pink10" className={styles["pinki"]}></div>
      <div id="pink11" className={styles["pink"]}></div>
      <div id="white9" className={styles["white"]}></div>
      <div id="white10" className={styles["white"]}></div>
      <div id="backdrop2"></div>
      <div id="whiteOverlay"></div>
      <div id="whiteBorder"></div>
      <div id="whiteBorder2"></div>
      <div id="white11" className={styles["white"]}></div>
      <div id="white12" className={styles["white"]}></div>
      <div id="white13" className={styles["white"]}></div>
      <div id="white14" className={styles["white"]}></div>
      <div id="white15" className={styles["white"]}></div>
      <div id="white16" className={styles["white"]}></div>

      <div id="text">
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 256 256"
          height="20"
          width="26"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs></defs>
          <g
            transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
            style="stroke: none; strokeWidth: 0; stroke-dasharray: none; strokeLinecap: butt; strokeLinejoin: miter; stroke-miterlimit: 10; fill: none; fillRule: nonzero; opacity: 1;"
          >
            <path
              strokeLinecap="round"
              transform="matrix(1 0 0 1 0 0)"
              style="stroke: none; strokeWidth: 1; stroke-dasharray: none; strokeLinecap: butt; strokeLinejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fillRule: nonzero; opacity: 1;"
              d="M 71.79 34.614 c -0.334 -0.497 -0.926 -0.745 -1.513 -0.63 l -18.311 3.528 l 3.718 -35.877 c 0.071 -0.682 -0.332 -1.32 -0.979 -1.55 c -0.648 -0.229 -1.362 0.011 -1.738 0.585 L 18.202 53.746 c -0.328 0.5 -0.325 1.144 0.008 1.639 c 0.33 0.493 0.922 0.742 1.513 0.632 l 18.312 -3.529 l -3.718 35.876 c -0.071 0.684 0.332 1.322 0.979 1.551 C 35.455 89.971 35.622 90 35.792 90 c 0.502 0 0.965 -0.251 1.241 -0.67 l 34.765 -53.076 C 72.126 35.754 72.122 35.11 71.79 34.614 z"
            ></path>
          </g>
        </svg>
        Join now
      </div>
    </button>
  </div>
);

export default Button_aboard;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_aboard = () => (
         <div>
          <div id="bg">
  <div id="orangebg"></div>
  <div id="pinkbg"></div>

  <div id="yellowbg"></div>
  <div id="purplebg"></div>
</div>
<button className="button">
  <div id="pink1" className="pink"></div>
  <div id="pink2" className="pink"></div>
  <div id="pink3" className="pink"></div>
  <div id="pink4" className="pink"></div>
  <div id="pink5" className="pink"></div>
  <div id="pink6" className="pink"></div>

  <div id="orange1" className="orange"></div>
  <div id="orange2" className="orange"></div>
  <div id="orange3" className="orange"></div>
  <div id="orange4" className="orange"></div>

  <div id="white1" className="white"></div>
  <div id="white2" className="white"></div>
  <div id="white3" className="white"></div>
  <div id="white4" className="white"></div>
  <div id="white5" className="white"></div>
  <div id="white6" className="white"></div>
  <div id="white7" className="white"></div>
  <div id="white8" className="white"></div>
  <div id="orange5" className="orangei"></div>
  <div id="orange6" className="orangei"></div>
  <div id="orange7" className="orangei"></div>
  <div id="orange8" className="orangei"></div>
  <div id="orange9" className="orangei"></div>
  <div id="orange10" className="orangei"></div>
  <div id="orange11" className="orange"></div>
  <div id="pink7" className="pinki"></div>
  <div id="pink8" className="pinki"></div>
  <div id="pink9" className="pinki"></div>
  <div id="pink10" className="pinki"></div>
  <div id="pink11" className="pink"></div>
  <div id="white9" className="white"></div>
  <div id="white10" className="white"></div>
  <div id="backdrop2"></div>
  <div id="whiteOverlay"></div>
  <div id="whiteBorder"></div>
  <div id="whiteBorder2"></div>
  <div id="white11" className="white"></div>
  <div id="white12" className="white"></div>
  <div id="white13" className="white"></div>
  <div id="white14" className="white"></div>
  <div id="white15" className="white"></div>
  <div id="white16" className="white"></div>

  <div id="text">
    <svg
      preserveAspectRatio="none"
      viewBox="0 0 256 256"
      height="20"
      width="26"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs></defs>
      <g
        transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
        style="stroke: none; strokeWidth: 0; stroke-dasharray: none; strokeLinecap: butt; strokeLinejoin: miter; stroke-miterlimit: 10; fill: none; fillRule: nonzero; opacity: 1;"
      >
        <path
          strokeLinecap="round"
          transform="matrix(1 0 0 1 0 0)"
          style="stroke: none; strokeWidth: 1; stroke-dasharray: none; strokeLinecap: butt; strokeLinejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fillRule: nonzero; opacity: 1;"
          d="M 71.79 34.614 c -0.334 -0.497 -0.926 -0.745 -1.513 -0.63 l -18.311 3.528 l 3.718 -35.877 c 0.071 -0.682 -0.332 -1.32 -0.979 -1.55 c -0.648 -0.229 -1.362 0.011 -1.738 0.585 L 18.202 53.746 c -0.328 0.5 -0.325 1.144 0.008 1.639 c 0.33 0.493 0.922 0.742 1.513 0.632 l 18.312 -3.529 l -3.718 35.876 c -0.071 0.684 0.332 1.322 0.979 1.551 C 35.455 89.971 35.622 90 35.792 90 c 0.502 0 0.965 -0.251 1.241 -0.67 l 34.765 -53.076 C 72.126 35.754 72.122 35.11 71.79 34.614 z"
        ></path>
      </g>
    </svg>
    Join now
  </div>
</button>
        </div>
        );

        export default Button_aboard;
        
        
         */
}
