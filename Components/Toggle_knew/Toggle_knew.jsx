import React from "react";
import styles from "./Toggle_knew.module.css";

const Toggle_knew = () => (
  <div>
    <input type="checkbox" id="checkbox" />
    <label for="checkbox" className={styles["toggle"]}>
      <div className={styles["bar"] + styles["bar--top"]}></div>
      <div className={styles["bar"] + styles["bar--middle"]}></div>
      <div className={styles["bar"] + styles["bar--bottom"]}></div>
    </label>
  </div>
);

export default Toggle_knew;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_knew = () => (
         <div>
          <input type="checkbox" id="checkbox" />
<label for="checkbox" className="toggle">
  <div className="bar bar--top"></div>
  <div className="bar bar--middle"></div>
  <div className="bar bar--bottom"></div>
</label>
        </div>
        );

        export default Toggle_knew;
        
        
         */
}
