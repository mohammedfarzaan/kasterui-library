import React from "react";
import styles from "./Button_good.module.css";

const Button_good = () => (
  <div>
    <button className={styles["btn-1"]}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Button
    </button>
  </div>
);

export default Button_good;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_good = () => (
         <div>
          <button className="btn-1">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Button
    </button>
        </div>
        );

        export default Button_good;
        
        
         */
}
