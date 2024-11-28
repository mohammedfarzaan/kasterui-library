import React from "react";
import styles from "./Loader_whole.module.css";

const Loader_whole = () => (
  <div>
    <div className={styles["custom-loader"]}></div>
  </div>
);

export default Loader_whole;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_whole = () => (
         <div>
          <div className="custom-loader"></div>
        </div>
        );

        export default Loader_whole;
        
        
         */
}
