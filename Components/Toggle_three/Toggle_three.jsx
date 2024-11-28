import React from "react";
import styles from "./Toggle_three.module.css";

const Toggle_three = () => (
  <div>
    <div className={styles["toggle-wrapper"]}>
      <input className={styles["toggle-checkbox"]} type="checkbox" />
      <div className={styles["toggle-container"]}>
        <div className={styles["toggle-button"]}>
          <div className={styles["toggle-button-circles-container"]}>
            <div className={styles["toggle-button-circle"]}></div>
            <div className={styles["toggle-button-circle"]}></div>
            <div className={styles["toggle-button-circle"]}></div>
            <div className={styles["toggle-button-circle"]}></div>
            <div className={styles["toggle-button-circle"]}></div>
            <div className={styles["toggle-button-circle"]}></div>
            <div className={styles["toggle-button-circle"]}></div>
            <div className={styles["toggle-button-circle"]}></div>
            <div className={styles["toggle-button-circle"]}></div>
            <div className={styles["toggle-button-circle"]}></div>
            <div className={styles["toggle-button-circle"]}></div>
            <div className={styles["toggle-button-circle"]}></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Toggle_three;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_three = () => (
         <div>
          <div className="toggle-wrapper">
  <input className="toggle-checkbox" type="checkbox" />
  <div className="toggle-container">  
    <div className="toggle-button">
      <div className="toggle-button-circles-container">
        <div className="toggle-button-circle"></div>
        <div className="toggle-button-circle"></div>
        <div className="toggle-button-circle"></div>
        <div className="toggle-button-circle"></div>
        <div className="toggle-button-circle"></div>
        <div className="toggle-button-circle"></div>
        <div className="toggle-button-circle"></div>
        <div className="toggle-button-circle"></div>
        <div className="toggle-button-circle"></div>
        <div className="toggle-button-circle"></div>
        <div className="toggle-button-circle"></div>
        <div className="toggle-button-circle"></div>
      </div>
    </div>
  </div>
</div>
        </div>
        );

        export default Toggle_three;
        
        
         */
}
