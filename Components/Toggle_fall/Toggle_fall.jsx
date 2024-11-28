import React from "react";
import styles from "./Toggle_fall.module.css";

const Toggle_fall = () => (
  <div>
    <label className={styles["switch"]}>
      <input type="checkbox" />
      <span className={styles["slider"]}>
        <div className={styles["circle"]}>
          <div className={styles["divider"]}></div>
        </div>
      </span>
    </label>
  </div>
);

export default Toggle_fall;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_fall = () => (
         <div>
          <label className="switch">
  <input type="checkbox" />
  <span className="slider">
    <div className="circle">
      <div className="divider"></div>
    </div>
  </span>
</label>
        </div>
        );

        export default Toggle_fall;
        
        
         */
}
