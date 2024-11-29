import React from "react";
import styles from "./Toggle_stay.module.css";

const Toggle_stay = () => (
  <div>
    <div className={styles["toggle"]}>
      <input type="checkbox" />
      <label></label>
    </div>
  </div>
);

export default Toggle_stay;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_stay = () => (
         <div>
          <div className="toggle">
  <input type="checkbox" />
  <label></label>
</div>
        </div>
        );

        export default Toggle_stay;
        
        
         */
}
