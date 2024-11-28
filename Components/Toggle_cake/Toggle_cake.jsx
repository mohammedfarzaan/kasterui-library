import React from "react";
import styles from "./Toggle_cake.module.css";

const Toggle_cake = () => (
  <div>
    <input type="checkbox" id="checkbox" />
    <label for="checkbox" className={styles["toggle"]}>
      <div className={styles["bars"]} id="bar1"></div>
      <div className={styles["bars"]} id="bar2"></div>
      <div className={styles["bars"]} id="bar3"></div>
    </label>
  </div>
);

export default Toggle_cake;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_cake = () => (
         <div>
          <input type="checkbox" id="checkbox" />
    <label for="checkbox" className="toggle">
        <div className="bars" id="bar1"></div>
        <div className="bars" id="bar2"></div>
        <div className="bars" id="bar3"></div>
    </label>
        </div>
        );

        export default Toggle_cake;
        
        
         */
}
