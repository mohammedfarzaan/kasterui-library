import React from "react";
import styles from "./Toggle_solar.module.css";

const Toggle_solar = () => (
  <div>
    <div className={styles["switch"]}>
      <input
        role="switch"
        type="checkbox"
        className={styles["switch-input"]}
        id="switchId"
      />
      <label className={styles["switch-input-label"]}></label>
    </div>
  </div>
);

export default Toggle_solar;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_solar = () => (
         <div>
          <div className="switch">
  <input role="switch" type="checkbox" className="switch-input" id="switchId" />
  <label className="switch-input-label"></label>
</div>
        </div>
        );

        export default Toggle_solar;
        
        
         */
}
