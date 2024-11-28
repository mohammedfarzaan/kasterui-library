import React from "react";
import styles from "./Toggle_one.module.css";

const Toggle_one = () => (
  <div>
    <input className={styles["switch"]} type="checkbox" checked="true" />
  </div>
);

export default Toggle_one;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_one = () => (
         <div>
          <input className="switch" type="checkbox" checked="true" />
        </div>
        );

        export default Toggle_one;
        
        
         */
}
