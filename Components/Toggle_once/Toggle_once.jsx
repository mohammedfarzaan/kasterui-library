import React from "react";
import styles from "./Toggle_once.module.css";

const Toggle_once = () => (
  <div>
    <div className={styles["toggle-container"]}>
      <input className={styles["toggle-input"]} type="checkbox" />
      <div className={styles["toggle-handle-wrapper"]}>
        <div className={styles["toggle-handle"]}>
          <div className={styles["toggle-handle-knob"]}></div>
          <div className={styles["toggle-handle-bar-wrapper"]}>
            <div className={styles["toggle-handle-bar"]}></div>
          </div>
        </div>
      </div>
      <div className={styles["toggle-base"]}>
        <div className={styles["toggle-base-inside"]}></div>
      </div>
    </div>
  </div>
);

export default Toggle_once;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_once = () => (
         <div>
          <div className="toggle-container">
  <input className="toggle-input" type="checkbox" />
  <div className="toggle-handle-wrapper">
    <div className="toggle-handle">
      <div className="toggle-handle-knob"></div>
      <div className="toggle-handle-bar-wrapper">
        <div className="toggle-handle-bar"></div>
      </div>
    </div>
  </div>
  <div className="toggle-base">
    <div className="toggle-base-inside"></div>
  </div>
</div>
        </div>
        );

        export default Toggle_once;
        
        
         */
}
