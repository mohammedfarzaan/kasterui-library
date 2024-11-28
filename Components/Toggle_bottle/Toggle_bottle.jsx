import React from "react";
import styles from "./Toggle_bottle.module.css";

const Toggle_bottle = () => (
  <div>
    <label className={styles["switch"]}>
      <input className={styles["toggle"]} type="checkbox" />
      <span className={styles["slider"]}></span>
      <span className={styles["card-side"]}></span>
    </label>
  </div>
);

export default Toggle_bottle;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_bottle = () => (
         <div>
          <label className="switch">
  <input className="toggle" type="checkbox" />
  <span className="slider"></span>
  <span className="card-side"></span>
</label>
        </div>
        );

        export default Toggle_bottle;
        
        
         */
}
