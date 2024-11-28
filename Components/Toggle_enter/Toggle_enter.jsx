import React from "react";
import styles from "./Toggle_enter.module.css";

const Toggle_enter = () => (
  <div>
    <label className={styles["ui-switch"]}>
      <input type="checkbox" />
      <div className={styles["slider"]}>
        <div className={styles["circle"]}></div>
      </div>
    </label>
  </div>
);

export default Toggle_enter;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_enter = () => (
         <div>
          <label className="ui-switch">
  <input type="checkbox" />
  <div className="slider">
    <div className="circle"></div>
  </div>
</label>
        </div>
        );

        export default Toggle_enter;
        
        
         */
}
