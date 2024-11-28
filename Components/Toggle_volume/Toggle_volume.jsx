import React from "react";
import styles from "./Toggle_volume.module.css";

const Toggle_volume = () => (
  <div>
    <div className={styles["cl-toggle-switch"]}>
      <label className={styles["cl-switch"]}>
        <input type="checkbox" />
        <span></span>
      </label>
    </div>
  </div>
);

export default Toggle_volume;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_volume = () => (
         <div>
          <div className="cl-toggle-switch">
  <label className="cl-switch">
    <input type="checkbox" />
    <span></span>
  </label>
</div>
        </div>
        );

        export default Toggle_volume;
        
        
         */
}