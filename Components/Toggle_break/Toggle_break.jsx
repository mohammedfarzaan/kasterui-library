import React from "react";
import styles from "./Toggle_break.module.css";

const Toggle_break = () => (
  <div>
    <input id="checkboxInput" type="checkbox" />
    <label className={styles["toggleSwitch"]} for="checkboxInput"></label>
  </div>
);

export default Toggle_break;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_break = () => (
         <div>
          <input id="checkboxInput" type="checkbox" />
    <label className="toggleSwitch" for="checkboxInput">
    </label>
        </div>
        );

        export default Toggle_break;
        
        
         */
}
