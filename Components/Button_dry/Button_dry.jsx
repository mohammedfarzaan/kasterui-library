import React from "react";
import styles from "./Button_dry.module.css";

const Button_dry = () => (
  <div>
    <button className={styles["btn"]}>
      <span className={styles["left-span"]}></span>
      <p className={styles["text-btn"]}>Hover me</p>
      <p className={styles["hidden-text-btn"]}>Thank you!</p>
      <span className={styles["right-span"]}></span>
    </button>
  </div>
);

export default Button_dry;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_dry = () => (
         <div>
          <button className="btn">
  <span className="left-span"></span>
  <p className="text-btn">Hover me</p>
  <p className="hidden-text-btn">Thank you!</p>
  <span className="right-span"></span>
</button>
        </div>
        );

        export default Button_dry;
        
        
         */
}
