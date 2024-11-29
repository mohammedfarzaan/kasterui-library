import React from "react";
import styles from "./Toggle_golden.module.css";

const Toggle_golden = () => (
  <div>
    <p className={styles["component-title"]}>iOS Switch</p>

    <div className={styles["container"]}>
      <input type="checkbox" className={styles["checkbox"]} id="checkbox" />
      <label className={styles["switch"]} for="checkbox">
        <span className={styles["slider"]}></span>
      </label>
    </div>
  </div>
);

export default Toggle_golden;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_golden = () => (
         <div>
          <p className="component-title">iOS Switch</p>

<div className="container">
  <input type="checkbox" className="checkbox" id="checkbox" />
  <label className="switch" for="checkbox">
    <span className="slider"></span>
  </label>
</div>
        </div>
        );

        export default Toggle_golden;
        
        
         */
}
