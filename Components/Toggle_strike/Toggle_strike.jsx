import React from "react";
import styles from "./Toggle_strike.module.css";

const Toggle_strike = () => (
  <div>
    <div className={styles["wrapper"]}>
      <input type="checkbox" name="checkbox" className={styles["switch"]} />
    </div>
  </div>
);

export default Toggle_strike;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_strike = () => (
         <div>
          <div className="wrapper">
<input type="checkbox" name="checkbox" className="switch" />
</div>
        </div>
        );

        export default Toggle_strike;
        
        
         */
}
