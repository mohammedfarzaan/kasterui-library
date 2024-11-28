import React from "react";
import styles from "./Toggle_solid.module.css";

const Toggle_solid = () => (
  <div>
    <label className={styles["toggle-switch"]}>
      <input type="checkbox" />
      <div className={styles["toggle-switch-background"]}>
        <div className={styles["toggle-switch-handle"]}></div>
      </div>
    </label>
  </div>
);

export default Toggle_solid;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_solid = () => (
         <div>
          <label className="toggle-switch">
  <input type="checkbox" />
  <div className="toggle-switch-background">
    <div className="toggle-switch-handle"></div>
  </div>
</label>
        </div>
        );

        export default Toggle_solid;
        
        
         */
}
