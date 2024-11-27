import React from "react";
import styles from "./Button_hardly.module.css";

const Button_hardly = () => (
  <div>
    <div className={styles["volume"]}>
      <input type="checkbox" className={styles["volume-input"]} />
      <div className={styles["volume-icon"]}>
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="volume-svg"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
      </div>
    </div>
  </div>
);

export default Button_hardly;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_hardly = () => (
         <div>
          <div className="volume">
  <input type="checkbox" className="volume-input" />
  <div className="volume-icon">
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="volume-svg"
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
      <path
        d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"
      ></path>
    </svg>
  </div>
</div>
        </div>
        );

        export default Button_hardly;
        
        
         */
}
