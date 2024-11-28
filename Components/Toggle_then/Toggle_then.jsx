import React from "react";
import styles from "./Toggle_then.module.css";

const Toggle_then = () => (
  <div>
    <label className={styles["switch"]}>
      <div className={styles["toggle-switch"]}>
        <input id="switch" type="checkbox" />
        <label for="switch"></label>
      </div>
    </label>
  </div>
);

export default Toggle_then;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_then = () => (
         <div>
          <label className="switch">
  <div className="toggle-switch">
    <input id="switch" type="checkbox" />
    <label for="switch"></label>
  </div>
</label>
        </div>
        );

        export default Toggle_then;
        
        
         */
}
