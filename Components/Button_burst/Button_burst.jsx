import React from "react";
import styles from "./Button_burst.module.css";

const Button_burst = () => (
  <div>
    <a className={styles["playstore-button"]} href="#">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className={styles["icon"]}
        viewBox="0 0 512 512"
      >
        <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
      </svg>
      <span className={styles["texts"]}>
        <span className={styles["text-1"]}>GET IT ON</span>
        <span className={styles["text-2"]}>Google Play</span>
      </span>
    </a>
  </div>
);

export default Button_burst;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_burst = () => (
         <div>
          <a className="playstore-button" href="#">
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icon" viewBox="0 0 512 512">
    <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
  </svg>
  <span className="texts">
    <span className="text-1">GET IT ON</span>
    <span className="text-2">Google Play</span>
  </span>
</a>
        </div>
        );

        export default Button_burst;
        
        
         */
}
