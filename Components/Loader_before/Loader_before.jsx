import React from "react";
import styles from "./Loader_before.module.css";

const Loader_before = () => (
  <div>
    <div className={styles["line-wobble"]}></div>
  </div>
);

export default Loader_before;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_before = () => (
         <div>
          <div className="line-wobble"></div>
        </div>
        );

        export default Loader_before;
        
        
         */
}
