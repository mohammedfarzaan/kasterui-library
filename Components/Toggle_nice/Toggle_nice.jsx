import React from "react";
import styles from "./Toggle_nice.module.css";

const Toggle_nice = () => (
  <div>
    <div className={styles["theme_switcher"]}>
      <label id="switch" className={styles["switch"]}>
        <input type="checkbox" />
        <span className={styles["slider"] + styles["round"]}></span>
      </label>
    </div>
  </div>
);

export default Toggle_nice;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_nice = () => (
         <div>
          <div className="theme_switcher">
  <label id="switch" className="switch">
    <input type="checkbox" /><span className="slider round"></span>
  </label>
</div>
        </div>
        );

        export default Toggle_nice;
        
        
         */
}
