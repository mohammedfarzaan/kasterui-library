import React from "react";
import styles from "./Toggle_lucky.module.css";

const Toggle_lucky = () => (
  <div>
    <label className={styles["switch-button"]} for="switch">
      <div className={styles["switch-outer"]}>
        <input id="switch" type="checkbox" />
        <div className={styles["button"]}>
          <span className={styles["button-toggle"]}></span>
          <span className={styles["button-indicator"]}></span>
        </div>
      </div>
    </label>
  </div>
);

export default Toggle_lucky;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_lucky = () => (
         <div>
          <label className="switch-button" for="switch">
  <div className="switch-outer">
    <input id="switch" type="checkbox" />
    <div className="button">
      <span className="button-toggle"></span>
      <span className="button-indicator"></span>
    </div>
  </div>
</label>
        </div>
        );

        export default Toggle_lucky;
        
        
         */
}
