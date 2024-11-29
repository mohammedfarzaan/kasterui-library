import React from "react";
import styles from "./Toggle_during.module.css";

const Toggle_during = () => (
  <div>
    <div className={styles["toggle-switch"]}>
      <input
        id="toggle-switch"
        className={styles["toggle-switch-checkbox"]}
        type="checkbox"
      />
      <label for="toggle-switch" className={styles["toggle-switch-label"]}>
        <span className={styles["toggle-switch-inner"]}></span>
        <span className={styles["toggle-switch-switch"]}></span>
      </label>
      <span className={styles["toggle-switch-text"]}></span>
    </div>
  </div>
);

export default Toggle_during;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_during = () => (
         <div>
          <div className="toggle-switch">
  <input id="toggle-switch" className="toggle-switch-checkbox" type="checkbox" />
  <label for="toggle-switch" className="toggle-switch-label">
    <span className="toggle-switch-inner"></span>
    <span className="toggle-switch-switch"></span>
  </label>
  <span className="toggle-switch-text"></span>
</div>
        </div>
        );

        export default Toggle_during;
        
        
         */
}
