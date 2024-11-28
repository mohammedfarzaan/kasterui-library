import React from "react";
import styles from "./Toggle_knife.module.css";

const Toggle_knife = () => (
  <div>
    <label className={styles["switch"]}>
      <input checked="" type="checkbox" className={styles["toggle"]} />
      <span className={styles["slider"]}></span>
      <span className={styles["card-side"]}></span>
    </label>
  </div>
);

export default Toggle_knife;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_knife = () => (
         <div>
          <label className="switch">
  <input checked="" type="checkbox" className="toggle" />
  <span className="slider"></span>
  <span className="card-side"></span>
</label>
        </div>
        );

        export default Toggle_knife;
        
        
         */
}
