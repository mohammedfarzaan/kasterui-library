import React from "react";
import styles from "./Toggle_rays.module.css";

const Toggle_rays = () => (
  <div>
    <input id="checkbox" type="checkbox" />
    <label className={styles["Switch"]} for="checkbox"></label>
  </div>
);

export default Toggle_rays;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_rays = () => (
         <div>
          <input id="checkbox" type="checkbox" />
    <label className="Switch" for="checkbox">
    </label>
        </div>
        );

        export default Toggle_rays;
        
        
         */
}
