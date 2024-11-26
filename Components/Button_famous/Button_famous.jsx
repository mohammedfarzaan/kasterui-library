import React from "react";
import styles from "./Button_famous.module.css";

const Button_famous = () => (
  <div>
    <button className={styles["button"]}>
      <svg
        xml:space="preserve"
        viewBox="0 0 256 256"
        height="256"
        width="256"
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
      Join Now
    </button>
  </div>
);

export default Button_famous;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_famous = () => (
         <div>
          <button className="button">
  <svg
    xml:space="preserve"
    viewBox="0 0 256 256"
    height="256"
    width="256"
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
  Join Now
</button>
        </div>
        );

        export default Button_famous;
        
        
         */
}
