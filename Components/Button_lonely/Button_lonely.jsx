import React from "react";
import styles from "./Button_lonely.module.css";

const Button_lonely = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["btn__icon"]}>
        <svg
          stroke-linejoin="round"
          stroke-linecap="round"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z" stroke="none"></path>
          <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1"></path>
          <path d="M9 15l3 -3l3 3"></path>
          <path d="M12 12l0 9"></path>
        </svg>
      </span>
      <span className={styles["btn__text"]}>Upload</span>
    </button>
  </div>
);

export default Button_lonely;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_lonely = () => (
         <div>
          <button className="button">
            <span className="btn__icon">
                <svg stroke-linejoin="round" stroke-linecap="round" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h24v24H0z" stroke="none"></path>
                    <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1"></path>
                    <path d="M9 15l3 -3l3 3"></path>
                    <path d="M12 12l0 9"></path>
                </svg>
            </span>
            <span className="btn__text">Upload</span>
        </button>
        </div>
        );

        export default Button_lonely;
        
        
         */
}
