import React from "react";
import styles from "./Toggle_taste.module.css";

const Toggle_taste = () => (
  <div>
    <div className={styles["toggle-switch"]}>
      <input className={styles["toggle-input"]} id="toggle" type="checkbox" />
      <label className={styles["toggle-label"]} for="toggle"></label>
    </div>
  </div>
);

export default Toggle_taste;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_taste = () => (
         <div>
          <div className="toggle-switch">
  <input className="toggle-input" id="toggle" type="checkbox" />
  <label className="toggle-label" for="toggle"></label>
</div>
        </div>
        );

        export default Toggle_taste;
        
        
         */
}
