import React from "react";
import styles from "./Loader_vapor.module.css";

const Loader_vapor = () => (
  <div>
    <div className={styles["loader"]}>loading...</div>
  </div>
);

export default Loader_vapor;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_vapor = () => (
         <div>
          <div className="loader">loading...</div>
        </div>
        );

        export default Loader_vapor;
        
        
         */
}