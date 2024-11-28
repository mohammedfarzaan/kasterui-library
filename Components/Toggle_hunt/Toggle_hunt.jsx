import React from "react";
import styles from "./Toggle_hunt.module.css";

const Toggle_hunt = () => (
  <div>
    <div className={styles["container"]}>
      <label className={styles["switch"]}>
        <input type="checkbox" />
        <span className={styles["slider"]}></span>
      </label>
    </div>
  </div>
);

export default Toggle_hunt;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_hunt = () => (
         <div>
          <div className="container">
  <label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label>
</div>
        </div>
        );

        export default Toggle_hunt;
        
        
         */
}
