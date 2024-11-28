import React from "react";
import styles from "./Button_men.module.css";

const Button_men = () => (
  <div>
    <button className={styles["button"]}>
      <div className={styles["button-inner-wrap"]}>
        <div className={styles["button-content"]}>
          <svg
            id="svg1"
            version="1.1"
            fill="none"
            viewBox="0 0 17.191999 17.915001"
            height="17.915001"
            width="17.191999"
          >
            <path
              id="path1"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="1.5"
              stroke="#000000"
              d="M 9.3223611,8.9119975 H 3.5673455 m -0.17238,0.7972 -1.3313244,3.0014005 c -0.8349111,2.493962 0.031033,4.403741 3.26073,2.9505 l 8.8532949,-4.5605 c 1.64001,-0.785228 1.659708,-3.5011752 0,-4.3772505 l -8.8707749,-4.56832 c -2.6423685,-1.18905255 -4.1290723,0.3343707 -3.26268,2.94464 l 1.3527044,3.09163 c 0.0935,0.2817 0.14026,0.4226 0.15871,0.5666 0.01638,0.1279 0.01621,0.2573 -4.9e-4,0.3851 -0.01883,0.144 -0.06594,0.2847 -0.16017,0.5662 z"
            ></path>
          </svg>

          <span>Send Message</span>
        </div>
      </div>
    </button>
  </div>
);

export default Button_men;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_men = () => (
         <div>
          <button className="button">
  <div className="button-inner-wrap">
    <div className="button-content">
      <svg
        id="svg1"
        version="1.1"
        fill="none"
        viewBox="0 0 17.191999 17.915001"
        height="17.915001"
        width="17.191999"
      >
        <path
          id="path1"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="1.5"
          stroke="#000000"
          d="M 9.3223611,8.9119975 H 3.5673455 m -0.17238,0.7972 -1.3313244,3.0014005 c -0.8349111,2.493962 0.031033,4.403741 3.26073,2.9505 l 8.8532949,-4.5605 c 1.64001,-0.785228 1.659708,-3.5011752 0,-4.3772505 l -8.8707749,-4.56832 c -2.6423685,-1.18905255 -4.1290723,0.3343707 -3.26268,2.94464 l 1.3527044,3.09163 c 0.0935,0.2817 0.14026,0.4226 0.15871,0.5666 0.01638,0.1279 0.01621,0.2573 -4.9e-4,0.3851 -0.01883,0.144 -0.06594,0.2847 -0.16017,0.5662 z"
        ></path>
      </svg>

      <span>Send Message</span>
    </div>
  </div>
</button>
        </div>
        );

        export default Button_men;
        
        
         */
}
