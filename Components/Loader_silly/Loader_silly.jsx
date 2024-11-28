import React from "react";
import styles from "./Loader_silly.module.css";

const Loader_silly = () => (
  <div>
    <div className={styles["animation"]}>Text writing!</div>
  </div>
);

export default Loader_silly;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_silly = () => (
         <div>
          <div className="animation">Text writing!</div>
        </div>
        );

        export default Loader_silly;
        
        
         */
}
