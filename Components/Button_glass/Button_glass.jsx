import React from "react";
import styles from "./Button_glass.module.css";

const Button_glass = () => (
  <div>
    <button className={styles["btn"]}>
      <span>Get started</span>
    </button>
  </div>
);

export default Button_glass;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_glass = () => (
         <div>
          <button className="btn">
  <span>Get started</span>
</button>
        </div>
        );

        export default Button_glass;
        
        
         */
}
