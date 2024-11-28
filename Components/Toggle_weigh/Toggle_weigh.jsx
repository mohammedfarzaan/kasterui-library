import React from "react";
import styles from "./Toggle_weigh.module.css";

const Toggle_weigh = () => (
  <div>
    <label className={styles["switch"]}>
      <input type="checkbox" className={styles["checkbox"]} />
      <div className={styles["slider"]}></div>
    </label>
  </div>
);

export default Toggle_weigh;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_weigh = () => (
         <div>
          <label className="switch">
    <input type="checkbox" className="checkbox" />
    <div className="slider"></div>
</label>
        </div>
        );

        export default Toggle_weigh;
        
        
         */
}
