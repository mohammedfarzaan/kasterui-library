import React from "react";
import styles from "./Button_met.module.css";

const Button_met = () => (
  <div>
    <button className={styles["button"]}>
      <div className={styles["circle"]}></div>
      <span>Button</span>
    </button>
  </div>
);

export default Button_met;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_met = () => (
         <div>
          <button className="button">
  <div className="circle"></div>
  <span>Button</span>
</button>
        </div>
        );

        export default Button_met;
        
        
         */
}
