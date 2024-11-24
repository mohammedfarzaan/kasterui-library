import React from "react";
import styles from "./Button_shot.module.css";

const Button_shot = () => (
  <div>
    <button className={styles["button"]}>
      <div>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className={
            styles["w-6"] +
            styles["h-6"] +
            styles["text-gray-800"] +
            styles["dark:text-white"]
          }
        >
          <path
            d="m12 18-7 3 7-18 7 18-7-3Zm0 0v-5"
            stroke-width="2"
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke="currentColor"
          ></path>
        </svg>
        Send Message
      </div>
    </button>
  </div>
);

export default Button_shot;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_shot = () => (
         <div>
          <button className="button">
  <div>
    <svg
      viewBox="0 0 24 24"
      fill="none"
      height="24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-6 h-6 text-gray-800 dark:text-white"
    >
      <path
        d="m12 18-7 3 7-18 7 18-7-3Zm0 0v-5"
        stroke-width="2"
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke="currentColor"
      ></path>
    </svg>
    Send Message
  </div>
</button>
        </div>
        );

        export default Button_shot;
        
        
         */
}
