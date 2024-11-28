import React from "react";
import styles from "./Toggle_second.module.css";

const Toggle_second = () => (
  <div>
    <div className={styles["switch"]}>
      <input id="toggle" type="checkbox" />
      <label className={styles["toggle"]} for="toggle">
        <i></i>
      </label>
    </div>
  </div>
);

export default Toggle_second;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_second = () => (
         <div>
          <div className="switch">
  <input id="toggle" type="checkbox" />
  <label className="toggle" for="toggle">
    <i></i>
  </label>
</div>
        </div>
        );

        export default Toggle_second;
        
        
         */
}
