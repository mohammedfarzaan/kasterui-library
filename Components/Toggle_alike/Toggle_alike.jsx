import React from "react";
import styles from "./Toggle_alike.module.css";

const Toggle_alike = () => (
  <div>
    <label className={styles["switch"]}>
      <input className={styles["checkbox"]} type="checkbox" />
      <span className={styles["slider"]}></span>
    </label>
  </div>
);

export default Toggle_alike;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_alike = () => (
         <div>
          <label className="switch">
  <input className="checkbox" type="checkbox" />
  <span className="slider"></span>
</label>
        </div>
        );

        export default Toggle_alike;
        
        
         */
}
