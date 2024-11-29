import React from "react";
import styles from "./Button_worth.module.css";

const Button_worth = () => (
  <div>
    <button className={styles["animated-button"]}>
      <span>Hover me</span>
      <span></span>
    </button>
  </div>
);

export default Button_worth;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_worth = () => (
         <div>
          <button className="animated-button">
  <span>Hover me</span>
  <span></span>
</button>
        </div>
        );

        export default Button_worth;
        
        
         */
}
