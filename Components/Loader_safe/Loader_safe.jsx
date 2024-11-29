import React from "react";
import styles from "./Loader_safe.module.css";

const Loader_safe = () => (
  <div>
    <div className={styles["arrow"]}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
);

export default Loader_safe;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_safe = () => (
         <div>
          <div className="arrow">
    <span></span>
    <span></span>
    <span></span>
</div>
        </div>
        );

        export default Loader_safe;
        
        
         */
}
