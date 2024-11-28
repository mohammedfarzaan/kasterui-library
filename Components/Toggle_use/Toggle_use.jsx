import React from "react";
import styles from "./Toggle_use.module.css";

const Toggle_use = () => (
  <div>
    <input type="checkbox" id="checkboxInput" />
    <label for="checkboxInput" className={styles["toggleSwitch"]}></label>
  </div>
);

export default Toggle_use;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_use = () => (
         <div>
          <input type="checkbox" id="checkboxInput" />
    <label for="checkboxInput" className="toggleSwitch">
    </label>
        </div>
        );

        export default Toggle_use;
        
        
         */
}
