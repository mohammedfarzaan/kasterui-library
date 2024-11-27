import React from "react";
import styles from "./Button_find.module.css";

const Button_find = () => (
  <div>
    <button className={styles["button"]}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.25rem"
        height="1.25rem"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M12 19v-7m0 0V5m0 7H5m7 0h7"></path>
      </svg>
      Create
    </button>
  </div>
);

export default Button_find;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_find = () => (
         <div>
          <button className="button">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.25rem"
    height="1.25rem"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
  >
    <path d="M12 19v-7m0 0V5m0 7H5m7 0h7"></path>
  </svg>
  Create
</button>
        </div>
        );

        export default Button_find;
        
        
         */
}
