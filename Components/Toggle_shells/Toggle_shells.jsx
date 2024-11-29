import React from "react";
import styles from "./Toggle_shells.module.css";

const Toggle_shells = () => (
  <div>
    <label className={styles["switch"]}>
      <div className={styles["toggle-switch"]}>
        <input id="switch" type="checkbox" />
        <label for="switch"></label>
      </div>
    </label>
  </div>
);

export default Toggle_shells;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_shells = () => (
         <div>
          <label className="switch">
  <div className="toggle-switch">
    <input id="switch" type="checkbox" />
    <label for="switch"></label>
  </div>
</label>
        </div>
        );

        export default Toggle_shells;
        
        
         */
}
