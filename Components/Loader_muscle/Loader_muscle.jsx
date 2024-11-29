import React from "react";
import styles from "./Loader_muscle.module.css";

const Loader_muscle = () => (
  <div>
    <div className={styles["superballs"]}>
      <div className={styles["superballs__dot"]}></div>
      <div className={styles["superballs__dot"]}></div>
    </div>
  </div>
);

export default Loader_muscle;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_muscle = () => (
         <div>
          <div className="superballs">
    <div className="superballs__dot"></div>
    <div className="superballs__dot"></div>
</div>
        </div>
        );

        export default Loader_muscle;
        
        
         */
}
