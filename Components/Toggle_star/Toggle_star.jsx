import React from "react";
import styles from "./Toggle_star.module.css";

const Toggle_star = () => (
  <div>
    <label className={styles["switch"]}>
      <input type="checkbox" className={styles["input__check"]} />
      <span className={styles["slider"]}></span>
    </label>
  </div>
);

export default Toggle_star;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_star = () => (
         <div>
          <label className="switch">
  <input type="checkbox" className="input__check" />
  <span className="slider"></span>
</label>
        </div>
        );

        export default Toggle_star;
        
        
         */
}
