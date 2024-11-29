import React from "react";
import styles from "./Toggle_ocean.module.css";

const Toggle_ocean = () => (
  <div>
    <input type="checkbox" className={styles["theme-checkbox"]} />
  </div>
);

export default Toggle_ocean;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_ocean = () => (
         <div>
          <input type="checkbox" className="theme-checkbox" />
        </div>
        );

        export default Toggle_ocean;
        
        
         */
}
