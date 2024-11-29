import React from "react";
import styles from "./Toggle_oxygen.module.css";

const Toggle_oxygen = () => (
  <div>
    <label className={styles["switch"]}>
      <input type="checkbox" />
      <span className={styles["slider"]}></span>
      <span className={styles["knob"]}></span>
    </label>
  </div>
);

export default Toggle_oxygen;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_oxygen = () => (
         <div>
          <label className="switch">
  <input type="checkbox" />
  <span className="slider"></span>
  <span className="knob"></span>
</label>
        </div>
        );

        export default Toggle_oxygen;
        
        
         */
}
