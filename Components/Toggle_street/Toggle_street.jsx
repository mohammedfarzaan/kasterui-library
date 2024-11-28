import React from "react";
import styles from "./Toggle_street.module.css";

const Toggle_street = () => (
  <div>
    <div className={styles["toggle-switch"]}>
      <label className={styles["switch-label"]}>
        <input type="checkbox" className={styles["checkbox"]} />
        <span className={styles["slider"]}></span>
      </label>
    </div>
  </div>
);

export default Toggle_street;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_street = () => (
         <div>
          <div className="toggle-switch">
  <label className="switch-label">
    <input type="checkbox" className="checkbox" />
    <span className="slider"></span>
  </label>
</div>
        </div>
        );

        export default Toggle_street;
        
        
         */
}
