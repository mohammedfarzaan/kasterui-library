import React from "react";
import styles from "./Toggle_blind.module.css";

const Toggle_blind = () => (
  <div>
    <label className={styles["switch"]}>
      <input type="checkbox" className={styles["cb"]} />
      <span className={styles["toggle"]}>
        <span className={styles["left"]}>OFF</span>
        <span className={styles["right"]}>ON</span>
      </span>
    </label>
  </div>
);

export default Toggle_blind;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_blind = () => (
         <div>
          <label className="switch">
  <input type="checkbox" className="cb" />
  <span className="toggle">
    <span className="left">OFF</span>  
    <span className="right">ON</span>  
  </span>
</label>
        </div>
        );

        export default Toggle_blind;
        
        
         */
}
