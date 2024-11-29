import React from "react";
import styles from "./Button_curve.module.css";

const Button_curve = () => (
  <div>
    <button className={styles["button"]}>
      <span></span>
      Button
      <span></span>
    </button>
  </div>
);

export default Button_curve;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_curve = () => (
         <div>
          <button className="button">
  <span></span>
  Button
  <span></span>
</button>
        </div>
        );

        export default Button_curve;
        
        
         */
}
