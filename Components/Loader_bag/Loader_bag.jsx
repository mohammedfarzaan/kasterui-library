import React from "react";
import styles from "./Loader_bag.module.css";

const Loader_bag = () => (
  <div>
    <div className={styles["loader"] + styles["loader_bubble"]}></div>
  </div>
);

export default Loader_bag;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_bag = () => (
         <div>
          <div className="loader loader_bubble"></div>
        </div>
        );

        export default Loader_bag;
        
        
         */
}
