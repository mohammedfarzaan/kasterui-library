import React from "react";
import styles from "./Toggle_card.module.css";

const Toggle_card = () => (
  <div>
    <label className={styles["rocker"] + styles["rocker-small"]}>
      <input type="checkbox" />
      <span className={styles["switch-left"]}>Yes</span>
      <span className={styles["switch-right"]}>No</span>
    </label>
  </div>
);

export default Toggle_card;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_card = () => (
         <div>
          <label className="rocker rocker-small">
    <input type="checkbox" />
    <span className="switch-left">Yes</span>
    <span className="switch-right">No</span>
</label>
        </div>
        );

        export default Toggle_card;
        
        
         */
}
