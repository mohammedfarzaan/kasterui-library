import React from "react";
import styles from "./Button_advice.module.css";

const Button_advice = () => (
  <div>
    <button className={styles["button"]}>
      <div className={styles["bgContainer"]}>
        <span>Hover</span>
        <span>Hover</span>
      </div>
      <div className={styles["arrowContainer"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 45 38"
          height="25"
          width="25"
        >
          <path
            fill="black"
            d="M43.7678 20.7678C44.7441 19.7915 44.7441 18.2085 43.7678 17.2322L27.8579 1.32233C26.8816 0.34602 25.2986 0.34602 24.3223 1.32233C23.346 2.29864 23.346 3.88155 24.3223 4.85786L38.4645 19L24.3223 33.1421C23.346 34.1184 23.346 35.7014 24.3223 36.6777C25.2986 37.654 26.8816 37.654 27.8579 36.6777L43.7678 20.7678ZM0 21.5L42 21.5V16.5L0 16.5L0 21.5Z"
          ></path>
        </svg>
      </div>
    </button>
  </div>
);

export default Button_advice;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_advice = () => (
         <div>
          <button className="button">
  <div className="bgContainer">
    <span>Hover</span>
    <span>Hover</span>
  </div>
  <div className="arrowContainer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 45 38"
      height="25"
      width="25"
    >
      <path
        fill="black"
        d="M43.7678 20.7678C44.7441 19.7915 44.7441 18.2085 43.7678 17.2322L27.8579 1.32233C26.8816 0.34602 25.2986 0.34602 24.3223 1.32233C23.346 2.29864 23.346 3.88155 24.3223 4.85786L38.4645 19L24.3223 33.1421C23.346 34.1184 23.346 35.7014 24.3223 36.6777C25.2986 37.654 26.8816 37.654 27.8579 36.6777L43.7678 20.7678ZM0 21.5L42 21.5V16.5L0 16.5L0 21.5Z"
      ></path>
    </svg>
  </div>
</button>
        </div>
        );

        export default Button_advice;
        
        
         */
}
