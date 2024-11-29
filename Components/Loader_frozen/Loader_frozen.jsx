import React from "react";
import styles from "./Loader_frozen.module.css";

const Loader_frozen = () => (
  <div>
    <div className={styles["loader"] + styles["loader_bubble"]}></div>
  </div>
);

export default Loader_frozen;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_frozen = () => (
         <div>
          <div className="loader loader_bubble"></div>
        </div>
        );

        export default Loader_frozen;
        
        
         */
}
