import React from "react";
import styles from "./Loader_home.module.css";

const Loader_home = () => (
  <div>
    <div className={styles["loading-bar"]}>Loading</div>
  </div>
);

export default Loader_home;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_home = () => (
         <div>
          <div className="loading-bar">
    Loading
</div>
        </div>
        );

        export default Loader_home;
        
        
         */
}
