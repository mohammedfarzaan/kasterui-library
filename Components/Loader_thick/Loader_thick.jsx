import React from "react";
import styles from "./Loader_thick.module.css";

const Loader_thick = () => (
  <div>
    <div className={styles["triangle"]}></div>
    <div className={styles["triangle-shadow"]}></div>
  </div>
);

export default Loader_thick;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_thick = () => (
         <div>
          <div className="triangle"></div>
<div className="triangle-shadow"></div>
        </div>
        );

        export default Loader_thick;
        
        
         */
}
