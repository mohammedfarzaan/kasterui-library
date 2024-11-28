import React from "react";
import styles from "./Loader_bean.module.css";

const Loader_bean = () => (
  <div>
    <div className={styles["loader"]}></div>
  </div>
);

export default Loader_bean;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_bean = () => (
         <div>
          <div className="loader"></div>
        </div>
        );

        export default Loader_bean;
        
        
         */
}