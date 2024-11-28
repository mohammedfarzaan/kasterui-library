import React from "react";
import styles from "./Toggle_zero.module.css";

const Toggle_zero = () => (
  <div>
    <label className={styles["switch-container"]}>
      <input type="checkbox" />
      <span className={styles["slider"]}></span>
    </label>
  </div>
);

export default Toggle_zero;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_zero = () => (
         <div>
          <label className="switch-container">
  <input type="checkbox" />
  <span className="slider"></span>
</label>
        </div>
        );

        export default Toggle_zero;
        
        
         */
}
