import React from "react";
import styles from "./Toggle_load.module.css";

const Toggle_load = () => (
  <div>
    <label className={styles["switch"]} for="">
      <input type="checkbox" />

      <span className={styles["check"]}></span>
    </label>
  </div>
);

export default Toggle_load;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_load = () => (
         <div>
          <label className="switch" for="">
  <input type="checkbox" />

  <span className="check"></span>
</label>
        </div>
        );

        export default Toggle_load;
        
        
         */
}
