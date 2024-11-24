import React from "react";
import styles from "./Button_again.module.css";

const Button_again = () => (
  <div>
    <div className={styles["button-container"]}>
      <button className={styles["button-3d"]}>
        <div className={styles["button-top"]}>
          <span className={styles["material-icons"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              height="22"
              width="22"
            >
              <path
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="1.5"
                stroke="#292D32"
                d="M7.4 6.32l8.49-2.83c3.81-1.27 5.88.81 4.62 4.62l-2.83 8.49c-1.9 5.71-5.02 5.71-6.92 0l-.84-2.52-2.52-.84c-5.71-1.9-5.71-5.01 0-6.92zm2.71 7.33l3.58-3.59"
              ></path>
            </svg>
          </span>
          <span className={styles["button-text"]}>Send Message</span>
        </div>
        <div className={styles["button-bottom"]}></div>
        <div className={styles["button-base"]}></div>
      </button>
    </div>
  </div>
);

export default Button_again;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_again = () => (
         <div>
          <div className="button-container">
  <button className="button-3d">
    <div className="button-top">
      <span className="material-icons">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          height="22"
          width="22"
        >
          <path
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="1.5"
            stroke="#292D32"
            d="M7.4 6.32l8.49-2.83c3.81-1.27 5.88.81 4.62 4.62l-2.83 8.49c-1.9 5.71-5.02 5.71-6.92 0l-.84-2.52-2.52-.84c-5.71-1.9-5.71-5.01 0-6.92zm2.71 7.33l3.58-3.59"
          ></path>
        </svg>
      </span>
      <span className="button-text">Send Message</span>
    </div>
    <div className="button-bottom"></div>
    <div className="button-base"></div>
  </button>
</div>
        </div>
        );

        export default Button_again;
        
        
         */
}
