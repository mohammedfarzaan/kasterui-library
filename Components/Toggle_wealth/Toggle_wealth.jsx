import React from "react";
import styles from "./Toggle_wealth.module.css";

const Toggle_wealth = () => (
  <div>
    <div className={styles["switch"]}>
      <input type="checkbox" />
      <div className={styles["left"]}></div>
      <div className={styles["right"]}></div>
      <div className={styles["switcher"]}></div>
    </div>
  </div>
);

export default Toggle_wealth;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_wealth = () => (
         <div>
          <div className="switch">
    <input type="checkbox" />
    <div className="left"></div>
    <div className="right"></div>
    <div className="switcher"></div>
</div>
        </div>
        );

        export default Toggle_wealth;
        
        
         */
}
