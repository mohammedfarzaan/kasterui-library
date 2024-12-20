import React from "react";
import styles from "./Button_throw.module.css";

const Button_throw = () => (
  <div>
    <button className={styles["palette-button"]}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 47 47"
        className={styles["palette"]}
      >
        <path
          strokeWidth="2"
          stroke="black"
          d="M23.5 46C11.0736 46 1 35.9264 1 23.5C1 11.0736 11.0736 1 23.5 1C35.9264 1 46 11.0736 46 23.5C46 24.2461 45.7117 24.7823 45.1652 25.2415C44.5763 25.7365 43.6859 26.1372 42.5263 26.4835C41.3771 26.8267 40.0662 27.0884 38.6848 27.3617L38.6142 27.3757C37.275 27.6407 35.8737 27.9179 34.5961 28.2889C32.0955 29.015 29.5022 30.2591 29.1333 33.106C28.9574 34.463 29.3233 36.0257 30.2167 37.8342C31.0026 39.425 32.2278 41.2689 33.9671 43.4224C30.8413 45.0683 27.2807 46 23.5 46Z"
        ></path>
        <circle
          fill="none"
          className={styles["color-drop"] + styles["drop1"]}
          strokeWidth="2"
          stroke="black"
          r="3.5"
          cy="13.5"
          cx="33.5"
        ></circle>
        <circle
          fill="none"
          className={styles["color-drop"] + styles["drop2"]}
          strokeWidth="2"
          stroke="black"
          r="3.5"
          cy="10.5"
          cx="20.5"
        ></circle>
        <circle
          fill="none"
          className={styles["color-drop"] + styles["drop3"]}
          strokeWidth="2"
          stroke="black"
          r="3.5"
          cy="18.5"
          cx="10.5"
        ></circle>
        <circle
          fill="none"
          className={styles["color-drop"] + styles["drop4"]}
          strokeWidth="2"
          stroke="black"
          r="3.5"
          cy="31.5"
          cx="11.5"
        ></circle>
      </svg>
      Customize
    </button>
  </div>
);

export default Button_throw;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_throw = () => (
         <div>
          <button className="palette-button">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 47 47"
    className="palette"
  >
    <path
      strokeWidth="2"
      stroke="black"
      d="M23.5 46C11.0736 46 1 35.9264 1 23.5C1 11.0736 11.0736 1 23.5 1C35.9264 1 46 11.0736 46 23.5C46 24.2461 45.7117 24.7823 45.1652 25.2415C44.5763 25.7365 43.6859 26.1372 42.5263 26.4835C41.3771 26.8267 40.0662 27.0884 38.6848 27.3617L38.6142 27.3757C37.275 27.6407 35.8737 27.9179 34.5961 28.2889C32.0955 29.015 29.5022 30.2591 29.1333 33.106C28.9574 34.463 29.3233 36.0257 30.2167 37.8342C31.0026 39.425 32.2278 41.2689 33.9671 43.4224C30.8413 45.0683 27.2807 46 23.5 46Z"
    ></path>
    <circle
      fill="none"
      className="color-drop drop1"
      strokeWidth="2"
      stroke="black"
      r="3.5"
      cy="13.5"
      cx="33.5"
    ></circle>
    <circle
      fill="none"
      className="color-drop drop2"
      strokeWidth="2"
      stroke="black"
      r="3.5"
      cy="10.5"
      cx="20.5"
    ></circle>
    <circle
      fill="none"
      className="color-drop drop3"
      strokeWidth="2"
      stroke="black"
      r="3.5"
      cy="18.5"
      cx="10.5"
    ></circle>
    <circle
      fill="none"
      className="color-drop drop4"
      strokeWidth="2"
      stroke="black"
      r="3.5"
      cy="31.5"
      cx="11.5"
    ></circle>
  </svg>
  Customize
</button>
        </div>
        );

        export default Button_throw;
        
        
         */
}
