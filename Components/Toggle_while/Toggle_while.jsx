import React from "react";
import styles from "./Toggle_while.module.css";

const Toggle_while = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["toggle"]}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
);

export default Toggle_while;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_while = () => (
         <div>
          <div className="container">
    <div className="toggle">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
        </div>
        );

        export default Toggle_while;
        
        
         */
}