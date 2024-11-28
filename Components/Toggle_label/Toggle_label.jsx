import React from "react";
import styles from "./Toggle_label.module.css";

const Toggle_label = () => (
  <div>
    <input className={styles["togglesw"]} type="checkbox" />
  </div>
);

export default Toggle_label;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_label = () => (
         <div>
          <input className="togglesw" type="checkbox" />
        </div>
        );

        export default Toggle_label;
        
        
         */
}
