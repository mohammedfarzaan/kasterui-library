import React from "react";
import styles from "./Button_aside.module.css";

const Button_aside = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["icon"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 46 45"
          height="45"
          width="46"
        >
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="3"
            stroke="black"
            d="M29.5487 17.0828L27.4588 19.235L20.4922 26.4091M20.4922 26.4091L5.82359 21.5242C1.20662 19.9867 1.28359 13.4294 5.93538 12.0007L37.5858 2.27996C41.4233 1.10135 45.0151 4.69768 43.8315 8.53369L34.3384 39.3027C32.9045 43.9502 26.3517 44.022 24.8163 39.4069L20.4922 26.4091Z"
          ></path>
        </svg>
      </span>
      <span>Send Message</span>
    </button>
  </div>
);

export default Button_aside;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_aside = () => (
         <div>
          <button className="button">
  <span className="icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 46 45"
      height="45"
      width="46"
    >
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="3"
        stroke="black"
        d="M29.5487 17.0828L27.4588 19.235L20.4922 26.4091M20.4922 26.4091L5.82359 21.5242C1.20662 19.9867 1.28359 13.4294 5.93538 12.0007L37.5858 2.27996C41.4233 1.10135 45.0151 4.69768 43.8315 8.53369L34.3384 39.3027C32.9045 43.9502 26.3517 44.022 24.8163 39.4069L20.4922 26.4091Z"
      ></path>
    </svg>
  </span>
  <span>Send Message</span>
</button>
        </div>
        );

        export default Button_aside;
        
        
         */
}
