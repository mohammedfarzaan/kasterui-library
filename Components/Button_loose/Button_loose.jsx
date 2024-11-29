import React from "react";
import styles from "./Button_loose.module.css";

const Button_loose = () => (
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

export default Button_loose;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_loose = () => (
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

        export default Button_loose;
        
        
         */
}
