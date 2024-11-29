import React from "react";
import styles from "./Toggle_roar.module.css";

const Toggle_roar = () => (
  <div>
    <label aria-checked="false" role="switch" className={styles["switch"]}>
      <input type="checkbox" />
      <span className={styles["slider"]}>
        <span className={styles["slider-inner"]}></span>
      </span>
    </label>
  </div>
);

export default Toggle_roar;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_roar = () => (
         <div>
          <label aria-checked="false" role="switch" className="switch">
  <input type="checkbox" />
  <span className="slider">
    <span className="slider-inner"></span>
  </span>
</label>
        </div>
        );

        export default Toggle_roar;
        
        
         */
}
