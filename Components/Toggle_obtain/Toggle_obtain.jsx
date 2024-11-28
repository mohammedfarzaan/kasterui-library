import React from "react";
import styles from "./Toggle_obtain.module.css";

const Toggle_obtain = () => (
  <div>
    <label className={styles["switch"]}>
      <input type="checkbox" />
      <span className={styles["slider"]}></span>
      <span className={styles["text"] + styles["on"]}>On</span>
      <span className={styles["text"] + styles["off"]}>Off</span>
    </label>
  </div>
);

export default Toggle_obtain;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_obtain = () => (
         <div>
          <label className="switch">
  <input type="checkbox" />
  <span className="slider"></span>
  <span className="text on">On</span>
  <span className="text off">Off</span>
</label>
        </div>
        );

        export default Toggle_obtain;
        
        
         */
}
