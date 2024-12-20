import React from "react";
import styles from "./Toggle_group.module.css";

const Toggle_group = () => (
  <div>
    <label className={styles["switch"]}>
      <input type="checkbox" />
      <span className={styles["slider"]}></span>
      <div className={styles["battery"]}></div>
    </label>
  </div>
);

export default Toggle_group;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_group = () => (
         <div>
          <label className="switch">
  <input type="checkbox" />
  <span className="slider"></span>
  <div className="battery"></div>
</label>
        </div>
        );

        export default Toggle_group;
        
        
         */
}
