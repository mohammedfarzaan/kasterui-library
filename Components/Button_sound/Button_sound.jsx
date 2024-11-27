import React from "react";
import styles from "./Button_sound.module.css";

const Button_sound = () => (
  <div>
    <button className={styles["button"]}>
      <span>Join Today</span>

      <svg
        className="icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        ></path>
      </svg>
    </button>
  </div>
);

export default Button_sound;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_sound = () => (
         <div>
          <button className="button">
  <span>Join Today</span>

  <svg
    className="icon"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    ></path>
  </svg>
</button>
        </div>
        );

        export default Button_sound;
        
        
         */
}
