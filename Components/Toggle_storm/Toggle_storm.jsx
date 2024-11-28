import React from "react";
import styles from "./Toggle_storm.module.css";

const Toggle_storm = () => (
  <div>
    <label className={styles["switch"] + styles["modern-switch"]}>
      <input type="checkbox" />
      <span className={styles["slider"] + styles["round"]}></span>
    </label>
  </div>
);

export default Toggle_storm;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_storm = () => (
         <div>
          <label className="switch modern-switch">
  <input type="checkbox" />
  <span className="slider round"></span>
</label>
        </div>
        );

        export default Toggle_storm;
        
        
         */
}