import React from "react";
import styles from "./Button_lift.module.css";

const Button_lift = () => (
  <div>
    <div className={styles["btn"]}>
      <span data-text="Click me">Click me</span>
    </div>
  </div>
);

export default Button_lift;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_lift = () => (
         <div>
          <div className="btn"><span data-text="Click me">Click me</span></div>
        </div>
        );

        export default Button_lift;
        
        
         */
}
