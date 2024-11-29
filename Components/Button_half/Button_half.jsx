import React from "react";
import styles from "./Button_half.module.css";

const Button_half = () => (
  <div>
    <button className={styles["box"]}>
      <span className={styles["button"]}>How Are you today?</span>
    </button>
  </div>
);

export default Button_half;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_half = () => (
         <div>
          <button className="box">
    <span className="button">How Are you today?</span>
  </button>
        </div>
        );

        export default Button_half;
        
        
         */
}
