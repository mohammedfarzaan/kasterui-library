import React from "react";
import styles from "./Toggle_far.module.css";

const Toggle_far = () => (
  <div>
    <label className={styles["switch"]}>
      <input type="checkbox" className={styles["cb"]} />
      <span className={styles["toggle"]}>
        <span className={styles["left"]}>off</span>
        <span className={styles["right"]}>on</span>
      </span>
    </label>
  </div>
);

export default Toggle_far;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_far = () => (
         <div>
          <label className="switch">
  <input type="checkbox" className="cb" />
  <span className="toggle">
    <span className="left">off</span>  
    <span className="right">on</span>  
  </span>
</label>
        </div>
        );

        export default Toggle_far;
        
        
         */
}
