import React from "react";
import styles from "./Toggle_copper.module.css";

const Toggle_copper = () => (
  <div>
    <label className={styles["ui-switch"]}>
      <input type="checkbox" />
      <div className={styles["slider"]}>
        <div className={styles["circle"]}></div>
      </div>
    </label>
  </div>
);

export default Toggle_copper;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_copper = () => (
         <div>
          <label className="ui-switch">
  <input type="checkbox" />
  <div className="slider">
    <div className="circle"></div>
  </div>
</label>
        </div>
        );

        export default Toggle_copper;
        
        
         */
}
