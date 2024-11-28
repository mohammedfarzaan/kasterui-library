import React from "react";
import styles from "./Toggle_not.module.css";

const Toggle_not = () => (
  <div>
    <label className={styles["switch"]}>
      <input type="checkbox" />
      <div className={styles["slider"]}>
        <span>On</span>
        <span>Off</span>
      </div>
    </label>
  </div>
);

export default Toggle_not;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_not = () => (
         <div>
          <label className="switch">
  <input type="checkbox" />
  <div className="slider">
    <span>On</span>
    <span>Off</span>
  </div>
</label>
        </div>
        );

        export default Toggle_not;
        
        
         */
}
