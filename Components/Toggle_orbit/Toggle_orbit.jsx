import React from "react";
import styles from "./Toggle_orbit.module.css";

const Toggle_orbit = () => (
  <div>
    <div className={styles["switch"]}>
      <input type="checkbox" />
      <div>
        <span className={styles["line-1"]}></span>
        <span className={styles["line-2"]}></span>
        <span className={styles["line-3"]}></span>
      </div>
    </div>
  </div>
);

export default Toggle_orbit;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_orbit = () => (
         <div>
          <div className="switch">
    <input type="checkbox" />
    <div>
        <span className="line-1"></span>
        <span className="line-2"></span>
        <span className="line-3"></span>
    </div>
</div>
        </div>
        );

        export default Toggle_orbit;
        
        
         */
}
