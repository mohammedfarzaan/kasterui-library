import React from "react";
import styles from "./Button_closer.module.css";

const Button_closer = () => (
  <div>
    <button
      className={styles["action_has"] + styles["has_liked"]}
      aria-label="like"
      type="button"
    >
      <span data-icon="">
        <svg
          data-icon="aoeri"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
        >
          <path
            d="m8.05,11.99c0-.84.28-1.07,1.2-1.25,1.6-.31,2.35-.74,3.14-1.54,1.19-1.21,1.58-1.97,2.18-3.24.66-1.69,1.55-2.82,3.04-2.76.9.03,2.33.8,1.67,2.72-.31.9-1.98,3.61-2.23,4.23-.18.46.4.8.8.8h2.5c1.2,0,2.2,1,2.2,2.2l-1.1,5.6c-.3,1.5-1.02,2.23-2.2,2.2h-7.6c-2,0-3.6-1.6-3.6-3.6v-5.35Z"
            data-d="thumb"
          ></path>
          <path
            d="m5.4,19.9c0,.6-.5,1.1-1.1,1.1h-1c-1,0-1.9-.9-1.9-1.9v-6.3c0-1,.9-1.9,1.9-1.9h.9c.7,0,1.2.6,1.2,1.2v7.7Z"
            data-d="sleeves"
          ></path>
        </svg>
      </span>
    </button>
  </div>
);

export default Button_closer;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_closer = () => (
         <div>
          <button className="action_has has_liked" aria-label="like" type="button">
  <span data-icon=""
    ><svg
      data-icon="aoeri"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
    >
      <path
        d="m8.05,11.99c0-.84.28-1.07,1.2-1.25,1.6-.31,2.35-.74,3.14-1.54,1.19-1.21,1.58-1.97,2.18-3.24.66-1.69,1.55-2.82,3.04-2.76.9.03,2.33.8,1.67,2.72-.31.9-1.98,3.61-2.23,4.23-.18.46.4.8.8.8h2.5c1.2,0,2.2,1,2.2,2.2l-1.1,5.6c-.3,1.5-1.02,2.23-2.2,2.2h-7.6c-2,0-3.6-1.6-3.6-3.6v-5.35Z"
        data-d="thumb"
      ></path>
      <path
        d="m5.4,19.9c0,.6-.5,1.1-1.1,1.1h-1c-1,0-1.9-.9-1.9-1.9v-6.3c0-1,.9-1.9,1.9-1.9h.9c.7,0,1.2.6,1.2,1.2v7.7Z"
        data-d="sleeves"
      ></path></svg
  ></span>
</button>
        </div>
        );

        export default Button_closer;
        
        
         */
}
