import React from "react";
import styles from "./Toggle_wheel.module.css";

const Toggle_wheel = () => (
  <div>
    <button className={styles["toggle-btn"]}>
      <div className={styles["sun-rays"]}></div>
      <div className={styles["main-circle"]}></div>
    </button>
  </div>
);

export default Toggle_wheel;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_wheel = () => (
         <div>
          <button className="toggle-btn">
  <div className="sun-rays"></div>
  <div className="main-circle"></div>
</button>
        </div>
        );

        export default Toggle_wheel;
        
        
         */
}
