import React from "react";
import styles from "./Button_quiet.module.css";

const Button_quiet = () => (
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
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke="currentColor"
        ></path>
      </svg>
      Create Task
    </button>
  </div>
);

export default Button_quiet;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_quiet = () => (
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
      strokeWidth="2"
      strokeLinejoin="round"
      strokeLinecap="round"
      stroke="currentColor"
    ></path>
  </svg>

  Create Task
</button>
        </div>
        );

        export default Button_quiet;
        
        
         */
}
