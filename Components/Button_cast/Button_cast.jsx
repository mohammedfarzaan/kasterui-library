import React from "react";
import styles from "./Button_cast.module.css";

const Button_cast = () => (
  <div>
    <button className={styles["button"]}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        height="24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className={styles["icon"]}
      >
        <path
          d="M5 12h14m-7 7V5"
          stroke-width="2"
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke="currentColor"
        ></path>
      </svg>
      Create Task
    </button>
  </div>
);

export default Button_cast;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_cast = () => (
         <div>
          <button className="button">
  <svg
    viewBox="0 0 24 24"
    fill="none"
    height="24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="icon"
  >
    <path
      d="M5 12h14m-7 7V5"
      stroke-width="2"
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke="currentColor"
    ></path>
  </svg>

  Create Task
</button>
        </div>
        );

        export default Button_cast;
        
        
         */
}
