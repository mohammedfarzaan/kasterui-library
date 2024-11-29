import React from "react";
import styles from "./Toggle_type.module.css";

const Toggle_type = () => (
  <div>
    <label className={styles["switch"]}>
      <input type="checkbox" className={styles["slider-input"]} />
      <span className={styles["slider"]}></span>
    </label>
  </div>
);

export default Toggle_type;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_type = () => (
         <div>
          <label className="switch">
  <input type="checkbox" className="slider-input" />
  <span className="slider"></span>
</label>
        </div>
        );

        export default Toggle_type;
        
        
         */
}
