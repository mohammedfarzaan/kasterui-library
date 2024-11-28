import React from "react";
import styles from "./Toggle_best.module.css";

const Toggle_best = () => (
  <div>
    <label className={styles["label"]}>
      <div className={styles["toggle"]}>
        <input
          className={styles["toggle-state"]}
          type="checkbox"
          name="check"
          value="check"
        />
        <div className={styles["indicator"]}></div>
      </div>
    </label>
  </div>
);

export default Toggle_best;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_best = () => (
         <div>
          <label className="label">
    <div className="toggle">
        <input className="toggle-state" type="checkbox" name="check" value="check" />
        <div className="indicator"></div>
    </div>
</label>
        </div>
        );

        export default Toggle_best;
        
        
         */
}
