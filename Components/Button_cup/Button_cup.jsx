import React from "react";
import styles from "./Button_cup.module.css";

const Button_cup = () => (
  <div>
    <button className={styles["btn"]}>
      <span className={styles["icon"]}>
        <svg viewBox="0 0 175 80" width="40" height="40">
          <rect width="80" height="15" fill="#f0f0f0" rx="10"></rect>
          <rect y="30" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
          <rect y="60" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
        </svg>
      </span>
      <span className={styles["text"]}>MENU</span>
    </button>
  </div>
);

export default Button_cup;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_cup = () => (
         <div>
          <button className="btn">
    <span className="icon">
        <svg viewBox="0 0 175 80" width="40" height="40">
            <rect width="80" height="15" fill="#f0f0f0" rx="10"></rect>
            <rect y="30" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
            <rect y="60" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
        </svg>
    </span>
    <span className="text">MENU</span>
</button>
        </div>
        );

        export default Button_cup;
        
        
         */
}
