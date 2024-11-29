import React from "react";
import styles from "./Button_seems.module.css";

const Button_seems = () => (
  <div>
    <div className={styles["nav_bar"]}>
      <div className={styles["bar1"]}></div>
      <div className={styles["bar2"]}></div>
      <div className={styles["bar3_h"]}></div>
      <div className={styles["bar4"]}></div>
    </div>
  </div>
);

export default Button_seems;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_seems = () => (
         <div>
          <div className="nav_bar">
  <div className="bar1"></div>
  <div className="bar2"></div>
  <div className="bar3_h"></div>
  <div className="bar4"></div>
</div>
        </div>
        );

        export default Button_seems;
        
        
         */
}
