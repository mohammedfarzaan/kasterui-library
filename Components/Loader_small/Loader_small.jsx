import React from "react";
import styles from "./Loader_small.module.css";

const Loader_small = () => (
  <div>
    <div className={styles["loader"]}></div>
  </div>
);

export default Loader_small;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_small = () => (
         <div>
          <div className="loader"></div>
        </div>
        );

        export default Loader_small;
        
        
         */
}
