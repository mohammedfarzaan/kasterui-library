import React from "react";
import styles from "./Toggle_dust.module.css";

const Toggle_dust = () => (
  <div>
    <label>
      <input type="checkbox" className={styles["toggle-checkbox"]} />
      <div className={styles["toggle-switch"]}></div>
    </label>
  </div>
);

export default Toggle_dust;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_dust = () => (
         <div>
          <label>
  <input type="checkbox" className="toggle-checkbox" />
  <div className="toggle-switch"></div>
</label>
        </div>
        );

        export default Toggle_dust;
        
        
         */
}
