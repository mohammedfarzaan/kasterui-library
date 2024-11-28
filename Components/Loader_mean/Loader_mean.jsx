import React from "react";
import styles from "./Loader_mean.module.css";

const Loader_mean = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["shape"]}></div>
    </div>
  </div>
);

export default Loader_mean;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_mean = () => (
         <div>
          <div className="loader">     
         <div className="shape"></div>
  </div>
        </div>
        );

        export default Loader_mean;
        
        
         */
}
