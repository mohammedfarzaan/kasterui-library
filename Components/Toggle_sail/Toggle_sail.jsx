import React from "react";
import styles from "./Toggle_sail.module.css";

const Toggle_sail = () => (
  <div>
    <label className={styles["toggle-switch"]}>
      <input type="checkbox" />
      <span className={styles["toggle-switch__slider"]}></span>
    </label>
  </div>
);

export default Toggle_sail;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_sail = () => (
         <div>
          <label className="toggle-switch">
  <input type="checkbox" />
  <span className="toggle-switch__slider"></span>
</label>
        </div>
        );

        export default Toggle_sail;
        
        
         */
}
