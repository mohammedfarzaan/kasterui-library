import React from "react";
import styles from "./Toggle_income.module.css";

const Toggle_income = () => (
  <div>
    <label>
      <input className={styles["toggle-checkbox"]} type="checkbox" />
      <div className={styles["toggle-slot"]}>
        <div className={styles["sun-icon-wrapper"]}>
          <div
            className={styles["iconify"] + styles["sun-icon"]}
            data-icon="feather-sun"
            data-inline="false"
          ></div>
        </div>
        <div className={styles["toggle-button"]}></div>
        <div className={styles["moon-icon-wrapper"]}>
          <div
            className={styles["iconify"] + styles["moon-icon"]}
            data-icon="feather-moon"
            data-inline="false"
          ></div>
        </div>
      </div>
    </label>
  </div>
);

export default Toggle_income;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_income = () => (
         <div>
          <label>
  <input className="toggle-checkbox" type="checkbox" />
  <div className="toggle-slot">
    <div className="sun-icon-wrapper">
      <div className="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
    </div>
    <div className="toggle-button"></div>
    <div className="moon-icon-wrapper">
      <div className="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
    </div>
  </div>
</label>
        </div>
        );

        export default Toggle_income;
        
        
         */
}
