import React from "react";
import styles from "./Button_force.module.css";

const Button_force = () => (
  <div>
    <button className={styles["btn"]}>
      <svg>
        <defs>
          <linearGradient id="gradiant">
            <stop stop-color="#FF8282" offset="0%"></stop>
            <stop stop-color="#E178ED" offset="100%"></stop>
          </linearGradient>
        </defs>
        <rect
          height="50"
          width="150"
          stroke="url(#gradiant)"
          fill="none"
        ></rect>
      </svg>
      <span>Button</span>
    </button>
  </div>
);

export default Button_force;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_force = () => (
         <div>
          <button className="btn">
  <svg>
    <defs>
        <linearGradient id="gradiant">
            <stop stop-color="#FF8282" offset="0%"></stop>
            <stop stop-color="#E178ED" offset="100%"></stop>
        </linearGradient>
    </defs>
     <rect height="50" width="150" stroke="url(#gradiant)" fill="none"></rect>
  </svg>
    <span>Button</span>
</button>
        </div>
        );

        export default Button_force;
        
        
         */
}
