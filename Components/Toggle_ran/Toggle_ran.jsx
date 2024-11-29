import React from "react";
import styles from "./Toggle_ran.module.css";

const Toggle_ran = () => (
  <div>
    <label for="toggle" className={styles["button"]}>
      <input type="checkbox" id="toggle" />
      <span className={styles["slider"]}></span>
    </label>
  </div>
);

export default Toggle_ran;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_ran = () => (
         <div>
          <label for="toggle" className="button">
  <input type="checkbox" id="toggle" />
  <span className="slider"></span>
</label>
        </div>
        );

        export default Toggle_ran;
        
        
         */
}
