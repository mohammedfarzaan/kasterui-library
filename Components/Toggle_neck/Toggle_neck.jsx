import React from "react";
import styles from "./Toggle_neck.module.css";

const Toggle_neck = () => (
  <div>
    <label className={styles["switch"]}>
      <input type="checkbox" />
      <span className={styles["toggle"]}></span>
    </label>
  </div>
);

export default Toggle_neck;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_neck = () => (
         <div>
          <label className="switch">
  <input type="checkbox" />
  <span className="toggle">
  </span>
</label>
        </div>
        );

        export default Toggle_neck;
        
        
         */
}
