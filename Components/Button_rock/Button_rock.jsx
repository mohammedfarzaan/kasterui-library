import React from "react";
import styles from "./Button_rock.module.css";

const Button_rock = () => (
  <div>
    <button className={styles["button"]}>
      <svg xmlns="http://www.w3.org/2000/svg">
        <rect className={styles["border"]} pathLength="100"></rect>
        <rect className={styles["loading"]} pathLength="100"></rect>

        <svg
          className={styles["done-svg"]}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            className={styles["done"] + styles["done-cloud"]}
            pathLength="100"
            d="M 6.5,20 Q 4.22,20 2.61,18.43 1,16.85 1,14.58 1,12.63 2.17,11.1 3.35,9.57 5.25,9.15 5.88,6.85 7.75,5.43 9.63,4 12,4 14.93,4 16.96,6.04 19,8.07 19,11 q 1.73,0.2 2.86,1.5 1.14,1.28 1.14,3 0,1.88 -1.31,3.19 Q 20.38,20 18.5,20 Z"
          ></path>
          <path
            className={styles["done"] + styles["done-check"]}
            pathLength="100"
            d="M 7.515,12.74 10.34143,15.563569 15.275,10.625"
          ></path>
        </svg>
      </svg>
      <div className={styles["txt-upload"]}>Upload</div>
    </button>
  </div>
);

export default Button_rock;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_rock = () => (
         <div>
          <button className="button">
  <svg xmlns="http://www.w3.org/2000/svg">
    <rect className="border" pathLength="100"></rect>
    <rect className="loading" pathLength="100"></rect>

    <svg
      className="done-svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="done done-cloud"
        pathLength="100"
        d="M 6.5,20 Q 4.22,20 2.61,18.43 1,16.85 1,14.58 1,12.63 2.17,11.1 3.35,9.57 5.25,9.15 5.88,6.85 7.75,5.43 9.63,4 12,4 14.93,4 16.96,6.04 19,8.07 19,11 q 1.73,0.2 2.86,1.5 1.14,1.28 1.14,3 0,1.88 -1.31,3.19 Q 20.38,20 18.5,20 Z"
      ></path>
      <path
        className="done done-check"
        pathLength="100"
        d="M 7.515,12.74 10.34143,15.563569 15.275,10.625"
      ></path>
    </svg>
  </svg>
  <div className="txt-upload">Upload</div>
</button>
        </div>
        );

        export default Button_rock;
        
        
         */
}
