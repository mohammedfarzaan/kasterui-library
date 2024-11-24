import React from "react";
import styles from "./Button_eaten.module.css";

const Button_eaten = () => (
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

export default Button_eaten;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_eaten = () => (
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

        export default Button_eaten;
        
        
         */
}
