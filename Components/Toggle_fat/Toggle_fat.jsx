import React from "react";
import styles from "./Toggle_fat.module.css";

const Toggle_fat = () => (
  <div>
    <label className={styles["switch"]}>
      <input type="checkbox" checked="" />
    </label>
  </div>
);

export default Toggle_fat;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_fat = () => (
         <div>
          <label className="switch">
  <input type="checkbox" checked="" />
</label>
        </div>
        );

        export default Toggle_fat;
        
        
         */
}
