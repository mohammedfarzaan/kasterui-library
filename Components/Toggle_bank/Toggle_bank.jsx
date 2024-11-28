import React from "react";
import styles from "./Toggle_bank.module.css";

const Toggle_bank = () => (
  <div>
    <label className={styles["toggle"]}>
      <input className={styles["input"]} type="checkbox" />
      <span className={styles["slider"]}></span>
    </label>
  </div>
);

export default Toggle_bank;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_bank = () => (
         <div>
          <label className="toggle">
  <input className="input" type="checkbox" />
  <span className="slider"></span>
</label>
        </div>
        );

        export default Toggle_bank;
        
        
         */
}
