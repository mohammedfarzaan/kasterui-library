import React from "react";
import styles from "./Loader_glass.module.css";

const Loader_glass = () => (
  <div>
    <svg className={styles["container"]}>
      <rect className={styles["boxes"]}></rect>
    </svg>
  </div>
);

export default Loader_glass;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_glass = () => (
         <div>
          <svg className="container"><rect className="boxes"></rect></svg>
        </div>
        );

        export default Loader_glass;
        
        
         */
}
