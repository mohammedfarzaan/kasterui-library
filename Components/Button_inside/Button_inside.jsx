import React from "react";
import styles from "./Button_inside.module.css";

const Button_inside = () => (
  <div>
    <button className={styles["button"]}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.25rem"
        height="1.25rem"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      >
        <path d="M12 19v-7m0 0V5m0 7H5m7 0h7"></path>
      </svg>
      Create
    </button>
  </div>
);

export default Button_inside;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_inside = () => (
         <div>
          <button className="button">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.25rem"
    height="1.25rem"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
  >
    <path d="M12 19v-7m0 0V5m0 7H5m7 0h7"></path>
  </svg>
  Create
</button>
        </div>
        );

        export default Button_inside;
        
        
         */
}
