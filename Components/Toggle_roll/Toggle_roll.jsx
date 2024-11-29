import React from "react";
import styles from "./Toggle_roll.module.css";

const Toggle_roll = () => (
  <div>
    <input id="checkbox" type="checkbox" />
    <label className={styles["toggle"]} for="checkbox">
      <div id="bar1" className={styles["bars"]}></div>
      <div id="bar2" className={styles["bars"]}></div>
      <div id="bar3" className={styles["bars"]}></div>
    </label>
  </div>
);

export default Toggle_roll;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_roll = () => (
         <div>
          <input id="checkbox" type="checkbox" />
    <label className="toggle" for="checkbox">
        <div id="bar1" className="bars"></div>
        <div id="bar2" className="bars"></div>
        <div id="bar3" className="bars"></div>
    </label>
        </div>
        );

        export default Toggle_roll;
        
        
         */
}
