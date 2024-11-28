import React from "react";
import styles from "./Toggle_force.module.css";

const Toggle_force = () => (
  <div>
    <div className={styles["switch"] + styles["demo3"]}>
      <input type="checkbox" />
      <label>
        <i></i>
      </label>
    </div>
  </div>
);

export default Toggle_force;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_force = () => (
         <div>
          <div className="switch demo3">
  <input type="checkbox" />
  <label><i></i></label>
</div>
        </div>
        );

        export default Toggle_force;
        
        
         */
}
