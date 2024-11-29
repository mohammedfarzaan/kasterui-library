import React from "react";
import styles from "./Toggle_parent.module.css";

const Toggle_parent = () => (
  <div>
    <input type="checkbox" className={styles["l"]} />
  </div>
);

export default Toggle_parent;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_parent = () => (
         <div>
          <input type="checkbox" className="l" />
        </div>
        );

        export default Toggle_parent;
        
        
         */
}
